/**
 * search-title-company.js
 * 
 * Searches BytePro for loan files and retrieves title company party info.
 * 
 * From the screenshots:
 * - Table: "Party"  
 * - Field: "EMail" (shown as "Party:EMail" in field info)
 * - Party type "Title Company" is the row we want
 * 
 * Also tries to get all party data to discover available fields.
 * 
 * Results → search-results.txt
 */
const { search } = require('../src/client');
const fs = require('fs');
const path = require('path');

const output = [];
function log(msg) { output.push(msg); }

async function main() {
  log('=== BytePro Title Company Search ===');
  log(`Time: ${new Date().toISOString()}\n`);

  // Attempt 1: Search for recent loan files and include Party fields
  log('--- Attempt 1: Get loan files with Party EMail ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData" },
      { FieldName: "FirstName", TableName: "Borrower" },
      { FieldName: "LastName", TableName: "Borrower" },
      { FieldName: "EMail", TableName: "Party" },
      { FieldName: "Company", TableName: "Party" },
      { FieldName: "PartyType", TableName: "Party" },
    ], { MaxItems: 5 });
    log(`Response:\n${JSON.stringify(result, null, 2).substring(0, 5000)}`);
  } catch (e) {
    log(`Error: ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }
  log('');

  // Attempt 2: Try with PartyMisc table (saw "Search By PartyMisc" in Bruno)
  log('--- Attempt 2: PartyMisc table ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData" },
      { FieldName: "EMail", TableName: "PartyMisc" },
      { FieldName: "Company", TableName: "PartyMisc" },
    ], { MaxItems: 5 });
    log(`Response:\n${JSON.stringify(result, null, 2).substring(0, 5000)}`);
  } catch (e) {
    log(`Error: ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }
  log('');

  // Attempt 3: Use "TitleCompany" as table name
  log('--- Attempt 3: TitleCompany as table ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData" },
      { FieldName: "EMail", TableName: "TitleCompany" },
      { FieldName: "Company", TableName: "TitleCompany" },
    ], { MaxItems: 5 });
    log(`Response:\n${JSON.stringify(result, null, 2).substring(0, 5000)}`);
  } catch (e) {
    log(`Error: ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }
  log('');

  // Attempt 4: Just search files — to verify basic search works
  log('--- Attempt 4: Basic file search (no party) ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData" },
      { FieldName: "FirstName", TableName: "Borrower" },
      { FieldName: "LastName", TableName: "Borrower" },
      { FieldName: "LoanWith", TableName: "Loan" },
    ], { MaxItems: 5 });
    log(`Response:\n${JSON.stringify(result, null, 2).substring(0, 5000)}`);
  } catch (e) {
    log(`Error: ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }
  log('');

  // Attempt 5: Try SearchExampleStructure endpoint to discover tables
  log('--- Attempt 5: Get SearchExampleStructure ---');
  const { apiCall } = require('../src/client');
  try {
    const result = await apiCall('GET', '/byteapi/SearchExampleStructure');
    log(`Response:\n${JSON.stringify(result, null, 2).substring(0, 5000)}`);
  } catch (e) {
    log(`Error: ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }

  log('\n=== Done ===');
  const outFile = path.join(__dirname, '..', 'search-results.txt');
  fs.writeFileSync(outFile, output.join('\n'), 'utf8');
  console.log(`Results: ${outFile}`);
}

main();
