export type TeamMember = {
  name: string;
  title: string;
  photo: string | null;
  bio: string;
  linkedin: string | null;
  expertise?: string[];
  photoScale?: number;
  photoPosition?: string;
  photoTransformOrigin?: string;
};

export const MANAGING_PARTNERS: TeamMember[] = [
  {
    name: "Ashok Aggarwal",
    title: "Co-Founder & Managing Partner",
    photo: "/media/team/ashok-aggarwal.jpg",
    bio: "Ashok co-founded M&S Consulting in 2002 with a vision to make advanced technology accessible to every organization. Over two decades he has grown M&S into a 250-person firm serving federal agencies, Fortune 500 companies, and non-profits. He leads commercial strategy, key client relationships, and the firm's long-term direction.",
    linkedin: "https://www.linkedin.com/in/ashokaggarwal/",
    expertise: ["Enterprise Strategy", "Commercial Growth", "Client Relationships"],
  },
  {
    name: "Sanu Chadha",
    title: "Co-Founder & Managing Partner",
    photo: "/media/team/sanu-chadha.png",
    bio: "Sanu has helped lead M&S Consulting since 2002, guiding the firm's operations, delivery culture, and public sector work. She also serves on the Board of Directors for First United Bank & Trust and champions a culture of inclusion, accountability, and innovation across the firm.",
    linkedin: "https://www.linkedin.com/in/sanuchadha/",
    expertise: ["Delivery Excellence", "Public Sector", "Digital Transformation"],
  },
];

export const ASSOCIATE_PARTNERS: TeamMember[] = [
  {
    name: "Daidre Fanis",
    title: "Associate Partner",
    photo: "/media/team/daidre-fanis.png",
    bio: "Daidre is an Associate Partner and practice leader at M&S with deep expertise across Salesforce, CRM, CPQ, and enterprise application delivery. She brings a client-first approach to complex technology transformations, helping organizations move from strategy through implementation with clarity and confidence.",
    linkedin: "https://www.linkedin.com/in/daidrefanis/",
    expertise: ["Enterprise Applications", "Client Delivery", "Transformation Strategy"],
  },
  {
    name: "Jay Mason",
    title: "Associate Partner, AI",
    photo: "/media/team/jay-mason.png",
    bio: "Jay leads M&S's AI and advanced analytics practice, helping organizations move from AI strategy to practical implementation. His work spans generative AI, machine learning, natural language processing, data analytics, identity and access management, and executive AI coaching.",
    linkedin: "https://www.linkedin.com/in/mason-ai/",
    expertise: ["Generative AI", "Advanced Analytics", "AI Strategy"],
  },
];

export const DIRECTORS: TeamMember[] = [
  {
    name: "Jon Nettleman",
    title: "VP, Revenue Growth",
    photo: "/media/team/jon-nettleman.png",
    bio: "Jon leads revenue growth at M&S, bringing technology, go-to-market, and regulated-industry experience to help clients connect business priorities with the right digital transformation strategy.",
    linkedin: "https://www.linkedin.com/in/jon-nettleman-0334695/",
    expertise: ["Revenue Growth", "Go-to-Market", "Regulated Industries"],
  },
  {
    name: "Casey Zaitz",
    title: "Agile PM & Org Transformation",
    photo: "/media/team/headshot-6.png",
    bio: "Casey leads M&S's project management and organizational transformation practice. She specializes in change management, helping clients build lasting capability alongside technology deployments.",
    linkedin: "https://www.linkedin.com/in/casey-zaitz/",
    expertise: ["Change Management", "Org Transformation", "Project Management"],
  },
  {
    name: "Hazem Hower",
    title: "Director, Cloud & Infrastructure Services",
    photo: "/media/team/headshot-2.png",
    bio: "Hazem leads cloud architecture and infrastructure modernization engagements across AWS, Azure, and hybrid environments for M&S clients.",
    linkedin: "https://www.linkedin.com/in/hazem-h-4ba67b52/",
    expertise: ["Cloud Architecture", "AWS", "Infrastructure Modernization"],
  },
  {
    name: "Richard Glass",
    title: "Atlassian Practice Director",
    photo: "/media/team/richard-glass.png",
    bio: "Richard leads the Atlassian practice at M&S and supports public sector technology programs as a PMP, Atlassian product SME, and agile delivery leader. His work spans business development, staff mentoring, Jira and Confluence administration, and complex government delivery environments.",
    linkedin: "https://www.linkedin.com/in/richard-glass-pmp/",
    expertise: ["Atlassian", "Public Sector", "Agile Delivery"],
  },
  {
    name: "Shruti Karat",
    title: "Solution Architect / Consulting Manager",
    photo: "/media/team/headshot-8.png",
    bio: "Shruti manages client engagements and provides solution architecture expertise for systems integration, managed services, and analytics work. Her experience includes higher education and commercial clients, Oracle Analytics Cloud, Oracle EBS, and cross-system data integration.",
    linkedin: "https://www.linkedin.com/in/shruti-karat/",
    expertise: ["Solution Architecture", "Systems Integration", "Analytics"],
  },
  {
    name: "Ben Berry",
    title: "Director, Video",
    photo: "/media/team/ben-berry.png",
    bio: "Ben leads M&S's video and media practice, bringing creative strategy and production expertise to client communications, marketing, and digital campaigns.",
    linkedin: "https://www.linkedin.com/in/benisfilmin/",
    expertise: ["Video Production", "Media Strategy", "Creative Direction"],
  },
  {
    name: "Cody Childers",
    title: "Microsoft & Custom Dev",
    photo: "/media/team/cody-childers.png",
    bio: "Cody leads M&S's Microsoft practice and custom development team, delivering Power Platform, Azure, .NET, API, and bespoke software solutions that modernize client operations.",
    linkedin: "https://www.linkedin.com/in/codychilders/",
    expertise: ["Microsoft Stack", "Custom Development", "API Development"],
  },
  {
    name: "Brandon Jones",
    title: "Senior Manager, Brand Experience",
    photo: "/media/team/headshot-1.png",
    bio: "Brandon leads brand experience work at M&S, shaping brand development, website design, UI, UX, and social strategy for client products and the M&S brand itself.",
    linkedin: "https://www.linkedin.com/in/jones1design/",
    expertise: ["Brand Strategy", "UX Design", "Visual Identity"],
  },
  {
    name: "Mark Wittkopp",
    title: "Senior Executive",
    photo: "/media/team/mark-wittkopp.png",
    bio: "Mark is a senior executive on the M&S leadership team, supporting commercial, government, and higher education clients across cloud, ERP, CRM, HCM, and process automation initiatives.",
    linkedin: "https://www.linkedin.com/in/mark-wittkopp-64844210/",
    expertise: ["Commercial Strategy", "ERP & Cloud", "Business Development"],
  },
];

export const PARTNER_LOGOS: { name: string; logo: string | null }[] = [
  { name: "Salesforce", logo: "/media/logos/service-lines/salesforce.svg" },
  { name: "SAP", logo: "/media/logos/service-lines/sap.png" },
  { name: "Oracle", logo: "/media/logos/service-lines/oracle.svg" },
  { name: "Microsoft", logo: "/media/logos/service-lines/microsoft.png" },
  { name: "AWS", logo: "/media/logos/service-lines/aws.svg" },
  { name: "Atlassian", logo: "/media/logos/service-lines/atlassian.png" },
  { name: "Snowflake", logo: "/media/logos/service-lines/snowflake.png" },
  { name: "Google Cloud", logo: null },
  { name: "ServiceNow", logo: null },
  { name: "Power Platform", logo: null },
];
