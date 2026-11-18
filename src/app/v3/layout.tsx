import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono, Manrope } from "next/font/google";
import "@/components/v3/v3.css";

// Display: Instrument Serif (headlines, numerals, wordmark)
// Text:    Manrope (body copy, UI, tracked small caps)
// Mono:    JetBrains Mono (indices and code-like details)
const display = Instrument_Serif({
  variable: "--font-dh-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});
const text = Manrope({
  variable: "--font-dh-text",
  subsets: ["latin"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--font-dh-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Banjubits | AI engineering and product studio",
  description:
    "Banjubits is an AI engineering and product studio. We design, build and ship AI systems, digital products and cloud platforms for enterprises and growing companies.",
  // An alternate homepage concept: keep it out of search until it replaces the live one.
  robots: { index: false, follow: false },
};

export default function V3Layout({ children }: LayoutProps<"/v3">) {
  return (
    <div
      className={`dh-root ${display.variable} ${text.variable} ${mono.variable}`}
    >
      {children}
    </div>
  );
}
