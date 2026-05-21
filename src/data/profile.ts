export const profile = {
  name: "Sidahmed Berraye",
  username: "sidahmed",
  role: "Full-Stack Developer",
  location: "Nouakchott, Mauritanie",
  birthdate: "31/08/2005",
  email: "sidahmedmed87@gmail.com",
  phone: "+222 38075450",
  whatsapp: "+22238075450",
  linkedin: "https://www.linkedin.com/in/sidahmed-dev-82b75b3b2",
  github: "https://github.com/sidahmed306",
  githubUser: "sidahmed306",
  // Set to the path of your photo once you drop it in /public,
  // e.g. "/photo_portfolio.jpg". Leave null to show the generated initials placeholder.
  photoUrl: "/photo_portfolio.jpg" as string | null,
  cvUrl: "/Sidahmed_Berraye_CV.pdf",
  cvFileName: "Sidahmed_Berraye_CV.pdf",
};

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export const skills: {
  category: "languages" | "frontend" | "backend" | "database" | "tools";
  name: string;
  level: SkillLevel;
  color: string;
}[] = [
    // Frontend / Languages
    { category: "frontend", name: "React", level: 5, color: "#61dafb" },
    { category: "frontend", name: "Next.js", level: 5, color: "#ffffff" },
    { category: "frontend", name: "TypeScript", level: 5, color: "#3178c6" },
    { category: "frontend", name: "JavaScript", level: 5, color: "#f7df1e" },
    { category: "frontend", name: "Tailwind CSS", level: 5, color: "#38bdf8" },
    { category: "frontend", name: "HTML / CSS", level: 5, color: "#e34f26" },
    { category: "frontend", name: "Vue.js", level: 3, color: "#42b883" },

    // Backend / Languages
    { category: "backend", name: "Laravel", level: 4, color: "#ff2d20" },
    { category: "backend", name: "PHP", level: 4, color: "#777bb4" },
    { category: "backend", name: "Node.js", level: 4, color: "#7fdf64" },
    { category: "languages", name: "Java", level: 4, color: "#f89820" },
    { category: "languages", name: "C", level: 3, color: "#a8b9cc" },
    { category: "languages", name: "C#", level: 3, color: "#9b4f96" },
    { category: "languages", name: "Python", level: 3, color: "#3776ab" },

    // Database
    { category: "database", name: "Supabase", level: 5, color: "#3ecf8e" },
    { category: "database", name: "PostgreSQL", level: 4, color: "#336791" },
    { category: "database", name: "MySQL", level: 4, color: "#4479a1" },
    { category: "database", name: "MongoDB", level: 3, color: "#47a248" },

    // Tools
    { category: "tools", name: "Git / GitHub", level: 5, color: "#f1502f" },
    { category: "tools", name: "VS Code", level: 5, color: "#0078d4" },
    { category: "tools", name: "Vercel", level: 5, color: "#ffffff" },
    { category: "tools", name: "Figma", level: 3, color: "#a259ff" },
  ];

export const projects = [
  {
    name: "Mauritanie Concierge",
    slug: "mauritanie-concierge",
    description: {
      fr: "Plateforme de tourisme premium en Mauritanie. Réservation de circuits, gestion d'avis, espace administrateur multilingue.",
      en: "Premium tourism platform for Mauritania. Tour booking, reviews management, multilingual admin space.",
    },
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://mauritanieconcierge.com",
    githubUrl: null,
    featured: true,
    year: "2025",
  },
  {
    name: "Gestion Élèves",
    slug: "gestion-eleves",
    description: {
      fr: "Système de gestion scolaire complet : suivi des élèves, notes, absences et bulletins automatisés.",
      en: "Complete school management system: student tracking, grades, attendance and automated reports.",
    },
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    liveUrl: "https://gestion-eleves.vercel.app",
    githubUrl: null,
    featured: true,
    year: "2025",
  },
  {
    name: "Resto Manager",
    slug: "resto-test",
    description: {
      fr: "Application de gestion de restaurant : menus, commandes, tables et statistiques en temps réel.",
      en: "Restaurant management app: menus, orders, tables and real-time statistics.",
    },
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    liveUrl: "https://resto-test.vercel.app",
    githubUrl: null,
    featured: true,
    year: "2025",
  },
  {
    name: "Social Commerce MR",
    slug: "social-commerce",
    description: {
      fr: "Sous-application de e-commerce social mauritanien intégrée à un écosystème plus large : produits, vendeurs, paiements.",
      en: "Mauritanian social e-commerce sub-app integrated into a larger ecosystem: products, sellers, payments.",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://social-commercemr.vercel.app",
    githubUrl: null,
    featured: true,
    year: "2025",
  },
];

export const languagesSpoken = [
  { name: "Arabe", nameEn: "Arabic", code: "AR", level: "Natif", levelEn: "Native" },
  { name: "Français", nameEn: "French", code: "FR", level: "Courant", levelEn: "Fluent" },
  { name: "Anglais", nameEn: "English", code: "EN", level: "Intermédiaire", levelEn: "Intermediate" },
];
