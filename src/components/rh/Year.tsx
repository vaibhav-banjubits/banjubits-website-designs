"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Current year: 2026 on the server render, the real year once on the client. */
export function Year() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => 2026,
  );
  return <>{year}</>;
}
