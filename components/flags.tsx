import type { Locale } from "@/lib/i18n";

type FlagProps = { className?: string };

const wrap = "block overflow-hidden rounded-sm ring-1 ring-black/10";

/** Reino Unido (Union Jack, versión simplificada). */
function GB({ className = "" }: FlagProps) {
  return (
    <span className={`${wrap} ${className}`}>
      <svg viewBox="0 0 60 30" className="h-full w-full">
        <clipPath id="ukclip">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <g clipPath="url(#ukclip)">
          <rect width="60" height="30" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    </span>
  );
}

/** Países Bajos. */
function NL({ className = "" }: FlagProps) {
  return (
    <span className={`${wrap} ${className}`}>
      <svg viewBox="0 0 9 6" className="h-full w-full">
        <rect width="9" height="6" fill="#21468B" />
        <rect width="9" height="4" fill="#fff" />
        <rect width="9" height="2" fill="#AE1C28" />
      </svg>
    </span>
  );
}

/** Francia. */
function FR({ className = "" }: FlagProps) {
  return (
    <span className={`${wrap} ${className}`}>
      <svg viewBox="0 0 3 2" className="h-full w-full">
        <rect width="3" height="2" fill="#fff" />
        <rect width="1" height="2" fill="#0055A4" />
        <rect width="1" height="2" x="2" fill="#EF4135" />
      </svg>
    </span>
  );
}

/** Alemania. */
function DE({ className = "" }: FlagProps) {
  return (
    <span className={`${wrap} ${className}`}>
      <svg viewBox="0 0 5 3" className="h-full w-full">
        <rect width="5" height="3" fill="#FFCE00" />
        <rect width="5" height="2" fill="#DD0000" />
        <rect width="5" height="1" fill="#000" />
      </svg>
    </span>
  );
}

/** Italia. */
function IT({ className = "" }: FlagProps) {
  return (
    <span className={`${wrap} ${className}`}>
      <svg viewBox="0 0 3 2" className="h-full w-full">
        <rect width="3" height="2" fill="#fff" />
        <rect width="1" height="2" fill="#009246" />
        <rect width="1" height="2" x="2" fill="#CE2B37" />
      </svg>
    </span>
  );
}

/** España. */
function ES({ className = "" }: FlagProps) {
  return (
    <span className={`${wrap} ${className}`}>
      <svg viewBox="0 0 6 4" className="h-full w-full">
        <rect width="6" height="4" fill="#AA151B" />
        <rect width="6" height="2" y="1" fill="#F1BF00" />
      </svg>
    </span>
  );
}

/** Rusia. */
function RU({ className = "" }: FlagProps) {
  return (
    <span className={`${wrap} ${className}`}>
      <svg viewBox="0 0 9 6" className="h-full w-full">
        <rect width="9" height="6" fill="#D52B1E" />
        <rect width="9" height="4" fill="#0039A6" />
        <rect width="9" height="2" fill="#fff" />
      </svg>
    </span>
  );
}

export const Flags: Record<Locale, (props: FlagProps) => React.JSX.Element> = {
  en: GB,
  nl: NL,
  fr: FR,
  de: DE,
  it: IT,
  ru: RU,
  es: ES,
};
