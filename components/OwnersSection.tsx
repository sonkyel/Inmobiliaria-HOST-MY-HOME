"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { ChartUpIcon, KeyIcon, CameraIcon, ShieldIcon, ArrowRightIcon, StarIcon } from "./icons";

const benefitIcons = [ChartUpIcon, KeyIcon, CameraIcon, ShieldIcon];

export default function OwnersSection() {
  const { d } = useLang();

  return (
    <section id="propietarios" className="bg-ink text-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-light">
              {d.owners.kicker}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">
              {d.owners.homeTitle}
            </h2>
            <p className="mt-4 text-lg text-white/80">{d.owners.homeText}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/propietarios"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brand-dark text-white px-7 py-4 font-semibold text-lg transition-colors duration-200 cursor-pointer"
              >
                {d.owners.homeButton}
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-white/70">
              <StarIcon className="h-4 w-4 text-amber-300" />
              {d.owners.trust}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {d.owners.benefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <div
                  key={b.title}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="h-11 w-11 rounded-xl bg-brand/20 text-brand-light flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{b.title}</h3>
                  <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
