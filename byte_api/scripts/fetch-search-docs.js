/**
 * fetch-search-docs.js
 * 
 * Saves the full SearchHelp and SearchExample responses as reference files.
 * Usage: node scripts/fetch-search-docs.js
 */
const { searchHelp, searchExample } = require('../src/client');
const fs = require('fs');
const path = require('path');

async function main() {
  console.log('Fetching SearchHelp...');
  const help = await searchHelp();
  fs.writeFileSync(
    path.join(__dirname, '..', 'reference-search-help.json'),
    JSON.stringify(help, null, 2),
    'utf8'
  );
  console.log('✅ Saved reference-search-help.json');

  console.log('Fetching SearchExample...');
  const example = await searchExample();
  fs.writeFileSync(
    path.join(__dirname, '..', 'reference-search-example.json'),
    JSON.stringify(example, null, 2),
    'utf8'
  );
  console.log('✅ Saved reference-search-example.json');
}

main().catch(e => {
  console.error('Failed:', e.response?.data || e.message);
  process.exit(1);
});
