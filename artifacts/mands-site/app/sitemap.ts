import type { MetadataRoute } from "next";

const BASE = "https://mandsconsulting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
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
  ];
}
