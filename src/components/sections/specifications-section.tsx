import { Container } from "@/components/layout/container";
import { CATEGORIES_COMPETENCES } from "@/data/competences";

export function SpecificationsSection() {
  return (
    <section
      id="competences"
      className="competences-spec-sec"
      data-reveal-section=""
    >
      <Container>
        <div className="section-editorial-header" data-reveal-entete="">
          <div>
            <span className="sec-index-number">Compétences</span>
            <h2 className="sec-editorial-title">Ce que je maîtrise</h2>
          </div>
          <p className="sec-editorial-desc">
            Un socle frontend solide, des langages web au quotidien et des
            pratiques d&apos;équipe pour livrer des interfaces fiables.
          </p>
        </div>

        <div className="skills-cards-grid" data-reveal-corps="">
          {CATEGORIES_COMPETENCES.map((categorie) => (
            <article key={categorie.titre} className="skill-category-card">
              <h3>{categorie.titre}</h3>
              <ul>
                {categorie.elements.map((element) => (
                  <li key={element}>{element}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
