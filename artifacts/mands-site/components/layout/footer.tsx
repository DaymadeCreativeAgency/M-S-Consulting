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
  { name: "What We Do", href: "/service-lines" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/blog" },
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
    <footer className="bg-[#061642]" aria-label="Site footer">
      <div className="ms-container py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_2fr] lg:gap-16">
          <div>
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
          <p className="font-sans text-sm leading-relaxed text-white/70 mb-6 max-w-sm">
            Enterprise digital transformation consulting from Morgantown, WV.
            Done. Better. Together.
          </p>
          <div className="space-y-2 font-sans text-sm text-white/72">
            <p>135 Corporate Drive, Morgantown, WV 26501</p>
            <p>
              <a href="tel:+13042924170" className="hover:text-white transition-colors">
                304.292.4170
              </a>
            </p>
            <p>
              <Link href="/contact" className="hover:text-white transition-colors">
                Start a conversation
              </Link>
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <Image
              src="/media/footer-designations-1-tinified.png"
              alt="M&S Consulting certifications and partner designations"
              width={1000}
              height={124}
              className="h-auto max-w-full"
            />
            <Image
              src="/media/footer-designations-2-tinified.png"
              alt="M&S Consulting technology partner designations"
              width={1000}
              height={124}
              className="h-auto max-w-full"
            />
          </div>
        </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <FooterNavColumn label="Practice Areas" links={PRACTICE_AREAS} />
            <FooterNavColumn label="Service Lines" links={SERVICE_LINES} />
            <FooterNavColumn label="Company" links={COMPANY} />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="ms-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/50">
            &copy; {year} M&amp;S Consulting, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-sans text-xs text-white/50 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-xs text-white/50 hover:text-white transition-colors duration-200"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
