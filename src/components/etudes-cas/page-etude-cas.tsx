import Link from "next/link";
import { AnimationEtudeCas } from "@/components/etudes-cas/animation-etude-cas";
import { BadgesTechnologies } from "@/components/etudes-cas/badges-technologies";
import { GalerieEtude } from "@/components/etudes-cas/galerie-etude";
import { HeroEtudeCas } from "@/components/etudes-cas/hero-etude-cas";
import { LiensEtude } from "@/components/etudes-cas/liens-etude";
import { ListeEditoriale } from "@/components/etudes-cas/liste-editoriale";
import { NavigationProjetSuivant } from "@/components/etudes-cas/navigation-projet-suivant";
import { SectionEtude } from "@/components/etudes-cas/section-etude";
import { Container } from "@/components/layout/container";
import { GrilleEditoriale } from "@/components/layout/grille-editoriale";
import type { EtudeCas } from "@/types/etude-cas";

interface PropsPageEtudeCas {
  etude: EtudeCas;
}

export function PageEtudeCas({ etude }: PropsPageEtudeCas) {
  return (
    <main
      id="contenu-principal"
      className="etude-cas-page"
      data-accent={etude.accent}
      tabIndex={-1}
    >
      <GrilleEditoriale />

      <div className="etude-cas-mast">
        <Container className="etude-cas-mast-inner">
          <Link href="/#projets" className="etude-cas-retour">
            <span>←</span>
            <span>Retour au portfolio</span>
          </Link>
          <span className="folio-marker" style={{ fontFamily: "var(--font-mono)" }}>
            ÉTUDE DE CAS · FOLIO {etude.numeroFolio}
          </span>
        </Container>
      </div>

      <AnimationEtudeCas>
        <HeroEtudeCas etude={etude} />

        <div className="etude-cas-corps">
          <Container>
            <SectionEtude index="01 / CONTEXTE" titre="Cadre du projet">
              <ListeEditoriale items={etude.contexte} />
            </SectionEtude>

            <SectionEtude
              index="02 / ENJEU"
              titre="Problème & besoin"
              variante="fond"
            >
              <ListeEditoriale items={etude.probleme} />
            </SectionEtude>

            <SectionEtude index="03 / RÔLE" titre="Mon rôle & contributions">
              <ListeEditoriale items={etude.role} />
            </SectionEtude>

            <SectionEtude index="04 / STACK" titre="Technologies">
              <BadgesTechnologies technologies={etude.technologies} />
            </SectionEtude>

            <SectionEtude
              index="05 / PRODUIT"
              titre="Fonctionnalités principales"
              variante="fond"
            >
              <ListeEditoriale items={etude.fonctionnalites} />
            </SectionEtude>

            <SectionEtude index="06 / UX" titre="Choix d'interface & expérience">
              <ListeEditoriale items={etude.choixInterface} />
            </SectionEtude>

            <SectionEtude index="07 / TECH" titre="Défis techniques">
              <ListeEditoriale items={etude.defisTechniques} />
            </SectionEtude>

            <SectionEtude
              index="08 / GALERIE"
              titre="Captures & visuels"
              variante="fond"
            >
              <GalerieEtude elements={etude.galerie} />
            </SectionEtude>

            <SectionEtude index="09 / LIENS" titre="Démonstration & code">
              <LiensEtude liens={etude.liens} />
            </SectionEtude>
          </Container>
        </div>
      </AnimationEtudeCas>

      <NavigationProjetSuivant slugSuivant={etude.slugSuivant} />
    </main>
  );
}
