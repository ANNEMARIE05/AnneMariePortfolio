import { LIENS_EXTERNES } from "@/data/site";
import {
  TEXTE_A_COMPLETER,
  type EtudeCas,
  type SlugEtudeCas,
} from "@/types/etude-cas";

const PLACEHOLDER_GALERIE: EtudeCas["galerie"] = [
  {
    type: "placeholder",
    legende:
      "Captures d'écran réelles de l'interface — À compléter (ne pas substituer par des visuels fictifs).",
  },
];

export const ETUDES_CAS: EtudeCas[] = [
  {
    slug: "portail-ocr",
    identifiant: "ocr",
    numeroFolio: "01",
    reference: "DOSSIER // 01 — APPLICATION WEB",
    categorieLibelle: "APPLICATION WEB",
    categorieSuffixe: "TRAITEMENT DOCUMENTAIRE & QUOTAS",
    accent: "orange",
    titre: "Portail OCR",
    chapo:
      "Plateforme de traitement documentaire avec extraction OCR, authentification, gestion des quotas, achat de crédits et suivi des extractions.",
    seo: {
      titre: "Étude de cas — Portail OCR | Anne Marie Agbonou",
      description:
        "Conception frontend Next.js et Tailwind CSS pour une plateforme OCR : parcours utilisateur, crédits, quotas et suivi des extractions.",
    },
    visuelHero: { type: "plaque", identifiant: "ocr" },
    contexte: [
      "Projet orienté traitement documentaire : rendre accessible la numérisation et l'extraction automatisée de données textuelles contenues dans des documents variés.",
      "L'application intègre un contrôle des quotas d'utilisation et des packs de crédits côté produit.",
    ],
    probleme: [
      "Besoin métier : permettre aux utilisateurs d'accéder à une chaîne OCR (chargement, traitement, extraction) sans exposer la complexité technique.",
      "Enjeu d'usage : transformer un pipeline asynchrone en interface limpide, rassurante et immédiate à utiliser.",
    ],
    role: [
      "Conception et intégration des interfaces utilisateur sous Next.js et Tailwind CSS.",
      "Structuration du parcours : authentification, zone de glisser-déposer de documents et tableau récapitulatif des extractions.",
      "Mise en valeur pédagogique du solde de crédits et des statuts de traitement en temps réel.",
      "Adaptation responsive sur l'ensemble des formats d'écrans.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "JavaScript / TypeScript",
      "Intégration d'API REST",
    ],
    fonctionnalites: [
      "Authentification utilisateur.",
      "Chargement de documents (dont glisser-déposer).",
      "Extraction OCR et suivi des statuts de traitement.",
      "Visualisation du solde de crédits et gestion des quotas / achat de crédits.",
      "Historique ou tableau récapitulatif des extractions.",
    ],
    choixInterface: [
      "Hiérarchiser les états de conversion documentaire pour rassurer l'utilisateur pendant le traitement.",
      "Rendre visibles crédits et quotas sans surcharge cognitive.",
      "Responsive design pour conserver la lisibilité des tableaux et formulaires.",
    ],
    defisTechniques: [TEXTE_A_COMPLETER],
    galerie: PLACEHOLDER_GALERIE,
    liens: {
      demonstration: TEXTE_A_COMPLETER,
      depot: TEXTE_A_COMPLETER,
    },
    slugSuivant: "gestion-production",
  },
  {
    slug: "gestion-production",
    identifiant: "production",
    numeroFolio: "02",
    reference: "DOSSIER // 02 — APPLICATION MÉTIER",
    categorieLibelle: "APPLICATION MÉTIER",
    categorieSuffixe: "PILOTAGE INDUSTRIEL & RESSOURCES",
    accent: "sauge",
    titre: "Gestion de Production",
    chapo:
      "Application de suivi des tâches, de l'avancement opérationnel, des ressources et de tableaux de bord de pilotage.",
    seo: {
      titre: "Étude de cas — Gestion de Production | Anne Marie Agbonou",
      description:
        "Interfaces Angular et tableaux de bord de pilotage pour le suivi de production, en liaison avec un backend Java.",
    },
    visuelHero: { type: "plaque", identifiant: "production" },
    contexte: [
      "Application métier destinée aux équipes de production pour centraliser le suivi opérationnel.",
      "Contexte organisationnel et données métier détaillées : À compléter (information non publiée dans le portfolio).",
    ],
    probleme: [
      "Besoin métier : superviser les tâches en cours, affecter les ressources matérielles et humaines, repérer les goulets d'étranglement.",
      "Enjeu d'usage : éviter la dispersion d'informations grâce à des tableaux de bord lisibles en un coup d'œil.",
    ],
    role: [
      "Développement des interfaces avec Angular, en synchronisation avec les contrôleurs backend Java.",
      "Mise en place de tableaux de bord avec indicateurs d'état d'avancement des commandes.",
      "Conception de modules de gestion et de répartition des ressources de production.",
      "Attention à l'intégrité des données affichées et à la prévention des erreurs de manipulation.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Composants de visualisation de données (dataviz)",
    ],
    fonctionnalites: [
      "Suivi des tâches et de l'avancement opérationnel.",
      "Tableaux de bord de pilotage.",
      "Gestion et répartition des ressources (humaines et matérielles).",
      "Vues d'état d'avancement des commandes.",
    ],
    choixInterface: [
      "Organisation des tableaux de bord pour limiter la surcharge cognitive des gestionnaires d'atelier.",
      "Présentation ordonnée des métriques et statuts d'avancement.",
      "Cohérence des flux de saisie et de consultation avec la logique métier.",
    ],
    defisTechniques: [TEXTE_A_COMPLETER],
    galerie: PLACEHOLDER_GALERIE,
    liens: {
      demonstration: TEXTE_A_COMPLETER,
      depot: TEXTE_A_COMPLETER,
    },
    slugSuivant: "eagence",
  },
  {
    slug: "eagence",
    identifiant: "eagence",
    numeroFolio: "03",
    reference: "DOSSIER // 03 — SITE VITRINE",
    categorieLibelle: "SITE VITRINE",
    categorieSuffixe: "SERVICES FINANCIERS PAYMONEY",
    accent: "lavande",
    titre: "EAgence",
    chapo:
      "Site vitrine responsive de présentation des services Paymoney, pensé pour mettre en valeur les solutions financières.",
    seo: {
      titre: "Étude de cas — EAgence | Anne Marie Agbonou",
      description:
        "Intégration frontend Next.js d'un site vitrine Paymoney : responsive design, structure modulaire et parcours de découverte des offres.",
    },
    visuelHero: { type: "plaque", identifiant: "eagence" },
    contexte: [
      "Site vitrine pour présenter l'ensemble des solutions de paiement et services numériques proposés par Paymoney.",
      "Détails contractuels ou internes non diffusés : À compléter.",
    ],
    probleme: [
      "Besoin métier : présenter les offres aux publics et partenaires commerciaux.",
      "Enjeu d'usage : inspirer confiance dès la première seconde avec un design contemporain, aéré et facile à explorer.",
    ],
    role: [
      "Intégration frontend intégrale du site vitrine sous Next.js.",
      "Travail de responsive design (smartphones, tablettes, bureau).",
      "Agencement des sections pour guider l'utilisateur vers les informations clés de chaque offre.",
      "Optimisation des temps de chargement et des transitions de page.",
    ],
    technologies: [
      "Next.js",
      "HTML5 sémantique",
      "CSS responsive",
      "Architecture de composants modulaires",
    ],
    fonctionnalites: [
      "Pages de présentation des services et solutions.",
      "Structure éditoriale orientée découverte des offres.",
      "Mise en page responsive multi-supports.",
    ],
    choixInterface: [
      "Respect de la charte de marque et hiérarchisation visuelle des offres.",
      "Grilles fluides et règles d'adaptation sans rupture d'affichage.",
      "Blocs modulaires réutilisables pour faciliter l'évolution du contenu.",
    ],
    defisTechniques: [TEXTE_A_COMPLETER],
    galerie: PLACEHOLDER_GALERIE,
    liens: {
      demonstration: TEXTE_A_COMPLETER,
      depot: TEXTE_A_COMPLETER,
    },
    slugSuivant: "invitation-mariage-digitale",
  },
  {
    slug: "invitation-mariage-digitale",
    identifiant: "mariage",
    numeroFolio: "04",
    reference: "DOSSIER // 04 — PROJET WEB PERSONNEL",
    categorieLibelle: "PROJET WEB PERSONNEL",
    categorieSuffixe: "EN PRODUCTION · stephane-et-marie.site",
    accent: "noir",
    titre: "Invitation de Mariage Digitale",
    chapo:
      "Site d'invitation de mariage avec présentation de l'événement, confirmation de présence (RSVP) et espace dédié aux mariés.",
    seo: {
      titre: "Étude de cas — Invitation de Mariage Digitale | Anne Marie Agbonou",
      description:
        "Projet personnel en production : direction artistique, module RSVP et espace mariés pour stephane-et-marie.site.",
    },
    visuelHero: {
      type: "image",
      src: "/images/project-maison.jpg",
      alt: "Visuel éditorial associé au dossier du projet mariage",
      noteLegende:
        "Visuel éditorial du dossier — non présenté comme capture d'écran du produit.",
    },
    contexte: [
      "Invitation numérique pour l'union de Stéphane et Marie : présenter l'événement et les informations pratiques aux invités.",
      "Projet personnel mené de bout en bout, déployé publiquement.",
    ],
    probleme: [
      "Besoin : une invitation élégante, interactive et mémorable, avec recueil des confirmations de présence.",
      "Enjeu d'usage : expérience intuitive pour des invités de tous âges, sur tout type d'appareil.",
    ],
    role: [
      "Direction artistique, choix typographiques et harmonie des couleurs.",
      "Développement du formulaire interactif de confirmation de présence (RSVP).",
      "Espace dédié aux mariés pour consulter les retours en temps réel.",
      "Déploiement en ligne et maintenance du domaine public.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Module RSVP (validation et persistance des réponses)",
    ],
    fonctionnalites: [
      "Présentation de l'événement et du contenu invité.",
      "Formulaire RSVP interactif.",
      "Espace mariés pour le suivi des confirmations.",
    ],
    choixInterface: [
      "Ton chaleureux et typographie élégante adaptés à un événement familial.",
      "Parcours RSVP simple et lisible sur mobile.",
      "Équilibre entre émotion (invitation) et clarté (informations pratiques).",
    ],
    defisTechniques: [TEXTE_A_COMPLETER],
    galerie: [
      {
        type: "placeholder",
        legende:
          "Captures d'écran réelles de stephane-et-marie.site — À compléter.",
      },
    ],
    liens: {
      demonstration: LIENS_EXTERNES.mariage,
      libelleDemonstration: "Visiter le site en production",
      depot: TEXTE_A_COMPLETER,
    },
    slugSuivant: "portail-ocr",
  },
];

export const SLUGS_ETUDES_CAS: SlugEtudeCas[] = ETUDES_CAS.map((e) => e.slug);

export function obtenirEtudeCasParSlug(
  slug: string,
): EtudeCas | undefined {
  return ETUDES_CAS.find((etude) => etude.slug === slug);
}

export function obtenirSlugParIdentifiant(
  identifiant: EtudeCas["identifiant"],
): SlugEtudeCas | undefined {
  return ETUDES_CAS.find((e) => e.identifiant === identifiant)?.slug;
}
