import { LIENS_EXTERNES } from "@/data/site";
import type { DossierTechnique, IdentifiantProjet } from "@/types/projet";

const styleListe = {
  paddingLeft: "1.2rem",
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.55rem",
};

export const DOSSIERS_TECHNIQUES: Record<IdentifiantProjet, DossierTechnique> = {
  ocr: {
    identifiant: "ocr",
    reference: "DOSSIER // 01 — APPLICATION WEB",
    titre: "Portail OCR",
    sousTitre:
      "Plateforme de traitement documentaire avec extraction OCR, authentification, gestion des quotas, achat de crédits et suivi des extractions.",
    lienExterne: null,
    contexte: (
      <>
        <p>
          <strong>Besoin Métier :</strong> Rendre accessible aux utilisateurs la
          numérisation et l&apos;extraction automatisée de données textuelles
          contenues dans des documents variés, tout en fournissant un contrôle
          strict des quotas d&apos;utilisation et des packs de crédits.
        </p>
        <p>
          <strong>Enjeu d&apos;Usage :</strong> Transformer une chaîne technique
          complexe (chargement de fichier, pipeline OCR, extraction asynchrone)
          en une interface limpide, rassurante et immédiate à utiliser.
        </p>
      </>
    ),
    role: (
      <>
        <p>
          <strong>Rôle & Conception Frontend :</strong>
        </p>
        <ul style={styleListe}>
          <li>
            Conception et intégration des interfaces utilisateur sous{" "}
            <strong>Next.js</strong> et <strong>Tailwind CSS</strong>.
          </li>
          <li>
            Structuration du parcours complet : formulaires d&apos;authentification,
            zone de glisser-déposer de documents et tableau récapitulatif des
            extractions.
          </li>
          <li>
            Mise en valeur pédagogique du solde de crédits et des statuts de
            traitement en temps réel.
          </li>
          <li>
            Garantie d&apos;une adaptation fluide sur l&apos;ensemble des formats
            d&apos;écrans.
          </li>
        </ul>
      </>
    ),
    tech: (
      <>
        <p>
          <strong>Environnement Technique & Composants :</strong>
        </p>
        <ul style={styleListe}>
          <li>
            <strong>Next.js :</strong> Routage applicatif, structure modulaire et
            performances d&apos;exécution.
          </li>
          <li>
            <strong>Tailwind CSS :</strong> Intégration sur-mesure respectant les
            hiérarchies visuelles sans surcharge de classes superflues.
          </li>
          <li>
            <strong>Liaison d&apos;API REST :</strong> Consommation des endpoints de
            sécurité, d&apos;état des crédits et de statut d&apos;extraction.
          </li>
        </ul>
      </>
    ),
  },
  production: {
    identifiant: "production",
    reference: "DOSSIER // 02 — APPLICATION MÉTIER",
    titre: "Gestion de Production",
    sousTitre:
      "Application de suivi des tâches, de l'avancement opérationnel, des ressources et de tableaux de bord de pilotage.",
    lienExterne: null,
    contexte: (
      <>
        <p>
          <strong>Besoin Métier :</strong> Donner aux équipes de production un
          outil centralisé pour superviser les tâches en cours, affecter les
          ressources matérielles et humaines, et repérer immédiatement les
          goulets d&apos;étranglement.
        </p>
        <p>
          <strong>Enjeu d&apos;Usage :</strong> Éviter la dispersion
          d&apos;informations en proposant des tableaux de bord clairs, lisibles
          en un coup d&apos;œil par les gestionnaires d&apos;atelier.
        </p>
      </>
    ),
    role: (
      <>
        <p>
          <strong>Rôle & Conception Frontend :</strong>
        </p>
        <ul style={styleListe}>
          <li>
            Développement des interfaces avec le framework <strong>Angular</strong>{" "}
            en synchronisation avec le backend <strong>Java</strong>.
          </li>
          <li>
            Mise en place de tableaux de bord de pilotage avec indicateurs
            d&apos;état d&apos;avancement des commandes.
          </li>
          <li>
            Conception de modules de gestion et de répartition des ressources de
            production.
          </li>
          <li>
            Application rigoureuse de la logique d&apos;analyste programmeuse :
            intégrité des données affichées et prévention des erreurs de
            manipulation.
          </li>
        </ul>
      </>
    ),
    tech: (
      <>
        <p>
          <strong>Environnement Technique :</strong>
        </p>
        <ul style={styleListe}>
          <li>
            <strong>Angular :</strong> Structure en composants, typage TypeScript
            strict et réactivité des flux.
          </li>
          <li>
            <strong>Java / Spring :</strong> Modélisation des objets métier et
            transmission des états opérationnels.
          </li>
          <li>
            <strong>Composants de Dataviz :</strong> Présentation ordonnée des
            métriques et des statuts d&apos;avancement.
          </li>
        </ul>
      </>
    ),
  },
  eagence: {
    identifiant: "eagence",
    reference: "DOSSIER // 03 — SITE VITRINE",
    titre: "EAgence",
    sousTitre:
      "Site vitrine responsive de présentation des services Paymoney, pensé pour mettre en valeur les solutions financières.",
    lienExterne: null,
    contexte: (
      <>
        <p>
          <strong>Besoin Métier :</strong> Présenter au public et aux partenaires
          commerciaux l&apos;ensemble des solutions de paiement et services
          numériques proposés par Paymoney.
        </p>
        <p>
          <strong>Enjeu d&apos;Usage :</strong> Inspirer confiance dès la première
          seconde grâce à un design contemporain, aéré et facile à explorer.
        </p>
      </>
    ),
    role: (
      <>
        <p>
          <strong>Rôle & Conception Frontend :</strong>
        </p>
        <ul style={styleListe}>
          <li>
            Intégration frontend intégrale du site vitrine sous{" "}
            <strong>Next.js</strong>.
          </li>
          <li>
            Travail approfondi sur la réactivité multi-supports (smartphones,
            tablettes et écrans larges de bureau).
          </li>
          <li>
            Agencement des sections pour guider naturellement l&apos;utilisateur
            vers les informations clés de chaque offre.
          </li>
          <li>
            Optimisation des temps de chargement et des transitions de page.
          </li>
        </ul>
      </>
    ),
    tech: (
      <>
        <p>
          <strong>Environnement Technique :</strong>
        </p>
        <ul style={styleListe}>
          <li>
            <strong>Next.js :</strong> Rendu performant et gestion sémantique des
            balises pour une structure claire.
          </li>
          <li>
            <strong>CSS Responsive :</strong> Grilles fluides et règles
            d&apos;adaptation sans saut d&apos;affichage.
          </li>
          <li>
            <strong>Architecture de composants :</strong> Blocs modulaires et
            réutilisables.
          </li>
        </ul>
      </>
    ),
  },
  mariage: {
    identifiant: "mariage",
    reference: "DOSSIER // 04 — PROJET WEB PERSONNEL",
    titre: "Invitation de Mariage Digitale",
    sousTitre:
      "Site d'invitation de mariage avec présentation de l'événement, confirmation de présence (RSVP) et espace dédié aux mariés.",
    lienExterne: LIENS_EXTERNES.mariage,
    contexte: (
      <>
        <p>
          <strong>Besoin Réel :</strong> Concevoir une invitation numérique
          élégante, interactive et mémorable pour célébrer l&apos;union de
          Stéphane et Marie, simplifier le recueil des confirmations et
          communiquer les détails pratiques aux invités.
        </p>
        <p>
          <strong>Enjeu d&apos;Usage :</strong> Offrir une expérience raffinée et
          intuitive accessible à des invités de tous âges et sur tout type
          d&apos;appareil.
        </p>
      </>
    ),
    role: (
      <>
        <p>
          <strong>Conception Complète de A à Z :</strong>
        </p>
        <ul style={styleListe}>
          <li>
            Direction artistique délicate, choix typographiques sensibles et
            harmonie des couleurs.
          </li>
          <li>
            Développement du formulaire interactif de confirmation de présence
            (RSVP).
          </li>
          <li>
            Création d&apos;un espace dédié permettant aux mariés de consulter les
            retours en temps réel.
          </li>
          <li>Déploiement en ligne et maintenance du domaine public.</li>
        </ul>
      </>
    ),
    tech: (
      <>
        <p>
          <strong>Technologies & Production :</strong>
        </p>
        <ul style={styleListe}>
          <li>
            <strong>HTML5 / CSS3 / JavaScript :</strong> Intégration sur-mesure et
            réactive.
          </li>
          <li>
            <strong>Module RSVP :</strong> Validation et persistance des réponses.
          </li>
          <li>
            <strong>Lien réel en ligne :</strong>{" "}
            <a
              href={LIENS_EXTERNES.mariage}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--c-orange)", fontWeight: 700 }}
            >
              https://stephane-et-marie.site ↗
            </a>
          </li>
        </ul>
      </>
    ),
  },
};
