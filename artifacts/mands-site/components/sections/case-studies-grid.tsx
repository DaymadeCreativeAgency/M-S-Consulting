"use client";

import * as React from "react";
import { ChevronDown, X } from "lucide-react";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import {
  CASE_STUDIES,
  FILTER_GROUPS,
  type FilterCategory,
} from "@/lib/case-studies";
import { cn } from "@/lib/utils";

type ActiveFilters = Record<FilterCategory, string[]>;

const EMPTY_FILTERS: ActiveFilters = {
  serviceLines: [],
  practiceAreas: [],
  industries: [],
};

export function CaseStudiesGrid() {
  const [active, setActive] = React.useState<ActiveFilters>(EMPTY_FILTERS);
  const [openKey, setOpenKey] = React.useState<FilterCategory | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const toggleFilter = (key: FilterCategory, value: string) => {
    setActive((prev) => {
      const cur = prev[key];
      return {
        ...prev,
        [key]: cur.includes(value)
          ? cur.filter((v) => v !== value)
          : [...cur, value],
      };
    });
  };

  const clearAll = () => {
    setActive(EMPTY_FILTERS);
    setOpenKey(null);
  };

  const hasAnyFilter = Object.values(active).some((arr) => arr.length > 0);

  const filtered = CASE_STUDIES.filter((cs) =>
    FILTER_GROUPS.every(({ key }) => {
      if (active[key].length === 0) return true;
      return active[key].some((v) => cs[key].includes(v));
    })
  );

  // Close dropdown on outside click
  React.useEffect(() => {
    if (!openKey) return;
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpenKey(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openKey]);

  return (
    <div style={{ backgroundColor: "#0A0E1A" }}>
      {/* Filter bar */}
      <div
        ref={containerRef}
        className="ms-container py-6"
        style={{ borderBottom: "1px solid #1F2438" }}
      >
        <div className="flex flex-wrap items-center gap-3">
          {FILTER_GROUPS.map(({ key, label, options }) => {
            const count = active[key].length;
            const isOpen = openKey === key;

            return (
              <div key={key} className="relative">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="listbox"
                  onClick={() => setOpenKey(isOpen ? null : key)}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-full",
                    "font-sans text-sm font-semibold transition-all duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  )}
                  style={{
                    backgroundColor: count > 0 || isOpen ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
                    border: `1px solid ${count > 0 ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.12)"}`,
                    color: count > 0 ? "#E8EAED" : "#8B92A8",
                  }}
                >
                  {label}
                  {count > 0 && (
                    <span
                      className="inline-flex items-center justify-center w-4 h-4 rounded-full font-sans text-[10px] font-bold"
                      style={{ backgroundColor: "#5CA7F3", color: "#0A0E1A" }}
                    >
                      {count}
                    </span>
                  )}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-150",
                      isOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown panel */}
                {isOpen && (
                  <div
                    className="absolute left-0 top-full mt-2 z-40 min-w-[200px] rounded-xl overflow-hidden"
                    style={{
                      backgroundColor: "#131829",
                      border: "1px solid #1F2438",
                    }}
                    role="listbox"
                    aria-label={label}
                  >
                    <ul className="py-2">
                      {options.map(({ value, label: optLabel }) => {
                        const isActive = active[key].includes(value);
                        return (
                          <li key={value}>
                            <button
                              type="button"
                              role="option"
                              aria-selected={isActive}
                              onClick={() => toggleFilter(key, value)}
                              className="w-full flex items-center justify-between gap-3 px-4 py-2.5 font-sans text-sm transition-colors duration-100 focus-visible:outline-none"
                              style={{
                                color: isActive ? "#E8EAED" : "#8B92A8",
                                backgroundColor: isActive
                                  ? "rgba(92,167,243,0.10)"
                                  : "transparent",
                              }}
                              onMouseEnter={(e) => {
                                if (!isActive)
                                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                                    "rgba(255,255,255,0.05)";
                              }}
                              onMouseLeave={(e) => {
                                if (!isActive)
                                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                                    "transparent";
                              }}
                            >
                              <span>{optLabel}</span>
                              {isActive && (
                                <span
                                  className="w-4 h-4 rounded-sm flex items-center justify-center shrink-0"
                                  style={{ backgroundColor: "#5CA7F3" }}
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
                                      stroke="#0A0E1A"
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
            );
          })}

          {/* Clear filter */}
          {hasAnyFilter && (
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ml-auto"
              style={{
                color: "#8B92A8",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              Clear filter
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Result count */}
      <div className="ms-container pt-5 pb-2">
        <p className="font-sans text-sm" style={{ color: "#8B92A8" }}>
          {filtered.length === CASE_STUDIES.length
            ? `All ${CASE_STUDIES.length} case studies`
            : `${filtered.length} of ${CASE_STUDIES.length} case studies`}
        </p>
      </div>

      {/* Grid */}
      <div className="ms-container pb-24 pt-4">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-sans text-lg mb-3" style={{ color: "#8B92A8" }}>
              No case studies match those filters.
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="font-sans text-sm font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity focus-visible:outline-none"
              style={{ color: "#5CA7F3" }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((cs) => (
              <CaseStudyCard
                key={cs.slug}
                industry={cs.industry}
                metric={cs.metric}
                headline={cs.title}
                summary={cs.summary}
                href={`/case-studies/${cs.slug}`}
                technologies={cs.technologies}
                coverImage={cs.coverImage}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
