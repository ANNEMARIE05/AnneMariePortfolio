"use client";

import { useGSAP } from "@gsap/react";
import { useMemo, useRef, type CSSProperties } from "react";
import { LogoMarque } from "@/components/ui/logo-marque";
import { usePortfolio } from "@/components/providers/fournisseur-portfolio";
import { PHRASES_BANDEAU } from "@/data/ticker";
import { useI18n } from "@/hooks/use-i18n";
import { EASE_EDITORIAL } from "@/lib/animations/constantes";
import { gsap } from "@/lib/animations/gsap-plugins";
import { prefererMouvementReduit } from "@/lib/animations/mouvement-reduit";

export function AnimationLancement() {
  const { phaseIntro, terminerIntro } = usePortfolio();
  const { t } = useI18n();
  const refRideau = useRef<HTMLDivElement>(null);
  const mouvementReduit = prefererMouvementReduit();

  const libellesOrbite = useMemo(() => {
    const segmentsTicker = PHRASES_BANDEAU.flatMap((phrase) =>
      phrase.split("·").map((partie) => partie.trim()),
    );
    const fusion = [
      t.intro.profileRole,
      t.intro.profileCompany,
      t.intro.profileBadge,
      ...segmentsTicker,
    ].filter(Boolean);
    return [...new Set(fusion)].slice(0, 10);
  }, [t]);

  useGSAP(
    () => {
      if (phaseIntro !== "lecture" || !refRideau.current) {
        return;
      }

      const scope = refRideau.current;
      const panneaux = scope.querySelectorAll<HTMLElement>(
        ".intro-lancement-rideau-panneau",
      );

      const ctx = gsap.context(() => {
        gsap.set(panneaux, { y: "0%" });

        const timeline = gsap.timeline({
          defaults: { ease: EASE_EDITORIAL },
          onComplete: terminerIntro,
        });

        timeline
          .from(".intro-lancement-voile", {
            autoAlpha: 0,
            duration: 0.5,
          })
          .from(
            "[data-intro='orbit']",
            {
              scale: 0.55,
              autoAlpha: 0,
              duration: 1.25,
              ease: "power3.out",
            },
            "-=0.15",
          )
          .from(
            ".intro-orbit-anneau-pulse",
            {
              scale: 0.85,
              autoAlpha: 0,
              duration: 0.85,
            },
            "-=0.75",
          )
          .from(
            "[data-intro='logo']",
            {
              scale: 0.55,
              autoAlpha: 0,
              duration: 0.75,
            },
            "-=0.55",
          )
          .from(
            "[data-intro='ligne-role']",
            {
              y: 14,
              autoAlpha: 0,
              duration: 0.5,
            },
            "-=0.45",
          )
          .from(
            "[data-intro='ligne-ngser']",
            {
              y: 22,
              autoAlpha: 0,
              duration: 0.6,
            },
            "-=0.35",
          )
          .from(
            "[data-intro='tagline']",
            {
              y: 14,
              autoAlpha: 0,
              duration: 0.5,
            },
            "-=0.35",
          )
          .from(
            ".intro-orbit-libelle",
            {
              scale: 0.6,
              autoAlpha: 0,
              duration: 0.55,
              stagger: 0.05,
            },
            "-=0.45",
          )
          .to({}, { duration: 1.35 })
          .to(
            ".intro-lancement-scene",
            {
              y: -20,
              autoAlpha: 0,
              duration: 0.38,
              ease: "power2.in",
            },
            "sortie",
          )
          .to(
            panneaux,
            {
              y: "-102%",
              duration: 0.65,
              ease: "power3.inOut",
              stagger: 0.04,
            },
            "sortie+=0.04",
          )
          .to(
            scope,
            {
              autoAlpha: 0,
              duration: 0.35,
              pointerEvents: "none",
            },
            "-=0.15",
          );
      }, scope);

      return () => ctx.revert();
    },
    [phaseIntro, terminerIntro],
  );

  if (phaseIntro === "terminee" || mouvementReduit) {
    return null;
  }

  if (phaseIntro === "attente") {
    return null;
  }

  return (
    <div
      ref={refRideau}
      className="intro-lancement"
      role="dialog"
      aria-modal="true"
      aria-label={t.intro.profileBadge}
    >
      <div className="intro-lancement-voile" data-intro="voile" aria-hidden="true" />
      <div className="intro-lancement-scene">
        <div className="intro-orbit" data-intro="orbit" aria-hidden="true">
          <span className="intro-orbit-anneau intro-orbit-anneau--ext" />
          <span className="intro-orbit-anneau intro-orbit-anneau-pulse" />
          <span className="intro-orbit-anneau intro-orbit-anneau--int" />
          <div
            className={
              mouvementReduit
                ? "intro-orbit-rotor intro-orbit-rotor--pause"
                : "intro-orbit-rotor"
            }
          >
            {libellesOrbite.map((libelle, index) => (
              <span
                key={`${libelle}-${index}`}
                className="intro-orbit-libelle"
                style={
                  {
                    "--orbit-i": index,
                    "--orbit-n": libellesOrbite.length,
                  } as CSSProperties
                }
              >
                <span className="intro-orbit-libelle-inner">{libelle}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="intro-orbit-noyau">
          <div data-intro="logo">
            <LogoMarque taille={88} prioritaire className="intro-lancement-logo" />
          </div>
          <p className="intro-lancement-role" data-intro="ligne-role">
            {t.intro.profileRole}
          </p>
          <p className="intro-lancement-ngser" data-intro="ligne-ngser">
            {t.intro.profileCompany}
          </p>
          <p className="intro-lancement-tagline" data-intro="tagline">
            {t.intro.tagline}
          </p>
        </div>
      </div>
      <div className="intro-lancement-rideau" aria-hidden="true">
        <span className="intro-lancement-rideau-panneau" />
        <span className="intro-lancement-rideau-panneau" />
      </div>
      <button
        type="button"
        className="intro-lancement-skip"
        onClick={() => {
          if (refRideau.current) {
            gsap.killTweensOf(refRideau.current);
            gsap.to(refRideau.current, {
              autoAlpha: 0,
              duration: 0.35,
              onComplete: terminerIntro,
            });
          } else {
            terminerIntro();
          }
        }}
      >
        {t.intro.skip}
      </button>
    </div>
  );
}
