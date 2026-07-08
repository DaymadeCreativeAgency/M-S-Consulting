import type { Metadata } from "next";
import Link from "next/link";
import { LayoutGrid, Code2, Users, Megaphone, Layers, RefreshCw } from "lucide-react";
import { PracticeAreaAccordion } from "@/components/sections/practice-area-accordion";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { HeroHighlight, ServicePracticeHero } from "@/components/sections/service-practice-hero";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";

export const metadata: Metadata = {
  title: "Enterprise Applications Consulting",
  description:
    "Over 20 years helping businesses select, implement, and customize enterprise applications. ERP, CRM, marketing automation, custom development, and low-code platforms.",
  alternates: { canonical: "/practice-areas/enterprise-apps" },
};

const SERVICES = [
  {
    Icon: LayoutGrid,
    title: "ERP Systems",
    body: "Think about all the moving parts that play a role in making sure your business operates smoothly every single day. ERP systems help you manage all those moving parts seamlessly. We'll help you integrate a customized ERP solution that connects, manages, and even automates your core functions, accounting, HR, procurement, marketing, and more.",
  },
  {
    Icon: Code2,
    title: "Custom Development",
    body: "Our Appalachia Software Factory is a hub for building tailored software solutions that complement ERP and enterprise systems. From lightweight applications that streamline daily operations to robust, enterprise-grade platforms, our development teams create scalable, cost-effective solutions designed to integrate seamlessly with your existing technology stack.",
  },
  {
    Icon: Users,
    title: "CRM Systems",
    body: "CRM systems help you not just manage customer data, but derive key insights from it so you can build lasting, loyal relationships with your clientele. We'll seamlessly integrate a CRM system into your operations, ensuring every client interaction is tracked, organized, and optimized.",
  },
  {
    Icon: Megaphone,
    title: "Digital Marketing Tools",
    body: "Marketing is essential to your growth, but it's a complex and time-consuming endeavor. Our team is skilled in using digital marketing tools to optimize and even automate your marketing efforts, ensuring you reach your target audience, connect with the right leads, and boost your brand awareness.",
  },
  {
    Icon: Layers,
    title: "Low-Code Platforms",
    body: "Take advantage of development platforms that make coding user-friendly and intuitive. We'll help you choose a low-code platform that aligns with your goals, integrate it into your existing operations, train your team on how to use it, and guide you through crafting powerful custom applications.",
  },
  {
    Icon: RefreshCw,
    title: "Workflow Automation",
    body: "Work smarter instead of harder by automating repetitive tasks and eliminating busy work. By streamlining these processes, you can free up valuable time for more strategic activities. If you have a goal of scaling your business, let our experts optimize your productivity and reduce errors through automation.",
  },
];

const LEFT_TOOLS = [
  { name: "Salesforce", description: "CRM configuration, custom object development, Sales Cloud, Service Cloud, and Marketing Cloud implementations tailored to your sales and service operations." },
  { name: "SAP", description: "SAP ERP and S/4HANA implementations, migrations, and optimizations. We bring deep functional and technical expertise across finance, supply chain, and HR modules." },
  { name: "Oracle", description: "Oracle Cloud Applications and E-Business Suite implementations. Our team guides you through complex Oracle deployments with precision and minimal disruption." },
  { name: "Microsoft Dynamics", description: "Dynamics 365 configuration and integration across Business Central, Finance & Operations, and Customer Engagement, connected to your broader Microsoft ecosystem." },
];

const RIGHT_TOOLS = [
  { name: "ServiceNow", description: "ITSM, HRSD, and custom workflow automation on the ServiceNow platform. We design and deploy solutions that reduce manual work and surface the right information at the right time." },
  { name: "Power Platform", description: "Low-code applications, automated workflows, and data visualizations using Power Apps, Power Automate, and Power BI, extending your Microsoft investment without heavy development." },
  { name: "Custom Application Development", description: "Web, mobile, and desktop applications built to your specifications. We use modern frameworks and follow engineering best practices to deliver software that scales with your business." },
  { name: "API & Systems Integration", description: "Connect your enterprise systems so data flows where it's needed. We design and implement integration architectures that eliminate silos and reduce manual data entry." },
];

const PLATFORMS = ["Salesforce", "SAP", "Oracle", "Microsoft Dynamics", "ServiceNow", "Power Platform", "Workday", "NetSuite"];

export default function EnterpriseAppsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <ServicePracticeHero
        eyebrow="ENTERPRISE APPLICATIONS"
        imageSrc="/media/empty-office.jpg"
        imageFit="cover"
        imageObjectPosition="center"
        imageBackground="#0A0E1A"
      >
        Connect your systems so your people can <HeroHighlight>achieve more</HeroHighlight>.
      </ServicePracticeHero>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#EFEADB", borderBottom: "1px solid rgba(0,31,101,0.08)" }}>
        <div className="ms-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[rgba(0,31,101,0.12)]">
            {[
              { value: "20+", label: "Years enterprise delivery", note: "Since 2002" },
              { value: "50+", label: "Enterprise platforms implemented", note: "ERP · CRM · ITSM · Custom" },
              { value: "3", label: "Core disciplines", note: "Implementation · Development · Support" },
            ].map((s, i) => (
              <FadeIn key={s.value} delay={i * 0.08} className="text-center md:px-10">
                <div className="font-sans font-bold tabular-nums" style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)", color: "#001F65", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</div>
                <div className="font-sans font-semibold mt-2 mb-1" style={{ fontSize: "0.82rem", color: "#001F65", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
                <div className="marketing-note" style={{ color: "#4B5563" }}>{s.note}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro, image right ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                Enterprise applications are advanced digital tools that can transform the way your business operates. The key to unlocking their full potential lies in{" "}
                <strong>choosing the right ones and then modifying them to meet your unique needs.</strong>
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                At M&amp;S Consulting, we&rsquo;ve spent over 20 years helping businesses optimize their marketing, finance, HR, customer relationships, development cycles, resource management, and more through strategic use of enterprise software.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748" }}>
                Let our experienced consultants integrate applications that will{" "}
                <strong>resolve your most critical business challenges, streamline your systems, and elevate your efficiency.</strong>
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/curated-lifestyle-kGYWfeL8_64-unsplash-scaled.jpg" alt="M&S Consulting enterprise applications team"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Leading providers strip ──────────────────────────────────── */}
      <section style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container py-10">
          <FadeIn>
            <p className="eyebrow mb-2 text-center" style={{ color: "rgba(255,255,255,0.45)" }}>LEADING PROVIDERS WE PARTNER WITH</p>
            <p className="marketing-copy text-center mb-6" style={{ color: "rgba(255,255,255,0.82)" }}>
              We specialize in delivering tailored integrations of the world&rsquo;s leading enterprise software. These solutions are celebrated for their comprehensive capabilities, but their true value lies in how they&rsquo;re customized to fit your unique business.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {PLATFORMS.map((name, i) => (
                <span key={name} className="font-sans font-semibold" style={{ color: i % 3 === 1 ? "#5CA7F3" : "rgba(255,255,255,0.65)", fontSize: "0.95rem", letterSpacing: "0.02em" }}>
                  {name}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Mission CTA ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-20 items-center">
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "#001F65" }}>OUR MISSION</p>
              <p className="font-serif font-medium" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", lineHeight: 1.4, color: "#001F65", marginBottom: "2rem" }}>
                Whether you need to{" "}
                <strong>optimize an existing enterprise system, migrate to a modern platform,</strong>{" "}
                or build a custom application from the ground up, our team is here to be your expert guide.
              </p>
              <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200"
                style={{ backgroundColor: "#001F65", color: "white", fontSize: "0.9rem" }}>
                Schedule a Call
              </Link>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div style={{ borderLeft: "3px solid #FCC541", paddingLeft: "1.5rem" }}>
                <p className="marketing-copy" style={{ color: "#4A5568", marginBottom: "1rem" }}>
                  &ldquo;M&amp;S voted one of the best full service software development agencies&rdquo;
                </p>
                <p className="eyebrow" style={{ color: "#001F65" }}>, Rocketplace, 2020</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Services, 2-col, 6 cards ────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container">
          <FadeIn className="mb-14">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>WHAT WE DO</p>
            <h2 className="font-serif text-ms-navy font-medium" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              M&amp;S Consulting Enterprise Applications Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>Our expert consultants can help you with&hellip;</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map(({ Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div style={{ borderLeft: "3px solid rgba(0,31,101,0.15)", paddingLeft: "1.5rem" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#001F65", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={18} color="white" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-sans font-semibold" style={{ fontSize: "1rem", color: "#001F65" }}>{title}</h3>
                  </div>
                  <p className="marketing-copy" style={{ color: "#4A5568" }}>{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────────────────── */}
      <NewsletterSignup tagIds={[7355487]} tone="cream" />

      {/* ── Accordion ───────────────────────────────────────────────── */}
      <PracticeAreaAccordion heading="Enterprise Technologies We Work With" leftTools={LEFT_TOOLS} rightTools={RIGHT_TOOLS} />

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}
