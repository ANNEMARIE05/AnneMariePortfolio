export interface CategorieCompetence {
  titre: string;
  elements: string[];
}

export const CATEGORIES_COMPETENCES: CategorieCompetence[] = [
  {
    titre: "Frontend",
    elements: ["React", "Next.js", "Angular"],
  },
  {
    titre: "Langages",
    elements: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Java",
    ],
  },
  {
    titre: "UI & intégration",
    elements: [
      "Tailwind CSS",
      "Responsive design",
      "Composants réutilisables",
    ],
  },
  {
    titre: "Outils & pratiques",
    elements: [
      "Git",
      "Docker",
      "Intégration d'API",
      "Collaboration en équipe",
    ],
  },
];

/** @deprecated Conservé pour les pages études de cas si référencé */
export type VarianteBadge = "default" | "primary" | "sauge";

export interface LigneCompetence {
  marqueur: string;
  domaine: string;
  badges: { libelle: string; variante?: VarianteBadge }[];
}

export const LIGNES_COMPETENCES: LigneCompetence[] = [];
