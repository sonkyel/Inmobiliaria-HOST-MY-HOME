"use client";

import Link from "next/link";
import type { Villa } from "@/lib/villas";
import { translateVillaText, translateAmenity } from "@/lib/i18n-villas";
import Gallery from "./Gallery";
import WhatsAppButton from "./WhatsAppButton";
import {
  BedIcon,
  UsersIcon,
  PoolIcon,
  PinIcon,
  CheckIcon,
  ChevronLeftIcon,
  StarIcon,
} from "./icons";
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

export default function VillaDetail({ villa }: { villa: Villa }) {
  const { d, locale } = useLang();

  const text = translateVillaText(villa.slug, locale, {
    short: villa.shortDescription,
    long: villa.description,
  });

  const specs = [
    { icon: PinIcon, label: typeLabel(d, villa.type) },
    ...(villa.bedrooms ? [{ icon: BedIcon, label: `${villa.bedrooms} ${d.detail.beds}` }] : []),
    ...(villa.guests ? [{ icon: UsersIcon, label: `${villa.guests} ${d.detail.guests}` }] : []),
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
        {villa.rating && (
          <span className="rounded-full bg-cream border border-line px-4 py-2 text-ink font-semibold flex items-center gap-1.5">
            <StarIcon className="h-4 w-4 text-amber-400" />
            {villa.rating.toFixed(2).replace(".", ",")}
            {villa.reviews ? (
              <span className="text-muted font-normal">· {villa.reviews} {d.airbnb.reviewsWord}</span>
            ) : null}
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
            {villa.rating && (
              <p className="flex items-center gap-2 text-ink">
                <StarIcon className="h-5 w-5 text-amber-400" />
                <span className="font-display text-2xl font-bold">
                  {villa.rating.toFixed(2).replace(".", ",")}
                </span>
                {villa.reviews ? (
                  <span className="text-muted">· {villa.reviews} {d.airbnb.reviewsWord}</span>
                ) : null}
              </p>
            )}
            <p className="mt-2 text-sm text-muted">{d.detail.priceNote}</p>

            <div className="mt-5 space-y-3">
              <a
                href={villa.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brand-dark text-white px-7 py-4 font-semibold text-lg transition-colors duration-200 cursor-pointer"
              >
                {d.airbnb.book}
              </a>
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
