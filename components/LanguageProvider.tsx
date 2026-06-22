"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  type Locale,
  type Dict,
  DEFAULT_LOCALE,
  getDict,
} from "@/lib/i18n";

type LangContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  d: Dict;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "mhmh-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // Recupera el idioma guardado al cargar.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved) setLocaleState(saved);
  }, []);

  // Mantiene el atributo lang del documento sincronizado.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value: LangContextValue = { locale, setLocale, d: getDict(locale) };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang debe usarse dentro de <LanguageProvider>");
  }
  return ctx;
}
