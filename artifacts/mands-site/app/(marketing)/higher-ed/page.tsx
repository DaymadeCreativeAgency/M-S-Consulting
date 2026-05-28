import type { Metadata } from "next";

import { StandaloneMarketingPage } from "@/components/sections/standalone-marketing-page";

export const metadata: Metadata = {
  title: "Higher Education IT Consulting",
  description:
    "Higher education technology consulting for ERP, integration, cloud migration, data analytics, identity, security, and campus modernization.",
  alternates: { canonical: "/higher-ed" },
};

const sections = [
  {
    eyebrow: "Enterprise Systems",
    title: "Campus systems that connect operations and outcomes",
    body: [
      "M&S brings more than 20 years of higher education experience across university enterprise systems, including Oracle eBusiness Suite, PeopleSoft, Ellucian Banner, and Blackboard learning environments.",
      "Our work spans ERP implementation, enhancement, operational management, middleware, identity and access management, business intelligence, and data analytics.",
    ],
    bullets: [
      "ERP implementation, enhancement, and operational support.",
      "SOA, middleware, identity, and access management.",
      "Business intelligence and data analytics for institutional decision-making.",
    ],
  },
  {
    eyebrow: "Integration",
    title: "Seamless integration across campus and cloud",
    body: [
      "Campus ecosystems depend on many systems working together. M&S designs integration patterns that connect finance, HR, student, procurement, recruiting, and reporting platforms without forcing institutions into brittle workarounds.",
      "Our teams have designed high-volume interfaces between state ERP systems, Oracle eBusiness Suite HCM, Oracle Taleo, Ellucian Banner, and The Common Application.",
    ],
    bullets: [
      "Payment and vendor data integration.",
      "High-volume batch interfaces using advanced queuing and debatching concepts.",
      "Campus-to-cloud integration for recruiting, student, HR, and finance systems.",
    ],
  },
  {
    eyebrow: "Cloud",
    title: "Cloud migration for complex institutional environments",
    body: [
      "Moving higher education systems to the cloud can reduce data center cost and improve resilience, but the migration path must respect institutional constraints and application complexity.",
      "M&S has supported lift-and-shift cloud migrations, including large server estates and ERP platforms, while helping institutions plan later phases that take fuller advantage of cloud services.",
    ],
    bullets: [
      "AWS and hybrid cloud planning for campus environments.",
      "Migration sequencing that minimizes operational disruption.",
      "Cloud modernization roadmaps beyond the initial lift-and-shift.",
    ],
  },
  {
    eyebrow: "Security and Risk",
    title: "Protecting institutions under growing threat pressure",
    body: [
      "Higher education is a frequent target for cyberattacks. M&S helps institutions reduce risk through identity controls, resilient architecture, disaster recovery planning, and security hardening.",
      "Our teams understand the requirements and expectations around HIPAA, FERPA, PCI DSS, third-party assessments, high availability, and disaster recovery.",
    ],
    bullets: [
      "Identity and access management, including multi-factor authentication.",
      "High availability and disaster recovery architecture.",
      "Security hardening aligned to assessment findings and compliance needs.",
    ],
  },
];

export default function HigherEdPage() {
  return (
    <StandaloneMarketingPage
      eyebrow="Higher Education"
      title="Technology modernization for institutions under pressure."
      description="M&S helps colleges and universities navigate ERP, integration, cloud, analytics, and security challenges with practical delivery experience."
      stats={[
        { value: "20+", label: "Years in higher education IT" },
        { value: "150+", label: "Servers migrated in major cloud work" },
        { value: "ERP", label: "Oracle, PeopleSoft, Banner, and more" },
      ]}
      intro={[
        "Higher education IT teams are being asked to support more diverse populations, tighter budgets, new delivery models, and rising security expectations. The technology work is complex, but the goal is straightforward: help the institution serve students, faculty, and staff better.",
        "M&S combines core technical expertise with the ability to understand and improve institutional business processes, so technology investments translate into real operational value.",
      ]}
      cards={[
        { title: "ERP and Campus Systems", body: "Implementation, enhancement, operations, and modernization support for core university systems." },
        { title: "Integration", body: "Middleware and SOA patterns that connect finance, HR, student, and cloud systems." },
        { title: "Cloud Migration", body: "Planning and execution for complex server and application migrations." },
        { title: "Security", body: "Identity, access, disaster recovery, compliance, and hardening support." },
      ]}
      sections={sections}
      finalCta={{
        eyebrow: "Campus Modernization",
        title: "Bring technical depth and process insight to your next campus initiative.",
        body: "Whether you are modernizing ERP, moving infrastructure to the cloud, or reducing security risk, M&S can help turn institutional complexity into a practical delivery roadmap.",
      }}
    />
  );
}
