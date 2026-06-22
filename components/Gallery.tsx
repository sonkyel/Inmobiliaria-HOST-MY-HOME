"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import { useLang } from "./LanguageProvider";

export default function Gallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const { d } = useLang();
  const [active, setActive] = useState(0);

  const go = (dir: number) => {
    setActive((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-cream">
        <Image
          src={images[active]}
          alt={`${name} — ${d.gallery.photo} ${active + 1} ${d.gallery.of} ${images.length}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={d.gallery.prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink shadow hover:bg-white transition-colors duration-200 cursor-pointer"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={d.gallery.next}
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink shadow hover:bg-white transition-colors duration-200 cursor-pointer"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-ink/70 text-white text-xs px-3 py-1">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              type="button"
              key={src}
              onClick={() => setActive(i)}
              aria-label={`${d.gallery.view} ${i + 1}`}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer transition-all duration-200 ${
                i === active ? "ring-2 ring-brand ring-offset-2" : "opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
