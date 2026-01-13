import type { Project, Service, Testimonial, NavigationItem } from "./types";

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "badgujarm98@gmail.com",
  phone: "___",
  location: "India",
};

export const NAV_ITEMS: NavigationItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export const SKILLS = {
  frontend: [
    "React.js",
    "HTML/CSS/JS",
    "Material UI",
    "Tailwind CSS",
    "Framer Motion",
  ],
  backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT Auth"],
  mobile: ["React Native", "Java (Android UI)"],
  automation: ["n8n workflow automation"],
  other: ["Git", "Deployment", "API integrations"],
};

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Modern MERN stack websites, dashboards, portals, and SEO-ready business websites.",
    icon: "Globe",
    features: [
      "Single Page Applications",
      "Admin Dashboards",
      "E-commerce Solutions",
      "Performance Optimization",
    ],
  },
  {
    id: "app-dev",
    title: "Mobile App Development",
    description:
      "React Native apps, Android Java apps, UI/UX responsive layout, API-connected apps.",
    icon: "Smartphone",
    features: [
      "Cross-Platform (iOS/Android)",
      "Native UI/UX",
      "Offline Capabilities",
      "App Store Deployment",
    ],
  },
  {
    id: "automation",
    title: "Automation (n8n)",
    description:
      "YouTube automation, content pipeline automation, business process automation, and API workflows.",
    icon: "Workflow",
    features: [
      "Workflow Design",
      "Third-party Integrations",
      "Data Pipelines",
      "Scheduled Tasks",
    ],
  },
  {
    id: "api-dev",
    title: "API Development",
    description:
      "Secure Node.js APIs, authentication, role-based systems, and enterprise-level backend logic.",
    icon: "Server",
    features: [
      "RESTful APIs",
      "GraphQL",
      "Secure Authentication",
      "Database Design",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Government Schemes Platform",
    category: "Web Development",
    description:
      "A multilingual platform helping citizens access various government schemes with ease.",
    image: "https://picsum.photos/800/600?random=1",
    technologies: ["React", "Node.js", "MongoDB", "i18next"],
  },
  {
    id: "2",
    title: "Weather Application",
    category: "Web Development",
    description: "Real-time weather forecasting tool with interactive maps.",
    image: "https://picsum.photos/800/600?random=5",
    technologies: ["React", "OpenWeatherMap API", "Chart.js"],
  },
  {
    id: "3",
    title: "Task Management App",
    category: "Web Development",
    description:
      "Robust REST API for team task tracking with role-based access control.",
    image: "https://picsum.photos/800/600?random=6",
    technologies: ["Node.js", "Express", "MongoDBL", "React"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "Project Manager",
    text: "Mahesh delivered our project with excellent quality and clear communication. The automation saved us hours every week.",
  },
  {
    id: "2",
    name: "Rahul Sharma",
    role: "Startup Founder",
    text: "Highly skilled developer — fast, reliable, and knowledgeable. The mobile app UI exceeded our expectations.",
  },
];
