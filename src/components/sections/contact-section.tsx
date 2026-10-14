import { Container } from "@/components/layout/container";
import { BoutonCopieEmail } from "@/components/ui/bouton-copie-email";
import { EMAIL_PROFESSIONNEL, LIENS_EXTERNES } from "@/data/site";

const sujetMail = encodeURIComponent(
  "Contact professionnel - Anne Marie Agbonou",
);

export function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-epilogue-sec"
      data-reveal-section=""
    >
      <Container>
        <div data-reveal-entete="">
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.16em",
              color: "var(--c-orange)",
              marginBottom: "1.5rem",
            }}
          >
            SECTION 04 // ENGAGEMENT & COLLABORATION
          </div>

          <h2 className="epilogue-huge-prompt">
            PARLONS DE VOTRE <br />
            PROCHAIN <span className="serif-italic">projet.</span>
          </h2>
        </div>

        <div data-reveal-corps="">
        <div className="contact-dispatch-panel">
          <div className="dispatch-info-block">
            <h3>À l&apos;écoute d&apos;opportunités en entreprise & missions</h3>
            <p>
              Je suis disponible pour des opportunités professionnelles (CDI,
              missions freelance, renfort d&apos;équipe frontend) avec
              l&apos;envie de concevoir des interfaces soignées et durables.
            </p>
          </div>

          <div className="dispatch-action-group">
            <a
              href={`mailto:${EMAIL_PROFESSIONNEL}?subject=${sujetMail}`}
              className="btn-dispatch-mail"
              id="mainMailtoBtn"
            >
              <span>Envoyer un message</span>
              <span>→</span>
            </a>

            <BoutonCopieEmail variante="contact" />
          </div>
        </div>

        <div className="verified-channels-row">
          <a
            href={`mailto:${EMAIL_PROFESSIONNEL}`}
            className="channel-folio-card"
          >
            <span className="channel-card-index">CANAL DIRECT 01</span>
            <div className="channel-card-target">
              <span>{EMAIL_PROFESSIONNEL}</span>
              <span>↗</span>
            </div>
          </a>

          <a
            href={LIENS_EXTERNES.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="channel-folio-card"
          >
            <span className="channel-card-index">RÉSEAU 02</span>
            <div className="channel-card-target">
              <span>LinkedIn Profil</span>
              <span>↗</span>
            </div>
          </a>

          <a
            href={LIENS_EXTERNES.github}
            target="_blank"
            rel="noopener noreferrer"
            className="channel-folio-card"
          >
            <span className="channel-card-index">CODE 03</span>
            <div className="channel-card-target">
              <span>GitHub / ANNEMARIE05</span>
              <span>↗</span>
            </div>
          </a>
        </div>

        <div className="colophon-footer-strip">
          <div>
            © 2026 Anne Marie Agbonou · Développeuse Frontend & Analyste
            Programmeuse.
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href={LIENS_EXTERNES.mariage}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(245,241,233,0.7)",
                textDecoration: "none",
              }}
            >
              Projet Mariage ↗
            </a>
            <a
              href={LIENS_EXTERNES.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(245,241,233,0.7)",
                textDecoration: "none",
              }}
            >
              Dépôt GitHub ↗
            </a>
            <a
              href={LIENS_EXTERNES.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(245,241,233,0.7)",
                textDecoration: "none",
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
}
