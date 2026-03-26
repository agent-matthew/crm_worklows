# Session Handover — BytePro PTD Email Automation
> Last updated: 2026-03-25

---

## ✅ What's Done

### PTD Conditions Email (fully working)
- **Script**: `scripts/test-conditions-email.js` — standalone, production-ready
- **Sends to**: All team members (processors + LO) on a single email thread (Reply All enabled)
- **Subject**: `[LastName] [LoanNumber] - Condition Update`
- **Content**: Outlook-compatible HTML with borrower header, team contacts, BRW badges, date-stamped Requested/Received columns
- **Attachment**: PDF generated via Puppeteer
- **Filters**: PTD only, NOT cleared, 8 canned conditions excluded (410, 606, 607, 608, 610, 705, 713, 720)
- **Sorting**: BRW conditions sorted to top

### Supporting Infrastructure
- `src/email-service.js` — SMTP via Google Workspace (`processing@mypriorityhome.com`), supports attachments
- `src/client.js` — BytePro API client with auto-retry on 401
- `architect.md` — Full documentation of the workflow

---

## 🔜 Next Session: GHL Webhook → PTD Email

### Goal
Wire up a GoHighLevel workflow so that when a loan moves to **"Conditional Approval"**, it fires a webhook that triggers the PTD email automatically.

### GHL Workflow Setup (for you to configure in GHL)
```
Trigger: Pipeline Stage Changed → "Conditional Approval"
Action:  Webhook (POST) → https://<your-server>/webhook/ptd-conditions
```

#### Webhook Payload (recommended)
The webhook should send the loan file number. Configure GHL to POST:
```json
{
  "file_number": "{{custom_field.loan_number}}",
  "contact_id": "{{contact.id}}",
  "opportunity_id": "{{opportunity.id}}"
}
```
> The loan number can also be parsed from the opportunity name pattern: `"Loan - PHM..."` (this is how the Processing trigger works today).

### What We'll Build Next Session
1. **New Express endpoint**: `POST /webhook/ptd-conditions`
   - Receives GHL webhook with file number
   - Calls `fetchBorrower()`, `fetchTeam()`, `fetchPTDConditions()` in parallel
   - Builds email + PDF and sends to team
   - Returns 200 OK to GHL

2. **Production handler**: `src/handlers/ptd-conditions-trigger.js`
   - Refactored from `scripts/test-conditions-email.js`
   - Proper error handling, logging, response to GHL

3. **Server route registration**: Add to `src/server.js`

### Reference: Existing Processing Trigger Pattern
The Processing workflow already works this way — see:
- `src/handlers/processing-trigger.js` — handler pattern to follow
- `src/server.js` — existing route: `POST /webhook/processing`

---

## 📋 Full Roadmap (from architect.md)

| Priority | Item | Status |
|----------|------|--------|
| **NOW** | GHL Webhook → PTD email | ⬜ Next session |
| 2 | Prior To Funding email (at "Approval" milestone) | ⬜ Planned |
| 3 | Conditions Dashboard (web UI) | ⬜ Planned |
| 4 | Twilio SMS from Dashboard | ⬜ Planned |
| 5 | Deploy to AWS App Runner | ⬜ Planned |
| 6 | Google Sheets integration | ⬜ Planned |
