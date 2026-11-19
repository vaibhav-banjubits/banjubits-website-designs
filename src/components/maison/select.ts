import type { ProductId } from "./data";

/** The hero orb and the footer ask the product explorer to open a product. */
export const SELECT_EVENT = "mn-select";

export function selectProduct(id: ProductId) {
  window.dispatchEvent(new CustomEvent<ProductId>(SELECT_EVENT, { detail: id }));
}
