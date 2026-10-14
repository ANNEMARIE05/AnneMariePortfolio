import type { IdentifiantProjet } from "@/types/projet";

interface PropsPlaqueProjet {
  identifiant: IdentifiantProjet;
}

export function PlaqueProjet({ identifiant }: PropsPlaqueProjet) {
  switch (identifiant) {
    case "ocr":
      return (
        <div className="canvas-plate-art art-plate-ocr">
          <div className="canvas-corner-tag">FIG. 01 — ARCHITECTURE FLUX OCR</div>
          <div className="canvas-schematic-box">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.6rem",
                color: "#fff",
              }}
            >
              <span>DOC_SCAN_2026.PDF</span>
              <span style={{ color: "#8DE898" }}>EXTRACTION 100%</span>
            </div>
            <div style={{ fontSize: "0.7rem", color: "#ABA89F" }}>
              • Gestion session utilisateur & crédits
              <br />
              • Visualisation des métadonnées extraites
              <br />• Interface réactive sous Next.js & Tailwind
            </div>
          </div>
          <div className="canvas-caption-strip">
            <span>Composition d&apos;interface conceptuelle</span>
            <span>Dossier 01 ↗</span>
          </div>
        </div>
      );
    case "production":
      return (
        <div className="canvas-plate-art art-plate-production">
          <div className="canvas-corner-tag">FIG. 02 — COCKPIT DE GESTION</div>
          <div className="canvas-schematic-box">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
                color: "#fff",
              }}
            >
              <span>ATELIER 04 — CADENCE</span>
              <span style={{ color: "var(--c-orange)" }}>EN FLUX</span>
            </div>
            <div
              style={{
                height: "6px",
                background: "rgba(255,255,255,0.15)",
                marginBottom: "0.6rem",
              }}
            >
              <div
                style={{
                  width: "82%",
                  height: "100%",
                  background: "var(--c-orange)",
                }}
              />
            </div>
            <div style={{ fontSize: "0.7rem", color: "#A8B8A6" }}>
              • Supervision des ressources affectées
              <br />• Vues filtrées par niveau de priorité
            </div>
          </div>
          <div className="canvas-caption-strip">
            <span>Composition d&apos;interface conceptuelle</span>
            <span>Dossier 02 ↗</span>
          </div>
        </div>
      );
    case "eagence":
      return (
        <div className="canvas-plate-art art-plate-eagence">
          <div className="canvas-corner-tag">FIG. 03 — SHOWCASE VITRINE</div>
          <div className="canvas-schematic-box">
            <div
              style={{
                fontWeight: 700,
                color: "#fff",
                marginBottom: "0.3rem",
              }}
            >
              Paymoney Digital Platform
            </div>
            <div style={{ fontSize: "0.7rem", color: "#C0BDCF" }}>
              • Grille responsive adaptative
              <br />• Structure éditoriale orientée conversion
            </div>
          </div>
          <div className="canvas-caption-strip">
            <span>Composition d&apos;interface conceptuelle</span>
            <span>Dossier 03 ↗</span>
          </div>
        </div>
      );
    case "mariage":
      return (
        <div className="canvas-plate-art art-plate-mariage">
          <div className="canvas-corner-tag">FIG. 04 — EXPÉRIENCE ÉVÉNEMENTIELLE</div>
          <div className="canvas-schematic-box">
            <div
              style={{
                fontFamily: "var(--font-editorial)",
                fontSize: "1.8rem",
                fontStyle: "italic",
                color: "var(--c-noir)",
                marginBottom: "0.3rem",
              }}
            >
              Stéphane & Marie
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--c-noir-muted)" }}>
              • Module RSVP interactif
              <br />• Consultation sécurisée des présences
            </div>
          </div>
          <div className="canvas-caption-strip">
            <span>Projet déployé en ligne</span>
            <span>stephane-et-marie.site ↗</span>
          </div>
        </div>
      );
    default:
      return null;
  }
}
