import { AnimationHero } from "@/components/animations/animation-hero";
import { Container } from "@/components/layout/container";
import { BoutonCopieEmail } from "@/components/ui/bouton-copie-email";
import { PortraitArchitectural } from "@/components/sections/portrait-architectural";
import { PrismeCompetences } from "@/components/sections/prisme-competences";

export function HeroSection() {
  return (
    <section id="hero" className="hero-cover">
      <AnimationHero>
        <Container className="hero-composition-grid">
          <div className="hero-lead-col">
            <div>
              <div
                className="hero-editorial-meta"
                data-hero-reveal="meta"
              >
                <span className="meta-tag-bold">[ POSTURE PROFESSIONNELLE ]</span>
                <span>DÉVELOPPEMENT WEB · INTERFACES & RIGUEUR</span>
              </div>

              <h1 className="hero-monumental-title">
                <span className="title-line-block">
                  <span className="title-line-inner" data-hero-ligne-titre="">
                    JE DONNE FORME
                  </span>
                </span>
                <span className="title-line-block">
                  <span className="title-line-inner" data-hero-ligne-titre="">
                    <span className="title-line-serif-accent">aux idées,</span>
                    <span>UNE INTERFACE</span>
                  </span>
                </span>
                <span className="title-line-block">
                  <span className="title-line-inner" data-hero-ligne-titre="">
                    À LA FOIS.
                  </span>
                </span>
              </h1>

              <p className="hero-statement-text" data-hero-reveal="statement">
                Je suis <strong>Anne Marie</strong>, développeuse frontend et
                analyste programmeuse. J&apos;aime créer des expériences web qui
                allient clarté, esthétique et fonctionnalité.
              </p>
            </div>

            <div data-hero-reveal="prisme">
              <PrismeCompetences />
            </div>

            <div className="hero-cta-ribbon" data-hero-reveal="cta">
              <a href="#projets" className="btn-solid-orange">
                <span>Découvrir les réalisations</span>
                <span>↓</span>
              </a>

              <a href="#contact" className="btn-outline-ink">
                <span>Initier un échange</span>
                <span>→</span>
              </a>

              <BoutonCopieEmail variante="hero" />
            </div>
          </div>

          <div data-hero-reveal="portrait">
            <PortraitArchitectural />
          </div>
        </Container>
      </AnimationHero>
    </section>
  );
}
