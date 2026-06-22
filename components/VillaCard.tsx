"use client";

import Image from "next/image";
import Link from "next/link";
import type { Villa } from "@/lib/villas";
import { formatPrice } from "@/lib/villas";
import { translateVillaText } from "@/lib/i18n-villas";
import WhatsAppButton from "./WhatsAppButton";
import { BedIcon, BathIcon, AreaIcon, UsersIcon, PinIcon } from "./icons";
import { useLang } from "./LanguageProvider";

export default function VillaCard({ villa }: { villa: Villa }) {
  const { d, locale } = useLang();
  const href = `/villas/${villa.slug}`;
  const text = translateVillaText(
    villa.slug,
    locale,
    { short: villa.shortDescription, long: villa.description },
  );
  const badgeLabel = villa.badge ? d.badges[villa.badge] : null;

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
        {badgeLabel && (
          <span className="absolute top-3 left-3 rounded-full bg-brand text-white text-xs font-semibold px-3 py-1 shadow">
            {badgeLabel}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-sm text-muted">
          <PinIcon className="h-4 w-4 text-brand" />
          {villa.zone} · Marbella
        </p>

        <h3 className="mt-1 font-display text-xl font-bold text-ink">
          <Link href={href} className="hover:text-brand transition-colors duration-200">
            {villa.name}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-charcoal leading-relaxed line-clamp-2">{text.short}</p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-charcoal">
          <li className="flex items-center gap-1.5">
            <BedIcon className="h-4 w-4 text-muted" /> {villa.bedrooms} {d.card.beds}
          </li>
          <li className="flex items-center gap-1.5">
            <BathIcon className="h-4 w-4 text-muted" /> {villa.bathrooms} {d.card.baths}
          </li>
          <li className="flex items-center gap-1.5">
            <UsersIcon className="h-4 w-4 text-muted" /> {villa.guests}
          </li>
          <li className="flex items-center gap-1.5">
            <AreaIcon className="h-4 w-4 text-muted" /> {villa.sizeM2} m²
          </li>
        </ul>

        <div className="mt-5 pt-4 border-t border-line flex items-end justify-between gap-3">
          <p className="leading-tight">
            <span className="font-display text-2xl font-bold text-ink">
              €{formatPrice(villa.pricePerNight)}
            </span>
            <span className="text-sm text-muted"> {d.card.perNight}</span>
          </p>
          <WhatsAppButton
            message={d.wa.villa(villa.name, villa.zone)}
            label={d.card.consult}
            className="!px-4 !py-2.5 text-sm"
          />
        </div>
      </div>
    </article>
  );
}
