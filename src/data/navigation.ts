export interface LienNavigation {
  href: string;
  indice: string;
  cle: "experience" | "projects" | "education" | "about" | "contact";
}

export const LIENS_NAVIGATION: LienNavigation[] = [
  { href: "#experience", indice: "01", cle: "experience" },
  { href: "#projets", indice: "02", cle: "projects" },
  { href: "#formation", indice: "03", cle: "education" },
  { href: "#parcours", indice: "04", cle: "about" },
  { href: "#contact", indice: "05", cle: "contact" },
];
