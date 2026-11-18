import type { ReactNode } from "react";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <a
      href="#top"
      className={`logo${onDark ? " logo--dark" : ""}`}
      aria-label="Banjubits, back to top"
    >
      Banjubits
      <span className="logo__dot" aria-hidden="true" />
    </a>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/** Pill button with a round arrow chip, the site's primary call to action. */
export function ArrowButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark";
}) {
  return (
    <a href={href} className={`btn btn--${variant} btn--arrow`}>
      <span>{children}</span>
      <span className="btn__chip">
        <ArrowIcon />
      </span>
    </a>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className="tlink">
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

/** Small section label: a dot and a few words. */
export function Label({ children }: { children: ReactNode }) {
  return <p className="label">{children}</p>;
}
