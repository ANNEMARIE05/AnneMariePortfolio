export interface PilierMethode {
  code: string;
  titre: string;
  texte: string;
}

export const CITATION_MANIFESTE =
  "Ce qui me plaît dans le développement web, c'est de partir d'une idée ou d'un besoin et de lui donner vie à travers une interface.";

export const COLONNES_MANIFESTE = [
  [
    "Je suis Anne Marie Agbonou, développeuse frontend et analyste programmeuse.",
    "J'aime autant réfléchir à l'organisation d'une page qu'à ses interactions, ses détails visuels ou son fonctionnement. Pour moi, une bonne interface ne doit pas seulement être belle : elle doit être claire, agréable et répondre à un vrai besoin.",
  ],
  [
    "Au fil de mes expériences, j'ai travaillé sur des applications métier, des interfaces de gestion et des projets web plus créatifs.",
    "Aujourd'hui, je continue à approfondir mes compétences tout en développant ma propre approche du frontend : créer des interfaces utiles, cohérentes et avec une vraie personnalité.",
  ],
] as const;

/** Types de projets déjà présents dans le portfolio — pas d’invention. */
export const DOMAINES_PARCOURS = [
  "Applications métier",
  "Interfaces de gestion",
  "Sites vitrines",
  "Projets web créatifs",
] as const;

export const PILIERS_METHODE: PilierMethode[] = [
  {
    code: "clarte",
    titre: "Clarté d'usage",
    texte:
      "Structurer l'information pour que chaque parcours soit évident, sans friction inutile.",
  },
  {
    code: "soin",
    titre: "Soin du détail",
    texte:
      "Typographie, espacements et transitions traités avec précision pour inspirer confiance.",
  },
  {
    code: "rigueur",
    titre: "Rigueur technique",
    texte:
      "Composants réutilisables, intégration d'API fiable et bases de code maintenables.",
  },
];
