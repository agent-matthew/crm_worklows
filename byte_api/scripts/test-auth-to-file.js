/**
 * test-auth-to-file.js
 * 
 * Writes test results to a file for clean reading.
 * Usage: node scripts/test-auth-to-file.js
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
  {
    name: '1. GET Authorization — Basic Auth + key param',
    config: {
      url: `${BASE}/byteapi/Authorization?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
    }
  },
  {
    name: '2. GET SearchHelp — no Accept header',
    config: {
      url: `${BASE}/byteapi/SearchHelp?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
    }
  },
  {
    name: '3. GET SearchExample — no Accept header',
    config: {
      url: `${BASE}/byteapi/SearchExample?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
    }
  },
  {
    name: '4. POST Search — full JSON body',
    config: {
      url: `${BASE}/byteapi/Search?key=${KEY}`,
      method: 'POST',
      auth: { username: USER, password: PASS },
      headers: { 'Content-Type': 'application/json' },
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
    name: '5. GET Loan — try loan endpoint',
    config: {
      url: `${BASE}/byteapi/Loan?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
    }
  },
];

async function main() {
  log('=== BytePro Auth Test Results ===');
  log(`Base: ${BASE}`);
  log(`User: ${USER}`);
  log(`Time: ${new Date().toISOString()}`);
  log('');

  for (const a of attempts) {
    log(`--- ${a.name} ---`);
    log(`URL: ${a.config.url}`);
    try {
      const res = await axios(a.config);
      log(`STATUS: ${res.status} ${res.statusText}`);
      log(`HEADERS: ${JSON.stringify(res.headers, null, 2)}`);
      const data = typeof res.data === 'string' ? res.data : JSON.stringify(res.data, null, 2);
      log(`BODY:\n${data.substring(0, 3000)}`);
    } catch (e) {
      const s = e.response?.status || 'NO_RESPONSE';
      const st = e.response?.statusText || e.message;
      log(`STATUS: ${s} ${st}`);
      if (e.response?.headers) log(`HEADERS: ${JSON.stringify(e.response.headers, null, 2)}`);
      if (e.response?.data) {
        const d = typeof e.response.data === 'string' ? e.response.data : JSON.stringify(e.response.data, null, 2);
        log(`BODY:\n${d.substring(0, 1000)}`);
      }
    }
    log('');
  }

  log('=== Done ===');
  
  const outFile = path.join(__dirname, '..', 'test-results.txt');
  fs.writeFileSync(outFile, output.join('\n'), 'utf8');
  console.log(`Results written to ${outFile}`);
}

main();
