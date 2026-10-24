"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { LIENS_NAVIGATION } from "@/data/navigation";
import { useI18n } from "@/hooks/use-i18n";
import { BoutonTheme } from "@/components/ui/bouton-theme";
import { SelecteurLangue } from "@/components/ui/selecteur-langue";

const SELECTEUR_FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface PropsNavigationMobile {
  hrefSectionActive: string | null;
}

export function NavigationMobile({ hrefSectionActive }: PropsNavigationMobile) {
  const { t } = useI18n();
  const [menuOuvert, setMenuOuvert] = useState(false);
  const idPanel = useId();
  const refPanel = useRef<HTMLElement>(null);
  const refToggle = useRef<HTMLButtonElement>(null);

  const fermerMenu = useCallback(() => {
    setMenuOuvert(false);
    requestAnimationFrame(() => {
      refToggle.current?.focus();
    });
  }, []);

  useEffect(() => {
    const main = document.getElementById("contenu-principal");

    if (!menuOuvert) {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      return;
    }
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");

    const panel = refPanel.current;
    const focusables = panel
      ? (Array.from(
          panel.querySelectorAll<HTMLElement>(SELECTEUR_FOCUSABLE),
        ) as HTMLElement[])
      : [];

    requestAnimationFrame(() => {
      focusables[0]?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        fermerMenu();
        return;
      }

      if (event.key !== "Tab" || focusables.length === 0) {
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const actif = document.activeElement;

      if (event.shiftKey && actif === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && actif === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOuvert, fermerMenu]);

  return (
    <div className="nav-mobile">
      <button
        ref={refToggle}
        type="button"
        className="nav-mobile-toggle"
        aria-expanded={menuOuvert}
        aria-controls={idPanel}
        aria-haspopup="true"
        aria-label={menuOuvert ? t.nav.menuClose : t.nav.menuOpen}
        onClick={() => setMenuOuvert((v) => !v)}
      >
        <span className="nav-mobile-toggle-label">
          {menuOuvert ? t.nav.menuCloseLabel : t.nav.menuLabel}
        </span>
        <span aria-hidden="true">{menuOuvert ? "✕" : "☰"}</span>
      </button>

      <nav
        ref={refPanel}
        id={idPanel}
        className={`nav-mobile-panel${menuOuvert ? " is-open" : ""}`}
        aria-label="Navigation mobile"
        aria-hidden={!menuOuvert}
        hidden={!menuOuvert}
      >
        <ul className="nav-mobile-list">
          {LIENS_NAVIGATION.map((lien) => {
            const estActif = hrefSectionActive === lien.href;
            return (
              <li key={lien.href}>
                <a
                  href={lien.href}
                  className={`nav-mobile-link${estActif ? " is-active" : ""}`}
                  aria-current={estActif ? "location" : undefined}
                  onClick={fermerMenu}
                >
                  <span className="nav-mobile-index" aria-hidden="true">
                    {lien.indice}
                  </span>
                  {t.nav[lien.cle]}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="nav-mobile-footer">
          <div className="nav-mobile-actions-cluster">
            <BoutonTheme />
            <SelecteurLangue />
          </div>
          <a
            href="#contact"
            className="header-cta nav-mobile-cta"
            onClick={fermerMenu}
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>

      {menuOuvert ? (
        <button
          type="button"
          className="nav-mobile-backdrop"
          aria-label={t.nav.menuCloseLabel}
          onClick={fermerMenu}
        />
      ) : null}
    </div>
  );
}
