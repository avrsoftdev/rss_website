import { Link } from "@tanstack/react-router";
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#04130a] text-white/85">
      <div className="pointer-events-none absolute inset-0 opacity-40 grid-pattern" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-bright)] shadow-[var(--shadow-glow)]">
                <Zap className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <div>
                <div className="font-display text-lg font-bold">RSS India</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--brand-glow)]">
                  Engineering Smart Energy
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">
              RSS India delivers turnkey solar EPC, industrial automation, SCADA and IoT solutions
              for next-generation infrastructure across India and beyond.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-md items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur"
            >
              <input
                type="email"
                placeholder="Subscribe to insights"
                className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-bright)] text-white">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-sm font-semibold text-white">Solutions</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {["Solar EPC", "Automation", "SCADA", "IoT", "EV Infra", "DG Sync"].map((s) => (
                <li key={s}>
                  <Link to="/solutions" className="hover:text-[var(--brand-glow)]">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-[var(--brand-glow)]">About</Link></li>
              <li><Link to="/projects" className="hover:text-[var(--brand-glow)]">Projects</Link></li>
              <li><Link to="/industries" className="hover:text-[var(--brand-glow)]">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--brand-glow)]">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[var(--brand-glow)]" /> Plot 47, Industrial Area, Pune, MH 411019</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[var(--brand-glow)]" /> +91 98XXX 12345</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[var(--brand-glow)]" /> hello@rssindia.tech</li>
            </ul>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 hover:bg-white/10">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} RSS India Engineering Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-5"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">ISO 9001:2015</a></div>
        </div>
      </div>
    </footer>
  );
}
