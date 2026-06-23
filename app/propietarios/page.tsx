import type { Metadata } from "next";
import OwnersContent from "@/components/OwnersContent";

export const metadata: Metadata = {
  title: "Propietarios — Gestionamos tu vivienda en Airbnb",
  description:
    "¿Tienes una casa o apartamento en Marbella? Lo gestionamos en Airbnb: anuncio, precios, huéspedes, limpieza y mantenimiento. Superhost con +1.000 reseñas.",
  openGraph: {
    title: "Propietarios — Marbella Host My Home",
    description:
      "Gestionamos tu vivienda en Airbnb en Marbella. Maximiza tus ingresos sin complicaciones.",
  },
};

export default function PropietariosPage() {
  return <OwnersContent />;
}
