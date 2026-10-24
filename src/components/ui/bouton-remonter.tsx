"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/hooks/use-i18n";
import { useParcoursScroll } from "@/hooks/use-section-active";

const RAYON_ANNEAU = 16;
const CIRCONFERENCE = 2 * Math.PI * RAYON_ANNEAU;

export function BoutonRemonter() {
  const { t } = useI18n();
  const { progressionLecture } = useParcoursScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  const decalageAnneau = CIRCONFERENCE * (1 - progressionLecture);

  return (
    <button
      type="button"
      className="bouton-remonter"
      aria-label={t.scrollTop}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <svg
        className="bouton-remonter-anneau"
        viewBox="0 0 36 36"
        aria-hidden="true"
      >
        <circle
          className="bouton-remonter-anneau-fond"
          cx="18"
          cy="18"
          r={RAYON_ANNEAU}
        />
        <circle
          className="bouton-remonter-anneau-progres"
          cx="18"
          cy="18"
          r={RAYON_ANNEAU}
          strokeDasharray={CIRCONFERENCE}
          strokeDashoffset={decalageAnneau}
        />
      </svg>
      <span className="bouton-remonter-icone" aria-hidden="true">
        ↑
      </span>
    </button>
  );
}
