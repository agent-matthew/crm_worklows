/**
 * test-auth-headers.js
 * 
 * DISCOVERY: GET /byteapi/Auth returned 200 and told us it needs:
 *   - username (header)
 *   - password (header)
 *   - authorizationkey (header)
 * 
 * This test passes creds as custom headers to get a session ID,
 * then uses that session to call SearchHelp and Search.
 * 
 * Results → test-results-headers.txt
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

async function main() {
  log('=== BytePro Custom-Header Auth Test ===');
  log(`Time: ${new Date().toISOString()}\n`);

  // Step 1: GET /byteapi/Auth with custom headers
  log('--- STEP 1: GET /byteapi/Auth (custom headers) ---');
  let sessionId = null;
  try {
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
    log(`STATUS: ${res.status} ${res.statusText}`);
    log(`HEADERS: ${JSON.stringify(res.headers, null, 2)}`);
    const data = typeof res.data === 'string' ? res.data : JSON.stringify(res.data, null, 2);
    log(`BODY:\n${data}`);
    
    // Try to extract session ID from response
    if (typeof res.data === 'object') {
      // Could be in a SessionID, sessionId, Token, etc. field
      sessionId = res.data.SessionID || res.data.sessionId || res.data.Session 
        || res.data.session || res.data.Token || res.data.token
        || res.data.AuthToken || res.data.authToken || res.data.Id || res.data.id;
      
      // If it's an array, check first element
      if (Array.isArray(res.data) && res.data.length > 0) {
        const first = res.data[0];
        sessionId = first.SessionID || first.sessionId || first.Session || first.Token || first.Id;
      }
    }
    // Also check response headers for a session
    const setCookie = res.headers['set-cookie'];
    if (setCookie) log(`SET-COOKIE: ${JSON.stringify(setCookie)}`);
    
    log(`\nExtracted Session ID: ${sessionId || 'NOT FOUND - check body above'}`);
  } catch (e) {
    const s = e.response?.status || 'ERR';
    log(`STATUS: ${s}`);
    if (e.response?.data) {
      const d = typeof e.response.data === 'string' ? e.response.data : JSON.stringify(e.response.data, null, 2);
      log(`BODY:\n${d}`);
    }
  }
  log('');

  // Step 2: Try SearchHelp with session in various header positions
  log('--- STEP 2: Try endpoints with various session header placements ---');

  const sessionValues = [sessionId, KEY].filter(Boolean); // try both
  const headerNames = ['Session', 'SessionID', 'Authorization', 'sessionid', 'session'];
  
  for (const sv of sessionValues) {
    for (const hn of headerNames) {
      const label = `SearchHelp with ${hn}: ${sv.substring(0, 12)}...`;
      try {
        const res = await axios({
          url: `${BASE}/byteapi/SearchHelp`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            [hn]: sv,
          },
        });
        log(`✅ ${label} → ${res.status}`);
        const data = typeof res.data === 'string' ? res.data : JSON.stringify(res.data, null, 2);
        log(`BODY:\n${data.substring(0, 2000)}`);
        log('>>> THIS WORKS <<<\n');
      } catch (e) {
        const msg = e.response?.data?.Message || e.response?.status || e.message;
        log(`❌ ${label} → ${msg}`);
      }
    }
  }
  log('');

  // Step 3: Try POST Search with creds as headers directly (no session step)
  log('--- STEP 3: POST Search with creds as headers (bypass session) ---');
  try {
    const res = await axios({
      url: `${BASE}/byteapi/Search`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'username': USER,
        'password': PASS,
        'authorizationkey': KEY,
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
    log(`STATUS: ${res.status}`);
    const data = typeof res.data === 'string' ? res.data : JSON.stringify(res.data, null, 2);
    log(`BODY:\n${data.substring(0, 3000)}`);
    log('>>> DIRECT SEARCH WORKS <<<');
  } catch (e) {
    const s = e.response?.status || 'ERR';
    const d = e.response?.data ? JSON.stringify(e.response.data) : e.message;
    log(`STATUS: ${s}`);
    log(`BODY: ${d.substring(0, 500)}`);
  }

  log('\n=== Done ===');
  
  const outFile = path.join(__dirname, '..', 'test-results-headers.txt');
  fs.writeFileSync(outFile, output.join('\n'), 'utf8');
  console.log(`Results: ${outFile}`);
}

main();
