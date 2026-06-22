"use client";

import { useMemo, useState } from "react";
import type { Villa, ListingType } from "@/lib/villas";
import VillaCard from "./VillaCard";
import { useLang } from "./LanguageProvider";
import type { Dict } from "@/lib/i18n";

function typeLabel(d: Dict, type: ListingType): string {
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

const selectClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand cursor-pointer";

export default function VillaGrid({
  villas,
  zones,
  types,
}: {
  villas: Villa[];
  zones: string[];
  types: ListingType[];
}) {
  const { d } = useLang();
  const [zone, setZone] = useState<string>("all");
  const [type, setType] = useState<string>("all");

  const filtered = useMemo(() => {
    return villas.filter((v) => {
      if (zone !== "all" && v.zone !== zone) return false;
      if (type !== "all" && v.type !== type) return false;
      return true;
    });
  }, [villas, zone, type]);

  const reset = () => {
    setZone("all");
    setType("all");
  };

  const hasFilters = zone !== "all" || type !== "all";

  return (
    <div>
      <div className="rounded-2xl bg-cream border border-line p-4 sm:p-5 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
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
            <label htmlFor="filter-type" className="block text-sm font-medium text-ink mb-1.5">
              {d.airbnb.filterType}
            </label>
            <select
              id="filter-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={selectClass}
            >
              <option value="all">{d.airbnb.allTypes}</option>
              {types.map((t) => (
                <option key={t} value={t}>
                  {typeLabel(d, t)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

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
