# BytePro API Integration — Architect Document

> **Living Document** — Updated as we build, test, and expand the integration.
> Last updated: 2026-03-25 (PTD email workflow finalized)

---

## 1. Objective

Build a **workflow automation service** that fetches loan data from BytePro Enterprise (mortgage LOS) and uses it to power CRM workflows — lender order emails, internal reminders, and CRM field updates — triggered by GoHighLevel milestone changes.

### Implemented Workflows
| # | Trigger | Action | Data Fetched | Status |
|---|---------|--------|-------------|--------|
| 1 | Loan → "Processing" | Email title company for lender order | Title Co, Borrower(s), CC recipients | ✅ Working |
| 2 | Loan → "Processing" | Internal reminder to processor | Processor email, borrower names | ✅ Working |
| 3 | Loan → "Processing" | Update CRM custom fields | Title company name/email/phone | ✅ Mock |

### Future Workflows
| # | Trigger | Action | Status |
|---|---------|--------|--------|
| 4 | Loan → "Conditional Approval" | Email **Prior To Docs** conditions to team | ✅ Working |
| 5 | Loan → "Approval" | Email **Prior To Funding** conditions to team | ⬜ Planned |
| 6 | CRM contact cards | Populate from BytePro parties | ⬜ Planned |
| 7 | Status sync | Loan status, milestone dates | ⬜ Planned |
| 8 | Conditions Dashboard | Web dashboard showing open conditions per file with sorting, filtering | ⬜ Planned |
| 9 | Twilio SMS from Dashboard | Processor texts borrower from dashboard re: outstanding BRW conditions | ⬜ Planned |

---

## 2. Architecture

```
GHL CRM                        Our Service                    BytePro API
┌──────────────┐               ┌──────────────────┐           ┌──────────────┐
│  Loan moves  │──webhook──▶   │  byte_api/       │──REST──▶  │  ByteWeb     │
│  to milestone│               │  (Node/Express)  │◀──────    │  Search API  │
└──────────────┘               └──────┬───────────┘           └──────────────┘
                                      │
                        ┌─────────────┼─────────────┐
                        ▼             ▼             ▼
                   ┌─────────┐  ┌──────────┐  ┌─────────┐
                   │  SMTP   │  │   GHL    │  │ Google  │
                   │  Email  │  │   API    │  │ Sheets  │
                   │(lender) │  │(fields)  │  │(future) │
                   └─────────┘  └──────────┘  └─────────┘
```

| Layer | Choice | Reason |
|-------|--------|--------|
| Runtime | Node.js + Express | Fast setup, aligns with existing stacks |
| HTTP | axios | Promise-based, clean error handling |
| Email | nodemailer | SMTP support, Ethereal mock mode |
| Secrets | `.env` (git-ignored) | Never commit creds |
| Hosting | AWS App Runner | Same as commission_app |

---

## 3. Authentication

| Item | Value |
|------|-------|
| Base URL | `https://hosting.bytesoftware.com/apps/Bwe_58554` |
| Auth Endpoint | `GET /byteapi/Auth` |
| Headers | `username`, `password`, `authorizationkey` |
| Response | `{ Key: "<session-token>" }` |
| Session Header | `Session: <token>` on all subsequent calls |

> 🔒 Credentials stored in `.env` (git-ignored). See `.env.example` for template.

**Auth flow:** `GET /byteapi/Auth` → returns session token → all subsequent requests include `Session` header. Client auto-retries on 401 with fresh token.

---

## 4. API Endpoint Catalog

| # | Method | Endpoint | Purpose | Notes |
|---|--------|----------|---------|-------|
| 1 | `GET`  | `/byteapi/Auth` | Authenticate, get session token | Custom headers |
| 2 | `POST` | `/byteapi/Search` | **Primary data retrieval** | JSON body, returns SearchRows |
| 3 | `GET`  | `/byteapi/SearchHelp` | API schema docs | Returns SearchRequest schema |
| 4 | `GET`  | `/byteapi/SearchExample` | Example request body | Shows sample payload |

### Search Request Shape

```json
{
  "SearchFields": [
    {
      "FieldName": "FileName",
      "TableName": "FileData",
      "FieldFilter": { "FilterValue1": "PHM0124084419", "FilterType": 1 }
    },
    { "FieldName": "EMail", "TableName": "Parties" }
  ],
  "MaxItems": 100,
  "SearchDisplayHeaders": true
}
```

### FilterType Values (Discovered)
| Value | Meaning | Works? |
|-------|---------|--------|
| 1 | Equal To (exact match) | ✅ Yes |
| 8 | Contains / Like | ❌ Did not return results |
| 0 | None | ✅ No filter applied |

---

## 5. Database Tables & Fields

### Parties Table
> Contains ALL party types for a loan (Title Co, Agents, Loan Officer, etc.) in a **flat list** — 81 rows per loan. No server-side party-type filter available.

| FieldName | Description | Notes |
|-----------|-------------|-------|
| `Company` | Company name | **Filterable** with `FilterType: 1` (exact match) |
| `EMail` | Email address | Note: uppercase M (not `Email`) |
| `WorkPhone` | Work phone | |
| `HomePhone` | Home phone | |
| `Fax` | Fax number | |
| `FirstName` | First name | |
| `LastName` | Last name | |
| `FullName` | Full name | |
| `Title` | Job title | Used for CC recipient role matching |
| `Street` | Street address | |
| `City` | City | |
| `State` | State | |
| `Zip` | ZIP code | |

### Borrower Table
> Both borrower AND co-borrower are stored in the **same `Borrower` table**.
> Use `MaxItems: 2` to get both in one API call: row 1 = primary, row 2 = co-borrower.

| FieldName | Description | Notes |
|-----------|-------------|-------|
| `Email` | Borrower email | Note: lowercase 'e' (different from Parties!) |
| `FirstName` | First name | |
| `LastName` | Last name | |
| `MobilePhone` | Cell phone | Confirmed: returns 10-digit number |
| `HomePhone` | Home phone | Fallback if no mobile |
| `SSN` | SSN | |

> ⚠️ **No separate `CoBorrower` table.** Co-borrower data lives in the `Borrower` table as the 2nd row.

### Condition Table
> Loan conditions with status tracking. Each condition is a row.
> ⚠️ **BytePro API hangs indefinitely on incorrect field names** (no error, no timeout). Only use confirmed field names below.

#### ✅ Confirmed Fields
| FieldName | Description | Source | Notes |
|-----------|-------------|--------|-------|
| `DescriptionTemplate` | Condition description text | API test | |
| `ConditionStage` | Stage (e.g., "Prior To Docs") | API test | Used to filter PTD vs PTF conditions |
| `ResponsibleParty` | Who is responsible | API test | ContactCat enum (1=LO, 2=Processor, 4=UW, 32=Borrower) |
| `NeededFromBorrower` | Borrower condition flag | BytePro UI (2026-03-25) | Boolean → returns `Yes`/`No`. Maps to UI "Brw" column |
| `ClearedDate` | When condition was cleared | IT team (2026-03-25) | DateTime — **empty = not cleared**, set = cleared |
| `ConditionTypeCode` | Condition type (APP, DISCL, CRED, INCOME) | IT team (2026-03-25) | |
| `ConditionNo` | Condition number (101, 103, etc.) | IT team (2026-03-25) | |
| `RequestedDate` | When condition was requested | API probe (2026-03-25) | Empty = not yet requested (maps to UI checkbox) |
| `ReceivedDate` | When condition was received | API probe (2026-03-25) | Empty = not yet received (maps to UI checkbox) |
| `RequestedBy` | Who requested the condition | API probe (2026-03-25) | |
| `ReceivedBy` | Who marked as received | API probe (2026-03-25) | |

> ✅ 11 Condition fields confirmed. UI checkboxes map to date/boolean fields in the API.
> ✅ BRW column uses `NeededFromBorrower` (Boolean, Yes/No) — confirmed from BytePro field library.

#### Excluded Canned Conditions
> These are auto-fulfilled when related reports come in, or are part of another condition — excluded from PTD email to reduce clutter.

| Number | Description | Reason |
|--------|-------------|--------|
| 410 | 4506C fully executed by all borrowers | Part of another condition |
| 606 | Satisfactory appraisal report | Auto-fulfilled when appraisal comes in |
| 607 | Appraiser field review / 2nd appraisal (if required) | Auto-fulfilled |
| 608 | Review Appraisal for Condo Project Approval | Auto-fulfilled |
| 610 | Evidence of completion of outstanding repairs | Auto-fulfilled |
| 705 | Title Vesting | Auto-fulfilled when title comes in |
| 713 | Copy of plotted survey (if required) | Auto-fulfilled |
| 720 | Payoff for existing 1st lien (if refinance) | Auto-fulfilled |

### FileData Table
| FieldName | Description | Notes |
|-----------|-------------|-------|
| `FileName` | Loan number / file name | Primary lookup key (e.g., `PHM0124084419`) |

> ⚠️ **Field naming is case-sensitive.** `Parties.EMail` ≠ `Borrower.Email`.

---

## 6. Data Fetching Recipes

### Title Company
```javascript
const { getTitleCompany } = require('./src/loan-data');
const titleCo = await getTitleCompany('PHM0124084419');
// → { company: "Core Title", email: "orders@coretitle.com", ... }
```
- Searches Parties table, client-side filters for "title" in company name

### Borrower + Co-Borrower (Single API Call)
```javascript
const { getBorrowerInfo } = require('./src/loan-data');
const borrower = await getBorrowerInfo('PHM0124084419');
// → { fullName: "Dale Fulcher", coBorrowerName: "Michele Fulcher",
//     allBorrowers: "Dale Fulcher & Michele Fulcher" }
```
- Uses `MaxItems: 2` on `Borrower` table — 1 API call for both

### CC Recipients (Internal Staff)
```javascript
const { getCCRecipients } = require('./src/loan-data');
const cc = await getCCRecipients('PHM0124084419');
// → [{ role: "Loan Processor", email: "..." }, ...]
```
- Fetches all Parties, filters for internal staff by email/title pattern
- Roles: Loan Processor, Loan Officer, LO Assistant

### Loan Amount
- **Sourced from GHL webhook data** (`loan_with_mipfunding_fee` field)
- NOT fetched from BytePro — saves 1 API call per trigger

---

## 7. Workflow: Processing Trigger

### Pipeline (3 parallel BytePro calls)
```
GHL Webhook (loan → "Processing")
    │
    ├──▶ Parse loan number from opportunity name ("Loan - PHM...")
    │
    ├──▶ [PARALLEL] BytePro: getTitleCompany()
    ├──▶ [PARALLEL] BytePro: getBorrowerInfo() ← includes co-borrower
    ├──▶ [PARALLEL] BytePro: getCCRecipients()
    │
    ├──▶ Parse loan amount from webhook custom data
    │
    ├──▶ Send lender order email (TO: title co, CC: internal team)
    ├──▶ Send processor reminder email
    └──▶ Update GHL custom fields (mock for now)
```

### Emails Sent
| Email | To | CC | Content |
|-------|----|----|---------|
| Lender Order | Title company email | Processor, LO, LOA | Loan details + order request |
| Processor Reminder | Loan processor | — | Follow-up instructions |

---

## 7b. Workflow: PTD Conditions Email

### Trigger
GHL Webhook → Loan reaches **"Conditional Approval"** milestone

### Pipeline
```
GHL Webhook (loan → "Conditional Approval")
    │
    ├──▶ Parse loan number from opportunity name
    │
    ├──▶ [PARALLEL] BytePro: fetchBorrower() ← name, phone, email
    ├──▶ [PARALLEL] BytePro: fetchTeam() ← processors, LOs from Parties
    ├──▶ [PARALLEL] BytePro: fetchPTDConditions() ← open conditions
    │
    ├──▶ Filter: PTD only, NOT cleared, NOT excluded canned (8 items)
    ├──▶ Sort: BRW conditions first
    │
    ├──▶ Build Outlook-compatible HTML email (table-based, no CSS3)
    ├──▶ Generate PDF attachment via Puppeteer
    └──▶ Send to ALL team members (processor(s) + LO) on single email
```

### Email Details
| Field | Value |
|-------|-------|
| **To** | All team members (processors + LO), dynamically from Parties table |
| **Subject** | `[LastName] [LoanNumber] - Condition Update` |
| **From** | `processing@mypriorityhome.com` |
| **Attachment** | `[LoanNumber]_PTD_Conditions.pdf` |

### Email Content
- **Header**: Borrower name + phone + email, team contact info (processors, LO)
- **Table columns**: Description, Stage, BRW (badge), Requested (✓ + date), Received (✓ + date)
- **Sorting**: BRW (NeededFromBorrower=Yes) conditions sorted to top with amber badge
- **Rendering**: Full table-based HTML — compatible with Outlook desktop, Gmail, Apple Mail

### Dependencies
| Package | Purpose |
|---------|-------|
| `puppeteer` | PDF generation from HTML (headless Chrome, Letter format) |
| `nodemailer` | SMTP delivery via Google Workspace |

---

## 8. File Structure

```
byte_api/
├── architect.md          ← this file (living doc)
├── .env                  ← secrets (git-ignored)
├── .env.example          ← template showing required vars
├── .gitignore
├── package.json
├── src/
│   ├── server.js         ← Express server, /webhook/processing endpoint
│   ├── config.js         ← env config (SMTP, GHL, BytePro, mock toggles)
│   ├── client.js         ← axios wrapper + auth + session retry
│   ├── loan-data.js      ← data fetchers (title, borrower, CC, loan amount)
│   ├── loan-parties.js   ← original party fetch functions
│   ├── email-service.js  ← SMTP sender with Ethereal mock mode
│   ├── handlers/
│   │   └── processing-trigger.js  ← orchestrates full Processing workflow
│   └── templates/
│       ├── lender-order.js        ← lender order email HTML
│       └── processor-reminder.js  ← processor reminder email HTML
└── scripts/
    ├── test-conditions-email.js  ← PTD conditions email (standalone test + reference impl)
    ├── test-workflow.js          ← E2E test (uses real BytePro, mock SMTP)
    ├── discover-conditions.js    ← condition table field probing tool
    └── demo.js                   ← quick demo: fetch title company
```

---

## 9. Key Discoveries & Gotchas

| # | Discovery | Impact |
|---|-----------|--------|
| 1 | `FieldIdentifier` in SearchField is **ignored** by server | Cannot filter by party type server-side |
| 2 | `Parties` table returns ALL party types (81 rows) | Must filter client-side by Company name |
| 3 | `Company` field supports `FilterType: 1` (exact match) | Can server-filter if company name is known |
| 4 | `FilterType: 8` (Contains/Like) did NOT return results | Don't rely on partial matching |
| 5 | Field casing varies by table | `Parties.EMail` vs `Borrower.Email` |
| 6 | `SearchDisplayHeaders: true` returns field metadata | Useful for debugging |
| 7 | Session tokens expire; 401 triggers re-auth | Client handles automatically |
| 8 | **Co-borrower is in `Borrower` table** (not separate table) | Use `MaxItems: 2` — row 1 = borrower, row 2 = co-borrower |
| 9 | Loan amount from GHL, not BytePro | Saves API calls; uses `loan_with_mipfunding_fee` field |
| 10 | Conditions table is queryable (`DescriptionTemplate`, `ConditionStage`, `ResponsibleParty` confirmed) | Enables future condition-fetching workflow |
| 11 | **API hangs indefinitely on wrong field names** — no error, no timeout | Must use exact field names from in-app Field Info; cannot brute-force discover |
| 12 | SearchHelp/SearchExample endpoints document query structure only — not field catalogs | No public BytePro field docs exist; Field Info popups are the only source |

---

## 10. Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `BYTEPRO_BASE_URL` | BytePro API base URL | Required |
| `BYTEPRO_USERNAME` | Auth username | Required |
| `BYTEPRO_PASSWORD` | Auth password | Required |
| `BYTEPRO_AUTH_KEY` | Authorization key | Required |
| `SMTP_HOST` | SMTP server host | — |
| `SMTP_PORT` | SMTP server port | 587 |
| `SMTP_USER` | SMTP username | — |
| `SMTP_PASS` | SMTP password | — |
| `SMTP_FROM` | From email address | — |
| `SMTP_MOCK` | Use Ethereal mock | `true` |
| `GHL_API_KEY` | GoHighLevel API key | — |
| `GHL_MOCK` | Skip real GHL calls | `true` |
| `PORT` | Express server port | 3000 |

---

## 11. Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-24 | Node.js + axios | Matches existing stack, fast iteration |
| 2026-03-24 | `.env` for secrets | Industry standard, prevents leaks |
| 2026-03-24 | Manual test scripts first | Validate API shape before assertions |
| 2026-03-25 | Client-side party-type filtering | Server doesn't support party type queries |
| 2026-03-25 | Company name matching for title co | Reliable with exact match; "title" substring fallback |
| 2026-03-25 | Loan amount from GHL webhook | Avoids extra BytePro API call |
| 2026-03-25 | Single `Borrower` table query (MaxItems: 2) | Co-borrower is row 2, not a separate table |
| 2026-03-25 | Separate service from commission_app | Independent deployment, different runtime (Node vs Python) |
| 2026-03-25 | Mock-first email (Ethereal) | Safe testing without sending real emails |
| 2026-03-25 | PTD email to all team members | Single email thread — any party can Reply All |
| 2026-03-25 | Outlook-compatible HTML | Table-based layout; no CSS3 gradients/radius |
| 2026-03-25 | 8 canned conditions excluded | Auto-fulfilled or duplicate conditions stripped from email |
| 2026-03-25 | PDF attachment with Puppeteer | Every email includes downloadable conditions report |

---

## 12. Next Steps

- [x] Authenticate and explore API
- [x] Map Parties table fields
- [x] Fetch title company email
- [x] Build production fetch functions
- [x] Borrower + co-borrower fetching
- [x] CC recipient logic
- [x] Email service (SMTP + mock)
- [x] Processing workflow (lender order + reminder)
- [x] E2E testing
- [x] **Configure real SMTP** — `processing@mypriorityhome.com` via Google Workspace
- [x] **Get missing Condition field names from IT** — `ClearedDate`, `ConditionTypeCode`, `ConditionNo`
- [x] **PTD Conditions email** — Outlook-compatible, BRW sorting, PDF attachment, team contacts
- [ ] **GHL Webhook for PTD** — wire up "Conditional Approval" milestone trigger to PTD email
- [ ] **Prior To Funding email** — triggered at "Approval" milestone (separate workflow)
- [ ] **Conditions Dashboard** — web UI for viewing/sorting open conditions per file
- [ ] **Twilio SMS from Dashboard** — processor texts borrower re: outstanding BRW conditions
- [ ] Deploy to AWS App Runner
- [ ] Configure real GHL API token
- [ ] Google Sheets integration (conditions tracking)
- [ ] Expand to other party types (Insurance Co, etc.)
