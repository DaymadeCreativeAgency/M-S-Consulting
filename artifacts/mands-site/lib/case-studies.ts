export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  industry: string;
  metric: { value: string; label: string };
  serviceLines: string[];
  practiceAreas: string[];
  industries: string[];
  technologies: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "racing-against-time",
    title: "Racing Against Time: How M&S Consulting and IBM Helped Team USA Capture Silver",
    client: "United States Olympic Committee",
    summary:
      "Real-time sensor analytics helped Team USA's cyclists and speed skaters make in-session adjustments. The women's pursuit team went from sixth in the world to setting a world record trial and winning Olympic silver at Rio 2016.",
    industry: "Sports & Non-Profit",
    metric: { value: "Silver", label: "Olympic medal, Rio 2016" },
    serviceLines: ["aws"],
    practiceAreas: ["data-analytics", "cloud"],
    industries: ["sports", "non-profit"],
    technologies: ["IBM", "Raspberry Pi", "IoT", "Real-Time Analytics"],
  },
  {
    slug: "agile-erp-implementation-transforming-air-force-common-services",
    title: "Agile ERP Implementation: Transforming U.S. Air Force Common Services",
    client: "U.S. Air Force",
    summary:
      "M&S Consulting delivered a standardized ERP operating environment for the U.S. Air Force using agile methodology, modernizing hardware, databases, and enterprise resource planning systems on a tight government schedule.",
    industry: "Federal Defense",
    metric: { value: "On Time", label: "Mission-critical federal delivery" },
    serviceLines: ["sap"],
    practiceAreas: ["enterprise-apps", "agile-pm"],
    industries: ["federal"],
    technologies: ["SAP", "ERP", "Agile", "DoD"],
  },
  {
    slug: "sap-brim-transformation-for-a-national-media-ad-sales-giant",
    title: "SAP BRIM Transformation for a National Media Ad-Sales Giant",
    client: "National Media Company",
    summary:
      "When a legacy billing module was set to retire, M&S Consulting delivered a full SAP BRIM implementation to protect hundreds of millions in advertising revenue and modernize the billing and revenue management platform.",
    industry: "Media & Advertising",
    metric: { value: "$B+", label: "Revenue flow protected" },
    serviceLines: ["sap"],
    practiceAreas: ["enterprise-apps"],
    industries: ["media"],
    technologies: ["SAP BRIM", "SAP", "Revenue Management"],
  },
  {
    slug: "spectrum-reach-business-continuity-success",
    title: "Keeping the Lights On: Business Continuity for Charter Spectrum Reach",
    client: "Charter Spectrum Reach",
    summary:
      "Charter Spectrum Reach needed a robust Business Continuity Plan to protect its television, internet, and phone services from any disruption. M&S Consulting designed and delivered a resilience framework that keeps critical services online.",
    industry: "Telecommunications",
    metric: { value: "99.9%", label: "Service uptime maintained" },
    serviceLines: ["microsoft"],
    practiceAreas: ["cloud", "enterprise-apps"],
    industries: ["telecom"],
    technologies: ["Business Continuity", "Disaster Recovery", "Azure"],
  },
  {
    slug: "connecting-communities-nationwide-grants-management-on-salesforce",
    title: "Connecting Communities: Grants Management on Salesforce",
    client: "National Broadband Initiative",
    summary:
      "A nationwide broadband initiative needed to manage large-scale grant programs to expand high-speed internet access. M&S Consulting built a Salesforce-based grants management system to track, award, and report across hundreds of communities.",
    industry: "Government & Utilities",
    metric: { value: "$1B+", label: "In grants managed" },
    serviceLines: ["salesforce"],
    practiceAreas: ["enterprise-apps"],
    industries: ["federal", "state"],
    technologies: ["Salesforce", "Grants Management", "Government Cloud"],
  },
  {
    slug: "from-legacy-crm-to-salesforce-success",
    title: "From Legacy CRM to Salesforce: A Complex Enterprise Migration",
    client: "Large Enterprise",
    summary:
      "A large enterprise faced the challenge of replacing a highly customized legacy CRM with Salesforce. M&S Consulting managed the full migration, preserving data integrity and delivering on-time with minimal business disruption.",
    industry: "Commercial Enterprise",
    metric: { value: "100%", label: "Data migrated without loss" },
    serviceLines: ["salesforce"],
    practiceAreas: ["enterprise-apps"],
    industries: ["commercial"],
    technologies: ["Salesforce", "CRM", "Data Migration"],
  },
  {
    slug: "from-frustration-to-full-transformation",
    title: "From Frustration to Full Transformation: Rescuing a Salesforce Implementation",
    client: "National Manufacturing Organization",
    summary:
      "A national manufacturing and services organization was struggling mid-way through a greenfield Salesforce implementation. M&S Consulting stepped in to rescue the project, stabilize delivery, and bring it across the finish line.",
    industry: "Manufacturing",
    metric: { value: "On Track", label: "Rescued mid-flight implementation" },
    serviceLines: ["salesforce"],
    practiceAreas: ["enterprise-apps", "agile-pm"],
    industries: ["manufacturing"],
    technologies: ["Salesforce", "Project Recovery", "Change Management"],
  },
  {
    slug: "building-a-high-performance-crm-and-customer-service-platform",
    title: "Building a High-Performance CRM and Customer Service Platform",
    client: "National Telecommunications Company",
    summary:
      "A growing telecommunications company needed a CRM and customer service solution that could handle millions of interactions. M&S Consulting implemented a Salesforce platform that scaled to meet enterprise demand.",
    industry: "Telecommunications",
    metric: { value: "Millions", label: "Customer interactions supported" },
    serviceLines: ["salesforce"],
    practiceAreas: ["enterprise-apps"],
    industries: ["telecom"],
    technologies: ["Salesforce", "Service Cloud", "CRM"],
  },
  {
    slug: "rebuilding-a-mission-critical-financial-platform",
    title: "Rebuilding a Mission-Critical Financial Platform",
    client: "Financial Services Organization",
    summary:
      "When our team joined in late 2021, a mission-critical financial system was running across nine separate isolated platforms. M&S Consulting consolidated and rebuilt the platform into a unified, resilient architecture.",
    industry: "Financial Services",
    metric: { value: "9 → 1", label: "Isolated systems consolidated" },
    serviceLines: ["oracle"],
    practiceAreas: ["enterprise-apps", "cloud"],
    industries: ["commercial"],
    technologies: ["Oracle", "Financial Systems", "Platform Modernization"],
  },
  {
    slug: "delivering-a-last-minute-cloud-migration",
    title: "Delivering a Last-Minute Cloud Migration for Massachusetts DIA",
    client: "Commonwealth of Massachusetts — Dept. of Industrial Accidents",
    summary:
      "The Massachusetts Department of Industrial Accidents oversaw the state's workers' compensation system and faced an urgent cloud migration deadline. M&S Consulting delivered the migration on time with zero downtime.",
    industry: "State Government",
    metric: { value: "Zero", label: "Downtime during migration" },
    serviceLines: ["aws"],
    practiceAreas: ["cloud"],
    industries: ["state"],
    technologies: ["AWS", "Cloud Migration", "Government IT"],
  },
  {
    slug: "redefining-efficiency-for-a-global-leader-in-vision-correction",
    title: "Redefining Efficiency for a Global Leader in Vision Correction",
    client: "Global Eye Care Company",
    summary:
      "A global leader in orthokeratology contact lenses needed to modernize operations and improve supply chain efficiency. M&S Consulting delivered an enterprise systems overhaul that streamlined production and distribution at scale.",
    industry: "Healthcare",
    metric: { value: "Global", label: "Supply chain modernized" },
    serviceLines: ["sap"],
    practiceAreas: ["enterprise-apps"],
    industries: ["healthcare"],
    technologies: ["SAP", "Supply Chain", "ERP"],
  },
  {
    slug: "helping-a-national-public-sector-organization-power-up",
    title: "Helping a National Public Sector Organization Power Up",
    client: "National Public Sector Organization",
    summary:
      "A high-impact public sector organization needed more than a technology upgrade — they needed a trusted delivery partner. M&S Consulting supported people-first transformation across operations, data, and service delivery.",
    industry: "Federal / Public Sector",
    metric: { value: "25+", label: "Business capabilities modernized" },
    serviceLines: ["microsoft"],
    practiceAreas: ["enterprise-apps", "agile-pm"],
    industries: ["federal"],
    technologies: ["Microsoft", "Power Platform", "Digital Transformation"],
  },
  {
    slug: "guiding-a-growing-company-through-digital-transformation",
    title: "Guiding a Growing Company Through Digital Transformation",
    client: "Mid-Sized Commercial Enterprise",
    summary:
      "After years of growth, a mid-sized company's aging systems were holding back the business. M&S Consulting guided the organization through a full digital transformation, modernizing its core platforms and enabling the next phase of growth.",
    industry: "Commercial Enterprise",
    metric: { value: "Full", label: "Platform modernization delivered" },
    serviceLines: ["microsoft"],
    practiceAreas: ["enterprise-apps", "cloud"],
    industries: ["commercial"],
    technologies: ["Microsoft", "Azure", "Change Management"],
  },
];

export type FilterCategory = "serviceLines" | "practiceAreas" | "industries";

export const FILTER_GROUPS: {
  key: FilterCategory;
  label: string;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "serviceLines",
    label: "Service Line",
    options: [
      { value: "microsoft", label: "Microsoft" },
      { value: "salesforce", label: "Salesforce" },
      { value: "sap", label: "SAP" },
      { value: "oracle", label: "Oracle" },
      { value: "aws", label: "AWS" },
      { value: "atlassian", label: "Atlassian" },
      { value: "snowflake", label: "Snowflake" },
    ],
  },
  {
    key: "practiceAreas",
    label: "Practice Area",
    options: [
      { value: "ai", label: "AI & Data" },
      { value: "cloud", label: "Cloud" },
      { value: "cyber", label: "Cybersecurity" },
      { value: "data-analytics", label: "Data Analytics" },
      { value: "agile-pm", label: "Agile PM" },
      { value: "enterprise-apps", label: "Enterprise Apps" },
    ],
  },
  {
    key: "industries",
    label: "Industry",
    options: [
      { value: "federal", label: "Federal Gov" },
      { value: "state", label: "State Gov" },
      { value: "healthcare", label: "Healthcare" },
      { value: "telecom", label: "Telecom" },
      { value: "media", label: "Media" },
      { value: "manufacturing", label: "Manufacturing" },
      { value: "sports", label: "Sports" },
      { value: "commercial", label: "Commercial" },
      { value: "non-profit", label: "Non-Profit" },
    ],
  },
];
