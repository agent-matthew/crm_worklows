require('dotenv').config();
const { search } = require('../src/client');

var FILE = 'PHM0124084451';

// Probe NeededFromBorrower + ClearedDate together
async function run() {
  console.log('Probing NeededFromBorrower + ClearedDate...\n');
  
  var r = await search([
    { FieldName: 'FileName', TableName: 'FileData', FieldFilter: { FilterValue1: FILE, FilterType: 1 } },
    { FieldName: 'NeededFromBorrower', TableName: 'Condition' },
    { FieldName: 'ClearedDate', TableName: 'Condition' },
    { FieldName: 'DescriptionTemplate', TableName: 'Condition' },
    { FieldName: 'ConditionStage', TableName: 'Condition' },
  ], { MaxItems: 200 });

  var json = JSON.stringify(r);
  if (json.indexOf('not found') !== -1 || json.indexOf('Invalid') !== -1) {
    console.log('ERROR in response:', json.substring(0, 500));
    return;
  }

  if (!r.SearchRows || r.SearchRows.length === 0) {
    console.log('No rows returned.');
    return;
  }

  console.log('Total rows: ' + r.SearchRows.length + '\n');

  // [0]FileName [1]NeededFromBorrower [2]ClearedDate [3]Description [4]Stage
  var cleared = 0;
  var brwTrue = 0;

  r.SearchRows.forEach(function(row, i) {
    var v = row.SearchValues.map(function(x) { return x.FieldValue; });
    var isBrw = v[1];
    var clearedDate = v[2];
    var desc = v[3];
    var stage = v[4];

    if (clearedDate && clearedDate !== '') cleared++;
    if (isBrw === 'True' || isBrw === 'true' || isBrw === '1') brwTrue++;

    // Show first 20 rows for debugging
    if (i < 20) {
      console.log('#' + (i+1) + ' | BRW=' + isBrw + ' | Cleared=' + (clearedDate || '(empty)') + ' | Stage=' + stage + ' | ' + (desc || '').substring(0, 50));
    }
  });

  console.log('\n---');
  console.log('Cleared: ' + cleared + ' / ' + r.SearchRows.length);
  console.log('BRW=True: ' + brwTrue + ' / ' + r.SearchRows.length);
}

run().catch(function(e) { console.error('Fatal:', e.message); });
