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

export const PILIERS_METHODE: PilierMethode[] = [
  {
    code: "01 / FONCTIONNALITÉ",
    titre: "Clarté d'Usage",
    texte:
      "Organiser la structure de façon évidente pour que chaque utilisateur accomplisse sa tâche sans hésitation ni friction superflue.",
  },
  {
    code: "02 / SENSIBILITÉ",
    titre: "Soin du Détail",
    texte:
      "Traiter la typographie, les alignements, les espacements et les transitions avec la précision d'un artisan pour susciter la confiance.",
  },
  {
    code: "03 / INGÉNIERIE",
    titre: "Rigueur Logique",
    texte:
      "S'appuyer sur des bases de code modulaires, des composants réutilisables, un typage propre et une intégration d'API fiable.",
  },
];
