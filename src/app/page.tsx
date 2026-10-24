import { AnimationLancement } from "@/components/animations/animation-lancement";
import { OrchestrateurScroll } from "@/components/animations/orchestrateur-scroll";
import { GrilleEditoriale } from "@/components/layout/grille-editoriale";
import { SiteHeader } from "@/components/layout/site-header";
import { FournisseurPortfolio } from "@/components/providers/fournisseur-portfolio";
import { TiroirTechnique } from "@/components/projects/tiroir-technique";
import { CatalogueProjets } from "@/components/sections/catalogue-projets";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FormationSection } from "@/components/sections/formation-section";
import { BandeauTicker } from "@/components/sections/bandeau-ticker";
import { HeroSection } from "@/components/sections/hero-section";
import { ManifesteSection } from "@/components/sections/manifeste-section";
import { BoutonRemonter } from "@/components/ui/bouton-remonter";
import { BoutonWhatsAppFlottant } from "@/components/ui/bouton-whatsapp-flottant";
import { ToastFolio } from "@/components/ui/toast-folio";

export default function PagePortfolio() {
  return (
    <FournisseurPortfolio>
      <AnimationLancement />
      <GrilleEditoriale />
      <SiteHeader />

      <OrchestrateurScroll>
        <HeroSection />
        <BandeauTicker />
        <ExperienceSection />
        <CatalogueProjets />
        <FormationSection />
        <ManifesteSection />
        <ContactSection />
      </OrchestrateurScroll>

      <TiroirTechnique />
      <BoutonRemonter />
      <BoutonWhatsAppFlottant />
      <ToastFolio />
    </FournisseurPortfolio>
  );
}
