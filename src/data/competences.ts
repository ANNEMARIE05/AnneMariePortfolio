export type VarianteBadge = "default" | "primary" | "sauge";

export interface LigneCompetence {
  marqueur: string;
  domaine: string;
  badges: { libelle: string; variante?: VarianteBadge }[];
}

export const LIGNES_COMPETENCES: LigneCompetence[] = [
  {
    marqueur: "[01]",
    domaine: "Frontend",
    badges: [
      { libelle: "React", variante: "primary" },
      { libelle: "Next.js", variante: "primary" },
      { libelle: "Angular", variante: "primary" },
    ],
  },
  {
    marqueur: "[02]",
    domaine: "Langages",
    badges: [
      { libelle: "JavaScript (ES6+)" },
      { libelle: "TypeScript", variante: "sauge" },
      { libelle: "HTML5 Sémantique" },
      { libelle: "CSS3 Moderne" },
    ],
  },
  {
    marqueur: "[03]",
    domaine: "UI & Intégration",
    badges: [
      { libelle: "Tailwind CSS", variante: "primary" },
      { libelle: "shadcn/ui" },
      { libelle: "Responsive Design", variante: "sauge" },
      { libelle: "Systèmes de Design" },
    ],
  },
  {
    marqueur: "[04]",
    domaine: "Backend & Outils",
    badges: [
      { libelle: "Java" },
      { libelle: "Spring Boot" },
      { libelle: "Docker" },
      { libelle: "Git & GitHub", variante: "sauge" },
    ],
  },
  {
    marqueur: "[05]",
    domaine: "Méthodes & Rigueur",
    badges: [
      { libelle: "Intégration d'API REST", variante: "primary" },
      { libelle: "Composants Réutilisables" },
      { libelle: "Travail Collaboratif" },
      { libelle: "Sensibilité au Design", variante: "sauge" },
      { libelle: "Qualité d'Intégration" },
    ],
  },
];
