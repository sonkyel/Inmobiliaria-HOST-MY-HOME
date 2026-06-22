"use client";

import { useMemo, useState } from "react";
import type { Villa } from "@/lib/villas";
import VillaCard from "./VillaCard";
import { useLang } from "./LanguageProvider";

type PriceRange = "all" | "lt500" | "500to1000" | "1000to2000" | "gt2000";

function matchesPrice(price: number, range: PriceRange): boolean {
  switch (range) {
    case "lt500":
      return price < 500;
    case "500to1000":
      return price >= 500 && price < 1000;
    case "1000to2000":
      return price >= 1000 && price < 2000;
    case "gt2000":
      return price >= 2000;
    default:
      return true;
  }
}

const selectClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand cursor-pointer";

export default function VillaGrid({
  villas,
  zones,
}: {
  villas: Villa[];
  zones: string[];
}) {
  const { d } = useLang();
  const [zone, setZone] = useState<string>("all");
  const [guests, setGuests] = useState<string>("all");
  const [price, setPrice] = useState<PriceRange>("all");

  const priceOptions: { value: PriceRange; label: string }[] = [
    { value: "all", label: d.filters.priceAny },
    { value: "lt500", label: d.filters.priceLt },
    { value: "500to1000", label: d.filters.priceMid1 },
    { value: "1000to2000", label: d.filters.priceMid2 },
    { value: "gt2000", label: d.filters.priceGt },
  ];

  const filtered = useMemo(() => {
    return villas.filter((v) => {
      if (zone !== "all" && v.zone !== zone) return false;
      if (guests !== "all" && v.guests < Number(guests)) return false;
      if (!matchesPrice(v.pricePerNight, price)) return false;
      return true;
    });
  }, [villas, zone, guests, price]);

  const reset = () => {
    setZone("all");
    setGuests("all");
    setPrice("all");
  };

  const hasFilters = zone !== "all" || guests !== "all" || price !== "all";

  return (
    <div>
      {/* Filtros */}
      <div className="rounded-2xl bg-cream border border-line p-4 sm:p-5 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="filter-zone" className="block text-sm font-medium text-ink mb-1.5">
              {d.filters.zone}
            </label>
            <select
              id="filter-zone"
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className={selectClass}
            >
              <option value="all">{d.filters.allZones}</option>
              {zones.map((z) => (
                <option key={z} value={z}>
                  {z}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filter-guests" className="block text-sm font-medium text-ink mb-1.5">
              {d.filters.guests}
            </label>
            <select
              id="filter-guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className={selectClass}
            >
              <option value="all">{d.filters.anyGuests}</option>
              {[2, 4, 6, 8, 10].map((n) => (
                <option key={n} value={n}>
                  {n}
                  {d.filters.guestsSuffix}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filter-price" className="block text-sm font-medium text-ink mb-1.5">
              {d.filters.price}
            </label>
            <select
              id="filter-price"
              value={price}
              onChange={(e) => setPrice(e.target.value as PriceRange)}
              className={selectClass}
            >
              {priceOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted" aria-live="polite">
          {filtered.length}{" "}
          {filtered.length === 1 ? d.filters.resultsOne : d.filters.resultsMany}
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={reset}
            className="text-sm font-medium text-brand hover:text-brand-dark transition-colors duration-200 cursor-pointer"
          >
            {d.filters.clear}
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((villa) => (
            <VillaCard key={villa.slug} villa={villa} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-line bg-cream p-12 text-center">
          <p className="text-charcoal">{d.filters.empty}</p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 inline-flex rounded-xl bg-brand hover:bg-brand-dark text-white px-5 py-2.5 font-semibold transition-colors duration-200 cursor-pointer"
          >
            {d.filters.clear}
          </button>
        </div>
      )}
    </div>
  );
}
