"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/container";
import { NavigationMobile } from "@/components/layout/navigation-mobile";
import { LogoMarque } from "@/components/ui/logo-marque";
import { CHEMIN_LOGO } from "@/data/site";
import { SelecteurLangue } from "@/components/ui/selecteur-langue";
import { BoutonTheme } from "@/components/ui/bouton-theme";
import { LIENS_NAVIGATION } from "@/data/navigation";
import { useI18n } from "@/hooks/use-i18n";
import { useParcoursScroll } from "@/hooks/use-section-active";

export function SiteHeader() {
  const { t } = useI18n();
  const { hrefSectionActive } = useParcoursScroll();
  const refHeader = useRef<HTMLElement>(null);
  const [defile, setDefile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setDefile(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const racine = document.documentElement;
    const entete = refHeader.current;
    if (!entete) {
      return;
    }

    const synchroniserOffset = () => {
      racine.style.setProperty(
        "--nav-offset",
        `${entete.getBoundingClientRect().height}px`,
      );
    };

    synchroniserOffset();
    const observateur = new ResizeObserver(synchroniserOffset);
    observateur.observe(entete);
    window.addEventListener("resize", synchroniserOffset);

    return () => {
      observateur.disconnect();
      window.removeEventListener("resize", synchroniserOffset);
    };
  }, [defile]);

  return (
    <header
      ref={refHeader}
      className={`site-header${defile ? " is-scrolled" : ""}`}
    >
      <Container className="header-shell">
        <a href="#hero" className="header-brand">
          <LogoMarque
            taille={44}
            prioritaire
            src={CHEMIN_LOGO}
            className="header-brand-logo"
          />
          <span className="header-brand-copy">
            <span className="header-brand-name">Anne Marie Agbonou</span>
          </span>
        </a>

        <nav className="header-nav" aria-label="Navigation principale">
          {LIENS_NAVIGATION.map((lien) => {
            const estActif = hrefSectionActive === lien.href;
            return (
              <a
                key={lien.href}
                href={lien.href}
                className={`header-nav-link${estActif ? " is-active" : ""}`}
                aria-current={estActif ? "location" : undefined}
              >
                <span className="header-nav-index" aria-hidden="true">
                  {lien.indice}
                </span>
                {t.nav[lien.cle]}
              </a>
            );
          })}
        </nav>

        <div className="header-end">
          <BoutonTheme />
          <SelecteurLangue />
          <a href="#contact" className="header-cta">
            {t.nav.cta}
          </a>
          <NavigationMobile hrefSectionActive={hrefSectionActive} />
        </div>
      </Container>
    </header>
  );
}
