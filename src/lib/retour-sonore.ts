export type TypeRetourSonore = "click" | "chime";

let contexteAudio: AudioContext | null = null;

function obtenirContexteAudio(): AudioContext | null {
  if (typeof window === "undefined") {
    return null;
  }

  if (!contexteAudio) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioContextClass) {
      return null;
    }
    contexteAudio = new AudioContextClass();
  }

  if (contexteAudio.state === "suspended") {
    void contexteAudio.resume();
  }

  return contexteAudio;
}

export function jouerRetourSonore(
  type: TypeRetourSonore,
  sonActif: boolean,
): void {
  if (!sonActif) {
    return;
  }

  try {
    const audio = obtenirContexteAudio();
    if (!audio) {
      return;
    }

    const oscillateur = audio.createOscillator();
    const gain = audio.createGain();
    oscillateur.connect(gain);
    gain.connect(audio.destination);
    const maintenant = audio.currentTime;

    if (type === "click") {
      oscillateur.type = "sine";
      oscillateur.frequency.setValueAtTime(740, maintenant);
      oscillateur.frequency.exponentialRampToValueAtTime(380, maintenant + 0.04);
      gain.gain.setValueAtTime(0.05, maintenant);
      gain.gain.exponentialRampToValueAtTime(0.001, maintenant + 0.04);
      oscillateur.start(maintenant);
      oscillateur.stop(maintenant + 0.04);
    } else {
      oscillateur.type = "sine";
      oscillateur.frequency.setValueAtTime(1020, maintenant);
      oscillateur.frequency.exponentialRampToValueAtTime(680, maintenant + 0.18);
      gain.gain.setValueAtTime(0.07, maintenant);
      gain.gain.exponentialRampToValueAtTime(0.001, maintenant + 0.18);
      oscillateur.start(maintenant);
      oscillateur.stop(maintenant + 0.18);
    }
  } catch {
    /* Retour sonore optionnel — échec silencieux */
  }
}

export function activerContexteAudio(): void {
  obtenirContexteAudio();
}
