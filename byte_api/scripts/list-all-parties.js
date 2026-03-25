/**
 * list-all-parties.js
 * 
 * Lists all parties with data for a given loan.
 * Usage: node -r dotenv/config scripts/list-all-parties.js [LOAN_NUMBER]
 */
const { getAllParties } = require('../src/loan-parties');

async function main() {
  const loanNumber = process.argv[2] || 'PHM0124084419';
  console.log(`\n📋 All parties for loan: ${loanNumber}\n`);

  const parties = await getAllParties(loanNumber);
  console.log(`Found ${parties.length} parties with data:\n`);
  
  parties.forEach((p, i) => {
    console.log(`  [${i}] Company: "${p.Company || '(none)'}"`);
    console.log(`       Email:   ${p.EMail || '(none)'}`);
    console.log(`       Phone:   ${p.WorkPhone || '(none)'}`);
    console.log(`       Name:    ${[p.FirstName, p.LastName].filter(Boolean).join(' ') || '(none)'}`);
    console.log(`       Address: ${[p.Street, p.City, p.State, p.Zip].filter(Boolean).join(', ') || '(none)'}`);
    console.log('');
  });
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
