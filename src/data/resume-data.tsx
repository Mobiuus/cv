import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Valentin Courtaud",
  initials: "",
  location: "Paris",
  locationLink: "https://www.google.com/maps/place/Paris",
  about:
    "Student in Corporate Finance at Skema Business School",
  summary: "Interested in tech, healthcare and climate related topics. Democratizing sustainable finance with re.boot. Currently in Erasmus in Sweden.",
  avatarUrl: "https://avatars.githubusercontent.com/u/100689677?s=400&u=86bc6d7f0d189e9af7bbe98b53bd6725242dda3f&v=4",
  personalWebsiteUrl: "https://valentin.vc",
  contact: {
    email: "valentin.courtaud@skema.edu",
    tel: "+330695308946",
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
      school: "Skema Business School",
      degree: "Master in Management - Specialized in Corporate Finance",
      start: "2021",
      end: "20205",
    },
    {
      school: "Saint-Bénigne Highschool",
      degree: "Two-year preparatory course to the competitive admissions of French Business Schools",
      start: "2019",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Klein Blue Partners",
      link: "https://www.linkedin.com/company/klein-blue-partners/",
      badges: ["Internship"],
      title: "Innovation Analyst | Healthtech & Greentech",
      logo: ClevertechLogo,
      start: "July 2023",
      end: "December 2023",
      description:
        "Sourcing, analysing and benchmarking startups to support large companies open innovation policies.Analysis of innovation trends in the health/energy sector and consultancy assignments for our corporate clients.",
    },
    {
      company: "Doctolib",
      link: "https://www.linkedin.com/company/doctolib/",
      badges: ["Internship"],
      title: "Product Operations Analyst",
      logo: JojoMobileLogo,
      start: "January 2023",
      end: "June 2023",
      description:
        "Revise the B2B subscription model's pricing and packaging strategy in France by:Assessing how various medical specialties value and use Doctolib to inform pricing strategies.Developing segment-specific pricing and packages to boost market penetration and ARPU.",
    },
    {
      company: "imicare",
      link: "https://www.linkedin.com/company/imicare/about/",
      badges: ["Internship"],
      title: "Right-Hand CEO",
      logo: ParabolLogo,
      start: "Mai 2022",
      end: "August 2022",
      description:
        "Analysing KPIs, cohorts and implementing dashboards to facilitate company steering & support strategic decisions when it comes to prospecting & acquiring new clients.Launching a referral program: financial and product reflection to obtain an efficient acquisition mode and improve retention & usage measures.",
    },
  ],
  skills: [
    "Project Management",
    "Microsoft Office suite",
    "SQL",
    "No-code tools",
  ],
 projects: [
  {
    title: "re.boot",
    techStack: ["Project Manager"],
    description: "Making sustainable finance the new status quo.",
    logo: ConsultlyLogo, // Ensure 'ConsultlyLogo' is defined or imported correctly
    link: {
      label: "reboot-asso.com",
      href: "https://www.reboot-asso.com/",
    },
  }, // A comma here to separate the objects in the array
  {
    title: "Finance Fresk",
    techStack: ["Facilitator"],
    description: "Raise awareness of the role of finance in the socio-ecological transition.",
    logo: ConsultlyLogo, // Ensure 'ConsultlyLogo' is defined or imported correctly
    link: {
      label: "https://www.linkedin.com/company/fresque-de-la-finance/",
      href: "https://www.linkedin.com/company/fresque-de-la-finance/",
    },
  },
],
} as const;