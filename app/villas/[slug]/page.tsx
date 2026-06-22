import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { villas, getVilla } from "@/lib/villas";
import VillaDetail from "@/components/VillaDetail";

export function generateStaticParams() {
  return villas.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const villa = getVilla(slug);
  if (!villa) return { title: "Alojamiento no encontrado" };

  return {
    title: `${villa.name} — ${villa.zone}, Marbella`,
    description: villa.shortDescription,
    openGraph: {
      title: `${villa.name} — ${villa.zone}, Marbella`,
      description: villa.shortDescription,
      images: [villa.images[0]],
    },
  };
}

export default async function VillaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const villa = getVilla(slug);
  if (!villa) notFound();

  return <VillaDetail villa={villa} />;
}
