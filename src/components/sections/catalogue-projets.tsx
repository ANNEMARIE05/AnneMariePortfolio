"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { EntreeDossier } from "@/components/projects/entree-dossier";
import { ENTREES_CATALOGUE_PROJETS } from "@/data/projets-catalogue";
import { useI18n } from "@/hooks/use-i18n";

type CategorieFiltre = "tous" | "saas" | "fintech" | "institutionnel";

export function CatalogueProjets() {
  const { locale, t } = useI18n();
  const [filtreActif, setFiltreActif] = useState<CategorieFiltre>("tous");

  const correspondFiltre = (id: string): boolean => {
    if (filtreActif === "tous") return true;
    if (filtreActif === "saas") return id === "ocr" || id === "production";
    if (filtreActif === "fintech") return id === "eagence";
    if (filtreActif === "institutionnel") return id === "ambassade" || id === "mariage";
    return true;
  };

  const projetsFiltres = ENTREES_CATALOGUE_PROJETS.filter((p) =>
    correspondFiltre(p.identifiant),
  );

  return (
    <section
      id="projets"
      className="projects-catalogue"
      data-reveal-section=""
    >
      <Container>
        <div className="section-editorial-header" data-reveal-entete="">
          <div>
            <span className="sec-index-number">{t.projects.label}</span>
            <h2 className="sec-editorial-title">{t.projects.title}</h2>
          </div>
          <p className="sec-editorial-desc">{t.projects.desc}</p>
        </div>

        {/* Dynamic Filter Pills */}
        <div className="catalogue-filter-bar" role="tablist" aria-label="Filtrer les projets">
          <button
            type="button"
            role="tab"
            aria-selected={filtreActif === "tous"}
            className={`filter-pill-btn${filtreActif === "tous" ? " is-active" : ""}`}
            onClick={() => setFiltreActif("tous")}
          >
            <span>{locale === "en" ? "All Projects" : "Tous les projets"}</span>
            <span className="filter-count">5</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filtreActif === "saas"}
            className={`filter-pill-btn${filtreActif === "saas" ? " is-active" : ""}`}
            onClick={() => setFiltreActif("saas")}
          >
            <span>{locale === "en" ? "SaaS & Enterprise Apps" : "Applications Métier & SaaS"}</span>
            <span className="filter-count">2</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filtreActif === "fintech"}
            className={`filter-pill-btn${filtreActif === "fintech" ? " is-active" : ""}`}
            onClick={() => setFiltreActif("fintech")}
          >
            <span>{locale === "en" ? "Fintech & Platforms" : "Fintech & Plateformes"}</span>
            <span className="filter-count">1</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filtreActif === "institutionnel"}
            className={`filter-pill-btn${filtreActif === "institutionnel" ? " is-active" : ""}`}
            onClick={() => setFiltreActif("institutionnel")}
          >
            <span>{locale === "en" ? "Institutional & Creative" : "Institutionnel & Sur-Mesure"}</span>
            <span className="filter-count">2</span>
          </button>
        </div>

        <div className="catalogue-dossier-list" data-reveal-corps="">
          {projetsFiltres.map((entree) => (
            <EntreeDossier key={entree.identifiant} entree={entree} />
          ))}
        </div>
      </Container>
    </section>
  );
}
