"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DOSSIERS_TECHNIQUES } from "@/data/dossiers-techniques";
import { usePortfolio } from "@/components/providers/fournisseur-portfolio";
import type { DossierTechnique } from "@/types/projet";

type OngletDossier = "contexte" | "role" | "tech";

const ONGLETS: { id: OngletDossier; libelle: string }[] = [
  { id: "contexte", libelle: "1. Contexte & Défi" },
  { id: "role", libelle: "2. Rôle & Approche Frontend" },
  { id: "tech", libelle: "3. Technologies & Intégration" },
];

interface PropsPanneauDossier {
  dossier: DossierTechnique;
  jouerSon: (type: "click") => void;
}

function PanneauContenuDossier({ dossier, jouerSon }: PropsPanneauDossier) {
  const [ongletActif, setOngletActif] = useState<OngletDossier>("contexte");

  const changerOnglet = useCallback(
    (onglet: OngletDossier) => {
      setOngletActif(onglet);
      jouerSon("click");
    },
    [jouerSon],
  );

  return (
    <>
      <div>
        <h2
          id="drawerProjectTitle"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.3rem",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "0.6rem",
          }}
        >
          {dossier.titre}
        </h2>
        <p
          id="drawerProjectSubtitle"
          style={{
            fontSize: "1.1rem",
            color: "var(--c-noir-muted)",
            lineHeight: 1.6,
          }}
        >
          {dossier.sousTitre}
        </p>
      </div>

      <div className="drawer-tab-selectors" role="tablist">
        {ONGLETS.map((onglet) => (
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

      <div
        className={`drawer-tab-view${ongletActif === "contexte" ? " active" : ""}`}
        role="tabpanel"
      >
        {ongletActif === "contexte" ? dossier.contexte : null}
      </div>
      <div
        className={`drawer-tab-view${ongletActif === "role" ? " active" : ""}`}
        role="tabpanel"
      >
        {ongletActif === "role" ? dossier.role : null}
      </div>
      <div
        className={`drawer-tab-view${ongletActif === "tech" ? " active" : ""}`}
        role="tabpanel"
      >
        {ongletActif === "tech" ? dossier.tech : null}
      </div>

      {dossier.lienExterne ? (
        <div
          className="drawer-footer-actions"
          id="drawerFooterActions"
          style={{ display: "flex" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.74rem",
              color: "var(--c-noir-muted)",
            }}
          >
            Projet consultable publiquement :
          </span>
          <a
            href={dossier.lienExterne}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid-orange"
            style={{ padding: "0.65rem 1.2rem", fontSize: "0.74rem" }}
          >
            <span>Ouvrir stephane-et-marie.site</span>
            <span>↗</span>
          </a>
        </div>
      ) : (
        <div
          className="drawer-footer-actions"
          id="drawerFooterActions"
          style={{ display: "none" }}
        />
      )}
    </>
  );
}

export function TiroirTechnique() {
  const { dossierOuvert, identifiantDossierAffiche, fermerDossier, jouerSon } =
    usePortfolio();
  const refBoutonFermer = useRef<HTMLButtonElement>(null);

  const dossier = DOSSIERS_TECHNIQUES[identifiantDossierAffiche];

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
            aria-label="Fermer le dossier"
          >
            ✕
          </button>
        </div>

        <div className="drawer-scroll-body">
          <PanneauContenuDossier
            key={dossierOuvert ?? "ferme"}
            dossier={dossier}
            jouerSon={jouerSon}
          />
        </div>
      </div>
    </div>
  );
}
