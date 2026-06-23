"use client";

import Link from "next/link";
import Image from "next/image";
import OwnersForm from "./OwnersForm";
import { useLang } from "./LanguageProvider";
import {
  ChartUpIcon,
  KeyIcon,
  CameraIcon,
  ShieldIcon,
  ChevronLeftIcon,
  StarIcon,
} from "./icons";

const benefitIcons = [ChartUpIcon, KeyIcon, CameraIcon, ShieldIcon];

export default function OwnersContent() {
  const { d } = useLang();

  return (
    <>
      {/* Hero band */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Salón de una vivienda gestionada en Marbella"
          fill
          priority
          sizes="100vw"
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/65 to-ink/85" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 text-white">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
          >
            <ChevronLeftIcon className="h-4 w-4" />
            Marbella Host My Home
          </Link>
          <div className="mt-6 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-light">
              {d.owners.kicker}
            </p>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold leading-tight">
              {d.owners.title}
            </h1>
            <p className="mt-5 text-lg text-white/85">{d.owners.subtitle}</p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-4 py-1.5 text-sm">
              <StarIcon className="h-4 w-4 text-amber-300" />
              {d.owners.trust}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {d.owners.benefits.map((b, i) => {
            const Icon = benefitIcons[i];
            return (
              <div
                key={b.title}
                className="rounded-2xl bg-white border border-line p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{b.title}</h3>
                <p className="mt-2 text-charcoal leading-relaxed">{b.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form */}
      <section className="bg-cream border-t border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
              {d.owners.formTitle}
            </h2>
            <p className="mt-3 text-charcoal">{d.owners.subtitle}</p>
          </div>
          <div className="mt-10 rounded-3xl bg-white border border-line shadow-sm p-6 sm:p-8">
            <OwnersForm />
          </div>
        </div>
      </section>
    </>
  );
}
