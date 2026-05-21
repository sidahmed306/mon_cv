export type Lang = "fr" | "en";

export type Translations = {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    tagline: string[];
    cta_projects: string;
    cta_contact: string;
    cta_cv: string;
  };
  about: {
    title: string;
    command: string;
    bio: string;
    stats: {
      projects: string;
      experience: string;
      coffee: string;
      learning: string;
    };
  };
  skills: {
    title: string;
    command: string;
    categories: {
      languages: string;
      frontend: string;
      backend: string;
      database: string;
      tools: string;
    };
  };
  projects: {
    title: string;
    command: string;
    view_live: string;
    view_code: string;
    tech: string;
  };
  education: {
    title: string;
    command: string;
    current: string;
    degree: string;
    school: string;
    year: string;
    description: string;
  };
  contact: {
    title: string;
    command: string;
    intro: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    direct: string;
  };
  terminal: {
    welcome: string;
    prompt: string;
    help_intro: string;
    commands: Record<string, string>;
    not_found: string;
    try_help: string;
  };
  footer: {
    built: string;
    and: string;
    by: string;
    rights: string;
  };
};

export const translations: Record<Lang, Translations> = {
  fr: {
    nav: {
      home: "accueil",
      about: "à-propos",
      skills: "compétences",
      projects: "projets",
      education: "formation",
      contact: "contact",
    },
    hero: {
      greeting: "// Bonjour, je suis",
      role: "Full-Stack Developer",
      tagline: [
        "Je construis des applications web modernes.",
        "Discipline avancée, esprit d'équipe.",
        "Basé à Nouakchott, Mauritanie.",
      ],
      cta_projects: "voir_les_projets",
      cta_contact: "me_contacter",
      cta_cv: "télécharger_cv",
    },
    about: {
      title: "À propos",
      command: "cat about.md",
      bio: "Développeur Full-Stack avec une discipline avancée et un fort esprit d'équipe. Étudiant en 2ème année en Informatique de Gestion à l'université. Je conçois et développe des applications web modernes, performantes et accessibles. Toujours en quête d'apprentissage et de nouveaux défis techniques.",
      stats: {
        projects: "Projets livrés",
        experience: "Années d'expérience",
        coffee: "Cafés bus",
        learning: "Toujours en apprentissage",
      },
    },
    skills: {
      title: "Compétences",
      command: "ls ./skills",
      categories: {
        languages: "Langages",
        frontend: "Frontend",
        backend: "Backend",
        database: "Bases de données",
        tools: "Outils",
      },
    },
    projects: {
      title: "Projets",
      command: "ls ./projects",
      view_live: "voir_live",
      view_code: "voir_code",
      tech: "Technologies",
    },
    education: {
      title: "Formation",
      command: "cat education.md",
      current: "En cours",
      degree: "Licence en Informatique de Gestion",
      school: "Université — Nouakchott, Mauritanie",
      year: "2ème année",
      description: "Formation universitaire combinant développement logiciel, bases de données, gestion d'entreprise et systèmes d'information.",
    },
    contact: {
      title: "Contact",
      command: "./contact.sh",
      intro: "Vous avez un projet ? Une opportunité ? Discutons.",
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      send: "envoyer_message",
      sending: "envoi_en_cours...",
      success: "✓ Message envoyé avec succès !",
      error: "✗ Erreur lors de l'envoi. Réessayez.",
      direct: "// ou contactez-moi directement :",
    },
    terminal: {
      welcome: "Bienvenue sur le terminal interactif. Tapez 'help' pour voir les commandes.",
      prompt: "sidahmed@portfolio:~$",
      help_intro: "Commandes disponibles :",
      commands: {
        help: "afficher cette aide",
        about: "à propos de moi",
        skills: "mes compétences",
        projects: "mes projets",
        contact: "informations de contact",
        education: "ma formation",
        clear: "effacer le terminal",
        whoami: "qui suis-je",
        socials: "mes réseaux sociaux",
        cv: "télécharger mon CV",
      },
      not_found: "Commande introuvable :",
      try_help: "Tapez 'help' pour voir les commandes disponibles.",
    },
    footer: {
      built: "Construit avec",
      and: "et",
      by: "par",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "home",
      about: "about",
      skills: "skills",
      projects: "projects",
      education: "education",
      contact: "contact",
    },
    hero: {
      greeting: "// Hello, I'm",
      role: "Full-Stack Developer",
      tagline: [
        "I build modern web applications.",
        "Advanced discipline, team spirit.",
        "Based in Nouakchott, Mauritania.",
      ],
      cta_projects: "view_projects",
      cta_contact: "contact_me",
      cta_cv: "download_cv",
    },
    about: {
      title: "About",
      command: "cat about.md",
      bio: "Full-Stack Developer with advanced discipline and strong team spirit. 2nd-year university student in Management Computing. I design and build modern, performant and accessible web applications. Always looking to learn and tackle new technical challenges.",
      stats: {
        projects: "Projects delivered",
        experience: "Years of experience",
        coffee: "Cups of coffee",
        learning: "Always learning",
      },
    },
    skills: {
      title: "Skills",
      command: "ls ./skills",
      categories: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        database: "Databases",
        tools: "Tools",
      },
    },
    projects: {
      title: "Projects",
      command: "ls ./projects",
      view_live: "view_live",
      view_code: "view_code",
      tech: "Tech stack",
    },
    education: {
      title: "Education",
      command: "cat education.md",
      current: "In progress",
      degree: "Bachelor in Management Computing",
      school: "University — Nouakchott, Mauritania",
      year: "2nd year",
      description: "University degree combining software development, databases, business management and information systems.",
    },
    contact: {
      title: "Contact",
      command: "./contact.sh",
      intro: "Got a project? An opportunity? Let's talk.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "send_message",
      sending: "sending...",
      success: "✓ Message sent successfully!",
      error: "✗ Error sending. Please retry.",
      direct: "// or contact me directly:",
    },
    terminal: {
      welcome: "Welcome to the interactive terminal. Type 'help' to see available commands.",
      prompt: "sidahmed@portfolio:~$",
      help_intro: "Available commands:",
      commands: {
        help: "show this help",
        about: "about me",
        skills: "my skills",
        projects: "my projects",
        contact: "contact info",
        education: "my education",
        clear: "clear the terminal",
        whoami: "who am I",
        socials: "my social links",
        cv: "download my CV",
      },
      not_found: "Command not found:",
      try_help: "Type 'help' to see available commands.",
    },
    footer: {
      built: "Built with",
      and: "and",
      by: "by",
      rights: "All rights reserved.",
    },
  },
};
