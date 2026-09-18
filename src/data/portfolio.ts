export const profile = {
  name: "Le Phu Cuong",
  major: "Software Engineering",
  objective: "Becoming a Professional Software Engineering",
  email: "cuongle6105@gmail.com",
  github: "https://github.com/wukairo",
  linkedin: "https://linkedin.com/in/cuongle05",
  location: "Tan Hoa Ward, Ho Chi Minh City, Vietnam",
  resumeUrl: "/cv/LePhuCuong_SoftwareDeveloper_Intern.pdf",
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
  { title: "Languages", skills: ["Java", "JavaScript", "C++", "TypeScript"] },
  { title: "Frontend", skills: ["Angular", "React", "Handlebars", "Bootstrap", "HTML", "CSS"] },
  { title: "Backend", skills: ["Spring Boot", "Spring Data JPA", "Spring Security", "Spring WebSockets", "Node.js", "Express.js"] },
  { title: "Databases", skills: ["PostgreSQL", "MySQL", "SQL Server"] },
  { title: "Engineering", skills: ["JUnit", "Mockito", "Docker", "Microservices", "Design Patterns", "Agile"] },
] as const;

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  period: string;
  role: string;
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Docommunity",
    description: "A real-time collaborative Markdown document platform with context-aware AI assistants, role-based access control, live synchronization, version control, and a community sharing feed.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "WebSockets", "OpenRouter API", "Docker", "JWT"],
    period: "Oct 2025 - Jan 2026",
    role: "Fullstack Developer - Team of 5",
    githubUrl: "https://github.com/wukairo/Docommunity",
  },
  {
    title: "Online Auction",
    description: "A full-featured auction platform with concurrent bidding, AI-assisted product listings and discovery, post-auction workflows, watchlists, and role-based access control.",
    technologies: ["Node.js", "Express.js", "Handlebars", "PostgreSQL", "Knex.js", "OpenRouter API"],
    period: "Oct 2025 - Dec 2025",
    role: "Fullstack Developer - Team of 2",
    githubUrl: "https://github.com/AkiraTomori/Online-Auction",
  },
  {
    title: "Comic Reader",
    description: "A full-stack comic reading platform with an Android client, Spring Boot API, offline support, and AI microservices for an end-to-end manga translation pipeline.",
    technologies: ["Java 21", "Spring Boot", "Android", "FastAPI", "Docker", "PostgreSQL", "Firebase", "ONNX"],
    period: "Mar 2026 - Jun 2026",
    role: "Fullstack Developer - Team of 5",
    githubUrl: "https://github.com/wukairo/ComicReader",
  },
];

export const education = {
  school: "VNU-HCM University of Science (HCMUS)",
  program: "Bachelor of Science in Software Engineering",
  period: "Oct 2023 - Present · Expected 2027",
  coursework: "Third-year student · GPA: 8.67/10.00",
} as const;
