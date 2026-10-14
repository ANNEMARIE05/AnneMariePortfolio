import Image from "next/image";
import { Container } from "@/components/layout/container";
import { PlaqueProjet } from "@/components/projects/plaques-projet";
import type { EtudeCas } from "@/types/etude-cas";

interface PropsHeroEtudeCas {
  etude: EtudeCas;
}

export function HeroEtudeCas({ etude }: PropsHeroEtudeCas) {
  return (
    <header className="etude-cas-hero" data-reveal-etude="">
      <Container className="etude-cas-hero-grid">
        <div data-reveal-etude-entete="">
          <p className="etude-cas-ref">{etude.reference}</p>
          <p className="etude-cas-categorie">
            <span style={{ color: "var(--etude-accent)", fontWeight: 700 }}>
              {etude.categorieLibelle}
            </span>
            <span> / / </span>
            <span>{etude.categorieSuffixe}</span>
          </p>
          <h1 className="etude-cas-titre">{etude.titre}</h1>
          <p className="etude-cas-chapo">{etude.chapo}</p>
        </div>

        <div data-reveal-etude-corps="">
          <div className="etude-cas-visuel-hero">
            {etude.visuelHero.type === "plaque" ? (
              <div className="dossier-visual-canvas">
                <PlaqueProjet identifiant={etude.visuelHero.identifiant} />
              </div>
            ) : (
              <div className="etude-cas-visuel-image">
                <Image
                  src={etude.visuelHero.src}
                  alt={etude.visuelHero.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
          {etude.visuelHero.type === "image" ? (
            <p className="etude-cas-note-visuel">{etude.visuelHero.noteLegende}</p>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
