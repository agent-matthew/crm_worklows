/**
 * discover-all-tables.js
 * 
 * Use SearchHelp to find all available table names,
 * and specifically test PartyMisc and Borrower field names.
 */
const { apiCall, search } = require('../src/client');
const fs = require('fs');
const path = require('path');

const LOAN_NUMBER = 'PHM0124084419';
const output = [];
function log(msg) { output.push(msg); }

async function main() {
  log('=== Full API table/field discovery ===');
  log(`Time: ${new Date().toISOString()}\n`);

  // 1. Fetch SearchHelp — scan for table names
  log('--- SearchHelp: extracting table names ---');
  try {
    const data = await apiCall('GET', '/byteapi/SearchHelp');
    const str = typeof data === 'string' ? data : JSON.stringify(data);
    log(`Response length: ${str.length}`);
    
    // Extract table names from any TableName references
    const tableMatches = str.match(/"?TableName"?\s*[:=]\s*"([^"]+)"/gi);
    if (tableMatches) {
      const tables = [...new Set(tableMatches.map(m => {
        const match = m.match(/"([^"]+)"$/);
        return match ? match[1] : m;
      }))];
      log(`Found ${tables.length} unique table names:`);
      tables.forEach(t => log(`  • ${t}`));
    }
    
    // Look for Party/Title mentions
    const partyRegex = /part[yies]{1,3}[a-zA-Z]*/gi;
    const partyMentions = [...new Set((str.match(partyRegex) || []))];
    log(`\nParty-related words: ${partyMentions.join(', ')}`);
    
    const titleRegex = /title[a-zA-Z]*/gi;
    const titleMentions = [...new Set((str.match(titleRegex) || []))];
    log(`Title-related words: ${titleMentions.join(', ')}`);

    // Save full response
    const helpFile = path.join(__dirname, '..', 'searchhelp-raw.txt');
    fs.writeFileSync(helpFile, str.substring(0, 50000), 'utf8');
    log(`Full SearchHelp saved to searchhelp-raw.txt`);
  } catch (e) {
    log(`Error: ${e.response?.data ? JSON.stringify(e.response.data).substring(0, 500) : e.message}`);
  }
  log('');

  // 2. Test PartyMisc
  log('--- Test: PartyMisc table ---');
  const pmFields = ['Company', 'EMail', 'FirstName', 'LastName', 'WorkPhone'];
  for (const field of pmFields) {
    try {
      const result = await search([
        { FieldName: "FileName", TableName: "FileData",
          FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
        { FieldName: field, TableName: "PartyMisc" },
      ], { MaxItems: 3 });
      if (result.SearchRows) {
        const val = result.SearchRows[0]?.SearchValues[1]?.FieldValue || '(empty)';
        log(`  ✅ PartyMisc.${field} = "${val}"`);
      } else {
        log(`  ❓ PartyMisc.${field}: ${JSON.stringify(result).substring(0, 100)}`);
      }
    } catch (e) {
      const msg = e.response?.data;
      log(`  ❌ PartyMisc.${field}: ${Array.isArray(msg) ? msg[0]?.Message : JSON.stringify(msg).substring(0, 100)}`);
    }
  }
  log('');

  // 3. Test Borrower fields
  log('--- Test: Borrower table fields ---');
  const bFields = ['FirstName', 'LastName', 'Company', 'WorkPhone', 'HomePhone', 'Email', 'EMail', 'Street', 'City', 'State', 'Zip', 'SSN', 'BirthDate'];
  for (const field of bFields) {
    try {
      const result = await search([
        { FieldName: "FileName", TableName: "FileData",
          FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
        { FieldName: field, TableName: "Borrower" },
      ], { MaxItems: 1 });
      if (result.SearchRows) {
        const val = result.SearchRows[0]?.SearchValues[1]?.FieldValue || '(empty)';
        log(`  ✅ Borrower.${field} = "${val}"`);
      } else {
        log(`  ❓ Borrower.${field}: ${JSON.stringify(result).substring(0, 100)}`);
      }
    } catch (e) {
      const msg = e.response?.data;
      log(`  ❌ Borrower.${field}: ${Array.isArray(msg) ? msg[0]?.Message : JSON.stringify(msg).substring(0, 100)}`);
    }
  }

  log('\n=== Done ===');
  const outFile = path.join(__dirname, '..', 'table-discovery.txt');
  fs.writeFileSync(outFile, output.join('\n'), 'utf8');
  console.log(`Results: ${outFile}`);
}

main();
