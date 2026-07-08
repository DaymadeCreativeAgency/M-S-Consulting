import type { Metadata } from "next";
import Link from "next/link";
import { Accessibility, ArrowUpRight, Cookie, FileText, Globe2, LockKeyhole, Mail, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Legal | M&S Consulting" },
  description: "Legal information for the M&S Consulting website, including privacy, website use, intellectual property, accessibility, and contact details.",
  alternates: { canonical: "/legal" },
};

const sections = [
  {
    id: "privacy",
    title: "Privacy & information",
    icon: LockKeyhole,
    content: (
      <>
        <p>When you contact M&amp;S Consulting, apply for a role, subscribe to communications, or otherwise interact with this website, you may provide information such as your name, email address, phone number, company, job title, résumé, and the details of your inquiry.</p>
        <p>We and the providers that support this website may also receive basic technical and usage information, including IP address, browser and device type, referring page, pages viewed, and approximate location. We use this information to respond to you, operate and improve the website, understand engagement, protect our systems, and meet legal obligations.</p>
        <p>We do not sell personal information. We may share information with service providers acting on our behalf, when required by law, or as part of a business transaction. We retain information only as long as reasonably necessary and apply reasonable administrative, technical, and physical safeguards.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & analytics",
    icon: Cookie,
    content: (
      <>
        <p>This website may use cookies and similar technologies that are necessary for site operation, help remember preferences, and show us how the website is used. Some analytics or embedded content may be provided by third parties.</p>
        <p>You can limit or remove cookies through your browser settings. Blocking certain cookies may affect how some parts of the website work.</p>
      </>
    ),
  },
  {
    id: "website-use",
    title: "Website use",
    icon: Globe2,
    content: (
      <>
        <p>You may use this website for lawful, informational purposes. Do not misuse the website, attempt unauthorized access, interfere with its operation, introduce malicious code, or use its content in a way that violates applicable law or the rights of M&amp;S Consulting or others.</p>
        <p>Website content is general information and does not create a consulting, employment, partnership, or other professional relationship. Services we provide are governed by the applicable written client agreement.</p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    icon: FileText,
    content: (
      <>
        <p>Unless otherwise noted, this website and its content—including text, graphics, logos, case studies, downloads, and design—are owned by or licensed to M&amp;S Consulting and protected by applicable intellectual property laws.</p>
        <p>You may view and share links to our public pages for personal or internal business use. Reproduction, modification, republication, or commercial use of website content requires prior written permission. Third-party names and marks belong to their respective owners.</p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers & liability",
    icon: Scale,
    content: (
      <>
        <p>We work to keep this website useful and accurate, but it is provided on an “as is” and “as available” basis. To the extent permitted by law, M&amp;S Consulting disclaims warranties regarding its availability, completeness, accuracy, and fitness for a particular purpose.</p>
        <p>To the fullest extent permitted by law, M&amp;S Consulting will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of, or inability to use, this website. Nothing here limits liability that cannot lawfully be limited.</p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Third-party services & links",
    icon: ArrowUpRight,
    content: <p>Links, integrations, and embedded content from third parties are offered for convenience. M&amp;S Consulting does not control and is not responsible for third-party websites, services, content, security, or privacy practices. Review the terms and notices provided by those third parties before using their services.</p>,
  },
  {
    id: "accessibility",
    title: "Accessibility",
    icon: Accessibility,
    content: <p>M&amp;S Consulting is committed to making our digital experiences useful and accessible. If you encounter an accessibility barrier or need website information in another format, please contact us. We welcome feedback and will make reasonable efforts to provide assistance.</p>,
  },
];

export default function LegalPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0A0E1A] text-white">
        <div aria-hidden="true" className="absolute -right-24 -top-28 h-[440px] w-[440px] rounded-full border border-[#5CA7F3]/20" />
        <div aria-hidden="true" className="absolute -right-6 top-4 h-[260px] w-[260px] rounded-full bg-[#5CA7F3]/10 blur-3xl" />
        <div className="ms-container relative py-20 md:py-28">
          <p className="eyebrow mb-5 text-[#8CC8FF]">The fine print, made clear</p>
          <h1 className="max-w-3xl font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.04em]">Legal</h1>
          <p className="mt-7 max-w-2xl font-sans text-lg leading-relaxed text-white/70 md:text-xl">The essentials about using our website, how we handle information, and the standards we hold ourselves to.</p>
          <p className="mt-8 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Last updated July 8, 2026</p>
        </div>
      </section>

      <section className="bg-ms-paper">
        <div className="ms-container py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ms-navy">On this page</p>
              <nav aria-label="Legal sections">
                <ul className="space-y-1 border-l border-ms-ink/15">
                  {sections.map(({ id, title }) => (
                    <li key={id}><a href={`#${id}`} className="block border-l-2 border-transparent py-2 pl-4 font-sans text-sm text-charcoal-700 transition-colors hover:border-ms-navy hover:text-ms-navy">{title}</a></li>
                  ))}
                  <li><a href="#contact" className="block border-l-2 border-transparent py-2 pl-4 font-sans text-sm text-charcoal-700 transition-colors hover:border-ms-navy hover:text-ms-navy">Questions &amp; requests</a></li>
                </ul>
              </nav>
            </aside>

            <div className="max-w-3xl">
              <p className="mb-14 border-b border-ms-ink/15 pb-10 font-serif text-2xl leading-snug text-ms-ink md:text-3xl">This page applies to mandsconsulting.com and M&amp;S Consulting&apos;s public digital properties. It does not replace a client agreement, employment agreement, or product-specific notice.</p>
              {sections.map(({ id, title, icon: Icon, content }, index) => (
                <article id={id} key={id} className="scroll-mt-28 border-b border-ms-ink/15 py-10 first:pt-0">
                  <div className="grid gap-5 sm:grid-cols-[52px_minmax(0,1fr)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DDEEFF] text-ms-navy"><Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} /></div>
                    <div>
                      <p className="mb-2 font-sans text-xs font-semibold tracking-[0.16em] text-ms-navy">{String(index + 1).padStart(2, "0")}</p>
                      <h2 className="font-serif text-3xl leading-tight text-ms-ink md:text-4xl">{title}</h2>
                      <div className="mt-5 space-y-4 font-sans text-[15px] leading-7 text-charcoal-700 md:text-base">{content}</div>
                    </div>
                  </div>
                </article>
              ))}

              <article id="contact" className="mt-12 scroll-mt-28 rounded-2xl bg-[#101510] p-7 text-white md:p-10">
                <Mail aria-hidden="true" className="h-6 w-6 text-[#8CC8FF]" />
                <h2 className="mt-5 font-serif text-3xl md:text-4xl">Questions &amp; requests</h2>
                <p className="mt-4 max-w-xl font-sans leading-7 text-white/70">To ask a question, request access to or correction of personal information, or report an accessibility concern, contact our team. We may need to verify your identity before completing certain requests.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="mailto:legal@mandsconsulting.com" className="inline-flex items-center gap-2 rounded-full bg-[#5CA7F3] px-5 py-3 font-sans text-sm font-semibold text-[#0A0E1A] transition-colors hover:bg-[#8CC8FF]">legal@mandsconsulting.com <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
                  <Link href="/contact" className="inline-flex items-center rounded-full border border-white/25 px-5 py-3 font-sans text-sm font-semibold text-white transition-colors hover:border-white/60">Contact M&amp;S</Link>
                </div>
                <address className="mt-7 font-sans text-sm not-italic text-white/50">M&amp;S Consulting, LLC · Morgantown, West Virginia</address>
              </article>
              <p className="mt-8 font-sans text-xs leading-5 text-charcoal-700">We may update this page as our website, practices, or legal requirements change. The date above reflects the latest revision.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
