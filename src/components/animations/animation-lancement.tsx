"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { LogoMarque } from "@/components/ui/logo-marque";
import { usePortfolio } from "@/components/providers/fournisseur-portfolio";
import { useI18n } from "@/hooks/use-i18n";
import { EASE_EDITORIAL } from "@/lib/animations/constantes";
import { gsap } from "@/lib/animations/gsap-plugins";
import { prefererMouvementReduit } from "@/lib/animations/mouvement-reduit";

export function AnimationLancement() {
  const { phaseIntro, terminerIntro } = usePortfolio();
  const { t } = useI18n();
  const refRideau = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (phaseIntro !== "lecture" || !refRideau.current) {
        return;
      }

      const scope = refRideau.current;
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          defaults: { ease: EASE_EDITORIAL },
          onComplete: terminerIntro,
        });

        timeline
          .from(".intro-lancement-scene", {
            autoAlpha: 0,
            y: 10,
            duration: 0.45,
          })
          .to(
            scope,
            {
              autoAlpha: 0,
              duration: 0.55,
              delay: 0.35,
              ease: "power2.out",
            },
            "sortie",
          );
      }, scope);

      return () => ctx.revert();
    },
    [phaseIntro, terminerIntro],
  );

  if (phaseIntro === "terminee" || prefererMouvementReduit()) {
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
        <div data-intro="logo">
          <LogoMarque taille={88} prioritaire className="intro-lancement-logo" />
        </div>
        <p className="intro-lancement-role" data-intro="ligne-role">
          {t.intro.profileRole}
        </p>
        <p className="intro-lancement-ngser" data-intro="ligne-ngser">
          {t.intro.profileCompany}
        </p>
        <span className="intro-lancement-badge" data-intro="badge">
          {t.intro.profileBadge}
        </span>
        <span className="intro-lancement-trait" data-intro="trait" aria-hidden="true" />
      </div>
      <button
        type="button"
        className="intro-lancement-skip"
        onClick={() => {
          if (refRideau.current) {
            gsap.killTweensOf(refRideau.current);
          }
          terminerIntro();
        }}
      >
        {t.intro.skip}
      </button>
    </div>
  );
}
