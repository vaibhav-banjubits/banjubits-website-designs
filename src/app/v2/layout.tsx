import type { Metadata } from "next";
import { Jost, Manrope } from "next/font/google";
import "@/components/maison/maison.css";

// Sans-serif only, by request: no serif fonts anywhere on this page.
// Display: Jost (headlines, numerals, wordmark): a light, geometric luxury sans
// Text:    Manrope (body copy, UI, tracked small caps)
const display = Jost({
  variable: "--font-mn-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});
const text = Manrope({
  variable: "--font-mn-text",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Banjubits | AI built into real business work",
  description:
    "Banjubits builds AI into real business work, with Mentis accelerators that get you to a working pilot in weeks: knowledge copilots, agentic automation, modernization, engineering design, voice and cloud.",
  // An alternate homepage concept: keep it out of search until it replaces the live one.
  robots: { index: false, follow: false },
};

export default function MaisonLayout({ children }: LayoutProps<"/v2">) {
  return (
    <div className={`mn-root ${display.variable} ${text.variable}`}>
      {children}
    </div>
  );
}
