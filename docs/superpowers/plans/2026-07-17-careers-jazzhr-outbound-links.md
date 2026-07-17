# Careers JazzHR Outbound Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the JazzHR iframe on `/careers` with a live, site-styled open-roles list that links each role out to its JazzHR job page in a new tab.

**Architecture:** A small server-side JazzHR client fetches the public board HTML, parses job title/location/URL, and the careers page renders that list. No iframe, no apply form, no JazzHR API key.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, existing careers page styles (`FadeIn`, `ms-container`, navy/`#001F65`).

**Spec:** `docs/superpowers/specs/2026-07-17-careers-jazzhr-outbound-links-design.md`

## Global Constraints

- Board URL: `https://mandsc.applytojob.com/apply` (not `mnsc.`)
- Job URL pattern: `https://mandsc.applytojob.com/apply/{jobId}/{slug}`
- Links: `target="_blank"` + `rel="noopener noreferrer"`
- Cache TTL: 600 seconds (`revalidate: 600`)
- No JazzHR REST API / API keys
- No apply UI on this site
- Do not commit unless the user explicitly asks
- Verify with `pnpm typecheck` and `pnpm build` from `artifacts/mands-site`
- No test runner in this package today — parser is verified with a checked-in HTML fixture + Node assert script (no new test framework dependency)

---

## File Structure

| File | Responsibility |
|------|----------------|
| `artifacts/mands-site/lib/jazzhr-jobs.ts` | Types, `parseJazzHrJobs(html)`, `fetchJazzHrJobs()` |
| `artifacts/mands-site/lib/__fixtures__/jazzhr-board-snippet.html` | Minimal HTML fixture for parser verification |
| `artifacts/mands-site/scripts/verify-jazzhr-jobs.mjs` | Asserts parser output against the fixture (run via `node`) |
| `artifacts/mands-site/app/(marketing)/careers/page.tsx` | Replace iframe Open Roles block with fetched list UI |
| `artifacts/mands-site/components/sections/open-roles-list.tsx` | Presentational list + empty/error fallback (optional split if page stays readable without it) |

Prefer putting the list markup in `page.tsx` if it stays ~40–60 lines; extract `open-roles-list.tsx` only if the page becomes hard to read.

---

### Task 1: JazzHR HTML parser + fixture verification

**Files:**
- Create: `artifacts/mands-site/lib/jazzhr-jobs.ts`
- Create: `artifacts/mands-site/lib/__fixtures__/jazzhr-board-snippet.html`
- Create: `artifacts/mands-site/scripts/verify-jazzhr-jobs.mjs`

**Interfaces:**
- Consumes: raw JazzHR board HTML string
- Produces:
  ```ts
  export type JazzHrJob = {
    id: string;
    title: string;
    location: string;
    url: string;
  };

  export function parseJazzHrJobs(html: string): JazzHrJob[];
  ```

- [ ] **Step 1: Add the HTML fixture**

Create `artifacts/mands-site/lib/__fixtures__/jazzhr-board-snippet.html` with this exact content (representative of live board markup):

```html
<ul class='list-group'>
  <li class="list-group-item">
    <h3 class='list-group-item-heading'>
      <a href="https://mandsc.applytojob.com/apply/weYsOpQI1B/3D-Animator">
        3D Animator
      </a>
    </h3>
    <ul class='list-inline list-group-item-text'>
      <li><i class='fa fa-map-marker'></i>Remote</li>
    </ul>
  </li>
  <li class="list-group-item">
    <h3 class='list-group-item-heading'>
      <a href="https://mandsc.applytojob.com/apply/aaFgBwOIF7/CopywriterContent-Strategist">
        Copywriter/Content Strategist
      </a>
    </h3>
    <ul class='list-inline list-group-item-text'>
      <li><i class='fa fa-map-marker'></i>Pasadena, CA</li>
    </ul>
  </li>
</ul>
```

- [ ] **Step 2: Write the failing verify script**

Create `artifacts/mands-site/scripts/verify-jazzhr-jobs.mjs`:

```js
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fixture = readFileSync(
  join(root, "lib/__fixtures__/jazzhr-board-snippet.html"),
  "utf8",
);

const { parseJazzHrJobs } = await import(
  pathToFileURL(join(root, "lib/jazzhr-jobs.ts")).href
);

const jobs = parseJazzHrJobs(fixture);
const expected = [
  {
    id: "weYsOpQI1B",
    title: "3D Animator",
    location: "Remote",
    url: "https://mandsc.applytojob.com/apply/weYsOpQI1B/3D-Animator",
  },
  {
    id: "aaFgBwOIF7",
    title: "Copywriter/Content Strategist",
    location: "Pasadena, CA",
    url: "https://mandsc.applytojob.com/apply/aaFgBwOIF7/CopywriterContent-Strategist",
  },
];

if (JSON.stringify(jobs) !== JSON.stringify(expected)) {
  console.error("Unexpected parse result:\n", jobs);
  process.exit(1);
}

console.log("verify-jazzhr-jobs: ok", jobs.length, "jobs");
```

Note: If Node cannot import `.ts` directly in this environment, rewrite the verify script to call a tiny duplicated parse in the `.mjs` **only as a last resort**, and keep `parseJazzHrJobs` in `lib/jazzhr-jobs.ts` as the source of truth used by the app. Prefer enabling TS import via `node --experimental-strip-types` (Node 22+) when available:

```bash
node --experimental-strip-types scripts/verify-jazzhr-jobs.mjs
```

- [ ] **Step 3: Run verify script — expect failure (module missing)**

Run from `artifacts/mands-site`:

```bash
node --experimental-strip-types scripts/verify-jazzhr-jobs.mjs
```

Expected: FAIL (cannot find `lib/jazzhr-jobs.ts` or `parseJazzHrJobs` undefined)

- [ ] **Step 4: Implement `parseJazzHrJobs`**

Create `artifacts/mands-site/lib/jazzhr-jobs.ts`:

```ts
export type JazzHrJob = {
  id: string;
  title: string;
  location: string;
  url: string;
};

const JOB_ITEM_RE =
  /<li class="list-group-item">[\s\S]*?<a href="(https:\/\/mandsc\.applytojob\.com\/apply\/([A-Za-z0-9]+)\/[^"]+)">\s*([\s\S]*?)\s*<\/a>[\s\S]*?(?:fa-map-marker[^>]*>\s*([^<]+)<)?/gi;

function decodeBasicEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

export function parseJazzHrJobs(html: string): JazzHrJob[] {
  const jobs: JazzHrJob[] = [];
  const seen = new Set<string>();

  for (const match of html.matchAll(JOB_ITEM_RE)) {
    const url = match[1];
    const id = match[2];
    const title = decodeBasicEntities(match[3].replace(/\s+/g, " "));
    const location = decodeBasicEntities((match[4] ?? "").replace(/\s+/g, " "));

    if (!id || !title || !url || seen.has(id)) continue;
    seen.add(id);
    jobs.push({ id, title, location, url });
  }

  return jobs;
}
```

If the regex proves brittle against live HTML whitespace, switch to a block-based approach: split on `list-group-item`, then extract `href`, title text, and map-marker location with smaller regexes per block. Keep the same return type.

- [ ] **Step 5: Re-run verify script — expect pass**

```bash
node --experimental-strip-types scripts/verify-jazzhr-jobs.mjs
```

Expected: `verify-jazzhr-jobs: ok 2 jobs`

- [ ] **Step 6: Commit (only if user asked)**

Skip unless the user explicitly requested a commit.

---

### Task 2: `fetchJazzHrJobs` with cache + error result

**Files:**
- Modify: `artifacts/mands-site/lib/jazzhr-jobs.ts`

**Interfaces:**
- Consumes: `parseJazzHrJobs`
- Produces:
  ```ts
  export type JazzHrJobsResult =
    | { ok: true; jobs: JazzHrJob[] }
    | { ok: false; jobs: []; error: string };

  export async function fetchJazzHrJobs(): Promise<JazzHrJobsResult>;
  ```

- [ ] **Step 1: Add `fetchJazzHrJobs`**

Append to `artifacts/mands-site/lib/jazzhr-jobs.ts`:

```ts
const JAZZHR_BOARD_URL = "https://mandsc.applytojob.com/apply";

export type JazzHrJobsResult =
  | { ok: true; jobs: JazzHrJob[] }
  | { ok: false; jobs: []; error: string };

export async function fetchJazzHrJobs(): Promise<JazzHrJobsResult> {
  try {
    const response = await fetch(JAZZHR_BOARD_URL, {
      headers: {
        "user-agent": "MNSConsultingCareersBot/1.0 (+https://mnsconsulting.com/careers)",
        accept: "text/html",
      },
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      return {
        ok: false,
        jobs: [],
        error: `JazzHR board returned ${response.status}`,
      };
    }

    const html = await response.text();
    const jobs = parseJazzHrJobs(html);

    if (jobs.length === 0) {
      // Distinguish empty board vs parse miss: if the board markup marker is missing, treat as error.
      if (!html.includes("list-group-item")) {
        return {
          ok: false,
          jobs: [],
          error: "JazzHR board markup not recognized",
        };
      }
    }

    return { ok: true, jobs };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown JazzHR fetch error";
    return { ok: false, jobs: [], error: message };
  }
}
```

- [ ] **Step 2: Smoke-check against the live board (optional but recommended)**

From `artifacts/mands-site`, in a short Node one-liner or temporary script: fetch the live board, parse, and print `jobs.length` and first 3 titles. Expect ~20 roles (count varies). Do not leave temporary scripts behind.

- [ ] **Step 3: Commit (only if user asked)**

Skip unless the user explicitly requested a commit.

---

### Task 3: Replace careers iframe with outbound role list

**Files:**
- Modify: `artifacts/mands-site/app/(marketing)/careers/page.tsx`

**Interfaces:**
- Consumes: `fetchJazzHrJobs` from `@/lib/jazzhr-jobs`
- Produces: updated Open Roles UI on `/careers`

- [ ] **Step 1: Make the page async and fetch jobs**

Change the page component signature and load jobs at the top:

```tsx
import { ArrowUpRight } from "lucide-react";
import { fetchJazzHrJobs } from "@/lib/jazzhr-jobs";
// ...existing imports

export default async function CareersPage() {
  const jazzHr = await fetchJazzHrJobs();

  return (
    <>
      {/* existing hero + join sections unchanged until Open Roles */}
```

- [ ] **Step 2: Replace the iframe Open Roles block**

Remove the iframe and the card chrome that exists only to frame it. Keep `#open-roles`. Replace the inner Open Roles content roughly as follows (adjust spacing to match surrounding careers styles):

```tsx
<FadeIn delay={0.1}>
  <div id="open-roles">
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow mb-2" style={{ color: "#001F65" }}>OPEN ROLES</p>
        <p className="font-sans text-sm leading-relaxed" style={{ color: "#4A5568" }}>
          Listings are pulled directly from JazzHR and stay current as roles change.
          Select a role to view details and apply on JazzHR.
        </p>
      </div>
      <a
        href="https://mandsc.applytojob.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group font-sans inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
        style={{ color: "#001F65" }}
      >
        View all on JazzHR
        <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>

    {!jazzHr.ok ? (
      <div
        className="rounded-[12px] px-5 py-6"
        style={{ backgroundColor: "#EFEADB", border: "1px solid rgba(0,31,101,0.08)" }}
      >
        <p className="font-sans" style={{ color: "#4A5568", fontSize: "0.95rem", lineHeight: 1.6 }}>
          We couldn&rsquo;t load open roles right now.{" "}
          <a
            href="https://mandsc.applytojob.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-2 hover:underline"
            style={{ color: "#001F65" }}
          >
            View openings on JazzHR
          </a>
          .
        </p>
      </div>
    ) : jazzHr.jobs.length === 0 ? (
      <div
        className="rounded-[12px] px-5 py-6"
        style={{ backgroundColor: "#EFEADB", border: "1px solid rgba(0,31,101,0.08)" }}
      >
        <p className="font-sans" style={{ color: "#4A5568", fontSize: "0.95rem", lineHeight: 1.6 }}>
          No open roles right now. Check back soon, or{" "}
          <a
            href="https://mandsc.applytojob.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-2 hover:underline"
            style={{ color: "#001F65" }}
          >
            visit our JazzHR portal
          </a>
          .
        </p>
      </div>
    ) : (
      <ul className="divide-y" style={{ borderTop: "1px solid rgba(0,31,101,0.10)", borderBottom: "1px solid rgba(0,31,101,0.10)" }}>
        {jazzHr.jobs.map((job) => (
          <li key={job.id}>
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 py-4 transition-colors sm:items-center"
            >
              <div className="min-w-0">
                <p
                  className="font-sans font-semibold transition-colors group-hover:text-[#5CA7F3]"
                  style={{ color: "#001F65", fontSize: "1.05rem", lineHeight: 1.35 }}
                >
                  {job.title}
                </p>
                {job.location ? (
                  <p className="font-sans mt-1 text-sm" style={{ color: "#4A5568" }}>
                    {job.location}
                  </p>
                ) : null}
              </div>
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: "#001F65" }}
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
</FadeIn>
```

Remove the old bordered iframe card wrapper and the “Open JazzHR Portal” filled button (replaced by the text link above).

- [ ] **Step 3: Typecheck and build**

From `artifacts/mands-site`:

```bash
pnpm typecheck
pnpm build
```

Expected: both succeed with no errors related to careers / jazzhr files.

- [ ] **Step 4: Manual UI check**

Run `pnpm dev` if needed, open `/careers`, confirm:

1. No iframe
2. Role titles/locations render
3. Clicking a role opens JazzHR in a new tab
4. “View all on JazzHR” works

- [ ] **Step 5: Commit (only if user asked)**

Skip unless the user explicitly requested a commit.

---

## Spec Coverage Checklist

| Spec requirement | Task |
|------------------|------|
| Remove iframe | Task 3 |
| Live list from public board HTML | Tasks 1–2 |
| New-tab outbound job links | Task 3 |
| Cache ~5–15 min | Task 2 (`revalidate: 600`) |
| Fetch/parse failure fallback | Task 3 |
| Empty board message | Task 3 |
| Secondary portal link | Task 3 |
| No REST API / apply-on-site | Global constraints |
| typecheck + build | Task 3 |

## Plan Self-Review

- No placeholders left in task steps
- Types consistent: `JazzHrJob`, `JazzHrJobsResult`, `parseJazzHrJobs`, `fetchJazzHrJobs`
- Commits gated on explicit user request (repo rule)
