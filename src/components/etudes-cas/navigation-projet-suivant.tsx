import Link from "next/link";
import { Container } from "@/components/layout/container";
import { obtenirEtudeCasParSlug } from "@/data/etudes-cas";
import type { SlugEtudeCas } from "@/types/etude-cas";

interface PropsNavigationProjetSuivant {
  slugSuivant: SlugEtudeCas;
}

export function NavigationProjetSuivant({
  slugSuivant,
}: PropsNavigationProjetSuivant) {
  const suivant = obtenirEtudeCasParSlug(slugSuivant);
  if (!suivant) {
    return null;
  }

  return (
    <section className="etude-cas-suite" aria-label="Projet suivant">
      <Container className="etude-cas-suite-inner">
        <div>
          <p className="etude-cas-suite-label">PROJET SUIVANT // {suivant.numeroFolio}</p>
          <p className="etude-cas-suite-titre">{suivant.titre}</p>
        </div>
        <Link
          href={`/projets/${suivant.slug}`}
          className="etude-cas-suite-lien"
        >
          <span>Continuer la lecture</span>
          <span>→</span>
        </Link>
      </Container>
    </section>
  );
}
