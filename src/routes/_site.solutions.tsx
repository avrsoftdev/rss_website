import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/Sections";
import {
  Sun, Cog, Activity, Wifi, BatteryCharging, Gauge, Cpu, Power, ShieldCheck, ArrowRight,
} from "lucide-react";

const list = [
  { icon: Sun, title: "Solar EPC Solutions", desc: "Turnkey utility & C&I solar — design, supply, installation, O&M." },
  { icon: Cog, title: "Industrial Automation", desc: "PLC, HMI, robotics and process control for the smart factory." },
  { icon: Activity, title: "SCADA Systems", desc: "Distributed real-time supervisory control with secure architectures." },
  { icon: Wifi, title: "IoT Monitoring", desc: "Edge-to-cloud telemetry, AI anomaly detection, predictive maintenance." },
  { icon: Gauge, title: "Smart Energy Solutions", desc: "Energy analytics, demand response, intelligent load management." },
  { icon: BatteryCharging, title: "EV Infrastructure", desc: "AC & DC charging stations from rooftop to highway corridors." },
  { icon: Cpu, title: "Electrical Panels", desc: "LT/MV panels, ATS, capacitor banks — in-house engineered." },
  { icon: Power, title: "DG Synchronization", desc: "Multi-DG sync, grid paralleling, automatic load sharing." },
  { icon: ShieldCheck, title: "Zero Export Devices", desc: "Compliant zero-export controllers for net-metering policies." },
];

export const Route = createFileRoute("/_site/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — RSS India" },
      { name: "description", content: "Solar EPC, automation, SCADA, IoT, EV infrastructure and more — engineered systems by RSS India." },
      { property: "og:title", content: "Solutions — RSS India" },
      { property: "og:description", content: "End-to-end smart energy and automation systems for industry." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>Engineered systems, <span className="text-gradient">end to end</span></>}
        sub="From a single electrical panel to a multi-MW solar plant under SCADA — RSS India delivers integrated, monitored, and certified systems."
      />
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--brand)]/40 hover:shadow-[var(--shadow-glow)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-bright)] text-white shadow-[var(--shadow-soft)]">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-dark)] group-hover:gap-3">
                  Discuss your scope <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
