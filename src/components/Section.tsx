import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Reusable section wrapper with consistent spacing and optional title.
 */
export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {title != null && (
          <h2 className="font-display mb-10 text-3xl font-semibold tracking-tight text-typography md:text-4xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
