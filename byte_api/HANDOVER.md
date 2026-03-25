# BytePro Workflow Service — Session Handover

> **For:** Next coding session  
> **From:** Session ending 2026-03-25  
> **Status:** Processing workflow built & tested, ready for production email config + conditions workflow

---

## What's Done

### Processing Workflow (✅ Complete)
- GHL webhook → parses loan # → parallel BytePro API calls → emails + CRM update
- **Lender order email** to title company with CC to internal staff
- **Processor reminder email** with follow-up instructions
- Borrower + co-borrower fetched in single API call (`MaxItems: 2`)
- CC recipients auto-detected by role (Processor, LO, LOA)
- Loan amount sourced from GHL webhook (not BytePro)
- Full E2E test passing with mock SMTP (Ethereal)

### Condition Table Discovery (✅ Confirmed Feasible)
- `Condition` table is queryable via BytePro Search API
- **3 fields confirmed:** `DescriptionTemplate`, `ConditionStage`, `ResponsibleParty`
- **3 fields pending** from IT team: Cleared, Type, No

---

## What's Needed at Session Start

The user will provide these items:

### 1. SMTP Email Credentials
IT is setting up a dedicated email account for notifications.
```
SMTP_HOST=smtp.gmail.com  (or whatever IT provides)
SMTP_PORT=587
SMTP_USER=notifications@company.com
SMTP_PASS=app-password-here
SMTP_FROM=notifications@company.com
SMTP_MOCK=false
```

### 2. Condition Field Names from IT
Exact BytePro API field names for:
| UI Column | What We Need |
|-----------|-------------|
| **Cleared** | The field name for the "cleared" checkbox |
| **Type** | The field name for condition type (APP, DISCL, CRED, INCOME) |
| **No** | The field name for condition number (101, 103, etc.) |

> ⚠️ **Critical:** BytePro API hangs indefinitely on wrong field names. Only use exact names from Field Info or IT team.

---

## Immediate Next Steps (In Order)

1. **Configure real SMTP** — Update `.env` with email credentials, set `SMTP_MOCK=false`, send a test email
2. **Test processing workflow with real email** — Run `scripts/test-workflow.js` to verify real emails arrive
3. **Map remaining Condition fields** — Use IT-provided field names, test each one with `scripts/discover-conditions.js`
4. **Build Conditional Approval workflow** — New trigger handler for fetching open PTD conditions and emailing team
5. **Deploy to AWS App Runner** — Same pattern as `commission_app`

---

## Key Files

| File | Purpose |
|------|---------|
| `byte_api/architect.md` | Full architecture doc (source of truth) |
| `byte_api/.env` | Secrets — update with real SMTP creds |
| `byte_api/src/handlers/processing-trigger.js` | Main workflow orchestrator |
| `byte_api/src/email-service.js` | SMTP sender (toggle mock with `SMTP_MOCK`) |
| `byte_api/scripts/test-workflow.js` | E2E test script |
| `byte_api/scripts/discover-conditions.js` | Condition field probing tool |

---

## Critical Gotchas for Next Session

1. **BytePro API hangs on wrong field names** — No error, no timeout. Must use exact names.
2. **Field casing varies by table** — `Parties.EMail` vs `Borrower.Email` (capital M vs lowercase e)
3. **Parties table returns ALL 81 party types** — Must filter client-side
4. **Co-borrower is row 2 of `Borrower` table** — Not a separate table
5. **Loan amount comes from GHL webhook** (`loan_with_mipfunding_fee`), not BytePro

---

## Repos & Locations

| Item | Path |
|------|------|
| Service code | `c:\Users\matti\Downloads\crm_workflows\byte_api\` |
| Dev/testing sandbox | `c:\Users\matti\Downloads\byte-api-tool\` |
| GitHub | `agent-matthew/crm_worklows` (master branch) |
| Latest commit | `2ee6bd5` + architect.md update |

---

## Future Roadmap (User Mentioned)

- **Suspense conditions** — fetch conditions at Suspense stage
- **Prior To Funding conditions** — fetch conditions at PTF stage
- **Google Sheets integration** — log conditions to a shared sheet
- **GHL CRM field updates** — populate title company info on contact cards
