/**
 * test-workflow.js
 * 
 * End-to-end test of the Processing Trigger workflow.
 * Simulates a GHL webhook payload and runs the full pipeline:
 *   BytePro fetch → email build → mock send → GHL field update (mock)
 * 
 * Usage: node -r dotenv/config scripts/test-workflow.js [LOAN_NUMBER]
 * Default: PHM0124084419 (known to have title company data)
 */
const { handleProcessingTrigger } = require('../src/handlers/processing-trigger');

async function main() {
  const loanNumber = process.argv[2] || 'PHM0124084419';

  console.log('╔══════════════════════════════════════════════════╗');
  console.log('║   BytePro Workflow Service — E2E Test            ║');
  console.log('╚══════════════════════════════════════════════════╝');
  console.log(`\nSimulating GHL webhook for loan: ${loanNumber}`);

  // Simulate a GHL webhook payload
  const mockWebhookPayload = {
    id: 'opp_test_12345',
    name: `Loan - ${loanNumber}`,
    pipelineId: 'pipe_test_001',
    pipelineStageId: 'stage_processing',
    status: 'open',
    contact: {
      id: 'contact_test_001',
      name: 'Test Borrower',
      email: 'test@example.com',
    },
    customData: {
      // Loan amount comes from GHL custom field (same as commission_app)
      loan_with_mipfunding_fee: '325000',
      // Additional CC emails from CRM (optional)
      // cc_emails: 'extra@mypriorityhome.com'
    },
  };

  console.log('\nMock webhook payload:');
  console.log(JSON.stringify(mockWebhookPayload, null, 2));

  // Run the handler
  const result = await handleProcessingTrigger(mockWebhookPayload);

  console.log('\n╔══════════════════════════════════════════════════╗');
  console.log('║   TEST RESULT                                    ║');
  console.log('╚══════════════════════════════════════════════════╝');
  console.log(JSON.stringify(result, null, 2));

  process.exit(result.success ? 0 : 1);
}

main().catch(err => {
  console.error('💥 Test failed:', err);
  process.exit(1);
});
