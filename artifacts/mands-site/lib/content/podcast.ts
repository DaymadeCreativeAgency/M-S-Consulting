import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { BlogPostMeta } from "@/lib/content/blog-client";
export { formatDate } from "@/lib/content/blog-client";

export type PodcastEpisodeMeta = BlogPostMeta & {
  episodeNumber: number | null;
  buzzsproutEpisodeId?: string;
  buzzsproutEmbedUrl?: string;
};

export type PodcastEpisode = PodcastEpisodeMeta & {
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content/podcast");

function getEpisodeNumber(title: string, slug: string): number | null {
  const match = `${title} ${slug}`.match(/human coded\D+(\d{1,3})/i);
  return match ? Number(match[1]) : null;
}

function toEpisodeMeta(file: string): PodcastEpisodeMeta {
  const slug = file.replace(/\.(mdx|md)$/, "");
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
  const { data } = matter(raw);
  const title = data.title ?? "Untitled";

  return {
    slug,
    title,
    description: data.description ?? "",
    datePublished: data.datePublished ?? "2024-01-01",
    author: data.author ?? "M&S Consulting",
    category: data.category ?? "Podcast",
    tags: data.tags ?? [],
    readTime: data.readTime ?? "5 min read",
    featured: data.featured ?? false,
    coverImage: data.coverImage,
    episodeNumber: getEpisodeNumber(title, slug),
    buzzsproutEpisodeId: data.buzzsproutEpisodeId,
    buzzsproutEmbedUrl: data.buzzsproutEmbedUrl,
  };
}

export function getAllEpisodes(): PodcastEpisodeMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map(toEpisodeMeta)
    .sort((a, b) => {
      if (a.episodeNumber !== null && b.episodeNumber !== null) {
        return b.episodeNumber - a.episodeNumber;
      }

      return (
        new Date(b.datePublished).getTime() -
        new Date(a.datePublished).getTime()
      );
    });
}

export function getEpisode(slug: string): PodcastEpisode | null {
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);
  const meta = toEpisodeMeta(path.basename(filePath));

  return {
    ...meta,
    content,
  };
}
