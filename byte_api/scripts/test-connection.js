/**
 * test-connection.js
 * 
 * Smoke test: hits BytePro's SearchHelp and SearchExample endpoints
 * to verify auth works and learn the API shape.
 * 
 * Usage: node scripts/test-connection.js
 */
const client = require('../src/client');

async function main() {
  console.log('=== BytePro API Connection Test ===\n');

  // --- Test 1: SearchHelp ---
  console.log('1️⃣  GET /byteapi/SearchHelp');
  try {
    const help = await client.get('/byteapi/SearchHelp');
    console.log('   ✅ Status:', help.status);
    console.log('   Response (first 2000 chars):\n');
    const data = typeof help.data === 'string' ? help.data : JSON.stringify(help.data, null, 2);
    console.log(data.substring(0, 2000));
    console.log('\n   --- (truncated) ---\n');
  } catch (e) {
    console.log('   ❌ Failed. See error above.\n');
  }

  // --- Test 2: SearchExample ---
  console.log('2️⃣  GET /byteapi/SearchExample');
  try {
    const example = await client.get('/byteapi/SearchExample');
    console.log('   ✅ Status:', example.status);
    const data = typeof example.data === 'string' ? example.data : JSON.stringify(example.data, null, 2);
    console.log('   Response:\n');
    console.log(data.substring(0, 3000));
    console.log('\n   --- (truncated) ---\n');
  } catch (e) {
    console.log('   ❌ Failed. See error above.\n');
  }

  console.log('=== Done ===');
}

main();
