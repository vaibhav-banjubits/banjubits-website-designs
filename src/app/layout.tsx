import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Geist_Mono,
  Inter,
  Inter_Tight,
  Manrope,
  Plus_Jakarta_Sans,
} from "next/font/google";
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

// Type pairings offered by the palette & type selector (from the brand lab).
// Inter is already loaded above. preload is off so a page only downloads these
// if the selector actually switches to them.
const blManrope = Manrope({
  variable: "--bl-manrope",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});
const blJakarta = Plus_Jakarta_Sans({
  variable: "--bl-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});
const blFraunces = Fraunces({
  variable: "--bl-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  preload: false,
});
const blGeistMono = Geist_Mono({
  variable: "--bl-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Banjubits — AI engineering and product studio",
  description:
    "Banjubits is an AI engineering and product studio. We design, build and ship AI systems, digital products and cloud platforms for enterprises and growing companies.",
};

export const viewport: Viewport = {
  themeColor: "#faf7f0",
};

// Re-applies the saved palette & type choice before first paint, so there is no
// flash of the "as built" colours when you open or switch versions.
const THEME_BOOT = `try{var s=JSON.parse(localStorage.getItem("bb-theme")||"null");if(s){var r=document.documentElement,v=s.vars||{},a=s.attrs||{};for(var k in v)r.style.setProperty(k,v[k]);for(var n in a)r.setAttribute(n,a[n]);if(a["data-bl-mode"]==="dark")r.style.colorScheme="dark"}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interTight.variable} ${inter.variable} ${blManrope.variable} ${blJakarta.variable} ${blFraunces.variable} ${blGeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
      </head>
      <body>
        {children}
        <ThemePicker />
      </body>
    </html>
  );
}
