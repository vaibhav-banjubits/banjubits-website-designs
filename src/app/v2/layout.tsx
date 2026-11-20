import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "@/components/v6/v6.css";

// v6 "Gilt & Petrol": limestone paper, deep petrol ink and a restrained gilt accent.
// Instrument Sans carries headlines and UI; Newsreader italic is the single serif accent.
const sans = Instrument_Sans({
  variable: "--font-gl-sans",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const serif = Newsreader({
  variable: "--font-gl-serif",
  subsets: ["latin"],
  style: ["italic"],
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
  themeColor: "#edece5",
};

export default function V6Layout({ children }: LayoutProps<"/v2">) {
  return <div className={`gl-root ${sans.variable} ${serif.variable}`}>{children}</div>;
}
