import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  sub,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full"
        style={{ background: "var(--gradient-glow)", opacity: 0.6 }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/25 bg-[var(--surface-tinted)] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-dark)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-bright)] animate-pulse-glow" />
          {eyebrow}
        </div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] md:text-7xl">
          {title}
        </h1>
        {sub && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{sub}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
