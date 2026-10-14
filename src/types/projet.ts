import type { ReactNode } from "react";

export type IdentifiantProjet =
  | "ocr"
  | "production"
  | "eagence"
  | "ambassade"
  | "mariage";

export const ORDRE_PROJETS: IdentifiantProjet[] = [
  "ocr",
  "production",
  "eagence",
  "ambassade",
  "mariage",
];

export type TypePerspective = "frontend" | "analyste";

export interface PucePerspective {
  code: string;
  libelle: string;
}

export interface EntreeCatalogueProjet {
  identifiant: IdentifiantProjet;
  numeroFolio: string;
  categorieAccent: "orange" | "sauge" | "lavande" | "noir";
  categorieLibelle: string;
  categorieSuffixe: string;
  titre: string;
  resume: string;
  annotationTitre: string;
  annotationCorps: string;
  technologies: string[];
  lienLive?: string;
  libelleLive?: string;
}

export interface DossierTechnique {
  identifiant: IdentifiantProjet;
  reference: string;
  titre: string;
  sousTitre: string;
  lienExterne: string | null;
  contexte: ReactNode;
  role: ReactNode;
  tech: ReactNode;
}
