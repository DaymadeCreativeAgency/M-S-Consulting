import { NextRequest, NextResponse } from "next/server";
import { getAllPosts } from "@/lib/content/blog";
import { getAllEpisodes } from "@/lib/content/podcast";
import { CASE_STUDIES } from "@/lib/case-studies";

export type SearchResultItem = {
  type: "page" | "blog" | "podcast" | "case-study";
  title: string;
  description: string;
  href: string;
};

const STATIC_PAGES: SearchResultItem[] = [
  { type: "page", title: "Home", description: "M&S Consulting — enterprise technology consulting since 2002", href: "/" },
  { type: "page", title: "About", description: "250 consultants, 20+ years delivering complex technology programs", href: "/about" },
  { type: "page", title: "Careers", description: "Open positions and career opportunities at M&S Consulting", href: "/careers" },
  { type: "page", title: "Contact", description: "Get in touch with M&S Consulting", href: "/contact" },
  { type: "page", title: "Blog", description: "Insights and thought leadership from M&S consultants", href: "/blog" },
  { type: "page", title: "Human Coded Podcast", description: "Podcast episodes on technology, AI, and enterprise transformation", href: "/podcast" },
  { type: "page", title: "Case Studies", description: "Client outcomes and project deep-dives", href: "/case-studies" },
  { type: "page", title: "Service Lines", description: "Microsoft, Salesforce, SAP, AWS, Oracle, Snowflake, Atlassian", href: "/service-lines" },
  { type: "page", title: "Practice Areas", description: "AI, Cloud, Cyber, Data Analytics, Agile PM, Enterprise Apps", href: "/practice-areas" },
  { type: "page", title: "Microsoft", description: "M365, Azure, Power Platform consulting and implementation", href: "/service-lines/microsoft" },
  { type: "page", title: "Salesforce", description: "CRM implementation, optimization, and rescue engagements", href: "/service-lines/salesforce" },
  { type: "page", title: "SAP", description: "ERP modernization, BRIM, and SAP integration consulting", href: "/service-lines/sap" },
  { type: "page", title: "AWS", description: "Cloud infrastructure, migrations, and DevSecOps", href: "/service-lines/aws" },
  { type: "page", title: "Oracle", description: "Database, ERP, and Oracle cloud services", href: "/service-lines/oracle" },
  { type: "page", title: "Snowflake", description: "Data cloud architecture and analytics infrastructure", href: "/service-lines/snowflake" },
  { type: "page", title: "Atlassian", description: "Jira, Confluence, and DevOps tooling", href: "/service-lines/atlassian" },
  { type: "page", title: "AI & Data", description: "Responsible AI adoption and analytics platforms", href: "/practice-areas/ai" },
  { type: "page", title: "Cloud & Infrastructure", description: "Cloud strategy, migration, and platform engineering", href: "/practice-areas/cloud" },
  { type: "page", title: "Cybersecurity", description: "Zero-trust architecture and continuous compliance", href: "/practice-areas/cyber" },
  { type: "page", title: "Data Analytics", description: "Data fabric, integration, and business intelligence", href: "/practice-areas/data-analytics" },
  { type: "page", title: "Agile Project Management", description: "Embedded PMO and complex program delivery", href: "/practice-areas/agile-pm" },
  { type: "page", title: "Enterprise Applications", description: "ERP, CRM, and enterprise system modernization", href: "/practice-areas/enterprise-apps" },
];

function matches(text: string, q: string) {
  return text.toLowerCase().includes(q);
}

function score(item: { title: string; description: string }, q: string): number {
  let s = 0;
  if (item.title.toLowerCase().startsWith(q)) s += 4;
  else if (item.title.toLowerCase().includes(q)) s += 2;
  if (item.description.toLowerCase().includes(q)) s += 1;
  return s;
}

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get("q") ?? "").trim().toLowerCase();

  if (q.length < 2) return NextResponse.json([]);

  const results: (SearchResultItem & { _score: number })[] = [];

  // Static pages
  for (const page of STATIC_PAGES) {
    if (matches(page.title, q) || matches(page.description, q)) {
      results.push({ ...page, _score: score(page, q) + 1 });
    }
  }

  // Blog posts
  try {
    for (const post of getAllPosts()) {
      const haystack = `${post.title} ${post.description} ${post.category} ${post.tags.join(" ")}`;
      if (matches(haystack, q)) {
        results.push({
          type: "blog",
          title: post.title,
          description: post.description,
          href: `/blog/${post.slug}`,
          _score: score({ title: post.title, description: post.description }, q),
        });
      }
    }
  } catch {
    // blog not available during build
  }

  // Podcast episodes
  try {
    for (const episode of getAllEpisodes()) {
      const haystack = `${episode.title} ${episode.description} ${episode.category} ${episode.tags.join(" ")}`;
      if (matches(haystack, q)) {
        results.push({
          type: "podcast",
          title: episode.title,
          description: episode.description,
          href: `/podcast/${episode.slug}`,
          _score: score({ title: episode.title, description: episode.description }, q),
        });
      }
    }
  } catch {
    // podcast not available during build
  }

  // Case studies
  for (const cs of CASE_STUDIES) {
    const haystack = `${cs.title} ${cs.summary} ${cs.industry} ${cs.technologies.join(" ")}`;
    if (matches(haystack, q)) {
      results.push({
        type: "case-study",
        title: cs.title,
        description: cs.summary,
        href: `/case-studies/${cs.slug}`,
        _score: score({ title: cs.title, description: cs.summary }, q),
      });
    }
  }

  const sorted = results
    .sort((a, b) => b._score - a._score)
    .slice(0, 8)
    .map(({ _score: _, ...rest }) => rest);

  return NextResponse.json(sorted);
}
