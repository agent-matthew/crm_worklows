/**
 * fetch-title-company.js
 * 
 * From the BytePro screenshot, we can see:
 * - The party "type" list includes "Title Company" as a row
 * - The example uses TableName: "Borrower" (party type AS table name)
 * - Fields visible: Company, FirstName/LastName (Name), Work, Mobile, EMail
 * 
 * Strategy: Try using party type descriptions as TableName values
 * since the Bruno example uses "Borrower" as a TableName.
 */
const { search } = require('../src/client');
const fs = require('fs');
const path = require('path');

const LOAN_NUMBER = 'PHM0124084419';
const output = [];
function log(msg) { output.push(msg); }

async function main() {
  log(`=== Fetch Title Company Data ===`);
  log(`Loan: ${LOAN_NUMBER}`);
  log(`Time: ${new Date().toISOString()}\n`);

  // --- Approach 1: Use "Borrower" as TableName (from screenshot example) ---
  log('--- Test A: TableName = "Borrower" (from screenshot) ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "FirstName", TableName: "Borrower" },
      { FieldName: "LastName", TableName: "Borrower" },
      { FieldName: "EMail", TableName: "Borrower" },
    ], { MaxItems: 5 });
    if (result.SearchRows) {
      log(`✅ ${result.TotalRecords} rows`);
      for (const row of result.SearchRows) {
        const vals = row.SearchValues.map(v => v.FieldValue || '(empty)');
        log(`  → ${vals.join(' | ')}`);
      }
    } else {
      log(`Response:\n${JSON.stringify(result, null, 2)}`);
    }
  } catch (e) {
    log(`❌ ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }
  log('');

  // --- Approach 2: Try "TitleCompany" as TableName ---
  log('--- Test B: TableName = "TitleCompany" ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "Company", TableName: "TitleCompany" },
      { FieldName: "EMail", TableName: "TitleCompany" },
      { FieldName: "WorkPhone", TableName: "TitleCompany" },
    ], { MaxItems: 5 });
    if (result.SearchRows) {
      log(`✅ ${result.TotalRecords} rows`);
      for (const row of result.SearchRows) {
        const vals = row.SearchValues.map(v => v.FieldValue || '(empty)');
        log(`  → ${vals.join(' | ')}`);
      }
    } else {
      log(`Response:\n${JSON.stringify(result, null, 2)}`);
    }
  } catch (e) {
    log(`❌ ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }
  log('');

  // --- Approach 3: Try "Title Company" with space ---
  log('--- Test C: TableName = "Title Company" ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "Company", TableName: "Title Company" },
      { FieldName: "EMail", TableName: "Title Company" },
    ], { MaxItems: 5 });
    if (result.SearchRows) {
      log(`✅ ${result.TotalRecords} rows`);
      for (const row of result.SearchRows) {
        const vals = row.SearchValues.map(v => v.FieldValue || '(empty)');
        log(`  → ${vals.join(' | ')}`);
      }
    } else {
      log(`Response:\n${JSON.stringify(result, null, 2)}`);
    }
  } catch (e) {
    log(`❌ ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }
  log('');

  // --- Approach 4: Use Parties table + FieldIdentifier with exact type descriptions ---
  const types = ["TitleCompany", "Title Company", "Listing Agent", "Selling Agent", "Borrower"];
  for (const tid of types) {
    log(`--- Test D: Parties + FieldIdentifier = "${tid}" ---`);
    try {
      const result = await search([
        { FieldName: "FileName", TableName: "FileData",
          FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
        { FieldName: "Company", TableName: "Parties", FieldIdentifier: tid },
        { FieldName: "EMail", TableName: "Parties", FieldIdentifier: tid },
      ], { MaxItems: 3 });
      if (result.SearchRows) {
        log(`✅ ${result.TotalRecords} rows`);
        for (const row of result.SearchRows.slice(0, 3)) {
          const vals = row.SearchValues.map(v => v.FieldValue || '(empty)');
          log(`  → ${vals.join(' | ')}`);
        }
      } else {
        log(`Response:\n${JSON.stringify(result, null, 2)}`);
      }
    } catch (e) {
      log(`❌ ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
    }
    log('');
  }

  // --- Approach 5: ShowDetailRecords = true (from the screenshot body) ---
  log('--- Test E: ShowDetailRecords = true ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "Company", TableName: "Parties" },
      { FieldName: "EMail", TableName: "Parties" },
    ], { MaxItems: 5, ShowDetailRecords: true });
    if (result.SearchRows) {
      log(`✅ ${result.TotalRecords} rows`);
      for (const row of result.SearchRows) {
        const vals = row.SearchValues.map(v => v.FieldValue || '(empty)');
        log(`  → ${vals.join(' | ')}`);
      }
      if (result.SearchData) {
        log(`SearchData: ${JSON.stringify(result.SearchData).substring(0, 500)}`);
      }
    } else {
      log(`Response:\n${JSON.stringify(result, null, 2).substring(0, 1000)}`);
    }
  } catch (e) {
    log(`❌ ${e.response?.data ? JSON.stringify(e.response.data) : e.message}`);
  }

  log('\n=== Done ===');
  const outFile = path.join(__dirname, '..', 'title-company-tests.txt');
  fs.writeFileSync(outFile, output.join('\n'), 'utf8');
  console.log(`Results: ${outFile}`);
}

main();
