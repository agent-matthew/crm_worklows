/**
 * email-service.js
 * 
 * SMTP email sender with mock mode.
 * In mock mode, logs emails to console instead of sending.
 * Flip SMTP_MOCK=false in .env when real credentials are ready.
 */
const nodemailer = require('nodemailer');
const config = require('./config');

let transporter = null;

/**
 * Initialize the SMTP transporter.
 * In mock mode, uses nodemailer's built-in test account.
 */
async function initTransporter() {
  if (config.smtpMock) {
    console.log('📧 Email service running in MOCK mode (no real emails will be sent)');
    // Use Ethereal for mock — emails go nowhere but can be previewed
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    return;
  }

  // Real SMTP
  transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: config.smtpPort === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  });

  // Verify connection
  try {
    await transporter.verify();
    console.log('📧 SMTP connection verified — emails will be sent for real');
  } catch (err) {
    console.error('❌ SMTP connection failed:', err.message);
    throw err;
  }
}

/**
 * Send an email.
 * 
 * @param {Object} options
 * @param {string} options.to - Recipient email
 * @param {string[]} [options.cc] - CC recipients
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML body
 * @param {string} [options.text] - Plain text body (fallback)
 * @returns {Promise<Object>} Send result with preview URL in mock mode
 */
async function sendEmail({ to, cc = [], subject, html, text }) {
  if (!transporter) {
    await initTransporter();
  }

  const from = config.smtpFrom || config.smtpUser || 'processing@mypriorityhome.com';

  const mailOptions = {
    from,
    to,
    cc: cc.length > 0 ? cc.join(', ') : undefined,
    subject,
    html,
    text: text || html.replace(/<[^>]*>/g, ''),  // strip HTML as plain-text fallback
  };

  // Log what we're sending
  console.log('\n────────────────────────────────────────');
  console.log(`📤 ${config.smtpMock ? '[MOCK] ' : ''}Sending email:`);
  console.log(`   From:    ${from}`);
  console.log(`   To:      ${to}`);
  if (cc.length > 0) {
    console.log(`   CC:      ${cc.join(', ')}`);
  }
  console.log(`   Subject: ${subject}`);
  console.log('────────────────────────────────────────');

  try {
    const info = await transporter.sendMail(mailOptions);

    if (config.smtpMock) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log(`   ✅ Mock email sent — Preview: ${previewUrl}`);
      return { success: true, messageId: info.messageId, previewUrl };
    }

    console.log(`   ✅ Email sent — Message ID: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error(`   ❌ Failed to send email: ${err.message}`);
    return { success: false, error: err.message };
  }
}

module.exports = { sendEmail, initTransporter };
