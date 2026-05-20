"use client";

import * as React from "react";
import { X } from "lucide-react";
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

  const clearAll = () => setActive(EMPTY_FILTERS);

  const hasAnyFilter = Object.values(active).some((arr) => arr.length > 0);

  const filtered = CASE_STUDIES.filter((cs) => {
    return FILTER_GROUPS.every(({ key }) => {
      if (active[key].length === 0) return true;
      return active[key].some((v) => cs[key].includes(v));
    });
  });

  const activeChips: { key: FilterCategory; value: string; label: string }[] =
    FILTER_GROUPS.flatMap(({ key, options }) =>
      active[key].map((v) => ({
        key,
        value: v,
        label: options.find((o) => o.value === v)?.label ?? v,
      }))
    );

  return (
    <div>
      {/* Filter panel */}
      <div className="bg-ms-cream border-b border-[rgba(0,31,101,0.08)]">
        <div className="ms-container py-8">
          <div className="space-y-5">
            {FILTER_GROUPS.map(({ key, label, options }) => (
              <div key={key} className="flex flex-wrap items-center gap-2">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ms-navy/60 w-28 shrink-0">
                  {label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {options.map(({ value, label: optLabel }) => {
                    const isActive = active[key].includes(value);
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => toggleFilter(key, value)}
                        className={cn(
                          "inline-flex items-center px-3 py-1 rounded-full border",
                          "font-sans text-xs font-semibold transition-all duration-150",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy",
                          isActive
                            ? "bg-ms-navy text-white border-ms-navy"
                            : "bg-white text-ms-ink border-[rgba(0,31,101,0.20)] hover:border-ms-navy hover:text-ms-navy"
                        )}
                        aria-pressed={isActive}
                      >
                        {optLabel}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active filter chips + result count */}
      <div className="ms-container py-5 flex flex-wrap items-center gap-3 min-h-[52px]">
        <span className="font-sans text-sm text-charcoal-700">
          {filtered.length === CASE_STUDIES.length
            ? `All ${CASE_STUDIES.length} case studies`
            : `${filtered.length} of ${CASE_STUDIES.length} case studies`}
        </span>
        {activeChips.map(({ key, value, label }) => (
          <button
            key={`${key}-${value}`}
            type="button"
            onClick={() => toggleFilter(key, value)}
            className="inline-flex items-center gap-1.5 pl-3 pr-2 py-1 rounded-full bg-ms-navy/10 border border-ms-navy/20 font-sans text-xs font-semibold text-ms-navy hover:bg-ms-navy/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
          >
            {label}
            <X className="h-3 w-3" aria-hidden="true" />
          </button>
        ))}
        {hasAnyFilter && (
          <button
            type="button"
            onClick={clearAll}
            className="font-sans text-xs text-charcoal-700 underline underline-offset-2 hover:text-ms-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy rounded"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="ms-container pb-24">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-sans text-lg text-charcoal-700 mb-2">
              No case studies match those filters.
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="font-sans text-sm font-semibold text-ms-navy underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
