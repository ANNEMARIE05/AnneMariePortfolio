import type { ReactNode } from "react";

interface PropsContainer {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: PropsContainer) {
  return (
    <div className={`container ${className}`.trim()}>{children}</div>
  );
}
