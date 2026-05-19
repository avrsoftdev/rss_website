import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/Sections";
import { getSolutionBySlug } from "@/lib/solutions";

export const Route = createFileRoute("/_site/solutions/$slug")({
  head: ({ params }) => {
    const solution = getSolutionBySlug(params.slug);
    const title = solution ? `${solution.title} - RSS India` : "Solution - RSS India";

    return {
      meta: [
        { title },
        {
          name: "description",
          content: solution?.intro ?? "Explore RSS India smart energy and automation solutions.",
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: solution?.intro ?? "Explore RSS India smart energy and automation solutions.",
        },
      ],
    };
  },
  component: SolutionDetailPage,
});

function SolutionDetailPage() {
  const { slug } = Route.useParams();
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return (
      <>
        <PageHero
          eyebrow="Solutions"
          title="Solution not found"
          sub="The solution page you are looking for is not available."
        />
        <section className="pb-28">
          <div className="mx-auto max-w-7xl px-6">
            <Link to="/solutions" className="btn-primary">
              <ArrowLeft className="h-4 w-4" /> Back to solutions
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow="Solution" title={solution.title} sub={solution.intro} />
      <section className="pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border border-border bg-card p-7 md:p-10">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-bright)] text-white shadow-[var(--shadow-soft)]">
                <solution.icon className="h-6 w-6" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
                  What we deliver
                </div>
                <h2 className="mt-1 font-display text-2xl font-bold md:text-3xl">
                  Built around your site requirements
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {solution.highlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-[var(--surface-tinted)] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-dark)]" />
                  <p className="text-sm leading-relaxed text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-border bg-[var(--surface-tinted)] p-7">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
              Key outcomes
            </div>
            <div className="mt-5 space-y-3">
              {solution.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-2xl border border-[var(--brand)]/15 bg-white/70 p-4 font-display text-lg font-bold"
                >
                  {outcome}
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary mt-7 w-full">
              Discuss your scope <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/solutions" className="btn-ghost mt-3 w-full justify-center">
              <ArrowLeft className="h-4 w-4" /> All solutions
            </Link>
          </aside>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
