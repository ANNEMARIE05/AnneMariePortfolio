import { OrchestrateurScroll } from "@/components/animations/orchestrateur-scroll";
import { GrilleEditoriale } from "@/components/layout/grille-editoriale";
import { Masthead } from "@/components/layout/masthead";
import { SiteHeader } from "@/components/layout/site-header";
import { FournisseurPortfolio } from "@/components/providers/fournisseur-portfolio";
import { TiroirTechnique } from "@/components/projects/tiroir-technique";
import { BandeauTicker } from "@/components/sections/bandeau-ticker";
import { CatalogueProjets } from "@/components/sections/catalogue-projets";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ManifesteSection } from "@/components/sections/manifeste-section";
import { SpecificationsSection } from "@/components/sections/specifications-section";
import { ToastFolio } from "@/components/ui/toast-folio";

export default function PagePortfolio() {
  return (
    <FournisseurPortfolio>
      <GrilleEditoriale />
      <Masthead />
      <SiteHeader />

      <OrchestrateurScroll>
        <HeroSection />
        <BandeauTicker />
        <CatalogueProjets />
        <ManifesteSection />
        <SpecificationsSection />
        <ContactSection />
      </OrchestrateurScroll>

      <TiroirTechnique />
      <ToastFolio />
    </FournisseurPortfolio>
  );
}
