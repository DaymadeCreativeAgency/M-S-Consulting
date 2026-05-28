import type { Metadata } from "next";

import { StandaloneMarketingPage } from "@/components/sections/standalone-marketing-page";

export const metadata: Metadata = {
  title: "Public Sector Technology Consulting",
  description:
    "Secure digital transformation, cloud, cybersecurity, data, AI, ERP, CRM, and agile delivery for federal, state, local, and education organizations.",
  alternates: { canonical: "/public-sector" },
};

const sections = [
  {
    eyebrow: "Mission Delivery",
    title: "Secure, compliant technology solutions",
    body: [
      "M&S helps agencies and public sector partners modernize systems, protect critical assets, and deliver better services with technology that fits mission realities.",
      "Our teams bring practical experience across cloud infrastructure, cybersecurity, data analytics, AI, ERP, CRM, and enterprise application modernization.",
    ],
    bullets: [
      "Cloud and infrastructure across Microsoft Azure, AWS, Oracle Cloud, and hybrid environments.",
      "Cybersecurity, identity access management, ATO support, and federal compliance.",
      "Data analytics and AI solutions that turn operational data into usable insight.",
    ],
  },
  {
    eyebrow: "Modernization",
    title: "Better service delivery through systems that work",
    body: [
      "Government transformation succeeds when systems, people, and process move together. We support legacy modernization, process optimization, and enterprise IT initiatives that reduce friction and improve outcomes.",
      "Our delivery teams can lead a program, augment an existing team, or partner with primes that need specialized execution capacity.",
    ],
    bullets: [
      "Legacy system modernization and replatforming.",
      "Application development and enterprise integration.",
      "Agile project management, IT governance, change management, and workforce enablement.",
    ],
  },
  {
    eyebrow: "Prime Partnerships",
    title: "A qualified teaming partner for complex contracts",
    body: [
      "M&S has a long track record supporting prime contractors on federal, state, local, and education work. We integrate into prime-led teams with the right expertise, communication discipline, and compliance awareness.",
      "Our role can include staff augmentation, specialized consulting, secure implementation, enterprise platform support, or full delivery ownership for defined workstreams.",
    ],
    bullets: [
      "Prime and subcontractor partnerships for federal and state contracts.",
      "Support for FedRAMP, NIST, CMMC, and other compliance requirements.",
      "Enterprise platforms including Salesforce, SAP, Microsoft, AWS, and Oracle.",
    ],
  },
  {
    eyebrow: "Contracting",
    title: "Government and diversity designations",
    body: [
      "M&S is an SBA HUBZone Certified, Woman-Owned Small Business, and Small Disadvantaged Business with access to public sector contract vehicles and a history of government delivery.",
      "Our credentials reflect a broader commitment to trust, quality, and accountable delivery for agencies and prime partners.",
    ],
    bullets: [
      "GSA Multi-Award Schedule contract GS-35F-0231S, SIN 54151S.",
      "FBI ITSSS-2 Prime, Navy SeaPort NxG Prime, and NASA SEWP V access.",
      "NAICS coverage across custom software, IT services, advisory, data, and systems work.",
    ],
  },
];

export default function PublicSectorPage() {
  return (
    <StandaloneMarketingPage
      eyebrow="Public Sector"
      title="Trusted digital transformation for government and prime contractors."
      description="M&S helps federal, state, local, and education organizations cut through complexity, modernize critical systems, and deliver mission impact."
      stats={[
        { value: "20+", label: "Years of public sector delivery" },
        { value: "HUBZone", label: "Certified small business" },
        { value: "GSA MAS", label: "Contract vehicle access" },
      ]}
      intro={[
        "Public sector technology work demands more than technical skill. It requires security awareness, compliance discipline, stakeholder fluency, and the ability to keep programs moving inside complex environments.",
        "M&S brings that combination to agency-led initiatives and prime contractor teams, supporting modernization across cloud, cyber, data, AI, ERP, CRM, and custom application delivery.",
      ]}
      cards={[
        { title: "Federal Agencies", body: "Support for mission-critical modernization, compliance, and enterprise platforms." },
        { title: "State and Local", body: "Secure digital services, cloud migration, data programs, and operational modernization." },
        { title: "Higher Education", body: "ERP, identity, integration, analytics, and cloud support for campus systems." },
        { title: "Prime Contractors", body: "Specialized teaming capacity for delivery, compliance, and platform execution." },
      ]}
      sections={sections}
      finalCta={{
        eyebrow: "Teaming Opportunities",
        title: "Looking for a capable public sector partner?",
        body: "Whether you need a qualified subcontractor, a delivery team, or specialized technical expertise, M&S is ready to help shape the next phase of mission transformation.",
      }}
    />
  );
}
