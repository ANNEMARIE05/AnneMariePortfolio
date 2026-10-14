"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PlaqueProjet } from "@/components/projects/plaques-projet";
import { obtenirContenuDossier } from "@/data/dossiers-contenu";
import { usePortfolio } from "@/components/providers/fournisseur-portfolio";
import { useI18n } from "@/hooks/use-i18n";
import type { IdentifiantProjet } from "@/types/projet";

type OngletDossier = "contexte" | "role" | "tech";

function ListeDossier({ items }: { items: string[] }) {
  return (
    <ul className="drawer-bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

interface PropsPanneau {
  identifiant: IdentifiantProjet;
  jouerSon: (type: "click") => void;
}

function PanneauContenuDossier({ identifiant, jouerSon }: PropsPanneau) {
  const { locale, t } = useI18n();
  const dossier = obtenirContenuDossier(locale, identifiant);
  const [ongletActif, setOngletActif] = useState<OngletDossier>("contexte");

  const onglets: { id: OngletDossier; libelle: string }[] = [
    { id: "contexte", libelle: t.drawer.tabs[0] },
    { id: "role", libelle: t.drawer.tabs[1] },
    { id: "tech", libelle: t.drawer.tabs[2] },
  ];

  const changerOnglet = useCallback(
    (onglet: OngletDossier) => {
      setOngletActif(onglet);
      jouerSon("click");
    },
    [jouerSon],
  );

  const contenuListe =
    ongletActif === "contexte"
      ? dossier.contexte
      : ongletActif === "role"
        ? dossier.role
        : dossier.tech;

  return (
    <>
      <div className="drawer-preview-wrap">
        <PlaqueProjet identifiant={identifiant} variante="drawer" />
      </div>

      <div>
        <h2 id="drawerProjectTitle" className="drawer-project-title">
          {dossier.titre}
        </h2>
        <p id="drawerProjectSubtitle" className="drawer-project-subtitle">
          {dossier.sousTitre}
        </p>
      </div>

      <div className="drawer-tab-selectors" role="tablist">
        {onglets.map((onglet) => (
          <button
            key={onglet.id}
            type="button"
            role="tab"
            aria-selected={ongletActif === onglet.id}
            className={`drawer-filter-btn${ongletActif === onglet.id ? " active" : ""}`}
            onClick={() => changerOnglet(onglet.id)}
          >
            {onglet.libelle}
          </button>
        ))}
      </div>

      <div className="drawer-tab-view active" role="tabpanel">
        <ListeDossier items={contenuListe} />
      </div>

      {dossier.lienExterne ? (
        <div className="drawer-footer-actions" id="drawerFooterActions">
          <span className="drawer-footer-note">{t.drawer.publicProject}</span>
          <a
            href={dossier.lienExterne}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid-orange drawer-live-link"
          >
            <span>{t.drawer.openLive}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      ) : null}
    </>
  );
}

export function TiroirTechnique() {
  const { dossierOuvert, identifiantDossierAffiche, fermerDossier, jouerSon } =
    usePortfolio();
  const { locale, t } = useI18n();
  const refBoutonFermer = useRef<HTMLButtonElement>(null);
  const dossier = obtenirContenuDossier(locale, identifiantDossierAffiche);

  useEffect(() => {
    const main = document.getElementById("contenu-principal");
    if (dossierOuvert) {
      main?.setAttribute("inert", "");
      requestAnimationFrame(() => {
        refBoutonFermer.current?.focus();
      });
    } else {
      main?.removeAttribute("inert");
    }
    return () => main?.removeAttribute("inert");
  }, [dossierOuvert]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && dossierOuvert) {
        fermerDossier();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [dossierOuvert, fermerDossier]);

  return (
    <div
      className={`drawer-backdrop-mask${dossierOuvert ? " active" : ""}`}
      id="technicalDrawerMask"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          fermerDossier();
        }
      }}
    >
      <div
        className="drawer-technical-panel"
        id="technicalDrawerPanel"
        role="dialog"
        aria-modal={dossierOuvert ? true : undefined}
        aria-hidden={dossierOuvert ? undefined : true}
        aria-labelledby="drawerProjectTitle"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="drawer-nav-bar">
          <span className="drawer-ref-tag" id="drawerRefCode">
            {dossier.reference}
          </span>
          <button
            ref={refBoutonFermer}
            type="button"
            className="drawer-dismiss-btn"
            onClick={fermerDossier}
            aria-label={t.drawer.close}
          >
            ✕
          </button>
        </div>

        <div className="drawer-scroll-body">
          {dossierOuvert ? (
            <PanneauContenuDossier
              key={identifiantDossierAffiche}
              identifiant={identifiantDossierAffiche}
              jouerSon={jouerSon}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
