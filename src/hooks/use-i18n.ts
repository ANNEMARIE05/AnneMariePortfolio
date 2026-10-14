"use client";

import { usePortfolio } from "@/components/providers/fournisseur-portfolio";
import { obtenirMessages } from "@/i18n";

export function useI18n() {
  const { locale, setLocale } = usePortfolio();
  const t = obtenirMessages(locale);
  return { locale, setLocale, t };
}
