import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "@/components/v4/v4.css";

// v4 "Atelier": editorial. Instrument Serif for display, Geist for text and labels.
const sans = Geist({
  variable: "--font-sg-sans",
  subsets: ["latin"],
  display: "swap",
});
const serif = Instrument_Serif({
  variable: "--font-sg-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Banjubits | AI engineering and product studio",
  description:
    "Banjubits is an AI engineering and product studio. We design, build and ship AI systems, digital products and cloud platforms for enterprises and growing companies.",
  // An alternate homepage concept: keep it out of search until it replaces the live one.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#f1eee8",
};

export default function V4Layout({ children }: LayoutProps<"/v4">) {
  return <div className={`sg-root ${sans.variable} ${serif.variable}`}>{children}</div>;
}
