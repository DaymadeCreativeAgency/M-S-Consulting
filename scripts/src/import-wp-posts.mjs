import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");

const xmlPath = path.join(
  ROOT,
  "attached_assets/mampsconsulting-clouddevsecopsintegration.WordPress.2026-05-18_1779377743298.xml"
);
const outputDir = path.join(ROOT, "artifacts/mands-site/content/blog");

const xml = fs.readFileSync(xmlPath, "utf-8");

// ── helpers ────────────────────────────────────────────────────────────────────

function getCDATA(tag, str) {
  const re = new RegExp(
    `<${tag}(?:\\s[^>]*)?>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*<\\/${tag}>`,
    "i"
  );
  return (str.match(re)?.[1] ?? "").trim();
}

function getValue(tag, str) {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i");
  return (str.match(re)?.[1] ?? "").trim();
}

/** Very light WP HTML → Markdown */
function toMarkdown(html) {
  if (!html) return "";

  return (
    html
      // Gutenberg block comments — strip
      .replace(/<!--[\s\S]*?-->/g, "")

      // Headings
      .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, t) => `# ${strip(t)}\n\n`)
      .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `## ${strip(t)}\n\n`)
      .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `### ${strip(t)}\n\n`)
      .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, t) => `#### ${strip(t)}\n\n`)
      .replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, (_, t) => `##### ${strip(t)}\n\n`)

      // Inline
      .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
      .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**")
      .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "*$1*")
      .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, "*$1*")
      .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, "`$1`")

      // Links (drop images inside links)
      .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
        const t = strip(text).trim();
        if (!t || /^https?:\/\//.test(t)) return t || "";
        return `[${t}](${href})`;
      })

      // Images — drop entirely (WP uploads not available)
      .replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, "")
      .replace(/<img[^>]*>/gi, "")

      // Blockquotes
      .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner) =>
        inner
          .split(/\n+/)
          .map((l) => `> ${strip(l).trim()}`)
          .filter((l) => l !== "> ")
          .join("\n") + "\n\n"
      )

      // Lists
      .replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, "$1\n")
      .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, "$1\n")
      .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, t) => `- ${strip(t).trim()}\n`)

      // Paragraphs / breaks
      .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, t) => {
        const c = strip(t).trim();
        return c ? `${c}\n\n` : "";
      })
      .replace(/<br\s*\/?>/gi, "\n")

      // Divs / sections
      .replace(/<\/?(?:div|section|article|header|footer|aside|nav|main)[^>]*>/gi, "\n")

      // Strip remaining tags
      .replace(/<[^>]+>/g, "")

      // HTML entities
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#8220;|&#x201C;/g, "\u201C")
      .replace(/&#8221;|&#x201D;/g, "\u201D")
      .replace(/&#8216;|&#x2018;/g, "\u2018")
      .replace(/&#8217;|&#x2019;/g, "\u2019")
      .replace(/&#8211;|&#x2013;/g, "\u2013")
      .replace(/&#8212;|&#x2014;/g, "\u2014")
      .replace(/&nbsp;/g, " ")
      .replace(/&#\d+;/g, "")

      // Normalise whitespace
      .replace(/\r\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
}

function strip(html) {
  return (html ?? "")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8216;/g, "\u2018")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&#8211;/g, "\u2013")
    .replace(/&#8212;/g, "\u2014")
    .replace(/&nbsp;/g, " ");
}

function escapeFrontmatter(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function readTime(html) {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

// ── parse items ───────────────────────────────────────────────────────────────

const itemBlocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(
  (m) => m[1]
);

let imported = 0;
let skipped = 0;
const slugsSeen = new Set();

// Keep existing hand-crafted MDX files — don't overwrite them
const existing = new Set(
  fs.readdirSync(outputDir).map((f) => f.replace(/\.(mdx|md)$/, ""))
);

for (const item of itemBlocks) {
  const postType = getCDATA("wp:post_type", item) || getValue("wp:post_type", item);
  const status = getCDATA("wp:status", item) || getValue("wp:status", item);

  if (postType !== "post" || status !== "publish") {
    skipped++;
    continue;
  }

  const title = getCDATA("title", item) || getValue("title", item);
  if (!title) { skipped++; continue; }

  // Prefer wp:post_name (URL slug) but fall back to slugified title
  let slug = getCDATA("wp:post_name", item) || getValue("wp:post_name", item);
  if (!slug) {
    slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  // Deduplicate
  let uniqueSlug = slug;
  let suffix = 2;
  while (slugsSeen.has(uniqueSlug)) {
    uniqueSlug = `${slug}-${suffix++}`;
  }
  slugsSeen.add(uniqueSlug);

  // Skip existing hand-crafted posts (keep our polished versions)
  if (existing.has(uniqueSlug)) {
    console.log(`  (kept existing) ${uniqueSlug}`);
    imported++;
    continue;
  }

  const rawDate = getValue("wp:post_date", item);
  const datePublished = rawDate ? rawDate.split(" ")[0] : "2025-01-01";

  const creator = getCDATA("dc:creator", item) || getValue("dc:creator", item) || "M&S Consulting";

  const contentHtml = getCDATA("content:encoded", item);
  const excerptHtml = getCDATA("excerpt:encoded", item);

  const cats = [...item.matchAll(/<category domain="category"[^>]*><!\[CDATA\[(.*?)\]\]><\/category>/g)].map(
    (m) => m[1]
  );
  const tags = [...item.matchAll(/<category domain="post_tag"[^>]*><!\[CDATA\[(.*?)\]\]><\/category>/g)].map(
    (m) => m[1]
  );

  const category = cats[0] || "Insights";

  const rawExcerpt = excerptHtml ? strip(excerptHtml).replace(/\s+/g, " ").trim() : "";
  const description = rawExcerpt.slice(0, 280) || strip(contentHtml).replace(/\s+/g, " ").slice(0, 280);

  const rt = readTime(contentHtml);
  const body = toMarkdown(contentHtml);

  // Skip posts with no real body content
  if (body.trim().length < 40) {
    console.log(`  (empty body, skip) ${uniqueSlug}`);
    skipped++;
    continue;
  }

  const tagList = tags.map((t) => `"${escapeFrontmatter(t)}"`).join(", ");

  const mdx = `---
title: "${escapeFrontmatter(title)}"
description: "${escapeFrontmatter(description)}"
datePublished: "${datePublished}"
author: "${escapeFrontmatter(creator)}"
category: "${escapeFrontmatter(category)}"
tags: [${tagList}]
readTime: "${rt}"
---

${body}
`;

  fs.writeFileSync(path.join(outputDir, `${uniqueSlug}.mdx`), mdx, "utf-8");
  console.log(`✓ ${title.slice(0, 70)}`);
  imported++;
}

console.log(`\nDone. Imported: ${imported}  Skipped: ${skipped}`);
console.log(`Blog dir now has ${fs.readdirSync(outputDir).length} MDX files`);
