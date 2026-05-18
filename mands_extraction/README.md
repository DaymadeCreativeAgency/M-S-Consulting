# Extracted Content — How to use this folder

This folder contains the clean, parsed content from the M&S WordPress export. One Markdown file per page, post, and case study. The Divi shortcodes have been stripped, HTML converted to Markdown, and entities decoded.

**Use this as your source-of-truth when filling in the Layer 4 prompts.** When you build a page in Replit, open the matching `.md` file in this folder, copy the relevant content, and paste it into the prompt.

## What's in here

```
mands_extraction/
├── INDEX.md                  ← Master list of everything, with original URLs
├── pages/                    ← 35 published pages
├── posts/                    ← 85 published blog posts (newest first by date)
├── case-studies/             ← 19 case study projects (the "project" post type in WP)
└── attachments_inventory.csv ← Full list of every uploaded media file
```

## What I learned from the extraction that wasn't in our previous inventory

### The "Human Coded" podcast is actually 23 episodes, not just a landing page

22 of the 85 blog posts (slugs starting `human-coded-`) are podcast episode write-ups. Each one has its own URL and content. This changes Layer 4 — the `/insights/podcast/` page should be an episode index, not a single landing page. Each episode should have its own detail page.

### There are 19 real case studies, fully written

In the WordPress data, case studies live as the `project` post type. The full content is here, structured with consistent sections (Challenge / Work We Did / Solutions / Results / Conclusion). This is much stronger source material than what was visible on the live site. Notable ones:

- `agile-erp-implementation-transforming-air-force-common-services` — Air Force ERP, Scrum/Kanban transformation
- `avidxchange` — named client
- `carnegie-mellon-case-study` — Carnegie Mellon
- `oracle-cloud-expansion-case-study`
- `sap-brim-transformation-for-a-national-media-ad-sales-giant`
- `spectrum-reach-business-continuity-success`
- `when-the-cio-didnt-show-up` — strong title, worth reading
- `yay-we-have-salesforce` — strong title, worth reading

### Pages that exist but weren't in the main nav (worth deciding what to do with)

- `/higher-ed/` — Higher Education vertical (last modified 2020, possibly stale)
- `/brasil/` — Brasil nearshore page
- `/appalachia-software-factory/` — Software Factory program
- `/enterprise-resource-planning/` — Dedicated ERP page (separate from /enterprise-apps/)
- `/cloud-infrastructure-services/` — Duplicate of /cloud-infrastructure-consulting/? Last modified 2021, likely stale
- `/staff-augmentation/` — Already flagged
- Event landing pages: `/ces-2025/`, `/afcea-west-2026/`, `/agentforce-world-tour-2025/`, `/acng-cloud-strategy-meetup/` — these are time-bound. Some past, some upcoming. Decide which to keep, redirect, or build a recurring "/events/" pattern for.

### Pages that should be deleted, not migrated

- `/ack/` — last modified 2016, probably an old acknowledgment page
- `/blog-2/` — duplicate of `/blog`, last modified 2025-04
- `/confirm-subscription/` — newsletter confirmation page, can be system-generated on the new site
- `/detailed-ticket-history-lite-privacy-policy/` — likely an old plugin's privacy policy, unrelated to M&S
- `/cloud-infrastructure-services/` — duplicate, last modified 2021
- `/home-new/` — the actual home page is here with slug `home-new`, which suggests there's a `/home/` somewhere too — verify before redirecting

## How to use this with the Layer 4 prompts

**For each page you build:**

1. Find the matching file in `pages/` (use INDEX.md to locate it)
2. Open it, read the full content
3. In your Layer 4 prompt, paste the relevant section where the prompt says `[PASTE EXTRACTED COPY HERE]`
4. Add the rewrite rules from Layer 1 (no em dashes, no "harness the power of," etc.)
5. Replit builds the page using your structured copy

**For case studies and blog posts:**

These should be migrated to MDX files in the Replit project at `/content/case-studies/` and `/content/blog/`. You can do this two ways:

- **Manually**, one at a time: open the `.md` file, copy the content, paste into a new `.mdx` file in Replit with frontmatter. Slow but lets you rewrite as you go.
- **In batch with a script**: ask Replit to write a script that ingests this folder and produces MDX files with the right frontmatter. Fast, but you'll want to review the output.

I'd recommend a hybrid: batch-migrate everything as a starting point so links and dates are preserved, then hand-rewrite the 5-10 priority case studies and blog posts that get the most visibility on the new site.

## What didn't make it cleanly through the parser

A few things the parser couldn't perfectly handle from the WordPress export:

- **Divi-specific layout structure is gone.** That's intentional — Divi's column layouts and module styling don't translate to the new site. What you have is the *content* without the layout. You're rebuilding the layout in Replit anyway.
- **Some pages will look fragmented** because Divi modules sometimes split a single paragraph across multiple text modules. Read through pages like `/ai/` and stitch them back together as needed.
- **Custom fields aren't included** — if any pages used Divi's custom fields for things like CTAs or specifications, those didn't come through. The visible page content did.
- **Image URLs are preserved** but they point to the old `mandsconsulting.com/wp-content/uploads/...` paths. When you migrate, update these to point to `/media/...` in the new Replit project.

## What to do with `attachments_inventory.csv`

It lists every media file in the WordPress library with URL, type, and upload date. Use it to:

1. Cross-reference against your FTP/Cyberduck media pull — make sure nothing's missing
2. Identify candidates for deletion (anything not referenced from a page/post you're migrating)
3. Map old media URLs to new paths in the redirect_map.csv

2,284 attachments is a lot. Most are auto-generated thumbnail sizes that you don't need (the `find` command from the media README handles those). The actually-uploaded originals are probably more like 300-500 files.
