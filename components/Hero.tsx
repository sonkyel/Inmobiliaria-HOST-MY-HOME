"use client";

import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { ArrowRightIcon, StarIcon } from "./icons";
import { useLang } from "./LanguageProvider";

export default function Hero() {
  const { d } = useLang();

  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80"
        alt="Villa de lujo con piscina privada en Marbella"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/75" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-28 sm:py-36 text-white">
        <div className="max-w-2xl reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-medium ring-1 ring-white/25">
            <StarIcon className="h-4 w-4 text-amber-300" />
            {d.hero.badge}
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
            {d.hero.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed">{d.hero.subtitle}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#villas"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brand-dark text-white px-7 py-4 font-semibold text-lg transition-colors duration-200 cursor-pointer"
            >
              {d.hero.ctaPrimary}
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <WhatsAppButton message={d.wa.general} label={d.hero.ctaWhatsApp} size="lg" />
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="font-display text-3xl font-bold">+50</dt>
              <dd className="text-white/70 text-sm">{d.hero.stat1}</dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-bold">4,9★</dt>
              <dd className="text-white/70 text-sm">{d.hero.stat2}</dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-bold">24/7</dt>
              <dd className="text-white/70 text-sm">{d.hero.stat3}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
