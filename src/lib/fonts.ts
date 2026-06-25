import { Oswald, Inter } from "next/font/google";

// Garage typography (blueprint §8): bold condensed sans-serif headings
// (Oswald — athletic, motorsport, "impact & authority") + clean readable body
// (Inter). Oswald is statically weighted → reliable with next/font. Big display
// headings render uppercase for high-energy builder feel; body stays in Inter.
// Export names + CSS vars are unchanged from the template so layout.tsx and the
// `font-heading` / `font-body` Tailwind families keep working untouched.
export const headingFont = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
