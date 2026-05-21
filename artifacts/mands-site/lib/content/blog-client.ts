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

/**
 * Curated Unsplash fallback image per category.
 * Used on cards and article headers when no coverImage is set.
 */
export const CATEGORY_IMAGES: Record<string, string> = {
  "Business Strategy":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=70",
  "Emerging Tech and AI":
    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=70",
  "AI & Data":
    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=70",
  "Cloud":
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=70",
  "Cloud and Virtualization":
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=70",
  "Salesforce":
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=70",
  "Enterprise Apps":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=70",
  "Enterprise Resource Planning":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=70",
  "Data Analytics":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=70",
  "Big Data & BI":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=70",
  "Agile PM":
    "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=900&q=70",
  "Transformation":
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=70",
  "Change Management":
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=70",
  "Case Studies":
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=70",
  "Problem Solved":
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=900&q=70",
  "Cybersecurity":
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=70",
  "Notes":
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=70",
  "News and Updates":
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=70",
  "Offerings":
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=70",
};

export function getCategoryImage(category: string): string {
  return (
    CATEGORY_IMAGES[category] ??
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=70"
  );
}
