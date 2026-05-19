import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/Sections";
import { solutions } from "@/lib/solutions";

export const Route = createFileRoute("/_site/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions - RSS India" },
      {
        name: "description",
        content:
          "Solar EPC, automation, SCADA, IoT, EV infrastructure and more - engineered systems by RSS India.",
      },
      { property: "og:title", content: "Solutions - RSS India" },
      { property: "og:description", content: "End-to-end smart energy and automation systems for industry." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  const isDetailPage = useRouterState({
    select: (state) => state.location.pathname !== "/solutions",
  });

  if (isDetailPage) {
    return <Outlet />;
  }

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Engineered systems, <span className="text-gradient">end to end</span>
          </>
        }
        sub="From a single electrical panel to a multi-MW solar plant under SCADA - RSS India delivers integrated, monitored, and certified systems."
      />
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <Link
                key={s.title}
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--brand)]/40 hover:shadow-[var(--shadow-glow)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-bright)] text-white shadow-[var(--shadow-soft)]">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-dark)] transition-all group-hover:gap-3">
                  View details <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
