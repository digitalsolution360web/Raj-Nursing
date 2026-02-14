"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import { en } from "@/app/translations/en";
import { hi } from "@/app/translations/hi";

export type Lang = "en" | "hi";

const translations = { en, hi } as const;

function getNested(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : undefined;
}

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("site-lang") as Lang | null;
    if (stored === "en" || stored === "hi") setLangState(stored);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("site-lang", l);
  }, []);

  const t = useCallback(
    (key: string) => {
      if (!mounted) return getNested(en as Record<string, unknown>, key) ?? key;
      const out = getNested(translations[lang] as Record<string, unknown>, key);
      return out ?? getNested(en as Record<string, unknown>, key) ?? key;
    },
    [lang, mounted]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
