import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { FadeIn } from "@/components/animations/FadeIn";

export function CTABand() {
  return (
    <section className="relative section-pad-lg overflow-hidden bg-[#08090B]">
      {/* Layered dark depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0B0C10] to-black" />
      <div className="absolute -top-24 left-1/4 w-[38rem] h-[38rem] rounded-full bg-brand/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[42rem] h-[42rem] rounded-full bg-chrome/8 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="relative container-xl text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="font-body text-xs font-bold uppercase tracking-[0.16em] text-white/90">
              Standard insurance wasn&rsquo;t built for a built car
            </span>
          </span>

          <h2 className="font-heading uppercase text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-5 tracking-tight max-w-3xl mx-auto leading-[1.1]">
            Your <span className="text-accel">$40,000 build</span> deserves better than a
            stock-market-value claim.
          </h2>
          <p className="font-body text-lg text-white/75 mb-9 max-w-2xl mx-auto leading-relaxed">
            Get a true agreed-value quote in minutes &mdash; with every modification disclosed
            and covered. Same-day binding, same-day certificates, 20+ years protecting
            modified vehicles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-body font-bold text-base uppercase tracking-wide shadow-cta hover:bg-brand-700 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Get Your Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/25 text-white px-8 py-4 rounded-xl font-body font-bold text-base uppercase tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
