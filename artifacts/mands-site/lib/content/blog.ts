import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

export type BlogPost = BlogPostMeta & {
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? "Untitled",
        description: data.description ?? "",
        datePublished: data.datePublished ?? "2024-01-01",
        author: data.author ?? "M&S Consulting",
        category: data.category ?? "Insights",
        tags: data.tags ?? [],
        readTime: data.readTime ?? "5 min read",
        featured: data.featured ?? false,
        coverImage: data.coverImage,
      } satisfies BlogPostMeta;
    })
    .sort(
      (a, b) =>
        new Date(b.datePublished).getTime() -
        new Date(a.datePublished).getTime()
    );

  return posts;
}

export function getPost(slug: string): BlogPost | null {
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
    ? mdPath
    : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "Untitled",
    description: data.description ?? "",
    datePublished: data.datePublished ?? "2024-01-01",
    author: data.author ?? "M&S Consulting",
    category: data.category ?? "Insights",
    tags: data.tags ?? [],
    readTime: data.readTime ?? "5 min read",
    featured: data.featured ?? false,
    coverImage: data.coverImage,
    content,
  };
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  // Core practice areas
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
  // Service lines
  "SAP":                         { bg: "#001F65", text: "#ffffff", border: "#001F65" },
  "Salesforce":                  { bg: "#0070D2", text: "#ffffff", border: "#0070D2" },
  "Microsoft":                   { bg: "#00A4EF", text: "#ffffff", border: "#00A4EF" },
  "AWS":                         { bg: "#232F3E", text: "#ffffff", border: "#FF9900" },
  // Content categories from WP
  "Business Strategy":           { bg: "#1A1B17", text: "#ffffff", border: "#8B8B7A" },
  "Transformation":              { bg: "#2A1F4A", text: "#ffffff", border: "#7B6AB5" },
  "Case Studies":                { bg: "#1A3A2A", text: "#ffffff", border: "#5A9A7A" },
  "Problem Solved":              { bg: "#1A3A2A", text: "#ffffff", border: "#5A9A7A" },
  "Offerings":                   { bg: "#001F65", text: "#ffffff", border: "#001F65" },
  "Notes":                       { bg: "#3A3A3A", text: "#ffffff", border: "#8B8B8B" },
  "News and Updates":            { bg: "#1A3A5C", text: "#ffffff", border: "#4A9ECA" },
};

export function getCategoryColor(category: string) {
  return CATEGORY_COLORS[category] ?? { bg: "#001F65", text: "#ffffff", border: "#001F65" };
}
