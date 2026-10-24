"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { usePortfolio } from "@/components/providers/fournisseur-portfolio";
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
  const { phaseIntro } = usePortfolio();

  useGSAP(
    () => {
      if (!scopeRef.current || phaseIntro !== "terminee") {
        return;
      }

      const scope = scopeRef.current;

      if (prefererMouvementReduit()) {
        scope.setAttribute("data-hero-ready", "");
        return;
      }
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
          .from(".hero-ambiance .hero-orb", {
            scale: 0.6,
            autoAlpha: 0,
            duration: 1.1,
            stagger: 0.15,
          })
          .from("[data-hero-reveal='profil']", {
            y: 20,
            autoAlpha: 0,
            duration: 0.65,
          })
          .from("[data-hero-reveal='meta']", {
            y: 14,
            autoAlpha: 0,
            duration: 0.55,
          })
          .from(
            lignesTitre,
            {
              yPercent: 110,
              duration: 1,
              stagger: 0.12,
              ease: "power4.out",
            },
            "-=0.55",
          )
          .from(
            ".title-line-serif-accent",
            {
              yPercent: 120,
              duration: 0.95,
              ease: "power4.out",
            },
            "-=0.75",
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
            "[data-hero-reveal='current-job'] .hero-current-job-stack li",
            {
              y: 10,
              autoAlpha: 0,
              duration: 0.35,
              stagger: 0.06,
            },
            "-=0.35",
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
              x: 36,
              autoAlpha: 0,
              scale: pointerFinDisponible() ? 0.94 : 1,
              duration: 1.05,
              ease: "power3.out",
            },
            "-=0.85",
          );

      }, scope);

      return () => ctx.revert();
    },
    { scope: scopeRef, dependencies: [phaseIntro] },
  );

  return (
    <div ref={scopeRef} className="hero-animation-scope" data-animation-hero="">
      {children}
    </div>
  );
}
