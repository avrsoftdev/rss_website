import callIcon from "@/assets/call_icon.png";
import whatsappIcon from "@/assets/whatsapp_icon.png";

export function FloatingActions() {
  return (
    <>
      <a
        href="tel:+919953698441"
        className="fixed bottom-6 left-6 z-40 grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-white shadow-[0_12px_30px_-8px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:scale-105"
        aria-label="Call +91 9953698441"
      >
        <img src={callIcon} alt="" className="h-8 w-8 object-contain" />
      </a>
      <a
        href="https://wa.me/919953698441"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-[#25D366] shadow-[0_12px_30px_-8px_rgba(37,211,102,0.55)] animate-pulse-glow"
        aria-label="WhatsApp +91 9953698441"
      >
        <img src={whatsappIcon} alt="" className="h-8 w-8 object-contain" />
      </a>
    </>
  );
}
