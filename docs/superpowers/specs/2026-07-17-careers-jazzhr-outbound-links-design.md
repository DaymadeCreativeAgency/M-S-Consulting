# Careers JazzHR Outbound Links — Design

**Date:** 2026-07-17  
**Status:** Approved  
**Scope:** `artifacts/mands-site` careers page open-roles section

## Problem

The `/careers` page embeds JazzHR via iframe (`https://mandsc.applytojob.com/apply/jobs/`). Browsing and applying happen inside that embed. The embedded UI feels inconsistent with the site and does not match the experience of JazzHR’s own job pages (including apply options that appear on the full board).

## Goal

Keep a live list of open roles on `mnsconsulting.com/careers`, styled to match the site. Clicking a role opens that job’s JazzHR landing page in a **new tab**. Candidates apply only on JazzHR — never on the careers page itself.

## Decisions

| Decision | Choice |
|----------|--------|
| Role list on careers page | Yes — site-styled list |
| Data source | Live pull from public JazzHR board HTML |
| Click behavior | Open JazzHR job URL in a new tab |
| Apply on this site | No |
| JazzHR REST API / API key | Out of scope |

## Architecture

```
/careers (Next.js server component)
  → fetchJazzHrJobs()
       → GET https://mandsc.applytojob.com/apply
       → parseJazzHrJobs(html) → { id, title, location, url }[]
  → render Open Roles list (site UI)
       → each row: <a href={url} target="_blank" rel="noopener noreferrer">
```

### Data source

- Public board: `https://mandsc.applytojob.com/apply`
- Listings are server-rendered HTML (`li.list-group-item` with title link + location)
- Canonical job URL pattern: `https://mandsc.applytojob.com/apply/{jobId}/{slug}`
- No JazzHR API key required

### Caching

- Use Next.js `fetch` with `next: { revalidate: 600 }` (10 minutes), or equivalent short ISR/cache TTL in the 5–15 minute range
- Fresh enough for hiring; avoids hitting JazzHR on every page view

### Failure / empty states

| Case | UI |
|------|-----|
| Fetch or parse fails | Short message + link to `https://mandsc.applytojob.com/` |
| Zero open roles | “No open roles right now” + portal link |
| Success | List of roles + secondary “View all on JazzHR” link |

## UI

Replace the Open Roles iframe card with:

1. Section header (eyebrow + short supporting copy about live JazzHR listings)
2. Vertical list of roles: **title** + **location** (department only if reliably present in the board HTML)
3. Each row is a full clickable outbound link (new tab)
4. Secondary text link: “View all on JazzHR” → portal root
5. Preserve surrounding careers sections (hero, join copy, benefits, internships, contact) unchanged

Visual language should match existing careers page patterns (typography, navy/`#001F65`, spacing) — simple list/rows, not a heavy card grid or iframe chrome.

## Out of scope

- JazzHR REST API (`api.resumatorapi.com`) and API keys
- Job detail pages or apply forms on this site
- Changing benefits, internship, or contact sections
- Indeed/LinkedIn or other third-party apply widgets beyond what JazzHR shows on its own pages

## Success criteria

- No JazzHR iframe on `/careers`
- Open roles update from JazzHR without manual site edits
- Clicking a role opens the correct `mandsc.applytojob.com/apply/...` page in a new tab
- Fetch/parse failure still leaves a usable path to JazzHR
- `pnpm typecheck` and `pnpm build` pass for `artifacts/mands-site`
