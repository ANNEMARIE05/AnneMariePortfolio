export const EMAIL_PROFESSIONNEL = "annemarieagbonou@gmail.com" as const;

export const LIENS_EXTERNES = {
  linkedin:
    "https://www.linkedin.com/in/anne-marie-agbonou-ba31692a1/",
  github: "https://github.com/ANNEMARIE05",
  mariage: "https://stephane-et-marie.site",
} as const;

export const METADONNEES_SITE = {
  titre:
    "Anne Marie Agbonou — Portfolio & Direction Éditoriale Frontend",
  description:
    "Portfolio d'Anne Marie Agbonou, Développeuse Frontend & Analyste Programmeuse. Conception d'interfaces web singulières, rigueur d'ingénierie logicielle et sensibilité éditoriale.",
} as const;

/** URL canonique du site (production : définir NEXT_PUBLIC_SITE_URL). */
export function obtenirUrlSite(): string {
  const publique = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (publique) {
    return publique;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
