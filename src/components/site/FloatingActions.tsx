import { MessageCircle, Calculator } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <Link
        to="/contact"
        className="hidden md:inline-flex btn-ghost !py-2.5 !px-4 text-xs shadow-[var(--shadow-soft)]"
      >
        <Calculator className="h-4 w-4" /> Energy Calculator
      </Link>
      <a
        href="https://wa.me/919800000000"
        target="_blank"
        rel="noreferrer"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.55)] animate-pulse-glow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
