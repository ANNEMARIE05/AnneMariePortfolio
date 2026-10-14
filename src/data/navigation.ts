export interface LienNavigation {
  indice: string;
  href: string;
  libelle: string;
}

export const LIENS_NAVIGATION: LienNavigation[] = [
  { indice: "01", href: "#projets", libelle: "Travaux" },
  { indice: "02", href: "#manifeste", libelle: "Philosophie" },
  { indice: "03", href: "#specifications", libelle: "Spécifications" },
  { indice: "04", href: "#contact", libelle: "Contact" },
];
