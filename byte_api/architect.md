# BytePro API Integration — Architect Document

> **Living Document** — Updated as we build, test, and expand the integration.
> Last updated: 2026-03-25

---

## 1. Objective

Build a lightweight tool to **fetch specific loan-file data from BytePro Enterprise** (mortgage LOS) and make it available to our CRM workflows.

### Example Use Cases
| # | Action | Data Needed | Status |
|---|--------|-------------|--------|
| 1 | Email title company to submit lender order | Title company email + contact | ✅ Working |
| 2 | Populate CRM contact cards | Borrower name, loan officer, processor | 🔜 Next |
| 3 | Status sync | Loan status, milestone dates | ⬜ Planned |

---

## 2. Architecture

```
┌──────────────┐     HTTPS/REST      ┌──────────────────┐
│  Our Tool    │ ──────────────────▶ │  BytePro API     │
│  (Node.js)   │ ◀────────────────── │  (ByteWeb)       │
└──────┬───────┘                      └──────────────────┘
       │
       ▼
┌──────────────┐
│  CRM / Email │  (future integration)
│  Automation  │
└──────────────┘
```

| Layer | Choice | Reason |
|-------|--------|--------|
| Runtime | Node.js | Fast setup, aligns with existing stacks |
| HTTP | axios | Promise-based, clean error handling |
| Secrets | `.env` (git-ignored) | Never commit creds |
| Docs | `architect.md` | Living record of every decision |

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
| 1 | `GET`  | `/byteapi/Auth` | Authenticate, get session token | Custom headers: username, password, authorizationkey |
| 2 | `POST` | `/byteapi/Search` | **Primary data retrieval** | JSON body, returns SearchRows |
| 3 | `GET`  | `/byteapi/SearchHelp` | API schema / request shape docs | Returns SearchRequest schema |
| 4 | `GET`  | `/byteapi/SearchExample` | Example request body | Shows sample Search payload |

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
| `Title` | Job title | |
| `Street` | Street address | |
| `City` | City | |
| `State` | State | |
| `Zip` | ZIP code | |

### Borrower Table
| FieldName | Description | Notes |
|-----------|-------------|-------|
| `Email` | Borrower email | Note: lowercase 'e' (different from Parties!) |
| `FirstName` | First name | |
| `LastName` | Last name | |
| `SSN` | SSN | |

### FileData Table
| FieldName | Description | Notes |
|-----------|-------------|-------|
| `FileName` | Loan number / file name | Primary lookup key (e.g., `PHM0124084419`) |

> ⚠️ **Field naming is case-sensitive.** `Parties.EMail` ≠ `Borrower.Email`.

---

## 6. Title Company Integration (✅ COMPLETE)

### How It Works
1. `POST /byteapi/Search` with `FileName` filter + all `Parties` contact fields
2. API returns all 81 party rows for the loan
3. Client-side filter: match `Company` containing "title" (case-insensitive)
4. Or: use server-side `Company` exact-match filter if company name is known

### Example Result
```
Loan:     PHM0124084419
Company:  Core Title
Email:    orders@coretitle.com
Address:  21500 Haggerty Rd Ste 200, Northville, MI 18167
```

### Production API
```javascript
const { getTitleCompany } = require('./src/loan-parties');
const titleCo = await getTitleCompany('PHM0124084419');
// → { Company: "Core Title", EMail: "orders@coretitle.com", ... }

// Or, if you know the exact company name:
const { getPartyByCompany } = require('./src/loan-parties');
const party = await getPartyByCompany('PHM0124084419', 'Core Title');
// → server-side filtered, returns 1 row
```

---

## 7. File Structure

```
byte-api-tool/
├── architect.md           ← this file (living doc)
├── .env                   ← secrets (git-ignored)
├── .env.example           ← template showing required vars
├── .gitignore
├── package.json
├── src/
│   ├── client.js          ← axios wrapper + auth + session retry
│   └── loan-parties.js    ← production party fetch functions
├── scripts/
│   ├── demo.js            ← quick demo: fetch title company
│   ├── test-connection.js ← auth smoke test
│   └── discover-*.js      ← exploration scripts (can delete)
└── *.txt                  ← raw API response logs (gitignored)
```

---

## 8. Key Discoveries & Gotchas

| # | Discovery | Impact |
|---|-----------|--------|
| 1 | `FieldIdentifier` in SearchField is **ignored** by server | Cannot filter by party type server-side |
| 2 | `Parties` table returns ALL party types (81 rows) | Must filter client-side by Company name |
| 3 | `Company` field supports `FilterType: 1` (exact match) | Can server-filter if company name is known |
| 4 | `FilterType: 8` (Contains/Like) did NOT return results | Don't rely on partial matching |
| 5 | Field casing varies by table | `Parties.EMail` vs `Borrower.Email` |
| 6 | `SearchDisplayHeaders: true` returns field metadata | Useful for debugging |
| 7 | Session tokens expire; 401 triggers re-auth | Client handles automatically |

---

## 9. Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-24 | Node.js + axios | Matches existing stack, fast iteration |
| 2026-03-24 | `.env` for secrets | Industry standard, prevents leaks |
| 2026-03-24 | Manual test scripts first | Validate API shape before writing assertions |
| 2026-03-25 | Client-side party-type filtering | Server doesn't support party type queries |
| 2026-03-25 | Company name matching for title company | Reliable with exact match; "title" substring as fallback |

---

## 10. Next Steps

- [x] Authenticate and explore API
- [x] Map Parties table fields
- [x] Fetch title company email
- [x] Build production fetch functions
- [x] Document everything
- [ ] Expand to other party types (Listing Agent, Selling Agent, Loan Officer)
- [ ] Add Borrower table fetch functions
- [ ] Build CRM integration layer
- [ ] Add loan status / milestone fields
- [ ] Develop automated tests (Jest)
- [ ] Move to production (AWS Lambda or Supabase Edge Function)
