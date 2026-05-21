"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight, ChevronDown } from "lucide-react";
import { formatDate, getCategoryColor } from "@/lib/content/blog-client";
import type { BlogPostMeta } from "@/lib/content/blog-client";

type SortOption = "newest" | "oldest" | "category";

export function BlogGrid({ posts }: { posts: BlogPostMeta[] }) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("newest");

  const categories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))).sort(),
    [posts]
  );

  const filtered = useMemo(() => {
    let result = [...posts];

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (sort === "newest") {
      result.sort(
        (a, b) =>
          new Date(b.datePublished).getTime() -
          new Date(a.datePublished).getTime()
      );
    } else if (sort === "oldest") {
      result.sort(
        (a, b) =>
          new Date(a.datePublished).getTime() -
          new Date(b.datePublished).getTime()
      );
    } else {
      result.sort((a, b) => a.category.localeCompare(b.category));
    }

    return result;
  }, [posts, query, selectedCategory, sort]);

  return (
    <section className="bg-ms-paper pt-10 pb-20 lg:pb-28">
      <div className="ms-container">

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-3 mb-7">
          <div className="relative flex-1">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none"
              style={{ color: "rgba(26,27,23,0.35)" }}
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, topics, or keywords…"
              className="w-full pl-10 pr-10 py-2.5 rounded-lg font-sans text-sm text-ms-ink placeholder:text-charcoal-700/40 focus:outline-none transition"
              style={{
                border: "1px solid rgba(0,31,101,0.15)",
                backgroundColor: "#fff",
              }}
              aria-label="Search articles"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-ms-cream transition-colors"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" style={{ color: "rgba(26,27,23,0.4)" }} />
              </button>
            )}
          </div>

          <div className="relative shrink-0">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="appearance-none pl-4 pr-9 py-2.5 rounded-lg font-sans text-sm text-ms-ink focus:outline-none transition cursor-pointer"
              style={{
                border: "1px solid rgba(0,31,101,0.15)",
                backgroundColor: "#fff",
              }}
              aria-label="Sort articles"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="category">By category</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 pointer-events-none"
              style={{ color: "rgba(26,27,23,0.4)" }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Category filter pills */}
        <div
          className="flex flex-wrap gap-2 pb-7 mb-7"
          style={{ borderBottom: "1px solid rgba(0,31,101,0.08)" }}
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className="px-3.5 py-1.5 rounded-full font-sans text-[11px] font-bold uppercase tracking-[0.07em] transition-all"
            style={
              !selectedCategory
                ? { backgroundColor: "#001F65", color: "#fff" }
                : { backgroundColor: "#EFEADB", color: "#001F65" }
            }
          >
            All
          </button>
          {categories.map((cat) => {
            const color = getCategoryColor(cat);
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(active ? null : cat)}
                className="px-3.5 py-1.5 rounded-full font-sans text-[11px] font-bold uppercase tracking-[0.07em] transition-all"
                style={
                  active
                    ? { backgroundColor: color.bg, color: "#fff" }
                    : {
                        backgroundColor: color.border + "18",
                        color: color.border,
                      }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Result count */}
        <div className="flex items-baseline justify-between mb-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ms-navy">
            {selectedCategory || query.trim() ? "Results" : "All Articles"}
          </p>
          <p className="font-sans text-sm" style={{ color: "rgba(26,27,23,0.5)" }}>
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-sans text-base text-charcoal-700 mb-4">
              No articles match your search.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setSelectedCategory(null);
              }}
              className="font-sans text-sm font-semibold text-ms-navy hover:opacity-75 transition-opacity"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function PostCard({ post }: { post: BlogPostMeta }) {
  const color = getCategoryColor(post.category);
  return (
    <Link href={`/blog/${post.slug}`} className="group block outline-none">
      <article
        className="h-full flex flex-col overflow-hidden rounded-xl border bg-white transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ms-navy focus-visible:ring-offset-2"
        style={{
          borderColor: "rgba(0,31,101,0.10)",
          borderTop: `3px solid ${color.border}`,
          boxShadow: "0 1px 4px rgba(0,31,101,0.06)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 8px 32px rgba(0,31,101,0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 1px 4px rgba(0,31,101,0.06)";
        }}
      >
        {/* Thumbnail */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "16/10", backgroundColor: color.border + "12" }}
        >
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-end p-5"
              style={{ backgroundColor: color.border + "12" }}
            >
              <span
                className="font-sans text-xs font-bold uppercase tracking-widest opacity-25"
                style={{ color: color.border }}
              >
                {post.category}
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-6">
          <span
            className="inline-block self-start px-2.5 py-1 rounded-full font-sans text-[0.63rem] font-bold uppercase tracking-[0.08em] mb-4"
            style={{ backgroundColor: color.bg, color: "#fff" }}
          >
            {post.category}
          </span>
          <h3 className="font-serif text-[1.02rem] leading-[1.22] text-ms-ink group-hover:text-ms-navy transition-colors flex-1 mb-3">
            {post.title}
          </h3>
          <p
            className="font-sans text-[0.81rem] leading-relaxed line-clamp-2 mb-5"
            style={{ color: "rgba(26,27,23,0.6)" }}
          >
            {post.description}
          </p>
          <div
            className="mt-auto pt-4 flex items-center justify-between gap-2"
            style={{ borderTop: "1px solid rgba(0,31,101,0.07)" }}
          >
            <p className="font-sans text-[11px]" style={{ color: "rgba(26,27,23,0.5)" }}>
              {formatDate(post.datePublished)}&nbsp;·&nbsp;{post.readTime}
            </p>
            <span className="inline-flex items-center gap-1 font-sans text-xs font-bold text-ms-navy group-hover:gap-1.5 transition-all">
              Read <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
