import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RSS India" },
      { name: "description", content: "Talk to an RSS India engineer. Receive a tailored systems proposal within 48 hours." },
      { property: "og:title", content: "Contact — RSS India" },
      { property: "og:description", content: "Get in touch for solar EPC, automation, SCADA, IoT and EV infrastructure projects." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's engineer your <span className="text-gradient">next system</span></>}
        sub="Share your scope. An engineer will respond within one business day."
      />
      <section className="pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl glass p-7">
              <h3 className="font-display text-xl font-bold">Reach the team</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-[var(--brand)]" /><div><div className="font-semibold">Headquarters</div><div className="text-muted-foreground">279/4, Khera Chauganpur, Ecotech-3rd, Phase-1, Greater Noida, India - 201306</div></div></li>
                <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-[var(--brand)]" /><div><div className="font-semibold">Phone</div><div className="text-muted-foreground">(+91) 8800132874</div></div></li>
                <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-[var(--brand)]" /><div><div className="font-semibold">Email</div><div className="text-muted-foreground">info@rss-india.com</div></div></li>
              </ul>
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[{ v: "48h", l: "Response" }, { v: "24×7", l: "Support" }, { v: "ISO", l: "9001" }].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-7 rounded-3xl border border-border bg-card p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" placeholder="Jane Patel" />
              <Field label="Company" placeholder="ACME Industries" />
              <Field label="Email" type="email" placeholder="jane@company.com" />
              <Field label="Phone" placeholder="+91 ..." />
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Solution interest</label>
                <select className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/20">
                  {["Solar EPC", "Industrial Automation", "SCADA Systems", "IoT Monitoring", "EV Infrastructure", "Electrical Panels", "Other"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Project brief</label>
                <textarea rows={5} placeholder="Tell us about your scope, site and timeline..." className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/20" />
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div className="text-xs text-muted-foreground">By submitting, you agree to our processing policy.</div>
              <button className="btn-primary">{sent ? "Sent ✓" : "Send enquiry"} <ArrowRight className="h-4 w-4" /></button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</label>
      <input {...rest} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/20" />
    </div>
  );
}
