import { useEffect, useState } from "react";
import promoBanner from "@/assets/promobanner.jpeg";

export function PromoBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = window.localStorage.getItem("rss-promo-banner-dismissed");
    setIsOpen(dismissed !== "true");
  }, []);

  const handleClose = () => {
    window.localStorage.setItem("rss-promo-banner-dismissed", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-white p-2 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close promo banner"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xl font-semibold text-slate-700 shadow-md transition hover:bg-white"
        >
          ×
        </button>
        <img
          src={promoBanner}
          alt="Promo banner"
          className="max-h-[80vh] w-full rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
