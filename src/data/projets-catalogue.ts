import type { EntreeCatalogueProjet } from "@/types/projet";
import { LIENS_EXTERNES } from "@/data/site";

export const ENTREES_CATALOGUE_PROJETS: EntreeCatalogueProjet[] = [
  {
    identifiant: "ocr",
    numeroFolio: "01",
    categorieAccent: "orange",
    categorieLibelle: "APPLICATION WEB",
    categorieSuffixe: "TRAITEMENT DOCUMENTAIRE & QUOTAS",
    titre: "Portail OCR",
    resume:
      "Plateforme de traitement documentaire avec extraction OCR, authentification sécurisée, gestion des quotas, achat de crédits et suivi des extractions en direct.",
    annotationTitre: "Périmètre & Rôle Frontend",
    annotationCorps:
      "Conception et intégration des interfaces utilisateur avec Next.js et Tailwind CSS : parcours d'authentification, visualisation des états de conversion documentaire, suivi des crédits et tableaux d'historique.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Extraction OCR",
      "Authentification",
      "Gestion de Quotas",
    ],
  },
  {
    identifiant: "production",
    numeroFolio: "02",
    categorieAccent: "sauge",
    categorieLibelle: "APPLICATION MÉTIER",
    categorieSuffixe: "PILOTAGE INDUSTRIEL & RESSOURCES",
    titre: "Gestion de Production",
    resume:
      "Application de suivi des tâches, de l'avancement opérationnel, des ressources humaines et matérielles, et tableaux de bord de pilotage.",
    annotationTitre: "Périmètre & Rôle Frontend",
    annotationCorps:
      "Développement des interfaces sous Angular, liaison avec les contrôleurs backend Java, et organisation de tableaux de bord pour fluidifier le pilotage des équipes sans surcharge cognitive.",
    technologies: [
      "Angular",
      "Java",
      "Tableaux de Bord",
      "Suivi des Tâches",
      "Flux Métier",
    ],
  },
  {
    identifiant: "eagence",
    numeroFolio: "03",
    categorieAccent: "lavande",
    categorieLibelle: "SITE VITRINE",
    categorieSuffixe: "SERVICES FINANCIERS PAYMONEY",
    titre: "EAgence",
    resume:
      "Site vitrine responsive de présentation des services Paymoney, conçu pour valoriser l'éventail des solutions financières et simplifier la découverte utilisateur.",
    annotationTitre: "Périmètre & Rôle Frontend",
    annotationCorps:
      "Intégration Next.js soignée, respect strict de la charte de marque, hiérarchisation visuelle des offres et adaptation irréprochable sur l'ensemble des résolutions d'écrans.",
    technologies: [
      "Next.js",
      "Responsive Design",
      "Site Vitrine",
      "Composants Modulaires",
    ],
  },
  {
    identifiant: "mariage",
    numeroFolio: "04",
    categorieAccent: "noir",
    categorieLibelle: "PROJET WEB PERSONNEL",
    categorieSuffixe: "EN PRODUCTION · stephane-et-marie.site",
    titre: "Invitation de Mariage Digitale",
    resume:
      "Site d'invitation de mariage avec présentation chaleureuse de l'événement, confirmation de présence interactive (RSVP) et espace dédié aux mariés.",
    annotationTitre: "Conception & Réalisation Intégrale",
    annotationCorps:
      "Direction artistique douce et mémorable, typographie élégante, développement du module de confirmation interactive en temps réel et déploiement en production accessible publiquement.",
    technologies: [
      "Projet Personnel",
      "Formulaire RSVP",
      "Espace Mariés",
      "En Production",
    ],
    lienLive: LIENS_EXTERNES.mariage,
    libelleLive: "Visiter le site réel",
  },
];
