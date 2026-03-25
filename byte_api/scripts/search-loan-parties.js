/**
 * search-loan-parties.js
 * 
 * Targeted query: Get title company data from loan PHM0124084419
 * using the "Parties" table (confirmed by user).
 * 
 * From the screenshot, the field info dialog showed "Party:EMail" — 
 * the field name is "EMail" on the "Parties" table.
 * 
 * Results → search-loan-parties.txt
 */
const { search } = require('../src/client');
const fs = require('fs');
const path = require('path');

const LOAN_NUMBER = 'PHM0124084419';
const output = [];
function log(msg) { output.push(msg); }

async function main() {
  log(`=== BytePro Loan Parties Search — ${LOAN_NUMBER} ===`);
  log(`Time: ${new Date().toISOString()}\n`);

  // Query 1: Get Parties data for a specific loan (filter by FileName)
  log('--- Query 1: Parties fields for specific loan ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "EMail", TableName: "Parties" },
      { FieldName: "Company", TableName: "Parties" },
    ], { MaxItems: 50 });
    log(`Response:\n${JSON.stringify(result, null, 2)}`);
  } catch (e) {
    log(`Error: ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }
  log('');

  // Query 2: Try more Party fields — Name, Phone, Type
  log('--- Query 2: Broader Parties fields ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "EMail", TableName: "Parties" },
      { FieldName: "Company", TableName: "Parties" },
      { FieldName: "Name", TableName: "Parties" },
      { FieldName: "Phone", TableName: "Parties" },
      { FieldName: "Type", TableName: "Parties" },
    ], { MaxItems: 50 });
    log(`Response:\n${JSON.stringify(result, null, 2)}`);
  } catch (e) {
    log(`Error: ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }
  log('');

  // Query 3: Use FieldIdentifier to target Title Company specifically
  // In BytePro, parties have a "type" identifier — "Title Company" is the type
  log('--- Query 3: Try filtering by PartyType = Title Company ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "EMail", TableName: "Parties",
        FieldIdentifier: "Title Company" },
      { FieldName: "Company", TableName: "Parties",
        FieldIdentifier: "Title Company" },
      { FieldName: "WorkPhone", TableName: "Parties",
        FieldIdentifier: "Title Company" },
    ], { MaxItems: 50 });
    log(`Response:\n${JSON.stringify(result, null, 2)}`);
  } catch (e) {
    log(`Error: ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }
  log('');

  // Query 4: Try some guesses at field names from the screenshot
  // Screenshot shows: EMail1, EMail2, EMail3, Company, Name, Mobile, Work, Home, Fax
  log('--- Query 4: Screenshot-based field names ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "EMail1", TableName: "Parties",
        FieldIdentifier: "Title Company" },
      { FieldName: "WorkPhone", TableName: "Parties",
        FieldIdentifier: "Title Company" },
      { FieldName: "Mobile", TableName: "Parties",
        FieldIdentifier: "Title Company" },
    ], { MaxItems: 50 });
    log(`Response:\n${JSON.stringify(result, null, 2)}`);
  } catch (e) {
    log(`Error: ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }

  log('\n=== Done ===');
  const outFile = path.join(__dirname, '..', 'search-loan-parties.txt');
  fs.writeFileSync(outFile, output.join('\n'), 'utf8');
  console.log(`Results: ${outFile}`);
}

main();
