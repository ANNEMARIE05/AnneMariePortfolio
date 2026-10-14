import { TEXTE_A_COMPLETER } from "@/types/etude-cas";

export function estACompleter(valeur: string | undefined): boolean {
  if (!valeur) {
    return true;
  }
  return valeur === TEXTE_A_COMPLETER || valeur.startsWith("À compléter");
}

export function estUrlValide(valeur: string | undefined): valeur is string {
  if (!valeur || estACompleter(valeur)) {
    return false;
  }
  return valeur.startsWith("http://") || valeur.startsWith("https://");
}
