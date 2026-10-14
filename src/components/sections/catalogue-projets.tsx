"use client";

import { Container } from "@/components/layout/container";
import { EntreeDossier } from "@/components/projects/entree-dossier";
import { ENTREES_CATALOGUE_PROJETS } from "@/data/projets-catalogue";
import { useI18n } from "@/hooks/use-i18n";

export function CatalogueProjets() {
  const { t } = useI18n();

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

        <div className="catalogue-dossier-list" data-reveal-corps="">
          {ENTREES_CATALOGUE_PROJETS.map((entree) => (
            <EntreeDossier key={entree.identifiant} entree={entree} />
          ))}
        </div>
      </Container>
    </section>
  );
}
