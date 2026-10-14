"use client";

import { Container } from "@/components/layout/container";
import { ENTREES_FORMATION, type EntreeFormation } from "@/data/formation";
import { useI18n } from "@/hooks/use-i18n";

function GrouperFormation({
  titre,
  entrees,
  locale,
}: {
  titre: string;
  entrees: EntreeFormation[];
  locale: "fr" | "en";
}) {
  if (entrees.length === 0) {
    return null;
  }

  return (
    <div className="formation-group">
      <h3 className="formation-group-title">{titre}</h3>
      <div className="formation-cards-grid">
        {entrees.map((entree) => (
          <article key={entree.id} className="formation-card">
            {entree.periode ? (
              <span className="formation-card-year">{entree.periode}</span>
            ) : null}
            <h4 className="formation-card-title">
              {locale === "en" ? entree.titreEn : entree.titreFr}
            </h4>
            <p className="formation-card-school">{entree.etablissement}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function FormationSection() {
  const { locale, t } = useI18n();

  const academique = ENTREES_FORMATION.filter((e) => e.type === "academique");
  const complementaire = ENTREES_FORMATION.filter(
    (e) => e.type === "complementaire",
  );

  return (
    <section
      id="formation"
      className="formation-competences-sec"
      data-reveal-section=""
    >
      <Container>
        <div className="section-editorial-header" data-reveal-entete="">
          <div>
            <span className="sec-index-number">{t.formation.label}</span>
            <h2 className="sec-editorial-title">{t.formation.title}</h2>
          </div>
          <p className="sec-editorial-desc">{t.formation.desc}</p>
        </div>

        <div className="formation-layout" data-reveal-corps="">
          <GrouperFormation
            titre={t.formation.groupAcademic}
            entrees={academique}
            locale={locale}
          />
          <GrouperFormation
            titre={t.formation.groupTraining}
            entrees={complementaire}
            locale={locale}
          />
        </div>

        <div id="competences" className="formation-skills-block">
          <div className="section-editorial-header formation-skills-header">
            <div>
              <span className="sec-index-number">{t.skills.label}</span>
              <h2 className="sec-editorial-title">{t.skills.title}</h2>
            </div>
            <p className="sec-editorial-desc">{t.skills.desc}</p>
          </div>

          <div className="skills-cards-grid">
            {t.skills.categories.map((categorie) => (
              <article key={categorie.title} className="skill-category-card">
                <h3>{categorie.title}</h3>
                <ul>
                  {categorie.items.map((element) => (
                    <li key={element}>{element}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
