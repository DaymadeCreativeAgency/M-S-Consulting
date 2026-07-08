"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, FileText, BookOpen, Mic, Search, ArrowRight } from "lucide-react";
import { SearchModal } from "./search-modal";
import { cn } from "@/lib/utils";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";

interface NavLink {
  name: string;
  href: string;
  description?: string;
}

const FEATURED_WORK: CaseStudy[] = [
  CASE_STUDIES.find((s) => s.slug === "avidxchange"),
  CASE_STUDIES.find((s) => s.slug === "agile-erp-implementation-transforming-air-force-common-services"),
].filter((s): s is CaseStudy => Boolean(s));

const NAV_ITEM_LIGHT =
  "text-ms-ink hover:text-ms-navy hover:bg-tech-accent/12 active:bg-tech-accent/22 focus-visible:ring-ms-navy";
const NAV_ITEM_TRANSPARENT =
  "text-white/90 hover:text-white hover:bg-white/10 active:bg-white/20 focus-visible:ring-white";

const PRACTICE_AREAS: NavLink[] = [
  {
    name: "AI & Data",
    href: "/practice-areas/ai",
    description: "Responsible AI adoption and analytics platforms",
  },
  {
    name: "Enterprise Applications",
    href: "/practice-areas/enterprise-apps",
    description: "ERP, CRM, and enterprise system modernization",
  },
  {
    name: "Cloud & Infrastructure",
    href: "/practice-areas/cloud",
    description: "Cloud strategy, migration, and platform engineering",
  },
  {
    name: "Cyber & Identity Security",
    href: "/practice-areas/cyber",
    description: "Zero-trust architecture and continuous compliance",
  },
  {
    name: "Data Analytics",
    href: "/practice-areas/data-analytics",
    description: "Data fabric, integration, and business intelligence",
  },
  {
    name: "Agile Project Management",
    href: "/practice-areas/agile-pm",
    description: "Embedded PMO and complex program delivery",
  },
];

const SERVICE_LINES: NavLink[] = [
  {
    name: "Salesforce",
    href: "/service-lines/salesforce",
    description: "CRM implementation and optimization",
  },
  {
    name: "AWS",
    href: "/service-lines/aws",
    description: "Cloud infrastructure and DevSecOps",
  },
  {
    name: "Microsoft",
    href: "/service-lines/microsoft",
    description: "M365, Azure, Power Platform, and more",
  },
  {
    name: "Oracle",
    href: "/service-lines/oracle",
    description: "Database, ERP, and cloud services",
  },
  {
    name: "SAP",
    href: "/service-lines/sap",
    description: "ERP modernization and integration",
  },
  {
    name: "Atlassian",
    href: "/service-lines/atlassian",
    description: "Jira, Confluence, and DevOps tooling",
  },
  {
    name: "Snowflake/Databricks",
    href: "/service-lines/snowflake",
    description: "Data cloud and analytics infrastructure",
  },
];

const INSIGHTS_LINKS = [
  {
    name: "Blog",
    href: "/blog",
    description: "Thought leadership from our consultants",
    Icon: BookOpen,
  },
  {
    name: "Case Studies",
    href: "/case-studies",
    description: "Client outcomes and project deep-dives",
    Icon: FileText,
  },
  {
    name: "Podcast",
    href: "/podcast",
    description: "Conversations on enterprise transformation",
    Icon: Mic,
  },
];

const NAV_LINKS: NavLink[] = [
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export interface HeaderProps {
  defaultOpenMegaMenu?: boolean;
  alwaysSolid?: boolean;
  startTransparent?: boolean;
}

export function Header({
  defaultOpenMegaMenu = false,
  alwaysSolid = false,
  startTransparent = false,
}: HeaderProps) {
  // Non-transparent pages should always show the solid header from the first render.
  // Initialising scrolled to true when startTransparent is false prevents the
  // brief flash of navy/white-text that occurred before the scroll effect fired.
  const [scrolled, setScrolled] = React.useState(!startTransparent || alwaysSolid);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [megaOpen, setMegaOpen] = React.useState(defaultOpenMegaMenu);
  const [insightsOpen, setInsightsOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileSectionsOpen, setMobileSectionsOpen] = React.useState({
    practice: false,
    services: false,
    insights: false,
  });

  const closeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const insightsTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const insightsTriggerRef = React.useRef<HTMLButtonElement>(null);
  const insightsMenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Non-transparent pages always stay solid; no scroll listener needed.
    if (alwaysSolid || !startTransparent) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysSolid, startTransparent]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (megaOpen) {
          setMegaOpen(false);
          triggerRef.current?.focus();
        }
        if (insightsOpen) {
          setInsightsOpen(false);
          insightsTriggerRef.current?.focus();
        }
        if (mobileOpen) setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [megaOpen, insightsOpen, mobileOpen]);

  React.useEffect(() => {
    if (!megaOpen && !insightsOpen) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !menuRef.current?.contains(target) &&
        !triggerRef.current?.contains(target) &&
        !insightsMenuRef.current?.contains(target) &&
        !insightsTriggerRef.current?.contains(target)
      ) {
        setMegaOpen(false);
        setInsightsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [megaOpen, insightsOpen]);

  const openMega = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setInsightsOpen(false);
    setMegaOpen(true);
  };
  const closeMegaSoon = () => {
    closeTimerRef.current = setTimeout(() => setMegaOpen(false), 300);
  };

  const openInsights = () => {
    if (insightsTimerRef.current) clearTimeout(insightsTimerRef.current);
    setMegaOpen(false);
    setInsightsOpen(true);
  };
  const closeInsightsSoon = () => {
    insightsTimerRef.current = setTimeout(() => setInsightsOpen(false), 300);
  };

  const closeAll = () => {
    setMegaOpen(false);
    setInsightsOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSectionsOpen({ practice: false, services: false, insights: false });
  };

  const toggleMobileSection = (section: keyof typeof mobileSectionsOpen) => {
    setMobileSectionsOpen((current) => ({
      ...current,
      [section]: !current[section],
    }));
  };

  // Header background is controlled by scroll/mobile/alwaysSolid only.
  // megaOpen/insightsOpen are NOT included, the dropdown panels have their own bg-ms-paper
  // applied directly, so the header doesn't need to change color when a menu opens.
  const isSolid = scrolled || mobileOpen || alwaysSolid;
  const isLight = isSolid || !startTransparent;

  return (
    <header
      className={cn(
        "top-0 z-50 transition-[background-color,border-color,box-shadow,color] duration-200",
        startTransparent && !isSolid ? "fixed left-0 right-0" : "sticky",
        // isLight=true → always paper (non-transparent pages, or scrolled home)
        // isLight=false → always transparent (home page at top only)
        isLight
          ? mobileOpen
            ? "border-b border-[rgba(0,31,101,0.10)] bg-ms-paper"
            : "border-b border-[rgba(0,31,101,0.10)] bg-ms-paper/95 backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <div className="ms-container h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "flex items-center focus-visible:outline-none focus-visible:ring-2 rounded-sm",
            isLight ? "focus-visible:ring-ms-navy" : "focus-visible:ring-white",
          )}
          aria-label="M&S Consulting, Home"
        >
          <Image
            src={isLight ? "/media/MS-CFL_Template-400x60.png" : "/media/logos/logo-h-white.png"}
            alt="M&S Consulting"
            width={400}
            height={60}
            style={{ height: "36px", width: "auto" }}
            className="transition-opacity duration-150"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {/* What We Do mega-menu trigger */}
          <button
            ref={triggerRef}
            type="button"
            aria-expanded={megaOpen}
            aria-haspopup="true"
            aria-controls="mega-menu-whatwedo"
            className={cn(
              "inline-flex items-center gap-1.5 px-3 h-10 rounded-md",
              "font-sans text-sm font-semibold",
              "focus-visible:outline-none focus-visible:ring-2",
              "transition-colors duration-200",
              isLight
                ? NAV_ITEM_LIGHT
                : NAV_ITEM_TRANSPARENT,
            )}
            onMouseEnter={openMega}
            onMouseLeave={closeMegaSoon}
            onFocus={openMega}
            onClick={() => {
              setInsightsOpen(false);
              setMegaOpen((v) => !v);
            }}
          >
            What We Do
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200 motion-reduce:transition-none",
                megaOpen && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>

          {/* Flat links: About, Careers */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={closeAll}
              className={cn(
                "px-3 h-10 inline-flex items-center rounded-md",
                "font-sans text-sm font-semibold",
                "focus-visible:outline-none focus-visible:ring-2",
                "transition-colors duration-200",
                isLight ? NAV_ITEM_LIGHT : NAV_ITEM_TRANSPARENT,
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* Insights dropdown trigger */}
          <div className="relative" onMouseLeave={closeInsightsSoon}>
            <button
              ref={insightsTriggerRef}
              type="button"
              aria-expanded={insightsOpen}
              aria-haspopup="true"
              aria-controls="insights-menu"
              className={cn(
                "inline-flex items-center gap-1.5 px-3 h-10 rounded-md",
                "font-sans text-sm font-semibold",
                "focus-visible:outline-none focus-visible:ring-2",
                "transition-colors duration-200",
                isLight ? NAV_ITEM_LIGHT : NAV_ITEM_TRANSPARENT,
              )}
              onMouseEnter={openInsights}
              onFocus={openInsights}
              onClick={() => {
                setMegaOpen(false);
                setInsightsOpen((v) => !v);
              }}
            >
              Insights
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200 motion-reduce:transition-none",
                  insightsOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>

            {insightsOpen && (
              <div
                ref={insightsMenuRef}
                id="insights-menu"
                role="region"
                aria-label="Insights menu"
                className="absolute right-0 top-full mt-1 w-72 bg-ms-paper border border-[rgba(0,31,101,0.12)] rounded-lg overflow-hidden"
                onMouseEnter={openInsights}
                onMouseLeave={closeInsightsSoon}
              >
                <ul className="py-2">
                  {INSIGHTS_LINKS.map(({ name, href, description, Icon }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setInsightsOpen(false)}
                        className="flex items-start gap-3 px-4 py-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-tech-accent/10 focus-visible:bg-tech-accent/10 focus-visible:outline-none group/item"
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#E8F4FE] transition-all duration-300 group-hover/item:bg-tech-accent/20 group-hover/item:scale-105">
                          <Icon className="h-4 w-4 text-ms-navy" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block font-sans text-sm font-semibold text-ms-ink group-hover/item:text-ms-navy transition-colors">
                            {name}
                          </span>
                          <span className="block font-sans text-xs text-charcoal-700 mt-0.5 leading-snug">
                            {description}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Contact, rightmost nav link */}
          <Link
            href="/contact"
            onMouseEnter={closeAll}
            className={cn(
              "px-3 h-10 inline-flex items-center rounded-md",
              "font-sans text-sm font-semibold",
              "focus-visible:outline-none focus-visible:ring-2",
              "transition-colors duration-200",
              isLight ? NAV_ITEM_LIGHT : NAV_ITEM_TRANSPARENT,
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-1" onMouseEnter={closeAll}>
          {/* Search icon */}
          <button
            type="button"
            aria-label="Open search"
            onClick={() => setSearchOpen(true)}
            className={cn(
              "p-2 rounded-md transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2",
              isLight ? NAV_ITEM_LIGHT : NAV_ITEM_TRANSPARENT,
            )}
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className={cn(
              "lg:hidden p-2 -mr-2 rounded-md",
              "focus-visible:outline-none focus-visible:ring-2",
              "transition-colors duration-200",
              isLight ? "text-ms-navy hover:bg-tech-accent/12 active:bg-tech-accent/22 focus-visible:ring-ms-navy" : NAV_ITEM_TRANSPARENT,
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* What We Do mega-menu */}
      {megaOpen && (
        <div
          ref={menuRef}
          id="mega-menu-whatwedo"
          role="region"
          aria-label="What We Do menu"
          className="absolute left-0 right-0 top-full bg-ms-paper border-b border-[rgba(0,31,101,0.10)]"
          onMouseEnter={openMega}
          onMouseLeave={closeMegaSoon}
        >
          <div className="ms-container py-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr_320px] gap-10 lg:gap-14">
            <div>
              <p className="section-marker text-ms-navy mb-6">
                01<span aria-hidden="true" className="mx-2 opacity-50">/</span>PRACTICE AREAS
              </p>
              <ul className="space-y-0.5">
                {PRACTICE_AREAS.map((p) => (
                  <li key={p.href}>
                    <MegaMenuItem
                      href={p.href}
                      name={p.name}
                      description={p.description}
                      onClick={() => setMegaOpen(false)}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-marker text-ms-navy mb-6">
                02<span aria-hidden="true" className="mx-2 opacity-50">/</span>SERVICE LINES
              </p>
              <ul className="space-y-0.5">
                {SERVICE_LINES.map((s) => (
                  <li key={s.href}>
                    <MegaMenuItem
                      href={s.href}
                      name={s.name}
                      description={s.description}
                      onClick={() => setMegaOpen(false)}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <aside className="flex flex-col gap-4 lg:border-l lg:border-[rgba(0,31,101,0.08)] lg:pl-8">
              <div className="flex items-end justify-between gap-3">
                <p className="section-marker text-ms-navy">
                  03<span aria-hidden="true" className="mx-2 opacity-50">/</span>RECENT WORK
                </p>
                <Link
                  href="/case-studies"
                  onClick={() => setMegaOpen(false)}
                  className="font-sans text-xs font-semibold text-tech-accent underline-offset-4 transition-colors hover:text-ms-navy hover:underline focus-visible:underline"
                >
                  View all
                </Link>
              </div>

              <div className="space-y-3">
                {FEATURED_WORK.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/case-studies/${study.slug}`}
                    onClick={() => setMegaOpen(false)}
                    className="group/card block overflow-hidden rounded-xl border border-[rgba(0,31,101,0.10)] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-tech-accent/35 hover:shadow-[0_16px_40px_rgba(92,167,243,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
                  >
                    <div className="relative h-[108px] overflow-hidden bg-[#E8F4FE]">
                      <Image
                        src={study.coverImage}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
                        sizes="320px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,31,101,0.55)] via-transparent to-transparent" />
                      <span className="absolute bottom-2.5 left-3 inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-ms-navy shadow-sm">
                        {study.metric.value}
                      </span>
                    </div>
                    <div className="p-4">
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal-700">
                        {study.industry}
                      </p>
                      <p className="mt-1.5 font-sans text-sm font-semibold leading-snug text-ms-ink transition-colors duration-300 group-hover/card:text-ms-navy">
                        {study.title}
                      </p>
                      <p className="mt-2 inline-flex items-center gap-1 font-sans text-xs font-semibold text-tech-accent opacity-0 transition-all duration-300 group-hover/card:opacity-100">
                        Read case study
                        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/card:translate-x-0.5" aria-hidden="true" />
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden absolute left-0 right-0 top-full bg-ms-paper border-b border-[rgba(0,31,101,0.10)] max-h-[80vh] overflow-y-auto"
        >
          <nav aria-label="Mobile primary" className="ms-container py-5">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-3 py-3 font-sans text-base font-semibold text-ms-ink transition-colors duration-200 hover:bg-tech-accent/12 hover:text-ms-navy active:bg-tech-accent/22 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="block rounded-lg px-3 py-3 font-sans text-base font-semibold text-ms-ink transition-colors duration-200 hover:bg-tech-accent/12 hover:text-ms-navy active:bg-tech-accent/22 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mt-4 space-y-2 border-t border-[rgba(0,31,101,0.10)] pt-4">
              <MobileNavSection
                title="Practice Areas"
                count={PRACTICE_AREAS.length}
                isOpen={mobileSectionsOpen.practice}
                onToggle={() => toggleMobileSection("practice")}
                links={PRACTICE_AREAS}
                onNavigate={closeMobileMenu}
              />
              <MobileNavSection
                title="Service Lines"
                count={SERVICE_LINES.length}
                isOpen={mobileSectionsOpen.services}
                onToggle={() => toggleMobileSection("services")}
                links={SERVICE_LINES}
                onNavigate={closeMobileMenu}
              />
              <MobileNavSection
                title="Insights"
                count={INSIGHTS_LINKS.length}
                isOpen={mobileSectionsOpen.insights}
                onToggle={() => toggleMobileSection("insights")}
                links={INSIGHTS_LINKS}
                onNavigate={closeMobileMenu}
              />
            </div>
          </nav>
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

interface MegaMenuItemProps {
  href: string;
  name: string;
  description?: string;
  onClick: () => void;
}

function MegaMenuItem({ href, name, description, onClick }: MegaMenuItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group/item relative flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-tech-accent/10 hover:pl-4 focus-visible:bg-tech-accent/10 focus-visible:outline-none"
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full bg-tech-accent transition-[height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/item:h-[calc(100%-14px)]"
      />
      <span className="min-w-0 flex-1">
        <p className="font-sans text-sm font-semibold text-ms-ink transition-colors duration-300 group-hover/item:text-ms-navy">
          {name}
        </p>
        {description ? (
          <p className="mt-0.5 font-sans text-xs leading-snug text-charcoal-700 transition-colors duration-300 group-hover/item:text-ms-ink/85">
            {description}
          </p>
        ) : null}
      </span>
      <ArrowRight
        className="h-3.5 w-3.5 shrink-0 text-tech-accent opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
        aria-hidden="true"
      />
    </Link>
  );
}

interface MobileNavSectionProps {
  title: string;
  count: number;
  isOpen: boolean;
  onToggle: () => void;
  links: NavLink[];
  onNavigate: () => void;
}

function MobileNavSection({
  title,
  count,
  isOpen,
  onToggle,
  links,
  onNavigate,
}: MobileNavSectionProps) {
  const panelId = `mobile-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="rounded-xl border border-[rgba(0,31,101,0.10)] bg-[#F8FAFC]">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3.5 text-left font-sans text-sm font-bold text-ms-navy transition-colors duration-200 hover:bg-tech-accent/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
      >
        <span>{title}</span>
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B]">
          {count}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
            aria-hidden="true"
          />
        </span>
      </button>
      {isOpen && (
        <ul id={panelId} className="grid gap-1 border-t border-[rgba(0,31,101,0.08)] px-2 py-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-lg px-3 py-2.5 font-sans text-sm font-semibold text-ms-ink transition-colors duration-200 hover:bg-tech-accent/10 hover:text-ms-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
                onClick={onNavigate}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
