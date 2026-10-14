"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CHEMIN_PORTRAIT, VERSION_MEDIA } from "@/data/site";
import { pointerFinDisponible } from "@/lib/animations/mouvement-reduit";

export function PortraitArchitectural() {
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
      element.style.transform = `perspective(900px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
    };

    const onMouseLeave = () => {
      element.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg)";
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
          <div className="portrait-image-inset">
            <Image
              key={VERSION_MEDIA}
              src={CHEMIN_PORTRAIT}
              alt="Portrait professionnel d'Anne Marie Agbonou, en blazer, souriante en studio"
              fill
              priority
              unoptimized
              sizes="(max-width: 1080px) 100vw, 40vw"
              className="object-cover portrait-photo-hero"
            />
          </div>

          <div className="portrait-plate-legend">
            <span className="plate-author-title">Anne Marie Agbonou</span>
            <span>Frontend & interfaces web</span>
          </div>
        </div>
      </div>
    </div>
  );
}
