"use client";

import { Container } from "@/components/layout/container";
import { useI18n } from "@/hooks/use-i18n";

export function ManifesteSection() {
  const { t } = useI18n();

  return (
    <section
      id="parcours"
      className="about-manifesto-sec"
      data-reveal-section=""
    >
      <Container>
        <div className="section-editorial-header about-section-index" data-reveal-entete="">
          <span className="sec-index-number">{t.about.label}</span>
        </div>

        <div className="about-parcours-frame" data-reveal-corps="">
          <div className="about-parcours-main">
            <div className="about-parcours-voice">
              <p className="about-lead-serif">
                {t.about.quote}{" "}
                <em>{t.about.quoteEm}</em> {t.about.quoteEnd}
              </p>

              <div className="about-profile-lede">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>

              <div className="about-domaines">
                <p className="about-domaines-label">{t.about.domainsLabel}</p>
                <ul className="about-domaines-list" data-reveal-stagger="">
                  {t.about.domains.map((domaine) => (
                    <li key={domaine}>{domaine}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="about-approach-panel" aria-label={t.about.approachLabel}>
              <p className="about-approach-label">{t.about.approachLabel}</p>
              <ul className="about-approach-list" data-reveal-stagger="">
                {t.about.pillars.map((pilier) => (
                  <li key={pilier.title}>
                    <span className="about-approach-item-title">
                      {pilier.title}
                    </span>
                    <span className="about-approach-item-text">
                      {pilier.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-parcours-suite">
            <p>{t.about.p3}</p>
            <p>{t.about.p4}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
