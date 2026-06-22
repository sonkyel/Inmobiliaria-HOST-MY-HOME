"use client";

import Image from "next/image";
import { site } from "@/lib/site";
import { InstagramIcon } from "./icons";
import { useLang } from "./LanguageProvider";

/**
 * Galería tipo Instagram.
 *
 * 👉 Estas imágenes son de ejemplo. Sustitúyelas por fotos reales de las
 * publicaciones de @marbellahostmyhome (súbelas a public/images/ y cambia
 * las rutas), o conecta un feed en vivo (LightWidget / Behold / EmbedSocial)
 * pegando aquí su código de inserción.
 */
const posts = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&q=80",
];

export default function InstagramSection() {
  const { d } = useLang();

  return (
    <section className="bg-cream border-y border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            {d.instagram.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-ink">
            {d.instagram.title}
          </h2>
          <p className="mt-4 text-lg text-charcoal">{d.instagram.subtitle}</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-ink hover:bg-brand text-white px-6 py-3 font-semibold transition-colors duration-200 cursor-pointer"
          >
            <InstagramIcon className="h-5 w-5" />
            {site.instagramHandle}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((src, i) => (
            <a
              key={src}
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${d.instagram.follow} — ${site.instagramHandle}`}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt={`${site.name} — Instagram`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300">
                <InstagramIcon className="h-7 w-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
              {i === 0 && (
                <span className="absolute top-2 left-2 rounded-md bg-white/85 px-2 py-0.5 text-[10px] font-semibold text-ink">
                  @marbellahostmyhome
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
