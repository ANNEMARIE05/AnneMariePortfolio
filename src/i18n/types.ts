export type Locale = "fr" | "en";

export type ContexteProjet = "professionnel" | "personnel";

export interface EntreeProjetI18n {
  category: string;
  suffix: string;
  contexte: ContexteProjet;
  title: string;
  summary: string;
  role: string;
  tech: string[];
  liveLabel?: string;
}

export interface Messages {
  meta: { htmlLang: string };
  nav: {
    experience: string;
    projects: string;
    education: string;
    about: string;
    contact: string;
    cta: string;
    headerTagline: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    metaName: string;
    metaRole: string;
    titleLine1: string;
    titleAccent: string;
    titleLine2: string;
    statement: string;
    currentJobLabel: string;
    currentJobRole: string;
    currentJobCompany: string;
    currentJobSummary: string;
    currentJobStack: string[];
    ctaProjects: string;
    ctaContact: string;
    ctaWhatsApp: string;
  };
  experience: {
    label: string;
    title: string;
    desc: string;
    present: string;
    stackLabel: string;
    missionsLabel: string;
    items: {
      company: string;
      role: string;
      period: string;
      stack: string[];
      missions: string[];
    }[];
  };
  projects: {
    label: string;
    title: string;
    desc: string;
    badgeProfessional: string;
    badgePersonal: string;
    roleLabel: string;
    techLabel: string;
    details: string;
    caseStudy: string;
    openDetails: string;
    entries: {
      ocr: EntreeProjetI18n;
      production: EntreeProjetI18n;
      eagence: EntreeProjetI18n;
      ambassade: EntreeProjetI18n;
      mariage: EntreeProjetI18n;
    };
  };
  formation: {
    label: string;
    title: string;
    desc: string;
    groupAcademic: string;
    groupTraining: string;
  };
  skills: {
    label: string;
    title: string;
    desc: string;
    categories: { title: string; items: string[] }[];
  };
  about: {
    label: string;
    quote: string;
    quoteEm: string;
    quoteEnd: string;
    domainsLabel: string;
    domains: string[];
    approachLabel: string;
    pillars: { title: string; text: string }[];
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
  contact: {
    label: string;
    title: string;
    lead: string;
    whatsappTitle: string;
    whatsappHint: string;
    send: string;
    copy: string;
    emailLabel: string;
    linkedin: string;
    github: string;
    wedding: string;
    footer: string;
  };
  drawer: {
    tabs: [string, string, string];
    close: string;
    publicProject: string;
    openLive: string;
  };
  scrollTop: string;
  langSwitch: string;
}
