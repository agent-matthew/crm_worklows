/**
 * discover-party-fields.js
 * 
 * Try various field names on the Parties table to discover:
 * 1. What field holds the party "type" (e.g., Title Company, Listing Agent, etc.)
 * 2. Full list of available fields
 * 
 * We try small batches so one bad field doesn't kill the whole query.
 */
const { search } = require('../src/client');
const fs = require('fs');
const path = require('path');

const LOAN_NUMBER = 'PHM0124084419';
const output = [];
function log(msg) { output.push(msg); }

const fieldBatches = [
  { label: 'Party Type fields', fields: ['PartyDescription', 'PartyType', 'Description', 'Label'] },
  { label: 'Name fields', fields: ['FirstName', 'LastName', 'FullName', 'ContactName'] },
  { label: 'Address fields', fields: ['Street', 'City', 'State', 'Zip'] },
  { label: 'Phone fields', fields: ['WorkPhone', 'HomePhone', 'Fax', 'CellPhone'] },
  { label: 'Email fields', fields: ['EMail', 'Company'] },
  { label: 'Misc Name fields', fields: ['PartyName', 'NameFirst', 'NameLast', 'Title'] },
  { label: 'ID fields', fields: ['PartyID', 'RecordID', 'ID', 'RecNo'] },
];

async function main() {
  log(`=== BytePro Parties Field Discovery ===`);
  log(`Loan: ${LOAN_NUMBER}`);
  log(`Time: ${new Date().toISOString()}\n`);

  for (const batch of fieldBatches) {
    log(`--- ${batch.label}: [${batch.fields.join(', ')}] ---`);
    try {
      const searchFields = [
        { FieldName: "FileName", TableName: "FileData",
          FieldFilter: { FilterValue1: LOAN_NUMBER, FilterType: 1 } },
        ...batch.fields.map(f => ({ FieldName: f, TableName: "Parties" }))
      ];
      const result = await search(searchFields, { MaxItems: 5 });
      
      // If result has SearchRows, show first 3
      if (result.SearchRows) {
        log(`✅ SUCCESS — ${result.TotalRecords} rows`);
        const sample = result.SearchRows.slice(0, 3);
        for (const row of sample) {
          const vals = row.SearchValues.map(v => v.FieldValue || '(empty)');
          log(`  → ${vals.join(' | ')}`);
        }
      } else {
        log(`Response:\n${JSON.stringify(result, null, 2)}`);
      }
    } catch (e) {
      const data = e.response?.data;
      if (Array.isArray(data)) {
        const bad = data.map(d => d.Message).join('; ');
        log(`❌ ${bad}`);
      } else {
        log(`❌ Error: ${data ? JSON.stringify(data) : e.message}`);
      }
    }
    log('');
  }

  log('=== Done ===');
  const outFile = path.join(__dirname, '..', 'party-field-discovery.txt');
  fs.writeFileSync(outFile, output.join('\n'), 'utf8');
  console.log(`Results: ${outFile}`);
}

main();
