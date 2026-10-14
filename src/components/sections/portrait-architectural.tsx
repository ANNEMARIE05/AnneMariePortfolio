"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
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
      element.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
    };

    const onMouseLeave = () => {
      element.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg)";
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
          <span className="portrait-corner-brackets">┌ &nbsp; ┐</span>

          <div className="portrait-image-inset">
            <Image
              src="/images/anne-marie-hero.jpg"
              alt="Portrait d'Anne Marie Agbonou dans son atelier de création"
              fill
              priority
              sizes="(max-width: 1080px) 100vw, 40vw"
              className="object-cover"
              style={{ filter: "contrast(1.05) brightness(0.96)" }}
            />
          </div>

          <div className="portrait-plate-legend">
            <span className="plate-author-title">ANNE MARIE AGBONOU</span>
            <span>PARIS / REMOTE · INTERMÉDIAIRE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
