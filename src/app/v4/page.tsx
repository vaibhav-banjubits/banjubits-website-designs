import { Closing, Footer } from "@/components/v4/Closing";
import { Compare } from "@/components/v4/Compare";
import { Gap } from "@/components/v4/Gap";
import { Header } from "@/components/v4/Header";
import { Hero } from "@/components/v4/Hero";
import { Insights } from "@/components/v4/Insights";
import { Models } from "@/components/v4/Models";
import { Motion } from "@/components/v4/Motion";
import { Principles } from "@/components/v4/Principles";
import { Products } from "@/components/v4/Products";
import { Services } from "@/components/v4/Services";
import { Studio } from "@/components/v4/Studio";
import { Work } from "@/components/v4/Work";

export default function HomeV4() {
  return (
    <>
      <a className="sg-skip" href="#sg-main">
        Skip to content
      </a>
      <Motion />
      <Header />
      <main id="sg-main">
        <Hero />
        <Studio />
        <Services />
        <Gap />
        <Principles />
        <Work />
        <Compare />
        <Models />
        <Products />
        <Insights />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
