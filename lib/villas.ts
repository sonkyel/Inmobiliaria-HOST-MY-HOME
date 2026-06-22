export type Villa = {
  slug: string;
  name: string;
  zone: string;
  pricePerNight: number; // EUR
  bedrooms: number;
  bathrooms: number;
  guests: number;
  sizeM2: number;
  privatePool: boolean;
  badge?: "Last Minute" | "Oferta" | "Nuevo" | "Top ventas";
  shortDescription: string;
  description: string;
  amenities: string[];
  images: string[];
};

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1280&q=80`;

/**
 * ⚠️ DATOS DE EJEMPLO. Reemplaza estas villas por las reales del negocio
 * (nombre, zona, precio, fotos, descripción y servicios).
 */
export const villas: Villa[] = [
  {
    slug: "villa-aurora-puerto-banus",
    name: "Villa Aurora",
    zone: "Puerto Banús",
    pricePerNight: 950,
    bedrooms: 4,
    bathrooms: 4,
    guests: 8,
    sizeM2: 320,
    privatePool: true,
    badge: "Top ventas",
    shortDescription:
      "Villa moderna a pasos del puerto, con piscina privada climatizada y terraza chill-out.",
    description:
      "Villa Aurora combina diseño contemporáneo y la mejor ubicación de Marbella, a pocos minutos a pie de Puerto Banús, sus restaurantes y playas. Disfruta de amplios espacios abiertos, cocina de diseño, piscina privada climatizada y una terraza perfecta para el atardecer.",
    amenities: [
      "Piscina privada climatizada",
      "WiFi de alta velocidad",
      "Aire acondicionado",
      "Parking privado",
      "Cocina equipada",
      "Smart TV",
      "Terraza chill-out",
      "Barbacoa",
    ],
    images: [
      img("1613490493576-7fde63acd811"),
      img("1600585154340-be6161a56a0c"),
      img("1600607687939-ce8a6c25118c"),
      img("1505691938895-1758d7feb511"),
    ],
  },
  {
    slug: "villa-marea-nueva-andalucia",
    name: "Villa Marea",
    zone: "Nueva Andalucía",
    pricePerNight: 780,
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    sizeM2: 240,
    privatePool: true,
    badge: "Oferta",
    shortDescription:
      "Refugio mediterráneo en el Valle del Golf, ideal para familias y grupos.",
    description:
      "En pleno Valle del Golf de Nueva Andalucía, Villa Marea es un refugio tranquilo rodeado de jardines, con piscina privada y amplias zonas de estar. Perfecta para familias y amantes del golf, a pocos minutos de Puerto Banús.",
    amenities: [
      "Piscina privada",
      "Jardín privado",
      "WiFi",
      "Aire acondicionado",
      "Parking",
      "Cocina equipada",
      "Lavadora",
      "Cuna disponible",
    ],
    images: [
      img("1568605114967-8130f3a36994"),
      img("1600566753086-00f18fb6b3ea"),
      img("1600210492493-0946911123ea"),
      img("1615874959474-d609969a20ed"),
    ],
  },
  {
    slug: "villa-sol-golden-mile",
    name: "Villa Sol",
    zone: "Golden Mile",
    pricePerNight: 1850,
    bedrooms: 6,
    bathrooms: 6,
    guests: 12,
    sizeM2: 620,
    privatePool: true,
    badge: "Last Minute",
    shortDescription:
      "Mansión de lujo en la Milla de Oro con vistas al mar y servicio premium.",
    description:
      "Villa Sol es una imponente mansión en la prestigiosa Milla de Oro de Marbella, a un paso de la playa y del centro histórico. Vistas al Mediterráneo, piscina infinita, gimnasio y espacios de lujo pensados para grupos grandes y celebraciones inolvidables.",
    amenities: [
      "Piscina infinity",
      "Vistas al mar",
      "Gimnasio privado",
      "WiFi",
      "Aire acondicionado",
      "Parking para 4 coches",
      "Cocina gourmet",
      "Servicio de limpieza diario",
    ],
    images: [
      img("1600596542815-ffad4c1539a9"),
      img("1600047509807-ba8f99d2cdde"),
      img("1600121848594-d8644e57abab"),
      img("1571003123894-1f0594d2b5d9"),
    ],
  },
  {
    slug: "villa-brisa-los-monteros",
    name: "Villa Brisa",
    zone: "Los Monteros",
    pricePerNight: 690,
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    sizeM2: 210,
    privatePool: true,
    shortDescription:
      "Casa luminosa a pocos minutos de la playa de Los Monteros.",
    description:
      "Villa Brisa es una casa luminosa y acogedora en la exclusiva zona de Los Monteros, a pocos minutos de una de las mejores playas de Marbella. Ideal para una escapada relajada con piscina privada y jardín mediterráneo.",
    amenities: [
      "Piscina privada",
      "Jardín",
      "WiFi",
      "Aire acondicionado",
      "Parking",
      "Cocina equipada",
      "Terraza",
    ],
    images: [
      img("1512917774080-9991f1c4c750"),
      img("1600566753190-17f0baa2a6c3"),
      img("1600210492493-0946911123ea"),
      img("1600607687939-ce8a6c25118c"),
    ],
  },
  {
    slug: "villa-azahar-la-quinta",
    name: "Villa Azahar",
    zone: "La Quinta",
    pricePerNight: 1270,
    bedrooms: 5,
    bathrooms: 5,
    guests: 10,
    sizeM2: 470,
    privatePool: true,
    badge: "Nuevo",
    shortDescription:
      "Villa contemporánea con vistas al mar en La Quinta, recién renovada.",
    description:
      "Recién renovada, Villa Azahar ofrece un diseño contemporáneo en La Quinta con espectaculares vistas al mar. Amplia parcela, piscina privada y acabados de primera para grupos que buscan exclusividad y confort.",
    amenities: [
      "Piscina privada climatizada",
      "Vistas al mar",
      "WiFi",
      "Aire acondicionado",
      "Parking",
      "Cocina de diseño",
      "Smart TV",
      "Zona de barbacoa",
    ],
    images: [
      img("1584622650111-993a426fbf0a"),
      img("1600585154340-be6161a56a0c"),
      img("1505691938895-1758d7feb511"),
      img("1615874959474-d609969a20ed"),
    ],
  },
  {
    slug: "apartamento-mar-marbesa",
    name: "Apartamento Mar",
    zone: "Marbesa Beach",
    pricePerNight: 320,
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    sizeM2: 95,
    privatePool: false,
    badge: "Oferta",
    shortDescription:
      "Apartamento frente al mar en Marbesa, a pasos de la arena.",
    description:
      "Apartamento Mar es un alojamiento luminoso a pocos pasos de la playa de Marbesa, ideal para parejas o familias pequeñas. Piscina comunitaria, terraza con vistas y todas las comodidades para unas vacaciones de playa.",
    amenities: [
      "Piscina comunitaria",
      "A pie de playa",
      "WiFi",
      "Aire acondicionado",
      "Parking",
      "Cocina equipada",
      "Terraza",
    ],
    images: [
      img("1502672260266-1c1ef2d93688"),
      img("1600566753086-00f18fb6b3ea"),
      img("1600121848594-d8644e57abab"),
      img("1571003123894-1f0594d2b5d9"),
    ],
  },
  {
    slug: "villa-blanca-sierra-blanca",
    name: "Villa Blanca",
    zone: "Sierra Blanca",
    pricePerNight: 2400,
    bedrooms: 7,
    bathrooms: 7,
    guests: 14,
    sizeM2: 820,
    privatePool: true,
    badge: "Top ventas",
    shortDescription:
      "Exclusiva villa en urbanización cerrada con seguridad 24h y vistas panorámicas.",
    description:
      "En la exclusiva urbanización cerrada de Sierra Blanca, Villa Blanca ofrece máxima privacidad, seguridad 24 horas y vistas panorámicas al mar y a la montaña de La Concha. Una propiedad excepcional para grupos grandes que buscan lujo absoluto.",
    amenities: [
      "Piscina infinity climatizada",
      "Vistas panorámicas",
      "Seguridad 24h",
      "Gimnasio y spa",
      "WiFi",
      "Aire acondicionado",
      "Parking para 6 coches",
      "Servicio de chef (opcional)",
    ],
    images: [
      img("1600596542815-ffad4c1539a9"),
      img("1600047509807-ba8f99d2cdde"),
      img("1600585154340-be6161a56a0c"),
      img("1505691938895-1758d7feb511"),
    ],
  },
  {
    slug: "villa-oliva-la-zagaleta",
    name: "Villa Oliva",
    zone: "La Zagaleta",
    pricePerNight: 3700,
    bedrooms: 6,
    bathrooms: 8,
    guests: 12,
    sizeM2: 1024,
    privatePool: true,
    badge: "Nuevo",
    shortDescription:
      "Mansión de estilo mediterráneo en La Zagaleta, la urbanización más prestigiosa de Europa.",
    description:
      "Villa Oliva es una oportunidad única de alojarse en La Zagaleta, considerada la urbanización privada más prestigiosa de Europa. Estilo mediterráneo, jardines infinitos, piscinas interior y exterior, y un servicio impecable para una estancia de auténtico lujo.",
    amenities: [
      "Piscina interior y exterior",
      "Campo de golf privado",
      "Seguridad 24h",
      "Spa y sauna",
      "WiFi",
      "Aire acondicionado",
      "Parking en garaje",
      "Servicio de mayordomo",
    ],
    images: [
      img("1613490493576-7fde63acd811"),
      img("1600121848594-d8644e57abab"),
      img("1600607687939-ce8a6c25118c"),
      img("1571003123894-1f0594d2b5d9"),
    ],
  },
];

export const zones: string[] = Array.from(
  new Set(villas.map((v) => v.zone)),
).sort();

export function getVilla(slug: string): Villa | undefined {
  return villas.find((v) => v.slug === slug);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-ES").format(value);
}
