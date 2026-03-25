/**
 * server.js
 * 
 * Express webhook server for the BytePro Workflow Service.
 * Receives GHL webhook notifications and orchestrates workflows.
 * 
 * Endpoints:
 *   GET  /           — Health check
 *   POST /webhook/processing — Processing milestone trigger
 */
const express = require('express');
const config = require('./config');
const { handleProcessingTrigger } = require('./handlers/processing-trigger');

const app = express();
app.use(express.json());

// ─── Health Check ───────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({
    status: 'active',
    service: 'BytePro Workflow Service',
    mock: {
      smtp: config.smtpMock,
      ghl: config.ghlMock,
    },
  });
});

// ─── Processing Milestone Webhook ───────────────────────────
app.post('/webhook/processing', async (req, res) => {
  const data = req.body;

  if (!data) {
    return res.status(400).json({ error: 'No JSON payload provided' });
  }

  console.log(`\n📨 Received webhook at /webhook/processing`);
  console.log(`   Payload keys: ${Object.keys(data).join(', ')}`);

  try {
    const result = await handleProcessingTrigger(data);

    // Always return 200 to prevent GHL from retrying
    // (even if our processing fails — we handle errors internally)
    res.json({
      status: result.success ? 'success' : 'handled_error',
      message: result.message,
      details: result.details,
    });
  } catch (err) {
    console.error('💥 Unhandled error in processing trigger:', err);
    // Still return 200 to prevent webhook retries
    res.json({
      status: 'error',
      message: err.message,
    });
  }
});

// ─── Start Server ───────────────────────────────────────────
app.listen(config.port, () => {
  console.log(`\n${'═'.repeat(50)}`);
  console.log(`  BytePro Workflow Service`);
  console.log(`  Port: ${config.port}`);
  console.log(`  SMTP: ${config.smtpMock ? 'MOCK' : 'LIVE'}`);
  console.log(`  GHL:  ${config.ghlMock ? 'MOCK' : 'LIVE'}`);
  console.log(`${'═'.repeat(50)}\n`);
});

module.exports = app;
