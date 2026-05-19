import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { WhyChooseUs, TechnologySection, Testimonials, FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About — RSS India" },
      { name: "description", content: "RSS India is a smart energy and industrial automation engineering company building the infrastructure for next-generation industry." },
      { property: "og:title", content: "About — RSS India" },
      { property: "og:description", content: "Engineering depth, deployment speed, lifetime support." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RSS India"
        title={<>Engineering the <span className="text-gradient">smart energy era</span></>}
        sub="Founded by power and automation engineers, RSS India deliver integrated systems for India's most ambitious industrial operators."
      />
      <TechnologySection />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
