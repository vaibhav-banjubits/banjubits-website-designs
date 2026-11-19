import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/components/v10/v10.css";

// Sans-serif only, by request: no serif fonts anywhere on this page.
const font = Geist({
  variable: "--font-st",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BanjuBits | AI built into real business work",
  description:
    "BanjuBits is an AI engineering company. Tell us what you want AI to do: Mentis accelerators get you to a working pilot in weeks, with your people in charge.",
  // An alternate homepage concept: keep it out of search until it replaces the live one.
  robots: { index: false, follow: false },
};

export default function V10Layout({ children }: LayoutProps<"/v1">) {
  return <div className={`st-root ${font.variable}`}>{children}</div>;
}
