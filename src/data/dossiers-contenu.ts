import { LIENS_EXTERNES } from "@/data/site";
import type { Locale } from "@/i18n/types";
import type { IdentifiantProjet } from "@/types/projet";

export interface ContenuDossier {
  reference: string;
  titre: string;
  sousTitre: string;
  lienExterne: string | null;
  contexte: string[];
  role: string[];
  tech: string[];
}

const FR: Record<IdentifiantProjet, ContenuDossier> = {
  ocr: {
    reference: "PROJET · APPLICATION WEB",
    titre: "Portail OCR",
    sousTitre:
      "Traitement documentaire, OCR, authentification, quotas et suivi des extractions.",
    lienExterne: null,
    contexte: [
      "Besoin : permettre aux utilisateurs de déposer des documents, lancer une extraction OCR et suivre l'état des traitements.",
      "Enjeu : rendre lisible une chaîne technique (upload, pipeline, crédits) sans exposer sa complexité.",
    ],
    role: [
      "Conception et intégration des interfaces avec Next.js et Tailwind CSS.",
      "Parcours d'authentification, visualisation des conversions et suivi des crédits.",
      "Historique des extractions et états de traitement en direct.",
    ],
    tech: [
      "Next.js — structure applicative et pages.",
      "Tailwind CSS — intégration UI responsive.",
      "API REST — authentification, quotas et statuts d'extraction.",
    ],
  },
  production: {
    reference: "PROJET · APPLICATION MÉTIER",
    titre: "Gestion de production",
    sousTitre:
      "Suivi des tâches, ressources et tableaux de bord de pilotage.",
    lienExterne: null,
    contexte: [
      "Besoin : centraliser le suivi des tâches et des ressources pour les équipes de production.",
      "Enjeu : des tableaux de bord lisibles en un coup d'œil, sans surcharge cognitive.",
    ],
    role: [
      "Développement des interfaces Angular.",
      "Liaison avec les services backend Java.",
      "Organisation des vues de pilotage et des filtres métier.",
    ],
    tech: [
      "Angular — composants et vues métier.",
      "Java / Spring Boot — données et logique backend.",
      "Tableaux de bord — indicateurs d'avancement.",
    ],
  },
  eagence: {
    reference: "PROJET · SITE VITRINE",
    titre: "EAgence / Paymoney",
    sousTitre: "Site vitrine responsive des services Paymoney.",
    lienExterne: null,
    contexte: [
      "Besoin : présenter l'offre Paymoney et faciliter la découverte des services.",
      "Enjeu : inspirer confiance par une hiérarchie visuelle claire et un responsive soigné.",
    ],
    role: [
      "Intégration frontend Next.js.",
      "Respect de la charte et mise en valeur des offres.",
      "Adaptation multi-écrans.",
    ],
    tech: [
      "Next.js",
      "Responsive design",
      "Composants modulaires",
    ],
  },
  ambassade: {
    reference: "PROJET · INSTITUTIONNEL",
    titre: "Digitalisation ambassade RDC / RDA",
    sousTitre:
      "Interfaces web pour la digitalisation institutionnelle.",
    lienExterne: null,
    contexte: [
      "Besoin : moderniser la présentation et les parcours numériques d'un contexte institutionnel.",
      "Enjeu : clarté, accessibilité et cohérence visuelle sur l'ensemble des écrans.",
    ],
    role: [
      "Développement frontend avec Nuxt 3 et TypeScript.",
      "Intégration Tailwind CSS et composants réutilisables.",
      "Structuration des pages et du responsive.",
    ],
    tech: [
      "Nuxt 3",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  mariage: {
    reference: "PROJET · EN PRODUCTION",
    titre: "Invitation de mariage digitale",
    sousTitre: "RSVP, présentation de l'événement et espace mariés.",
    lienExterne: LIENS_EXTERNES.mariage,
    contexte: [
      "Besoin : invitation numérique élégante pour Stéphane et Marie, avec confirmation de présence.",
      "Enjeu : expérience simple et chaleureuse, accessible sur mobile.",
    ],
    role: [
      "Direction artistique et intégration du site.",
      "Module RSVP interactif.",
      "Déploiement en production sur stephane-et-marie.site.",
    ],
    tech: [
      "Next.js / intégration web responsive",
      "Formulaire RSVP",
      "Mise en production",
    ],
  },
};

const EN: Record<IdentifiantProjet, ContenuDossier> = {
  ocr: {
    reference: "PROJECT · WEB APP",
    titre: "OCR Portal",
    sousTitre:
      "Document processing, OCR, authentication, quotas, and extraction tracking.",
    lienExterne: null,
    contexte: [
      "Need: let users upload documents, run OCR extraction, and track processing status.",
      "Challenge: make a technical pipeline (upload, credits, async jobs) feel simple and trustworthy.",
    ],
    role: [
      "UI design and integration with Next.js and Tailwind CSS.",
      "Authentication flows, conversion views, and credit tracking.",
      "Extraction history and live processing states.",
    ],
    tech: [
      "Next.js — app structure and pages.",
      "Tailwind CSS — responsive UI.",
      "REST API — auth, quotas, and extraction status.",
    ],
  },
  production: {
    reference: "PROJECT · BUSINESS APP",
    titre: "Production management",
    sousTitre: "Tasks, resources, and operational dashboards.",
    lienExterne: null,
    contexte: [
      "Need: centralize task and resource tracking for production teams.",
      "Challenge: dashboards that are readable at a glance without cognitive overload.",
    ],
    role: [
      "Angular interface development.",
      "Integration with Java backend services.",
      "Pilot views and business filters.",
    ],
    tech: [
      "Angular — components and business views.",
      "Java / Spring Boot — backend data and logic.",
      "Dashboards — progress indicators.",
    ],
  },
  eagence: {
    reference: "PROJECT · SHOWCASE",
    titre: "EAgence / Paymoney",
    sousTitre: "Responsive showcase for Paymoney services.",
    lienExterne: null,
    contexte: [
      "Need: present Paymoney offerings and ease service discovery.",
      "Challenge: build trust through clear hierarchy and polished responsive layout.",
    ],
    role: [
      "Next.js frontend integration.",
      "Brand-aligned layout and offer presentation.",
      "Multi-device adaptation.",
    ],
    tech: ["Next.js", "Responsive design", "Modular components"],
  },
  ambassade: {
    reference: "PROJECT · INSTITUTIONAL",
    titre: "DRC / RDA embassy digitalization",
    sousTitre: "Web interfaces for institutional digitalization.",
    lienExterne: null,
    contexte: [
      "Need: modernize presentation and digital journeys in an institutional context.",
      "Challenge: clarity, accessibility, and visual consistency across screens.",
    ],
    role: [
      "Frontend development with Nuxt 3 and TypeScript.",
      "Tailwind CSS integration and reusable components.",
      "Page structure and responsive layout.",
    ],
    tech: ["Nuxt 3", "TypeScript", "Tailwind CSS"],
  },
  mariage: {
    reference: "PROJECT · LIVE",
    titre: "Digital wedding invitation",
    sousTitre: "RSVP, event presentation, and couple space.",
    lienExterne: LIENS_EXTERNES.mariage,
    contexte: [
      "Need: an elegant digital invitation for Stéphane and Marie with RSVP.",
      "Challenge: a warm, simple experience on mobile.",
    ],
    role: [
      "Art direction and site integration.",
      "Interactive RSVP module.",
      "Production deployment on stephane-et-marie.site.",
    ],
    tech: [
      "Next.js / responsive web integration",
      "RSVP form",
      "Production deployment",
    ],
  },
};

export function obtenirContenuDossier(
  locale: Locale,
  identifiant: IdentifiantProjet,
): ContenuDossier {
  const table = locale === "en" ? EN : FR;
  return table[identifiant];
}
