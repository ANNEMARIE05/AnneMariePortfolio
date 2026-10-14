import { Container } from "@/components/layout/container";
import { EntreeDossier } from "@/components/projects/entree-dossier";
import { ENTREES_CATALOGUE_PROJETS } from "@/data/projets-catalogue";

export function CatalogueProjets() {
  return (
    <section
      id="projets"
      className="projects-catalogue"
      data-reveal-section=""
    >
      <Container>
        <div className="section-editorial-header" data-reveal-entete="">
          <div>
            <span className="sec-index-number">
              SECTION 01 // TRAVAUX CHOISIS
            </span>
            <h2 className="sec-editorial-title">Catalogue des Réalisations</h2>
          </div>
          <p className="sec-editorial-desc">
            Chaque projet illustre une typologie d&apos;interface singulière :
            applications documentaires à forte valeur ajoutée, outils de
            pilotage opérationnel, vitrines institutionnelles et projets
            personnels en production.
          </p>
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
