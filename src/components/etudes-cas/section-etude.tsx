import type { ReactNode } from "react";

interface PropsSectionEtude {
  index: string;
  titre: string;
  variante?: "default" | "fond";
  children: ReactNode;
}

export function SectionEtude({
  index,
  titre,
  variante = "default",
  children,
}: PropsSectionEtude) {
  return (
    <section
      className={`etude-cas-section${variante === "fond" ? " etude-cas-section--fond" : ""}`}
      data-reveal-etude=""
    >
      <div className="etude-cas-section-grid">
        <div data-reveal-etude-entete="">
          <p className="etude-cas-section-index">{index}</p>
          <h2 className="etude-cas-section-titre">{titre}</h2>
        </div>
        <div data-reveal-etude-corps="">{children}</div>
      </div>
    </section>
  );
}
