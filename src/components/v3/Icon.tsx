import { SPRITE } from "./sprite";

/** Draws one icon from the inline sprite rendered by <Sprite />. */
export function Icon({ n, className = "" }: { n: string; className?: string }) {
  return (
    <svg
      className={`dh-ic${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    >
      <use href={`#i-${n}`} />
    </svg>
  );
}

/** Hidden SVG sprite. Render once per page. */
export function Sprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: SPRITE }}
    />
  );
}
