const axios = require('axios');
const config = require('./config');

let sessionToken = null;

/**
 * Authenticate with BytePro and get a session token.
 * 
 * Flow: GET /byteapi/Auth with custom headers → returns Base64 session token.
 */
async function authenticate() {
  const res = await axios({
    url: `${config.baseUrl}/byteapi/Auth`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'username': config.username,
      'password': config.password,
      'authorizationkey': config.apiKey,
    },
  });
  sessionToken = typeof res.data === 'string' ? res.data.trim() : String(res.data).trim();
  console.log(`🔑 Authenticated (token: ${sessionToken.substring(0, 20)}...)`);
  return sessionToken;
}

/**
 * Ensure we have a valid session. Re-authenticates if needed.
 */
async function ensureSession() {
  if (!sessionToken) {
    await authenticate();
  }
  return sessionToken;
}

/**
 * Make an authenticated API call to BytePro.
 * Automatically handles session acquisition and retry on 401.
 */
async function apiCall(method, endpoint, data = null) {
  await ensureSession();

  const makeRequest = () => axios({
    url: `${config.baseUrl}${endpoint}`,
    method,
    headers: {
      'Content-Type': 'application/json',
      'Session': sessionToken,
    },
    data,
  });

  try {
    const res = await makeRequest();
    return res.data;
  } catch (err) {
    // If 401 (session expired), re-auth and retry once
    if (err.response?.status === 401) {
      console.log('⟳ Session expired, re-authenticating...');
      await authenticate();
      const res = await makeRequest();
      return res.data;
    }
    throw err;
  }
}

/**
 * Convenience: POST /byteapi/Search
 */
async function search(searchFields, options = {}) {
  const body = {
    SearchExportCSV: false,
    SearchDisplayHeaders: false,
    ShowDetailRecords: true,
    ...options,
    SearchFields: searchFields,
  };
  return apiCall('POST', '/byteapi/Search', body);
}

/**
 * GET /byteapi/SearchHelp — returns API schema docs.
 */
async function searchHelp() {
  return apiCall('GET', '/byteapi/SearchHelp');
}

/**
 * GET /byteapi/SearchExample — returns example search body.
 */
async function searchExample() {
  return apiCall('GET', '/byteapi/SearchExample');
}

module.exports = { authenticate, apiCall, search, searchHelp, searchExample };
