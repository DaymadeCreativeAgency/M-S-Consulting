import Link from "next/link";
import Image from "next/image";

const PRACTICE_AREAS = [
  { name: "AI & Emerging Technology", href: "/practice-areas/ai" },
  { name: "Agile Project Management", href: "/practice-areas/agile-pm" },
  { name: "Cloud & Infrastructure", href: "/practice-areas/cloud" },
  { name: "Cyber & Identity Security", href: "/practice-areas/cyber" },
  { name: "Data Analytics & Integration", href: "/practice-areas/data-analytics" },
  { name: "Enterprise Applications", href: "/practice-areas/enterprise-apps" },
  { name: "Staff Augmentation", href: "/staff-augmentation" },
];

const SERVICE_LINES = [
  { name: "Atlassian", href: "/service-lines/atlassian" },
  { name: "AWS", href: "/service-lines/aws" },
  { name: "Microsoft", href: "/service-lines/microsoft" },
  { name: "Oracle", href: "/service-lines/oracle" },
  { name: "Salesforce", href: "/service-lines/salesforce" },
  { name: "SAP", href: "/service-lines/sap" },
  { name: "Snowflake", href: "/service-lines/snowflake" },
];

const COMPANY = [
  { name: "What We Do", href: "/service-lines" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const LOCATIONS = [
  { name: "Morgantown, WV", note: "Headquarters" },
  { name: "Brasil", note: "Nearshore" },
  { name: "India", note: "Offshore" },
];

const SOCIAL = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/mandsconsulting" },
  { name: "Instagram", href: "https://www.instagram.com/mandsconsulting/" },
  { name: "Facebook", href: "https://www.facebook.com/MandSConsulting" },
  { name: "YouTube", href: "https://www.youtube.com/@mandsconsulting" },
];

interface FooterNavColumnProps {
  label: string;
  links: { name: string; href: string }[];
}

function FooterNavColumn({ label, links }: FooterNavColumnProps) {
  return (
    <div>
      <p className="mb-5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#6B7DB5]">
        {label}
      </p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-sans text-[0.82rem] leading-tight text-white/86 transition-colors duration-200 hover:text-[#A9D4FF]"
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
    <footer className="relative overflow-hidden bg-[#101510]" aria-label="Site footer">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-0.22em] font-serif italic leading-none text-white/[0.055]"
        style={{
          fontSize: "clamp(4.8rem, 14vw, 12rem)",
          letterSpacing: "-0.08em",
          whiteSpace: "nowrap",
        }}
      >
        Done.Better.Together.
      </div>

      <div className="ms-container relative py-12 lg:py-14">
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.45fr] lg:items-start">
          <Link
            href="/"
            aria-label="M&S Consulting - Home"
            className="inline-flex w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Image
              src="/media/MS-Logo-Web-H-500x164-White-White.svg"
              alt="M&S Consulting"
              width={500}
              height={164}
              className="h-10 w-auto"
              priority={false}
            />
          </Link>
          <p className="font-serif text-[clamp(1.35rem,2.4vw,2rem)] font-medium leading-tight text-[#BFDFFF]">
            Delivering Digital Transformation for Over 20 Years
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-5">
          <FooterNavColumn label="Menu" links={COMPANY} />
          <FooterNavColumn label="Practice Areas" links={PRACTICE_AREAS} />
          <FooterNavColumn label="Service Lines" links={SERVICE_LINES} />

          <div>
            <p className="mb-5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#6B7DB5]">
              Locations
            </p>
            <ul className="space-y-2.5">
              {LOCATIONS.map((location) => (
                <li key={location.name} className="font-sans text-[0.82rem] leading-tight text-white/86">
                  {location.name}{" "}
                  <span className="italic text-white/70">({location.note})</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#6B7DB5]">
              Social
            </p>
            <ul className="space-y-2.5">
              {SOCIAL.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-[0.82rem] leading-tight text-white/86 transition-colors duration-200 hover:text-[#A9D4FF]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[0.72rem] text-white/38">
            &copy; {year} M&amp;S Consulting, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-sans text-[0.72rem] text-white/38 transition-colors duration-200 hover:text-white/75"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-[0.72rem] text-white/38 transition-colors duration-200 hover:text-white/75"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
