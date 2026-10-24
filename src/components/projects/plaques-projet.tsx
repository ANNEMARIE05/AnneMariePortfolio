"use client";

import Image from "next/image";
import type { IdentifiantProjet } from "@/types/projet";

interface PropsPlaqueProjet {
  identifiant: IdentifiantProjet;
  variante?: "catalogue" | "drawer";
}

function MaquetteOcr() {
  return (
    <div className="showcase-ui showcase-ui--ocr">
      <div className="showcase-ui-header">
        <div className="showcase-ui-dots" aria-hidden="true">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <span className="showcase-ui-title">PORTAIL OCR INTELLIGENT · v4.2</span>
        <span className="showcase-badge showcase-badge--live">
          <span className="pulse-ping" />
          <span className="pulse-core" />
          LIVE AI ENGINE (99.8%)
        </span>
      </div>

      <div className="showcase-ocr-body">
        <div className="showcase-ocr-document">
          <div className="showcase-ocr-scan-beam" aria-hidden="true" />
          <div className="showcase-doc-header">
            <span className="doc-icon">📄</span>
            <div>
              <span className="doc-name">facture_prestation_2026.pdf</span>
              <span className="doc-meta">2.4 MB · Traitement optique en cours</span>
            </div>
          </div>

          <div className="showcase-doc-fields">
            <div className="doc-field doc-field--detected">
              <span className="field-label">Émetteur identifié</span>
              <span className="field-value">NGSER Technologies S.A.</span>
              <span className="field-confidence">99.9%</span>
            </div>
            <div className="doc-field doc-field--detected">
              <span className="field-label">Montant Total TTC</span>
              <span className="field-value highlight">3 850 000 XOF</span>
              <span className="field-confidence">99.8%</span>
            </div>
            <div className="doc-field doc-field--detected">
              <span className="field-label">Date & Statut</span>
              <span className="field-value">18 Oct 2026 · Validé ✓</span>
              <span className="field-confidence">100%</span>
            </div>
          </div>
        </div>

        <div className="showcase-ocr-sidebar">
          <div className="ocr-stat-chip">
            <span className="chip-label">Temps d&apos;extraction</span>
            <span className="chip-value">42 ms</span>
          </div>
          <div className="ocr-stat-chip">
            <span className="chip-label">Solde de crédits</span>
            <span className="chip-value highlight">120 restants</span>
          </div>
          <div className="ocr-json-preview">
            <span className="json-line">
              <span className="json-key">&quot;status&quot;</span>: <span className="json-str">&quot;success&quot;</span>,
            </span>
            <span className="json-line">
              <span className="json-key">&quot;confidence&quot;</span>: <span className="json-num">0.998</span>,
            </span>
            <span className="json-line">
              <span className="json-key">&quot;export&quot;</span>: <span className="json-str">&quot;JSON / REST&quot;</span>
            </span>
          </div>
        </div>
      </div>

      <div className="showcase-ui-footer">
        <span>Extraction multi-documents · Traitement asynchrone</span>
        <span className="showcase-tech-tag">Next.js · Tailwind · OCR Engine</span>
      </div>
    </div>
  );
}

function MaquetteProduction() {
  return (
    <div className="showcase-ui showcase-ui--production">
      <div className="showcase-ui-header">
        <div className="showcase-ui-dots" aria-hidden="true">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <span className="showcase-ui-title">PILOTAGE INDUSTRIEL · ATELIER 04</span>
        <span className="showcase-badge showcase-badge--prod">
          <span className="pulse-ping" />
          <span className="pulse-core" />
          TEMPS RÉEL ACTIF
        </span>
      </div>

      <div className="showcase-prod-kpi-grid">
        <div className="prod-kpi-card">
          <span className="kpi-label">Cadence globale</span>
          <div className="kpi-number-wrap">
            <span className="kpi-number">98.4%</span>
            <span className="kpi-trend">+3.2%</span>
          </div>
        </div>
        <div className="prod-kpi-card">
          <span className="kpi-label">Tâches en cours</span>
          <div className="kpi-number-wrap">
            <span className="kpi-number">36</span>
            <span className="kpi-sub">/ 38 actives</span>
          </div>
        </div>
        <div className="prod-kpi-card">
          <span className="kpi-label">Temps de cycle</span>
          <div className="kpi-number-wrap">
            <span className="kpi-number">1.4s</span>
            <span className="kpi-sub">nominal</span>
          </div>
        </div>
      </div>

      <div className="showcase-prod-pipeline">
        <div className="pipeline-step pipeline-step--done">
          <div className="step-badge">01</div>
          <div className="step-info">
            <span className="step-name">Approvisionnement</span>
            <span className="step-status">Terminé ✓</span>
          </div>
        </div>
        <div className="pipeline-step pipeline-step--active">
          <div className="step-badge">02</div>
          <div className="step-info">
            <span className="step-name">Assemblage & Test</span>
            <span className="step-status">En cours (88%)</span>
          </div>
          <div className="step-progress-bar">
            <div className="step-progress-fill" style={{ width: "88%" }} />
          </div>
        </div>
        <div className="pipeline-step pipeline-step--pending">
          <div className="step-badge">03</div>
          <div className="step-info">
            <span className="step-name">Contrôle Qualité</span>
            <span className="step-status">En attente</span>
          </div>
        </div>
      </div>

      <div className="showcase-ui-footer">
        <span>Télémétrie opérationnelle NGSER · API Spring Boot</span>
        <span className="showcase-tech-tag">Angular · Java · Docker</span>
      </div>
    </div>
  );
}

function MaquetteEagence() {
  return (
    <div className="showcase-ui showcase-ui--eagence">
      <div className="showcase-ui-header">
        <div className="showcase-ui-dots" aria-hidden="true">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <span className="showcase-ui-title">PAYMONEY ECOSYSTEM · FINTECH SHOWCASE</span>
        <span className="showcase-badge showcase-badge--fintech">
          SOLUTIONS DIGITALES
        </span>
      </div>

      <div className="showcase-fintech-layout">
        <div className="fintech-card-3d">
          <div className="fintech-card-glimmer" aria-hidden="true" />
          <div className="fintech-card-top">
            <span className="fintech-brand">PAYMONEY</span>
            <span className="fintech-chip-type">PLATINUM</span>
          </div>
          <div className="fintech-card-chip" aria-hidden="true" />
          <div className="fintech-card-number">•••• •••• •••• 4289</div>
          <div className="fintech-card-bottom">
            <div>
              <span className="card-lbl">TITULAIRE</span>
              <span className="card-val">ANNE MARIE A.</span>
            </div>
            <div>
              <span className="card-lbl">EXP</span>
              <span className="card-val">10/28</span>
            </div>
            <span className="card-contactless" aria-hidden="true">)))</span>
          </div>
        </div>

        <div className="fintech-stats-col">
          <div className="fintech-transaction-toast">
            <div className="toast-icon">✓</div>
            <div>
              <span className="toast-title">Virement instantané reçu</span>
              <span className="toast-amount">+ 1 450 000 XOF</span>
            </div>
          </div>
          <div className="fintech-feature-pills">
            <span className="pill">Paiement QR</span>
            <span className="pill">API Marchand</span>
            <span className="pill">Multi-devises</span>
          </div>
        </div>
      </div>

      <div className="showcase-ui-footer">
        <span>Expérience vitrine haute conversion · Paymoney</span>
        <span className="showcase-tech-tag">Next.js · Modern UI · SEO</span>
      </div>
    </div>
  );
}

function MaquetteAmbassade() {
  return (
    <div className="showcase-ui showcase-ui--ambassade">
      <div className="showcase-ui-header">
        <div className="showcase-ui-dots" aria-hidden="true">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <span className="showcase-ui-title">PORTAIL CONSULAIRE SÉCURISÉ · RDC / RDA</span>
        <span className="showcase-badge showcase-badge--gov">OFFICIEL</span>
      </div>

      <div className="showcase-ambassade-body">
        <div className="ambassade-banner">
          <span className="ambassade-seal">🏛️</span>
          <div>
            <h4 className="ambassade-headline">Démarches Consulaires Dématérialisées</h4>
            <p className="ambassade-sub">Portail sécurisé des ressortissants & visas électroniques</p>
          </div>
        </div>

        <div className="ambassade-dossier-stepper">
          <div className="stepper-track">
            <div className="stepper-node stepper-node--done">
              <span className="node-num">1</span>
              <span className="node-lbl">Dépôt du dossier</span>
            </div>
            <div className="stepper-line stepper-line--done" />
            <div className="stepper-node stepper-node--done">
              <span className="node-num">2</span>
              <span className="node-lbl">Biométrie certifiée</span>
            </div>
            <div className="stepper-line stepper-line--active" />
            <div className="stepper-node stepper-node--active">
              <span className="node-num">3</span>
              <span className="node-lbl">Émission passeport</span>
            </div>
            <div className="stepper-line" />
            <div className="stepper-node">
              <span className="node-num">4</span>
              <span className="node-lbl">Retrait express</span>
            </div>
          </div>
        </div>

        <div className="ambassade-security-pill">
          <span>🔒 Chiffrement TLS 256-bit & Conformité OACI</span>
        </div>
      </div>

      <div className="showcase-ui-footer">
        <span>Modernisation des parcours institutionnels</span>
        <span className="showcase-tech-tag">Nuxt 3 · TypeScript · Tailwind</span>
      </div>
    </div>
  );
}

function MaquetteMariage() {
  return (
    <div className="showcase-ui showcase-ui--mariage">
      <div className="showcase-ui-header">
        <div className="showcase-ui-dots" aria-hidden="true">
          <span className="dot dot--gold" />
          <span className="dot dot--gold" />
          <span className="dot dot--gold" />
        </div>
        <span className="showcase-ui-title">ÉVÉNEMENT DE PRESTIGE · stephane-et-marie.site</span>
        <span className="showcase-badge showcase-badge--wedding">
          EN PRODUCTION DIRECTE
        </span>
      </div>

      <div className="showcase-wedding-inner">
        <div className="wedding-monogram">S & M</div>
        <h4 className="wedding-names">Stéphane & Marie</h4>
        <p className="wedding-date">Célébration d&apos;Union & Réception Privée</p>

        <div className="wedding-countdown-strip">
          <div className="countdown-cell">
            <span className="num">15</span>
            <span className="lbl">Jours</span>
          </div>
          <span className="sep">:</span>
          <div className="countdown-cell">
            <span className="num">14</span>
            <span className="lbl">Heures</span>
          </div>
          <span className="sep">:</span>
          <div className="countdown-cell">
            <span className="num">28</span>
            <span className="lbl">Min</span>
          </div>
        </div>

        <div className="wedding-rsvp-action">
          <span className="wedding-btn-rsvp">
            Confirmer votre présence (RSVP) ↗
          </span>
        </div>
      </div>

      <div className="showcase-ui-footer">
        <span>Création digitale haute couture · En ligne</span>
        <span className="showcase-tech-tag">Next.js · Design d&apos;Auteur · Cloud</span>
      </div>
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
    case "eagence":
      return (
        <div className={classe}>
          <MaquetteEagence />
        </div>
      );
    case "ambassade":
      return (
        <div className={classe}>
          <MaquetteAmbassade />
        </div>
      );
    case "mariage":
      return (
        <div className={classe}>
          <MaquetteMariage />
        </div>
      );
    default:
      return null;
  }
}
