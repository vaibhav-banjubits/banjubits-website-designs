import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";
import "@/components/v5/v5.css";

// v5 "Ivory & Ink": ivory paper, midnight ink, champagne-brass detailing.
// Fraunces (high optical size) for display, Geist for text and UI.
const display = Fraunces({
  variable: "--font-lx-display",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-lx-sans",
  subsets: ["latin"],
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
  themeColor: "#f6f4ef",
};

export default function V5Layout({ children }: LayoutProps<"/v5">) {
  return <div className={`lx-root ${display.variable} ${sans.variable}`}>{children}</div>;
}
