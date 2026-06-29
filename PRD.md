# Catalyst Portal — Product Requirements Document

**Client:** Catalyst Construction
**Product:** Gated internal employee portal for core processes, SOPs, policies, handbooks, and forms
**Status:** Draft for build — v1
**Last updated:** 2026-06-25
**Owner:** Quinn Brewer (Clear Design Group)

---

## 1. Summary

Catalyst Portal is a gated, invite-only web application where Catalyst Construction
employees can find and read the company's core cultural and operational artifacts:
core processes, standard operating procedures (SOPs), policies, handbooks, and forms.

Content is organized **by department**. Some documents are **beautifully designed
in-portal pages** (especially the core processes), and others are **uploaded files**
(PDF/Word) shown in a polished in-browser viewer with download. Every signed-in
employee can view everything; departments are a navigation aid, not an access boundary.

Access is controlled by an **email allowlist managed by HR**. Because not every Catalyst
employee has a Catalyst email address, login is **passwordless via magic link** — any
email on the allowlist can sign in; anyone removed from the allowlist immediately loses
access. A small set of administrators and editors manage users and content.

### Goals
- Make core cultural and operational artifacts effortless to find, read, and trust.
- Give HR simple, self-service control over **who has access** and **what is published**.
- Support both **highly designed authored pages** and **existing designed PDFs**.
- Be fast, clean, on-brand, and fully usable on a phone in the field.

### Non-goals (v1)
- No public/anonymous access; no marketing surface.
- No notifications, email digests, or read-acknowledgement/sign-off tracking.
- No per-document or per-department access restrictions (everyone sees everything).
- No SSO (Google/Microsoft) — deliberately avoided because many employees lack a
  managed email account.
- No real-time collaborative editing.

---

## 2. Users & Roles

| Role | Who | Can do |
|------|-----|--------|
| **Employee** | Any allowlisted Catalyst staff member | Sign in, browse by department, search, read pages, view & download files. |
| **Editor** | HR/ops staff who maintain content | Everything an Employee can, **plus** create/edit/publish/version/archive documents. **Cannot** manage users. |
| **Admin** | HR leads / system owners | Everything an Editor can, **plus** add/remove/edit users, change roles, and view the audit log. Can permanently purge archived documents. |

- Roles are global (not per-department).
- The **first Admin** is seeded at deploy time (see §7). There is no public sign-up.
- A user has exactly one role at a time. Admins can change another user's role; an Admin
  cannot demote/remove themselves if they are the last remaining Admin (guardrail).

---

## 3. Core Features (v1 scope)

**IN scope for v1:**

1. **Passwordless magic-link authentication** with an HR-managed email allowlist.
2. **Three roles:** Admin, Editor, Employee.
3. **Department-organized content** across 7 sections (6 departments + Company-wide).
4. **Two document kinds:**
   - **Page** — authored in-portal with a rich editor, rendered as a polished, branded
     reading page (the primary format for core processes).
   - **File** — uploaded PDF/Word, shown in an in-browser viewer with a download button.
5. **Document types + tags** for organization and filtering (Process, SOP, Policy,
   Handbook, Form, Other) plus free-form tags.
6. **Draft → Publish workflow with version history** and admin **rollback UI**.
7. **Soft-delete (archive)** with admin recovery; Admin-only permanent purge.
8. **User management:** single add + **bulk paste-a-list import**; edit role/department;
   remove (revokes access immediately).
9. **Global full-text search** across titles, body text, and tags.
10. **Home dashboard:** department grid + "Recently updated" + pinned/featured documents.
11. **Audit log** of key Admin/Editor actions.
12. **Fully responsive, mobile-friendly** UI (field crews on phones).
13. **Catalyst-branded theme** (colors, logo, Proxima Nova + EB Garamond).

**OUT of scope for v1 (fast-follow candidates):**
- Notifications / email digests of new or updated docs.
- Read-acknowledgements ("I have read this handbook") and view analytics.
- SSO. Per-department or per-document access restrictions.
- Commenting, favorites/bookmarks, multi-language.

---

## 4. User Workflows

### 4.1 Employee — first sign-in and reading
1. Employee receives word that the portal exists (and that their email was added).
2. Visits the portal URL → sees a minimal sign-in screen (logo + email field).
3. Enters their email → receives a magic-link email from Catalyst (Resend).
4. Clicks the link → a session is established; they land on the **home dashboard**.
5. Browses the **department grid**, or uses **search**, or scans **Recently updated**.
6. Opens a document:
   - **Page** → reads a clean, branded article view.
   - **File** → views the PDF inline; can **Download**.
7. Stays signed in indefinitely (no session expiry) until they sign out or are removed.

**Edge — email not on allowlist:** The sign-in screen always shows the same neutral
confirmation ("If your email is registered, a sign-in link is on its way."). No email is
sent, and the response does not reveal whether the address exists (no account enumeration).

### 4.2 Editor — publishing a document
1. Signs in → opens **Manage → Documents** (visible to Editors/Admins).
2. Clicks **New document**, chooses department, type, title, tags, and **kind**:
   - **Page:** writes/edit in the rich editor; can **Save draft** repeatedly.
   - **File:** uploads a PDF/Word file (replaces previous file on a new version).
3. Clicks **Publish** → the document becomes visible to employees and a numbered
   **version snapshot** is recorded.
4. To update later: edits create a **new draft** off the current published version; the
   live version is unchanged until the editor clicks **Publish** again (new version number).
5. Can mark a document **pinned/featured** (surfaces on the home dashboard).
6. Can **Archive** a document (hidden from employees, recoverable).

### 4.3 Admin — managing access
1. Signs in → opens **Manage → Users**.
2. **Add one:** enters email, name, role, department → user is allowlisted immediately.
3. **Bulk add:** pastes a list (newline/comma-separated emails) → optionally sets a
   default role/department for the batch → system creates all valid, de-duplicated emails
   and reports any rejects.
4. **Edit:** change a user's name, role, or department.
5. **Remove:** deletes/deactivates the user → their active sessions stop working on the
   **next request** (access revoked immediately).
6. **Audit log:** reviews who added/removed users and who published/edited/archived docs.

### 4.4 Version rollback (Admin)
1. Opens a document's **Version history**.
2. Sees a list of published versions (number, who, when).
3. Previews any prior version; clicks **Restore** → that version's content becomes a new
   published version (forward-only history; nothing is destroyed).

---

## 5. Information Architecture & Content Model

### 5.1 Departments (7 top-level sections)
1. Executive
2. Preconstruction
3. Construction Management
4. Finance & Administration
5. Business Development
6. Catalyst Select (internal trades — carpenters, painters, etc.)
7. Company-wide (all-staff docs: employee handbook, code of conduct, etc.)

Departments are seeded data and rarely change. Admins may rename/reorder them (nice-to-have;
seed list is authoritative for v1).

### 5.2 Document types
`Process` · `SOP` · `Policy` · `Handbook` · `Form` · `Other`
(Used for filtering and labeling. A document has exactly one type.)

### 5.3 Visibility rules
- Any authenticated, **active** user can view **all published** documents in **all** departments.
- Draft and archived documents are visible only to Editors and Admins.
- Department and type are **organizational/navigational only**, never access gates.

---

## 6. Data Model

Postgres via Drizzle ORM. Key tables (illustrative — refine field names/constraints during
implementation):

### `users`
| Field | Type | Notes |
|-------|------|-------|
| id | uuid (pk) | |
| email | citext, unique, not null | login identity; case-insensitive |
| name | text | display name |
| role | enum(`admin`,`editor`,`employee`) | default `employee` |
| department_id | uuid (fk → departments) | nullable; "home" department |
| status | enum(`active`,`removed`) | `removed` blocks all access |
| created_at / updated_at | timestamptz | |
| created_by | uuid (fk → users) | who added them |

### `departments`
| Field | Type | Notes |
|-------|------|-------|
| id | uuid (pk) | |
| name | text, unique | |
| slug | text, unique | URL segment |
| sort_order | int | grid ordering |

### `documents`
| Field | Type | Notes |
|-------|------|-------|
| id | uuid (pk) | |
| title | text, not null | |
| slug | text | unique within department |
| department_id | uuid (fk) | not null |
| type | enum(document types) | not null |
| kind | enum(`page`,`file`) | not null |
| status | enum(`draft`,`published`,`archived`) | live state |
| current_version_id | uuid (fk → document_versions) | the published version shown to employees |
| is_pinned | boolean | featured on home |
| created_by / updated_by | uuid (fk → users) | |
| created_at / updated_at / published_at / archived_at | timestamptz | |
| search_vector | tsvector (generated) | full-text index (title + body text + tags) |

### `document_versions`
| Field | Type | Notes |
|-------|------|-------|
| id | uuid (pk) | |
| document_id | uuid (fk) | |
| version_number | int | monotonically increasing per document |
| kind | enum(`page`,`file`) | snapshot of kind at publish time |
| body | jsonb | Tiptap/ProseMirror doc JSON (for `page`) |
| body_text | text | plaintext extraction for search (for `page`) |
| file_blob_url | text | Vercel Blob URL (for `file`) |
| file_name / file_mime / file_size | text/int | original upload metadata |
| published_by | uuid (fk → users) | |
| published_at | timestamptz | |

### `tags` and `document_tags`
- `tags`: id, name (unique, normalized lowercase), label.
- `document_tags`: join (document_id, tag_id).

### `magic_link_tokens`
| Field | Type | Notes |
|-------|------|-------|
| id | uuid (pk) | |
| user_id | uuid (fk) | |
| token_hash | text | store a hash, never the raw token |
| expires_at | timestamptz | ~15 minutes |
| consumed_at | timestamptz | single-use |
| created_at | timestamptz | |

### `sessions`
| Field | Type | Notes |
|-------|------|-------|
| id | uuid (pk) | |
| user_id | uuid (fk) | |
| token_hash | text | opaque session token stored hashed |
| created_at | timestamptz | |
| last_seen_at | timestamptz | |
| revoked_at | timestamptz | for explicit sign-out |

> **No expiry by design.** Sessions do not time out. Every authenticated request validates
> that the user still exists and is `active`; a `removed` user (or a revoked session) is
> rejected immediately. This is how HR "removing an email" cuts off access in real time.

### `audit_logs`
| Field | Type | Notes |
|-------|------|-------|
| id | uuid (pk) | |
| actor_id | uuid (fk → users) | who did it |
| action | text/enum | e.g. `user.add`, `user.remove`, `user.role_change`, `doc.publish`, `doc.edit`, `doc.archive`, `doc.restore`, `doc.purge` |
| target_type / target_id | text / uuid | the affected entity |
| metadata | jsonb | before/after where useful |
| created_at | timestamptz | |

---

## 7. Technical Requirements

### 7.1 Stack
- **Frontend + backend:** Next.js 15 (App Router) + TypeScript, full-stack via server
  actions and route handlers. Standalone repository (not in the M&S monorepo).
- **Styling:** Tailwind CSS with a Catalyst theme token layer (see §9). Radix UI primitives
  for accessible dialogs/menus (consistent with the team's existing stack).
- **Database:** PostgreSQL (Neon or Supabase Postgres) via **Drizzle ORM** + drizzle-kit
  migrations.
- **File storage:** **Vercel Blob** (signed URLs; uploads go through a server action/route
  that authorizes the user first).
- **Email:** **Resend** for magic-link delivery (transactional). Branded sender on the new
  domain.
- **Rich editor:** **Tiptap** (ProseMirror) — store content as JSON in
  `document_versions.body`, with a plaintext extraction in `body_text` for search.
- **PDF viewer:** `pdf.js` via `react-pdf` (or `@react-pdf-viewer/core`) for a clean inline
  viewer with download; non-PDF files (Word) get a download card + (optional) server-side
  preview later.
- **Hosting:** Vercel. **New dedicated domain** (DNS + env configured as a launch task).
- **Testing:** Vitest (unit) + Playwright (E2E). See §10.

### 7.2 Authentication & session details
- Magic link: signed, single-use token, **~15-minute expiry**, stored **hashed**.
- On click: validate token → create session → set an **HttpOnly, Secure, SameSite=Lax**
  session cookie. No session expiry; revocation via user `status` or session `revoked_at`.
- Rate-limit magic-link requests per email/IP to prevent abuse.
- Neutral, non-enumerating responses on the sign-in screen.
- Middleware (or per-request server check) enforces: valid session → active user → role
  gate on `/manage/**` routes.

### 7.3 Authorization
- Route/server-action guards:
  - `/` and document views → any active user.
  - `/manage/documents/**` → Editor or Admin.
  - `/manage/users/**` and `/manage/audit/**` → Admin only.
- All mutations re-check role server-side (never trust the client).

### 7.4 File upload constraints
- Allowed types v1: PDF (primary), DOC/DOCX (download), common images for page embeds.
- Max size: e.g. 50 MB (configurable). Validate MIME + extension server-side.
- Files served via short-lived signed URLs; download enabled for all signed-in users.

### 7.5 Search
- Postgres full-text search using a generated `tsvector` (title + tags + page `body_text`);
  filename for files. `GIN` index. Filter by department and type in the UI.
- For file-only PDFs, v1 indexes title/tags/filename (full PDF text extraction is a
  fast-follow if needed).

### 7.6 Environment / configuration
- `DATABASE_URL`, `RESEND_API_KEY`, `BLOB_READ_WRITE_TOKEN`, `SESSION_SECRET`,
  `APP_URL`, `EMAIL_FROM`, and `SEED_ADMIN_EMAILS` (comma-separated) to seed the first
  Admin(s) on first migration/boot.
- `.env.example` documents every variable.

---

## 8. UI Structure

### 8.1 Routes
| Route | Access | Purpose |
|-------|--------|---------|
| `/login` | public | Email entry; magic-link request; neutral confirmation. |
| `/auth/verify` | public (token) | Consumes magic link, creates session, redirects. |
| `/` | employee+ | **Home dashboard:** department grid, Recently updated, pinned/featured, search bar. |
| `/search?q=` | employee+ | Search results with department/type filters. |
| `/d/[department]` | employee+ | Department landing: its documents, filter by type/tags. |
| `/d/[department]/[doc-slug]` | employee+ | Document view (page reader or PDF/file viewer + download). |
| `/manage/documents` | editor+ | Document list/management (status, pin, archive). |
| `/manage/documents/new` · `/[id]/edit` | editor+ | Create/edit with editor or file upload; draft/publish; version history & rollback. |
| `/manage/users` | admin | User list, single add, bulk paste import, edit role/dept, remove. |
| `/manage/audit` | admin | Audit log viewer. |
| `/account` | employee+ | Minimal: name, sign out. |

### 8.2 Key screens
- **Sign-in:** Catalyst logo on charcoal, single email field, calm copy. Mobile-first.
- **Home dashboard:** 7-card department grid (icon + name + doc count), "Recently updated"
  list, pinned/featured row, persistent search.
- **Department page:** title, breadcrumb, type/tag filters, document cards.
- **Document — Page:** branded article layout (EB Garamond display headings, Proxima Nova
  body), metadata strip (type, department, last updated, version).
- **Document — File:** inline PDF viewer (paged/scroll, zoom), prominent **Download**,
  same metadata strip.
- **Manage/Documents:** table with status chips (Draft/Published/Archived), pin toggle,
  actions. Editor screen with kind toggle (Page vs File), Save draft / Publish, version
  history panel.
- **Manage/Users:** table (name, email, role, department, status); "Add user" and
  "Bulk add" modals; row actions (edit, remove with confirm).
- **Audit log:** reverse-chronological, filter by actor/action.

### 8.3 Accessibility & responsiveness
- WCAG AA contrast (mind the green accent on white — use for accents/large text, not small
  body text on light backgrounds).
- Keyboard navigable; Radix primitives for focus management.
- Mobile: collapsible nav, full-width cards, touch-friendly PDF controls.

---

## 9. Brand & Theme

Source: `Catalyst_BrandKit` (logos, fonts, messaging). Vendor the needed assets into the
app repo (`/public/brand`, `/app/fonts`); do not depend on the Desktop download.

- **Typography:**
  - **Proxima Nova** — UI and body text. Weights available: Thin, Light, Regular, Semibold,
    Bold (+ italics). Display lines may use tracked uppercase (per brand messaging style).
  - **EB Garamond** (variable, incl. italic) — editorial/display accents and page headings;
    the italic is a signature treatment (e.g. tagline *"better."*).
- **Color tokens** (derive exact hex from `FinalLogos/Vector/*.ai/.eps`; approximate values
  below — confirm against source before launch):
  - `--ink` Catalyst charcoal ≈ `#1E2221` (primary text, dark surfaces, logo black)
  - `--accent` Catalyst green ≈ `#6FAE46` (accents, active states, key words)
  - `--muted` warm gray ≈ `#8E867B` (secondary text, borders)
  - `--surface` `#FFFFFF`, `--surface-2` light warm gray for cards.
- **Logo:** use horizontal lockup in the top nav (reversed/white on charcoal surfaces),
  icon-only for compact/mobile. Full asset set: vertical/horizontal × black/white/reversed
  + icon, in PNG/JPG/vector.
- **Voice/tone:** *"An intentional approach to better."* — purposeful, refined, understated.
  Reflect this in microcopy and the designed page layouts.

---

## 10. Testing Approach

**Unit (Vitest):**
- Magic-link issuance/consumption: single-use, expiry, hashing, rate-limit.
- Session validation: active vs removed user, revoked session → access denied.
- Authorization matrix: each role × each protected action (allow/deny).
- Versioning: publish creates monotonic version; draft edits don't affect live version;
  rollback creates a new forward version.
- Bulk user import: parsing, de-duplication, invalid-email rejection, partial-success report.
- Search vector build + plaintext extraction from Tiptap JSON.

**E2E (Playwright) — critical paths:**
1. **Login flow:** request link → consume token (intercept email/token in test) → land on
   dashboard. Non-allowlisted email yields neutral response and no session.
2. **Publish flow:** Editor creates a Page, saves draft (not visible to employee), publishes
   (now visible), edits + republishes (new version), employee sees latest.
3. **File flow:** upload a PDF, employee views inline and downloads.
4. **Access revocation:** Admin removes a user → that user's next request is rejected.
5. **Search:** publish docs, search returns by title/body/tag with department/type filters.
6. **Role gates:** Employee cannot reach `/manage/**`; Editor cannot reach `/manage/users`.

**Manual QA checklist:** responsive/mobile pass (PDF viewer on phone), brand/theme review,
email rendering in major clients, accessibility/contrast spot-checks.

---

## 11. Edge Cases & Decisions

- **Removed user with an open session:** rejected on next request (per-request active check).
- **Magic link reuse / expiry:** consumed or expired tokens show a friendly "request a new
  link" screen.
- **Duplicate emails on bulk import:** de-duplicated case-insensitively; existing users
  skipped (reported), not overwritten.
- **Last Admin guardrail:** cannot remove/demote the final Admin.
- **Editing a published doc:** always edits a draft copy; live version unchanged until
  Publish. Concurrent editors: last publish wins (no locking in v1; note in audit log).
- **Archive vs delete:** Archive hides from employees and is recoverable; only Admins can
  permanently purge archived docs (purge also removes associated Blob files).
- **Large/slow PDFs on mobile:** lazy-load pages; always offer download as a fallback.
- **Department empty state:** friendly "No documents yet" with a CTA for Editors.
- **Search with no results / file-only PDFs:** clear empty state; note that file body text
  isn't indexed in v1 (title/tags/filename only).

---

## 12. Launch Scope & Open Items

**v1 must-haves (confirmed):** magic-link auth + allowlist, 3 roles, 7 departments, file
uploads + PDF viewer + download, authored Pages, types + tags, draft/publish + version
history & rollback UI, soft-delete/archive, single + bulk user import, global full-text
search, audit log, responsive Catalyst-branded UI.

**Deferred (fast-follow):** notifications/email digests, read-acknowledgements, view
analytics, SSO, per-department access restrictions, full PDF text extraction for search,
favorites/bookmarks, comments.

**Launch tasks / open items:**
- Acquire and configure the **new domain**; set up DNS and Resend sending domain (SPF/DKIM).
- Confirm **exact brand hex values** from the vector logo source.
- Provision Postgres (Neon/Supabase) and Vercel Blob; set env vars.
- Seed departments and the **first Admin** email(s).
- Initial content load and **company-wide rollout** via bulk import.

---

## 13. Milestones (suggested)

1. **Foundation:** repo, Next.js + Tailwind + theme tokens/fonts, DB + Drizzle schema,
   seed departments/admin.
2. **Auth:** magic-link + sessions + role guards + active-user revocation.
3. **Content read path:** departments, document views (Page reader + PDF viewer), home
   dashboard, search.
4. **Content authoring:** Tiptap editor, file uploads, draft/publish, versioning + rollback,
   archive.
5. **Admin:** user management (single + bulk), audit log.
6. **Polish & test:** responsive/brand pass, Vitest + Playwright suites, manual QA.
7. **Launch:** domain/email, content load, rollout.
