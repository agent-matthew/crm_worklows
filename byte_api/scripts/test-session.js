/**
 * test-session.js
 * 
 * BytePro uses session-based auth. The POST /Search returned:
 *   "Session is not valid on header. Session ID is invalid."
 * 
 * Approach:
 * 1. First, GET SearchHelp with Content-Type to see if we get the API docs
 * 2. Try common BytePro auth endpoints to get a session
 * 3. Try passing API key as session via various headers
 * 
 * Results go to test-results-session.txt
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

const attempts = [
  // First, get the SearchHelp/SearchExample with correct content type
  {
    name: '1. GET SearchHelp with Content-Type: application/json',
    config: {
      url: `${BASE}/byteapi/SearchHelp?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
      headers: { 'Content-Type': 'application/json' },
    }
  },
  {
    name: '2. GET SearchExample with Content-Type: application/json',
    config: {
      url: `${BASE}/byteapi/SearchExample?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
      headers: { 'Content-Type': 'application/json' },
    }
  },
  // Try session-based auth: maybe the API key IS the session
  {
    name: '3. POST Search with API key as SessionID header',
    config: {
      url: `${BASE}/byteapi/Search`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'SessionID': KEY,
      },
      auth: { username: USER, password: PASS },
      data: {
        SearchExportCSV: false,
        SearchDisplayHeaders: false,
        ShowDetailRecords: true,
        SearchFields: [
          { FieldName: "FileName", TableName: "FileData" }
        ]
      }
    }
  },
  {
    name: '4. POST Search with API key as Session header',
    config: {
      url: `${BASE}/byteapi/Search`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Session': KEY,
      },
      auth: { username: USER, password: PASS },
      data: {
        SearchExportCSV: false,
        SearchDisplayHeaders: false,
        ShowDetailRecords: true,
        SearchFields: [
          { FieldName: "FileName", TableName: "FileData" }
        ]
      }
    }
  },
  // Maybe we need to get a session via a Login/Auth endpoint
  {
    name: '5. POST Login',
    config: {
      url: `${BASE}/byteapi/Login?key=${KEY}`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: { UserName: USER, Password: PASS }
    }
  },
  {
    name: '6. POST Authenticate',
    config: {
      url: `${BASE}/byteapi/Authenticate?key=${KEY}`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: { UserName: USER, Password: PASS }
    }
  },
  {
    name: '7. GET Auth with creds + key',
    config: {
      url: `${BASE}/byteapi/Auth?key=${KEY}`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      auth: { username: USER, password: PASS },
    }
  },
  {
    name: '8. GET Connect',
    config: {
      url: `${BASE}/byteapi/Connect?key=${KEY}`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      auth: { username: USER, password: PASS },
    }
  },
  {
    name: '9. GET Session',
    config: {
      url: `${BASE}/byteapi/Session?key=${KEY}`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      auth: { username: USER, password: PASS },
    }
  },
  // Bruno shows a "GET Authorization" tab — maybe it's at root level
  {
    name: '10. GET /Authorization (no byteapi prefix)',
    config: {
      url: `${BASE}/Authorization?key=${KEY}`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      auth: { username: USER, password: PASS },
    }
  },
];

async function main() {
  log('=== BytePro Session Auth Discovery ===');
  log(`Time: ${new Date().toISOString()}`);
  log('');

  for (const a of attempts) {
    log(`--- ${a.name} ---`);
    log(`${a.config.method} ${a.config.url}`);
    try {
      const res = await axios(a.config);
      log(`STATUS: ${res.status} ${res.statusText}`);
      const data = typeof res.data === 'string' ? res.data : JSON.stringify(res.data, null, 2);
      log(`BODY (first 3000):\n${data.substring(0, 3000)}`);
    } catch (e) {
      const s = e.response?.status || 'NO_RESPONSE';
      const st = e.response?.statusText || e.message;
      log(`STATUS: ${s} ${st}`);
      if (e.response?.data) {
        const d = typeof e.response.data === 'string' ? e.response.data : JSON.stringify(e.response.data, null, 2);
        log(`BODY:\n${d.substring(0, 1000)}`);
      }
    }
    log('');
  }

  log('=== Done ===');
  
  const outFile = path.join(__dirname, '..', 'test-results-session.txt');
  fs.writeFileSync(outFile, output.join('\n'), 'utf8');
  console.log(`Results: ${outFile}`);
}

main();
