"use client";

import Hero from "./Hero";
import PromoBanner from "./PromoBanner";
import VillaGrid from "./VillaGrid";
import InstagramSection from "./InstagramSection";
import WhatsAppButton from "./WhatsAppButton";
import { villas, zones } from "@/lib/villas";
import { PoolIcon, UsersIcon, CheckIcon, PinIcon, WhatsAppIcon } from "./icons";
import { useLang } from "./LanguageProvider";

const serviceIcons = [WhatsAppIcon, PoolIcon, UsersIcon, CheckIcon];

export default function HomeContent() {
  const { d } = useLang();

  return (
    <>
      <PromoBanner />
      <Hero />

      {/* Villas */}
      <section id="villas" className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            {d.listing.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-ink">
            {d.listing.title}
          </h2>
          <p className="mt-4 text-lg text-charcoal">{d.listing.subtitle}</p>
        </div>

        <div className="mt-10">
          <VillaGrid villas={villas} zones={zones} />
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="bg-cream border-y border-line scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              {d.services.kicker}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-ink">
              {d.services.title}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {d.services.items.map((item, i) => {
              const Icon = serviceIcons[i];
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white border border-line p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-charcoal leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zonas */}
      <section id="zonas" className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            {d.zones.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-ink">
            {d.zones.title}
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {zones.map((z) => (
            <span
              key={z}
              className="inline-flex items-center gap-2 rounded-full bg-white border border-line px-5 py-2.5 text-charcoal shadow-sm"
            >
              <PinIcon className="h-4 w-4 text-brand" />
              {z}
            </span>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <InstagramSection />

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20 sm:pb-24 pt-20 sm:pt-24">
        <div className="rounded-3xl bg-ink text-white px-6 sm:px-12 py-14 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">{d.ctaFinal.title}</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">{d.ctaFinal.text}</p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton message={d.wa.general} label={d.ctaFinal.button} size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
