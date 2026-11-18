import { Approach } from "@/components/v5/Approach";
import { Closing, Footer } from "@/components/v5/Closing";
import { Header } from "@/components/v5/Header";
import { Hero } from "@/components/v5/Hero";
import { Insights } from "@/components/v5/Insights";
import { Motion } from "@/components/v5/Motion";
import { Products } from "@/components/v5/Products";
import { Proof } from "@/components/v5/Proof";
import { Services } from "@/components/v5/Services";
import { Work } from "@/components/v5/Work";

export default function HomeV5() {
  return (
    <>
      <a className="lx-skip" href="#lx-main">
        Skip to content
      </a>
      <Motion />
      <Header />
      <main id="lx-main">
        <Hero />
        <Proof />
        <Work />
        <Services />
        <Approach />
        <Products />
        <Insights />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
