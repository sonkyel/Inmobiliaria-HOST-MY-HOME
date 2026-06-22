import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

type Props = {
  message?: string;
  label?: string;
  className?: string;
  size?: "md" | "lg";
};

/** Botón estándar de WhatsApp (CTA de conversión). */
export default function WhatsAppButton({
  message,
  label = "Reservar por WhatsApp",
  className = "",
  size = "md",
}: Props) {
  const sizing = size === "lg" ? "px-7 py-4 text-lg" : "px-5 py-3 text-base";
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp-dark ${sizing} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {label}
    </a>
  );
}
