import type { ProductId } from "./data";

/** Ask the product explorer to show one product, then scroll it into view. */
export function selectProduct(id: ProductId) {
  window.dispatchEvent(new CustomEvent("dh-select", { detail: id }));
  document.getElementById("products")?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });
}
