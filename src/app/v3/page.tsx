import { Belief } from "@/components/v3/Belief";
import { Compare } from "@/components/v3/Compare";
import { Footer } from "@/components/v3/Footer";
import { Foundations } from "@/components/v3/Foundations";
import { Gap } from "@/components/v3/Gap";
import { Header } from "@/components/v3/Header";
import { Hero } from "@/components/v3/Hero";
import { Sprite } from "@/components/v3/Icon";
import { Insights } from "@/components/v3/Insights";
import { Intro } from "@/components/v3/Intro";
import { Motion } from "@/components/v3/Motion";
import { Process } from "@/components/v3/Process";
import { ProductsSection } from "@/components/v3/ProductsSection";
import { ServicesSection } from "@/components/v3/ServicesSection";
import { Work } from "@/components/v3/Work";

export default function HomeV3() {
  return (
    <>
      <Sprite />
      <a className="dh-skip" href="#dh-main">
        Skip to content
      </a>
      <Motion />
      <Header />
      <main id="dh-main">
        <Hero />
        <Intro />
        <Gap />
        <Foundations />
        <ServicesSection />
        <Compare />
        <Process />
        <Work />
        <ProductsSection />
        <Insights />
        <Belief />
      </main>
      <Footer />
    </>
  );
}
