import { Cases } from "@/components/v1/Cases";
import { Delivery } from "@/components/v1/Delivery";
import { Hero } from "@/components/v1/Hero";
import { Marquee } from "@/components/v1/Marquee";
import { Pains } from "@/components/v1/Pains";
import { Products } from "@/components/v1/Products";
import { Proof } from "@/components/v1/Proof";
import { Shell } from "@/components/v1/Shell";
import { Start } from "@/components/v1/Start";
import { Why } from "@/components/v1/Why";

// Product-led, per the 18 Nov team call: the hero says what BanjuBits does and shows the Mentis
// products at work, the products come straight after, proof sits lower down, and every product
// has its own page at /v4/mentis/[slug].
export default function Home() {
  return (
    <Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BanjuBits",
            description:
              "AI engineering company building production AI for enterprises and institutions.",
            email: "coreops@banjubits.com",
            sameAs: ["https://www.linkedin.com/company/banjubits/"],
          }),
        }}
      />
      <Hero />
      <Marquee />
      <Products />
      <Pains />
      <Cases />
      <Proof />
      <Delivery />
      <Why />
      <Start />
    </Shell>
  );
}
