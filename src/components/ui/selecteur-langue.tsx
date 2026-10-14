"use client";

import { useI18n } from "@/hooks/use-i18n";

export function SelecteurLangue() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className="lang-switch"
      role="group"
      aria-label={t.langSwitch}
    >
      <button
        type="button"
        className={`lang-switch-btn${locale === "fr" ? " is-active" : ""}`}
        aria-pressed={locale === "fr"}
        onClick={() => setLocale("fr")}
      >
        FR
      </button>
      <button
        type="button"
        className={`lang-switch-btn${locale === "en" ? " is-active" : ""}`}
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
    </div>
  );
}
