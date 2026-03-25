/**
 * test-auth-variants.js
 * 
 * Tries multiple auth approaches against BytePro to find what works.
 * Usage: node scripts/test-auth-variants.js
 */
require('dotenv').config();
const axios = require('axios');

const BASE = process.env.BYTEPRO_BASE_URL;
const KEY  = process.env.BYTEPRO_API_KEY;
const USER = process.env.BYTEPRO_USERNAME;
const PASS = process.env.BYTEPRO_PASSWORD;

const attempts = [
  {
    name: 'Basic Auth + API key as query param',
    config: {
      url: `${BASE}/byteapi/SearchHelp?key=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
      headers: { 'Accept': 'application/json' },
    }
  },
  {
    name: 'Basic Auth only (no API key)',
    config: {
      url: `${BASE}/byteapi/SearchHelp`,
      method: 'GET',
      auth: { username: USER, password: PASS },
      headers: { 'Accept': 'application/json' },
    }
  },
  {
    name: 'API key as Authorization Bearer',
    config: {
      url: `${BASE}/byteapi/SearchHelp`,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${KEY}`,
      },
    }
  },
  {
    name: 'API key as custom header (X-API-Key)',
    config: {
      url: `${BASE}/byteapi/SearchHelp`,
      method: 'GET',
      auth: { username: USER, password: PASS },
      headers: {
        'Accept': 'application/json',
        'X-API-Key': KEY,
      },
    }
  },
  {
    name: 'API key as "apikey" query param + Basic Auth',
    config: {
      url: `${BASE}/byteapi/SearchHelp?apikey=${KEY}`,
      method: 'GET',
      auth: { username: USER, password: PASS },
      headers: { 'Accept': 'application/json' },
    }
  },
  {
    name: 'All-in-URL: Basic Auth embedded + API key param',
    config: {
      url: `https://${encodeURIComponent(USER)}:${encodeURIComponent(PASS)}@hosting.bytesoftware.com/apps/Bwe_58554/byteapi/SearchHelp?key=${KEY}`,
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    }
  },
  {
    name: 'GET Authorization endpoint first',
    config: {
      url: `${BASE}/byteapi/Authorization`,
      method: 'GET',
      auth: { username: USER, password: PASS },
      headers: {
        'Accept': 'application/json',
        'key': KEY,
      },
    }
  },
  {
    name: 'API key in "key" header + Basic Auth',
    config: {
      url: `${BASE}/byteapi/SearchHelp`,
      method: 'GET',
      auth: { username: USER, password: PASS },
      headers: {
        'Accept': 'application/json',
        'key': KEY,
      },
    }
  },
];

async function main() {
  console.log('=== BytePro Auth Variant Tester ===');
  console.log(`Base URL: ${BASE}\n`);

  for (let i = 0; i < attempts.length; i++) {
    const a = attempts[i];
    console.log(`${i + 1}. ${a.name}`);
    try {
      const res = await axios(a.config);
      console.log(`   ✅ SUCCESS — Status ${res.status}`);
      const data = typeof res.data === 'string' ? res.data : JSON.stringify(res.data, null, 2);
      console.log(`   Response (first 500 chars): ${data.substring(0, 500)}`);
      console.log('   >>> THIS AUTH METHOD WORKS <<<\n');
      // Don't stop — let's see if multiple work
    } catch (e) {
      const status = e.response?.status || 'N/A';
      const msg = e.response?.data ? JSON.stringify(e.response.data).substring(0, 200) : e.message;
      console.log(`   ❌ ${status} — ${msg}\n`);
    }
  }
  console.log('=== Done ===');
}

main();
