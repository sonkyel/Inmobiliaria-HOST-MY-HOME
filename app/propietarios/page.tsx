import type { Metadata } from "next";
import OwnersContent from "@/components/OwnersContent";

export const metadata: Metadata = {
  title: "Confía tu vivienda — Gestionamos tu Airbnb en Marbella",
  description:
    "¿Tienes una casa o apartamento en Marbella? Confía tu vivienda y la gestionamos en Airbnb: anuncio, precios, huéspedes, limpieza y mantenimiento. Superhost con +1.000 reseñas.",
  openGraph: {
    title: "Confía tu vivienda — Marbella Host My Home",
    description:
      "Confía tu vivienda en Marbella y la gestionamos en Airbnb. Maximiza tus ingresos sin complicaciones.",
  },
};

export default function PropietariosPage() {
  return <OwnersContent />;
}
