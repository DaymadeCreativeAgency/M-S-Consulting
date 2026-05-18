import type { Metadata } from "next";
import { HeroWithVideo } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CTABanner } from "@/components/sections/cta-banner";
import { NumberedSectionMark } from "@/components/technical/numbered-section-mark";

export const metadata: Metadata = {
  title: "Microsoft Consulting Services",
  description:
    "More than 15 years guiding organizations through Microsoft implementations. M&S Consulting helps you adopt, integrate, and optimize Microsoft technologies across M365, Azure, Power Platform, and more.",
};

const ENGAGEMENT_MODEL = [
  {
    title: "Advisory",
    description:
      "We start by understanding the unique needs and goals of your business. Which Microsoft tools are worth the investment? How should they be structured to maximize value? We help you answer these questions before a single license is purchased.",
  },
  {
    title: "Implementation",
    description:
      "Translating Microsoft capabilities into working systems — seamlessly integrated into how your organization actually operates — is where the real work happens. Our consultants lead your team through migration and setup with minimal disruption.",
  },
  {
    title: "Managed Services",
    description:
      "Microsoft technologies are not set-it-and-forget-it. We monitor analytics, advise on new capabilities, optimize your spending, and keep your systems secure. When questions come up, our specialists are available.",
  },
];

const CAPABILITIES = [
  {
    title: "Active Directory",
    description:
      "Empower administrators to control network access permissions with precision and security. We deploy this solution across your enterprise and integrate it with Azure AD for unified identity management.",
  },
  {
    title: "Power BI",
    description:
      "Visualize your data and share insights across the organization. Our team helps you build smart, easy-to-understand analytics reports that keep decision-makers on the same page.",
  },
  {
    title: "SharePoint",
    description:
      "Perhaps the most customizable collaboration platform available. We tailor SharePoint to suit your organization — maximizing its flexibility rather than defaulting to out-of-the-box configuration.",
  },
  {
    title: ".NET",
    description:
      "A top platform for building web, mobile, desktop, and cloud applications. Our team advises on the languages and tools that will make the most of your .NET investment.",
  },
  {
    title: "Power Apps and Power Platform",
    description:
      "Build and deploy simple or complex custom applications with this user-friendly Microsoft suite. Our consultants guide you through development without requiring heavy custom code.",
  },
  {
    title: "SQL Server",
    description:
      "Store, manage, and retrieve data effectively with this relational database management system. We help you integrate, streamline, and scale SQL Server while keeping your data secure and highly available.",
  },
  {
    title: "Azure services",
    description:
      "Cosmos DB for global scalability, Azure AI for machine learning and automation, and AKS for containerized application deployment. We help you navigate the Azure ecosystem and get real return on your cloud investment.",
  },
  {
    title: "Microsoft Copilot",
    description:
      "We help your organization get genuinely productive with Microsoft AI tools — covering best practices for communication with Copilot and accelerating processes like writing, analysis, coding, and more.",
  },
];

export default function MicrosoftPage() {
  return (
    <>
      <HeroWithVideo
        tone="light"
        eyebrow="SERVICE LINE · MICROSOFT"
        headline="Get more from your Microsoft investment."
        subhead="More than 15 years guiding organizations through Microsoft implementations. We help you adopt, integrate, and optimize Microsoft technologies so they work the way your business actually works — not the way the documentation says they should."
        primaryCta={{ label: "Schedule a Call", href: "/contact" }}
        secondaryCta={{ label: "See Case Studies", href: "/case-studies" }}
      />

      {/* Engagement Model */}
      <FeatureGrid
        sectionNumber="01"
        eyebrow="HOW WE WORK"
        heading="From first question to long-term optimization."
        subhead="Whether you aim to adopt one Microsoft solution or a full ecosystem migration, our team is here as your expert guide and trusted partner. Our mission: to make the absolute most of your Microsoft investment."
        items={ENGAGEMENT_MODEL}
        columns={3}
        tone="cream"
      />

      {/* Why it matters */}
      <section className="ms-section">
        <div className="ms-container">
          <NumberedSectionMark number="02" label="OUR EXPERIENCE" className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-display text-ms-navy mb-5">
                Navigate the Microsoft ecosystem with confidence.
              </h2>
              <p className="font-sans text-lg text-charcoal-700 leading-relaxed mb-5">
                Microsoft offers a wide range of innovative solutions designed to
                enhance your organization&apos;s efficiency. To get full value from
                these tools, you need a thorough understanding of their unique
                capabilities — and how they interact with each other and with your
                existing systems.
              </p>
              <p className="font-sans text-lg text-charcoal-700 leading-relaxed">
                We are here to help you get over the learning curve of implementing
                and optimizing these technologies so you can start realizing their
                benefits faster. Microsoft systems are evolving every quarter, which
                means an implementation that is optimized today may not be tomorrow.
                That is why our team stays engaged long after go-live.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Which Microsoft tools are worth the investment?",
                  a: "We evaluate your needs, workflow, and existing stack before recommending any products — not the other way around.",
                },
                {
                  q: "How do you maximize the value of these resources?",
                  a: "By building a personalized adoption plan that reflects how your organization actually works, not how a vendor wants to sell it.",
                },
                {
                  q: "What does successful implementation look like day to day?",
                  a: "We define measurable outcomes upfront so both teams know what success looks like — and can track it throughout the engagement.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-lg p-5 bg-ms-cream/60 border border-[rgba(0,31,101,0.08)]"
                >
                  <p className="font-sans text-sm font-semibold text-ms-navy mb-1.5">{item.q}</p>
                  <p className="font-sans text-sm text-charcoal-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <FeatureGrid
        sectionNumber="03"
        eyebrow="CAPABILITIES"
        heading="Our Microsoft service areas."
        items={CAPABILITIES}
        columns={4}
        tone="cream"
      />

      <CTABanner
        heading="Ready to make the most of your Microsoft investment?"
        subhead="Our Microsoft consultants are ready to talk through your current environment, your goals, and what a realistic engagement looks like."
        primaryCta={{ label: "Schedule a Call", href: "/contact" }}
        secondaryCta={{ label: "See Case Studies", href: "/case-studies" }}
        tone="navy"
      />
    </>
  );
}
