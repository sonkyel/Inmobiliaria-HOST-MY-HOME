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
  badge?: "Superhost" | "Top valorado" | "Nuevo";
  shortDescription: string;
  description: string;
  amenities: string[];
  images: string[];
};

const aimg = (path: string) =>
  `https://a0.muscache.com/im/pictures/${path}?aki_policy=large`;

/**
 * Los 15 alojamientos REALES de @marbellahostmyhome (anfitrión Jose, Superhost en Airbnb).
 * Datos y fotos extraídos de cada anuncio de Airbnb (título, fotos, dormitorios, baños,
 * huéspedes, valoración, nº de reseñas, servicios y enlace al anuncio).
 *
 * 👉 Para editar un piso, cambia su objeto aquí. "Ver/Reservar en Airbnb" usa airbnbUrl.
 */
export const villas: Villa[] = [
  {
    slug: "apartamento-2-hab-400m-playa",
    name: "Apartamento de 2 habitaciones a 400 m de la playa",
    type: "Apartamento",
    zone: "Marbella",
    airbnbUrl: "https://www.airbnb.es/rooms/49808341",
    rating: 5.0,
    reviews: 32,
    bedrooms: 2,
    guests: 4,
    privatePool: false,
    badge: "Top valorado",
    shortDescription:
      "Apartamento entero de 2 habitaciones a 400 m de la playa, con parking. Valoración perfecta 5,0.",
    description:
      "Apartamento entero de 2 habitaciones a tan solo 400 metros de la playa, con plaza de parking en garaje y ascensor. Valoración perfecta de 5,0 sobre 5: espacioso y bien equipado, ideal para familias o grupos en Marbella.",
    amenities: ["A pie de playa", "Cocina", "WiFi", "Parking", "Piscina comunitaria", "Smart TV", "Ascensor"],
    images: [
      aimg("hosting/Hosting-49808341/original/3c34c6b2-d730-4112-9466-987046265dfd.jpeg"),
      aimg("c8acda48-277f-4c73-bd8d-ad8a069ba867.jpg"),
      aimg("hosting/Hosting-49808341/original/696e2f2c-19df-477a-bfda-316b56b4b178.jpeg"),
      aimg("hosting/Hosting-49808341/original/4487512a-7f8e-4f14-acc0-ba562e5d8d5c.jpeg"),
      aimg("hosting/Hosting-49808341/original/4a96cc91-8c63-42ef-a400-81d08721537f.jpeg"),
    ],
  },
  {
    slug: "atico-preciosas-vistas",
    name: "Ático con preciosas vistas",
    type: "Ático",
    zone: "Marbella",
    airbnbUrl: "https://www.airbnb.es/rooms/1366248724071541991",
    rating: 5.0,
    reviews: 10,
    bedrooms: 4,
    guests: 8,
    privatePool: false,
    badge: "Top valorado",
    shortDescription:
      "Amplio ático de 4 dormitorios con preciosas vistas y valoración perfecta 5,0. Hasta 8 huéspedes.",
    description:
      "Espectacular ático de 4 dormitorios para hasta 8 huéspedes, con preciosas vistas y valoración perfecta de 5,0 sobre 5. Acceso a la playa, piscina, parking y la atención cercana de un Superhost.",
    amenities: ["A pie de playa", "Cocina", "WiFi", "Parking", "Piscina", "Smart TV", "Ascensor"],
    images: [
      aimg("hosting/Hosting-1366248724071541991/original/554ad312-1ab3-4477-8a29-16078cb06a86.jpeg"),
      aimg("hosting/Hosting-1366248724071541991/original/3a9e1d6a-6899-4666-83c7-a22eadfaf928.jpeg"),
      aimg("hosting/Hosting-1366248724071541991/original/7191165c-1c0f-427d-a548-7e9c19815822.jpeg"),
      aimg("hosting/Hosting-1366248724071541991/original/1c0e144c-cfab-4df7-83ab-2181a071272a.jpeg"),
      aimg("hosting/Hosting-1366248724071541991/original/96bdb6f0-4bf7-49a1-ace2-e57a890be332.jpeg"),
    ],
  },
  {
    slug: "atico-terraza-piscina-playa",
    name: "Ático con terraza y piscina, playa a 3 minutos",
    type: "Ático",
    zone: "Marbella",
    airbnbUrl: "https://www.airbnb.es/rooms/940987938553519529",
    rating: 4.96,
    reviews: 55,
    bedrooms: 2,
    guests: 4,
    privatePool: false,
    badge: "Top valorado",
    shortDescription:
      "Ático con terraza y piscina, parking gratuito y playa a 3 minutos. Excelente valoración 4,96.",
    description:
      "Precioso ático de 2 dormitorios con terraza, piscina y aparcamiento gratuito, a solo 3 minutos de la playa. Moderno y muy bien valorado (4,96 sobre 5), perfecto para una escapada cómoda en Marbella.",
    amenities: ["Cocina", "WiFi", "Parking", "Piscina comunitaria", "Smart TV", "Zona de trabajo"],
    images: [
      aimg("hosting/Hosting-940987938553519529/original/2857d107-a1c3-4ab1-8f33-030d0e6834a6.jpeg"),
      aimg("hosting/Hosting-940987938553519529/original/740a3cb7-9bc8-4d29-acc2-de0780738c01.jpeg"),
      aimg("miso/Hosting-940987938553519529/original/abd8d42c-cddb-445e-bbd9-aa1f347c3865.jpeg"),
      aimg("52e1b292-bb6a-4415-bc65-2ddac79fee63.jpg"),
      aimg("f1bf27d2-eb6a-48c9-9afb-9d0b1b6816e6.jpg"),
      aimg("8acd509b-a4c8-4d19-b326-5b5fac55655a.jpg"),
    ],
  },
  {
    slug: "apartamento-impecable",
    name: "Un alojamiento impecable y muy bonito",
    type: "Apartamento",
    zone: "Marbella",
    airbnbUrl: "https://www.airbnb.es/rooms/37106194",
    rating: 4.96,
    reviews: 26,
    bedrooms: 2,
    guests: 4,
    privatePool: false,
    badge: "Top valorado",
    shortDescription:
      "Apartamento impecable junto al agua, con piscina y ascensor. Valoración 4,96.",
    description:
      "Un alojamiento impecable y muy bonito junto al agua, con 2 dormitorios, piscina compartida, ascensor y parking gratuito. Cuidado al detalle y con excelentes valoraciones (4,96 sobre 5).",
    amenities: ["A pie de playa", "Cocina", "WiFi", "Parking", "Piscina comunitaria", "Smart TV", "Ascensor", "Lavadora", "Aire acondicionado"],
    images: [
      aimg("3e7df789-78e3-455e-97bc-c54a0f0c0086.jpg"),
      aimg("62ce5f67-d425-422f-9a9e-3b20843dd848.jpg"),
      aimg("b6486b2c-5679-4e70-aa10-68354e4cd099.jpg"),
      aimg("97d9bfe9-cf0e-4682-b5f3-55b559ecdc69.jpg"),
      aimg("e2d38901-7d87-42ce-856b-92e917b6eee9.jpg"),
      aimg("8cc83449-a4e6-4c31-8737-4f07ca95de5e.jpg"),
    ],
  },
  {
    slug: "casa-puerto-banus-dos-piscinas",
    name: "Muy bonita casa junto a Puerto Banús con dos piscinas",
    type: "Apartamento",
    zone: "Puerto Banús",
    airbnbUrl: "https://www.airbnb.es/rooms/581923323266239665",
    rating: 4.93,
    reviews: 122,
    bedrooms: 2,
    guests: 4,
    privatePool: false,
    badge: "Superhost",
    shortDescription:
      "A un paso de Puerto Banús, con acceso a dos piscinas, parking y wifi rápido.",
    description:
      "Muy bonita casa junto a Puerto Banús con 2 dormitorios y acceso a dos piscinas. Acceso a la playa, parking gratuito, wifi rápido y lavadora. Ubicación inmejorable cerca de playas, restaurantes y tiendas.",
    amenities: ["A pie de playa", "Cocina", "WiFi", "Parking", "Piscina comunitaria", "Smart TV", "Lavadora"],
    images: [
      aimg("a4e6df76-85e0-4ed5-8f9d-c1ec61683774.jpg"),
      aimg("e5aa5f48-23a7-4f2d-89fc-69dd5ccaaa36.jpg"),
      aimg("1bb086a8-de77-499c-86e3-cac6df078108.jpg"),
      aimg("602e5e17-9582-4330-a4a6-c977ddc58c7e.jpg"),
      aimg("hosting/Hosting-581923323266239665/original/a56036c6-ed77-4795-ae25-423b17db2668.jpeg"),
      aimg("face9d15-3a5e-41b9-9c4e-64901f480c1e.jpg"),
    ],
  },
  {
    slug: "apartamento-moderno-frente-al-mar",
    name: "Precioso apartamento moderno frente al mar, Banús",
    type: "Apartamento",
    zone: "San Pedro Alcántara",
    airbnbUrl: "https://www.airbnb.es/rooms/29458431",
    rating: 4.88,
    reviews: 195,
    bedrooms: 1,
    guests: 2,
    privatePool: false,
    badge: "Superhost",
    shortDescription:
      "Apartamento moderno en primera línea de playa cerca de Banús, con vistas y parking.",
    description:
      "Precioso apartamento moderno en primera línea de playa, cerca de Puerto Banús. Vistas al jardín y a la montaña, cocina, wifi, parking gratuito y ascensor. Más de 190 reseñas con 4,88 sobre 5.",
    amenities: ["Vistas al mar", "A pie de playa", "Cocina", "WiFi", "Parking", "Smart TV", "Ascensor"],
    images: [
      aimg("be2f9093-7fff-44da-9bdb-99c9f08eb773.jpg"),
      aimg("6824c204-ec30-4a2a-921d-7a781069ef47.jpg"),
      aimg("4fdb92d3-920d-4620-b00f-cf4b28b66b5d.jpg"),
      aimg("9bf85715-637f-4522-9342-9f2325d46c39.jpg"),
      aimg("1563445f-ed7b-42ca-8317-bf47bd4f5d0b.jpg"),
    ],
  },
  {
    slug: "habitacion-atico-boulevard-800",
    name: "Habitación privada en ático – Boulevard, playa a 800 m",
    type: "Habitación",
    zone: "San Pedro Alcántara",
    airbnbUrl: "https://www.airbnb.es/rooms/11897349",
    rating: 4.87,
    reviews: 158,
    bedrooms: 1,
    guests: 1,
    privatePool: false,
    shortDescription:
      "Habitación privada en ático junto al Boulevard, a 800 m de la playa. Cerradura en la habitación.",
    description:
      "Habitación privada en un ático junto al Boulevard de San Pedro, a solo 800 m de la playa. Con cerradura en la puerta, vistas, aire acondicionado y zona para trabajar. Excelentes valoraciones (4,87 sobre 5).",
    amenities: ["WiFi", "Cocina", "A pie de playa", "Aire acondicionado", "Lavadora", "Zona de trabajo"],
    images: [
      aimg("miso/Hosting-11897349/original/02fdd907-40a2-43a2-902d-757929d2f9ba.jpeg"),
      aimg("hosting/Hosting-11897349/original/d2872706-ecc6-4eb0-b019-4f7063ffdf31.jpeg"),
      aimg("miso/Hosting-11897349/original/9337f525-eaf6-4497-9057-def6e0555571.jpeg"),
      aimg("miso/Hosting-11897349/original/d4f60c1f-480b-4aac-a8f3-6dcc0212dde0.jpeg"),
      aimg("miso/Hosting-11897349/original/1a252763-cdde-4628-9d0d-4dfceeba37e3.jpeg"),
    ],
  },
  {
    slug: "apartamento-excelente-ubicacion",
    name: "Maravilloso apartamento en una excelente ubicación",
    type: "Apartamento",
    zone: "Marbella",
    airbnbUrl: "https://www.airbnb.es/rooms/50234448",
    rating: 4.87,
    reviews: 46,
    bedrooms: 3,
    guests: 6,
    privatePool: false,
    shortDescription:
      "Amplio apartamento de 3 dormitorios para 6, céntrico y muy bien valorado.",
    description:
      "Maravilloso apartamento de 3 dormitorios para hasta 6 huéspedes, en una excelente ubicación de Marbella. Aire acondicionado, ascensor, parking y wifi rápido. Céntrico y muy bien valorado (4,87 sobre 5).",
    amenities: ["WiFi", "Aire acondicionado", "Lavadora", "Smart TV", "Cocina", "Ascensor", "Parking"],
    images: [
      aimg("02432014-8f8a-4012-b431-5387662b52ba.jpg"),
      aimg("hosting/Hosting-50234448/original/bec3b5bf-e12d-41e1-9a23-f34c785bfde7.jpeg"),
      aimg("ea5c149e-a104-4678-90f1-13cd9440112c.jpg"),
      aimg("a2cb48e5-d679-4366-8645-6dd62843393a.jpg"),
      aimg("f8b3d7ee-dea8-49ec-b2c2-3873b22b55c9.jpg"),
      aimg("208326cd-01af-4d84-9ecd-d7657ace4a4d.jpg"),
    ],
  },
  {
    slug: "piso-centrico-vistas-mar-montana",
    name: "Piso céntrico con vistas al mar y la montaña",
    type: "Apartamento",
    zone: "Marbella",
    airbnbUrl: "https://www.airbnb.es/rooms/42184791",
    rating: 4.87,
    reviews: 47,
    bedrooms: 1,
    guests: 6,
    privatePool: false,
    shortDescription:
      "Piso céntrico con vistas al mar y la montaña, cerca de la playa. Hasta 6 huéspedes.",
    description:
      "Piso céntrico con vistas al mar y a la montaña, a pocos pasos de la playa. Con 3 camas para hasta 6 huéspedes, cocina, ascensor, parking en garaje y lavadora. Muy bien valorado (4,87 sobre 5).",
    amenities: ["Vistas al mar", "A pie de playa", "Cocina", "WiFi", "Parking", "Smart TV", "Ascensor", "Lavadora"],
    images: [
      aimg("hosting/Hosting-42184791/original/3e8f11b7-39af-485c-8e02-3c297a582db1.jpeg"),
      aimg("hosting/Hosting-42184791/original/ae3a078f-17f9-4896-9207-20d33a51a19d.jpeg"),
      aimg("hosting/Hosting-42184791/original/35b457ae-f776-44a4-913b-3458e7f923ac.jpeg"),
      aimg("hosting/Hosting-42184791/original/cb5506de-c70a-403a-9fb0-ec52547a66c8.jpeg"),
      aimg("1afed18a-aaa9-4b03-857b-8c4a56e5a3dd.jpg"),
      aimg("46e4a791-caf5-4a83-b3bc-92d8e77fbaf1.jpg"),
    ],
  },
  {
    slug: "habitacion-atico-boulevard-playa",
    name: "Habitación en ático espectacular, Boulevard y playa",
    type: "Habitación",
    zone: "San Pedro Alcántara",
    airbnbUrl: "https://www.airbnb.es/rooms/11611870",
    rating: 4.86,
    reviews: 158,
    bedrooms: 1,
    guests: 2,
    privatePool: false,
    shortDescription:
      "Habitación en un ático espectacular junto al Boulevard y la playa, con vistas a la montaña.",
    description:
      "Habitación privada en un ático espectacular junto al Boulevard de San Pedro y la playa. Vistas a la montaña, cocina, wifi, lavadora y cerradura en la habitación. Atención personal de Jose con amenities de bienvenida.",
    amenities: ["WiFi", "Cocina", "Parking", "A pie de playa", "Lavadora", "Zona de trabajo"],
    images: [
      aimg("30def0fc-0a51-4963-9c73-67eea876cf0c.jpg"),
      aimg("2972d0e6-4b7e-47bd-b809-1eae4c7559da.jpg"),
      aimg("a1303edd-eb35-4998-8b57-d4e08c92ff77.jpg"),
      aimg("29af0d57-50c2-4cf1-8943-c8f76eaa8f7e.jpg"),
      aimg("c92f937a-2877-46de-9969-37e2710c329a.jpg"),
    ],
  },
  {
    slug: "apartamento-puerto-banus",
    name: "Excelente apartamento junto a Puerto Banús",
    type: "Apartamento",
    zone: "Puerto Banús",
    airbnbUrl: "https://www.airbnb.es/rooms/51267001",
    rating: 4.85,
    reviews: 91,
    bedrooms: 2,
    guests: 4,
    privatePool: false,
    shortDescription:
      "Apartamento de 2 dormitorios a 1,3 km de Puerto Banús, con piscina, parking y seguridad 24h.",
    description:
      "Excelente apartamento de 2 dormitorios a 1,3 km de Puerto Banús. Piscina compartida, parking, aire acondicionado, seguridad 24 horas y wifi rápido. Cómodo y bien comunicado para descubrir Marbella.",
    amenities: ["WiFi", "Cocina", "Parking", "Piscina comunitaria", "Smart TV", "Lavadora", "Aire acondicionado", "Seguridad 24h"],
    images: [
      aimg("d5b4b1e4-4da4-4b6c-acf1-10b30d3aa040.jpg"),
      aimg("hosting/Hosting-51267001/original/1891476c-474a-4d48-ad6c-0bad6fe1eed2.jpeg"),
      aimg("hosting/Hosting-51267001/original/9f8ecf18-088d-4515-bf09-5bc0d3adc384.jpeg"),
      aimg("0f9c9b91-f12e-4fb0-8747-f8d5e8d6431e.jpg"),
      aimg("hosting/Hosting-51267001/original/d13a94a8-18fd-40bc-b5a9-983840843cbd.jpeg"),
      aimg("hosting/Hosting-51267001/original/3e366431-ce6f-49af-b336-f6f271b6b320.jpeg"),
    ],
  },
  {
    slug: "habitacion-atico-terraza",
    name: "Habitación en ático con terraza",
    type: "Habitación",
    zone: "San Pedro Alcántara",
    airbnbUrl: "https://www.airbnb.es/rooms/14400448",
    rating: 4.82,
    reviews: 188,
    bedrooms: 1,
    guests: 2,
    privatePool: false,
    shortDescription:
      "Habitación privada en ático con terraza, en San Pedro Alcántara. Más de 180 reseñas.",
    description:
      "Habitación privada en un ático con terraza en San Pedro Alcántara. Con cocina, wifi, aire acondicionado, parking y zona para trabajar. Más de 180 reseñas con una valoración de 4,82 sobre 5.",
    amenities: ["WiFi", "Cocina", "Parking", "Aire acondicionado", "Smart TV", "Zona de trabajo"],
    images: [
      aimg("hosting/Hosting-14400448/original/7567d016-41d4-488e-9777-9adfb08d1295.jpeg"),
      aimg("miso/Hosting-14400448/original/94a59843-d3d3-4640-8a56-b2d012352485.jpeg"),
      aimg("hosting/Hosting-14400448/original/b2222a04-cab1-4a08-8214-2174633c3a2a.jpeg"),
      aimg("hosting/Hosting-14400448/original/7e95b288-1716-4b59-80a7-7a02bf9f9793.jpeg"),
      aimg("hosting/Hosting-14400448/original/32062d0f-cc86-487a-b79a-f80155e8b40d.jpeg"),
    ],
  },
  {
    slug: "apartamento-la-fontanilla",
    name: "Apartamento junto a la playa de La Fontanilla",
    type: "Apartamento",
    zone: "La Fontanilla",
    airbnbUrl: "https://www.airbnb.es/rooms/916560310640507009",
    rating: 4.8,
    reviews: 15,
    bedrooms: 1,
    guests: 2,
    privatePool: false,
    shortDescription:
      "Apartamento entero junto a la playa de La Fontanilla, con aire acondicionado y ascensor.",
    description:
      "Apartamento entero junto a la playa de La Fontanilla, una de las más céntricas de Marbella. Con aire acondicionado, cocina, ascensor y zona para trabajar, a pocos pasos del mar y del casco antiguo.",
    amenities: ["Aire acondicionado", "Cocina", "Smart TV", "Ascensor", "A pie de playa", "Zona de trabajo", "Parking"],
    images: [
      aimg("hosting/Hosting-916560310640507009/original/9ffacd3c-16ee-4138-8e09-cb51fdcf003e.jpeg"),
      aimg("hosting/Hosting-916560310640507009/original/9f9ca4de-9032-4e7b-98d5-f01a655ca1c3.jpeg"),
      aimg("hosting/Hosting-916560310640507009/original/c705de02-1381-4815-956a-39445816aebc.jpeg"),
      aimg("6f084127-4557-46a1-98c8-8b00f7018876.jpg"),
      aimg("c4e28195-5964-4602-85d1-e5a7be0abd2a.jpg"),
    ],
  },
  {
    slug: "apartamento-pie-de-playa",
    name: "Apartamento en Marbella a pie de playa",
    type: "Apartamento",
    zone: "Marbella",
    airbnbUrl: "https://www.airbnb.es/rooms/1299823807539942833",
    rating: 4.5,
    reviews: 4,
    bedrooms: 2,
    guests: 4,
    privatePool: false,
    badge: "Nuevo",
    shortDescription:
      "Apartamento de 2 dormitorios a pie de playa en Marbella, con piscina y ascensor.",
    description:
      "Apartamento de 2 dormitorios a pie de playa en Marbella, con acceso a la playa, piscina, parking gratuito, ascensor y lavadora. Perfecto para unas vacaciones cómodas junto al mar.",
    amenities: ["A pie de playa", "Cocina", "WiFi", "Parking", "Piscina", "Smart TV", "Ascensor", "Lavadora"],
    images: [
      aimg("hosting/Hosting-1299823807539942833/original/c1e6951e-ff2f-4cd4-ad78-c55b35705cc5.jpeg"),
      aimg("hosting/Hosting-1299823807539942833/original/04c8f325-3318-40e6-97c7-3f4ed9d1e1cd.jpeg"),
      aimg("hosting/Hosting-1299823807539942833/original/696f5f8d-b8a7-40ca-8574-31df9a5f87f9.jpeg"),
      aimg("hosting/Hosting-1299823807539942833/original/f5eb2e7d-4b99-4aa4-a210-7e8aacd44259.jpeg"),
      aimg("hosting/Hosting-1299823807539942833/original/94d03acd-42d8-433f-9e09-6c0fe46b1cc8.jpeg"),
    ],
  },
  {
    slug: "duplex-terraza-piscina",
    name: "Maravilloso piso dúplex con terraza y piscina",
    type: "Apartamento",
    zone: "Marbella",
    airbnbUrl: "https://www.airbnb.es/rooms/1486008102288056314",
    rating: 4.5,
    reviews: 2,
    bedrooms: 2,
    guests: 4,
    privatePool: true,
    badge: "Nuevo",
    shortDescription:
      "Maravilloso piso dúplex con terraza y piscina, 2 dormitorios y 4 camas en Marbella.",
    description:
      "Maravilloso piso dúplex con amplia terraza y piscina, 2 dormitorios y 4 camas para hasta 4 huéspedes. Con aire acondicionado, ascensor y wifi, para disfrutar del clima de Marbella con comodidad.",
    amenities: ["Piscina privada", "Cocina", "WiFi", "Smart TV", "Ascensor", "Lavadora", "Aire acondicionado"],
    images: [
      aimg("hosting/Hosting-1486008102288056314/original/6e70c94f-9676-4121-8093-eb96b271a873.jpeg"),
      aimg("hosting/Hosting-1486008102288056314/original/adac103a-2e97-444c-95e8-b42f4600be7d.jpeg"),
      aimg("hosting/Hosting-1486008102288056314/original/14a8eca6-245e-441d-9369-5428ebce1d1e.jpeg"),
      aimg("hosting/Hosting-1486008102288056314/original/313640d1-3935-4ab4-92a4-1bdde2109428.jpeg"),
      aimg("hosting/Hosting-1486008102288056314/original/65010f63-9c03-41b6-9473-d27803e02454.jpeg"),
      aimg("hosting/Hosting-1486008102288056314/original/042b1327-93cd-4e32-97a2-12976187d090.jpeg"),
    ],
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
