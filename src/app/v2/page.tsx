import { Approach } from "@/components/v6/Approach";
import { Capabilities } from "@/components/v6/Capabilities";
import { Closing, Footer } from "@/components/v6/Closing";
import { Header } from "@/components/v6/Header";
import { Hero } from "@/components/v6/Hero";
import { Insights } from "@/components/v6/Insights";
import { Motion } from "@/components/v6/Motion";
import { Products } from "@/components/v6/Products";
import { Sectors } from "@/components/v6/Sectors";
import { Work } from "@/components/v6/Work";

export default function HomeV6() {
  return (
    <>
      <a className="gl-skip" href="#gl-main">
        Skip to content
      </a>
      <div className="gl-prog" aria-hidden="true" />
      <Motion />
      <Header />
      <main id="gl-main">
        <Hero />
        <Work />
        <Capabilities />
        <Sectors />
        <Approach />
        <Products />
        <Insights />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
