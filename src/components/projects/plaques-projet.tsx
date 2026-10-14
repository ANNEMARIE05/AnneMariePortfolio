import Image from "next/image";
import type { IdentifiantProjet } from "@/types/projet";

interface PropsPlaqueProjet {
  identifiant: IdentifiantProjet;
  variante?: "catalogue" | "drawer";
}

function MaquetteOcr() {
  return (
    <div className="mock-ui mock-ui--ocr">
      <div className="mock-ui-bar">
        <span>Portail OCR</span>
        <span className="mock-ui-pill mock-ui-pill--ok">Crédits : 120</span>
      </div>
      <div className="mock-ui-dropzone">
        <span>Déposer un document PDF</span>
        <span className="mock-ui-hint">ou parcourir les fichiers</span>
      </div>
      <div className="mock-ui-table">
        <div className="mock-ui-row mock-ui-row--head">
          <span>Fichier</span>
          <span>Statut</span>
        </div>
        <div className="mock-ui-row">
          <span>facture_2025.pdf</span>
          <span className="mock-ui-status">Extraction terminée</span>
        </div>
        <div className="mock-ui-row">
          <span>contrat_scan.pdf</span>
          <span className="mock-ui-status mock-ui-status--wait">
            En cours…
          </span>
        </div>
      </div>
      <p className="mock-ui-caption">Maquette d&apos;interface conceptuelle</p>
    </div>
  );
}

function MaquetteProduction() {
  return (
    <div className="mock-ui mock-ui--production">
      <div className="mock-ui-bar">
        <span>Pilotage production</span>
        <span className="mock-ui-pill">Atelier 04</span>
      </div>
      <div className="mock-ui-kpis">
        <div>
          <span className="mock-ui-kpi-label">Tâches actives</span>
          <span className="mock-ui-kpi-value">24</span>
        </div>
        <div>
          <span className="mock-ui-kpi-label">Avancement</span>
          <span className="mock-ui-kpi-value">78%</span>
        </div>
      </div>
      <div className="mock-ui-progress">
        <div className="mock-ui-progress-fill" />
      </div>
      <ul className="mock-ui-task-list">
        <li>
          <span>Préparation ligne A</span>
          <span className="mock-ui-tag">Priorité haute</span>
        </li>
        <li>
          <span>Contrôle qualité</span>
          <span className="mock-ui-tag mock-ui-tag--muted">En cours</span>
        </li>
      </ul>
      <p className="mock-ui-caption">Maquette d&apos;interface conceptuelle</p>
    </div>
  );
}

function MaquetteMariage() {
  return (
    <div className="mock-ui mock-ui--mariage">
      <p className="mock-mariage-names">Stéphane & Marie</p>
      <p className="mock-mariage-date">Invitation digitale</p>
      <div className="mock-mariage-rsvp">
        <span>Confirmer votre présence</span>
        <span className="mock-mariage-btn">RSVP</span>
      </div>
      <p className="mock-ui-caption mock-ui-caption--light">
        Projet en production · stephane-et-marie.site
      </p>
    </div>
  );
}

function MaquetteAmbassade() {
  return (
    <div className="mock-ui mock-ui--ambassade">
      <div className="mock-ui-bar">
        <span>Portail institutionnel</span>
        <span className="mock-ui-pill">RDC / RDA</span>
      </div>
      <div className="mock-ui-ambassade-grid">
        <div className="mock-ui-amb-card">Services consulaires</div>
        <div className="mock-ui-amb-card">Actualités</div>
        <div className="mock-ui-amb-card">Contact & horaires</div>
      </div>
      <p className="mock-ui-caption">Maquette d&apos;interface conceptuelle</p>
    </div>
  );
}

export function PlaqueProjet({
  identifiant,
  variante = "catalogue",
}: PropsPlaqueProjet) {
  const classe =
    variante === "drawer" ? "plaque-projet plaque-projet--drawer" : "plaque-projet";

  switch (identifiant) {
    case "ocr":
      return (
        <div className={classe}>
          <MaquetteOcr />
        </div>
      );
    case "production":
      return (
        <div className={classe}>
          <MaquetteProduction />
        </div>
      );
    case "mariage":
      return (
        <div className={classe}>
          <MaquetteMariage />
        </div>
      );
    case "ambassade":
      return (
        <div className={classe}>
          <MaquetteAmbassade />
        </div>
      );
    case "eagence":
      return (
        <div className={`${classe} plaque-projet--photo`}>
          <Image
            src="/images/project-aura.jpg"
            alt="Aperçu du site vitrine EAgence Paymoney"
            fill
            sizes="(max-width: 1080px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="plaque-visuel-overlay">
            <span className="plaque-visuel-label">
              Composition illustrative · EAgence
            </span>
            <span className="plaque-visuel-title">Paymoney — vitrine</span>
          </div>
        </div>
      );
    default:
      return null;
  }
}
