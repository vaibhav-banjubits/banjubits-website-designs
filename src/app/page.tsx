import SiteHeader from "@/components/SiteHeader";
import {
  About,
  Approach,
  ContactFooter,
  Hero,
  Insights,
  Products,
  Sectors,
  Services,
  Work,
} from "@/components/Home";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Sectors />
        <About />
        <Work />
        <Services />
        <Approach />
        <Products />
        <Insights />
      </main>
      <ContactFooter />
    </>
  );
}
