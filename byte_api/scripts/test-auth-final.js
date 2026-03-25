/**
 * test-auth-final.js
 * 
 * Focused auth test: the 406 "Invalid Content Type" response suggests 
 * auth is passing but BytePro wants a specific content type.
 * Let's try text/xml, no Accept header, etc.
 * Also tries the GET Authorization endpoint which Bruno shows in the screenshots.
 * 
 * Usage: node scripts/test-auth-final.js
 */
require('dotenv').config();
const axios = require('axios');

const BASE = process.env.BYTEPRO_BASE_URL;
const KEY  = process.env.BYTEPRO_API_KEY;
const USER = process.env.BYTEPRO_USERNAME;
const PASS = process.env.BYTEPRO_PASSWORD;

const attempts = [
  {
    name: '1. GET Authorization (from Bruno) — Basic Auth + key query param',
    config: {
      url: `${BASE}/byteapi/Authorization?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
    }
  },
  {
    name: '2. SearchHelp — no Accept header, key as param',
    config: {
      url: `${BASE}/byteapi/SearchHelp?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
    }
  },
  {
    name: '3. SearchHelp — Accept text/plain',
    config: {
      url: `${BASE}/byteapi/SearchHelp?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
      headers: { 'Accept': 'text/plain' },
    }
  },
  {
    name: '4. SearchHelp — Accept text/html',
    config: {
      url: `${BASE}/byteapi/SearchHelp?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
      headers: { 'Accept': 'text/html' },
    }
  },
  {
    name: '5. SearchHelp — Accept */*',
    config: {
      url: `${BASE}/byteapi/SearchHelp?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
      headers: { 'Accept': '*/*' },
    }
  },
  {
    name: '6. SearchExample — Accept application/json + key param',
    config: {
      url: `${BASE}/byteapi/SearchExample?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
      headers: { 'Accept': 'application/json' },
    }
  },
  {
    name: '7. Search POST — with JSON body from Bruno screenshot',
    config: {
      url: `${BASE}/byteapi/Search?key=${KEY}`,
      method: 'POST',
      auth: { username: USER, password: PASS },
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      data: {
        SearchExportCSV: false,
        SearchDisplayHeaders: false,
        ShowDetailRecords: true,
        SearchFields: [
          {
            FieldName: "FileName",
            TableName: "FileData"
          }
        ]
      }
    }
  },
  {
    name: '8. SearchExampleStructure — GET',
    config: {
      url: `${BASE}/byteapi/SearchExampleStructure?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
    }
  },
];

async function main() {
  console.log('=== BytePro Auth & Content Type Test ===');
  console.log(`Base URL: ${BASE}`);
  console.log(`User: ${USER}\n`);

  for (const a of attempts) {
    console.log(a.name);
    try {
      const res = await axios(a.config);
      console.log(`   ✅ ${res.status} ${res.statusText}`);
      const data = typeof res.data === 'string' ? res.data : JSON.stringify(res.data, null, 2);
      console.log(`   Response:\n${data.substring(0, 1500)}`);
      if (data.length > 1500) console.log('   ...(truncated)');
      console.log();
    } catch (e) {
      const s = e.response?.status || 'ERR';
      const d = e.response?.data;
      const msg = d ? (typeof d === 'string' ? d.substring(0, 300) : JSON.stringify(d).substring(0, 300)) : e.message;
      console.log(`   ❌ ${s}: ${msg}\n`);
    }
  }
  console.log('=== Done ===');
}

main();
