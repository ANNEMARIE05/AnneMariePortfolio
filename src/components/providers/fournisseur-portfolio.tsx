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
import { estLocale, type Locale } from "@/i18n";
import {
  activerContexteAudio,
  jouerRetourSonore,
  type TypeRetourSonore,
} from "@/lib/retour-sonore";
import { prefererMouvementReduit } from "@/lib/animations/mouvement-reduit";

export type PhaseIntro = "attente" | "lecture" | "terminee";

interface ContextePortfolio {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  basculerLocale: () => void;
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
  phaseIntro: PhaseIntro;
  terminerIntro: () => void;
}

const ContextePortfolio = createContext<ContextePortfolio | null>(null);

const CLE_LOCALE = "portfolio-locale";

function lireLocaleInitiale(): Locale {
  if (typeof window === "undefined") {
    return "fr";
  }
  const stockee = window.localStorage.getItem(CLE_LOCALE);
  if (stockee && estLocale(stockee)) {
    return stockee;
  }
  return "fr";
}

export function usePortfolio(): ContextePortfolio {
  const contexte = useContext(ContextePortfolio);
  if (!contexte) {
    throw new Error("usePortfolio doit être utilisé dans FournisseurPortfolio");
  }
  return contexte;
}

const CLE_THEME = "portfolio-theme";

function lireThemeInitial(): boolean {
  if (typeof window === "undefined") {
    return true;
  }
  const stockee = window.localStorage.getItem(CLE_THEME);
  if (stockee !== null) {
    return stockee === "dark";
  }
  return true;
}

export function FournisseurPortfolio({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [themeStudioSombre, setThemeStudioSombre] = useState(true);
  const [sonActif, setSonActif] = useState(false);
  const [messageToast, setMessageToast] = useState<string | null>(null);
  const [dossierOuvert, setDossierOuvert] = useState<IdentifiantProjet | null>(
    null,
  );
  const [identifiantDossierAffiche, setIdentifiantDossierAffiche] =
    useState<IdentifiantProjet>("ocr");
  const [phaseIntro, setPhaseIntro] = useState<PhaseIntro>("attente");

  useEffect(() => {
    setLocaleState(lireLocaleInitiale());
    setThemeStudioSombre(lireThemeInitial());
  }, []);

  useEffect(() => {
    if (prefererMouvementReduit()) {
      setPhaseIntro("terminee");
      return;
    }
    const id = window.requestAnimationFrame(() => {
      setPhaseIntro("lecture");
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  const terminerIntro = useCallback(() => {
    setPhaseIntro("terminee");
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "fr";
    window.localStorage.setItem(CLE_LOCALE, locale);
  }, [locale]);

  useEffect(() => {
    document.body.classList.toggle("theme-studio-dark", themeStudioSombre);
    window.localStorage.setItem(CLE_THEME, themeStudioSombre ? "dark" : "light");
    return () => {
      document.body.classList.remove("theme-studio-dark");
    };
  }, [themeStudioSombre]);

  useEffect(() => {
    document.body.classList.toggle("intro-en-cours", phaseIntro === "lecture");
    return () => {
      document.body.classList.remove("intro-en-cours");
    };
  }, [phaseIntro]);

  useEffect(() => {
    if (dossierOuvert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [dossierOuvert]);

  const setLocale = useCallback((prochaine: Locale) => {
    setLocaleState(prochaine);
  }, []);

  const basculerLocale = useCallback(() => {
    setLocaleState((courante) => (courante === "fr" ? "en" : "fr"));
  }, []);

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
    setThemeStudioSombre((valeur) => !valeur);
  }, []);

  const basculerSon = useCallback(() => {
    setSonActif((valeur) => {
      const prochain = !valeur;
      if (prochain) {
        activerContexteAudio();
        jouerRetourSonore("chime", true);
      }
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
      locale,
      setLocale,
      basculerLocale,
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
      phaseIntro,
      terminerIntro,
    }),
    [
      locale,
      setLocale,
      basculerLocale,
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
      phaseIntro,
      terminerIntro,
    ],
  );

  return (
    <ContextePortfolio.Provider value={valeur}>
      {children}
    </ContextePortfolio.Provider>
  );
}
