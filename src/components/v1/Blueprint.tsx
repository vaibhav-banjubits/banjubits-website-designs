"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { IndustryId } from "./data";

// The industry chosen in the hero follows the visitor down the page: the start-a-project
// form opens with it already selected.
type Ctx = { industry: IndustryId; setIndustry: (i: IndustryId) => void };

const BlueprintCtx = createContext<Ctx | null>(null);

export function BlueprintProvider({ children }: { children: React.ReactNode }) {
  const [industry, setIndustry] = useState<IndustryId>("enterprise");
  const value = useMemo(() => ({ industry, setIndustry }), [industry]);
  return <BlueprintCtx.Provider value={value}>{children}</BlueprintCtx.Provider>;
}

export function useBlueprint() {
  const c = useContext(BlueprintCtx);
  if (!c) throw new Error("useBlueprint must be used inside BlueprintProvider");
  return c;
}
