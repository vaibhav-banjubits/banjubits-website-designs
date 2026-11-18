import { BlueprintProvider } from "@/components/v1/Blueprint";
import { Cases } from "@/components/v1/Cases";
import { Delivery } from "@/components/v1/Delivery";
import { Header } from "@/components/v1/Header";
import { Hero } from "@/components/v1/Hero";
import { Marquee } from "@/components/v1/Marquee";
import { Motion } from "@/components/v1/Motion";
import { Products } from "@/components/v1/Products";
import { Proof } from "@/components/v1/Proof";
import { Solutions } from "@/components/v1/Solutions";
import { Footer, Start } from "@/components/v1/Start";

// Seven sections, one main action, in the order the Brand Direction doc proposes:
// hero (industry picker + draft blueprint), proof, case studies, what we do, products,
// how we deliver, start a project.
export default function HomeV1() {
  return (
    <BlueprintProvider>
      <a className="hb-skip" href="#hb-main">
        Skip to content
      </a>
      <div className="hb-prog" aria-hidden="true" />
      <Motion />
      <Header />
      <main id="hb-main">
        <Hero />
        <Marquee />
        <Proof />
        <Cases />
        <Solutions />
        <Products />
        <Delivery />
        <Start />
      </main>
      <Footer />
    </BlueprintProvider>
  );
}
