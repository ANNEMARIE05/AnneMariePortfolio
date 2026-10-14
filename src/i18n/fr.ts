import type { Messages } from "@/i18n/types";

export const fr: Messages = {
  meta: { htmlLang: "fr" },
  nav: {
    experience: "Expérience",
    projects: "Projets",
    education: "Formation",
    about: "À propos",
    contact: "Contact",
    cta: "Me contacter",
    headerTagline:
      "Analyste programmeuse chez NGSER · Développeuse frontend",
    menuOpen: "Ouvrir le menu de navigation",
    menuClose: "Fermer le menu de navigation",
  },
  hero: {
    metaName: "Anne Marie Agbonou",
    metaRole: "Développeuse frontend",
    titleLine1: "Je transforme les idées en interfaces web",
    titleAccent: "claires,",
    titleLine2: "utiles et soignées.",
    statement:
      "Je conçois des expériences web claires et soignées, en alliant rigueur technique et sensibilité visuelle.",
    currentJobLabel: "Expérience actuelle · Depuis août 2025",
    currentJobRole: "Analyste programmeuse",
    currentJobCompany: "NGSER",
    currentJobSummary:
      "Développement d'applications web, réalisation d'interfaces de gestion et participation aux évolutions et corrections de solutions métier.",
    currentJobStack: [
      "Angular",
      "Java / Spring Boot",
      "API REST",
      "Docker",
    ],
    ctaProjects: "Voir mes réalisations",
    ctaContact: "Me contacter",
    ctaWhatsApp: "Me contacter sur WhatsApp",
  },
  experience: {
    label: "Expérience",
    title: "Parcours professionnel",
    desc: "Un poste confirmé en environnement technique exigeant, au service d'applications métier et d'interfaces soignées.",
    present: "Depuis août 2025",
    stackLabel: "Environnement technique",
    missionsLabel: "Missions confirmées",
    items: [
      {
        company: "NGSER",
        role: "Analyste programmeuse",
        period: "Depuis août 2025",
        stack: [
          "Angular",
          "Java / Spring Boot",
          "Docker & Docker Compose",
          "API REST",
        ],
        missions: [
          "Développement d'applications web.",
          "Réalisation d'interfaces de gestion.",
          "Participation aux évolutions et corrections de solutions métier.",
        ],
      },
    ],
  },
  projects: {
    label: "Projets",
    title: "Réalisations sélectionnées",
    desc: "Réalisations professionnelles et projets personnels — présentés sans éléments confidentiels ni captures internes.",
    badgeProfessional: "Projet professionnel",
    badgePersonal: "Projet personnel",
    roleLabel: "Mon rôle",
    techLabel: "Technologies",
    details: "Voir les détails",
    caseStudy: "Étude de cas",
    openDetails: "Ouvrir la fiche détaillée du projet",
    entries: {
      ocr: {
        category: "Application web",
        suffix: "Traitement documentaire",
        contexte: "professionnel",
        title: "Portail OCR",
        summary:
          "Plateforme de traitement documentaire : extraction OCR, authentification, gestion des quotas et crédits, suivi des extractions.",
        role: "Conception et intégration des interfaces Next.js et Tailwind CSS : authentification, suivi des conversions, crédits et historique.",
        tech: ["Next.js", "Tailwind CSS", "Authentification", "OCR"],
      },
      production: {
        category: "Application métier",
        suffix: "Pilotage de production",
        contexte: "professionnel",
        title: "Gestion de production",
        summary:
          "Suivi des tâches, avancement, ressources et tableaux de bord de pilotage.",
        role: "Interfaces Angular connectées au backend Java, tableaux de bord pensés pour un usage quotidien.",
        tech: ["Angular", "Java", "Tableaux de bord"],
      },
      eagence: {
        category: "Site vitrine",
        suffix: "Paymoney",
        contexte: "professionnel",
        title: "EAgence",
        summary:
          "Site vitrine responsive des services Paymoney : présenter l'offre et faciliter la découverte.",
        role: "Intégration Next.js, charte visuelle, hiérarchie des offres et responsive soigné.",
        tech: ["Next.js", "Responsive design", "Site vitrine"],
      },
      ambassade: {
        category: "Application web",
        suffix: "Institutionnel",
        contexte: "professionnel",
        title: "Digitalisation ambassade RDC / RDA",
        summary:
          "Projet de digitalisation institutionnelle avec interfaces modernes et parcours utilisateur structurés.",
        role: "Développement frontend avec Nuxt 3, TypeScript et Tailwind CSS : composants, responsive et intégration.",
        tech: ["Nuxt 3", "TypeScript", "Tailwind CSS"],
      },
      mariage: {
        category: "Projet personnel",
        suffix: "En production",
        contexte: "personnel",
        title: "Invitation de mariage digitale",
        summary:
          "Site d'invitation avec présentation de l'événement, RSVP et espace dédié aux mariés.",
        role: "Direction artistique, module RSVP interactif et déploiement sur stephane-et-marie.site.",
        tech: ["Next.js", "RSVP", "Déploiement"],
        liveLabel: "Voir le site en ligne",
      },
    },
  },
  formation: {
    label: "Formation",
    title: "Parcours de formation",
    desc: "Diplômes, certifications et formations qui structurent mon profil de développeuse.",
    groupAcademic: "Parcours académique",
    groupTraining: "Formations complémentaires",
  },
  skills: {
    label: "Compétences",
    title: "Ce que je maîtrise",
    desc: "Frontend, langages web et pratiques d'équipe pour livrer des interfaces fiables.",
    categories: [
      { title: "Frontend", items: ["React", "Next.js", "Angular"] },
      {
        title: "Langages",
        items: ["JavaScript", "TypeScript", "HTML", "CSS", "Java"],
      },
      {
        title: "UI & intégration",
        items: ["Tailwind CSS", "Responsive design", "Composants réutilisables"],
      },
      {
        title: "Outils & pratiques",
        items: ["Git", "Docker", "Intégration d'API", "Collaboration en équipe"],
      },
    ],
  },
  about: {
    label: "À propos",
    quote: "Ce qui me plaît dans le développement web, c'est de partir d'une idée ou d'un besoin et de lui donner vie à travers",
    quoteEm: "une interface",
    quoteEnd: "claire et soignée.",
    domainsLabel: "Ce que je conçois",
    domains: [
      "Applications métier",
      "Interfaces de gestion",
      "Sites vitrines",
      "Projets web créatifs",
    ],
    approachLabel: "Mon approche",
    pillars: [
      {
        title: "Clarté d'usage",
        text: "Structurer l'information pour que chaque parcours soit évident, sans friction inutile.",
      },
      {
        title: "Soin du détail",
        text: "Typographie, espacements et transitions traités avec précision pour inspirer confiance.",
      },
      {
        title: "Rigueur technique",
        text: "Composants réutilisables, intégration d'API fiable et bases de code maintenables.",
      },
    ],
    p1: "Je suis Anne Marie Agbonou, développeuse frontend et analyste programmeuse.",
    p2: "J'aime autant réfléchir à l'organisation d'une page qu'à ses interactions et à ses détails visuels. Pour moi, une bonne interface ne doit pas seulement être belle : elle doit être claire, agréable et répondre à un vrai besoin.",
    p3: "Au fil de mes expériences, j'ai travaillé sur des applications métier, des interfaces de gestion et des projets web plus créatifs.",
    p4: "Aujourd'hui, je continue à approfondir mes compétences tout en développant ma propre approche du frontend : créer des interfaces utiles, cohérentes et avec une vraie personnalité.",
  },
  contact: {
    label: "Contact",
    title: "Un projet en tête ?",
    lead: "Échangeons sur une opportunité professionnelle, une collaboration ou un projet web.",
    whatsappTitle: "Me contacter sur WhatsApp",
    whatsappHint: "Pour un échange rapide",
    send: "Envoyer un message",
    copy: "Copier l'adresse email",
    emailLabel: "Email professionnel",
    linkedin: "LinkedIn ↗",
    github: "GitHub ↗",
    wedding: "Projet mariage ↗",
    footer:
      "© 2026 Anne Marie Agbonou · Développeuse frontend & analyste programmeuse",
  },
  drawer: {
    tabs: [
      "1. Contexte & besoin",
      "2. Mon rôle",
      "3. Technologies",
    ],
    close: "Fermer la fiche projet",
    publicProject: "Projet consultable en ligne :",
    openLive: "Ouvrir le site",
  },
  scrollTop: "Remonter en haut de page",
  langSwitch: "Changer la langue du site",
};
