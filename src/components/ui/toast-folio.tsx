"use client";

import { Check } from "lucide-react";
import { usePortfolio } from "@/components/providers/fournisseur-portfolio";

export function ToastFolio() {
  const { messageToast } = usePortfolio();

  return (
    <div
      className={`toast-folio-alert${messageToast ? " show" : ""}`}
      role="status"
      aria-live="polite"
    >
      <Check width={15} height={15} stroke="var(--c-orange)" strokeWidth={2.5} />
      <span>{messageToast ?? ""}</span>
    </div>
  );
}
