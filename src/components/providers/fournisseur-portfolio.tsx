"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { IdentifiantProjet } from "@/types/projet";
import {
  activerContexteAudio,
  jouerRetourSonore,
  type TypeRetourSonore,
} from "@/lib/retour-sonore";

interface ContextePortfolio {
  themeStudioSombre: boolean;
  basculerTheme: () => void;
  sonActif: boolean;
  basculerSon: () => void;
  jouerSon: (type: TypeRetourSonore) => void;
  messageToast: string | null;
  afficherToast: (message: string) => void;
  dossierOuvert: IdentifiantProjet | null;
  identifiantDossierAffiche: IdentifiantProjet;
  ouvrirDossier: (identifiant: IdentifiantProjet) => void;
  fermerDossier: () => void;
}

const ContextePortfolio = createContext<ContextePortfolio | null>(null);

export function usePortfolio(): ContextePortfolio {
  const contexte = useContext(ContextePortfolio);
  if (!contexte) {
    throw new Error("usePortfolio doit être utilisé dans FournisseurPortfolio");
  }
  return contexte;
}

export function FournisseurPortfolio({ children }: { children: ReactNode }) {
  const [themeStudioSombre, setThemeStudioSombre] = useState(false);
  const [sonActif, setSonActif] = useState(false);
  const [messageToast, setMessageToast] = useState<string | null>(null);
  const [dossierOuvert, setDossierOuvert] = useState<IdentifiantProjet | null>(
    null,
  );
  const [identifiantDossierAffiche, setIdentifiantDossierAffiche] =
    useState<IdentifiantProjet>("ocr");

  useEffect(() => {
    document.body.classList.toggle("theme-studio-dark", themeStudioSombre);
    return () => {
      document.body.classList.remove("theme-studio-dark");
    };
  }, [themeStudioSombre]);

  useEffect(() => {
    if (dossierOuvert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [dossierOuvert]);

  const afficherToast = useCallback((message: string) => {
    setMessageToast(message);
    const delai = window.setTimeout(() => setMessageToast(null), 3000);
    return () => window.clearTimeout(delai);
  }, []);

  const jouerSon = useCallback(
    (type: TypeRetourSonore) => {
      jouerRetourSonore(type, sonActif);
    },
    [sonActif],
  );

  const basculerTheme = useCallback(() => {
    setThemeStudioSombre((valeur) => {
      const prochain = !valeur;
      jouerRetourSonore("click", sonActif);
      setMessageToast(
        prochain ? "Ambiance Studio Sombre" : "Ambiance Papier Ivoire",
      );
      window.setTimeout(() => setMessageToast(null), 3000);
      return prochain;
    });
  }, [sonActif]);

  const basculerSon = useCallback(() => {
    setSonActif((valeur) => {
      const prochain = !valeur;
      if (prochain) {
        activerContexteAudio();
        jouerRetourSonore("chime", true);
        setMessageToast("Retour sonore activé");
      } else {
        setMessageToast("Retour sonore désactivé");
      }
      window.setTimeout(() => setMessageToast(null), 3000);
      return prochain;
    });
  }, []);

  const ouvrirDossier = useCallback(
    (identifiant: IdentifiantProjet) => {
      setIdentifiantDossierAffiche(identifiant);
      setDossierOuvert(identifiant);
      jouerRetourSonore("click", sonActif);
    },
    [sonActif],
  );

  const fermerDossier = useCallback(() => {
    setDossierOuvert(null);
    jouerRetourSonore("click", sonActif);
  }, [sonActif]);

  const valeur = useMemo(
    () => ({
      themeStudioSombre,
      basculerTheme,
      sonActif,
      basculerSon,
      jouerSon,
      messageToast,
      afficherToast,
      dossierOuvert,
      identifiantDossierAffiche,
      ouvrirDossier,
      fermerDossier,
    }),
    [
      themeStudioSombre,
      basculerTheme,
      sonActif,
      basculerSon,
      jouerSon,
      messageToast,
      afficherToast,
      dossierOuvert,
      identifiantDossierAffiche,
      ouvrirDossier,
      fermerDossier,
    ],
  );

  return (
    <ContextePortfolio.Provider value={valeur}>
      {children}
    </ContextePortfolio.Provider>
  );
}
