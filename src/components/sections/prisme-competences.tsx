"use client";

import { useState } from "react";
import { PERSPECTIVES } from "@/data/perspectives";
import type { TypePerspective } from "@/types/projet";
import { usePortfolio } from "@/components/providers/fournisseur-portfolio";

export function PrismeCompetences() {
  const [perspective, setPerspective] = useState<TypePerspective>("frontend");
  const { jouerSon } = usePortfolio();
  const puces = PERSPECTIVES[perspective];

  const changerPerspective = (type: TypePerspective) => {
    setPerspective(type);
    jouerSon("click");
  };

  return (
    <div className="drafting-perspective-panel">
      <div className="drafting-panel-header">
        <span>PRISME DE COMPÉTENCES // SÉLECTIONNEZ UN ANGLE</span>
        <div className="drafting-switch-tabs">
          <button
            type="button"
            role="tab"
            aria-selected={perspective === "frontend"}
            className={`draft-tab-btn${perspective === "frontend" ? " active" : ""}`}
            onClick={() => changerPerspective("frontend")}
          >
            Frontend & UI
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={perspective === "analyste"}
            className={`draft-tab-btn${perspective === "analyste" ? " active" : ""}`}
            onClick={() => changerPerspective("analyste")}
          >
            Analyse & Données
          </button>
        </div>
      </div>

      <div className="draft-chips-grid" role="tabpanel">
        {puces.map((puce) => (
          <span key={puce.code} className="draft-spec-chip">
            <span className="chip-code-symbol">[{puce.code}]</span>
            {puce.libelle}
          </span>
        ))}
      </div>
    </div>
  );
}
