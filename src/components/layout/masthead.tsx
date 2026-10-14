"use client";

import { Container } from "@/components/layout/container";
import { usePortfolio } from "@/components/providers/fournisseur-portfolio";

export function Masthead() {
  const { themeStudioSombre, basculerTheme, sonActif, basculerSon } =
    usePortfolio();

  return (
    <aside
      className="masthead-folio"
      aria-label="Informations techniques et folio d'édition"
    >
      <Container className="masthead-inner">
        <div className="folio-item">
          <span className="folio-marker">AM·AGB //</span>
          <span>ÉDITION 2026 · DOSSIER DE CANDIDATURE & CRAFT</span>
        </div>

        <div className="folio-status-beacon">
          <span className="beacon-dot" />
          <span>DISPONIBLE POUR MISSIONS & OPPORTUNITÉS FRONTEND</span>
        </div>

        <div className="folio-controls">
          <button
            type="button"
            className="btn-folio-toggle"
            aria-label="Activer ou couper le son"
            aria-pressed={sonActif}
            onClick={basculerSon}
          >
            <span>Audio UI :</span>
            <strong>{sonActif ? "ON" : "OFF"}</strong>
          </button>

          <button
            type="button"
            className="btn-folio-toggle"
            aria-label="Basculer l'ambiance studio"
            aria-pressed={themeStudioSombre}
            onClick={basculerTheme}
          >
            <span>Ambiance :</span>
            <strong>{themeStudioSombre ? "Sombre" : "Ivoire"}</strong>
          </button>
        </div>
      </Container>
    </aside>
  );
}
