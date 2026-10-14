import { Container } from "@/components/layout/container";
import { PILIERS_METHODE } from "@/data/manifeste";

export function ManifesteSection() {
  return (
    <section
      id="manifeste"
      className="about-manifesto-sec"
      data-reveal-section=""
    >
      <Container>
        <div
          data-reveal-entete=""
          style={{
            marginBottom: "1.5rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.16em",
            color: "var(--c-orange)",
            textTransform: "uppercase",
          }}
        >
          SECTION 02 // PARCOURS & PHILOSOPHIE
        </div>

        <div data-reveal-corps="">
        <blockquote className="monumental-quote-display">
          &ldquo;Ce qui me plaît dans le développement web, c&apos;est de partir
          d&apos;une idée ou d&apos;un besoin et de lui donner vie à travers{" "}
          <span className="accent-quote">une interface.</span>&rdquo;
        </blockquote>

        <div className="about-editorial-columns">
          <div className="editorial-narrative-col">
            <p>
              Je suis <strong>Anne Marie Agbonou</strong>, développeuse frontend
              et analyste programmeuse.
            </p>
            <p>
              J&apos;aime autant réfléchir à l&apos;organisation d&apos;une page
              qu&apos;à ses interactions, ses détails visuels ou son
              fonctionnement. Pour moi, une bonne interface ne doit pas seulement
              être belle :{" "}
              <strong>
                elle doit être claire, agréable et répondre à un vrai besoin
              </strong>
              .
            </p>
          </div>

          <div className="editorial-narrative-col">
            <p>
              Au fil de mes expériences, j&apos;ai travaillé sur des applications
              métier, des interfaces de gestion et des projets web plus créatifs.
            </p>
            <p>
              Aujourd&apos;hui, je continue à approfondir mes compétences tout en
              développant ma propre approche du frontend :{" "}
              <strong>
                créer des interfaces utiles, cohérentes et avec une vraie
                personnalité
              </strong>
              .
            </p>
          </div>
        </div>

        <div className="method-pillars-grid">
          {PILIERS_METHODE.map((pilier) => (
            <div key={pilier.code} className="method-pillar-entry">
              <span className="pillar-folio-code">{pilier.code}</span>
              <h3 className="pillar-entry-heading">{pilier.titre}</h3>
              <p className="pillar-entry-text">{pilier.texte}</p>
            </div>
          ))}
        </div>
        </div>
      </Container>
    </section>
  );
}
