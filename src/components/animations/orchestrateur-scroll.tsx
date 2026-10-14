"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import {
  BASE_FROM_SCROLL,
  propsCorpsSection,
  propsEnteteSection,
  scrollTriggerUneFois,
} from "@/lib/animations/config-reveal";
import {
  DECALAGE_SCROLL_MASTHEAD,
  EASE_EDITORIAL,
  SELECTEUR_BOUTONS_MICRO,
} from "@/lib/animations/constantes";
import {
  enregistrerPluginsGsap,
  gsap,
  ScrollTrigger,
} from "@/lib/animations/gsap-plugins";
import {
  pointerFinDisponible,
  prefererMouvementReduit,
} from "@/lib/animations/mouvement-reduit";

enregistrerPluginsGsap();

interface PropsOrchestrateurScroll {
  children: ReactNode;
}

export function OrchestrateurScroll({ children }: PropsOrchestrateurScroll) {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!mainRef.current || prefererMouvementReduit()) {
        return;
      }

      const scope = mainRef.current;
      const nettoyeurs: Array<() => void> = [];

      const ctx = gsap.context(() => {
        scope.querySelectorAll<HTMLElement>("[data-reveal-section]").forEach(
          (section) => {
            const entete = section.querySelector<HTMLElement>(
              "[data-reveal-entete]",
            );
            if (entete) {
              gsap.from(entete, propsEnteteSection(section));
            }

            const corps = section.querySelector<HTMLElement>(
              "[data-reveal-corps]",
            );
            if (corps) {
              gsap.from(corps, propsCorpsSection(section));
            }
          },
        );

        scope.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach(
          (conteneur) => {
            const enfants = Array.from(conteneur.children) as HTMLElement[];
            if (enfants.length === 0) {
              return;
            }

            gsap.from(enfants, {
              ...BASE_FROM_SCROLL,
              y: 28,
              autoAlpha: 0,
              stagger: 0.11,
              scrollTrigger: scrollTriggerUneFois(conteneur, "top 84%"),
            });
          },
        );

        scope.querySelectorAll<HTMLElement>("[data-reveal-dossier]").forEach(
          (article) => {
            const meta = article.querySelector<HTMLElement>(
              ".dossier-meta-column",
            );
            const visuel = article.querySelector<HTMLElement>(
              ".dossier-visual-canvas",
            );
            const folio = article.querySelector<HTMLElement>(
              ".dossier-folio-number",
            );

            const timelineDossier = gsap.timeline({
              scrollTrigger: {
                trigger: article,
                start: "top 88%",
                once: true,
              },
              defaults: {
                ease: EASE_EDITORIAL,
                duration: 0.85,
                immediateRender: false,
              },
            });

            if (folio) {
              timelineDossier.from(folio, {
                x: -16,
                autoAlpha: 0,
                duration: 0.6,
              });
            }
            if (meta) {
              timelineDossier.from(
                meta,
                { x: -28, autoAlpha: 0 },
                folio ? "-=0.35" : 0,
              );
            }
            if (visuel) {
              timelineDossier.from(
                visuel,
                { x: 32, autoAlpha: 0, scale: 0.98 },
                meta ? "-=0.65" : 0,
              );
            }
          },
        );

        if (pointerFinDisponible()) {
          scope
            .querySelectorAll<HTMLElement>(".dossier-visual-canvas")
            .forEach((canvas) => {
              gsap.set(canvas, { transformOrigin: "center center" });

              const quickScale = gsap.quickTo(canvas, "scale", {
                duration: 0.45,
                ease: EASE_EDITORIAL,
              });
              const quickY = gsap.quickTo(canvas, "y", {
                duration: 0.45,
                ease: EASE_EDITORIAL,
              });

              const onEnter = () => {
                quickScale(1.015);
                quickY(-4);
              };
              const onLeave = () => {
                quickScale(1);
                quickY(0);
              };

              canvas.addEventListener("mouseenter", onEnter);
              canvas.addEventListener("mouseleave", onLeave);
              nettoyeurs.push(() => {
                canvas.removeEventListener("mouseenter", onEnter);
                canvas.removeEventListener("mouseleave", onLeave);
              });
            });
        }

        scope.querySelectorAll<HTMLElement>(SELECTEUR_BOUTONS_MICRO).forEach(
          (bouton) => {
            if (!pointerFinDisponible()) {
              return;
            }

            gsap.set(bouton, { transformOrigin: "center center" });

            const quickScale = gsap.quickTo(bouton, "scale", {
              duration: 0.22,
              ease: "power2.out",
            });

            const estLienNav = bouton.classList.contains("header-nav-link");
            const onEnter = () => {
              if (!estLienNav) {
                quickScale(1.02);
              }
            };
            const onDown = () => quickScale(0.97);
            const onUp = () => quickScale(estLienNav ? 1 : 1.02);
            const onLeave = () => quickScale(1);

            bouton.addEventListener("pointerenter", onEnter);
            bouton.addEventListener("pointerdown", onDown);
            bouton.addEventListener("pointerup", onUp);
            bouton.addEventListener("pointerleave", onLeave);
            bouton.addEventListener("pointercancel", onLeave);

            nettoyeurs.push(() => {
              bouton.removeEventListener("pointerenter", onEnter);
              bouton.removeEventListener("pointerdown", onDown);
              bouton.removeEventListener("pointerup", onUp);
              bouton.removeEventListener("pointerleave", onLeave);
              bouton.removeEventListener("pointercancel", onLeave);
            });
          },
        );

        document
          .querySelectorAll<HTMLAnchorElement>('a[href^="#"]:not([href="#"])')
          .forEach((lien) => {
            const onClick = (event: MouseEvent) => {
              const id = lien.getAttribute("href");
              if (!id) {
                return;
              }
              const cible = document.querySelector(id);
              if (!cible) {
                return;
              }

              event.preventDefault();
              gsap.to(window, {
                duration: 1.05,
                ease: EASE_EDITORIAL,
                scrollTo: {
                  y: cible,
                  offsetY: DECALAGE_SCROLL_MASTHEAD,
                },
              });
            };

            lien.addEventListener("click", onClick);
            nettoyeurs.push(() =>
              lien.removeEventListener("click", onClick),
            );
          });
        const rafRefresh = requestAnimationFrame(() => ScrollTrigger.refresh());

        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", onLoad);

        const promessePolices =
          document.fonts?.ready ?? Promise.resolve(undefined);
        void promessePolices.then(() => ScrollTrigger.refresh());

        nettoyeurs.push(() => {
          cancelAnimationFrame(rafRefresh);
          window.removeEventListener("load", onLoad);
        });
      }, scope);

      return () => {
        nettoyeurs.forEach((nettoyer) => nettoyer());
        ctx.revert();
      };
    },
    { scope: mainRef },
  );

  return (
    <main
      ref={mainRef}
      id="contenu-principal"
      data-orchestrateur-scroll=""
      tabIndex={-1}
    >
      {children}
    </main>
  );
}
