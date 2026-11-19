import { Footer } from "@/components/maison/Footer";
import { Header } from "@/components/maison/Header";
import { Hero } from "@/components/maison/Hero";
import { Sprite } from "@/components/maison/Icon";
import { Motion } from "@/components/maison/Motion";
import {
  Approach,
  Products,
  Questions,
  Why,
  Work,
} from "@/components/maison/Sections";

export default function HomeMaison() {
  return (
    <>
      <Sprite />
      <a className="mn-skip" href="#mn-main">
        Skip to content
      </a>
      <Motion />
      <Header />
      <main id="mn-main">
        <Hero />
        <Products />
        <Questions />
        <Work />
        <Approach />
        <Why />
      </main>
      <Footer />
    </>
  );
}
