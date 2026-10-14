export interface LienNavigation {
  href: string;
  cle: "experience" | "projects" | "education" | "about" | "contact";
}

export const LIENS_NAVIGATION: LienNavigation[] = [
  { href: "#experience", cle: "experience" },
  { href: "#projets", cle: "projects" },
  { href: "#formation", cle: "education" },
  { href: "#parcours", cle: "about" },
  { href: "#contact", cle: "contact" },
];
