/**
 * fetch-title-final.js
 * 
 * Final approach: Get all parties with full contact data,
 * plus try filtering Company field.
 * Also test SearchDisplayHeaders = true to get field names in response.
 */
const { search } = require('../src/client');
const fs = require('fs');
const path = require('path');

const LOAN_NUMBER = 'PHM0124084419';
const output = [];
function log(msg) { output.push(msg); }

async function main() {
  log(`=== Final Title Company Fetch ===`);
  log(`Loan: ${LOAN_NUMBER}`);
  log(`Time: ${new Date().toISOString()}\n`);

  // Test 1: SearchDisplayHeaders = true to get column names
  log('--- Test 1: Headers + All Parties ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "Company", TableName: "Parties" },
      { FieldName: "EMail", TableName: "Parties" },
      { FieldName: "WorkPhone", TableName: "Parties" },
      { FieldName: "FirstName", TableName: "Parties" },
      { FieldName: "LastName", TableName: "Parties" },
    ], { MaxItems: 100, SearchDisplayHeaders: true });
    
    // Check SearchFields for headers
    if (result.SearchFields?.length > 0) {
      log(`Headers: ${JSON.stringify(result.SearchFields)}`);
    }
    
    log(`Total: ${result.TotalRecords} rows\n`);
    
    // Log all rows with non-empty data
    if (result.SearchRows) {
      result.SearchRows.forEach((row, i) => {
        const vals = row.SearchValues.map(v => v.FieldValue || '');
        const [fn, co, email, phone, first, last] = vals;
        // Only show rows where Company or Email has data
        if (co || email) {
          log(`  [${i}] Company="${co}" Email="${email}" Phone="${phone}" Name="${first} ${last}"`);
        }
      });
    }
  } catch (e) {
    log(`Error: ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }
  log('');

  // Test 2: Filter Company to find just Core Title
  log('--- Test 2: Filter by Company containing "Title" ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "Company", TableName: "Parties",
        FieldFilter: { FilterValue1: "Core Title", FilterType: 1 } },
      { FieldName: "EMail", TableName: "Parties" },
      { FieldName: "WorkPhone", TableName: "Parties" },
      { FieldName: "FirstName", TableName: "Parties" },
      { FieldName: "LastName", TableName: "Parties" },
      { FieldName: "Street", TableName: "Parties" },
      { FieldName: "City", TableName: "Parties" },
      { FieldName: "State", TableName: "Parties" },
      { FieldName: "Zip", TableName: "Parties" },
    ], { MaxItems: 10 });
    
    log(`Total: ${result.TotalRecords} rows`);
    if (result.SearchRows) {
      result.SearchRows.forEach((row, i) => {
        const vals = row.SearchValues.map(v => v.FieldValue || '');
        const [fn, co, email, phone, first, last, street, city, state, zip] = vals;
        log(`  [${i}] Company="${co}" Email="${email}" Phone="${phone}" Name="${first} ${last}" Addr="${street}, ${city} ${state} ${zip}"`);
      });
    } else {
      log(`Response:\n${JSON.stringify(result, null, 2)}`);
    }
  } catch (e) {
    log(`Error: ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }
  log('');

  // Test 3: Filter Company LIKE "%title%" 
  log('--- Test 3: Filter by Company LIKE "%title%" ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "Company", TableName: "Parties",
        FieldFilter: { FilterValue1: "title", FilterType: 8 } },
      { FieldName: "EMail", TableName: "Parties" },
      { FieldName: "WorkPhone", TableName: "Parties" },
    ], { MaxItems: 10 });
    
    log(`Total: ${result.TotalRecords} rows`);
    if (result.SearchRows) {
      result.SearchRows.forEach((row, i) => {
        const vals = row.SearchValues.map(v => v.FieldValue || '');
        log(`  [${i}] ${vals.join(' | ')}`);
      });
    } else {
      log(`Response:\n${JSON.stringify(result, null, 2)}`);
    }
  } catch (e) {
    log(`Error: ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }

  log('\n=== Done ===');
  const outFile = path.join(__dirname, '..', 'title-company-final.txt');
  fs.writeFileSync(outFile, output.join('\n'), 'utf8');
  console.log(`Results: ${outFile}`);
}

main();
