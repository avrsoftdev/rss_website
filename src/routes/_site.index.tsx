import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/site/HeroSlider";
import {
  TrustedStrip,
  SolutionsShowcase,
  IndustriesSection,
  IndiaMap,
  FeaturedProjects,
  TechnologySection,
  WhyChooseUs,
  Testimonials,
  Insights,
  FinalCTA,
} from "@/components/site/Sections";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "RSS India — Smart Energy & Industrial Automation" },
      {
        name: "description",
        content:
          "RSS India engineers solar EPC, industrial automation, SCADA, IoT and EV infrastructure for next-generation industry.",
      },
      { property: "og:title", content: "RSS India — Smart Energy & Industrial Automation" },
      {
        property: "og:description",
        content:
          "Premium engineering for solar EPC, automation, SCADA, IoT, EV and smart energy systems.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSlider />
      <TrustedStrip />
      <SolutionsShowcase />
      <IndustriesSection />
      <IndiaMap />
      <FeaturedProjects />
      <TechnologySection />
      <WhyChooseUs />
      <Testimonials />
      <Insights />
      <FinalCTA />
    </>
  );
}
