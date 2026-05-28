import type { PartnerLogoTileProps } from "@/components/sections/partner-logo-tile";

export const HOMEPAGE_SERVICE_LINES: PartnerLogoTileProps[] = [
  {
    name: "Atlassian",
    href: "/service-lines/atlassian",
    src: "/media/logos/service-lines/atlassian.svg",
    scale: 0.86,
  },
  {
    name: "AWS",
    href: "/service-lines/aws",
    src: "/media/logos/service-lines/aws.svg",
    scale: 1,
    nudgeY: 4,
  },
  {
    name: "Microsoft",
    href: "/service-lines/microsoft",
    src: "/media/logos/service-lines/microsoft.svg",
    scale: 1,
  },
  {
    name: "Oracle",
    href: "/service-lines/oracle",
    src: "/media/logos/service-lines/oracle.svg",
    scale: 1,
  },
  {
    name: "Salesforce",
    href: "/service-lines/salesforce",
    src: "/media/logos/service-lines/salesforce.svg",
    scale: 1.08,
  },
  {
    name: "SAP",
    href: "/service-lines/sap",
    src: "/media/logos/service-lines/sap.svg",
    scale: 1.06,
  },
  {
    name: "Snowflake",
    href: "/service-lines/snowflake",
    src: "/media/logos/service-lines/snowflake.svg",
    scale: 1.1,
  },
];

export const HOMEPAGE_PRACTICE_AREAS = [
  {
    name: "Enterprise Applications",
    href: "/practice-areas/enterprise-apps",
    icon: "/media/PracticeArea-Icons-_Enterprise-Applications.svg",
  },
  {
    name: "Cloud & Infrastructure",
    href: "/practice-areas/cloud",
    icon: "/media/PracticeArea-Icons-_Cloud-and-Infra.svg",
  },
  {
    name: "Emerging Technology & Artificial Intelligence (AI)",
    href: "/practice-areas/ai",
    icon: "/media/PracticeArea-Icons-_Emerging-Tech-AI.svg",
  },
  {
    name: "Data Analytics & Integration",
    href: "/practice-areas/data-analytics",
    icon: "/media/PracticeArea-Icons-_Data-Analytics-Integrtation.svg",
  },
  {
    name: "Agile Project Management & IT Service Management",
    href: "/practice-areas/agile-pm",
    icon: "/media/PracticeArea-Icons-_Agile-PM-ITSM.svg",
  },
  {
    name: "Cybersecurity & Identity Management",
    href: "/practice-areas/cyber",
    icon: "/media/PracticeArea-Icons-_Cybersecurity-Identity-Management.svg",
  },
] as const;
