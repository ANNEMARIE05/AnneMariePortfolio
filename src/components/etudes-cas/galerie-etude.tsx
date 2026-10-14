import Image from "next/image";
import type { ElementGalerie } from "@/types/etude-cas";

interface PropsGalerieEtude {
  elements: ElementGalerie[];
}

export function GalerieEtude({ elements }: PropsGalerieEtude) {
  return (
    <div className="etude-cas-galerie" data-reveal-etude="">
      {elements.map((element, index) => (
        <figure
          key={`${element.type}-${index}`}
          className="etude-cas-galerie-item"
          data-reveal-etude-corps=""
        >
          {element.type === "capture" ? (
            <div className="etude-cas-galerie-media">
              <Image
                src={element.src}
                alt={element.alt}
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="etude-cas-galerie-placeholder">{element.legende}</div>
          )}
          <figcaption className="etude-cas-galerie-legende">
            {element.type === "capture" ? element.legende : "Emplacement réservé"}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
