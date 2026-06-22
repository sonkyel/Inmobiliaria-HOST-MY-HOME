"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALES, type Locale } from "@/lib/i18n";
import { Flags } from "./flags";
import { useLang } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cierra al hacer clic fuera o con Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];
  const CurrentFlag = Flags[current.code];

  const choose = (code: Locale) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-2.5 py-2 text-charcoal hover:border-brand transition-colors duration-200 cursor-pointer"
      >
        <CurrentFlag className="h-4 w-6" />
        <span className="hidden sm:inline text-sm font-medium">{current.label}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`h-4 w-4 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-line bg-white py-1 shadow-xl z-50"
        >
          {LOCALES.map((l) => {
            const Flag = Flags[l.code];
            const active = l.code === locale;
            return (
              <li key={l.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => choose(l.code)}
                  className={`flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors duration-200 cursor-pointer ${
                    active ? "bg-cream font-semibold text-ink" : "text-charcoal hover:bg-cream"
                  }`}
                >
                  <Flag className="h-4 w-6" />
                  <span className="text-sm">{l.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
