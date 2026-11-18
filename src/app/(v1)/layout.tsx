import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "@/components/v1/v1.css";

// v1 "Harbour Blueprint": the Brand Direction doc's recommendation. Deep Harbour (navy + teal),
// Manrope headings with Inter body, blueprint-led homepage.
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
  title: "Banjubits | Production AI and digital platforms",
  description:
    "Banjubits is an AI engineering and product studio. Choose your industry, see the draft blueprint, then start a project.",
};

export const viewport: Viewport = {
  themeColor: "#f5f7fa",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <div className={`hb-root ${display.variable} ${text.variable}`}>{children}</div>;
}
