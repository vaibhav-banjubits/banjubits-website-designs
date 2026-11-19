import { Bento } from "@/components/v10/Bento";
import { Engage } from "@/components/v10/Engage";
import { Footer } from "@/components/v10/Footer";
import { Header } from "@/components/v10/Header";
import { Hero } from "@/components/v10/Hero";
import { Sprite } from "@/components/v10/Icon";
import { Motion } from "@/components/v10/Motion";
import { Promises } from "@/components/v10/Promises";
import { Proof } from "@/components/v10/Proof";
import { Start } from "@/components/v10/Start";

export default function HomeV10() {
  return (
    <>
      <Sprite />
      <a className="st-skip" href="#st-main">
        Skip to content
      </a>
      <Motion />
      <Header />
      <main id="st-main">
        <Hero />
        <Bento />
        <Promises />
        <Proof />
        <Engage />
        <Start />
      </main>
      <Footer />
    </>
  );
}
