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
    <Link href="/" className="flex items-center gap-3 group" aria-label="Marbella Host My Home">
      <Image
        src="/logo-mark.svg"
        alt=""
        width={44}
        height={44}
        priority
        className="h-11 w-11 transition-transform duration-200 group-hover:scale-105"
      />
      <span className="leading-none">
        <span className={`block font-display text-lg font-bold tracking-tight ${textColor}`}>
          Marbella Host My Home
        </span>
        <span className={`block text-[11px] uppercase tracking-[0.2em] ${subColor}`}>
          {d.brand.tagline}
        </span>
      </span>
    </Link>
  );
}
