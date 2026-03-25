/**
 * discover-party-type.js
 * 
 * Find which field reveals the PARTY TYPE (Title Company, Listing Agent, etc.)
 * Also test if FieldIdentifier actually works with specific values.
 */
const { search } = require('../src/client');
const fs = require('fs');
const path = require('path');

const LOAN_NUMBER = 'PHM0124084419';
const output = [];
function log(msg) { output.push(msg); }

async function main() {
  log(`=== Party Type Discovery ===`);
  log(`Loan: ${LOAN_NUMBER}`);
  log(`Time: ${new Date().toISOString()}\n`);

  // Test 1: Description + Title + PartyID 
  log('--- Test 1: Description, Title, PartyID, Company ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "Description", TableName: "Parties" },
      { FieldName: "Title", TableName: "Parties" },
      { FieldName: "PartyID", TableName: "Parties" },
      { FieldName: "Company", TableName: "Parties" },
      { FieldName: "EMail", TableName: "Parties" },
    ], { MaxItems: 50 });
    
    if (result.SearchRows) {
      log(`✅ ${result.TotalRecords} rows`);
      for (const row of result.SearchRows) {
        const vals = row.SearchValues.map(v => v.FieldValue || '');
        // Format: FileName | Description | Title | PartyID | Company | EMail
        const [fn, desc, title, pid, co, email] = vals;
        if (desc || title || pid || co || email) {
          log(`  Desc="${desc}" Title="${title}" PID="${pid}" Co="${co}" Email="${email}"`);
        }
      }
    } else {
      log(`Response:\n${JSON.stringify(result, null, 2)}`);
    }
  } catch (e) {
    const data = e.response?.data;
    log(`❌ ${data ? JSON.stringify(data) : e.message}`);
  }
  log('');

  // Test 2: Try FieldIdentifier with numeric value (BytePro might use numeric IDs for party types)
  log('--- Test 2: FieldIdentifier = "12" (common Title Company code) ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "Company", TableName: "Parties", FieldIdentifier: "12" },
      { FieldName: "EMail", TableName: "Parties", FieldIdentifier: "12" },
      { FieldName: "WorkPhone", TableName: "Parties", FieldIdentifier: "12" },
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
    const data = e.response?.data;
    log(`❌ ${data ? JSON.stringify(data) : e.message}`);
  }
  log('');

  // Test 3: Try a few more field name guesses
  log('--- Test 3: Category, Role, PartyRole, ContactType ---');
  try {
    const result = await search([
      { FieldName: "FileName", TableName: "FileData",
        FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
      { FieldName: "Category", TableName: "Parties" },
      { FieldName: "Role", TableName: "Parties" },
      { FieldName: "PartyRole", TableName: "Parties" },
      { FieldName: "ContactType", TableName: "Parties" },
    ], { MaxItems: 5 });
    
    if (result.SearchRows) {
      log(`✅ Success with one of these fields`);
      for (const row of result.SearchRows) {
        const vals = row.SearchValues.map(v => v.FieldValue || '(empty)');
        log(`  → ${vals.join(' | ')}`);
      }
    } else {
      log(`Response:\n${JSON.stringify(result, null, 2)}`);
    }
  } catch (e) {
    const data = e.response?.data;
    if (Array.isArray(data)) {
      log(`❌ ${data.map(d => d.Message).join('; ')}`);
    } else {
      log(`❌ ${data ? JSON.stringify(data) : e.message}`);
    }
  }

  log('\n=== Done ===');
  const outFile = path.join(__dirname, '..', 'party-type-discovery.txt');
  fs.writeFileSync(outFile, output.join('\n'), 'utf8');
  console.log(`Results: ${outFile}`);
}

main();
