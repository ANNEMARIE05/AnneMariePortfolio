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
          .querySelectorAll<HTMLElement>("[data-hero-reveal], [data-hero-ligne-titre]")
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
            y: 18,
            autoAlpha: 0,
            duration: 0.65,
          })
          .from(
            lignesTitre,
            {
              yPercent: 108,
              duration: 0.9,
              stagger: 0.11,
            },
            "-=0.35",
          )
          .from(
            "[data-hero-reveal='statement']",
            {
              y: 22,
              autoAlpha: 0,
              duration: DUREE_REVEAL_SECTION,
            },
            "-=0.45",
          )
          .from(
            "[data-hero-reveal='prisme']",
            {
              y: 28,
              autoAlpha: 0,
              duration: DUREE_REVEAL_SECTION,
            },
            "-=0.55",
          )
          .from(
            "[data-hero-reveal='cta']",
            {
              y: 16,
              autoAlpha: 0,
              duration: 0.55,
            },
            "-=0.5",
          )
          .from(
            "[data-hero-reveal='portrait']",
            {
              x: 36,
              autoAlpha: 0,
              scale: pointerFinDisponible() ? 0.98 : 1,
              duration: 1.05,
            },
            "-=0.85",
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
