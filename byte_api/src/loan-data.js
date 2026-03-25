/**
 * loan-data.js
 * 
 * High-level functions to fetch all the data needed for the workflow:
 *   - Title Company (for the lender order email recipient)
 *   - CC contacts: Loan Processor, Loan Officer, LO Assistant (from BytePro)
 *   - Borrower info: names, loan number
 *   - Loan details: amount (from Borrower table)
 * 
 * All functions take a BytePro loan number (e.g., "PHM0124084419")
 * and return structured data ready for the email templates.
 */
const { search } = require('./client');
const { getAllParties, getTitleCompany, PARTY_FIELDS } = require('./loan-parties');

/**
 * BytePro Parties are returned in a fixed ordinal order matching the UI.
 * These are the party-type labels we need and their keyword matchers.
 * We match on the Company field name since party type isn't filterable.
 */
const CC_ROLE_MATCHERS = {
  loanProcessor: {
    label: 'Loan Processor',
    // Matches by ordinal position or by company/name patterns
    test: (party, allParties) => {
      // First try: check if the party has a name/email and is from the same company
      // as internal staff but with "processor" in title or description
      const titleMatch = party.Title && /process/i.test(party.Title);
      return titleMatch;
    }
  },
  loanOfficer: {
    label: 'Loan Officer',
    test: (party) => {
      const titleMatch = party.Title && /loan\s*officer|originator/i.test(party.Title);
      return titleMatch;
    }
  },
  loAssistant: {
    label: 'LO Assistant',
    test: (party) => {
      const titleMatch = party.Title && /assistant/i.test(party.Title);
      return titleMatch;
    }
  }
};

/**
 * Fetch borrower + co-borrower names from BytePro.
 * 
 * Both use the same "Borrower" table (confirmed via BytePro field info).
 * Requesting MaxItems: 2 — row 1 = primary borrower, row 2 = co-borrower.
 * This is ONE API call for both.
 * 
 * @param {string} loanNumber
 * @returns {Promise<Object>} Borrower info with co-borrower
 */
async function getBorrowerInfo(loanNumber) {
  const result = await search([
    { FieldName: 'FileName', TableName: 'FileData',
      FieldFilter: { FilterValue1: loanNumber, FilterType: 1 } },
    { FieldName: 'FirstName', TableName: 'Borrower' },
    { FieldName: 'LastName', TableName: 'Borrower' },
    { FieldName: 'Email', TableName: 'Borrower' },
  ], { MaxItems: 2 });

  // Parse primary borrower (row 1)
  let firstName = '', lastName = '', email = '';
  if (result?.SearchRows?.length >= 1) {
    const vals = result.SearchRows[0].SearchValues.map(v => v.FieldValue || '');
    firstName = vals[1];
    lastName = vals[2];
    email = vals[3];
  }
  const borrowerFull = `${firstName} ${lastName}`.trim();

  // Parse co-borrower (row 2, if present)
  let coFirst = '', coLast = '', coEmail = '';
  if (result?.SearchRows?.length >= 2) {
    const coVals = result.SearchRows[1].SearchValues.map(v => v.FieldValue || '');
    coFirst = coVals[1];
    coLast = coVals[2];
    coEmail = coVals[3];
  }
  const coBorrowerFull = `${coFirst} ${coLast}`.trim();

  // Build display: "Dale Fulcher" or "Dale Fulcher & Michele Fulcher"
  const allBorrowers = coBorrowerFull
    ? `${borrowerFull} & ${coBorrowerFull}`
    : borrowerFull;

  return {
    loanNumber,
    firstName,
    lastName,
    email,
    fullName: borrowerFull,
    coBorrowerFirstName: coFirst,
    coBorrowerLastName: coLast,
    coBorrowerEmail: coEmail,
    coBorrowerName: coBorrowerFull,
    allBorrowers,
  };
}

/**
 * Parse loan amount from GHL webhook custom data.
 * 
 * GHL already has the loan amount in custom fields (same field
 * used by commission_app: "loan_with_mipfunding_fee").
 * No need to call BytePro for this — it's in the webhook payload.
 * 
 * @param {Object} webhookData - GHL webhook payload
 * @returns {number}
 */
function parseLoanAmountFromWebhook(webhookData) {
  // Check customData first (GHL webhook custom fields)
  const customData = webhookData?.customData || {};
  const rawAmount =
    customData['loan_with_mipfunding_fee'] ||
    customData['loan-amount'] ||
    customData['loan_amount'] ||
    customData['Loan Amount'] ||
    customData['monetaryValue'] ||
    webhookData?.monetaryValue ||
    '0';

  if (typeof rawAmount === 'number') return rawAmount;
  return parseFloat(String(rawAmount).replace(/[$,]/g, '').trim()) || 0;
}

/**
 * Fetch CC email recipients from BytePro parties.
 * Looks for Loan Processor, Loan Officer, and LO Assistant by known email patterns.
 * 
 * Since BytePro doesn't have server-side party-type filtering,
 * we use the emails from known internal staff to identify roles.
 * 
 * @param {string} loanNumber
 * @returns {Promise<Array<{role: string, email: string, name: string}>>}
 */
async function getCCRecipients(loanNumber) {
  const allParties = await getAllParties(loanNumber);
  const ccList = [];

  for (const party of allParties) {
    if (!party.EMail) continue;

    for (const [roleKey, matcher] of Object.entries(CC_ROLE_MATCHERS)) {
      if (matcher.test(party, allParties)) {
        ccList.push({
          role: matcher.label,
          email: party.EMail,
          name: party.FullName || `${party.FirstName || ''} ${party.LastName || ''}`.trim(),
          company: party.Company || '',
        });
      }
    }
  }

  // Deduplicate by email
  const seen = new Set();
  return ccList.filter(c => {
    if (seen.has(c.email.toLowerCase())) return false;
    seen.add(c.email.toLowerCase());
    return true;
  });
}

/**
 * Fetch ALL data needed for the processing workflow.
 * BytePro data is fetched in parallel. Loan amount comes from GHL webhook.
 * 
 * @param {string} loanNumber
 * @param {Object} [webhookData] - GHL webhook payload (for loan amount)
 * @returns {Promise<Object>} Complete data package
 */
async function getProcessingWorkflowData(loanNumber, webhookData = {}) {
  console.log(`\n📦 Fetching all workflow data for loan: ${loanNumber}`);

  // Run BytePro fetches in parallel (3 calls total)
  const [titleCompany, borrower, ccRecipients] = await Promise.all([
    getTitleCompany(loanNumber),
    getBorrowerInfo(loanNumber),
    getCCRecipients(loanNumber),
  ]);

  // Loan amount comes from GHL, not BytePro (avoids unnecessary API call)
  const loanAmount = parseLoanAmountFromWebhook(webhookData);

  const data = {
    loanNumber,
    titleCompany,
    borrower,
    loanAmount,
    ccRecipients,
    fetchedAt: new Date().toISOString(),
  };

  // Log summary
  console.log(`  📋 Title Company: ${titleCompany?.Company || '(not found)'} — ${titleCompany?.EMail || '(no email)'}`);
  console.log(`  👤 Borrower(s): ${borrower.allBorrowers || borrower.fullName || '(not found)'}`);
  console.log(`  💰 Loan Amount: $${loanAmount.toLocaleString()} ${loanAmount === 0 ? '(not in webhook — will say "see file")' : ''}`);
  console.log(`  📧 CC Recipients: ${ccRecipients.length > 0 ? ccRecipients.map(c => `${c.role}: ${c.email}`).join(', ') : '(none found — will use CRM fallbacks)'}`);

  return data;
}

module.exports = {
  getBorrowerInfo,
  parseLoanAmountFromWebhook,
  getCCRecipients,
  getProcessingWorkflowData,
};
