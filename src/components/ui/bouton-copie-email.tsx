"use client";

import { Copy } from "lucide-react";
import { useCallback, useState } from "react";
import { EMAIL_PROFESSIONNEL } from "@/data/site";
import { usePortfolio } from "@/components/providers/fournisseur-portfolio";
import { useI18n } from "@/hooks/use-i18n";

interface PropsBoutonCopieEmail {
  variante?: "hero" | "contact";
}

export function BoutonCopieEmail({ variante = "hero" }: PropsBoutonCopieEmail) {
  const { afficherToast, jouerSon } = usePortfolio();
  const { t, locale } = useI18n();
  const [libelleContact, setLibelleContact] = useState(t.contact.copy);

  const copierEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_PROFESSIONNEL);
      jouerSon("chime");
      afficherToast(`Email ${EMAIL_PROFESSIONNEL} copié !`);
      if (variante === "contact") {
        setLibelleContact(locale === "en" ? "Copied ✓" : "Adresse copiée ✓");
        window.setTimeout(() => setLibelleContact(t.contact.copy), 2500);
      }
    } catch {
      afficherToast("Impossible de copier l'adresse pour le moment.");
    }
  }, [afficherToast, jouerSon, variante, locale, t.contact.copy]);

  if (variante === "hero") {
    return (
      <button
        type="button"
        className="quick-copy-email-box"
        title={`Copier l'adresse ${EMAIL_PROFESSIONNEL}`}
        onClick={() => void copierEmail()}
      >
        <Copy width={13} height={13} stroke="currentColor" strokeWidth={2} />
        <span>{EMAIL_PROFESSIONNEL}</span>
      </button>
    );
  }

  return (
    <button type="button" className="btn-copy-address" onClick={() => void copierEmail()}>
      <Copy width={14} height={14} stroke="currentColor" strokeWidth={2} />
      <span>{libelleContact}</span>
    </button>
  );
}
