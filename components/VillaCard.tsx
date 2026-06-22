"use client";

import Image from "next/image";
import Link from "next/link";
import type { Villa } from "@/lib/villas";
import { translateVillaText } from "@/lib/i18n-villas";
import WhatsAppButton from "./WhatsAppButton";
import { BedIcon, PoolIcon, PinIcon, StarIcon } from "./icons";
import { useLang } from "./LanguageProvider";
import type { Dict } from "@/lib/i18n";

function typeLabel(d: Dict, type: Villa["type"]): string {
  switch (type) {
    case "Apartamento":
      return d.airbnb.typeApartamento;
    case "Habitación":
      return d.airbnb.typeHabitación;
    case "Ático":
      return d.airbnb.typeÁtico;
    case "Casa":
      return d.airbnb.typeCasa;
  }
}

export default function VillaCard({ villa }: { villa: Villa }) {
  const { d, locale } = useLang();
  const href = `/villas/${villa.slug}`;
  const text = translateVillaText(villa.slug, locale, {
    short: villa.shortDescription,
    long: villa.description,
  });

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-line shadow-sm hover:shadow-xl transition-shadow duration-300">
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={villa.images[0]}
          alt={`${villa.name}, ${villa.zone}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {villa.badge === "Superhost" && (
          <span className="absolute top-3 left-3 rounded-full bg-white/95 text-ink text-xs font-semibold px-3 py-1 shadow flex items-center gap-1">
            <span className="text-brand">◆</span> Superhost
          </span>
        )}
        {villa.rating && (
          <span className="absolute top-3 right-3 rounded-full bg-ink/80 text-white text-xs font-semibold px-2.5 py-1 shadow flex items-center gap-1">
            <StarIcon className="h-3.5 w-3.5 text-amber-300" />
            {villa.rating.toFixed(2).replace(".", ",")}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-sm text-muted">
          <PinIcon className="h-4 w-4 text-brand" />
          {villa.zone} · {typeLabel(d, villa.type)}
        </p>

        <h3 className="mt-1 font-display text-lg font-bold text-ink leading-snug">
          <Link href={href} className="hover:text-brand transition-colors duration-200">
            {villa.name}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-charcoal leading-relaxed line-clamp-2">{text.short}</p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-charcoal">
          {villa.bedrooms && (
            <li className="flex items-center gap-1.5">
              <BedIcon className="h-4 w-4 text-muted" /> {villa.bedrooms}
            </li>
          )}
          {villa.privatePool && (
            <li className="flex items-center gap-1.5">
              <PoolIcon className="h-4 w-4 text-muted" /> {d.detail.pool}
            </li>
          )}
          {villa.reviews && (
            <li className="flex items-center gap-1.5">
              <StarIcon className="h-4 w-4 text-amber-400" />
              {villa.reviews} {d.airbnb.reviewsWord}
            </li>
          )}
        </ul>

        <div className="mt-5 pt-4 border-t border-line flex flex-col gap-2.5">
          <a
            href={villa.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brand-dark text-white px-4 py-2.5 font-semibold text-sm transition-colors duration-200 cursor-pointer"
          >
            {d.airbnb.view}
          </a>
          <WhatsAppButton
            message={d.wa.villa(villa.name, villa.zone)}
            label={d.card.consult}
            className="!px-4 !py-2.5 text-sm w-full"
          />
        </div>
      </div>
    </article>
  );
}
