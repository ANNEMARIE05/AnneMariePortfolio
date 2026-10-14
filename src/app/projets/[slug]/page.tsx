import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageEtudeCas } from "@/components/etudes-cas/page-etude-cas";
import {
  SLUGS_ETUDES_CAS,
  obtenirEtudeCasParSlug,
} from "@/data/etudes-cas";
import "@/styles/etude-cas.css";

interface PropsPageProjet {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SLUGS_ETUDES_CAS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PropsPageProjet): Promise<Metadata> {
  const { slug } = await params;
  const etude = obtenirEtudeCasParSlug(slug);

  if (!etude) {
    return { title: "Projet introuvable" };
  }

  return {
    title: etude.seo.titre,
    description: etude.seo.description,
    alternates: {
      canonical: `/projets/${slug}`,
    },
    openGraph: {
      title: etude.seo.titre,
      description: etude.seo.description,
      type: "article",
      url: `/projets/${slug}`,
    },
  };
}

export default async function PageProjet({ params }: PropsPageProjet) {
  const { slug } = await params;
  const etude = obtenirEtudeCasParSlug(slug);

  if (!etude) {
    notFound();
  }

  return <PageEtudeCas etude={etude} />;
}
