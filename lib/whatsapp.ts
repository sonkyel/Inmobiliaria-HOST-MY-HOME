import { site } from "./site";

/**
 * Construye un enlace wa.me con un mensaje prerrellenado.
 * Los mensajes (en cada idioma) viven en el diccionario i18n (lib/i18n.ts → wa).
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
