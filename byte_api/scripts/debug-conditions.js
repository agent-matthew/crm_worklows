require('dotenv').config();
const { search } = require('../src/client');

(async () => {
  // Test with fewer fields - split into two calls
  // Call 1: Core fields (6 fields - known working count)
  const r1 = await search([
    { FieldName: 'FileName', TableName: 'FileData', FieldFilter: { FilterValue1: 'PHM0124084451', FilterType: 1 } },
    { FieldName: 'DescriptionTemplate', TableName: 'Condition' },
    { FieldName: 'ConditionStage', TableName: 'Condition' },
    { FieldName: 'ConditionNo', TableName: 'Condition' },
    { FieldName: 'Brw', TableName: 'Condition' },
    { FieldName: 'Requested', TableName: 'Condition' },
    { FieldName: 'Received', TableName: 'Condition' },
  ], { MaxItems: 200 });

  if (!r1 || !r1.SearchRows) {
    console.log('7 fields failed. Raw response:', JSON.stringify(r1).substring(0, 500));
    return;
  }

  // Fields: [0]FileName [1]Description [2]Stage [3]No [4]Brw [5]Requested [6]Received
  console.log('Total rows:', r1.SearchRows.length);

  var ptdRows = [];
  r1.SearchRows.forEach(function(row) {
    var v = row.SearchValues.map(function(x) { return x.FieldValue; });
    var stage = v[2] || '';
    var isPTD = stage.toLowerCase().indexOf('prior to docs') !== -1;
    if (isPTD) {
      ptdRows.push({
        no: v[3] || '',
        desc: v[1] || '',
        stage: stage,
        brw: v[4] || '',
        req: v[5] || '',
        rcvd: v[6] || ''
      });
    }
  });

  console.log('PTD conditions:', ptdRows.length);
  console.log('');
  ptdRows.forEach(function(c) {
    console.log(c.no + ' | Brw=' + c.brw + ' | Req=' + c.req + ' | Rcvd=' + c.rcvd + ' | ' + c.desc.substring(0, 60));
  });

  // Show unique values
  var brwSet = {}, reqSet = {}, rcvdSet = {};
  r1.SearchRows.forEach(function(row) {
    var v = row.SearchValues.map(function(x) { return x.FieldValue; });
    brwSet[JSON.stringify(v[4])] = true;
    reqSet[JSON.stringify(v[5])] = true;
    rcvdSet[JSON.stringify(v[6])] = true;
  });
  console.log('\nUnique Brw:', Object.keys(brwSet));
  console.log('Unique Requested:', Object.keys(reqSet));
  console.log('Unique Received:', Object.keys(rcvdSet));
})();
