"use client";

import { Container } from "@/components/layout/container";
import { useI18n } from "@/hooks/use-i18n";

export function ExperienceSection() {
  const { t } = useI18n();

  return (
    <section
      id="experience"
      className="experience-timeline-sec"
      data-reveal-section=""
    >
      <Container>
        <div className="section-editorial-header" data-reveal-entete="">
          <div>
            <span className="sec-index-number">{t.experience.label}</span>
            <h2 className="sec-editorial-title">{t.experience.title}</h2>
          </div>
          <p className="sec-editorial-desc">{t.experience.desc}</p>
        </div>

        <div className="experience-timeline" data-reveal-stagger="">
          {t.experience.items.map((item) => (
            <article key={item.company} className="experience-timeline-entry">
              <div className="experience-timeline-marker" aria-hidden="true">
                <span className="experience-timeline-dot" />
              </div>
              <div className="experience-timeline-body">
                <div className="experience-timeline-head">
                  <div>
                    <p className="experience-company">{item.company}</p>
                    <h3 className="experience-role">{item.role}</h3>
                  </div>
                  <time className="experience-period" dateTime="2025-08">
                    {item.period}
                  </time>
                </div>

                <div className="experience-block">
                  <p className="experience-block-label">
                    {t.experience.stackLabel}
                  </p>
                  <ul className="experience-stack-list">
                    {item.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-block">
                  <p className="experience-block-label">
                    {t.experience.missionsLabel}
                  </p>
                  <ul className="experience-missions-list">
                    {item.missions.map((mission) => (
                      <li key={mission}>{mission}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
