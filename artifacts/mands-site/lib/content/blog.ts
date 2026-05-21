import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type { BlogPostMeta } from "@/lib/content/blog-client";
export { formatDate, getCategoryColor, CATEGORY_COLORS } from "@/lib/content/blog-client";
import type { BlogPostMeta } from "@/lib/content/blog-client";

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
