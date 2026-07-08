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
  { name: "LinkedIn", href: "https://www.linkedin.com/company/m%26s-consulting/" },
  { name: "Instagram", href: "https://www.instagram.com/mandsconsulting/" },
  { name: "Facebook", href: "https://www.facebook.com/mandsconsulting" },
  { name: "YouTube", href: "https://www.youtube.com/@mandsconsulting" },
];

interface FooterNavColumnProps {
  label: string;
  links: { name: string; href: string }[];
}

function FooterNavColumn({ label, links }: FooterNavColumnProps) {
  return (
    <div>
      <p className="mb-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#7184C7]">
        {label}
      </p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-sans text-[0.92rem] leading-tight text-white transition-colors duration-200 hover:text-[#BFDFFF]"
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
        className="pointer-events-none absolute inset-x-0 bottom-[-0.2em] text-center font-serif leading-none text-white/[0.04]"
        style={{
          fontSize: "clamp(5.5rem, 13vw, 10.5rem)",
          letterSpacing: "-0.075em",
          whiteSpace: "nowrap",
        }}
      >
        Done.Better.<span className="italic">Together.</span>
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
        <div className="mb-11 grid grid-cols-1 gap-7 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start">
          <Link
            href="/"
            aria-label="M&S Consulting, Home"
            className="inline-flex w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Image
              src="/media/MS_C-Logo-Web-H-1020x150-White.svg"
              alt="M&S Consulting"
              width={1020}
              height={150}
              className="h-9 w-auto sm:h-10 lg:h-11"
              priority={false}
            />
          </Link>
          <p className="max-w-[760px] font-serif text-[clamp(1.45rem,2.25vw,2.15rem)] font-medium leading-tight text-[#C9E5FF]">
            Delivering Digital Transformation for {new Date().getFullYear() - 2002} Years
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-9 gap-y-9 md:grid-cols-5 lg:gap-x-14">
          <FooterNavColumn label="Menu" links={COMPANY} />
          <FooterNavColumn label="Practice Areas" links={PRACTICE_AREAS} />
          <FooterNavColumn label="Service Lines" links={SERVICE_LINES} />

          <div>
            <p className="mb-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#7184C7]">
              Locations
            </p>
            <ul className="space-y-2.5">
              {LOCATIONS.map((location) => (
                <li key={location.name} className="font-sans text-[0.92rem] leading-tight text-white">
                  {location.name}{" "}
                  <span className="italic text-white/85">({location.note})</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#7184C7]">
              Social
            </p>
            <ul className="space-y-2.5">
              {SOCIAL.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-[0.92rem] leading-tight text-white transition-colors duration-200 hover:text-[#BFDFFF]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[0.82rem] font-medium text-white">
            Copyright M&amp;S Consulting {year}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="font-sans text-[0.78rem] text-white transition-colors duration-200 hover:text-[#BFDFFF]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-[0.78rem] text-white transition-colors duration-200 hover:text-[#BFDFFF]"
            >
              Terms of Use
            </Link>
            <a
              href="https://daymadeagency.com"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[0.82rem] font-medium text-[#5CA7F3] transition-colors duration-200 hover:text-[#BFDFFF]"
            >
              Created by Daymade Creative Agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
