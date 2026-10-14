import type { IdentifiantProjet } from "@/types/projet";

export const TEXTE_A_COMPLETER = "À compléter" as const;

export type SlugEtudeCas =
  | "portail-ocr"
  | "gestion-production"
  | "eagence"
  | "invitation-mariage-digitale";

export type AccentEtudeCas = "orange" | "sauge" | "lavande" | "noir";

export interface MetadonneesEtudeCas {
  titre: string;
  description: string;
}

export type VisuelHeroEtude =
  | { type: "plaque"; identifiant: IdentifiantProjet }
  | {
      type: "image";
      src: string;
      alt: string;
      noteLegende: string;
    };

export interface ElementGalerieCapture {
  type: "capture";
  src: string;
  legende: string;
  alt: string;
}

export interface ElementGaleriePlaceholder {
  type: "placeholder";
  legende: string;
}

export type ElementGalerie = ElementGalerieCapture | ElementGaleriePlaceholder;

export interface LiensEtudeCas {
  demonstration?: string;
  libelleDemonstration?: string;
  depot?: string;
  libelleDepot?: string;
}

export interface EtudeCas {
  slug: SlugEtudeCas;
  identifiant: IdentifiantProjet;
  numeroFolio: string;
  reference: string;
  categorieLibelle: string;
  categorieSuffixe: string;
  accent: AccentEtudeCas;
  titre: string;
  chapo: string;
  seo: MetadonneesEtudeCas;
  visuelHero: VisuelHeroEtude;
  contexte: string[];
  probleme: string[];
  role: string[];
  technologies: string[];
  fonctionnalites: string[];
  choixInterface: string[];
  /** Vide ou contenant uniquement des faits documentés ; sinon [TEXTE_A_COMPLETER] */
  defisTechniques: string[];
  galerie: ElementGalerie[];
  liens: LiensEtudeCas;
  slugSuivant: SlugEtudeCas;
}
