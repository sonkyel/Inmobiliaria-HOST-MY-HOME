"use client";

import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { useLang } from "./LanguageProvider";

/** Botón flotante global de WhatsApp, presente en todas las páginas. */
export default function WhatsAppFloating() {
  const { d } = useLang();
  return (
    <a
      href={whatsappLink(d.wa.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-md shadow-black/15 ring-1 ring-black/5 transition-transform duration-200 hover:scale-110 hover:bg-whatsapp-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp-dark"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
