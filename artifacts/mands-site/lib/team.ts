export type TeamMember = {
  name: string;
  title: string;
  photo: string | null;
  bio: string;
  linkedin: string | null;
  expertise?: string[];
};

export const MANAGING_PARTNERS: TeamMember[] = [
  {
    name: "Ashok Aggarwal",
    title: "Co-Founder & Managing Partner",
    photo: "/media/team/ashok-aggarwal.jpg",
    bio: "Ashok co-founded M&S Consulting in 2002 with a vision to make advanced technology accessible to every organization. Over two decades he has grown M&S into a 250-person firm serving federal agencies, Fortune 500 companies, and non-profits. He leads commercial strategy, key client relationships, and the firm's long-term direction.",
    linkedin: "https://www.linkedin.com/in/ashok-aggarwal/",
    expertise: ["Enterprise Strategy", "Commercial Growth", "Client Relationships"],
  },
  {
    name: "Sanu Chadha",
    title: "Co-Founder & Managing Partner",
    photo: "/media/team/sanu-chadha.png",
    bio: "Sanu co-founded M&S Consulting in 2002 and has led the firm's delivery excellence and public sector practice for over two decades. A recognized voice in women in STEM leadership, she guides M&S's mission-critical government engagements and champions a culture of inclusion and innovation across the firm.",
    linkedin: "https://www.linkedin.com/in/sanu-chadha/",
    expertise: ["Delivery Excellence", "Public Sector", "Digital Transformation"],
  },
];

export const ASSOCIATE_PARTNERS: TeamMember[] = [
  {
    name: "Daidre Fanis",
    title: "Associate Partner",
    photo: "/media/team/daidre-fanis.png",
    bio: "Daidre is an Associate Partner at M&S with deep expertise in enterprise application implementations and client delivery strategy. She brings a client-first approach to every engagement and helps organizations navigate complex technology transformations with clarity and confidence.",
    linkedin: "https://www.linkedin.com/in/daidre-fanis/",
    expertise: ["Enterprise Applications", "Client Delivery", "Transformation Strategy"],
  },
  {
    name: "Jay Mason",
    title: "Associate Partner",
    photo: "/media/team/jay-mason.png",
    bio: "Jay is an Associate Partner focused on driving successful technology deployments across commercial and public sector industries. He combines technical depth with strong program management to deliver measurable outcomes on M&S's most complex engagements.",
    linkedin: "https://www.linkedin.com/in/jay-mason/",
    expertise: ["Technology Deployment", "Program Management", "Stakeholder Alignment"],
  },
];

export const DIRECTORS: TeamMember[] = [
  {
    name: "Ben Berry",
    title: "Director, Video",
    photo: "/media/team/ben-berry.png",
    bio: "Ben leads M&S's video and media practice, bringing creative strategy and production expertise to client communications, marketing, and digital campaigns.",
    linkedin: "https://www.linkedin.com/in/ben-berry-video/",
    expertise: ["Video Production", "Media Strategy", "Creative Direction"],
  },
  {
    name: "Cody Childers",
    title: "Director, Microsoft & Custom Dev",
    photo: "/media/team/headshot-3.png",
    bio: "Cody leads M&S's Microsoft and custom development practice, delivering Power Platform, Azure, and bespoke software solutions that modernize client operations.",
    linkedin: "https://www.linkedin.com/in/cody-childers/",
    expertise: ["Microsoft Stack", "Custom Development", "Azure"],
  },
  {
    name: "Richard Glass",
    title: "Director, Public Sector",
    photo: "/media/team/headshot-7.png",
    bio: "Richard leads M&S's public sector engagements, bringing decades of experience managing technology programs for federal, state, and local government clients.",
    linkedin: "https://www.linkedin.com/in/richard-glass-consulting/",
    expertise: ["Federal Programs", "Government IT", "Compliance"],
  },
  {
    name: "Hazem Hower",
    title: "Director, Cloud & Infrastructure",
    photo: "/media/team/headshot-2.png",
    bio: "Hazem leads cloud architecture and infrastructure modernization engagements across AWS, Azure, and hybrid environments for M&S clients.",
    linkedin: "https://www.linkedin.com/in/hazem-hower/",
    expertise: ["Cloud Architecture", "AWS", "Infrastructure Modernization"],
  },
  {
    name: "Brandon Jones",
    title: "Director, Branding & Design",
    photo: "/media/team/headshot-1.png",
    bio: "Brandon leads M&S's branding, UX, and design practice, shaping the visual and experiential identity of client products and the M&S brand itself.",
    linkedin: "https://www.linkedin.com/in/brandon-jones-design/",
    expertise: ["Brand Strategy", "UX Design", "Visual Identity"],
  },
  {
    name: "Shruti Karat",
    title: "Director, ERP & Data",
    photo: "/media/team/headshot-8.png",
    bio: "Shruti leads ERP and data practice engagements at M&S, with deep expertise in SAP and Oracle implementations across manufacturing, finance, and public sector clients.",
    linkedin: "https://www.linkedin.com/in/shruti-karat/",
    expertise: ["SAP", "ERP Implementations", "Data Strategy"],
  },
  {
    name: "Jimmy Lutz",
    title: "Director, Client Success",
    photo: "/media/team/jimmy-lutz.png",
    bio: "Jimmy ensures M&S clients see enduring value from every engagement. He oversees client success programs, renewal relationships, and long-term partnership health.",
    linkedin: "https://www.linkedin.com/in/jimmy-lutz/",
    expertise: ["Client Success", "Retention", "Partnership Management"],
  },
  {
    name: "Mark Wittkopp",
    title: "Director, Commercial Business",
    photo: "/media/team/headshot-5.png",
    bio: "Mark leads M&S's commercial business development, expanding the firm's footprint in enterprise, healthcare, and financial services markets.",
    linkedin: "https://www.linkedin.com/in/mark-wittkopp/",
    expertise: ["Business Development", "Enterprise Sales", "Market Expansion"],
  },
  {
    name: "Casey Zaitz",
    title: "Director, PM & Org Transformation",
    photo: "/media/team/headshot-6.png",
    bio: "Casey leads M&S's project management and organizational transformation practice. She specializes in change management, helping clients build lasting capability alongside technology deployments.",
    linkedin: "https://www.linkedin.com/in/casey-zaitz/",
    expertise: ["Change Management", "Org Transformation", "Project Management"],
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
