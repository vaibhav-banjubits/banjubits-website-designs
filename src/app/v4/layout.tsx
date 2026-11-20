import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "@/components/rh/rh.css";
import "@/components/rh/luxe.css";

// v7 "Harbour Route": the brand lab's Deep Harbour palette (cool paper, navy ink, teal) on a
// navigation-led page structure. Plus Jakarta Sans carries the UI and body copy; Fraunces,
// a serif from the brand lab type pairings, carries headlines, figures and quotes.
const sans = Plus_Jakarta_Sans({
  variable: "--font-rh-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Fraunces({
  variable: "--font-rh-serif",
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
  themeColor: "#f5f7fa",
};

export default function V7Layout({ children }: { children: React.ReactNode }) {
  return <div className={`rh-root ${sans.variable} ${serif.variable}`}>{children}</div>;
}
