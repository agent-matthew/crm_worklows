/**
 * test-with-session.js
 * 
 * CONFIRMED: GET /byteapi/Auth returns a Base64 session token.
 * Now we use that token on subsequent API calls.
 * 
 * Results → test-results-final.txt
 */
require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const BASE = process.env.BYTEPRO_BASE_URL;
const KEY  = process.env.BYTEPRO_API_KEY;
const USER = process.env.BYTEPRO_USERNAME;
const PASS = process.env.BYTEPRO_PASSWORD;

const output = [];
function log(msg) { output.push(msg); }

async function getSession() {
  const res = await axios({
    url: `${BASE}/byteapi/Auth`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'username': USER,
      'password': PASS,
      'authorizationkey': KEY,
    },
  });
  // Response body is the raw session token string
  return typeof res.data === 'string' ? res.data.trim() : String(res.data).trim();
}

async function main() {
  log('=== BytePro Session Token Test ===');
  log(`Time: ${new Date().toISOString()}\n`);

  // Step 1: Get session
  let token;
  try {
    token = await getSession();
    log(`Session token: ${token}`);
    log(`Token length: ${token.length}\n`);
  } catch (e) {
    log(`Failed to get session: ${e.response?.data || e.message}`);
    return finish();
  }

  // Step 2: Try token in different headers on SearchHelp
  const headerNames = ['Session', 'SessionID', 'sessionid', 'Authorization', 'session', 'authsession'];
  
  log('--- Testing session token header name ---');
  for (const hn of headerNames) {
    try {
      const res = await axios({
        url: `${BASE}/byteapi/SearchHelp`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          [hn]: token,
        },
      });
      log(`✅ Header "${hn}" → ${res.status}`);
      const data = typeof res.data === 'string' ? res.data : JSON.stringify(res.data, null, 2);
      log(`BODY (first 3000):\n${data.substring(0, 3000)}`);
      log('>>> FOUND WORKING HEADER <<<\n');
    } catch (e) {
      const msg = e.response?.data?.Message || `${e.response?.status}`;
      log(`❌ Header "${hn}" → ${msg}`);
    }
  }
  log('');

  // Step 3: Also try Bearer prefix
  log('--- Testing Bearer prefix ---');
  for (const prefix of ['Bearer ', 'bearer ', '']) {
    const val = `${prefix}${token}`;
    try {
      const res = await axios({
        url: `${BASE}/byteapi/SearchHelp`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': val,
        },
      });
      log(`✅ Authorization: "${prefix}..." → ${res.status}`);
      const data = typeof res.data === 'string' ? res.data : JSON.stringify(res.data, null, 2);
      log(`BODY:\n${data.substring(0, 3000)}`);
      log('>>> FOUND WORKING FORMAT <<<\n');
    } catch (e) {
      const msg = e.response?.data?.Message || `${e.response?.status}`;
      log(`❌ Authorization: "${prefix}..." → ${msg}`);
    }
  }

  // Step 4: Try POST Search with session
  log('\n--- Testing POST Search with session token ---');
  for (const hn of ['Session', 'SessionID', 'session']) {
    try {
      const res = await axios({
        url: `${BASE}/byteapi/Search`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          [hn]: token,
        },
        data: {
          SearchExportCSV: false,
          SearchDisplayHeaders: false,
          ShowDetailRecords: true,
          SearchFields: [
            { FieldName: "FileName", TableName: "FileData" }
          ]
        }
      });
      log(`✅ POST Search with "${hn}" → ${res.status}`);
      const data = typeof res.data === 'string' ? res.data : JSON.stringify(res.data, null, 2);
      log(`BODY (first 5000):\n${data.substring(0, 5000)}`);
      log('>>> SEARCH WORKS <<<\n');
    } catch (e) {
      const msg = e.response?.data?.Message || `${e.response?.status}`;
      log(`❌ POST Search with "${hn}" → ${msg}`);
    }
  }

  finish();
}

function finish() {
  output.push('\n=== Done ===');
  const outFile = path.join(__dirname, '..', 'test-results-final.txt');
  fs.writeFileSync(outFile, output.join('\n'), 'utf8');
  console.log(`Results: ${outFile}`);
}

main();
