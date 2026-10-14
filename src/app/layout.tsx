import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LienEvitement } from "@/components/layout/lien-evitement";
import { METADONNEES_SITE, obtenirUrlSite } from "@/data/site";
import { classesPolices } from "@/lib/polices";
import "./globals.css";

const urlSite = obtenirUrlSite();

export const metadata: Metadata = {
  metadataBase: new URL(urlSite),
  title: {
    default: METADONNEES_SITE.titre,
    template: `%s | Anne Marie Agbonou`,
  },
  description: METADONNEES_SITE.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: urlSite,
    siteName: "Anne Marie Agbonou — Portfolio",
    title: METADONNEES_SITE.titre,
    description: METADONNEES_SITE.description,
    images: [
      {
        url: "/images/anne-marie-portrait.jpg",
        width: 1200,
        height: 1200,
        alt: "Portrait d'Anne Marie Agbonou en lumière naturelle",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: METADONNEES_SITE.titre,
    description: METADONNEES_SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr" className={classesPolices}>
      <body>
        <LienEvitement />
        {children}
      </body>
    </html>
  );
}
