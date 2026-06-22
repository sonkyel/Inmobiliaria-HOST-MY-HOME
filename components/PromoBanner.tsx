"use client";

import { ArrowRightIcon } from "./icons";
import { whatsappLink } from "@/lib/whatsapp";
import { useLang } from "./LanguageProvider";

/** Banner promocional destacado (editable en el diccionario i18n). */
export default function PromoBanner() {
  const { d } = useLang();
  return (
    <a
      href={whatsappLink(d.wa.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-brand text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2.5 flex items-center justify-center gap-2 text-center text-sm sm:text-base font-medium">
        <span>
          {d.promo.lead} <strong className="font-bold">{d.promo.strong}</strong> {d.promo.tail}
        </span>
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </a>
  );
}
