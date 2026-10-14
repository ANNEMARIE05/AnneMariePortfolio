"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import {
  DUREE_REVEAL_SECTION,
  EASE_EDITORIAL,
} from "@/lib/animations/constantes";
import { gsap } from "@/lib/animations/gsap-plugins";
import {
  pointerFinDisponible,
  prefererMouvementReduit,
} from "@/lib/animations/mouvement-reduit";

interface PropsAnimationHero {
  children: ReactNode;
}

export function AnimationHero({ children }: PropsAnimationHero) {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefererMouvementReduit() || !scopeRef.current) {
        return;
      }

      const scope = scopeRef.current;
      const lignesTitre = scope.querySelectorAll<HTMLElement>(
        "[data-hero-ligne-titre]",
      );

      const finaliserHero = () => {
        scope.setAttribute("data-hero-ready", "");
        scope
          .querySelectorAll<HTMLElement>(
            "[data-hero-reveal], [data-hero-ligne-titre]",
          )
          .forEach((element) => {
            gsap.set(element, { clearProps: "opacity,visibility,transform" });
            element.style.willChange = "auto";
          });
      };

      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          defaults: { ease: EASE_EDITORIAL, overwrite: "auto" },
          onComplete: finaliserHero,
        });

        timeline
          .from("[data-hero-reveal='meta']", {
            y: 14,
            autoAlpha: 0,
            duration: 0.55,
          })
          .from(
            lignesTitre,
            {
              yPercent: 100,
              duration: 0.85,
              stagger: 0.1,
            },
            "-=0.3",
          )
          .from(
            "[data-hero-reveal='statement']",
            {
              y: 18,
              autoAlpha: 0,
              duration: DUREE_REVEAL_SECTION,
            },
            "-=0.5",
          )
          .from(
            "[data-hero-reveal='current-job']",
            {
              y: 16,
              autoAlpha: 0,
              duration: 0.55,
            },
            "-=0.4",
          )
          .from(
            "[data-hero-reveal='cta']",
            {
              y: 14,
              autoAlpha: 0,
              duration: 0.5,
            },
            "-=0.35",
          )
          .from(
            "[data-hero-reveal='portrait']",
            {
              x: 28,
              autoAlpha: 0,
              scale: pointerFinDisponible() ? 0.98 : 1,
              duration: 0.95,
            },
            "-=0.75",
          );
      }, scope);

      return () => ctx.revert();
    },
    { scope: scopeRef },
  );

  return (
    <div ref={scopeRef} data-animation-hero="">
      {children}
    </div>
  );
}
