export const EMAIL_PROFESSIONNEL = "annemarieagbonou@gmail.com" as const;

/** Incrémenter après remplacement logo / portrait (force le remontage des `<Image>`). */
export const VERSION_MEDIA = "2026-10-18-studio-wow" as const;

/** Logo officiel (fichier fourni tel quel). */
export const CHEMIN_LOGO = "/images/logo-officiel.png" as const;

export const CHEMIN_PORTRAIT = "/images/anne-marie-portrait-studio.jpg" as const;

/** Évite le cache navigateur après remplacement d’un fichier dans `public/`. */
export function cheminMediaVersionne(chemin: string): string {
  const sep = chemin.includes("?") ? "&" : "?";
  return `${chemin}${sep}v=${encodeURIComponent(VERSION_MEDIA)}`;
}

/** Numéro WhatsApp public (Côte d'Ivoire, sans + ni espaces pour wa.me). */
export const WHATSAPP_NUMERO_INTERNATIONAL = "225172317983" as const;

const MESSAGE_WHATSAPP_FR =
  "Bonjour Anne Marie, j'ai parcouru votre portfolio et souhaiterais échanger avec vous sur une opportunité ou une mission frontend.";
const MESSAGE_WHATSAPP_EN =
  "Hello Anne Marie, I reviewed your portfolio and would like to discuss an opportunity or frontend mission with you.";

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
    "Portfolio d'Anne Marie Agbonou — développeuse frontend et analyste programmeuse (NGSER). Interfaces métier, intégration soignée, stack React, Next.js et Angular.",
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
