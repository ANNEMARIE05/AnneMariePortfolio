import Image from "next/image";
import {
  CHEMIN_LOGO,
  VERSION_MEDIA,
  cheminMediaVersionne,
} from "@/data/site";

interface PropsLogoMarque {
  /** Taille d’affichage en pixels (carré). */
  taille?: number;
  /** Chargement prioritaire (en-tête). */
  prioritaire?: boolean;
  className?: string;
  /** Chemin image (défaut : logo intro / favicon). */
  src?: string;
}

export function LogoMarque({
  taille = 44,
  prioritaire = false,
  className = "",
  src = CHEMIN_LOGO,
}: PropsLogoMarque) {
  const srcAffiche = cheminMediaVersionne(src);
  return (
    <span
      className={`logo-marque ${className}`.trim()}
      style={{ width: taille, height: taille }}
    >
      <Image
        key={VERSION_MEDIA}
        src={srcAffiche}
        alt="Monogramme AM — Anne Marie Agbonou"
        width={1024}
        height={928}
        sizes={`${taille}px`}
        priority={prioritaire}
        unoptimized
        className="logo-marque-img"
      />
    </span>
  );
}
