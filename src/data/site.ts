export const EMAIL_PROFESSIONNEL = "annemarieagbonou@gmail.com" as const;

/** Numéro WhatsApp public (Côte d'Ivoire, sans + ni espaces pour wa.me). */
export const WHATSAPP_NUMERO_INTERNATIONAL = "225172317983" as const;

const MESSAGE_WHATSAPP_FR =
  "Bonjour Anne Marie, j'ai consulté votre portfolio et je souhaiterais échanger avec vous au sujet d'une opportunité.";
const MESSAGE_WHATSAPP_EN =
  "Hello Anne Marie, I viewed your portfolio and would like to discuss an opportunity with you.";

export function obtenirLienWhatsApp(locale: "fr" | "en"): string {
  const texte = encodeURIComponent(
    locale === "en" ? MESSAGE_WHATSAPP_EN : MESSAGE_WHATSAPP_FR,
  );
  return `https://wa.me/${WHATSAPP_NUMERO_INTERNATIONAL}?text=${texte}`;
}

export const LIENS_EXTERNES = {
  linkedin:
    "https://www.linkedin.com/in/anne-marie-agbonou-ba31692a1/",
  github: "https://github.com/ANNEMARIE05",
  mariage: "https://stephane-et-marie.site",
} as const;

export const METADONNEES_SITE = {
  titre: "Anne Marie Agbonou — Développeuse Frontend",
  description:
    "Portfolio d'Anne Marie Agbonou, développeuse frontend et analyste programmeuse. Interfaces web claires, soignées et adaptées aux besoins métier.",
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
