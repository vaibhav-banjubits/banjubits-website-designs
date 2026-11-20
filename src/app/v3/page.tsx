import { Belief } from "@/components/v7/Belief";
import { Bearings } from "@/components/v7/Bearings";
import { Cases } from "@/components/v7/Cases";
import { Closing, Footer } from "@/components/v7/Closing";
import { Compare } from "@/components/v7/Compare";
import { Header } from "@/components/v7/Header";
import { Insights } from "@/components/v7/Insights";
import { Intro } from "@/components/v7/Intro";
import { Motion } from "@/components/v7/Motion";
import { Proof } from "@/components/v7/Proof";
import { Route } from "@/components/v7/Route";
import { Services } from "@/components/v7/Services";
import { Strain } from "@/components/v7/Strain";
import { Tools } from "@/components/v7/Tools";

export default function HomeV7() {
  return (
    <>
      <a className="rt-skip" href="#rt-main">
        Skip to content
      </a>
      <div className="rt-prog" aria-hidden="true" />
      <Motion />
      <Header />
      <main id="rt-main">
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
