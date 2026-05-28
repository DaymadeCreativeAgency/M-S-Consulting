import type { Metadata } from "next";

import { StandaloneMarketingPage } from "@/components/sections/standalone-marketing-page";

export const metadata: Metadata = {
  title: "ERP Consulting Services",
  description:
    "ERP consulting, implementation, optimization, integration, migration, training, and support across SAP, Oracle, NetSuite, Microsoft, and enterprise platforms.",
  alternates: { canonical: "/enterprise-resource-planning" },
};

const sections = [
  {
    eyebrow: "ERP Lifecycle",
    title: "Expert support across strategy, configuration, and sustainment",
    body: [
      "ERP systems are the backbone of operations when they are implemented well and supported by the right people. M&S embeds seasoned ERP experts who understand both the platform and the business process it needs to support.",
      "Our consultants help organizations move through strategy, configuration, integration, migration, training, and ongoing support with less confusion and more delivery confidence.",
    ],
    bullets: [
      "ERP strategy and roadmap support.",
      "Configuration, implementation, and integration.",
      "Migration, training, optimization, and production support.",
    ],
  },
  {
    eyebrow: "Platforms",
    title: "Depth across major ERP environments",
    body: [
      "Our network includes experts across SAP, Oracle, NetSuite, Microsoft, and adjacent enterprise platforms. We focus where we can make the most impact and stand up teams quickly.",
      "M&S has especially deep internal expertise in NetSuite, Oracle, and SAP, allowing us to move quickly when clients need effective ERP talent.",
    ],
    bullets: [
      "SAP S/4HANA, ECC, SuccessFactors, Ariba, and Fiori.",
      "Oracle finance, HCM, and reporting environments.",
      "NetSuite and Microsoft enterprise application ecosystems.",
    ],
  },
  {
    eyebrow: "Use Cases",
    title: "Support for launches, recoveries, and interim needs",
    body: [
      "Organizations come to M&S when they are launching major ERP transformations, recovering struggling projects, or filling interim roles to keep a business-critical program moving.",
      "We bring the right mix of platform knowledge, process awareness, and change leadership so the ERP program serves the business instead of becoming the business's bottleneck.",
    ],
    bullets: [
      "Major ERP transformation planning and execution.",
      "Project recovery and delivery stabilization.",
      "Interim ERP talent for critical roles and workstreams.",
    ],
  },
  {
    eyebrow: "Trust",
    title: "A partner that understands change, not just software",
    body: [
      "M&S has helped Fortune 500 companies, government agencies, healthcare systems, and higher education institutions navigate complex ERP challenges.",
      "Clients return because our teams listen carefully, adapt quickly, and understand the people side of enterprise systems change.",
    ],
  },
];

export default function EnterpriseResourcePlanningPage() {
  return (
    <StandaloneMarketingPage
      eyebrow="ERP Consulting Services"
      title="ERP talent and strategy for systems that run the business."
      description="M&S helps organizations implement, optimize, integrate, and evolve ERP platforms with consultants who understand both technology and operations."
      stats={[
        { value: "SAP", label: "S/4HANA, ECC, Ariba, Fiori" },
        { value: "Oracle", label: "Finance, HCM, reporting" },
        { value: "NetSuite", label: "Deep internal expertise" },
      ]}
      intro={[
        "ERP platforms are complex because businesses are complex. The right implementation partner needs to understand process, data, integrations, users, governance, and the platform itself.",
        "M&S bridges the gap between complexity and clarity by bringing seasoned ERP experts into the work at the right time and with the right operating model.",
      ]}
      cards={[
        { title: "Transformation", body: "Plan and execute major ERP modernization initiatives." },
        { title: "Recovery", body: "Stabilize struggling programs and create a credible path forward." },
        { title: "Integration", body: "Connect ERP to financial, HR, procurement, reporting, and operational systems." },
        { title: "Support", body: "Provide interim expertise and ongoing optimization when teams are stretched." },
      ]}
      sections={sections}
      finalCta={{
        eyebrow: "Find the Right ERP Talent",
        title: "Move faster, spend smarter, and deliver results that stick.",
        body: "Tell us where your ERP program stands today, and we will help identify the experts and support model that fit.",
      }}
    />
  );
}
