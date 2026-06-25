import { Check, X } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

type Row = { label: string; specialty: boolean; standard: boolean };

const ROWS: Row[] = [
  { label: "Agreed value — no depreciation debate", specialty: true, standard: false },
  { label: "Engine swaps & forced induction covered", specialty: true, standard: false },
  { label: "Roll cages & safety equipment valued in", specialty: true, standard: false },
  { label: "Custom paint & bodywork at full value", specialty: true, standard: false },
  { label: "Salvage / rebuilt titles eligible", specialty: true, standard: false },
  { label: "Transit coverage to shows & events", specialty: true, standard: false },
  { label: "Mods disclosed up front — no claim denial", specialty: true, standard: false },
  { label: "No $1,500–$5,000 custom-parts cap", specialty: true, standard: false },
];

function Mark({ yes }: { yes: boolean }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
        yes ? "bg-brand text-white" : "bg-line text-muted"
      }`}
      aria-label={yes ? "Included" : "Not included"}
    >
      {yes ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : <X className="w-3.5 h-3.5" strokeWidth={3} />}
    </span>
  );
}

export function CoverageBreakdown() {
  return (
    <section className="section-pad bg-canvas">
      <div className="container-xl">
        <FadeIn>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="eyebrow mb-3">Coverage Breakdown</p>
            <h2 className="font-heading uppercase text-3xl sm:text-4xl lg:text-5xl text-ink font-bold mb-4 tracking-tight">
              Specialty vs. Standard Auto
            </h2>
            <p className="font-body text-lg text-muted leading-relaxed">
              Where a stock auto policy stops short, a purpose-built modified-vehicle policy
              picks up &mdash; feature by feature.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="max-w-4xl mx-auto rounded-3xl border border-line overflow-hidden shadow-card">
            {/* Header row */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr] bg-panel">
              <div className="p-5 sm:p-6" />
              <div className="p-5 sm:p-6 text-center bg-gradient-to-br from-brand to-brand-ink">
                <p className="font-heading font-bold uppercase text-white text-sm sm:text-base leading-tight tracking-wide">
                  Specialty Build Policy
                </p>
                <p className="font-body text-[0.7rem] text-white/90 font-bold uppercase tracking-wider mt-1">
                  Recommended
                </p>
              </div>
              <div className="p-5 sm:p-6 text-center">
                <p className="font-heading font-bold uppercase text-ink-soft text-sm sm:text-base leading-tight tracking-wide">
                  Standard Auto
                </p>
                <p className="font-body text-[0.7rem] text-muted font-semibold uppercase tracking-wider mt-1">
                  Typical
                </p>
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((r, i) => (
              <div
                key={r.label}
                className={`grid grid-cols-[1.6fr_1fr_1fr] items-center ${
                  i % 2 ? "bg-card-2/40" : "bg-card"
                } border-t border-line-soft`}
              >
                <p className="p-4 sm:p-5 font-body text-sm sm:text-[0.95rem] font-semibold text-ink">
                  {r.label}
                </p>
                <div className="p-4 sm:p-5 flex justify-center"><Mark yes={r.specialty} /></div>
                <div className="p-4 sm:p-5 flex justify-center"><Mark yes={r.standard} /></div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
