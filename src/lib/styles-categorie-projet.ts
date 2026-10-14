import type { CSSProperties } from "react";
import type { EntreeCatalogueProjet } from "@/types/projet";

const COULEURS_ACCENT: Record<
  EntreeCatalogueProjet["categorieAccent"],
  string
> = {
  orange: "var(--c-orange)",
  sauge: "var(--c-sauge-ink)",
  lavande: "var(--c-lavande-ink)",
  noir: "var(--c-noir)",
};

export function styleAccentCategorie(
  accent: EntreeCatalogueProjet["categorieAccent"],
): CSSProperties {
  return { color: COULEURS_ACCENT[accent], fontWeight: 700 };
}
