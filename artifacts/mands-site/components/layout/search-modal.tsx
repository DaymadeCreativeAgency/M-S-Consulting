"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, X, BookOpen, FileText, BarChart2, Mic } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SearchResultItem } from "@/app/search/route";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const TYPE_LABELS: Record<SearchResultItem["type"], string> = {
  page: "Page",
  blog: "Blog",
  podcast: "Podcast",
  "case-study": "Case Study",
};

function ResultIcon({ type }: { type: SearchResultItem["type"] }) {
  if (type === "blog") return <BookOpen className="h-4 w-4" aria-hidden="true" />;
  if (type === "podcast") return <Mic className="h-4 w-4" aria-hidden="true" />;
  if (type === "case-study") return <BarChart2 className="h-4 w-4" aria-hidden="true" />;
  return <FileText className="h-4 w-4" aria-hidden="true" />;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchResultItem[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [selectedIdx, setSelectedIdx] = React.useState(-1);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setSelectedIdx(-1);
      const t = setTimeout(() => inputRef.current?.focus(), 40);
      return () => clearTimeout(t);
    }
  }, [open]);

  React.useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/search?q=${encodeURIComponent(query)}`);
        const data: SearchResultItem[] = await res.json();
        setResults(data);
        setSelectedIdx(-1);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 180);
    return () => clearTimeout(timer);
  }, [query]);

  const navigate = React.useCallback(
    (href: string) => {
      router.push(href);
      onClose();
    },
    [router, onClose]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Escape":
        onClose();
        break;
      case "ArrowDown":
        e.preventDefault();
        setSelectedIdx((i) => Math.min(i + 1, results.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIdx((i) => Math.max(i - 1, -1));
        break;
      case "Enter":
        if (selectedIdx >= 0 && results[selectedIdx]) {
          e.preventDefault();
          navigate(results[selectedIdx].href);
        }
        break;
    }
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site search"
        className="fixed inset-0 z-[201] flex items-start justify-center px-4 pt-[10vh] pointer-events-none"
      >
        <div className="pointer-events-auto w-full max-w-2xl rounded-xl bg-ms-paper shadow-2xl border border-[rgba(0,31,101,0.12)] overflow-hidden">
          {/* Input row */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[rgba(0,31,101,0.08)]">
            <Search
              className={cn(
                "h-5 w-5 shrink-0 transition-colors",
                query.length > 0 ? "text-ms-navy" : "text-charcoal-700"
              )}
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              type="search"
              autoComplete="off"
              spellCheck={false}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search pages, posts, case studies…"
              className="flex-1 font-sans text-[15px] text-ms-ink placeholder:text-charcoal-700/50 bg-transparent outline-none min-w-0"
              aria-label="Search query"
              aria-autocomplete="list"
              aria-controls="search-results"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setResults([]);
                  inputRef.current?.focus();
                }}
                className="p-1.5 rounded-md hover:bg-ms-cream/60 transition-colors shrink-0"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5 text-charcoal-700" aria-hidden="true" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded border border-[rgba(0,31,101,0.12)] font-sans text-xs font-medium text-charcoal-700 hover:bg-ms-cream/60 transition-colors shrink-0"
            >
              Esc
            </button>
          </div>

          {/* Results list */}
          {results.length > 0 && (
            <ul
              id="search-results"
              role="listbox"
              className="py-2 max-h-[52vh] overflow-y-auto divide-y divide-[rgba(0,31,101,0.04)]"
            >
              {results.map((item, idx) => (
                <li key={item.href} role="option" aria-selected={idx === selectedIdx}>
                  <button
                    type="button"
                    className={cn(
                      "w-full text-left flex items-start gap-3.5 px-5 py-3.5 transition-colors border-l-2",
                      idx === selectedIdx
                        ? "bg-ms-cream/70 border-ms-navy"
                        : "border-transparent hover:bg-ms-cream/40 hover:border-ms-navy/30"
                    )}
                    onClick={() => navigate(item.href)}
                    onMouseEnter={() => setSelectedIdx(idx)}
                  >
                    <span
                      className={cn(
                        "mt-0.5 shrink-0",
                        idx === selectedIdx ? "text-ms-navy" : "text-ms-navy/50"
                      )}
                    >
                      <ResultIcon type={item.type} />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-sans text-[14px] font-semibold text-ms-ink leading-snug">
                        {item.title}
                      </span>
                      <span className="block font-sans text-xs text-charcoal-700 mt-0.5 line-clamp-1 leading-relaxed">
                        {item.description}
                      </span>
                    </span>
                    <span className="shrink-0 self-center font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-ms-navy/40 ml-2">
                      {TYPE_LABELS[item.type]}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* No results */}
          {query.length >= 2 && !loading && results.length === 0 && (
            <div className="py-14 text-center">
              <p className="font-sans text-sm text-charcoal-700">
                No results for{" "}
                <strong className="text-ms-ink font-semibold">&ldquo;{query}&rdquo;</strong>
              </p>
            </div>
          )}

          {/* Empty / initial */}
          {query.length < 2 && (
            <div className="py-12 px-6 text-center">
              <p className="font-sans text-sm text-charcoal-700/55">
                Search across pages, blog posts, podcast episodes, and case studies.
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="px-5 py-2.5 border-t border-[rgba(0,31,101,0.06)] flex items-center gap-4">
            <span className="font-sans text-[11px] text-charcoal-700/45 select-none">
              ↑↓ navigate &nbsp;·&nbsp; Enter open &nbsp;·&nbsp; Esc close
            </span>
            {loading && (
              <span className="font-sans text-[11px] text-ms-navy/50 ml-auto">
                Searching…
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
