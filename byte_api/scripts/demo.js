/**
 * demo.js
 * 
 * Demo: Fetch title company contact info for a loan file.
 * Usage: node -r dotenv/config scripts/demo.js [LOAN_NUMBER]
 */
const { getTitleCompany, getAllParties, getPartyByCompany } = require('../src/loan-parties');

async function main() {
  const loanNumber = process.argv[2] || 'PHM0124084419';
  console.log(`\n📋 Fetching Title Company for loan: ${loanNumber}\n`);

  const titleCo = await getTitleCompany(loanNumber);

  if (titleCo) {
    console.log('✅ Title Company Found:');
    console.log('─'.repeat(40));
    console.log(`  Company:  ${titleCo.Company}`);
    console.log(`  Email:    ${titleCo.EMail}`);
    console.log(`  Phone:    ${titleCo.WorkPhone || '(none)'}`);
    console.log(`  Contact:  ${[titleCo.FirstName, titleCo.LastName].filter(Boolean).join(' ') || '(none)'}`);
    console.log(`  Address:  ${[titleCo.Street, titleCo.City, titleCo.State, titleCo.Zip].filter(Boolean).join(', ')}`);
    console.log('─'.repeat(40));
    console.log('\nFull record:', JSON.stringify(titleCo, null, 2));
  } else {
    console.log('❌ No Title Company found for this loan.');
    console.log('\nListing all parties with data:');
    const all = await getAllParties(loanNumber);
    all.forEach((p, i) => {
      console.log(`  [${i}] ${p.Company || '(no company)'} — ${p.EMail || '(no email)'}`);
    });
  }
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
