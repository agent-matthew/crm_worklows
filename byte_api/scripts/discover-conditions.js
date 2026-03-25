/**
 * Quick discovery: Can we fetch loan conditions from BytePro?
 * Tests the Condition table with a known loan number.
 * 
 * Usage: node -r dotenv/config scripts/discover-conditions.js PHM0124084419
 */
const { search } = require('../src/client');

const loanNumber = process.argv[2] || 'PHM0124084419';

async function discoverConditions() {
  console.log(`\n🔍 Querying Condition table for loan: ${loanNumber}\n`);

  // Request condition fields that we saw in the user's screenshot
  const result = await search([
    { FieldName: 'FileName', TableName: 'FileData',
      FieldFilter: { FilterValue1: loanNumber, FilterType: 1 } },
    { FieldName: 'DescriptionTemplate', TableName: 'Condition' },
    { FieldName: 'Type',  TableName: 'Condition' },
    { FieldName: 'No',    TableName: 'Condition' },
    { FieldName: 'Class', TableName: 'Condition' },
    { FieldName: 'Stage', TableName: 'Condition' },
  ], { MaxItems: 10, SearchDisplayHeaders: true }); // Just 10 to keep it light

  if (!result?.SearchRows?.length) {
    console.log('❌ No condition rows returned. Table name may be wrong.');
    return;
  }

  // Show headers if available
  if (result.SearchRows[0]?.SearchValues) {
    const headers = result.SearchRows[0].SearchValues.map(v => v.FieldName || '?');
    console.log(`📋 Fields returned: ${headers.join(' | ')}`);
  }

  console.log(`\n✅ Got ${result.SearchRows.length} condition rows (limited to 10)\n`);

  // Display each condition
  result.SearchRows.forEach((row, i) => {
    const vals = row.SearchValues.map(v => v.FieldValue || '(empty)');
    // vals[0]=FileName, [1]=Description, [2]=Type, [3]=No, [4]=Class, [5]=Stage
    console.log(`${i + 1}. [${vals[2]} ${vals[3]}] ${vals[4]} / ${vals[5]} — ${vals[1]}`);
  });

  console.log('\n--- Raw first row (for debugging) ---');
  console.log(JSON.stringify(result.SearchRows[0], null, 2));
}

discoverConditions().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
