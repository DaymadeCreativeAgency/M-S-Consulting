/**
 * Normalizes all blog post tags to a canonical set and adds
 * category-derived SEO tags to each post.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.resolve(__dirname, "../../artifacts/mands-site/content/blog");

// ── canonical tag map ──────────────────────────────────────────────────────────
// Raw tag (lowercased) → canonical slug (or null to remove)
const TAG_MAP = {
  // Remove noise
  "m&s consulting": null,
  "m&amp;s consulting": null,
  "mands consulting": null,
  "it": null,
  "people": null,
  "communication": null,
  "collaboration": null,
  "skills": null,
  "stengths": null,
  "strengths": null,
  "empathy": null,
  "value-driven outcomes": null,
  "introvert": null,
  "identity": null,
  "shelfware": null,
  "decision making": null,
  "decision-making": null,
  "workflow": null,
  "tools": null,
  "best practices": null,
  "": null,

  // AI / Automation
  "artificial intelligence": "ai",
  "ai": "ai",
  "generative ai": "generative-ai",
  "gen ai": "generative-ai",
  "machine learning": "machine-learning",
  "rpa": "automation",
  "robotic process automation": "automation",
  "intelligent process automation": "automation",
  "ipa": "automation",
  "automation": "automation",

  // Cloud
  "cloud": "cloud",
  "cloud computing": "cloud",
  "cloud and virtualization": "cloud",
  "cloud migration": "cloud",
  "multi-cloud": "cloud",
  "aws": "aws",
  "amazon web services": "aws",
  "azure": "microsoft",
  "microsoft azure": "microsoft",
  "gcp": "cloud",
  "google cloud": "cloud",
  "devsecops": "devops",
  "devops": "devops",

  // Data
  "data": "data-analytics",
  "data analytics": "data-analytics",
  "data analysis": "data-analytics",
  "big data": "data-analytics",
  "bi": "data-analytics",
  "business intelligence": "data-analytics",
  "data strategy": "data-analytics",
  "data management": "data-analytics",
  "data governance": "data-analytics",

  // Enterprise / ERP
  "erp": "erp",
  "enterprise resource planning": "erp",
  "sap": "sap",
  "sap hana": "sap",
  "sap brim": "sap",
  "rise with sap": "sap",
  "oracle": "oracle",
  "oracle cloud": "oracle",

  // CRM / Salesforce
  "salesforce": "salesforce",
  "salesforce appexchange": "salesforce",
  "salesforce agentforce": "salesforce",
  "crm": "salesforce",

  // Microsoft
  "microsoft": "microsoft",
  "microsoft 365": "microsoft",
  "sharepoint": "microsoft",
  "power apps": "microsoft",
  "power platform": "microsoft",

  // Snowflake / Atlassian
  "snowflake": "snowflake",
  "atlassian": "atlassian",
  "jira": "atlassian",
  "confluence": "atlassian",

  // Project delivery
  "agile": "agile",
  "scrum": "agile",
  "sprints": "agile",
  "sprint": "agile",
  "project management": "project-management",
  "program management": "project-management",
  "pmo": "project-management",

  // Strategy / transformation
  "digital transformation": "digital-transformation",
  "digital-transformation": "digital-transformation",
  "digital strategy": "digital-transformation",
  "transformation": "digital-transformation",
  "change management": "change-management",
  "change-management": "change-management",
  "organizational change": "change-management",
  "ocm": "change-management",

  // Leadership
  "leadership": "leadership",
  "servant leadership": "leadership",
  "management": "leadership",
  "team": "leadership",

  // Sectors
  "public sector": "public-sector",
  "federal": "public-sector",
  "government": "public-sector",
  "dod": "public-sector",
  "law": "legal",
  "legal": "legal",
  "law firm": "legal",
  "legal tech": "legal",

  // Other topics
  "cybersecurity": "cybersecurity",
  "security": "cybersecurity",
  "supply chain": "supply-chain",
  "supply-chain": "supply-chain",
  "low code": "low-code",
  "no code": "low-code",
  "low-code": "low-code",
  "gamification": "learning",
  "learning": "learning",
  "training": "learning",

  // Consulting craft
  "consulting": "consulting",
  "enterprise apps": "enterprise-apps",
  "enterprise applications": "enterprise-apps",
  "enterprise": "enterprise-apps",
};

// Category → default SEO tags to ensure are present
const CATEGORY_DEFAULTS = {
  "AI & Data": ["ai", "data-analytics"],
  "Emerging Tech and AI": ["ai", "digital-transformation"],
  "Cloud": ["cloud"],
  "Cloud and Virtualization": ["cloud"],
  "Salesforce": ["salesforce", "crm"],
  "Enterprise Apps": ["enterprise-apps"],
  "Enterprise Resource Planning": ["erp", "sap"],
  "Data Analytics": ["data-analytics"],
  "Big Data & BI": ["data-analytics"],
  "Business Strategy": ["consulting", "digital-transformation"],
  "Transformation": ["digital-transformation", "change-management"],
  "Change Management": ["change-management"],
  "Agile PM": ["agile", "project-management"],
  "Cybersecurity": ["cybersecurity"],
  "Case Studies": ["consulting"],
  "Problem Solved": ["consulting"],
};

function normalizeTag(raw) {
  const key = raw.toLowerCase().trim();
  if (key in TAG_MAP) return TAG_MAP[key];
  // Pass through if it already looks like a canonical slug
  if (/^[a-z0-9-]+$/.test(key)) return key;
  // Slugify remaining
  const slugged = key.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return slugged || null;
}

const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
let changed = 0;

for (const file of files) {
  const filePath = path.join(BLOG_DIR, file);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const rawTags = Array.isArray(data.tags) ? data.tags : [];
  const normalized = new Set();

  for (const tag of rawTags) {
    const n = normalizeTag(String(tag));
    if (n) normalized.add(n);
  }

  // Inject category-derived defaults
  const defaults = CATEGORY_DEFAULTS[data.category] ?? [];
  for (const d of defaults) normalized.add(d);

  const newTags = [...normalized].sort();
  const oldTags = [...rawTags].sort().map((t) => normalizeTag(String(t))).filter(Boolean).sort();

  if (JSON.stringify(newTags) === JSON.stringify(oldTags)) continue;

  data.tags = newTags;

  const updated = matter.stringify(content, data);
  fs.writeFileSync(filePath, updated, "utf-8");
  changed++;
}

console.log(`Updated ${changed} / ${files.length} files`);
