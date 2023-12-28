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
    "Full Stack Engineer focused on building products with extra attention to details",
  summary:
    "Student in Corporate Finance at Skema Business School. Interested in tech, healthcare and climate related topics. Currently in Erasmus in Sweden.",
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQEt0Q9YIq5APg/profile-displayphoto-shrink_400_400/0/1691239241980?e=1709164800&v=beta&t=bURNZZntMOroHe3S4lI38__MD6kMJiXkDbMHqPnyhkQ",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "valentin.courtaud@skema.edu",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
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
        "Sourcing, analysing and benchmarking startups to support large companies open innovation policies. Analysis of innovation trends in the health/energy sector and consultancy assignments for our corporate clients.",
    },
    {
      company: "Doctolib",
      link: "https://www.linkedin.com/company/doctolib/",
      badges: [Internship],
      title: "Product Operations Analyst",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "Revise the B2B subscription model's pricing and packaging strategy in France by: Assessing how various medical specialties value and use Doctolib to inform pricing strategies. Developing segment-specific pricing and packages to boost market penetration and ARPU.",
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
        "Analysing KPIs, cohorts and implementing dashboards to facilitate company steering & support strategic decisions when it comes to prospecting & acquiring new clients. Launching a referral program: financial and product reflection to obtain an efficient acquisition mode and improve retention & usage measures.",
    },
  ],
  Knowledge: [
    "Tech ecosystem",
    "Healthcare ecosystem",
    "Sustainable finance ecosystem",
    "Project Management",
    "Microsoft Office suite",
    "No-code tools",
  ],
  projects: [
    {
      title: "re.boot",
      techStack: [
        "Associative Project",
      ],
      description: "Democratizing sustainable finance",
      logo: ConsultlyLogo,
      link: {
        label: "reboot-asso.com",
        href: "https://www.reboot-asso.com/",
      },
    },
  ],
} as const;