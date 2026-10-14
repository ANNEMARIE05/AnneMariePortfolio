import { estACompleter, estUrlValide } from "@/lib/etude-cas";
import type { LiensEtudeCas } from "@/types/etude-cas";

interface PropsLiensEtude {
  liens: LiensEtudeCas;
}

export function LiensEtude({ liens }: PropsLiensEtude) {
  const demoOk = estUrlValide(liens.demonstration);
  const depotOk = estUrlValide(liens.depot);

  return (
    <div className="etude-cas-liens">
      {demoOk ? (
        <a
          href={liens.demonstration}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-solid-orange"
        >
          <span>{liens.libelleDemonstration ?? "Voir la démonstration"}</span>
          <span>↗</span>
        </a>
      ) : (
        <span className="etude-cas-a-completer">
          Démonstration en ligne :{" "}
          {estACompleter(liens.demonstration)
            ? "À compléter"
            : (liens.demonstration ?? "À compléter")}
        </span>
      )}

      {depotOk ? (
        <a
          href={liens.depot}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-ink"
        >
          <span>{liens.libelleDepot ?? "Voir le dépôt"}</span>
          <span>↗</span>
        </a>
      ) : (
        <span className="etude-cas-a-completer">
          Dépôt de code :{" "}
          {estACompleter(liens.depot) ? "À compléter" : (liens.depot ?? "À compléter")}
        </span>
      )}
    </div>
  );
}
