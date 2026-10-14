import { Container } from "@/components/layout/container";
import { LIGNES_COMPETENCES } from "@/data/competences";

function classeBadge(variante?: string): string {
  if (variante === "primary") {
    return "spec-item-badge badge-primary";
  }
  if (variante === "sauge") {
    return "spec-item-badge badge-sauge";
  }
  return "spec-item-badge";
}

export function SpecificationsSection() {
  return (
    <section
      id="specifications"
      className="competences-spec-sec"
      data-reveal-section=""
    >
      <Container>
        <div className="section-editorial-header" data-reveal-entete="">
          <div>
            <span className="sec-index-number">
              SECTION 03 // ÉCOSYSTÈME TECHNIQUE
            </span>
            <h2 className="sec-editorial-title">Fiche de Spécifications</h2>
          </div>
          <p className="sec-editorial-desc">
            Revue exhaustive des technologies, langages et méthodes maîtrisés,
            organisée selon les impératifs de production moderne.
          </p>
        </div>

        <div className="skills-specification-table" data-reveal-corps="">
          {LIGNES_COMPETENCES.map((ligne) => (
            <div key={ligne.marqueur} className="skill-spec-row">
              <div className="skill-domain-title">
                <span className="spec-marker">{ligne.marqueur}</span>
                <span>{ligne.domaine}</span>
              </div>
              <div className="skill-tags-flex">
                {ligne.badges.map((badge) => (
                  <span
                    key={badge.libelle}
                    className={classeBadge(badge.variante)}
                  >
                    {badge.libelle}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
