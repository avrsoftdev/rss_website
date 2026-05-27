import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FeaturedProjects, IndiaMap, FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/_site/projects")({
  head: () => ({
    meta: [
      { title: "Projects — RSS India" },
      { name: "description", content: "Selected case studies of solar EPC, automation, SCADA and IoT deployments across India." },
      { property: "og:title", content: "Projects — RSS India" },
      { property: "og:description", content: "Engineered impact — measurable energy and operational outcomes." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={<>Case studies in <span className="text-gradient">engineered impact</span></>}
        sub="5000+ deployments across India — from rooftop solar to fully-automated production lines."
      />
      <IndiaMap />
      <FeaturedProjects />
      <FinalCTA />
    </>
  );
}
