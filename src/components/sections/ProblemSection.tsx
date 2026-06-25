import Link from "next/link";
import { AlertTriangle, TrendingDown, ShieldOff, ShieldAlert, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const GAPS = [
  {
    icon: TrendingDown,
    title: "Paid at stock value, not build value",
    desc: "Standard auto pays actual cash value of the stock vehicle. The $30,000 you put into the motor, suspension, and paint is invisible to the claim check.",
  },
  {
    icon: AlertTriangle,
    title: "Undisclosed mods void the claim",
    desc: "Forget to list a turbo, a cage, or an engine swap on a standard policy? Carriers can deny the entire claim citing “undisclosed modifications.”",
  },
  {
    icon: ShieldOff,
    title: "Track & event use excluded",
    desc: "Standard auto explicitly excludes on-track and competitive use. One incident during an HPDE or drift day and you’re paying out of pocket.",
  },
  {
    icon: ShieldAlert,
    title: "Cages, swaps & salvage declined",
    desc: "Roll cages, engine swaps, and salvage or rebuilt titles get flat-declined by most standard carriers — exactly the builds that need coverage most.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-pad bg-panel">
      <div className="container-xl">
        <FadeIn>
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">The Problem</p>
            <h2 className="font-heading uppercase text-3xl sm:text-4xl lg:text-5xl text-ink font-bold mb-4 tracking-tight">
              Your stock-priced policy is worthless for a built car.
            </h2>
            <p className="font-body text-lg text-muted leading-relaxed">
              Standard insurers built their policies for stock commuters. The moment your car
              has real modifications, those policies quietly stop protecting what you actually
              built &mdash; and they don&rsquo;t tell you until the claim is denied.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 mb-10">
          {GAPS.map((g, i) => (
            <FadeIn key={g.title} delay={(i % 2) * 0.08}>
              <div className="flex gap-4 bg-card border border-line rounded-2xl p-6 h-full shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand/10 ring-1 ring-brand/20 flex items-center justify-center">
                  <g.icon className="w-6 h-6 text-brand" strokeWidth={1.9} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-ink text-lg mb-1.5 leading-snug">
                    {g.title}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{g.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Outcome callout */}
        <FadeIn delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl bg-[#08090B] px-7 py-8 sm:px-12 sm:py-10 shadow-float">
            <div className="absolute inset-0 bg-grid-dark opacity-30" />
            <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-brand/15 blur-3xl" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-brand mb-2">
                  The real-world result
                </p>
                <p className="font-heading uppercase text-2xl sm:text-3xl font-bold text-white leading-snug max-w-2xl tracking-tight">
                  A <span className="text-accel">$40,000 build</span> can be reimbursed at{" "}
                  <span className="line-through decoration-brand/60">$2,500</span> &mdash; if
                  it&rsquo;s covered at all.
                </p>
              </div>
              <Link
                href="/quote"
                className="inline-flex flex-shrink-0 items-center gap-2 bg-brand text-white px-6 py-3.5 rounded-xl font-body font-bold text-base uppercase tracking-wide shadow-cta hover:bg-brand-700 hover:-translate-y-0.5 transition-all"
              >
                See agreed-value coverage
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
