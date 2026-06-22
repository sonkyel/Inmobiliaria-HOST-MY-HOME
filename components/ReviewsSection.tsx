"use client";

import { StarIcon } from "./icons";
import { useLang } from "./LanguageProvider";

/** Reseñas REALES de huéspedes (perfil de Airbnb de Jose). */
const reviews = [
  { name: "Laura", place: "", text: "Me gustó mucho el piso, muy tranquilo y muy céntrico, queda todo cerca. Volvería mil veces, gracias Jose." },
  { name: "Fabian", place: "", text: "El lugar es muy central y cómodo para descansar. El anfitrión es muy amable y está siempre pendiente." },
  { name: "Valeria", place: "Costa Adeje, España", text: "Casa tranquila, limpia y con buena habitación. Todo perfecto." },
  { name: "Robert Guillermo", place: "", text: "Local tranquilo, limpio, amplio y acogedor. Excelente." },
  { name: "Pavla", place: "Brno, República Checa", text: "El anfitrión fue amable, se comunicó desde el principio y todo transcurrió sin problemas." },
];

function Stars() {
  return (
    <div className="flex text-amber-400" aria-label="5 de 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const { d } = useLang();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {d.airbnb.reviewsKicker}
        </p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-ink">
          {d.airbnb.reviewsTitle}
        </h2>
        <p className="mt-4 text-lg text-charcoal">{d.airbnb.reviewsSubtitle}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.slice(0, 3).map((r) => (
          <figure key={r.name} className="rounded-2xl bg-white border border-line p-6 shadow-sm">
            <Stars />
            <blockquote className="mt-4 text-charcoal leading-relaxed">“{r.text}”</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold text-ink">{r.name}</span>
              {r.place && <span className="text-muted"> · {r.place}</span>}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {reviews.slice(3).map((r) => (
          <figure key={r.name} className="rounded-2xl bg-white border border-line p-6 shadow-sm">
            <Stars />
            <blockquote className="mt-4 text-charcoal leading-relaxed">“{r.text}”</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold text-ink">{r.name}</span>
              {r.place && <span className="text-muted"> · {r.place}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
