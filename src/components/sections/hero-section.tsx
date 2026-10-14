"use client";

import { AnimationHero } from "@/components/animations/animation-hero";
import { Container } from "@/components/layout/container";
import { PortraitArchitectural } from "@/components/sections/portrait-architectural";
import { obtenirLienWhatsApp } from "@/data/site";
import { useI18n } from "@/hooks/use-i18n";

function IconeWhatsApp() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.882 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function HeroSection() {
  const { locale, t } = useI18n();
  const lienWhatsApp = obtenirLienWhatsApp(locale);

  return (
    <section id="hero" className="hero-cover">
      <AnimationHero>
        <Container className="hero-composition-grid">
          <div className="hero-lead-col">
            <div className="hero-profil-annonce" data-hero-reveal="profil">
              <p className="hero-profil-ligne">
                <span className="hero-profil-role">{t.hero.profileRole}</span>{" "}
                <span className="hero-profil-at">{t.hero.profileAt}</span>{" "}
                <span className="hero-profil-ngser">{t.hero.profileCompany}</span>
              </p>
              <span className="hero-profil-badge">{t.hero.profileBadge}</span>
            </div>

            <p className="hero-editorial-meta" data-hero-reveal="meta">
              <span className="meta-tag-bold">{t.hero.metaName}</span>
            </p>

            <h1 className="hero-monumental-title">
              <span className="title-line-block">
                <span className="title-line-inner" data-hero-ligne-titre="">
                  {t.hero.titleLine1}{" "}
                  <span className="title-line-serif-accent">
                    {t.hero.titleAccent}
                  </span>
                </span>
              </span>
              <span className="title-line-block">
                <span className="title-line-inner" data-hero-ligne-titre="">
                  {t.hero.titleLine2}
                </span>
              </span>
            </h1>

            <p className="hero-statement-text" data-hero-reveal="statement">
              {t.hero.statement}
            </p>

            <article
              className="hero-current-job"
              data-hero-reveal="current-job"
              aria-labelledby="hero-current-job-heading"
            >
              <p className="hero-current-job-label">{t.hero.currentJobLabel}</p>
              <h2 id="hero-current-job-heading" className="hero-current-job-role">
                {t.hero.currentJobRole}
              </h2>
              <p className="hero-current-job-company">{t.hero.currentJobCompany}</p>
              <p className="hero-current-job-summary">
                {t.hero.currentJobSummary}
              </p>
              <ul className="hero-current-job-stack" aria-label="Stack">
                {t.hero.currentJobStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </article>

            <div className="hero-cta-ribbon" data-hero-reveal="cta">
              <a href="#projets" className="btn-solid-orange">
                <span>{t.hero.ctaProjects}</span>
                <span aria-hidden="true">↓</span>
              </a>

              <a href="#contact" className="btn-outline-ink">
                <span>{t.hero.ctaContact}</span>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href={lienWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-outline"
              >
                <IconeWhatsApp />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>
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
