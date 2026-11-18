import localFont from "next/font/local";

// Garage typography (blueprint §8): bold condensed sans-serif headings
// (Oswald — athletic, motorsport, "impact & authority") + clean readable body
// (Inter). Oswald is statically weighted → reliable with next/font. Big display
// headings render uppercase for high-energy builder feel; body stays in Inter.
// Export names + CSS vars are unchanged from the template so layout.tsx and the
// `font-heading` / `font-body` Tailwind families keep working untouched.
export const headingFont = localFont({
  src: [
    { path: "./fonts/Oswald-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Oswald-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Oswald-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Oswald-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const bodyFont = localFont({
  src: [
    { path: "./fonts/Inter-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});
