import type { Config } from "tailwindcss";

/**
 * HOONIGAN INSURANCE — Dark Garage design system (Worker B, GLM 5.2).
 *
 * Brand direction (blueprint §8): matte black / gunmetal primary (garage
 * culture), racing-orange secondary (high-vis energy), brushed-aluminum chrome
 * accent (aftermarket hardware), near-black canvas with elevated dark surfaces.
 * "Not friendly beige — this is for builders."
 *
 * This inverts DESIGN-SYSTEM §4.1's warm-light foundation onto a carbon canvas,
 * keeping every premium-trust technique (depth on peaks, glass, hover motion,
 * gradient text, the component library) — just on a dark enthusiast chassis.
 *
 * Two layers:
 *  1. NEW dark-garage tokens (carbon canvas, gunmetal card, orange brand ramp,
 *     chrome silver, caution yellow). Used by the premium restyled sections.
 *  2. LEGACY ALIASES (forest-green / ember-orange / warm-white / bark / timber /
 *     muted / border) mapped onto the dark palette so every page file that still
 *     references the framing template's old class names re-themes cohesively
 *     WITHOUT being edited (keeps Worker C's parallel content work unclobbered).
 *     text-bark → near-white, bg-warm-white → carbon, text-forest-green → orange,
 *     border-border → dark line, etc.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Dark garage foundation ─────────────────────────────────────────
        canvas: "#0C0D11", // carbon — page background (garage floor)
        card: "#161920", // gunmetal — elevated card surface
        "card-2": "#1B1F27", // slightly lighter gunmetal (hover/alt rows)
        panel: "#101317", // recessed surface (FAQ rows, sub-panels)
        ink: "#F5F6F8", // primary text — near-white
        "ink-soft": "#C9CED8", // secondary heading text
        muted: "#989EA8", // body / secondary text (≈6.5:1 on carbon)
        line: "#2A2F39", // borders (steel hairline)
        "line-soft": "#1E222B", // hairline dividers

        // ── Brand: racing orange (signature hue — identity + action) ───────
        // Orange carries identity on a black site (black-on-black is invisible),
        // so it doubles as the conversion CTA — it pops hardest against carbon.
        // Standard monotonic ramp (50 lightest → 900 darkest). Hover/pressed
        // states use 700 (darker); gradient highlights use `bright` (lighter).
        brand: {
          DEFAULT: "#F25C18",
          bright: "#FF7A33", // lighter stop for gradients / glow
          ink: "#6E2606", // deepest burnt orange (= 800)
          50: "#FFF3EC",
          100: "#FFE0D0",
          200: "#FFC0A1",
          300: "#FF9C6E",
          400: "#FF7A33", // bright
          500: "#F25C18", // DEFAULT
          600: "#D14A0F",
          700: "#A83A0C", // hover/pressed
          800: "#6E2606", // ink
          900: "#441704",
        },

        // ── Chrome: brushed aluminum (aftermarket hardware accent) ─────────
        chrome: {
          DEFAULT: "#A8AFB8", // brushed silver
          bright: "#D8DCE2", // polished chrome
          soft: "#23272E", // dark steel fill
          600: "#7B828B",
        },

        // ── Caution: high-vis yellow (minimal — caution-tape energy only) ──
        caution: {
          DEFAULT: "#FFC400",
          bright: "#FFD84D",
          soft: "#3A2E00",
        },

        // ── CTA alias (orange, same family as brand) ──────────────────────
        cta: {
          DEFAULT: "#F25C18",
          dark: "#C9450F",
          soft: "#2A1408",
        },

        // ── LEGACY ALIASES (framing template → dark garage) ────────────────
        // Kept so any C-owned file still using the old class names renders
        // correctly on the dark theme without being edited.
        "forest-green": {
          DEFAULT: "#F25C18", // → brand orange
          dark: "#A83A0C",
          50: "#221309", // → dark warm tint (not pale, stays cohesive on dark)
          light: "#FF7A33",
        },
        "ember-orange": {
          DEFAULT: "#F25C18", // → brand orange
          dark: "#C9450F",
          light: "#FF7A33",
        },
        "warm-white": "#0C0D11", // → carbon canvas (light-bg sections go dark)
        bark: {
          DEFAULT: "#F5F6F8", // → near-white ink (dark text becomes light)
          light: "#C9CED8",
        },
        timber: {
          DEFAULT: "#A8AFB8", // → chrome silver
          light: "#C9CED8",
        },
        border: "#2A2F39", // → steel line (muted already defined in foundation above)
      },
      fontFamily: {
        // CSS vars set by next/font in src/lib/fonts.ts (Oswald + Inter).
        heading: ["var(--font-heading)", "Oswald", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,.40)",
        card: "0 1px 2px rgba(0,0,0,.40), 0 12px 32px -14px rgba(0,0,0,.60)",
        "card-hover":
          "0 4px 12px rgba(0,0,0,.50), 0 28px 52px -18px rgba(242,92,24,.30)",
        cta: "0 14px 30px -10px rgba(242,92,24,.50)",
        float: "0 26px 70px -28px rgba(0,0,0,.72)",
        chrome: "0 14px 34px -12px rgba(0,0,0,.55)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up .6s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
