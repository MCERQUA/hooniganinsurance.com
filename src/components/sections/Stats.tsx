"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { STATS } from "@/lib/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 30, stiffness: 100 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString());

  if (isInView) mv.set(value);

  return (
    <span
      ref={ref}
      className="font-heading text-4xl sm:text-5xl font-bold text-white tabular-nums"
    >
      <motion.span>{display}</motion.span>
      <span className="text-brand">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative section-pad overflow-hidden bg-[#08090B]">
      {/* Layered dark depth — deepest carbon + orange glow + chrome grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0B0C10] to-black" />
      <div className="absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full bg-brand/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-24 w-[44rem] h-[44rem] rounded-full bg-chrome/8 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      <div className="relative container-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 text-center">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-2 ${i !== 0 ? "lg:border-l lg:border-white/10" : ""}`}
            >
              <span className="block w-10 h-1 rounded-full bg-brand mx-auto mb-5" />
              <Counter value={s.value} suffix={s.suffix} />
              <p className="font-body text-sm text-white/65 mt-3 leading-snug uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
