import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import ThemePicker from "@/components/theme/ThemePicker";
import "./globals.css";

// Display: Inter Tight (headlines, numbers, the wordmark)
// Text:    Inter (body copy, UI)
const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-text",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Banjubits — AI engineering and product studio",
  description:
    "Banjubits is an AI engineering and product studio. We design, build and ship AI systems, digital products and cloud platforms for enterprises and growing companies.",
};

export const viewport: Viewport = {
  themeColor: "#faf7f0",
};

// The palette & type selector was removed; drop any choice it saved earlier so no
// stale colours or fonts are re-applied. (Version pages style themselves.)
const CLEAR_SAVED_THEME = `try{localStorage.removeItem("bb-theme")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interTight.variable} ${inter.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: CLEAR_SAVED_THEME }} />
      </head>
      <body>
        {children}
        <ThemePicker />
      </body>
    </html>
  );
}
