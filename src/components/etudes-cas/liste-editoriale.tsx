import { estACompleter } from "@/lib/etude-cas";

interface PropsListeEditoriale {
  items: string[];
}

export function ListeEditoriale({ items }: PropsListeEditoriale) {
  const contenu = items.filter(Boolean);

  if (contenu.length === 0) {
    return <p className="etude-cas-a-completer">À compléter</p>;
  }

  if (contenu.length === 1 && estACompleter(contenu[0])) {
    return <p className="etude-cas-a-completer">{contenu[0]}</p>;
  }

  return (
    <ul className="etude-cas-liste">
      {contenu.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
