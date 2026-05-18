"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavLink {
  name: string;
  href: string;
  description?: string;
}

const PRACTICE_AREAS: NavLink[] = [
  {
    name: "AI & Data",
    href: "/practice-areas/ai",
    description: "Responsible AI adoption and analytics platforms",
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
  {
    name: "Enterprise Applications",
    href: "/practice-areas/enterprise-apps",
    description: "ERP, CRM, and enterprise system modernization",
  },
];

const SERVICE_LINES: NavLink[] = [
  {
    name: "Microsoft",
    href: "/service-lines/microsoft",
    description: "M365, Azure, Power Platform, and more",
  },
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
    name: "SAP",
    href: "/service-lines/sap",
    description: "ERP modernization and integration",
  },
  {
    name: "Oracle",
    href: "/service-lines/oracle",
    description: "Database, ERP, and cloud services",
  },
  {
    name: "Snowflake",
    href: "/service-lines/snowflake",
    description: "Data cloud and analytics infrastructure",
  },
  {
    name: "Atlassian",
    href: "/service-lines/atlassian",
    description: "Jira, Confluence, and DevOps tooling",
  },
];

const NAV_LINKS: NavLink[] = [
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
  { name: "Careers", href: "/careers" },
];

export interface HeaderProps {
  /** When true, the "What We Do" mega-menu starts open. Used by docs/showcase. */
  defaultOpenMegaMenu?: boolean;
  /** When true, header background is always solid (skip navy-on-load state). */
  alwaysSolid?: boolean;
}

export function Header({
  defaultOpenMegaMenu = false,
  alwaysSolid = false,
}: HeaderProps) {
  const [scrolled, setScrolled] = React.useState(alwaysSolid);
  const [megaOpen, setMegaOpen] = React.useState(defaultOpenMegaMenu);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (alwaysSolid) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysSolid]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (megaOpen) {
          setMegaOpen(false);
          triggerRef.current?.focus();
        }
        if (mobileOpen) {
          setMobileOpen(false);
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [megaOpen, mobileOpen]);

  // Close on outside click
  React.useEffect(() => {
    if (!megaOpen) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !menuRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [megaOpen]);

  const openMega = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setMegaOpen(true);
  };
  const closeMegaSoon = () => {
    closeTimerRef.current = setTimeout(() => setMegaOpen(false), 60);
  };

  const isSolid = scrolled || megaOpen || mobileOpen || alwaysSolid;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-200",
        isSolid
          ? "bg-ms-paper/95 backdrop-blur-sm border-b border-[rgba(0,31,101,0.10)]"
          : "bg-ms-navy",
      )}
    >
      <div className="ms-container h-20 flex items-center justify-between gap-6">
        {/* Logo — white on navy when transparent, blue on paper when scrolled */}
        <Link
          href="/"
          className={cn(
            "flex items-center focus-visible:outline-none focus-visible:ring-2 rounded-sm",
            isSolid ? "focus-visible:ring-ms-navy" : "focus-visible:ring-white",
          )}
          aria-label="M&S Consulting — Home"
        >
          <Image
            src={isSolid ? "/media/logos/logo-h-blue.png" : "/media/logos/logo-h-white.png"}
            alt="M&S Consulting"
            width={1020}
            height={150}
            className="h-9 w-auto transition-opacity duration-150"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-1"
          onMouseLeave={closeMegaSoon}
        >
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
              "disabled:opacity-50 disabled:pointer-events-none",
              "transition-colors duration-200",
              isSolid
                ? "text-ms-ink hover:text-ms-navy hover:bg-ms-cream/70 active:bg-[#E5DFC8] active:text-ms-navy focus-visible:ring-ms-navy"
                : "text-white/90 hover:text-white hover:bg-white/10 active:bg-white/20 focus-visible:ring-white",
            )}
            onMouseEnter={openMega}
            onFocus={openMega}
            onClick={() => setMegaOpen((v) => !v)}
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 h-10 inline-flex items-center rounded-md",
                "font-sans text-sm font-semibold",
                "focus-visible:outline-none focus-visible:ring-2",
                "transition-colors duration-200",
                isSolid
                  ? "text-ms-ink hover:text-ms-navy hover:bg-ms-cream/70 active:bg-[#E5DFC8] active:text-ms-navy focus-visible:ring-ms-navy"
                  : "text-white/90 hover:text-white hover:bg-white/10 active:bg-white/20 focus-visible:ring-white",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            {isSolid ? (
              <Button asChild variant="primary" size="md">
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            ) : (
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center px-5 h-10 rounded-md",
                  "font-sans text-sm font-semibold",
                  "border border-white/50 text-white",
                  "hover:bg-white hover:text-ms-navy hover:border-white",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                  "transition-colors duration-200",
                )}
              >
                Schedule a Call
              </Link>
            )}
          </div>
          <button
            type="button"
            className={cn(
              "lg:hidden p-2 -mr-2 rounded-md",
              "focus-visible:outline-none focus-visible:ring-2",
              "transition-colors duration-200",
              isSolid
                ? "text-ms-navy hover:bg-ms-cream/70 active:bg-[#E5DFC8] focus-visible:ring-ms-navy"
                : "text-white hover:bg-white/10 active:bg-white/20 focus-visible:ring-white",
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

      {/* Mega-menu */}
      {megaOpen && (
        <div
          ref={menuRef}
          id="mega-menu-whatwedo"
          role="region"
          aria-label="What We Do menu"
          className="absolute left-0 right-0 top-full bg-ms-paper border-b border-[rgba(0,31,101,0.10)] shadow-card"
          onMouseEnter={openMega}
          onMouseLeave={closeMegaSoon}
        >
          <div className="ms-container py-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr_280px] gap-10 lg:gap-14">
            <div>
              <p className="section-marker text-ms-navy mb-6">
                01<span aria-hidden="true" className="mx-2 opacity-50">/</span>PRACTICE AREAS
              </p>
              <ul className="space-y-0.5">
                {PRACTICE_AREAS.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="block rounded-md px-3 py-2.5 hover:bg-ms-cream/60 focus-visible:bg-ms-cream/60 focus-visible:outline-none transition-colors duration-200 group/item"
                    >
                      <p className="font-sans text-sm font-semibold text-ms-ink group-hover/item:text-ms-navy">
                        {p.name}
                      </p>
                      {p.description && (
                        <p className="font-sans text-xs text-charcoal-700 mt-0.5 leading-snug">
                          {p.description}
                        </p>
                      )}
                    </Link>
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
                    <Link
                      href={s.href}
                      className="block rounded-md px-3 py-2.5 hover:bg-ms-cream/60 focus-visible:bg-ms-cream/60 focus-visible:outline-none transition-colors duration-200 group/item"
                    >
                      <p className="font-sans text-sm font-semibold text-ms-ink group-hover/item:text-ms-navy">
                        {s.name}
                      </p>
                      {s.description && (
                        <p className="font-sans text-xs text-charcoal-700 mt-0.5 leading-snug">
                          {s.description}
                        </p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-lg p-6 bg-ms-cream border border-[rgba(0,31,101,0.08)]">
              <p className="eyebrow text-ms-navy mb-3">RECENT WORK</p>
              <p className="font-sans text-sm leading-relaxed text-ms-ink mb-4">
                Federal civilian agency: AI-assisted FOIA review pipeline. Forty
                percent faster turnaround, with full audit trail.
              </p>
              <Link
                href="/case-studies/foia-ai"
                className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-ms-navy underline-offset-4 hover:underline focus-visible:underline"
              >
                Read the case study <span aria-hidden="true">→</span>
              </Link>
            </aside>
          </div>
        </div>
      )}

      {/* Mobile drawer (simple, full-screen) */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden absolute left-0 right-0 top-full bg-ms-paper border-b border-[rgba(0,31,101,0.10)] max-h-[80vh] overflow-y-auto"
        >
          <nav aria-label="Mobile primary" className="ms-container py-6 space-y-6">
            <div>
              <p className="section-marker text-ms-navy mb-3">01 / PRACTICE AREAS</p>
              <ul className="space-y-1">
                {PRACTICE_AREAS.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="block py-2 px-2 -mx-2 rounded-md font-sans text-sm font-semibold text-ms-ink hover:text-ms-navy hover:bg-ms-cream/60 active:bg-[#E5DFC8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
                      onClick={() => setMobileOpen(false)}
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-marker text-ms-navy mb-3">02 / SERVICE LINES</p>
              <ul className="space-y-1">
                {SERVICE_LINES.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="block py-2 px-2 -mx-2 rounded-md font-sans text-sm font-semibold text-ms-ink hover:text-ms-navy hover:bg-ms-cream/60 active:bg-[#E5DFC8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="pt-4 border-t border-[rgba(0,31,101,0.10)] space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 px-2 -mx-2 rounded-md font-sans text-sm font-semibold text-ms-ink hover:text-ms-navy hover:bg-ms-cream/60 active:bg-[#E5DFC8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button asChild variant="primary" size="md" className="w-full">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
