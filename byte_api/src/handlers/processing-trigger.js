/**
 * processing-trigger.js
 * 
 * Handler for the "Processing" milestone webhook.
 * 
 * Orchestrates the entire flow:
 * 1. Parse loan number from GHL opportunity name
 * 2. Fetch data from BytePro (title company, borrower, CC contacts)
 * 3. Send lender order email TO title company, CC internal team
 * 4. Send processor reminder email TO processor
 * 5. Update GHL custom fields (mock for now)
 */
const { getProcessingWorkflowData } = require('../loan-data');
const { sendEmail } = require('../email-service');
const { buildLenderOrderEmail } = require('../templates/lender-order');
const { buildProcessorReminderEmail } = require('../templates/processor-reminder');

/**
 * Parse BytePro loan number from GHL opportunity name.
 * Format: "Loan - PHM0124083974" → "PHM0124083974"
 * 
 * @param {string} opportunityName
 * @returns {string|null}
 */
function parseLoanNumber(opportunityName) {
  if (!opportunityName) return null;

  // Match "Loan - PHMxxxxxxxxxx" or just raw "PHMxxxxxxxxxx"
  const match = opportunityName.match(/\b(PHM\d{10})\b/i);
  return match ? match[1] : null;
}

/**
 * Main handler: process the "moved to Processing" event.
 * 
 * @param {Object} webhookData - GHL webhook payload
 * @returns {Promise<{success: boolean, message: string, details: Object}>}
 */
async function handleProcessingTrigger(webhookData) {
  const startTime = Date.now();
  console.log('\n' + '═'.repeat(60));
  console.log('🚀 PROCESSING TRIGGER ACTIVATED');
  console.log('═'.repeat(60));

  // 1. Parse loan number
  const oppName = webhookData.name || webhookData.title || webhookData.opportunity_name || '';
  const loanNumber = parseLoanNumber(oppName);

  if (!loanNumber) {
    const msg = `Could not parse loan number from opportunity name: "${oppName}"`;
    console.error(`❌ ${msg}`);
    return { success: false, message: msg, details: {} };
  }

  console.log(`📋 Loan Number: ${loanNumber} (from "${oppName}")`);

  // 2. Fetch all data from BytePro
  let workflowData;
  try {
    workflowData = await getProcessingWorkflowData(loanNumber, webhookData);
  } catch (err) {
    const msg = `BytePro fetch failed: ${err.message}`;
    console.error(`❌ ${msg}`);
    return { success: false, message: msg, details: {} };
  }

  // 3. Check if title company exists
  if (!workflowData.titleCompany?.EMail) {
    const msg = `No title company email found for loan ${loanNumber}. Title company may not be assigned yet.`;
    console.warn(`⚠️ ${msg}`);
    return { success: false, message: msg, details: workflowData };
  }

  // 4. Build CC list
  // Start with BytePro CC recipients (processor, LO, assistant)
  const ccEmails = workflowData.ccRecipients.map(c => c.email);

  // Also add any CC emails from the webhook data (GHL custom fields)
  const extraCCs = webhookData.customData?.cc_emails
    || webhookData.customData?.ccEmails
    || '';
  if (extraCCs) {
    const parsed = extraCCs.split(/[,;]/).map(e => e.trim()).filter(Boolean);
    ccEmails.push(...parsed);
  }

  // Deduplicate CCs
  const uniqueCCs = [...new Set(ccEmails.map(e => e.toLowerCase()))];

  console.log(`\n📧 CC Recipients (${uniqueCCs.length}): ${uniqueCCs.join(', ') || '(none)'}`);

  // 5. Send lender order email
  const lenderEmail = buildLenderOrderEmail(workflowData);
  const lenderResult = await sendEmail({
    to: workflowData.titleCompany.EMail,
    cc: uniqueCCs,
    subject: lenderEmail.subject,
    html: lenderEmail.html,
    text: lenderEmail.text,
  });

  // 6. Send processor reminder (if we have processor email)
  let reminderResult = { success: false, message: 'No processor email found' };
  const processorCC = workflowData.ccRecipients.find(c => c.role === 'Loan Processor');

  if (processorCC?.email) {
    const reminderEmail = buildProcessorReminderEmail(workflowData);
    reminderResult = await sendEmail({
      to: processorCC.email,
      subject: reminderEmail.subject,
      html: reminderEmail.html,
      text: reminderEmail.text,
    });
  } else {
    console.log('\n⚠️ No Loan Processor email found in BytePro — skipping reminder email');
    console.log('   (Processor email can also be sent from a GHL workflow directly)');
  }

  // 7. GHL custom field updates (mock for now)
  console.log('\n📝 [MOCK] Would update GHL custom fields:');
  console.log(`   title_company_name:  ${workflowData.titleCompany.Company}`);
  console.log(`   title_company_email: ${workflowData.titleCompany.EMail}`);
  console.log(`   title_company_phone: ${workflowData.titleCompany.WorkPhone || '(none)'}`);

  const elapsed = Date.now() - startTime;
  console.log(`\n✅ Processing trigger completed in ${elapsed}ms`);
  console.log('═'.repeat(60) + '\n');

  return {
    success: true,
    message: `Lender order sent to ${workflowData.titleCompany.EMail}`,
    details: {
      loanNumber,
      titleCompany: workflowData.titleCompany.Company,
      titleEmail: workflowData.titleCompany.EMail,
      borrower: workflowData.borrower.fullName,
      loanAmount: workflowData.loanAmount,
      ccRecipients: uniqueCCs,
      lenderEmailSent: lenderResult.success,
      reminderSent: reminderResult.success,
      elapsed: `${elapsed}ms`,
    },
  };
}

module.exports = { handleProcessingTrigger, parseLoanNumber };
