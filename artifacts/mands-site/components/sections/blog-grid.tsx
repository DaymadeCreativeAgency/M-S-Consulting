"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ChevronDown, ArrowRight } from "lucide-react";
import { formatDate, getCategoryColor, getCategoryImage } from "@/lib/content/blog-client";
import type { BlogPostMeta } from "@/lib/content/blog-client";
import { cn } from "@/lib/utils";

type SortOption = "newest" | "oldest" | "category";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "category", label: "By category" },
];

type OpenMenu = "category" | "sort" | null;

export function BlogGrid({ posts }: { posts: BlogPostMeta[] }) {
  const [query, setQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [sort, setSort] = React.useState<SortOption>("newest");
  const [openMenu, setOpenMenu] = React.useState<OpenMenu>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const categories = React.useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))).sort(),
    [posts]
  );

  const filtered = React.useMemo(() => {
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
          new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
      );
    } else if (sort === "oldest") {
      result.sort(
        (a, b) =>
          new Date(a.datePublished).getTime() - new Date(b.datePublished).getTime()
      );
    } else {
      result.sort((a, b) => a.category.localeCompare(b.category));
    }

    return result;
  }, [posts, query, selectedCategory, sort]);

  const hasFilters = !!selectedCategory || sort !== "newest" || query.trim() !== "";

  const clearAll = () => {
    setQuery("");
    setSelectedCategory(null);
    setSort("newest");
    setOpenMenu(null);
  };

  // Close on outside click
  React.useEffect(() => {
    if (!openMenu) return;
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openMenu]);

  const sortLabel = SORT_OPTIONS.find((o) => o.value === sort)?.label ?? "Sort";

  return (
    <section className="bg-ms-paper pt-0 pb-20 lg:pb-28">
      {/* Filter bar */}
      <div
        ref={containerRef}
        className="ms-container py-6"
        style={{ borderBottom: "1px solid rgba(0,31,101,0.10)" }}
      >
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-[220px]">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none"
              style={{ color: "rgba(0,31,101,0.30)" }}
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, topics, or keywords…"
              className="w-full pl-10 pr-10 py-2 rounded-full font-sans text-sm text-ms-ink placeholder:text-[rgba(0,31,101,0.35)] focus:outline-none transition"
              style={{
                border: "1px solid rgba(0,31,101,0.18)",
                backgroundColor: "#fff",
              }}
              aria-label="Search articles"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-ms-cream transition-colors"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" style={{ color: "rgba(0,31,101,0.40)" }} />
              </button>
            )}
          </div>

          {/* Category dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={openMenu === "category"}
              aria-haspopup="listbox"
              onClick={() => setOpenMenu(openMenu === "category" ? null : "category")}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full",
                "font-sans text-sm font-semibold transition-all duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy/20"
              )}
              style={{
                backgroundColor:
                  selectedCategory || openMenu === "category"
                    ? "rgba(0,31,101,0.08)"
                    : "rgba(0,31,101,0.03)",
                border: `1px solid ${selectedCategory ? "rgba(0,31,101,0.30)" : "rgba(0,31,101,0.14)"}`,
                color: selectedCategory ? "#001F65" : "rgba(0,31,101,0.50)",
              }}
            >
              {selectedCategory ?? "Category"}
              {selectedCategory && (
                <span
                  className="inline-flex items-center justify-center w-4 h-4 rounded-full font-sans text-[10px] font-bold"
                  style={{ backgroundColor: "#001F65", color: "#fff" }}
                >
                  1
                </span>
              )}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-150",
                  openMenu === "category" && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>

            {openMenu === "category" && (
              <div
                className="absolute left-0 top-full mt-2 z-40 min-w-[220px] rounded-xl overflow-hidden"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,31,101,0.12)",
                  boxShadow: "0 8px 32px rgba(0,31,101,0.12)",
                }}
                role="listbox"
                aria-label="Filter by category"
              >
                <ul className="py-2">
                  {categories.map((cat) => {
                    const color = getCategoryColor(cat);
                    const isActive = selectedCategory === cat;
                    return (
                      <li key={cat}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={isActive}
                          onClick={() => {
                            setSelectedCategory(isActive ? null : cat);
                            setOpenMenu(null);
                          }}
                          className="w-full flex items-center justify-between gap-3 px-4 py-2.5 font-sans text-sm transition-colors duration-100 focus-visible:outline-none"
                          style={{
                            color: isActive ? "#001F65" : "rgba(26,27,23,0.65)",
                            backgroundColor: isActive
                              ? "rgba(0,31,101,0.06)"
                              : "transparent",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive)
                              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                                "rgba(0,31,101,0.04)";
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive)
                              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                                "transparent";
                          }}
                        >
                          <span className="flex items-center gap-2.5">
                            <span
                              className="w-2 h-2 rounded-full shrink-0"
                              style={{ backgroundColor: color.border }}
                            />
                            {cat}
                          </span>
                          {isActive && (
                            <span
                              className="w-4 h-4 rounded-sm flex items-center justify-center shrink-0"
                              style={{ backgroundColor: "#001F65" }}
                            >
                              <svg
                                width="8"
                                height="6"
                                viewBox="0 0 8 6"
                                fill="none"
                                aria-hidden="true"
                              >
                                <path
                                  d="M1 3L3 5L7 1"
                                  stroke="#fff"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={openMenu === "sort"}
              aria-haspopup="listbox"
              onClick={() => setOpenMenu(openMenu === "sort" ? null : "sort")}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full",
                "font-sans text-sm font-semibold transition-all duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy/20"
              )}
              style={{
                backgroundColor:
                  sort !== "newest" || openMenu === "sort"
                    ? "rgba(0,31,101,0.08)"
                    : "rgba(0,31,101,0.03)",
                border: `1px solid ${sort !== "newest" ? "rgba(0,31,101,0.30)" : "rgba(0,31,101,0.14)"}`,
                color: sort !== "newest" ? "#001F65" : "rgba(0,31,101,0.50)",
              }}
            >
              {sortLabel}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-150",
                  openMenu === "sort" && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>

            {openMenu === "sort" && (
              <div
                className="absolute left-0 top-full mt-2 z-40 min-w-[180px] rounded-xl overflow-hidden"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,31,101,0.12)",
                  boxShadow: "0 8px 32px rgba(0,31,101,0.12)",
                }}
                role="listbox"
                aria-label="Sort articles"
              >
                <ul className="py-2">
                  {SORT_OPTIONS.map((opt) => {
                    const isActive = sort === opt.value;
                    return (
                      <li key={opt.value}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={isActive}
                          onClick={() => {
                            setSort(opt.value);
                            setOpenMenu(null);
                          }}
                          className="w-full flex items-center justify-between gap-3 px-4 py-2.5 font-sans text-sm transition-colors duration-100 focus-visible:outline-none"
                          style={{
                            color: isActive ? "#001F65" : "rgba(26,27,23,0.65)",
                            backgroundColor: isActive
                              ? "rgba(0,31,101,0.06)"
                              : "transparent",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive)
                              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                                "rgba(0,31,101,0.04)";
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive)
                              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                                "transparent";
                          }}
                        >
                          <span>{opt.label}</span>
                          {isActive && (
                            <span
                              className="w-4 h-4 rounded-sm flex items-center justify-center shrink-0"
                              style={{ backgroundColor: "#001F65" }}
                            >
                              <svg
                                width="8"
                                height="6"
                                viewBox="0 0 8 6"
                                fill="none"
                                aria-hidden="true"
                              >
                                <path
                                  d="M1 3L3 5L7 1"
                                  stroke="#fff"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* Clear all */}
          {hasFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-150 ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy/20"
              style={{
                color: "rgba(0,31,101,0.50)",
                border: "1px solid rgba(0,31,101,0.12)",
              }}
            >
              Clear
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Result count */}
      <div className="ms-container pt-5 pb-2">
        <p className="font-sans text-sm" style={{ color: "rgba(26,27,23,0.45)" }}>
          {filtered.length === posts.length
            ? `All ${posts.length} articles`
            : `${filtered.length} of ${posts.length} articles`}
        </p>
      </div>

      {/* Grid */}
      <div className="ms-container pt-4 pb-0">
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
              onClick={clearAll}
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
  const thumb = post.coverImage ?? getCategoryImage(post.category);
  return (
    <Link href={`/blog/${post.slug}`} className="group block outline-none">
      <article
        className="h-full flex flex-col overflow-hidden rounded-xl border bg-white transition-all duration-200 hover:-translate-y-0.5"
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
          style={{ aspectRatio: "16/10" }}
        >
          <Image
            src={thumb}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
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
