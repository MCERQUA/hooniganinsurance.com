import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

// Hoonigan-correct reasons (template copy was a framing find-replace).
const REASONS = [
  {
    title: "Enthusiast Specialists, Not Generalists",
    desc: "We know agreed value for a caged S13, a six-figure paint show car, and an LS-swapped restomod. We don’t Google your build’s value at claim time.",
  },
  {
    title: "Specialty Markets Only",
    desc: "Access to collector and enthusiast carriers that actually underwrite modified vehicles — not standard auto markets that cap custom parts at $1,500 and exclude every mod.",
  },
  {
    title: "Mods Disclosed, Mods Covered",
    desc: "We document your full build up front — engine swaps, cages, forced induction, custom paint — so nothing gets denied as “undisclosed” after a loss.",
  },
  {
    title: "Same-Day Certificates",
    desc: "A show or event needs proof of insurance by tomorrow? We issue ACORD certificates and additional-insured endorsements the same day.",
  },
  {
    title: "Licensed in All 50 States",
    desc: "Whether your build lives in a garage in Cali or you track it three states over, we bind coverage exactly where you need it.",
  },
  {
    title: "Claims Advocacy",
    desc: "When a loss happens, we’re in your corner — not a carrier call center that has never heard of an angle kit or a front-mount intercooler.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-canvas">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right" className="relative">
            <div className="relative h-[440px] sm:h-[520px] rounded-3xl overflow-hidden shadow-float ring-1 ring-chrome/20">
              <Image
                src="/images/agent-handshake.jpg"
                alt="Drift car in a paddock with a specialist reviewing the build sheet and roll cage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-brand/10 to-transparent" />
            </div>
            {/* Floating credential chip */}
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-card rounded-2xl shadow-card ring-1 ring-line px-5 py-4 flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand text-white">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading font-bold text-ink text-lg leading-none">20+ yrs</p>
                <p className="font-body text-xs text-muted mt-1">50-state licensed</p>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="eyebrow mb-3">Why CCA</p>
              <h2 className="font-heading uppercase text-3xl sm:text-4xl lg:text-5xl text-ink font-bold mb-4 tracking-tight">
                Built for builders, by people who{" "}
                <span className="text-brand">know builds</span>
              </h2>
              <p className="font-body text-lg text-muted leading-relaxed mb-8">
                We&rsquo;re not a direct writer trying to fit your car in a stock-value box.
                We place modified vehicles with specialty agreed-value carriers &mdash; and we
                know what a drift build and a show car are actually worth.
              </p>
            </FadeIn>

            <div className="space-y-5">
              {REASONS.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.05}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand/10 ring-1 ring-brand/30 flex items-center justify-center mt-0.5">
                      <BadgeCheck className="w-4 h-4 text-brand" strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="font-body font-bold text-ink text-[0.95rem] mb-1">{r.title}</p>
                      <p className="font-body text-sm text-muted leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
