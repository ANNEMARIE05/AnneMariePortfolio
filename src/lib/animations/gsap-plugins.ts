"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

let pluginsEnregistres = false;

/** Enregistrement unique des plugins GSAP (côté client uniquement). */
export function enregistrerPluginsGsap(): void {
  if (pluginsEnregistres || typeof window === "undefined") {
    return;
  }
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  pluginsEnregistres = true;
}

export { gsap, ScrollTrigger, ScrollToPlugin };
