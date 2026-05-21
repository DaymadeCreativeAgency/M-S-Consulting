/**
 * Client-safe blog utilities — no Node.js deps (no fs/path/gray-matter).
 * Import this in "use client" components instead of lib/content/blog.
 */

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
  coverImage?: string;
};

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const CATEGORY_COLORS: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  "AI & Data":                   { bg: "#001F65", text: "#ffffff", border: "#5CA7F3" },
  "Emerging Tech and AI":        { bg: "#001F65", text: "#ffffff", border: "#5CA7F3" },
  "Cloud":                       { bg: "#1A3A5C", text: "#ffffff", border: "#4A9ECA" },
  "Cloud and Virtualization":    { bg: "#1A3A5C", text: "#ffffff", border: "#4A9ECA" },
  "Cybersecurity":               { bg: "#1A2D1A", text: "#ffffff", border: "#6AAF6A" },
  "Data Analytics":              { bg: "#001F65", text: "#ffffff", border: "#5CA7F3" },
  "Big Data & BI":               { bg: "#001F65", text: "#ffffff", border: "#5CA7F3" },
  "Agile PM":                    { bg: "#2A4A3A", text: "#ffffff", border: "#5A9A6A" },
  "Enterprise Apps":             { bg: "#001F65", text: "#ffffff", border: "#001F65" },
  "Enterprise Resource Planning":{ bg: "#001F65", text: "#ffffff", border: "#001F65" },
  "SAP":                         { bg: "#001F65", text: "#ffffff", border: "#001F65" },
  "Salesforce":                  { bg: "#0070D2", text: "#ffffff", border: "#0070D2" },
  "Microsoft":                   { bg: "#00A4EF", text: "#ffffff", border: "#00A4EF" },
  "AWS":                         { bg: "#232F3E", text: "#ffffff", border: "#FF9900" },
  "Business Strategy":           { bg: "#1A1B17", text: "#ffffff", border: "#8B8B7A" },
  "Transformation":              { bg: "#2A1F4A", text: "#ffffff", border: "#7B6AB5" },
  "Case Studies":                { bg: "#1A3A2A", text: "#ffffff", border: "#5A9A7A" },
  "Problem Solved":              { bg: "#1A3A2A", text: "#ffffff", border: "#5A9A7A" },
  "Offerings":                   { bg: "#001F65", text: "#ffffff", border: "#001F65" },
  "Notes":                       { bg: "#3A3A3A", text: "#ffffff", border: "#8B8B8B" },
  "News and Updates":            { bg: "#1A3A5C", text: "#ffffff", border: "#4A9ECA" },
};

export function getCategoryColor(category: string) {
  return (
    CATEGORY_COLORS[category] ?? {
      bg: "#001F65",
      text: "#ffffff",
      border: "#001F65",
    }
  );
}
