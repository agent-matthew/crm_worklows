require('dotenv').config();

const config = {
  // BytePro API
  baseUrl: process.env.BYTEPRO_BASE_URL,
  apiKey: process.env.BYTEPRO_API_KEY,
  username: process.env.BYTEPRO_USERNAME,
  password: process.env.BYTEPRO_PASSWORD,

  // SMTP (for sending lender order emails)
  smtpHost: process.env.SMTP_HOST || '',
  smtpPort: parseInt(process.env.SMTP_PORT || '587'),
  smtpUser: process.env.SMTP_USER || '',
  smtpPass: process.env.SMTP_PASS || '',
  smtpFrom: process.env.SMTP_FROM || '',
  smtpMock: process.env.SMTP_MOCK !== 'false',  // default: true (mock mode)

  // GHL CRM
  ghlAccessToken: process.env.GHL_ACCESS_TOKEN || '',
  ghlMock: process.env.GHL_MOCK !== 'false',  // default: true (mock mode)

  // Server
  port: parseInt(process.env.PORT || '3000'),
};

// Validate BytePro vars (required always)
const byteMissing = ['baseUrl', 'apiKey', 'username', 'password']
  .filter(k => !config[k]);

if (byteMissing.length) {
  console.error(`❌ Missing BytePro env vars: ${byteMissing.join(', ')}`);
  console.error('   Copy .env.example → .env and fill in your values.');
  process.exit(1);
}

module.exports = config;
