export type ListingType = "Apartamento" | "Habitación" | "Ático" | "Casa";

export type Villa = {
  slug: string;
  name: string;
  type: ListingType;
  zone: string;
  airbnbUrl: string;
  rating?: number;
  reviews?: number;
  bedrooms?: number;
  guests?: number;
  privatePool: boolean;
  beachfront?: boolean;
  badge?: "Superhost" | "Top valorado" | "Nuevo";
  shortDescription: string;
  description: string;
  amenities: string[];
  images: string[];
};

const aimg = (path: string) =>
  `https://a0.muscache.com/im/pictures/${path}?aki_policy=large`;

/**
 * Alojamientos REALES de @marbellahostmyhome (anfitrión Jose, Superhost en Airbnb).
 * Datos extraídos del perfil de Airbnb: título, foto, valoración, nº de reseñas y enlace.
 *
 * 👉 Para añadir más fotos o el precio de cada piso, edita aquí cada objeto.
 *    El botón "Ver en Airbnb" lleva al anuncio real (airbnbUrl).
 */
export const villas: Villa[] = [
  {
    slug: "casa-puerto-banus-dos-piscinas",
    name: "Casa junto a Puerto Banús con dos piscinas",
    type: "Casa",
    zone: "Puerto Banús",
    airbnbUrl: "https://www.airbnb.es/rooms/581923323266239665",
    rating: 4.93,
    reviews: 122,
    privatePool: false,
    badge: "Superhost",
    shortDescription:
      "Preciosa casa a un paso de Puerto Banús, con acceso a dos piscinas y todo el encanto de Marbella.",
    description:
      "Muy bonita casa situada junto a Puerto Banús, ideal para disfrutar de Marbella con comodidad. Acceso a dos piscinas, espacios acogedores y una ubicación inmejorable a pocos minutos de las mejores playas, restaurantes y tiendas de la zona.",
    amenities: ["Piscina comunitaria", "WiFi", "Aire acondicionado", "Parking"],
    images: [aimg("a4e6df76-85e0-4ed5-8f9d-c1ec61683774.jpg")],
  },
  {
    slug: "apartamento-puerto-banus",
    name: "Apartamento junto a Puerto Banús",
    type: "Apartamento",
    zone: "Puerto Banús",
    airbnbUrl: "https://www.airbnb.es/rooms/51267001",
    rating: 4.85,
    reviews: 91,
    privatePool: false,
    badge: "Superhost",
    shortDescription:
      "Excelente apartamento a 1,3 km de Puerto Banús, perfecto para descubrir Marbella.",
    description:
      "Excelente apartamento situado a tan solo 1,3 km de Puerto Banús. Cómodo, bien comunicado y con todo lo necesario para una estancia perfecta en Marbella, cerca de la playa, el ocio y la gastronomía de la Costa del Sol.",
    amenities: ["WiFi", "Aire acondicionado", "Piscina comunitaria"],
    images: [aimg("d5b4b1e4-4da4-4b6c-acf1-10b30d3aa040.jpg")],
  },
  {
    slug: "atico-boulevard-playa",
    name: "Ático espectacular en Boulevard, junto a la playa",
    type: "Habitación",
    zone: "Boulevard, San Pedro",
    airbnbUrl: "https://www.airbnb.es/rooms/11611870",
    rating: 4.86,
    reviews: 158,
    privatePool: false,
    beachfront: true,
    badge: "Top valorado",
    shortDescription:
      "Habitación en un ático espectacular junto al Boulevard y la playa, con anfitrión Superhost.",
    description:
      "Habitación privada en un ático espectacular junto al Boulevard de San Pedro y la playa. Vistas privilegiadas, ambiente tranquilo y la atención personal de Jose, que recibe a los viajeros con amenities. Una opción ideal para descubrir Marbella a buen precio.",
    amenities: ["WiFi", "Aire acondicionado", "Vistas al mar", "A pie de playa"],
    images: [aimg("2972d0e6-4b7e-47bd-b809-1eae4c7559da.jpg")],
  },
  {
    slug: "habitacion-atico-boulevard-800",
    name: "Habitación privada en ático – Boulevard, playa a 800 m",
    type: "Habitación",
    zone: "Boulevard, San Pedro",
    airbnbUrl: "https://www.airbnb.es/rooms/11897349",
    rating: 4.87,
    reviews: 158,
    privatePool: false,
    beachfront: true,
    shortDescription:
      "Habitación privada en ático junto al Boulevard, a 800 m de la playa.",
    description:
      "Habitación privada en un ático junto al Boulevard de San Pedro, a solo 800 m de la playa. Cómoda y luminosa, con excelentes valoraciones de huéspedes anteriores y una ubicación perfecta para moverse a pie por la zona.",
    amenities: ["WiFi", "Aire acondicionado", "Vistas al mar"],
    images: [aimg("hosting/Hosting-11897349/original/d2872706-ecc6-4eb0-b019-4f7063ffdf31.jpeg")],
  },
  {
    slug: "dos-habitaciones-playa-parking",
    name: "Apartamento de 2 habitaciones a 400 m de la playa",
    type: "Apartamento",
    zone: "San Pedro · Playa",
    airbnbUrl: "https://www.airbnb.es/rooms/49808341",
    rating: 5.0,
    reviews: 32,
    bedrooms: 2,
    guests: 4,
    privatePool: false,
    beachfront: true,
    badge: "Top valorado",
    shortDescription:
      "Apartamento de 2 habitaciones a 400 m de la playa, con parking. Valoración perfecta 5,0.",
    description:
      "Apartamento de 2 habitaciones situado a tan solo 400 metros de la playa, con plaza de parking incluida. Espacioso y bien equipado, con valoración perfecta de 5,0 sobre 5. Ideal para familias o grupos que quieren disfrutar de Marbella con total comodidad.",
    amenities: ["WiFi", "Aire acondicionado", "Parking", "A pie de playa"],
    images: [aimg("hosting/Hosting-49808341/original/3c34c6b2-d730-4112-9466-987046265dfd.jpeg")],
  },
  {
    slug: "duplex-terraza-piscina",
    name: "Piso dúplex con terraza y piscina privada",
    type: "Apartamento",
    zone: "Marbella",
    airbnbUrl: "https://www.airbnb.es/rooms/1486008102288056314",
    privatePool: true,
    badge: "Nuevo",
    shortDescription:
      "Maravilloso piso dúplex con terraza y piscina privada en Marbella.",
    description:
      "Maravilloso piso dúplex con amplia terraza y piscina privada, perfecto para disfrutar del clima de Marbella con la máxima intimidad. Espacios luminosos y acogedores para una escapada inolvidable en la Costa del Sol.",
    amenities: ["Piscina privada", "Terraza", "WiFi", "Aire acondicionado"],
    images: [aimg("hosting/Hosting-1486008102288056314/original/6e70c94f-9676-4121-8093-eb96b271a873.jpeg")],
  },
  {
    slug: "playa-la-fontanilla",
    name: "Apartamento en playa La Fontanilla",
    type: "Apartamento",
    zone: "La Fontanilla, Marbella",
    airbnbUrl: "https://www.airbnb.es/rooms/916560310640507009",
    rating: 4.8,
    reviews: 15,
    privatePool: false,
    beachfront: true,
    shortDescription:
      "Apartamento junto a la playa de La Fontanilla, con aire acondicionado.",
    description:
      "Apartamento disponible junto a la playa de La Fontanilla, una de las más céntricas y conocidas de Marbella. Con aire acondicionado y a pocos pasos del mar, el casco antiguo y el paseo marítimo.",
    amenities: ["Aire acondicionado", "WiFi", "A pie de playa"],
    images: [aimg("hosting/Hosting-916560310640507009/original/9ffacd3c-16ee-4138-8e09-cb51fdcf003e.jpeg")],
  },
  {
    slug: "apartamento-excelente-ubicacion",
    name: "Apartamento en excelente ubicación",
    type: "Apartamento",
    zone: "Marbella",
    airbnbUrl: "https://www.airbnb.es/rooms/50234448",
    rating: 4.87,
    reviews: 46,
    privatePool: false,
    shortDescription:
      "Maravilloso apartamento en una excelente ubicación, céntrico y muy bien valorado.",
    description:
      "Maravilloso apartamento residencial en una excelente ubicación de Marbella. Céntrico, cómodo y muy bien valorado por los huéspedes, con todo cerca para disfrutar de la ciudad a pie.",
    amenities: ["WiFi", "Aire acondicionado", "Parking"],
    images: [aimg("02432014-8f8a-4012-b431-5387662b52ba.jpg")],
  },
  {
    slug: "atico-preciosas-vistas",
    name: "Ático con preciosas vistas",
    type: "Ático",
    zone: "Marbella",
    airbnbUrl: "https://www.airbnb.es/rooms/1366248724071541991",
    rating: 5.0,
    reviews: 10,
    privatePool: false,
    badge: "Top valorado",
    shortDescription:
      "Ático con preciosas vistas y valoración perfecta 5,0. Tu rincón con encanto en Marbella.",
    description:
      "Ático con preciosas vistas, perfecto para disfrutar de los atardeceres de Marbella. Luminoso y acogedor, con valoración perfecta de 5,0 sobre 5 y la atención cercana de un Superhost.",
    amenities: ["Vistas al mar", "Terraza", "WiFi", "Aire acondicionado"],
    images: [aimg("hosting/Hosting-1366248724071541991/original/554ad312-1ab3-4477-8a29-16078cb06a86.jpeg")],
  },
  {
    slug: "alojamiento-impecable",
    name: "Alojamiento impecable y muy bonito",
    type: "Apartamento",
    zone: "Marbella",
    airbnbUrl: "https://www.airbnb.es/rooms/37106194",
    rating: 4.96,
    reviews: 26,
    privatePool: false,
    shortDescription:
      "Un alojamiento impecable y muy bonito, con excelentes valoraciones.",
    description:
      "Un alojamiento impecable y muy bonito en Marbella, cuidado al detalle y con excelentes valoraciones de los huéspedes. Ideal para una estancia cómoda y tranquila en la Costa del Sol.",
    amenities: ["WiFi", "Aire acondicionado"],
    images: [aimg("3e7df789-78e3-455e-97bc-c54a0f0c0086.jpg")],
  },
];

export const zones: string[] = Array.from(
  new Set(villas.map((v) => v.zone)),
).sort();

export const listingTypes: ListingType[] = Array.from(
  new Set(villas.map((v) => v.type)),
);

export function getVilla(slug: string): Villa | undefined {
  return villas.find((v) => v.slug === slug);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-ES").format(value);
}
