import { Header } from "./Header";
import { Motion } from "./Motion";
import { Footer } from "./Start";

/** Page chrome shared by the homepage and every product page. */
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="hb-skip" href="#hb-main">
        Skip to content
      </a>
      <div className="hb-prog" aria-hidden="true" />
      <Motion />
      <Header />
      <main id="hb-main">{children}</main>
      <Footer />
    </>
  );
}
