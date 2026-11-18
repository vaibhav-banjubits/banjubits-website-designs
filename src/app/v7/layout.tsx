import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "@/components/v7/v7.css";
import "@/components/v7/luxe.css";

// v7 "Ledger Route": the brand lab's Ledger palette (warm paper, ink, deep orange) on a
// navigation-led page structure. Plus Jakarta Sans carries the UI and body copy; Fraunces,
// the serif the brand lab pairs with Ledger, carries headlines, figures and quotes.
const sans = Plus_Jakarta_Sans({
  variable: "--font-rt-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Fraunces({
  variable: "--font-rt-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Banjubits | AI engineering and product studio",
  description:
    "Banjubits is an AI engineering and product studio. We design, build and govern AI systems, digital products and cloud platforms for enterprises and growing companies.",
  // An alternate homepage concept: keep it out of search until it replaces the live one.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#faf7f0",
};

export default function V7Layout({ children }: { children: React.ReactNode }) {
  return <div className={`rt-root ${sans.variable} ${serif.variable}`}>{children}</div>;
}
