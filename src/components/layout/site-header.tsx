import { Container } from "@/components/layout/container";
import { NavigationMobile } from "@/components/layout/navigation-mobile";
import { LIENS_NAVIGATION } from "@/data/navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="header-layout">
        <a href="#hero" className="brand-monogram-lockup">
          <span className="brand-index-tag">00 / AUTEURE & DÉVELOPPEUSE</span>
          <h2 className="brand-name-huge">ANNE MARIE AGBONOU</h2>
          <span className="brand-role-caption">
            Développeuse Frontend & Analyste Programmeuse
          </span>
        </a>

        <nav className="site-nav" aria-label="Sommaire de navigation">
          {LIENS_NAVIGATION.map((lien) => (
            <a key={lien.href} href={lien.href} className="nav-link-item">
              <span className="nav-idx">{lien.indice}</span>
              {lien.libelle}
            </a>
          ))}
        </nav>

        <div className="header-actions-cluster">
          <NavigationMobile />
          <a href="#contact" className="header-contact-action">
            <span>Parlons de votre projet</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
