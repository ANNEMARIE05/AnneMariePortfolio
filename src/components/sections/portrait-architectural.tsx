"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  CHEMIN_PORTRAIT,
  VERSION_MEDIA,
  cheminMediaVersionne,
} from "@/data/site";
import { useI18n } from "@/hooks/use-i18n";
import { pointerFinDisponible } from "@/lib/animations/mouvement-reduit";

export function PortraitArchitectural() {
  const { t } = useI18n();
  const refInclinaison = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = refInclinaison.current;
    if (!element || !pointerFinDisponible()) {
      return;
    }

    const onMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
      element.style.transform = `perspective(1000px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    };

    const onMouseLeave = () => {
      element.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    element.addEventListener("mousemove", onMouseMove);
    element.addEventListener("mouseleave", onMouseLeave);

    return () => {
      element.removeEventListener("mousemove", onMouseMove);
      element.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="hero-portrait-frame-col">
      <div className="architectural-portrait-wrapper">
        <div
          ref={refInclinaison}
          className="architectural-portrait-tilt"
          id="architecturalPortrait"
        >
          {/* Ambient luminous glow behind portrait */}
          <div className="portrait-ambient-glow" aria-hidden="true" />

          {/* Floating top credibility pill */}
          <div className="portrait-floating-chip">
            <span className="floating-chip-dot" aria-hidden="true" />
            <span>NGSER Software Analyst</span>
          </div>

          <div className="portrait-image-inset portrait-cadre-premium">
            <Image
              key={VERSION_MEDIA}
              src={cheminMediaVersionne(CHEMIN_PORTRAIT)}
              alt="Portrait professionnel d'Anne Marie Agbonou, en blazer, souriante au bureau"
              fill
              priority
              unoptimized
              sizes="(max-width: 1080px) 92vw, 42vw"
              className="object-cover portrait-photo-hero"
            />
          </div>

          <div className="portrait-plate-legend">
            <span className="plate-author-title">Anne Marie Agbonou</span>
            <span>{t.hero.portraitCaption}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
