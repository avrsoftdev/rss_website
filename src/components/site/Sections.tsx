import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sun, Cpu, Activity, Wifi, BatteryCharging, Cog, Gauge, Workflow, ShieldCheck,
  Building2, Warehouse, Factory, Zap, Network, Radio, Cloud, Brain, Layers,
  Headphones, Rocket, Wrench, ArrowRight, Star, Quote, MapPin,
  Trees,
  HeartPulse,
  GraduationCap
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import skWarehouse from "@/assets/sk_warehouse.png";
import skPlantsManu from "@/assets/sk_plants_manu.png";
import skCommercial from "@/assets/sk_commercial.png";
import skPlywood from "@/assets/sk_plywood.png";
import skHospital from "@/assets/sk_hospital.png";
import skEducational from "@/assets/sk_educational.png";

/* ---------- Trusted strip ---------- */
function Counter({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { v: 5000, suf: "+", l: "Installations" },
  { v: 25, suf: "+", l: "States" },
  { v: 16, suf: "+", l: "Years of Cumulative Experience" },
  { v: 99, suf: "%", l: "Client Satisfaction" },
];

const logos = ["Flipkart", "NHPC", "Airport Authority of India", "BHEL", "IISERV", "ABB", "APPCL", "Hydro Green", "Clean Tech"];

export function TrustedStrip() {
  return (
    <section className="relative border-y border-border bg-[var(--surface-tinted)]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="font-display text-4xl font-bold text-gradient md:text-5xl">
                <Counter to={s.v} suffix={s.suf} />
              </div>
              <div className="mt-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-border/70 py-8">
        <div className="mx-auto max-w-7xl overflow-hidden px-6">
          <div className="mb-4 text-center text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Trusted by industry leaders · ISO 9001:2015 · IEC 61439 · CE Compliant
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--surface-tinted)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--surface-tinted)] to-transparent" />
            <div className="flex w-max gap-12 animate-scroll-x">
              {[...logos, ...logos].map((l, i) => (
                <div key={i} className="font-display text-2xl font-bold tracking-tight text-foreground/30 transition-colors hover:text-[var(--brand-dark)]">
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Solutions Showcase ---------- */
const solutions = [
  { icon: Sun, title: "Solar EPC", desc: "Utility-scale design, engineering, procurement, commissioning.", tag: "120MW+", slug: "solar-epc-solutions" },
  { icon: BatteryCharging, title: "Solar BOS", desc: "Combiner boxes, disconnects, wiring, inverter and battery connection panels.", tag: "BOS", slug: "solar-bos-balance-of-system" },
  { icon: Activity, title: "SCADA Systems", desc: "Distributed real-time supervisory control with secure architectures.", tag: "24×7", slug: "scada-systems" },
  { icon: Cog, title: "Industrial Automation", desc: "PLC, HMI and robotics for the modern smart factory.", tag: "300+", slug: "industrial-automation" },
  { icon: Wifi, title: "IoT Monitoring", desc: "Edge-to-cloud telemetry, AI anomaly detection, predictive maintenance.", tag: "1.2M/day", slug: "iot-monitoring" },
  { icon: BatteryCharging, title: "Energy Management System", desc: "Real-time energy analytics, intelligent load optimization, consumption monitoring.", tag: "180+", slug: "smart-energy-solutions" },
  { icon: Gauge, title: "Smart Energy Monitoring", desc: "Net-metering, zero-export devices, energy optimisation.", tag: "Live", slug: "zero-export-devices" },
];

export function SolutionsShowcase() {
  return (
    <section id="solutions" className="relative overflow-hidden py-28">
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[460px] w-[460px] rounded-full"
        style={{ background: "var(--gradient-glow)", opacity: 0.35 }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Solutions"
          title={<>Engineered systems for <span className="text-gradient">tomorrow's industry</span></>}
          sub="Modular, integrated, monitored. Each system is designed in-house and built to international standards."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--brand)]/40 hover:shadow-[0_30px_60px_-30px_rgba(0,166,81,0.45)]"
            >
              <Link
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="absolute inset-0 z-10"
                aria-label={`View ${s.title}`}
              />
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "var(--gradient-glow)" }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--brand)]/10 to-[var(--brand-bright)]/10 text-[var(--brand-dark)] ring-1 ring-[var(--brand)]/20 transition-all group-hover:from-[var(--brand)] group-hover:to-[var(--brand-bright)] group-hover:text-white">
                    <s.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="rounded-full border border-[var(--brand)]/25 bg-[var(--surface-tinted)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--brand-dark)]">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <span
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-dark)] transition-all group-hover:gap-3"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */
const industries = [
  { icon: Warehouse, title: "Warehouses and Logistic", image: skWarehouse },
  { icon: Factory, title: "Manufacturing and Industrial Plants", image: skPlantsManu },
  { icon: Building2, title: "Commercial Buildings", image: skCommercial },
  { icon: Trees, title: "Plywood and Timber Industries", image: skPlywood },
  { icon: HeartPulse, title: "Hospitals and Healthcare", image: skHospital },
  { icon: GraduationCap, title: "Educational Institutions", image: skEducational },
];

export function IndustriesSection() {
  return (
    <section className="relative bg-[var(--surface-tinted)] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Industries"
          title={<>Powering every <span className="text-gradient">vertical</span></>}
          sub="From large-format manufacturing to distributed smart infrastructure — we engineer for scale."
        />
        <div className="mt-14 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((i, k) => (
            <motion.div
              key={i.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: k * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-3xl transition-all hover:scale-[1.04] hover:shadow-[var(--shadow-glow)]"
              style={{ backgroundImage: `url(${i.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
              <div className="relative h-full p-5">
                <div className="flex h-full flex-col justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/90 text-[var(--brand-dark)] shadow-[var(--shadow-soft)] ring-1 ring-[var(--brand)]/15 transition-colors group-hover:bg-gradient-to-br group-hover:from-[var(--brand)] group-hover:to-[var(--brand-bright)] group-hover:text-white">
                    <i.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <div className="font-display text-base font-semibold leading-tight text-white drop-shadow-sm">{i.title}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/80">Vertical</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- India Map ---------- */
const markers = [
  { x: 30, y: 38, name: "Delhi NCR" },
  { x: 22, y: 50, name: "Uttar Pradesh" },
  { x: 46, y: 22, name: "Rajasthan" },
  { x: 58, y: 55, name: "Haryana" },
  { x: 50, y: 70, name: "Telangana" },
  { x: 70, y: 38, name: "Odisha" },
  { x: 38, y: 78, name: "Assam" },
  { x: 14, y: 32, name: "Bihar" },
  { x: 60, y: 30, name: "Punjab" },
  { x: 35, y: 60, name: "Madhya Pradesh" },
];

export function IndiaMap() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeader
              align="left"
              eyebrow="National Footprint"
              title={<>Deployed across <span className="text-gradient">India</span></>}
              sub="500+ live installations across 25+ cities — monitored 24×7 from our central NOC."
            />
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { v: "500+", l: "Active sites" },
                { v: "25+", l: "Cities served" },
                { v: "98%", l: "Uptime SLA" },
                { v: "24×7", l: "NOC support" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-4">
                  <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-square rounded-[2rem] glass p-6">
              <div className="absolute inset-0 rounded-[2rem] grid-pattern opacity-30" />
              <svg viewBox="0 0 100 100" className="relative h-full w-full">
                {/* Stylized India outline */}
                <path
                  d="M22 18 L48 12 L62 18 L72 26 L74 36 L70 42 L68 50 L72 58 L66 64 L60 70 L52 78 L46 86 L40 86 L34 78 L28 70 L22 58 L18 48 L14 38 L18 28 Z"
                  fill="color-mix(in oklab, var(--brand) 6%, transparent)"
                  stroke="color-mix(in oklab, var(--brand) 35%, transparent)"
                  strokeWidth="0.4"
                />
                {markers.map((m, i) => (
                  <g key={m.name}>
                    <motion.circle
                      cx={m.x}
                      cy={m.y}
                      r="1.6"
                      fill="var(--brand-bright)"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    />
                    <motion.circle
                      cx={m.x}
                      cy={m.y}
                      r="1.6"
                      fill="none"
                      stroke="var(--brand-bright)"
                      strokeWidth="0.4"
                      initial={{ opacity: 0.7, r: 1.6 }}
                      animate={{ opacity: 0, r: 5 }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
                    />
                  </g>
                ))}
              </svg>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                {markers.slice(0, 6).map((m) => (
                  <span key={m.name} className="inline-flex items-center gap-1 rounded-full border border-[var(--brand)]/20 bg-white/70 px-2.5 py-1 text-[10px] font-medium text-[var(--brand-dark)] backdrop-blur">
                    <MapPin className="h-3 w-3" /> {m.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Featured Projects ---------- */
const projects = [
  {
    title: "Steel Plant Automation",
    metric: "45%",
    metricLabel: "Energy Optimization",
    timeline: "20 Days",
    tech: "PLC · SCADA · IoT",
    color: "from-[#0a3d28] to-[#06b25e]",
  },
  {
    title: "7MW Rooftop Solar EPC",
    metric: "₹3.2Cr",
    metricLabel: "Annual Savings",
    timeline: "3 Days",
    tech: "Zero Export with Monitoring",
    color: "from-[#054224] to-[#00a651]",
  },
  {
    title: "Pan-India SCADA NOC",
    metric: "120+",
    metricLabel: "Sites Monitored",
    timeline: "Live",
    tech: "SCADA · Cloud",
    color: "from-[#02281a] to-[#00c96b]",
  },
];

export function FeaturedProjects() {
  return (
    <section className="relative bg-[#04130a] py-28 text-white">
      <div className="absolute inset-0 grid-pattern opacity-[0.12]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          dark
          eyebrow="Featured Projects"
          title={<>Case studies in <span className="text-gradient">engineered impact</span></>}
          sub="Selected deployments delivering measurable energy and operational outcomes."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${p.color} p-7`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-30 grid-pattern" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--brand-bright)]/30 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                  Case study · {p.timeline}
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight">{p.title}</h3>
                <div className="mt-8">
                  <div className="font-display text-5xl font-bold text-[var(--brand-glow)]">{p.metric}</div>
                  <div className="mt-1 text-sm text-white/70">{p.metricLabel}</div>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-4 text-xs text-white/65">
                  <span>{p.tech}</span>
                  <Link to="/projects" className="inline-flex items-center gap-1 text-white transition-all group-hover:gap-2">
                    View <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Technology orbit ---------- */
const techs = [
  { icon: Cpu, label: "PLC" },
  { icon: Activity, label: "SCADA" },
  { icon: Wifi, label: "IoT" },
  { icon: Brain, label: "AI Monitoring" },
  { icon: Network, label: "Smart Grid" },
  { icon: Cloud, label: "Cloud Analytics" },
  { icon: Radio, label: "Telemetry" },
  { icon: Layers, label: "Edge Compute" },
];

export function TechnologySection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Technology · Innovation"
          title={<>A connected <span className="text-gradient">technology stack</span></>}
          sub="From edge sensors to cloud analytics — every layer engineered for reliability and security."
        />
        <div className="relative mt-14 grid gap-3 md:grid-cols-4">
          {techs.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:border-[var(--brand)]/40 hover:shadow-[0_18px_40px_-20px_rgba(0,166,81,0.4)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--surface-tinted)] text-[var(--brand-dark)] ring-1 ring-[var(--brand)]/15 transition-all group-hover:bg-gradient-to-br group-hover:from-[var(--brand)] group-hover:to-[var(--brand-bright)] group-hover:text-white">
                <t.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-sm font-semibold">{t.label}</div>
                <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Layer · {String(i + 1).padStart(2, "0")}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why choose us — Bento ---------- */
const bento = [
  { icon: Wrench, title: "In-house Engineering", span: "md:col-span-2 md:row-span-2", desc: "Multi-disciplinary engineering team — electrical, automation, software." },
  { icon: Activity, title: "Remote Monitoring", span: "md:col-span-2", desc: "24×7 NOC with secure VPN tunnels." },
  { icon: Brain, title: "Smart Automation" },
  { icon: Rocket, title: "Fast Deployment" },
  { icon: Gauge, title: "Energy Optimization", span: "md:col-span-2" },
  { icon: Headphones, title: "24×7 Support", span: "md:col-span-2" },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-[var(--surface-tinted)] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why RSS India"
          title={<>Built to be the <span className="text-gradient">long-term partner</span></>}
          sub="Engineering depth, deployment speed, lifetime support."
        />
        <div className="mt-14 grid auto-rows-[160px] grid-cols-1 gap-4 md:grid-cols-4">
          {bento.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:border-[var(--brand)]/40 hover:shadow-[var(--shadow-glow)] ${b.span ?? ""}`}
            >
              <div
                className="pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "var(--gradient-glow)" }}
              />
              <div className="relative flex h-full flex-col justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-bright)] text-white shadow-[var(--shadow-soft)]">
                  <b.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg font-bold">{b.title}</div>
                  {b.desc && <div className="mt-1.5 text-sm text-muted-foreground">{b.desc}</div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const tests = [
  { name: "Akash Behra", role: "Project Manager, GH2 Solar", quote: "We appreciate the professionalism and technical expertise of Reliable Source and Solutions in successfully completing the SCADA works across 13 Airports Authority of India sites. Their team ensured timely execution, smooth integration, and reliable system performance while maintaining high quality and coordination standards throughout the project." },
  { name: "Vikas Utreja", role: "Director, Crossair Engineers", quote: "We are highly satisfied with the quality and performance of the Electrical LT Panels supplied by RSSIL. The panels were delivered on time with excellent workmanship, proper finishing, and adherence to technical specifications.Your team showed professionalism throughout the project, including coordination, testing support, and prompt response to our requirements. The panels are operating smoothly and meeting our expectations in terms of reliability and safety. We appreciate your commitment towards quality and timely execution, and we look forward to working with you again on future projects." },
  { name: "Shubham Gupta", role: "Design Engineer, RAAS Engineers", quote: "They Supply Zero Export to Grid solution provided for our solar power plant. The complete system was delivered professionally with excellent technical support for smooth commissioning.The synchronization between DG and Solar works seamlessly, and the Zero Export functionality is operating accurately and reliably as per our requirements. The vendor demonstrated strong technical expertise, timely execution, and good coordination throughout the project." },
];

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Clients"
          title={<>What our <span className="text-gradient">partners say</span></>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tests.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-3xl border border-border bg-card p-7"
            >
              <Quote className="h-7 w-7 text-[var(--brand)]/30" />
              <p className="mt-4 text-base leading-relaxed text-foreground/85">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-bright)] font-display text-base font-bold text-white">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-[var(--brand-bright)] text-[var(--brand-bright)]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Insights / Blog ---------- */
const posts = [
  { tag: "Smart Energy", title: "Designing zero-export systems for industrial rooftops", read: "6 min" },
  { tag: "Solar", title: "Bifacial PV: ROI math for Indian climate zones", read: "8 min" },
  { tag: "SCADA", title: "Hardening OT networks: a practical playbook", read: "10 min" },
];

const brochureDownloadUrl = "https://drive.google.com/uc?export=download&id=1rTAHcmQ4d3QbFrpHAgkxzg7QNf6La0pe";

export function Insights() {
  return (
    <section className="relative bg-[var(--surface-tinted)] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            align="left"
            eyebrow="Insights"
            title={<>Notes from the <span className="text-gradient">field</span></>}
          />
          <Link to="/" className="btn-ghost">All articles <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-bright)]">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div
                  className="absolute -right-12 -bottom-12 h-44 w-44 rounded-full"
                  style={{ background: "var(--gradient-glow)" }}
                />
                <div className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold leading-snug">{p.title}</h3>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.read} read</span>
                  <span className="inline-flex items-center gap-1 text-[var(--brand-dark)] transition-all group-hover:gap-2">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#02281a] via-[#053a26] to-[#00603a] py-24 text-white">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full"
        style={{ background: "var(--gradient-glow)", opacity: 0.4 }}
      />
      <div
        className="pointer-events-none absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full"
        style={{ background: "var(--gradient-glow)", opacity: 0.3 }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <ShieldCheck className="mx-auto h-10 w-10 text-[var(--brand-glow)]" />
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
          Ready to upgrade your <span className="text-[var(--brand-glow)]">industrial infrastructure?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/75">
          Talk to an engineer. Receive a tailored systems proposal within 48 hours.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact" className="btn-primary">Get Consultation <ArrowRight className="h-4 w-4" /></Link>
          <a
            href={brochureDownloadUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable header ---------- */
function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <div
        className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] ${
          dark
            ? "border border-[var(--brand-glow)]/40 bg-white/5 text-[var(--brand-glow)]"
            : "border border-[var(--brand)]/25 bg-[var(--surface-tinted)] text-[var(--brand-dark)]"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-bright)]" />
        {eyebrow}
      </div>
      <h2 className={`mt-5 font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl ${dark ? "text-white" : ""}`}>
        {title}
      </h2>
      {sub && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${dark ? "text-white/70" : "text-muted-foreground"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

export { Workflow };
