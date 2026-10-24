"use client";

import { Container } from "@/components/layout/container";
import { BoutonCopieEmail } from "@/components/ui/bouton-copie-email";
import {
  EMAIL_PROFESSIONNEL,
  LIENS_EXTERNES,
  obtenirLienWhatsApp,
} from "@/data/site";
import { useI18n } from "@/hooks/use-i18n";

export function ContactSection() {
  const { locale, t } = useI18n();
  const sujetMail = encodeURIComponent(
    locale === "en"
      ? "Professional contact - Anne Marie Agbonou"
      : "Contact professionnel - Anne Marie Agbonou",
  );
  const lienWhatsApp = obtenirLienWhatsApp(locale);

  return (
    <section
      id="contact"
      className="contact-epilogue-sec"
      data-reveal-section=""
    >
      <Container>
        <div className="contact-stage">
          <div className="contact-stage-copy" data-reveal-entete="">
            <span className="sec-index-number">{t.contact.label}</span>

            <h2 className="epilogue-huge-prompt">{t.contact.title}</h2>

            <p className="contact-stage-lead">{t.contact.lead}</p>
          </div>

          <div className="contact-stage-actions" data-reveal-corps="">
            <a
              href={lienWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-hero"
            >
              <span className="contact-whatsapp-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.882 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span className="contact-whatsapp-copy">
                <strong>{t.contact.whatsappTitle}</strong>
                <span>{t.contact.whatsappHint}</span>
              </span>
              <span aria-hidden="true">↗</span>
            </a>

            <p className="contact-email-label">{t.contact.emailLabel}</p>

            <a
              href={`mailto:${EMAIL_PROFESSIONNEL}?subject=${sujetMail}`}
              className="contact-email-hero"
              id="mainMailtoBtn"
            >
              <span className="contact-email-icon" aria-hidden="true">
                @
              </span>
              <span>{EMAIL_PROFESSIONNEL}</span>
            </a>

            <div className="contact-action-row">
              <a
                href={`mailto:${EMAIL_PROFESSIONNEL}?subject=${sujetMail}`}
                className="btn-dispatch-mail"
              >
                <span>{t.contact.send}</span>
                <span aria-hidden="true">→</span>
              </a>
              <BoutonCopieEmail variante="contact" />
            </div>

            <nav className="contact-social-nav" aria-label={t.contact.label}>
              <a
                href={LIENS_EXTERNES.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                {t.contact.linkedin}
              </a>
              <a
                href={LIENS_EXTERNES.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                {t.contact.github}
              </a>
              <a
                href={LIENS_EXTERNES.mariage}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                {t.contact.wedding}
              </a>
            </nav>
          </div>
        </div>

        <div className="colophon-footer-strip">
          <div>{t.contact.footer}</div>
        </div>
      </Container>
    </section>
  );
}
