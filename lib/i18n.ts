export type Locale = "en" | "nl" | "fr" | "de" | "it" | "es";

export const DEFAULT_LOCALE: Locale = "es";

/** Orden mostrado en el selector (como la referencia: English primero). */
export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "nl", label: "Dutch" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "it", label: "Italian" },
  { code: "es", label: "Spanish" },
];

type ServiceItem = { title: string; text: string };

const es = {
  nav: {
    accommodations: "Alojamientos",
    zones: "Zonas",
    services: "Servicios",
    contact: "Contacto",
  },
  brand: { tagline: "Alquiler vacacional de lujo" },
  promo: {
    lead: "Reserva anticipada de verano —",
    strong: "10% de descuento",
    tail: "en estancias de 7+ noches",
  },
  hero: {
    badge: "Alquiler vacacional de lujo en Marbella",
    title: "Villas y apartamentos de lujo en el corazón de Marbella",
    subtitle:
      "Piscina privada, vistas al mar y las mejores zonas de la Costa del Sol. Encuentra tu alojamiento perfecto y reserva directamente por WhatsApp.",
    ctaPrimary: "Ver alojamientos",
    ctaWhatsApp: "Hablar por WhatsApp",
    stat1: "alojamientos exclusivos",
    stat2: "valoración de huéspedes",
    stat3: "atención por WhatsApp",
  },
  listing: {
    kicker: "Nuestros alojamientos",
    title: "Encuentra tu villa o apartamento en Marbella",
    subtitle:
      "Filtra por zona, capacidad y presupuesto. Cuando encuentres tu favorito, consúltanos por WhatsApp y reserva al instante.",
  },
  filters: {
    zone: "Zona",
    allZones: "Todas las zonas",
    guests: "Huéspedes",
    anyGuests: "Cualquiera",
    guestsSuffix: "+ huéspedes",
    price: "Precio / noche",
    priceAny: "Cualquier precio",
    priceLt: "Hasta €500",
    priceMid1: "€500 – €1.000",
    priceMid2: "€1.000 – €2.000",
    priceGt: "Más de €2.000",
    resultsOne: "alojamiento disponible",
    resultsMany: "alojamientos disponibles",
    clear: "Limpiar filtros",
    empty: "No hay alojamientos con estos filtros. Prueba a ampliar tu búsqueda.",
  },
  card: { perNight: "/noche", consult: "Consultar", beds: "hab.", baths: "baños" },
  services: {
    kicker: "Por qué reservar con nosotros",
    title: "Tu estancia perfecta, sin esfuerzo",
    items: [
      {
        title: "Reserva sin complicaciones",
        text: "Te asesoramos y cerramos tu reserva directamente por WhatsApp, en minutos y en tu idioma.",
      },
      {
        title: "Alojamientos seleccionados",
        text: "Villas y apartamentos verificados, con piscina privada, vistas al mar y ubicaciones premium.",
      },
      {
        title: "Atención cercana 24/7",
        text: "Check-in, recomendaciones locales y soporte durante toda tu estancia en Marbella.",
      },
      {
        title: "Sin sorpresas",
        text: "Precios claros, limpieza y servicios incluidos según cada propiedad. Lo que ves es lo que pagas.",
      },
    ] as ServiceItem[],
  },
  zones: { kicker: "Dónde alojarte", title: "Las mejores zonas de Marbella" },
  instagram: {
    kicker: "Síguenos",
    title: "Lo último en nuestro Instagram",
    subtitle:
      "Descubre nuestras villas, novedades y la vida en Marbella. Síguenos para no perderte nada.",
    follow: "Seguir en Instagram",
  },
  ctaFinal: {
    title: "¿Listo para tu escapada a Marbella?",
    text: "Cuéntanos qué buscas (zona, fechas y nº de huéspedes) y te enviamos las mejores opciones disponibles por WhatsApp.",
    button: "Escríbenos por WhatsApp",
  },
  footer: {
    tagline:
      "Villas y apartamentos de lujo en alquiler vacacional en Marbella y la Costa del Sol.",
    linksTitle: "Enlaces",
    contactTitle: "Contacto",
    whatsapp: "Escríbenos por WhatsApp",
    rights: "Todos los derechos reservados.",
    madeFor: "Diseñado para amantes de Marbella.",
  },
  detail: {
    back: "Volver a alojamientos",
    beds: "dormitorios",
    baths: "baños",
    guests: "huéspedes",
    pool: "Piscina privada",
    descriptionTitle: "Descripción",
    amenitiesTitle: "Servicios",
    perNight: "/noche",
    priceNote:
      "Precio orientativo. Confírmanos fechas y nº de huéspedes para una cotización exacta.",
    reserve: "Reservar por WhatsApp",
    trust: "Respuesta rápida · Sin comisiones ocultas",
  },
  gallery: { prev: "Foto anterior", next: "Foto siguiente", view: "Ver foto", photo: "foto", of: "de" },
  badges: {
    "Last Minute": "Última hora",
    Oferta: "Oferta",
    Nuevo: "Nuevo",
    "Top ventas": "Más reservadas",
  },
  wa: {
    general:
      "¡Hola Marbella Host My Home! Me gustaría recibir información sobre vuestros alojamientos en Marbella.",
    villa: (name: string, zone: string) =>
      `¡Hola Marbella Host My Home! Estoy interesado/a en "${name}" (${zone}). ¿Podríais darme disponibilidad y precios?`,
  },
  langLabel: "Idioma",
};

export type Dict = typeof es;

const en: Dict = {
  nav: { accommodations: "Stays", zones: "Areas", services: "Services", contact: "Contact" },
  brand: { tagline: "Luxury holiday rentals" },
  promo: {
    lead: "Early summer booking —",
    strong: "10% discount",
    tail: "on stays of 7+ nights",
  },
  hero: {
    badge: "Luxury holiday rentals in Marbella",
    title: "Luxury villas and apartments in the heart of Marbella",
    subtitle:
      "Private pool, sea views and the best areas of the Costa del Sol. Find your perfect stay and book directly via WhatsApp.",
    ctaPrimary: "View stays",
    ctaWhatsApp: "Chat on WhatsApp",
    stat1: "exclusive properties",
    stat2: "guest rating",
    stat3: "support on WhatsApp",
  },
  listing: {
    kicker: "Our properties",
    title: "Find your villa or apartment in Marbella",
    subtitle:
      "Filter by area, capacity and budget. When you find your favourite, ask us on WhatsApp and book instantly.",
  },
  filters: {
    zone: "Area",
    allZones: "All areas",
    guests: "Guests",
    anyGuests: "Any",
    guestsSuffix: "+ guests",
    price: "Price / night",
    priceAny: "Any price",
    priceLt: "Up to €500",
    priceMid1: "€500 – €1,000",
    priceMid2: "€1,000 – €2,000",
    priceGt: "Over €2,000",
    resultsOne: "property available",
    resultsMany: "properties available",
    clear: "Clear filters",
    empty: "No properties match these filters. Try broadening your search.",
  },
  card: { perNight: "/night", consult: "Enquire", beds: "bd", baths: "ba" },
  services: {
    kicker: "Why book with us",
    title: "Your perfect stay, effortless",
    items: [
      {
        title: "Hassle-free booking",
        text: "We advise you and confirm your booking directly on WhatsApp, in minutes and in your language.",
      },
      {
        title: "Hand-picked stays",
        text: "Verified villas and apartments with private pool, sea views and premium locations.",
      },
      {
        title: "Friendly 24/7 support",
        text: "Check-in, local recommendations and support throughout your stay in Marbella.",
      },
      {
        title: "No surprises",
        text: "Clear prices, cleaning and services included per property. What you see is what you pay.",
      },
    ],
  },
  zones: { kicker: "Where to stay", title: "The best areas of Marbella" },
  instagram: {
    kicker: "Follow us",
    title: "Latest on our Instagram",
    subtitle:
      "Discover our villas, news and life in Marbella. Follow us so you don't miss a thing.",
    follow: "Follow on Instagram",
  },
  ctaFinal: {
    title: "Ready for your Marbella getaway?",
    text: "Tell us what you're looking for (area, dates and number of guests) and we'll send you the best available options on WhatsApp.",
    button: "Message us on WhatsApp",
  },
  footer: {
    tagline:
      "Luxury holiday villas and apartments for rent in Marbella and the Costa del Sol.",
    linksTitle: "Links",
    contactTitle: "Contact",
    whatsapp: "Message us on WhatsApp",
    rights: "All rights reserved.",
    madeFor: "Made for Marbella lovers.",
  },
  detail: {
    back: "Back to stays",
    beds: "bedrooms",
    baths: "bathrooms",
    guests: "guests",
    pool: "Private pool",
    descriptionTitle: "Description",
    amenitiesTitle: "Amenities",
    perNight: "/night",
    priceNote:
      "Indicative price. Confirm dates and number of guests for an exact quote.",
    reserve: "Book on WhatsApp",
    trust: "Fast reply · No hidden fees",
  },
  gallery: { prev: "Previous photo", next: "Next photo", view: "View photo", photo: "photo", of: "of" },
  badges: {
    "Last Minute": "Last Minute",
    Oferta: "Special offer",
    Nuevo: "New",
    "Top ventas": "Most booked",
  },
  wa: {
    general:
      "Hello Marbella Host My Home! I'd like to receive information about your accommodations in Marbella.",
    villa: (name: string, zone: string) =>
      `Hello Marbella Host My Home! I'm interested in "${name}" (${zone}). Could you send me availability and prices?`,
  },
  langLabel: "Language",
};

const nl: Dict = {
  nav: { accommodations: "Verblijven", zones: "Gebieden", services: "Diensten", contact: "Contact" },
  brand: { tagline: "Luxe vakantieverhuur" },
  promo: {
    lead: "Vroegboeken zomer —",
    strong: "10% korting",
    tail: "op verblijven van 7+ nachten",
  },
  hero: {
    badge: "Luxe vakantieverhuur in Marbella",
    title: "Luxe villa's en appartementen in het hart van Marbella",
    subtitle:
      "Privézwembad, zeezicht en de beste gebieden van de Costa del Sol. Vind je perfecte verblijf en boek direct via WhatsApp.",
    ctaPrimary: "Bekijk verblijven",
    ctaWhatsApp: "Chat via WhatsApp",
    stat1: "exclusieve accommodaties",
    stat2: "gastenbeoordeling",
    stat3: "ondersteuning via WhatsApp",
  },
  listing: {
    kicker: "Onze accommodaties",
    title: "Vind je villa of appartement in Marbella",
    subtitle:
      "Filter op gebied, capaciteit en budget. Heb je je favoriet gevonden? Vraag het ons via WhatsApp en boek direct.",
  },
  filters: {
    zone: "Gebied",
    allZones: "Alle gebieden",
    guests: "Gasten",
    anyGuests: "Alle",
    guestsSuffix: "+ gasten",
    price: "Prijs / nacht",
    priceAny: "Elke prijs",
    priceLt: "Tot €500",
    priceMid1: "€500 – €1.000",
    priceMid2: "€1.000 – €2.000",
    priceGt: "Meer dan €2.000",
    resultsOne: "accommodatie beschikbaar",
    resultsMany: "accommodaties beschikbaar",
    clear: "Filters wissen",
    empty: "Geen accommodaties met deze filters. Probeer je zoekopdracht te verbreden.",
  },
  card: { perNight: "/nacht", consult: "Aanvragen", beds: "slk", baths: "bdk" },
  services: {
    kicker: "Waarom bij ons boeken",
    title: "Jouw perfecte verblijf, moeiteloos",
    items: [
      {
        title: "Zorgeloos boeken",
        text: "Wij adviseren je en bevestigen je boeking direct via WhatsApp, in enkele minuten en in jouw taal.",
      },
      {
        title: "Zorgvuldig geselecteerd",
        text: "Geverifieerde villa's en appartementen met privézwembad, zeezicht en toplocaties.",
      },
      {
        title: "Vriendelijke 24/7 service",
        text: "Check-in, lokale tips en ondersteuning gedurende je hele verblijf in Marbella.",
      },
      {
        title: "Geen verrassingen",
        text: "Heldere prijzen, schoonmaak en diensten per accommodatie inbegrepen. Wat je ziet, betaal je.",
      },
    ],
  },
  zones: { kicker: "Waar te verblijven", title: "De beste gebieden van Marbella" },
  instagram: {
    kicker: "Volg ons",
    title: "Het laatste op onze Instagram",
    subtitle:
      "Ontdek onze villa's, nieuws en het leven in Marbella. Volg ons en mis niets.",
    follow: "Volg op Instagram",
  },
  ctaFinal: {
    title: "Klaar voor je uitje naar Marbella?",
    text: "Vertel ons wat je zoekt (gebied, data en aantal gasten) en we sturen je de beste beschikbare opties via WhatsApp.",
    button: "Stuur ons een WhatsApp",
  },
  footer: {
    tagline:
      "Luxe vakantievilla's en appartementen te huur in Marbella en de Costa del Sol.",
    linksTitle: "Links",
    contactTitle: "Contact",
    whatsapp: "Stuur ons een WhatsApp",
    rights: "Alle rechten voorbehouden.",
    madeFor: "Gemaakt voor liefhebbers van Marbella.",
  },
  detail: {
    back: "Terug naar verblijven",
    beds: "slaapkamers",
    baths: "badkamers",
    guests: "gasten",
    pool: "Privézwembad",
    descriptionTitle: "Beschrijving",
    amenitiesTitle: "Voorzieningen",
    perNight: "/nacht",
    priceNote:
      "Indicatieve prijs. Bevestig data en aantal gasten voor een exacte offerte.",
    reserve: "Boek via WhatsApp",
    trust: "Snel antwoord · Geen verborgen kosten",
  },
  gallery: { prev: "Vorige foto", next: "Volgende foto", view: "Bekijk foto", photo: "foto", of: "van" },
  badges: {
    "Last Minute": "Last minute",
    Oferta: "Aanbieding",
    Nuevo: "Nieuw",
    "Top ventas": "Meest geboekt",
  },
  wa: {
    general:
      "Hallo Marbella Host My Home! Ik wil graag informatie ontvangen over jullie accommodaties in Marbella.",
    villa: (name: string, zone: string) =>
      `Hallo Marbella Host My Home! Ik ben geïnteresseerd in "${name}" (${zone}). Kunnen jullie mij beschikbaarheid en prijzen sturen?`,
  },
  langLabel: "Taal",
};

const fr: Dict = {
  nav: { accommodations: "Logements", zones: "Quartiers", services: "Services", contact: "Contact" },
  brand: { tagline: "Locations de vacances de luxe" },
  promo: {
    lead: "Réservation anticipée été —",
    strong: "10% de réduction",
    tail: "sur les séjours de 7+ nuits",
  },
  hero: {
    badge: "Locations de vacances de luxe à Marbella",
    title: "Villas et appartements de luxe au cœur de Marbella",
    subtitle:
      "Piscine privée, vue mer et les meilleurs quartiers de la Costa del Sol. Trouvez votre logement idéal et réservez directement par WhatsApp.",
    ctaPrimary: "Voir les logements",
    ctaWhatsApp: "Discuter sur WhatsApp",
    stat1: "logements exclusifs",
    stat2: "note des voyageurs",
    stat3: "assistance sur WhatsApp",
  },
  listing: {
    kicker: "Nos logements",
    title: "Trouvez votre villa ou appartement à Marbella",
    subtitle:
      "Filtrez par quartier, capacité et budget. Quand vous trouvez votre coup de cœur, contactez-nous sur WhatsApp et réservez en un instant.",
  },
  filters: {
    zone: "Quartier",
    allZones: "Tous les quartiers",
    guests: "Voyageurs",
    anyGuests: "Tous",
    guestsSuffix: "+ voyageurs",
    price: "Prix / nuit",
    priceAny: "Tous les prix",
    priceLt: "Jusqu'à 500 €",
    priceMid1: "500 € – 1 000 €",
    priceMid2: "1 000 € – 2 000 €",
    priceGt: "Plus de 2 000 €",
    resultsOne: "logement disponible",
    resultsMany: "logements disponibles",
    clear: "Effacer les filtres",
    empty: "Aucun logement avec ces filtres. Essayez d'élargir votre recherche.",
  },
  card: { perNight: "/nuit", consult: "Demander", beds: "ch.", baths: "sdb" },
  services: {
    kicker: "Pourquoi réserver avec nous",
    title: "Votre séjour parfait, sans effort",
    items: [
      {
        title: "Réservation sans souci",
        text: "Nous vous conseillons et confirmons votre réservation directement sur WhatsApp, en quelques minutes et dans votre langue.",
      },
      {
        title: "Logements sélectionnés",
        text: "Villas et appartements vérifiés, avec piscine privée, vue mer et emplacements premium.",
      },
      {
        title: "Assistance 24/7",
        text: "Check-in, recommandations locales et assistance pendant tout votre séjour à Marbella.",
      },
      {
        title: "Sans surprises",
        text: "Prix clairs, ménage et services inclus selon le logement. Ce que vous voyez est ce que vous payez.",
      },
    ],
  },
  zones: { kicker: "Où séjourner", title: "Les meilleurs quartiers de Marbella" },
  instagram: {
    kicker: "Suivez-nous",
    title: "Les dernières actus sur notre Instagram",
    subtitle:
      "Découvrez nos villas, nos nouveautés et la vie à Marbella. Suivez-nous pour ne rien manquer.",
    follow: "Suivre sur Instagram",
  },
  ctaFinal: {
    title: "Prêt pour votre escapade à Marbella ?",
    text: "Dites-nous ce que vous cherchez (quartier, dates et nombre de voyageurs) et nous vous envoyons les meilleures options disponibles sur WhatsApp.",
    button: "Écrivez-nous sur WhatsApp",
  },
  footer: {
    tagline:
      "Villas et appartements de vacances de luxe à louer à Marbella et sur la Costa del Sol.",
    linksTitle: "Liens",
    contactTitle: "Contact",
    whatsapp: "Écrivez-nous sur WhatsApp",
    rights: "Tous droits réservés.",
    madeFor: "Conçu pour les amoureux de Marbella.",
  },
  detail: {
    back: "Retour aux logements",
    beds: "chambres",
    baths: "salles de bain",
    guests: "voyageurs",
    pool: "Piscine privée",
    descriptionTitle: "Description",
    amenitiesTitle: "Équipements",
    perNight: "/nuit",
    priceNote:
      "Prix indicatif. Confirmez les dates et le nombre de voyageurs pour un devis exact.",
    reserve: "Réserver sur WhatsApp",
    trust: "Réponse rapide · Sans frais cachés",
  },
  gallery: { prev: "Photo précédente", next: "Photo suivante", view: "Voir la photo", photo: "photo", of: "sur" },
  badges: {
    "Last Minute": "Dernière minute",
    Oferta: "Offre spéciale",
    Nuevo: "Nouveau",
    "Top ventas": "Les plus réservées",
  },
  wa: {
    general:
      "Bonjour Marbella Host My Home ! Je souhaiterais recevoir des informations sur vos logements à Marbella.",
    villa: (name: string, zone: string) =>
      `Bonjour Marbella Host My Home ! Je suis intéressé(e) par "${name}" (${zone}). Pourriez-vous m'envoyer les disponibilités et les prix ?`,
  },
  langLabel: "Langue",
};

const de: Dict = {
  nav: { accommodations: "Unterkünfte", zones: "Gebiete", services: "Leistungen", contact: "Kontakt" },
  brand: { tagline: "Luxus-Ferienvermietung" },
  promo: {
    lead: "Frühbucher Sommer —",
    strong: "10% Rabatt",
    tail: "bei Aufenthalten ab 7 Nächten",
  },
  hero: {
    badge: "Luxus-Ferienvermietung in Marbella",
    title: "Luxusvillen und Apartments im Herzen von Marbella",
    subtitle:
      "Privatpool, Meerblick und die besten Gegenden der Costa del Sol. Finden Sie Ihre perfekte Unterkunft und buchen Sie direkt über WhatsApp.",
    ctaPrimary: "Unterkünfte ansehen",
    ctaWhatsApp: "Per WhatsApp chatten",
    stat1: "exklusive Unterkünfte",
    stat2: "Gästebewertung",
    stat3: "Support per WhatsApp",
  },
  listing: {
    kicker: "Unsere Unterkünfte",
    title: "Finden Sie Ihre Villa oder Ihr Apartment in Marbella",
    subtitle:
      "Filtern Sie nach Gebiet, Kapazität und Budget. Wenn Sie Ihren Favoriten gefunden haben, fragen Sie uns per WhatsApp und buchen Sie sofort.",
  },
  filters: {
    zone: "Gebiet",
    allZones: "Alle Gebiete",
    guests: "Gäste",
    anyGuests: "Beliebig",
    guestsSuffix: "+ Gäste",
    price: "Preis / Nacht",
    priceAny: "Beliebiger Preis",
    priceLt: "Bis 500 €",
    priceMid1: "500 € – 1.000 €",
    priceMid2: "1.000 € – 2.000 €",
    priceGt: "Über 2.000 €",
    resultsOne: "Unterkunft verfügbar",
    resultsMany: "Unterkünfte verfügbar",
    clear: "Filter zurücksetzen",
    empty: "Keine Unterkünfte mit diesen Filtern. Erweitern Sie Ihre Suche.",
  },
  card: { perNight: "/Nacht", consult: "Anfragen", beds: "Schlafz.", baths: "Bäder" },
  services: {
    kicker: "Warum bei uns buchen",
    title: "Ihr perfekter Aufenthalt, mühelos",
    items: [
      {
        title: "Buchung ohne Aufwand",
        text: "Wir beraten Sie und bestätigen Ihre Buchung direkt über WhatsApp, in wenigen Minuten und in Ihrer Sprache.",
      },
      {
        title: "Handverlesene Unterkünfte",
        text: "Geprüfte Villen und Apartments mit Privatpool, Meerblick und Premium-Lagen.",
      },
      {
        title: "Freundlicher 24/7-Support",
        text: "Check-in, lokale Empfehlungen und Unterstützung während Ihres gesamten Aufenthalts in Marbella.",
      },
      {
        title: "Keine Überraschungen",
        text: "Klare Preise, Reinigung und Leistungen je nach Unterkunft inklusive. Was Sie sehen, zahlen Sie.",
      },
    ],
  },
  zones: { kicker: "Wo übernachten", title: "Die besten Gegenden von Marbella" },
  instagram: {
    kicker: "Folgen Sie uns",
    title: "Das Neueste auf unserem Instagram",
    subtitle:
      "Entdecken Sie unsere Villen, Neuigkeiten und das Leben in Marbella. Folgen Sie uns, um nichts zu verpassen.",
    follow: "Auf Instagram folgen",
  },
  ctaFinal: {
    title: "Bereit für Ihren Marbella-Kurzurlaub?",
    text: "Sagen Sie uns, was Sie suchen (Gebiet, Daten und Gästezahl) und wir senden Ihnen die besten verfügbaren Optionen per WhatsApp.",
    button: "Schreiben Sie uns auf WhatsApp",
  },
  footer: {
    tagline:
      "Luxuriöse Ferienvillen und Apartments zur Miete in Marbella und an der Costa del Sol.",
    linksTitle: "Links",
    contactTitle: "Kontakt",
    whatsapp: "Schreiben Sie uns auf WhatsApp",
    rights: "Alle Rechte vorbehalten.",
    madeFor: "Gemacht für Marbella-Liebhaber.",
  },
  detail: {
    back: "Zurück zu den Unterkünften",
    beds: "Schlafzimmer",
    baths: "Badezimmer",
    guests: "Gäste",
    pool: "Privatpool",
    descriptionTitle: "Beschreibung",
    amenitiesTitle: "Ausstattung",
    perNight: "/Nacht",
    priceNote:
      "Richtpreis. Bestätigen Sie Daten und Gästezahl für ein genaues Angebot.",
    reserve: "Auf WhatsApp buchen",
    trust: "Schnelle Antwort · Keine versteckten Kosten",
  },
  gallery: { prev: "Vorheriges Foto", next: "Nächstes Foto", view: "Foto ansehen", photo: "Foto", of: "von" },
  badges: {
    "Last Minute": "Last Minute",
    Oferta: "Sonderangebot",
    Nuevo: "Neu",
    "Top ventas": "Am meisten gebucht",
  },
  wa: {
    general:
      "Hallo Marbella Host My Home! Ich hätte gerne Informationen zu Ihren Unterkünften in Marbella.",
    villa: (name: string, zone: string) =>
      `Hallo Marbella Host My Home! Ich interessiere mich für "${name}" (${zone}). Könnten Sie mir Verfügbarkeit und Preise senden?`,
  },
  langLabel: "Sprache",
};

const it: Dict = {
  nav: { accommodations: "Alloggi", zones: "Zone", services: "Servizi", contact: "Contatto" },
  brand: { tagline: "Affitti vacanze di lusso" },
  promo: {
    lead: "Prenota prima estate —",
    strong: "10% di sconto",
    tail: "sui soggiorni di 7+ notti",
  },
  hero: {
    badge: "Affitti vacanze di lusso a Marbella",
    title: "Ville e appartamenti di lusso nel cuore di Marbella",
    subtitle:
      "Piscina privata, vista mare e le migliori zone della Costa del Sol. Trova il tuo alloggio perfetto e prenota direttamente su WhatsApp.",
    ctaPrimary: "Vedi alloggi",
    ctaWhatsApp: "Scrivi su WhatsApp",
    stat1: "alloggi esclusivi",
    stat2: "valutazione ospiti",
    stat3: "assistenza su WhatsApp",
  },
  listing: {
    kicker: "I nostri alloggi",
    title: "Trova la tua villa o appartamento a Marbella",
    subtitle:
      "Filtra per zona, capacità e budget. Quando trovi il tuo preferito, contattaci su WhatsApp e prenota subito.",
  },
  filters: {
    zone: "Zona",
    allZones: "Tutte le zone",
    guests: "Ospiti",
    anyGuests: "Qualsiasi",
    guestsSuffix: "+ ospiti",
    price: "Prezzo / notte",
    priceAny: "Qualsiasi prezzo",
    priceLt: "Fino a 500 €",
    priceMid1: "500 € – 1.000 €",
    priceMid2: "1.000 € – 2.000 €",
    priceGt: "Oltre 2.000 €",
    resultsOne: "alloggio disponibile",
    resultsMany: "alloggi disponibili",
    clear: "Cancella filtri",
    empty: "Nessun alloggio con questi filtri. Prova ad ampliare la ricerca.",
  },
  card: { perNight: "/notte", consult: "Richiedi", beds: "cam.", baths: "bagni" },
  services: {
    kicker: "Perché prenotare con noi",
    title: "Il tuo soggiorno perfetto, senza pensieri",
    items: [
      {
        title: "Prenotazione senza stress",
        text: "Ti consigliamo e confermiamo la tua prenotazione direttamente su WhatsApp, in pochi minuti e nella tua lingua.",
      },
      {
        title: "Alloggi selezionati",
        text: "Ville e appartamenti verificati, con piscina privata, vista mare e posizioni premium.",
      },
      {
        title: "Assistenza cordiale 24/7",
        text: "Check-in, consigli locali e assistenza per tutta la durata del tuo soggiorno a Marbella.",
      },
      {
        title: "Nessuna sorpresa",
        text: "Prezzi chiari, pulizia e servizi inclusi per ogni alloggio. Quello che vedi è quello che paghi.",
      },
    ],
  },
  zones: { kicker: "Dove alloggiare", title: "Le migliori zone di Marbella" },
  instagram: {
    kicker: "Seguici",
    title: "Le ultime dal nostro Instagram",
    subtitle:
      "Scopri le nostre ville, le novità e la vita a Marbella. Seguici per non perderti nulla.",
    follow: "Segui su Instagram",
  },
  ctaFinal: {
    title: "Pronto per la tua fuga a Marbella?",
    text: "Dicci cosa cerchi (zona, date e numero di ospiti) e ti invieremo le migliori opzioni disponibili su WhatsApp.",
    button: "Scrivici su WhatsApp",
  },
  footer: {
    tagline:
      "Ville e appartamenti vacanze di lusso in affitto a Marbella e sulla Costa del Sol.",
    linksTitle: "Link",
    contactTitle: "Contatto",
    whatsapp: "Scrivici su WhatsApp",
    rights: "Tutti i diritti riservati.",
    madeFor: "Creato per gli amanti di Marbella.",
  },
  detail: {
    back: "Torna agli alloggi",
    beds: "camere da letto",
    baths: "bagni",
    guests: "ospiti",
    pool: "Piscina privata",
    descriptionTitle: "Descrizione",
    amenitiesTitle: "Servizi",
    perNight: "/notte",
    priceNote:
      "Prezzo indicativo. Conferma date e numero di ospiti per un preventivo esatto.",
    reserve: "Prenota su WhatsApp",
    trust: "Risposta rapida · Nessun costo nascosto",
  },
  gallery: { prev: "Foto precedente", next: "Foto successiva", view: "Vedi foto", photo: "foto", of: "di" },
  badges: {
    "Last Minute": "Last minute",
    Oferta: "Offerta speciale",
    Nuevo: "Novità",
    "Top ventas": "Più prenotate",
  },
  wa: {
    general:
      "Ciao Marbella Host My Home! Vorrei ricevere informazioni sui vostri alloggi a Marbella.",
    villa: (name: string, zone: string) =>
      `Ciao Marbella Host My Home! Sono interessato/a a "${name}" (${zone}). Potreste inviarmi disponibilità e prezzi?`,
  },
  langLabel: "Lingua",
};

export const dictionaries: Record<Locale, Dict> = { es, en, nl, fr, de, it };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
