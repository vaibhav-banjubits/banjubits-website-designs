import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "@/components/v3/v3.css";

// Sans-serif only, by request: no serif fonts anywhere on this page.
// Display: Inter Tight (headlines, numbers, the wordmark)
// Text:    Inter (body copy, UI)
const display = Inter_Tight({
  variable: "--font-dh-display",
  subsets: ["latin"],
  display: "swap",
});
const text = Inter({
  variable: "--font-dh-text",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BanjuBits | AI built into real business work",
  description:
    "BanjuBits is an AI engineering company. We build AI into real business work, in a way leadership can trust, with Mentis accelerators that get you to a working pilot in weeks.",
  // An alternate homepage concept: keep it out of search until it replaces the live one.
  robots: { index: false, follow: false },
};

export default function V3Layout({ children }: LayoutProps<"/v3">) {
  return <div className={`dh-root ${display.variable} ${text.variable}`}>{children}</div>;
}
