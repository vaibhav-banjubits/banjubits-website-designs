import { Engage } from "@/components/v3/Engage";
import { Explorer } from "@/components/v3/Explorer";
import { Footer } from "@/components/v3/Footer";
import { Header } from "@/components/v3/Header";
import { Hear } from "@/components/v3/Hear";
import { Hero } from "@/components/v3/Hero";
import { Sprite } from "@/components/v3/Icon";
import { Motion } from "@/components/v3/Motion";
import { Proof } from "@/components/v3/Proof";
import { Start } from "@/components/v3/Start";
import { Why } from "@/components/v3/Why";

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
        <Explorer />
        <Hear />
        <Proof />
        <Engage />
        <Why />
        <Start />
      </main>
      <Footer />
    </>
  );
}
