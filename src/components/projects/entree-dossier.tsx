"use client";

import Link from "next/link";
import { obtenirSlugParIdentifiant } from "@/data/etudes-cas";
import { PlaqueProjet } from "@/components/projects/plaques-projet";
import { usePortfolio } from "@/components/providers/fournisseur-portfolio";
import { styleAccentCategorie } from "@/lib/styles-categorie-projet";
import { useI18n } from "@/hooks/use-i18n";
import type { EntreeCatalogueProjet } from "@/types/projet";

interface PropsEntreeDossier {
  entree: EntreeCatalogueProjet;
}

export function EntreeDossier({ entree }: PropsEntreeDossier) {
  const { ouvrirDossier } = usePortfolio();
  const { t } = useI18n();
  const slugEtude = obtenirSlugParIdentifiant(entree.identifiant);
  const contenu = t.projects.entries[entree.identifiant];

  if (!contenu) {
    return null;
  }

  return (
    <article className="dossier-entry-block" data-reveal-dossier="">
      <div className="dossier-meta-column">
        <div className="dossier-category-strip">
          <span
            className={
              contenu.contexte === "professionnel"
                ? "dossier-context-badge dossier-context-badge--pro"
                : "dossier-context-badge dossier-context-badge--perso"
            }
          >
            {contenu.contexte === "professionnel"
              ? t.projects.badgeProfessional
              : t.projects.badgePersonal}
          </span>
          <span style={styleAccentCategorie(entree.categorieAccent)}>
            {contenu.category}
          </span>
          <span className="dossier-category-sep">/ /</span>
          <span>{contenu.suffix}</span>
        </div>

        <h3 className="dossier-project-heading">{contenu.title}</h3>

        <p className="dossier-lead-summary">{contenu.summary}</p>

        <div className="dossier-scope-annotation">
          <strong>{t.projects.roleLabel}</strong>
          {contenu.role}
        </div>

        <p className="dossier-tech-inline">
          <span>{t.projects.techLabel} : </span>
          {contenu.tech.join(" · ")}
        </p>

        <div className="dossier-actions-row">
          <button
            type="button"
            className="btn-dossier-expand"
            onClick={() => ouvrirDossier(entree.identifiant)}
          >
            <span>{t.projects.details}</span>
            <span aria-hidden="true">→</span>
          </button>

          {slugEtude ? (
            <Link href={`/projets/${slugEtude}`} className="btn-live-launch">
              <span>{t.projects.caseStudy}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ) : null}

          {entree.lienLive && contenu.liveLabel ? (
            <a
              href={entree.lienLive}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-live-launch"
            >
              <span>{contenu.liveLabel}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>

      <div
        className="dossier-visual-canvas"
        role="button"
        tabIndex={0}
        aria-label={`${t.projects.openDetails} — ${contenu.title}`}
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
