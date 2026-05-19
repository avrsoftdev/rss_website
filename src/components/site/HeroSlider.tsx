import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";

import slideSolar from "@/assets/solar_epc_gw.png";
import slideAutomation from "@/assets/industrial_auto_gw.png";
import slideScada from "@/assets/scada_gw.png";
import slideIot from "@/assets/iot_gw.png";
import slideEv from "@/assets/energy_management_gw.png";
import slidePanels from "@/assets/electrical_panels_gw.png";

const slides = [
  {
    tag: "01 — Solar EPC",
    title: "Solar EPC Solutions",
    sub: "End-to-end design, engineering, procurement and commissioning of utility-scale solar plants.",
    image: slideSolar,
    stat: "120 MW+ commissioned",
  },
  {
    tag: "02 — Automation",
    title: "Industrial Automation",
    sub: "PLC, HMI, robotics and process control systems engineered for the smart factory.",
    image: slideAutomation,
    stat: "300+ automation lines",
  },
  {
    tag: "03 — SCADA",
    title: "SCADA Systems",
    sub: "Real-time supervisory control with secure, scalable architectures across distributed assets.",
    image: slideScada,
    stat: "24×7 remote operations",
  },
  {
    tag: "04 — IoT",
    title: "IoT Monitoring",
    sub: "Edge-to-cloud telemetry with anomaly detection, alerts and predictive maintenance.",
    image: slideIot,
    stat: "1.2M data points / day",
  },
  {
    tag: "05 — Mobility",
    title: "Energy Management System",
    sub: "Real-time energy analytics, intelligent load optimization, consumption monitoring.",
    image: slideEv,
    stat: "180+ charge points",
  },
  {
    tag: "06 — Panels",
    title: "Electrical Panels",
    sub: "LT/MV panels, ATS, capacitor banks and zero-export devices, in-house engineered.",
    image: slidePanels,
    stat: "ISO 9001 / IEC 61439",
  },
];

export function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [playing]);

  const slide = slides[idx];
  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-black">
      {/* Background images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04130a] via-transparent to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-[0.18]" />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full"
        style={{ background: "var(--gradient-glow)", opacity: 0.25 }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pt-28">
          <div className="grid w-full gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-bright)]/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-[var(--brand-glow)] backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-bright)] animate-pulse-glow" />
                    {slide.tag}
                  </div>
                  <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] text-white md:text-7xl lg:text-[5.5rem]">
                    {slide.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-gradient">{slide.title.split(" ").slice(-1)}</span>
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                    {slide.sub}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link to="/solutions" className="btn-primary">
                      Explore Solutions <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                    >
                      Schedule Consultation
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hidden lg:col-span-5 lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx + "-card"}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="relative ml-auto w-full max-w-md"
                >
                  <div className="glass-dark rounded-3xl p-6">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-glow)]">
                      Live deployment
                    </div>
                    <div className="mt-3 font-display text-3xl font-bold text-white">
                      {slide.stat}
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[78, 92, 64].map((v, i) => (
                        <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <div className="text-[10px] text-white/50">CH-{i + 1}</div>
                          <div className="mt-1 font-display text-xl font-semibold text-white">
                            {v}%
                          </div>
                          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${v}%` }}
                              transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                              className="h-full rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-bright)]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60">
                      <span>SCADA · Realtime</span>
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[var(--brand-bright)] animate-pulse" />
                        Online
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Slider controls */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-10">
          <div className="flex flex-1 items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setIdx(i)}
                className="group flex flex-1 max-w-[110px] flex-col gap-2"
                aria-label={`Go to ${s.title}`}
              >
                <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/15">
                  <motion.div
                    key={`${i}-${idx}-${playing}`}
                    initial={{ width: i < idx ? "100%" : "0%" }}
                    animate={{ width: i === idx ? "100%" : i < idx ? "100%" : "0%" }}
                    transition={{ duration: i === idx && playing ? 6 : 0.3, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-bright)]"
                  />
                </div>
                <span
                  className={`hidden text-left text-[10px] uppercase tracking-[0.18em] transition-colors md:block ${
                    i === idx ? "text-white" : "text-white/40 group-hover:text-white/70"
                  }`}
                >
                  {s.title}
                </span>
              </button>
            ))}
          </div>
          <div className="ml-6 flex items-center gap-2">
            <button onClick={prev} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/85 hover:bg-white/10">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => setPlaying((p) => !p)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/85 hover:bg-white/10">
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button onClick={next} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/85 hover:bg-white/10">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
