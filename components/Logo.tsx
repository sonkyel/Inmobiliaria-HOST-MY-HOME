"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "./LanguageProvider";

/**
 * Lockup de marca: el rombo (logo-mark.svg) + el wordmark en tipografía del sitio.
 * Variante "light" para fondos oscuros.
 */
export default function Logo({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const { d } = useLang();
  const textColor = variant === "light" ? "text-white" : "text-ink";
  const subColor = variant === "light" ? "text-white/70" : "text-muted";

  return (
    <Link href="/" className="flex items-center gap-2.5 group min-w-0" aria-label="Marbella Host My Home">
      <Image
        src="/logo-mark.svg"
        alt=""
        width={44}
        height={44}
        priority
        className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 transition-transform duration-200 group-hover:scale-105"
      />
      <span className="leading-tight min-w-0">
        <span
          className={`block font-display text-[15px] sm:text-lg font-bold tracking-tight leading-tight ${textColor}`}
        >
          Marbella Host My Home
        </span>
        <span
          className={`mt-0.5 hidden sm:block text-[11px] uppercase tracking-[0.2em] ${subColor}`}
        >
          {d.brand.tagline}
        </span>
      </span>
    </Link>
  );
}
