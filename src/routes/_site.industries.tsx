import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { IndustriesSection, FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/_site/industries")({
  head: () => ({
    meta: [
      { title: "Industries — RSS India" },
      { name: "description", content: "Manufacturing, warehouses, commercial buildings, solar plants, smart infrastructure and energy — verticals served by RSS India." },
      { property: "og:title", content: "Industries — RSS India" },
      { property: "og:description", content: "Engineered systems across every industrial vertical." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Engineered for every <span className="text-gradient">vertical</span></>}
        sub="Specialised playbooks for manufacturing, warehousing, commercial real estate, solar plants and smart infrastructure."
      />
      <IndustriesSection />
      <FinalCTA />
    </>
  );
}
