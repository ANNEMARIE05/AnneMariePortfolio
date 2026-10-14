import { DUREE_REVEAL_SECTION, EASE_EDITORIAL } from "@/lib/animations/constantes";

/** Valeurs communes pour les `from()` déclenchés au scroll — le contenu reste visible si le JS échoue avant le trigger. */
export const BASE_FROM_SCROLL = {
  ease: EASE_EDITORIAL,
  duration: DUREE_REVEAL_SECTION,
  immediateRender: false,
} as const;

export function scrollTriggerUneFois(
  trigger: Element,
  start = "top 86%",
) {
  return {
    trigger,
    start,
    once: true,
  };
}

export function propsEnteteSection(trigger: Element) {
  return {
    ...BASE_FROM_SCROLL,
    y: 40,
    autoAlpha: 0,
    scrollTrigger: scrollTriggerUneFois(trigger, "top 86%"),
  };
}

export function propsCorpsSection(trigger: Element) {
  return {
    ...BASE_FROM_SCROLL,
    y: 32,
    autoAlpha: 0,
    delay: 0.08,
    scrollTrigger: scrollTriggerUneFois(trigger, "top 82%"),
  };
}
