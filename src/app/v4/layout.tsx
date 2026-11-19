import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "@/components/v1/v1.css";
import "@/components/v1/products.css";

// Deep Harbour (navy + teal) from the Brand Direction doc, Manrope headings with Inter body.
const display = Manrope({
  variable: "--font-hb-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const text = Inter({
  variable: "--font-hb-text",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BanjuBits | We build AI into real business work",
  description:
    "BanjuBits is an AI engineering company. We design, build and run production AI for enterprises and institutions, with our Mentis accelerators for a faster, safer start.",
  openGraph: {
    type: "website",
    siteName: "BanjuBits",
    title: "BanjuBits | We build AI into real business work",
    description:
      "Production AI for enterprises and institutions: knowledge copilots, agent platforms, modernization, engineering design AI and voice agents, with your people in charge.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f7fa",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <div className={`hb-root ${display.variable} ${text.variable}`}>{children}</div>;
}
