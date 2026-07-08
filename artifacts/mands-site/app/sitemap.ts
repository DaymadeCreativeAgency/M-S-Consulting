import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";
import { getAllPosts } from "@/lib/content/blog";
import { getAllEpisodes } from "@/lib/content/podcast";

const BASE = "https://www.mandsconsulting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const caseStudyEntries: MetadataRoute.Sitemap = CASE_STUDIES.map((cs) => ({
    url: `${BASE}/case-studies/${cs.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.75,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.datePublished,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const podcastEntries: MetadataRoute.Sitemap = getAllEpisodes().map((episode) => ({
    url: `${BASE}/podcast/${episode.slug}`,
    lastModified: episode.datePublished,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/legal`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/brasil`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/higher-ed`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/staff-augmentation`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/appalachia-software-factory`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/enterprise-resource-planning`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/detailed-ticket-history-lite-privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/service-lines`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/service-lines/microsoft`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/service-lines/salesforce`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/service-lines/sap`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/service-lines/oracle`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/service-lines/aws`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/service-lines/atlassian`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/service-lines/snowflake`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/practice-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/practice-areas/enterprise-apps`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/practice-areas/cloud`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/practice-areas/data-analytics`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/practice-areas/agile-pm`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/practice-areas/cyber`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/practice-areas/ai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...blogEntries,
    { url: `${BASE}/podcast`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...podcastEntries,
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    ...caseStudyEntries,
  ];
}
