require('dotenv').config();

const config = {
  baseUrl: process.env.BYTEPRO_BASE_URL,
  apiKey: process.env.BYTEPRO_API_KEY,
  username: process.env.BYTEPRO_USERNAME,
  password: process.env.BYTEPRO_PASSWORD,
};

// Validate all required vars are present
const missing = Object.entries(config)
  .filter(([, v]) => !v)
  .map(([k]) => k);

if (missing.length) {
  console.error(`❌ Missing env vars: ${missing.join(', ')}`);
  console.error('   Copy .env.example → .env and fill in your values.');
  process.exit(1);
}

module.exports = config;
