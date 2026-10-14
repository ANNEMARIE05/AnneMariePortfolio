import type { PucePerspective, TypePerspective } from "@/types/projet";

export const PERSPECTIVES: Record<TypePerspective, PucePerspective[]> = {
  frontend: [
    { code: "01", libelle: "React & Next.js" },
    { code: "02", libelle: "Tailwind CSS & shadcn/ui" },
    { code: "03", libelle: "Responsive Design Précis" },
    { code: "04", libelle: "Composants Réutilisables" },
    { code: "05", libelle: "Sensibilité Typographique" },
    { code: "06", libelle: "Qualité d'Intégration" },
  ],
  analyste: [
    { code: "A1", libelle: "Angular & Java" },
    { code: "A2", libelle: "Intégration d'API REST" },
    { code: "A3", libelle: "Gestion des Données & Quotas" },
    { code: "A4", libelle: "Docker & Git" },
    { code: "A5", libelle: "Travail Collaboratif" },
    { code: "A6", libelle: "Compréhension Métier" },
  ],
};
