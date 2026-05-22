import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import rssLogo from "@/assets/rss-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const clientPortalUrl = "https://www.rss-iiot.in/solar/authentication/sign-in";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between rounded-full glass px-4 py-2.5 shadow-[0_8px_30px_-12px_rgba(0,107,60,0.18)] transition-all">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={rssLogo}
              alt="Reliable Source and Solutions"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
            <div className="leading-tight">
              <div className="font-display text-base font-bold tracking-tight">Reliable Source and Solutions</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--brand-dark)]/70">
                Commited to Reliability
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-[var(--brand-dark)] bg-[var(--surface-tinted)]" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-[var(--brand-dark)] hover:bg-[var(--surface-tinted)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={clientPortalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--brand)]/20 bg-white/45 px-4 py-2.5 text-xs font-semibold text-[var(--brand-dark)] transition hover:bg-[var(--surface-tinted)]"
            >
              Client Portal
            </a>
            <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-xs">
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-3xl glass p-4 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium hover:bg-[var(--surface-tinted)]"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={clientPortalUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium hover:bg-[var(--surface-tinted)]"
              >
                Client Portal
              </a>
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
