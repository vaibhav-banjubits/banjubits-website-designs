import { Belief } from "@/components/rh/Belief";
import { Bearings } from "@/components/rh/Bearings";
import { Cases } from "@/components/rh/Cases";
import { Closing, Footer } from "@/components/rh/Closing";
import { Compare } from "@/components/rh/Compare";
import { Header } from "@/components/rh/Header";
import { Insights } from "@/components/rh/Insights";
import { Intro } from "@/components/rh/Intro";
import { Motion } from "@/components/rh/Motion";
import { Proof } from "@/components/rh/Proof";
import { Route } from "@/components/rh/Route";
import { Services } from "@/components/rh/Services";
import { Strain } from "@/components/rh/Strain";
import { Tools } from "@/components/rh/Tools";

export default function HomeV7() {
  return (
    <>
      <a className="rh-skip" href="#rh-main">
        Skip to content
      </a>
      <div className="rh-prog" aria-hidden="true" />
      <Motion />
      <Header />
      <main id="rh-main">
        <Intro />
        <Strain />
        <Bearings />
        <Services />
        <Compare />
        <Route />
        <Cases />
        <Proof />
        <Tools />
        <Belief />
        <Insights />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
