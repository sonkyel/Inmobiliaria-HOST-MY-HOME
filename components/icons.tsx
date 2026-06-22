import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BedIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7v11M3 13h18v5M21 13v-2a2 2 0 0 0-2-2H8v4" />
      <path d="M6 9V8a1 1 0 0 1 1-1" />
    </svg>
  );
}

export function BathIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3ZM7 4.5h2M6 19l-1 2M19 19l1 2" />
    </svg>
  );
}

export function AreaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4h16v16H4zM4 9h5M4 14h5M9 4v5M14 4v5" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM22 19v-1a4 4 0 0 0-3-3.87M16 5.13A4 4 0 0 1 16 13" />
    </svg>
  );
}

export function PoolIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 18c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1M2 14c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1M7 13V5a2 2 0 0 1 4 0M11 13V9" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 6l6 6-6 6M5 12h14" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.27 3.9a1 1 0 0 0 .95.69h4.1c.97 0 1.37 1.24.59 1.81l-3.32 2.41a1 1 0 0 0-.36 1.12l1.27 3.9c.3.92-.76 1.69-1.54 1.12l-3.32-2.41a1 1 0 0 0-1.18 0l-3.32 2.41c-.78.57-1.84-.2-1.54-1.12l1.27-3.9a1 1 0 0 0-.36-1.12L2.14 9.24c-.78-.57-.38-1.81.59-1.81h4.1a1 1 0 0 0 .95-.69l1.27-3.9Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 0 0 1.523 5.26l-.999 3.648 3.965-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.5.4 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.5.2-1.1.4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.07-1.1.05-1.7.24-2.1.4-.5.2-.9.44-1.3.84-.4.4-.64.8-.84 1.3-.16.4-.35 1-.4 2.1C2.6 9.5 2.6 9.9 2.6 13s0 3.5.07 4.7c.05 1.1.24 1.7.4 2.1.2.5.44.9.84 1.3.4.4.8.64 1.3.84.4.16 1 .35 2.1.4 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.44 1.3-.84.4-.4.64-.8.84-1.3.16-.4.35-1 .4-2.1.07-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.05-1.1-.24-1.7-.4-2.1-.2-.5-.44-.9-.84-1.3-.4-.4-.8-.64-1.3-.84-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.2-8.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
    </svg>
  );
}
