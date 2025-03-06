import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Valentin Courtaud",
  initials: "VC",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/Paris",
  about: "MiM & Msc in Finance at Skema BS",
  summary:
    "Interested in tech, healthcare and climate related topics.\n" +
    "Democratizing sustainable finance with re.boot.\n" +
    "Looking for impact!",
  avatarUrl: "https://avatars.githubusercontent.com/u/100689677?s=400&u=86bc6d7f0d189e9af7bbe98b53bd6725242dda3f&v=4",
  personalWebsiteUrl: "https://valentin.vc",
  contact: {
    email: "valentin.courtaud@skema.edu",
    tel: "+33695308946",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/valentin-courtaud/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "SKEMA Business School",
      degree: "MSc Corporate Financial Management (Financial Advisory) - Master in Management (MiM)",
      start: "September 2021",
      end: "June 2025",
    },
    {
      school: "Fundação Dom Cabral",
      degree: "MSc Corporate Financial Management - Exchange Semester",
      start: "September 2024",
      end: "December 2024",
    },
    {
      school: "Jönköping International Business School",
      degree: "Master in Management - Exchange Semester",
      start: "January 2024",
      end: "June 2024",
    },
    {
      school: "Saint-Bénigne Highschool",
      degree: "Preparatory Classes to the competitive exams of French Business Schools (ECE)",
      start: "2019",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Klein Blue Partners",
      link: "https://www.linkedin.com/company/klein-blue-partners/",
      badges: ["Internship"],
      title: "Innovation Analyst Intern",
      start: "July 2023",
      end: "December 2023",
      description:
        "• Conducted in-depth market analysis and consultancy assignments for 3 major healthcare clients (Pfizer, AstraZeneca, Vyv Group), delivering actionable insights that influenced their innovation & investment strategies.\n" +
        "• Led comprehensive analysis of European healthcare innovation trends and developed monthly newsletters for corporate clients, synthesizing trends across biotech, medtech, AI, and e-health sectors.\n" +
        "• Co-authored strategic healthcare publication on patient journey digitalization generating 20+ qualified enterprise leads and leading to 2 new client engagements.",
    },
    {
      company: "Doctolib",
      link: "https://www.linkedin.com/company/doctolib/",
      badges: ["Internship"],
      title: "Product Strategy Analyst Intern",
      start: "January 2023",
      end: "June 2023",
      description:
        "• Analyzed B2B subscription model and conducted value-metric assessment across medical specialties to inform pricing strategy redesign for French market.\n\n\n" +
        "• Performed comprehensive willingness-to-pay analysis across medical specialties, identifying optimal pricing thresholds and value drivers.\n\n\n" +
        "• Designed specialty-specific pricing packages projected to increase ARPU while boosting market penetration targets.",
    },
    {
      company: "imicare",
      link: "https://www.linkedin.com/company/imicare/",
      badges: ["Internship"],
      title: "Right-hand CEO Intern - Station F - Incubator 42",
      start: "May 2022",
      end: "August 2022",
      description:
        "• Developed comprehensive KPI dashboards tracking user growth and cohort retention, enabling data-driven decisions on go-to-market strategy.\n\n\n" +
        "• Restructured customer referral program through product and financial analysis, achieving 3x acquisition growth.\n\n\n" +
        "• Implemented no-code automation systems across sales and operations functions, increasing team productivity by saving 12 hours weekly.",
    },
  ],
  skills: [
    "SQL",
    "Microsoft Suite (Excel)",
    "Power BI",
    "Jira",
    "Hubspot",
    "Airtable",
    "Make",
    "Zapier",
  ],
  projects: [
    {
      title: "re.boot",
      techStack: ["Project Manager"],
      description: "Co-led sustainability finance bootcamps, training 150+ students and young professionals, coordinating 9-week programs with leading industry experts.",
      link: {
        label: "reboot-asso.com",
        href: "https://www.reboot-asso.com/",
      },
    },
    {
      title: "Finance Fresk",
      techStack: ["Facilitator"],
      description: "Raise awareness of the role of finance in the socio-ecological transition.",
      link: {
        label: "fresquedelafinance.org",
        href: "https://fresquedelafinance.org/",
      },
    },
  ],
  languages: [
    {
      name: "French",
      level: "Native",
    },
    {
      name: "English",
      level: "C1 - Advanced - 617 TOEFL ITP",
    },
    {
      name: "Spanish",
      level: "B2 - Intermediate",
    },
  ],
  interests: ["Hiking", "Chess", "Horology", "Impressionism"],
} as const;