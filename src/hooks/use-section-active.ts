"use client";

import { useEffect, useState } from "react";
import { LIENS_NAVIGATION } from "@/data/navigation";

const HREFS_SECTIONS = LIENS_NAVIGATION.map((lien) => lien.href);

export interface EtatParcoursScroll {
  hrefSectionActive: string | null;
  progressionLecture: number;
}

const ETAT_INITIAL: EtatParcoursScroll = {
  hrefSectionActive: null,
  progressionLecture: 0,
};

type EcouteurParcours = (etat: EtatParcoursScroll) => void;

const ecouteurs = new Set<EcouteurParcours>();
let etatCourant = ETAT_INITIAL;
let abonnementScroll = false;
let raf = 0;

function lireOffsetNavigation(): number {
  if (typeof window === "undefined") {
    return 72;
  }
  const brut = getComputedStyle(document.documentElement).getPropertyValue(
    "--nav-offset",
  );
  const parse = Number.parseFloat(brut);
  return Number.isFinite(parse) && parse > 0 ? parse : 72;
}

function detecterHrefSectionVisible(): string | null {
  const trigger = lireOffsetNavigation() + 24;
  let hrefActif: string | null = null;

  for (const href of HREFS_SECTIONS) {
    const section = document.getElementById(href.slice(1));
    if (!section) {
      continue;
    }
    if (section.getBoundingClientRect().top <= trigger) {
      hrefActif = href;
    }
  }

  return hrefActif;
}

function synchroniserParcours() {
  raf = 0;
  const scrollMax =
    document.documentElement.scrollHeight - window.innerHeight;
  const progressionLecture =
    scrollMax > 0
      ? Math.min(1, Math.max(0, window.scrollY / scrollMax))
      : 0;
  const hrefSectionActive = detecterHrefSectionVisible();
  const idSection = hrefSectionActive?.slice(1) ?? "";

  if (document.body.dataset.sectionActive !== idSection) {
    document.body.dataset.sectionActive = idSection;
  }

  if (
    etatCourant.hrefSectionActive !== hrefSectionActive ||
    Math.abs(etatCourant.progressionLecture - progressionLecture) > 0.002
  ) {
    etatCourant = { hrefSectionActive, progressionLecture };
    for (const ecouteur of ecouteurs) {
      ecouteur(etatCourant);
    }
  }
}

function planifierSynchronisation() {
  if (!raf) {
    raf = window.requestAnimationFrame(synchroniserParcours);
  }
}

function demarrerAbonnementScroll() {
  if (abonnementScroll || typeof window === "undefined") {
    return;
  }
  abonnementScroll = true;
  synchroniserParcours();
  window.addEventListener("scroll", planifierSynchronisation, {
    passive: true,
  });
  window.addEventListener("resize", planifierSynchronisation);
}

function arreterAbonnementScroll() {
  if (ecouteurs.size > 0) {
    return;
  }
  abonnementScroll = false;
  window.removeEventListener("scroll", planifierSynchronisation);
  window.removeEventListener("resize", planifierSynchronisation);
  if (raf) {
    window.cancelAnimationFrame(raf);
    raf = 0;
  }
}

function souscrireParcours(ecouteur: EcouteurParcours) {
  demarrerAbonnementScroll();
  ecouteurs.add(ecouteur);
  ecouteur(etatCourant);
  return () => {
    ecouteurs.delete(ecouteur);
    arreterAbonnementScroll();
  };
}

export function useParcoursScroll(): EtatParcoursScroll {
  const [etat, setEtat] = useState(etatCourant);

  useEffect(() => souscrireParcours(setEtat), []);

  return etat;
}

export function useSectionActive(): string | null {
  return useParcoursScroll().hrefSectionActive;
}
