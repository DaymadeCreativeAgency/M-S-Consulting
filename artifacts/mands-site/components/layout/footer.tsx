import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PRACTICE_AREAS = [
  { name: "AI & Data", href: "/practice-areas/ai" },
  { name: "Cloud & Infrastructure", href: "/practice-areas/cloud" },
  { name: "Cyber & Identity Security", href: "/practice-areas/cyber" },
  { name: "Data Analytics", href: "/practice-areas/data-analytics" },
  { name: "Agile Project Management", href: "/practice-areas/agile-pm" },
  { name: "Enterprise Applications", href: "/practice-areas/enterprise-apps" },
];

const SERVICE_LINES = [
  { name: "Microsoft", href: "/service-lines/microsoft" },
  { name: "Salesforce", href: "/service-lines/salesforce" },
  { name: "AWS", href: "/service-lines/aws" },
  { name: "SAP", href: "/service-lines/sap" },
  { name: "Oracle", href: "/service-lines/oracle" },
  { name: "Snowflake", href: "/service-lines/snowflake" },
  { name: "Atlassian", href: "/service-lines/atlassian" },
];

const COMPANY = [
  { name: "About", href: "/about" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

interface FooterNavColumnProps {
  label: string;
  links: { name: string; href: string }[];
}

function FooterNavColumn({ label, links }: FooterNavColumnProps) {
  return (
    <div>
      <p className="eyebrow text-dark-muted mb-4">{label}</p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-sans text-sm text-dark-ink/70 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ms-navy" aria-label="Site footer">
      <div className="ms-container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <div className="lg:col-span-1">
          <Link
            href="/"
            aria-label="M&S Consulting — Home"
            className="inline-block mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            <Image
              src="/media/logos/logo-h-white.png"
              alt="M&S Consulting"
              width={1020}
              height={150}
              className="h-8 w-auto"
            />
          </Link>
          <p className="font-sans text-sm text-dark-muted leading-relaxed mb-5">
            Enterprise digital transformation consulting. Morgantown, WV.
            Est.&nbsp;2002.
          </p>
          <p className="font-sans text-xs text-dark-muted/60 leading-relaxed">
            SBA HUBZone Certified&nbsp;&middot; WOSB&nbsp;&middot; SDB
          </p>
        </div>

        <FooterNavColumn label="Practice Areas" links={PRACTICE_AREAS} />
        <FooterNavColumn label="Service Lines" links={SERVICE_LINES} />
        <FooterNavColumn label="Company" links={COMPANY} />
      </div>

      <div className="border-t border-dark-border">
        <div className="ms-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-dark-muted">
            &copy; {year} M&amp;S Consulting, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-sans text-xs text-dark-muted hover:text-dark-ink transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-xs text-dark-muted hover:text-dark-ink transition-colors duration-200"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
