import { en } from "@/i18n/en";
import { fr } from "@/i18n/fr";
import type { Locale, Messages } from "@/i18n/types";

export type { Locale, Messages };

const CATALOGUE: Record<Locale, Messages> = { fr, en };

export function obtenirMessages(locale: Locale): Messages {
  return CATALOGUE[locale];
}

export function estLocale(valeur: string): valeur is Locale {
  return valeur === "fr" || valeur === "en";
}

export const LOCALES: Locale[] = ["fr", "en"];
