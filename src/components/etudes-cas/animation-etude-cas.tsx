"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { BASE_FROM_SCROLL } from "@/lib/animations/config-reveal";
import { EASE_EDITORIAL } from "@/lib/animations/constantes";
import {
  enregistrerPluginsGsap,
  gsap,
  ScrollTrigger,
} from "@/lib/animations/gsap-plugins";
import { prefererMouvementReduit } from "@/lib/animations/mouvement-reduit";

enregistrerPluginsGsap();

interface PropsAnimationEtudeCas {
  children: ReactNode;
}

export function AnimationEtudeCas({ children }: PropsAnimationEtudeCas) {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scopeRef.current || prefererMouvementReduit()) {
        return;
      }

      const scope = scopeRef.current;
      const nettoyeurs: Array<() => void> = [];

      const ctx = gsap.context(() => {
        const heroEntete = scope.querySelector<HTMLElement>(
          ".etude-cas-hero [data-reveal-etude-entete]",
        );
        const heroCorps = scope.querySelector<HTMLElement>(
          ".etude-cas-hero [data-reveal-etude-corps]",
        );

        const intro = gsap.timeline({ defaults: { ease: EASE_EDITORIAL } });
        if (heroEntete) {
          intro.from(heroEntete, { y: 32, autoAlpha: 0, duration: 0.85 });
        }
        if (heroCorps) {
          intro.from(
            heroCorps,
            { x: 28, autoAlpha: 0, duration: 0.95 },
            heroEntete ? "-=0.55" : 0,
          );
        }

        scope
          .querySelectorAll<HTMLElement>(
            ".etude-cas-corps [data-reveal-etude-entete]",
          )
          .forEach((entete) => {
            gsap.from(entete, {
              ...BASE_FROM_SCROLL,
              scrollTrigger: {
                trigger: entete,
                start: "top 88%",
                once: true,
              },
              y: 28,
              autoAlpha: 0,
            });
          });

        scope
          .querySelectorAll<HTMLElement>(
            ".etude-cas-corps [data-reveal-etude-corps]",
          )
          .forEach((bloc) => {
            gsap.from(bloc, {
              ...BASE_FROM_SCROLL,
              scrollTrigger: {
                trigger: bloc,
                start: "top 86%",
                once: true,
              },
              y: 24,
              autoAlpha: 0,
            });
          });

      }, scope);

      requestAnimationFrame(() => ScrollTrigger.refresh());
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      void document.fonts?.ready.then(() => ScrollTrigger.refresh());
      nettoyeurs.push(() => window.removeEventListener("load", onLoad));

      return () => {
        nettoyeurs.forEach((nettoyer) => nettoyer());
        ctx.revert();
      };
    },
    { scope: scopeRef },
  );

  return (
    <div ref={scopeRef} className="etude-cas-animation-root">
      {children}
    </div>
  );
}
