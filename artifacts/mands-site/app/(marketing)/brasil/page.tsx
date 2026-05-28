import type { Metadata } from "next";

import { StandaloneMarketingPage } from "@/components/sections/standalone-marketing-page";

export const metadata: Metadata = {
  title: "M&S Brasil Nearshore Salesforce Services",
  description:
    "Nearshore Salesforce implementation and development from M&S Brasil, including Flow, Apex, Lightning Web Components, managed services, and developer support.",
  alternates: { canonical: "/brasil" },
};

const sections = [
  {
    eyebrow: "Salesforce Delivery",
    title: "Implementation and development capacity",
    body: [
      "M&S Brasil helps teams move Salesforce projects forward with implementation and development support across Sales Cloud, Service Cloud, Health Cloud, Field Service, digital experience pages, and mobile apps.",
      "The team supports low-code automation, custom user experiences, and advanced Apex development when business rules or integration needs go beyond standard configuration.",
    ],
    bullets: [
      "Salesforce Flow automation for consistent data and guided user experiences.",
      "Lightning Web Components for fast, secure, tailored interfaces.",
      "Apex logic for complex calculations, high-volume operations, and platform integrations.",
    ],
  },
  {
    eyebrow: "Nearshore Model",
    title: "Collaborative teams in similar working hours",
    body: [
      "Brazil offers a strong pool of multilingual technical talent, cultural compatibility with U.S. teams, and overlapping working hours that make hybrid delivery easier to manage.",
      "The result is practical development capacity that can complement your internal administrators, expand an implementation partner's delivery bench, or support targeted enhancements without adding long-term headcount.",
    ],
    bullets: [
      "Cost-effective development support without sacrificing quality.",
      "Reliable developer capacity for enhancements, bug fixes, and new features.",
      "A trusted partner for consulting firms delivering Salesforce programs.",
    ],
  },
  {
    eyebrow: "Who We Support",
    title: "Flexible support for teams and partners",
    body: [
      "We support organizations open to nearshore development, Salesforce teams that need developer capacity, implementation partners that need added expertise, and business leaders looking for a better balance of cost and quality.",
      "Our model can be advisory, project-based implementation, or managed services depending on where your team needs help.",
    ],
    bullets: [
      "Salesforce advisory around clouds, add-ons, licenses, and implementation timing.",
      "One-off custom solutions and advanced platform enhancements.",
      "Managed services for training, user management, reporting, dashboards, troubleshooting, and ongoing improvements.",
    ],
  },
  {
    eyebrow: "Industries",
    title: "A broad perspective on complex problems",
    body: [
      "M&S has decades of experience across commercial, public sector, healthcare, education, and technology environments. That variety gives our teams a practical perspective on how Salesforce needs to work inside real organizations.",
      "If you are unsure whether your use case fits, we can talk through your goals and map the right mix of nearshore development and strategic support.",
    ],
  },
];

export default function BrasilPage() {
  return (
    <StandaloneMarketingPage
      eyebrow="M&S Brasil"
      title="Nearshore Salesforce talent to speed up delivery."
      description="M&S Brasil brings the same M&S delivery mindset to nearshore Salesforce implementation, development, and managed services."
      stats={[
        { value: "Salesforce", label: "Implementation and development" },
        { value: "Nearshore", label: "Aligned working hours" },
        { value: "Flow + Apex", label: "Low-code and custom development" },
      ]}
      intro={[
        "Your Salesforce roadmap should not stall because the right development capacity is hard to find. M&S Brasil gives teams access to talented nearshore professionals who can move quickly, collaborate easily, and deliver high-quality platform work.",
        "Whether you need targeted enhancements, full implementation support, or ongoing managed services, our team can meet you where your Salesforce organization is today.",
      ]}
      cards={[
        { title: "Sales Cloud", body: "Improve sales workflows, data quality, automation, and reporting." },
        { title: "Service Cloud", body: "Create better service experiences with guided processes and tailored interfaces." },
        { title: "Health Cloud", body: "Support healthcare workflows with secure, user-friendly Salesforce delivery." },
        { title: "Field Service", body: "Improve scheduling, mobile work, and operational visibility for field teams." },
      ]}
      sections={sections}
      finalCta={{
        eyebrow: "How to Work With Us",
        title: "Bring in the right Salesforce talent at the right moment.",
        body: "Use M&S Brasil for advisory, implementation, developer support, or ongoing managed services when your team needs additional capacity.",
      }}
    />
  );
}
