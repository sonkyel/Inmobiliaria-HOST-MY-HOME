"use client";

import Link from "next/link";
import type { Villa } from "@/lib/villas";
import { formatPrice } from "@/lib/villas";
import { translateVillaText, translateAmenity } from "@/lib/i18n-villas";
import Gallery from "./Gallery";
import WhatsAppButton from "./WhatsAppButton";
import {
  BedIcon,
  BathIcon,
  AreaIcon,
  UsersIcon,
  PoolIcon,
  PinIcon,
  CheckIcon,
  ChevronLeftIcon,
} from "./icons";
import { useLang } from "./LanguageProvider";

export default function VillaDetail({ villa }: { villa: Villa }) {
  const { d, locale } = useLang();

  const text = translateVillaText(villa.slug, locale, {
    short: villa.shortDescription,
    long: villa.description,
  });
  const badgeLabel = villa.badge ? d.badges[villa.badge] : null;

  const specs = [
    { icon: BedIcon, label: `${villa.bedrooms} ${d.detail.beds}` },
    { icon: BathIcon, label: `${villa.bathrooms} ${d.detail.baths}` },
    { icon: UsersIcon, label: `${villa.guests} ${d.detail.guests}` },
    { icon: AreaIcon, label: `${villa.sizeM2} m²` },
    ...(villa.privatePool ? [{ icon: PoolIcon, label: d.detail.pool }] : []),
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
      <Link
        href="/#villas"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal hover:text-brand transition-colors duration-200"
      >
        <ChevronLeftIcon className="h-4 w-4" />
        {d.detail.back}
      </Link>

      <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="flex items-center gap-1.5 text-muted">
            <PinIcon className="h-5 w-5 text-brand" />
            {villa.zone} · Marbella
          </p>
          <h1 className="mt-1 font-display text-3xl sm:text-4xl font-bold text-ink">{villa.name}</h1>
        </div>
        {badgeLabel && (
          <span className="rounded-full bg-brand text-white text-sm font-semibold px-4 py-1.5">
            {badgeLabel}
          </span>
        )}
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Gallery images={villa.images} name={villa.name} />

          <div className="mt-6 flex flex-wrap gap-3">
            {specs.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-xl bg-cream border border-line px-4 py-2.5 text-charcoal"
              >
                <Icon className="h-5 w-5 text-brand" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="font-display text-2xl font-bold text-ink">{d.detail.descriptionTitle}</h2>
            <p className="mt-3 text-charcoal leading-relaxed">{text.long}</p>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-2xl font-bold text-ink">{d.detail.amenitiesTitle}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {villa.amenities.map((a) => (
                <li key={a} className="flex items-center gap-2.5 text-charcoal">
                  <CheckIcon className="h-5 w-5 text-brand shrink-0" />
                  {translateAmenity(a, locale)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 rounded-2xl border border-line bg-white p-6 shadow-sm">
            <p className="leading-tight">
              <span className="font-display text-3xl font-bold text-ink">
                €{formatPrice(villa.pricePerNight)}
              </span>
              <span className="text-muted"> {d.detail.perNight}</span>
            </p>
            <p className="mt-2 text-sm text-muted">{d.detail.priceNote}</p>

            <div className="mt-5">
              <WhatsAppButton
                message={d.wa.villa(villa.name, villa.zone)}
                label={d.detail.reserve}
                size="lg"
                className="w-full"
              />
            </div>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted">
              <CheckIcon className="h-4 w-4 text-whatsapp" />
              {d.detail.trust}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
