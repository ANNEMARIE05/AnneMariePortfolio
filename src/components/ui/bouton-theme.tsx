"use client";

import { usePortfolio } from "@/components/providers/fournisseur-portfolio";
import { useI18n } from "@/hooks/use-i18n";

export function BoutonTheme() {
  const { themeStudioSombre, basculerTheme } = usePortfolio();
  const { t } = useI18n();

  return (
    <button
      type="button"
      className="theme-switch-btn"
      onClick={basculerTheme}
      aria-label={t.themeSwitch || (themeStudioSombre ? "Passer au thème clair" : "Passer au thème sombre")}
      title={themeStudioSombre ? "Passer au thème clair" : "Passer au thème sombre"}
    >
      <span className="theme-switch-icon-wrap" aria-hidden="true">
        {themeStudioSombre ? (
          /* Sun icon when dark */
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="theme-switch-sun"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          /* Moon icon when light */
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="theme-switch-moon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </span>
      <span className="theme-switch-label">
        {themeStudioSombre ? "Clair" : "Sombre"}
      </span>
    </button>
  );
}
