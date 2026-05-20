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
  "AI & Data":          { bg: "#001F65", text: "#ffffff", border: "#5CA7F3" },
  "Cloud":              { bg: "#1A3A5C", text: "#ffffff", border: "#4A9ECA" },
  "Cybersecurity":      { bg: "#1A2D1A", text: "#ffffff", border: "#6AAF6A" },
  "Data Analytics":     { bg: "#001F65", text: "#ffffff", border: "#001F65" },
  "Agile PM":           { bg: "#2A4A3A", text: "#ffffff", border: "#5A9A6A" },
  "Enterprise Apps":    { bg: "#001F65", text: "#ffffff", border: "#001F65" },
  "SAP":                { bg: "#001F65", text: "#ffffff", border: "#001F65" },
  "Salesforce":         { bg: "#001F65", text: "#ffffff", border: "#001F65" },
  "Microsoft":          { bg: "#001F65", text: "#ffffff", border: "#001F65" },
  "AWS":                { bg: "#001F65", text: "#ffffff", border: "#FF9900" },
  "Transformation":     { bg: "#001F65", text: "#ffffff", border: "#001F65" },
};

export function getCategoryColor(category: string) {
  return CATEGORY_COLORS[category] ?? { bg: "#001F65", text: "#ffffff", border: "#001F65" };
}
