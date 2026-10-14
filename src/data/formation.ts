export type TypeFormation = "academique" | "complementaire";

export interface EntreeFormation {
  id: string;
  type: TypeFormation;
  titreFr: string;
  titreEn: string;
  etablissement: string;
  periode?: string;
}

export const ENTREES_FORMATION: EntreeFormation[] = [
  {
    id: "das-uvci",
    type: "academique",
    titreFr: "Licence en Développement d'Application (DAS)",
    titreEn: "Bachelor in Application Development (DAS)",
    etablissement: "UVCI",
    periode: "2024",
  },
  {
    id: "bac-koumassi",
    type: "academique",
    titreFr: "Baccalauréat",
    titreEn: "High school diploma (Baccalauréat)",
    etablissement: "Lycée Municipal de Koumassi",
    periode: "2021",
  },
  {
    id: "js-nan",
    type: "complementaire",
    titreFr: "Formation JavaScript",
    titreEn: "JavaScript training",
    etablissement: "NAN Digital Academy",
    periode: "2023",
  },
  {
    id: "fullstack-wecode",
    type: "complementaire",
    titreFr: "Formation Fullstack",
    titreEn: "Fullstack training",
    etablissement: "WeCode",
  },
];
