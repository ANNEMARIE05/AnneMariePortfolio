"use client";

import Link from "next/link";
import { obtenirSlugParIdentifiant } from "@/data/etudes-cas";
import { PlaqueProjet } from "@/components/projects/plaques-projet";
import { usePortfolio } from "@/components/providers/fournisseur-portfolio";
import { styleAccentCategorie } from "@/lib/styles-categorie-projet";
import type { EntreeCatalogueProjet } from "@/types/projet";

interface PropsEntreeDossier {
  entree: EntreeCatalogueProjet;
}

export function EntreeDossier({ entree }: PropsEntreeDossier) {
  const { ouvrirDossier } = usePortfolio();
  const slugEtude = obtenirSlugParIdentifiant(entree.identifiant);

  return (
    <article className="dossier-entry-block" data-reveal-dossier="">
      <div className="dossier-folio-number">{entree.numeroFolio}</div>

      <div className="dossier-meta-column">
        <div className="dossier-category-strip">
          <span style={styleAccentCategorie(entree.categorieAccent)}>
            {entree.categorieLibelle}
          </span>
          <span>/ /</span>
          <span>{entree.categorieSuffixe}</span>
        </div>

        <h3 className="dossier-project-heading">{entree.titre}</h3>

        <p className="dossier-lead-summary">{entree.resume}</p>

        <div className="dossier-scope-annotation">
          <strong>{entree.annotationTitre}</strong>
          {entree.annotationCorps}
        </div>

        <div className="dossier-tech-row">
          {entree.technologies.map((tech) => (
            <span key={tech} className="tech-pill-spec">
              {tech}
            </span>
          ))}
        </div>

        <div className="dossier-actions-row">
          <button
            type="button"
            className="btn-dossier-expand"
            onClick={() => ouvrirDossier(entree.identifiant)}
          >
            <span>
              {entree.identifiant === "mariage"
                ? "Consulter le dossier"
                : "Consulter le dossier d'ingénierie"}
            </span>
            <span>→</span>
          </button>

          {slugEtude ? (
            <Link
              href={`/projets/${slugEtude}`}
              className="btn-live-launch"
            >
              <span>Lire l&apos;étude de cas</span>
              <span>↗</span>
            </Link>
          ) : null}

          {entree.lienLive ? (
            <a
              href={entree.lienLive}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-live-launch"
            >
              <span>{entree.libelleLive}</span>
              <span>↗</span>
            </a>
          ) : null}
        </div>
      </div>

      <div
        className="dossier-visual-canvas"
        role="button"
        tabIndex={0}
        onClick={() => ouvrirDossier(entree.identifiant)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            ouvrirDossier(entree.identifiant);
          }
        }}
      >
        <PlaqueProjet identifiant={entree.identifiant} />
      </div>
    </article>
  );
}
