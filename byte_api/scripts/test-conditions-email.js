/**
 * test-conditions-email.js
 * 
 * Enhanced PTD conditions email:
 * - Outlook-compatible HTML (table-based layout, no CSS gradients)
 * - Borrower name + contact info header
 * - Processor + LO team contacts
 * - Subject: "LastName LoanNumber - Condition Update"
 * - PDF attachment
 * - Excludes 7 canned/auto-fulfilled condition numbers
 * - Filters: PTD only, NOT cleared
 * - Sorts: BRW (NeededFromBorrower=Yes) conditions first
 */
require('dotenv').config();
var client = require('../src/client');
var emailService = require('../src/email-service');
var puppeteer = require('puppeteer');

var FILE_NUMBER = 'PHM0124084451';

// Canned conditions to exclude — auto-fulfilled when appraisal/title reports come in
var EXCLUDED_CONDITION_NOS = [
  '410',                        // 4506C fully executed (part of another condition)
  '606', '607', '608', '610',   // PROP: appraisal-related auto-fulfills
  '705', '713', '720',          // TITLE: title-related auto-fulfills
];

// ── Fetch borrower info ────────────────────────────────────────────
async function fetchBorrower(fileNumber) {
  console.log('Fetching borrower info...');
  var result = await client.search([
    { FieldName: 'FileName', TableName: 'FileData', FieldFilter: { FilterValue1: fileNumber, FilterType: 1 } },
    { FieldName: 'FirstName', TableName: 'Borrower' },
    { FieldName: 'LastName', TableName: 'Borrower' },
    { FieldName: 'Email', TableName: 'Borrower' },
    { FieldName: 'MobilePhone', TableName: 'Borrower' },
    { FieldName: 'HomePhone', TableName: 'Borrower' },
  ], { MaxItems: 2 });

  if (!result || !result.SearchRows || result.SearchRows.length === 0) {
    return { firstName: '', lastName: '', email: '', phone: '' };
  }

  var v = result.SearchRows[0].SearchValues.map(function(x) { return x.FieldValue; });
  var phone = v[4] || v[5] || '';
  if (phone && phone.length === 10) {
    phone = '(' + phone.substring(0, 3) + ') ' + phone.substring(3, 6) + '-' + phone.substring(6);
  }

  var borrower = { firstName: v[1] || '', lastName: v[2] || '', email: v[3] || '', phone: phone };
  console.log('   Borrower: ' + borrower.firstName + ' ' + borrower.lastName);
  return borrower;
}

// ── Fetch team contacts (processor, LO) ────────────────────────────
async function fetchTeam(fileNumber) {
  console.log('Fetching team contacts...');
  var result = await client.search([
    { FieldName: 'FileName', TableName: 'FileData', FieldFilter: { FilterValue1: fileNumber, FilterType: 1 } },
    { FieldName: 'FullName', TableName: 'Parties' },
    { FieldName: 'Title', TableName: 'Parties' },
    { FieldName: 'EMail', TableName: 'Parties' },
    { FieldName: 'WorkPhone', TableName: 'Parties' },
  ], { MaxItems: 81 });

  var team = { processors: [], loanOfficers: [] };
  if (!result || !result.SearchRows) return team;

  result.SearchRows.forEach(function(row) {
    var v = row.SearchValues.map(function(x) { return x.FieldValue; });
    var title = (v[2] || '').toLowerCase();
    var phone = v[4] || '';
    if (phone && phone.length === 10) {
      phone = '(' + phone.substring(0, 3) + ') ' + phone.substring(3, 6) + '-' + phone.substring(6);
    }
    var person = { name: v[1] || '', title: v[2] || '', email: v[3] || '', phone: phone };

    if (title.indexOf('processor') !== -1) {
      team.processors.push(person);
    } else if (title === 'loan officer' || title === 'loan officer assistant' || title === 'loa') {
      team.loanOfficers.push(person);
    }
  });

  console.log('   Processors: ' + team.processors.map(function(p) { return p.name; }).join(', '));
  console.log('   LOs: ' + team.loanOfficers.map(function(p) { return p.name; }).join(', '));
  return team;
}

// ── Fetch PTD conditions ───────────────────────────────────────────
async function fetchPTDConditions(fileNumber) {
  console.log('Fetching conditions...');

  var result = await client.search([
    { FieldName: 'FileName', TableName: 'FileData', FieldFilter: { FilterValue1: fileNumber, FilterType: 1 } },
    { FieldName: 'DescriptionTemplate', TableName: 'Condition' },
    { FieldName: 'ConditionStage', TableName: 'Condition' },
    { FieldName: 'NeededFromBorrower', TableName: 'Condition' },
    { FieldName: 'ClearedDate', TableName: 'Condition' },
    { FieldName: 'RequestedDate', TableName: 'Condition' },
    { FieldName: 'ReceivedDate', TableName: 'Condition' },
    { FieldName: 'ConditionNo', TableName: 'Condition' },
  ], { MaxItems: 200 });

  if (!result || !result.SearchRows) {
    console.log('No data returned.');
    return [];
  }

  console.log('   Total rows: ' + result.SearchRows.length);

  var conditions = [];
  var stats = { cleared: 0, nonPtd: 0, excluded: 0 };

  result.SearchRows.forEach(function(row) {
    var v = row.SearchValues.map(function(x) { return x.FieldValue; });
    var stage = v[2] || '';
    var clearedDate = v[4] || '';
    var condNo = v[7] || '';

    if (stage.toLowerCase().indexOf('prior to docs') === -1) { stats.nonPtd++; return; }
    if (clearedDate && clearedDate !== '') { stats.cleared++; return; }
    if (EXCLUDED_CONDITION_NOS.indexOf(condNo) !== -1) { stats.excluded++; return; }

    conditions.push({
      description: v[1] || '',
      stage: stage,
      isBorrower: (v[3] || '').toLowerCase() === 'yes',
      requestedDate: v[5] || '',
      receivedDate: v[6] || '',
      condNo: condNo,
    });
  });

  conditions.sort(function(a, b) {
    if (a.isBorrower && !b.isBorrower) return -1;
    if (!a.isBorrower && b.isBorrower) return 1;
    return 0;
  });

  console.log('   Excluded: ' + stats.cleared + ' cleared, ' + stats.nonPtd + ' non-PTD, ' + stats.excluded + ' canned');
  console.log('   Open PTD conditions: ' + conditions.length);
  return conditions;
}

// ── Outlook-compatible HTML builder ────────────────────────────────
function checkMark(dateVal) {
  if (dateVal && dateVal !== '') {
    // Format date to short readable form (e.g. "3/25/26")
    var d = new Date(dateVal);
    var formatted = !isNaN(d.getTime())
      ? (d.getMonth() + 1) + '/' + d.getDate() + '/' + String(d.getFullYear()).slice(-2)
      : dateVal;
    return '<span style="color:#059669; font-size:12px;">&#10003; ' + formatted + '</span>';
  }
  return '<span style="color:#cccccc;">&#8212;</span>';
}

function buildTeamRow(person) {
  var parts = [person.name];
  if (person.phone) parts.push(person.phone);
  if (person.email) parts.push(person.email);
  return parts.join(' &nbsp;|&nbsp; ');
}

function buildEmailHtml(fileNumber, borrower, conditions, team) {
  var brwCount = conditions.filter(function(c) { return c.isBorrower; }).length;

  // Borrower contact line
  var contactParts = [];
  if (borrower.phone) contactParts.push(borrower.phone);
  if (borrower.email) contactParts.push(borrower.email);
  var contactLine = contactParts.join(' &nbsp;|&nbsp; ');

  // Team lines
  var teamRows = '';
  team.processors.forEach(function(p) {
    teamRows += '<tr><td style="padding:2px 0; color:#93c5fd; font-size:12px;">Processor: ' + buildTeamRow(p) + '</td></tr>';
  });
  team.loanOfficers.forEach(function(p) {
    teamRows += '<tr><td style="padding:2px 0; color:#93c5fd; font-size:12px;">Loan Officer: ' + buildTeamRow(p) + '</td></tr>';
  });

  // Condition rows
  var tableRows = '';
  conditions.forEach(function(c, idx) {
    var bgColor = c.isBorrower ? '#fef3c7' : (idx % 2 === 0 ? '#ffffff' : '#f9fafb');
    var brwCell = c.isBorrower
      ? '<span style="background-color:#f59e0b; color:#ffffff; font-size:10px; padding:2px 6px; font-weight:bold;">BRW</span>'
      : '';

    tableRows += '<tr>'
      + '<td style="padding:8px 10px; border-bottom:1px solid #e5e7eb; background-color:' + bgColor + ';">' + (c.description || '') + '</td>'
      + '<td style="padding:8px 10px; border-bottom:1px solid #e5e7eb; background-color:' + bgColor + '; text-align:center; white-space:nowrap;">' + (c.stage || '') + '</td>'
      + '<td style="padding:8px 10px; border-bottom:1px solid #e5e7eb; background-color:' + bgColor + '; text-align:center;">' + brwCell + '</td>'
      + '<td style="padding:8px 10px; border-bottom:1px solid #e5e7eb; background-color:' + bgColor + '; text-align:center;">' + checkMark(c.requestedDate) + '</td>'
      + '<td style="padding:8px 10px; border-bottom:1px solid #e5e7eb; background-color:' + bgColor + '; text-align:center;">' + checkMark(c.receivedDate) + '</td>'
      + '</tr>';
  });

  // Full Outlook-compatible HTML — table-based, no CSS gradients, no border-radius
  var html = '<!DOCTYPE html>'
    + '<html xmlns="http://www.w3.org/1999/xhtml">'
    + '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">'
    + '<title>Condition Update</title></head>'
    + '<body style="margin:0; padding:0; background-color:#f3f4f6; font-family:Segoe UI, Tahoma, Arial, sans-serif;">'
    + '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f3f4f6;">'
    + '<tr><td align="center" style="padding:20px 10px;">'

    // Container
    + '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="800" style="max-width:800px; width:100%;">'

    // ── HEADER ──
    + '<tr><td style="background-color:#1e3a5f; padding:24px 28px;">'
    + '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">'
    + '<tr><td>'
    + '<h1 style="color:#ffffff; margin:0; font-size:20px; font-weight:bold; font-family:Segoe UI, Tahoma, Arial, sans-serif;">Prior To Docs &#8212; Open Conditions</h1>'
    + '<p style="color:#93c5fd; margin:6px 0 0; font-size:14px; font-family:Segoe UI, Tahoma, Arial, sans-serif;">Loan File: <strong style="color:#ffffff;">' + fileNumber + '</strong></p>'
    + '</td></tr>'

    // Borrower info
    + '<tr><td style="padding-top:12px; border-top:1px solid #2d5a8e;">'
    + '<p style="color:#ffffff; margin:0; font-size:16px; font-weight:bold; font-family:Segoe UI, Tahoma, Arial, sans-serif;">' + borrower.firstName + ' ' + borrower.lastName + '</p>'
    + (contactLine ? '<p style="color:#93c5fd; margin:4px 0 0; font-size:13px; font-family:Segoe UI, Tahoma, Arial, sans-serif;">' + contactLine + '</p>' : '')
    + '</td></tr>'

    // Team contacts
    + (teamRows ? '<tr><td style="padding-top:8px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0">' + teamRows + '</table></td></tr>' : '')

    + '</table>'
    + '</td></tr>'

    // ── BODY ──
    + '<tr><td style="background-color:#ffffff; padding:24px 28px; border:1px solid #e5e7eb; border-top:none;">'

    // Summary
    + '<p style="color:#374151; font-size:14px; margin:0 0 4px; font-family:Segoe UI, Tahoma, Arial, sans-serif;"><strong>' + conditions.length + '</strong> outstanding condition' + (conditions.length !== 1 ? 's' : '') + '</p>'
    + (brwCount > 0 ? '<p style="color:#92400e; font-size:13px; margin:0 0 16px; font-family:Segoe UI, Tahoma, Arial, sans-serif;"><span style="background-color:#f59e0b; color:#ffffff; font-size:10px; padding:2px 6px; font-weight:bold;">BRW</span> = Borrower responsible (' + brwCount + ' item' + (brwCount !== 1 ? 's' : '') + ', sorted to top)</p>' : '')

    // Conditions table
    + '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size:13px; color:#374151; font-family:Segoe UI, Tahoma, Arial, sans-serif;">'
    + '<tr style="background-color:#f3f4f6;">'
    + '<td style="padding:10px 10px; font-weight:bold; border-bottom:2px solid #d1d5db;">Description</td>'
    + '<td style="padding:10px 10px; font-weight:bold; border-bottom:2px solid #d1d5db; text-align:center;">Stage</td>'
    + '<td style="padding:10px 10px; font-weight:bold; border-bottom:2px solid #d1d5db; text-align:center;">BRW</td>'
    + '<td style="padding:10px 10px; font-weight:bold; border-bottom:2px solid #d1d5db; text-align:center;">Requested</td>'
    + '<td style="padding:10px 10px; font-weight:bold; border-bottom:2px solid #d1d5db; text-align:center;">Received</td>'
    + '</tr>'
    + tableRows
    + '</table>'

    // Footer
    + '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:20px; border-top:1px solid #e5e7eb;">'
    + '<tr><td style="padding-top:12px;">'
    + '<p style="color:#9ca3af; font-size:11px; margin:0; font-family:Segoe UI, Tahoma, Arial, sans-serif;">Priority Home Lending &#8212; Byte API Automation &bull; ' + new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }) + '</p>'
    + '</td></tr></table>'

    + '</td></tr>'
    + '</table>'  // end container
    + '</td></tr></table>'  // end wrapper
    + '</body></html>';

  return html;
}

// ── PDF generation ─────────────────────────────────────────────────
async function generatePdf(html) {
  console.log('Generating PDF...');
  var browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  var page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  var pdfBuffer = await page.pdf({
    format: 'Letter',
    printBackground: true,
    margin: { top: '0.5in', bottom: '0.5in', left: '0.4in', right: '0.4in' },
  });
  await browser.close();
  console.log('   PDF generated: ' + Math.round(pdfBuffer.length / 1024) + ' KB');
  return pdfBuffer;
}

// ── Main ───────────────────────────────────────────────────────────
(async function() {
  try {
    var borrower = await fetchBorrower(FILE_NUMBER);
    var team = await fetchTeam(FILE_NUMBER);
    var conditions = await fetchPTDConditions(FILE_NUMBER);

    if (conditions.length === 0) {
      console.log('No open PTD conditions — nothing to send.');
      return;
    }

    var emailHtml = buildEmailHtml(FILE_NUMBER, borrower, conditions, team);
    var pdfBuffer = await generatePdf(emailHtml);

    var lastName = borrower.lastName || 'Borrower';
    var subject = lastName + ' ' + FILE_NUMBER + ' - Condition Update';

    // Build recipient list from all team members (single email, everyone can Reply All)
    var allTeam = [].concat(team.processors, team.loanOfficers);
    var recipients = allTeam
      .map(function(p) { return p.email; })
      .filter(function(e) { return e && e !== ''; });

    // Deduplicate
    recipients = recipients.filter(function(e, i, arr) { return arr.indexOf(e) === i; });

    if (recipients.length === 0) {
      console.log('⚠️  No team emails found — cannot send.');
      return;
    }

    var toField = recipients.join(', ');
    console.log('\n📬 Recipients: ' + toField);

    var result = await emailService.sendEmail({
      to: toField,
      subject: subject,
      html: emailHtml,
      attachments: [
        {
          filename: FILE_NUMBER + '_PTD_Conditions.pdf',
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    });

    if (result.success) {
      console.log('\n✅ Email sent to ' + recipients.length + ' team member(s)');
      recipients.forEach(function(r) { console.log('   → ' + r); });
      console.log('   Subject: ' + subject);
      console.log('   Attachment: ' + FILE_NUMBER + '_PTD_Conditions.pdf');
    } else {
      console.log('Email failed: ' + result.error);
    }
  } catch (err) {
    console.error('Fatal:', err.message);
    console.error(err.stack);
  }
})();
