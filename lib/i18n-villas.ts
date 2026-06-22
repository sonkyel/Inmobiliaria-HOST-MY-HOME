import type { Locale } from "./i18n";

/**
 * Traducciones de los servicios (amenities). La clave es el texto en español
 * (tal cual aparece en lib/villas.ts). Si una villa real usa un servicio nuevo,
 * añádelo aquí para que se traduzca; si no, se mostrará el texto original.
 */
type AmenityT = { en: string; nl: string; fr: string; de: string; it: string };

export const amenityMap: Record<string, AmenityT> = {
  "Piscina privada climatizada": { en: "Heated private pool", nl: "Verwarmd privézwembad", fr: "Piscine privée chauffée", de: "Beheizter Privatpool", it: "Piscina privata riscaldata" },
  "WiFi de alta velocidad": { en: "High-speed WiFi", nl: "Snelle wifi", fr: "WiFi haut débit", de: "Highspeed-WLAN", it: "WiFi ad alta velocità" },
  "Aire acondicionado": { en: "Air conditioning", nl: "Airconditioning", fr: "Climatisation", de: "Klimaanlage", it: "Aria condizionata" },
  "Parking privado": { en: "Private parking", nl: "Privéparkeerplaats", fr: "Parking privé", de: "Privater Parkplatz", it: "Parcheggio privato" },
  "Cocina equipada": { en: "Equipped kitchen", nl: "Volledig uitgeruste keuken", fr: "Cuisine équipée", de: "Ausgestattete Küche", it: "Cucina attrezzata" },
  "Smart TV": { en: "Smart TV", nl: "Smart TV", fr: "Smart TV", de: "Smart TV", it: "Smart TV" },
  "Terraza chill-out": { en: "Chill-out terrace", nl: "Chill-outterras", fr: "Terrasse chill-out", de: "Chill-out-Terrasse", it: "Terrazza chill-out" },
  Barbacoa: { en: "Barbecue", nl: "Barbecue", fr: "Barbecue", de: "Grill", it: "Barbecue" },
  "Piscina privada": { en: "Private pool", nl: "Privézwembad", fr: "Piscine privée", de: "Privatpool", it: "Piscina privata" },
  "Jardín privado": { en: "Private garden", nl: "Privétuin", fr: "Jardin privé", de: "Privater Garten", it: "Giardino privato" },
  WiFi: { en: "WiFi", nl: "Wifi", fr: "WiFi", de: "WLAN", it: "WiFi" },
  Parking: { en: "Parking", nl: "Parkeerplaats", fr: "Parking", de: "Parkplatz", it: "Parcheggio" },
  Lavadora: { en: "Washing machine", nl: "Wasmachine", fr: "Lave-linge", de: "Waschmaschine", it: "Lavatrice" },
  "Cuna disponible": { en: "Cot available", nl: "Kinderbedje beschikbaar", fr: "Lit bébé disponible", de: "Babybett verfügbar", it: "Culla disponibile" },
  "Piscina infinity": { en: "Infinity pool", nl: "Infinityzwembad", fr: "Piscine à débordement", de: "Infinity-Pool", it: "Piscina a sfioro" },
  "Vistas al mar": { en: "Sea views", nl: "Zeezicht", fr: "Vue mer", de: "Meerblick", it: "Vista mare" },
  "Gimnasio privado": { en: "Private gym", nl: "Privésportschool", fr: "Salle de sport privée", de: "Privates Fitnessstudio", it: "Palestra privata" },
  "Parking para 4 coches": { en: "Parking for 4 cars", nl: "Parkeerplaats voor 4 auto's", fr: "Parking pour 4 voitures", de: "Parkplatz für 4 Autos", it: "Parcheggio per 4 auto" },
  "Cocina gourmet": { en: "Gourmet kitchen", nl: "Gourmetkeuken", fr: "Cuisine gastronomique", de: "Gourmetküche", it: "Cucina gourmet" },
  "Servicio de limpieza diario": { en: "Daily cleaning service", nl: "Dagelijkse schoonmaak", fr: "Service de ménage quotidien", de: "Täglicher Reinigungsservice", it: "Servizio di pulizia giornaliero" },
  Jardín: { en: "Garden", nl: "Tuin", fr: "Jardin", de: "Garten", it: "Giardino" },
  Terraza: { en: "Terrace", nl: "Terras", fr: "Terrasse", de: "Terrasse", it: "Terrazza" },
  "Cocina de diseño": { en: "Designer kitchen", nl: "Designkeuken", fr: "Cuisine design", de: "Designerküche", it: "Cucina di design" },
  "Zona de barbacoa": { en: "Barbecue area", nl: "Barbecuegedeelte", fr: "Espace barbecue", de: "Grillbereich", it: "Zona barbecue" },
  "Piscina comunitaria": { en: "Communal pool", nl: "Gemeenschappelijk zwembad", fr: "Piscine commune", de: "Gemeinschaftspool", it: "Piscina condivisa" },
  "A pie de playa": { en: "Beachfront", nl: "Aan het strand", fr: "En bord de plage", de: "Direkt am Strand", it: "Fronte spiaggia" },
  "Piscina infinity climatizada": { en: "Heated infinity pool", nl: "Verwarmd infinityzwembad", fr: "Piscine à débordement chauffée", de: "Beheizter Infinity-Pool", it: "Piscina a sfioro riscaldata" },
  "Vistas panorámicas": { en: "Panoramic views", nl: "Panoramisch uitzicht", fr: "Vue panoramique", de: "Panoramablick", it: "Vista panoramica" },
  "Seguridad 24h": { en: "24h security", nl: "24-uursbeveiliging", fr: "Sécurité 24h/24", de: "24-Stunden-Sicherheit", it: "Sicurezza 24h" },
  "Gimnasio y spa": { en: "Gym and spa", nl: "Sportschool en spa", fr: "Salle de sport et spa", de: "Fitnessstudio und Spa", it: "Palestra e spa" },
  "Parking para 6 coches": { en: "Parking for 6 cars", nl: "Parkeerplaats voor 6 auto's", fr: "Parking pour 6 voitures", de: "Parkplatz für 6 Autos", it: "Parcheggio per 6 auto" },
  "Servicio de chef (opcional)": { en: "Chef service (optional)", nl: "Chef-service (optioneel)", fr: "Service de chef (en option)", de: "Koch-Service (optional)", it: "Servizio chef (opzionale)" },
  "Piscina interior y exterior": { en: "Indoor and outdoor pool", nl: "Binnen- en buitenzwembad", fr: "Piscine intérieure et extérieure", de: "Innen- und Außenpool", it: "Piscina interna ed esterna" },
  "Campo de golf privado": { en: "Private golf course", nl: "Privégolfbaan", fr: "Parcours de golf privé", de: "Privater Golfplatz", it: "Campo da golf privato" },
  "Spa y sauna": { en: "Spa and sauna", nl: "Spa en sauna", fr: "Spa et sauna", de: "Spa und Sauna", it: "Spa e sauna" },
  "Parking en garaje": { en: "Garage parking", nl: "Parkeren in garage", fr: "Parking en garage", de: "Garagenstellplatz", it: "Parcheggio in garage" },
  "Servicio de mayordomo": { en: "Butler service", nl: "Butlerservice", fr: "Service de majordome", de: "Butler-Service", it: "Servizio maggiordomo" },
  Cocina: { en: "Kitchen", nl: "Keuken", fr: "Cuisine", de: "Küche", it: "Cucina" },
  Ascensor: { en: "Elevator", nl: "Lift", fr: "Ascenseur", de: "Aufzug", it: "Ascensore" },
  "Zona de trabajo": { en: "Workspace", nl: "Werkplek", fr: "Espace de travail", de: "Arbeitsbereich", it: "Zona di lavoro" },
  Piscina: { en: "Pool", nl: "Zwembad", fr: "Piscine", de: "Pool", it: "Piscina" },
};

export function translateAmenity(esText: string, locale: Locale): string {
  if (locale === "es") return esText;
  return amenityMap[esText]?.[locale] ?? esText;
}

/**
 * Traducciones de las descripciones por villa (clave = slug).
 * El español vive en lib/villas.ts; aquí están en, nl, fr, de, it.
 */
type VillaText = { short: string; long: string };

export const villaTextMap: Record<string, Partial<Record<Locale, VillaText>>> = {
  "villa-aurora-puerto-banus": {
    en: { short: "Modern villa steps from the marina, with heated private pool and chill-out terrace.", long: "Villa Aurora combines contemporary design with the best location in Marbella, a few minutes' walk from Puerto Banús, its restaurants and beaches. Enjoy spacious open areas, a designer kitchen, a heated private pool and a terrace perfect for sunsets." },
    nl: { short: "Moderne villa op loopafstand van de jachthaven, met verwarmd privézwembad en chill-outterras.", long: "Villa Aurora combineert eigentijds design met de beste locatie van Marbella, op enkele minuten lopen van Puerto Banús, de restaurants en de stranden. Geniet van ruime open ruimtes, een designkeuken, een verwarmd privézwembad en een terras perfect voor de zonsondergang." },
    fr: { short: "Villa moderne à deux pas du port, avec piscine privée chauffée et terrasse chill-out.", long: "Villa Aurora allie design contemporain et le meilleur emplacement de Marbella, à quelques minutes à pied de Puerto Banús, de ses restaurants et de ses plages. Profitez de vastes espaces ouverts, d'une cuisine design, d'une piscine privée chauffée et d'une terrasse parfaite pour le coucher du soleil." },
    de: { short: "Moderne Villa wenige Schritte vom Hafen, mit beheiztem Privatpool und Chill-out-Terrasse.", long: "Villa Aurora verbindet zeitgenössisches Design mit der besten Lage Marbellas, nur wenige Gehminuten von Puerto Banús, seinen Restaurants und Stränden entfernt. Genießen Sie großzügige, offene Räume, eine Designerküche, einen beheizten Privatpool und eine Terrasse, die perfekt für Sonnenuntergänge ist." },
    it: { short: "Villa moderna a due passi dal porto, con piscina privata riscaldata e terrazza chill-out.", long: "Villa Aurora unisce design contemporaneo e la migliore posizione di Marbella, a pochi minuti a piedi da Puerto Banús, dai suoi ristoranti e dalle spiagge. Goditi ampi spazi aperti, una cucina di design, una piscina privata riscaldata e una terrazza perfetta per il tramonto." },
  },
  "villa-marea-nueva-andalucia": {
    en: { short: "Mediterranean retreat in the Golf Valley, ideal for families and groups.", long: "In the heart of Nueva Andalucía's Golf Valley, Villa Marea is a peaceful retreat surrounded by gardens, with a private pool and spacious living areas. Perfect for families and golf lovers, just minutes from Puerto Banús." },
    nl: { short: "Mediterraan toevluchtsoord in de Golf Valley, ideaal voor families en groepen.", long: "Midden in de Golf Valley van Nueva Andalucía is Villa Marea een rustig toevluchtsoord omringd door tuinen, met een privézwembad en ruime zitgedeeltes. Perfect voor families en golfliefhebbers, op enkele minuten van Puerto Banús." },
    fr: { short: "Refuge méditerranéen dans la Vallée du Golf, idéal pour familles et groupes.", long: "Au cœur de la Vallée du Golf de Nueva Andalucía, Villa Marea est un refuge paisible entouré de jardins, avec piscine privée et vastes espaces de vie. Parfaite pour les familles et les amateurs de golf, à quelques minutes de Puerto Banús." },
    de: { short: "Mediterranes Refugium im Golf Valley, ideal für Familien und Gruppen.", long: "Mitten im Golf Valley von Nueva Andalucía ist Villa Marea ein ruhiges, von Gärten umgebenes Refugium mit Privatpool und großzügigen Wohnbereichen. Perfekt für Familien und Golfliebhaber, nur wenige Minuten von Puerto Banús entfernt." },
    it: { short: "Rifugio mediterraneo nella Valle del Golf, ideale per famiglie e gruppi.", long: "Nel cuore della Valle del Golf di Nueva Andalucía, Villa Marea è un rifugio tranquillo circondato da giardini, con piscina privata e ampie zone living. Perfetta per famiglie e amanti del golf, a pochi minuti da Puerto Banús." },
  },
  "villa-sol-golden-mile": {
    en: { short: "Luxury mansion on the Golden Mile with sea views and premium service.", long: "Villa Sol is an impressive mansion on Marbella's prestigious Golden Mile, steps from the beach and the old town. Mediterranean views, an infinity pool, a gym and luxurious spaces designed for large groups and unforgettable celebrations." },
    nl: { short: "Luxe villa aan de Golden Mile met zeezicht en premium service.", long: "Villa Sol is een indrukwekkende villa aan de prestigieuze Golden Mile van Marbella, op een steenworp van het strand en de oude stad. Uitzicht op de Middellandse Zee, een infinityzwembad, een fitnessruimte en luxueuze ruimtes ontworpen voor grote groepen en onvergetelijke vieringen." },
    fr: { short: "Demeure de luxe sur le Golden Mile avec vue mer et service premium.", long: "Villa Sol est une imposante demeure sur le prestigieux Golden Mile de Marbella, à deux pas de la plage et de la vieille ville. Vue sur la Méditerranée, piscine à débordement, salle de sport et espaces de luxe conçus pour les grands groupes et les célébrations inoubliables." },
    de: { short: "Luxusvilla an der Golden Mile mit Meerblick und Premium-Service.", long: "Villa Sol ist eine beeindruckende Villa an Marbellas prestigeträchtiger Golden Mile, nur wenige Schritte vom Strand und der Altstadt entfernt. Mittelmeerblick, ein Infinity-Pool, ein Fitnessstudio und luxuriöse Räume für große Gruppen und unvergessliche Feiern." },
    it: { short: "Villa di lusso sul Golden Mile con vista mare e servizio premium.", long: "Villa Sol è un'imponente villa sul prestigioso Golden Mile di Marbella, a due passi dalla spiaggia e dal centro storico. Vista sul Mediterraneo, piscina a sfioro, palestra e spazi di lusso pensati per grandi gruppi e celebrazioni indimenticabili." },
  },
  "villa-brisa-los-monteros": {
    en: { short: "Bright home a few minutes from Los Monteros beach.", long: "Villa Brisa is a bright, welcoming home in the exclusive area of Los Monteros, just minutes from one of Marbella's best beaches. Ideal for a relaxed getaway with a private pool and Mediterranean garden." },
    nl: { short: "Lichte woning op enkele minuten van het strand van Los Monteros.", long: "Villa Brisa is een lichte, gezellige woning in de exclusieve wijk Los Monteros, op enkele minuten van een van de mooiste stranden van Marbella. Ideaal voor een ontspannen uitje met privézwembad en mediterrane tuin." },
    fr: { short: "Maison lumineuse à quelques minutes de la plage de Los Monteros.", long: "Villa Brisa est une maison lumineuse et accueillante dans le quartier exclusif de Los Monteros, à quelques minutes de l'une des plus belles plages de Marbella. Idéale pour une escapade détendue avec piscine privée et jardin méditerranéen." },
    de: { short: "Helles Haus wenige Minuten vom Strand von Los Monteros.", long: "Villa Brisa ist ein helles, einladendes Haus im exklusiven Viertel Los Monteros, nur wenige Minuten von einem der besten Strände Marbellas entfernt. Ideal für einen entspannten Kurzurlaub mit Privatpool und mediterranem Garten." },
    it: { short: "Casa luminosa a pochi minuti dalla spiaggia di Los Monteros.", long: "Villa Brisa è una casa luminosa e accogliente nell'esclusiva zona di Los Monteros, a pochi minuti da una delle migliori spiagge di Marbella. Ideale per una fuga rilassante con piscina privata e giardino mediterraneo." },
  },
  "villa-azahar-la-quinta": {
    en: { short: "Contemporary villa with sea views in La Quinta, newly renovated.", long: "Newly renovated, Villa Azahar offers contemporary design in La Quinta with spectacular sea views. A large plot, a private pool and first-class finishes for groups seeking exclusivity and comfort." },
    nl: { short: "Eigentijdse villa met zeezicht in La Quinta, onlangs gerenoveerd.", long: "De onlangs gerenoveerde Villa Azahar biedt eigentijds design in La Quinta met spectaculair zeezicht. Een groot perceel, een privézwembad en eersteklas afwerking voor groepen die exclusiviteit en comfort zoeken." },
    fr: { short: "Villa contemporaine avec vue mer à La Quinta, récemment rénovée.", long: "Récemment rénovée, Villa Azahar offre un design contemporain à La Quinta avec une vue mer spectaculaire. Grand terrain, piscine privée et finitions haut de gamme pour les groupes en quête d'exclusivité et de confort." },
    de: { short: "Zeitgenössische Villa mit Meerblick in La Quinta, frisch renoviert.", long: "Die frisch renovierte Villa Azahar bietet zeitgenössisches Design in La Quinta mit spektakulärem Meerblick. Ein großes Grundstück, ein Privatpool und erstklassige Ausstattung für Gruppen, die Exklusivität und Komfort suchen." },
    it: { short: "Villa contemporanea con vista mare a La Quinta, appena ristrutturata.", long: "Appena ristrutturata, Villa Azahar offre un design contemporaneo a La Quinta con spettacolare vista mare. Ampio terreno, piscina privata e finiture di prima qualità per gruppi che cercano esclusività e comfort." },
  },
  "apartamento-mar-marbesa": {
    en: { short: "Beachfront apartment in Marbesa, steps from the sand.", long: "Apartamento Mar is a bright home just steps from Marbesa beach, ideal for couples or small families. A communal pool, a terrace with views and all the comforts for a beach holiday." },
    nl: { short: "Appartement aan zee in Marbesa, op een steenworp van het strand.", long: "Apartamento Mar is een lichte accommodatie op enkele stappen van het strand van Marbesa, ideaal voor stellen of kleine gezinnen. Gemeenschappelijk zwembad, terras met uitzicht en alle comfort voor een strandvakantie." },
    fr: { short: "Appartement en bord de mer à Marbesa, à deux pas du sable.", long: "Apartamento Mar est un logement lumineux à quelques pas de la plage de Marbesa, idéal pour les couples ou les petites familles. Piscine commune, terrasse avec vue et tout le confort pour des vacances à la plage." },
    de: { short: "Apartment am Meer in Marbesa, wenige Schritte vom Sand.", long: "Apartamento Mar ist eine helle Unterkunft nur wenige Schritte vom Strand von Marbesa entfernt, ideal für Paare oder kleine Familien. Gemeinschaftspool, Terrasse mit Aussicht und aller Komfort für einen Strandurlaub." },
    it: { short: "Appartamento fronte mare a Marbesa, a due passi dalla sabbia.", long: "Apartamento Mar è un alloggio luminoso a pochi passi dalla spiaggia di Marbesa, ideale per coppie o piccole famiglie. Piscina condivisa, terrazza con vista e tutti i comfort per una vacanza al mare." },
  },
  "villa-blanca-sierra-blanca": {
    en: { short: "Exclusive villa in a gated community with 24h security and panoramic views.", long: "In the exclusive gated community of Sierra Blanca, Villa Blanca offers maximum privacy, 24-hour security and panoramic views of the sea and La Concha mountain. An exceptional property for large groups seeking absolute luxury." },
    nl: { short: "Exclusieve villa in een afgesloten complex met 24-uursbeveiliging en panoramisch uitzicht.", long: "In het exclusieve, afgesloten complex Sierra Blanca biedt Villa Blanca maximale privacy, 24-uursbeveiliging en panoramisch uitzicht op zee en de berg La Concha. Een uitzonderlijke woning voor grote groepen die absolute luxe zoeken." },
    fr: { short: "Villa exclusive dans un domaine sécurisé avec sécurité 24h et vue panoramique.", long: "Dans le domaine sécurisé exclusif de Sierra Blanca, Villa Blanca offre une intimité maximale, une sécurité 24h/24 et une vue panoramique sur la mer et la montagne de La Concha. Une propriété exceptionnelle pour les grands groupes en quête d'un luxe absolu." },
    de: { short: "Exklusive Villa in einer geschlossenen Anlage mit 24-Stunden-Sicherheit und Panoramablick.", long: "In der exklusiven, geschlossenen Wohnanlage Sierra Blanca bietet Villa Blanca maximale Privatsphäre, 24-Stunden-Sicherheit und Panoramablick auf das Meer und den Berg La Concha. Eine außergewöhnliche Immobilie für große Gruppen, die absoluten Luxus suchen." },
    it: { short: "Villa esclusiva in residence chiuso con sicurezza 24h e vista panoramica.", long: "Nell'esclusivo residence chiuso di Sierra Blanca, Villa Blanca offre la massima privacy, sicurezza 24 ore su 24 e vista panoramica sul mare e sulla montagna La Concha. Una proprietà eccezionale per grandi gruppi che cercano il lusso assoluto." },
  },
  "villa-oliva-la-zagaleta": {
    en: { short: "Mediterranean-style mansion in La Zagaleta, Europe's most prestigious estate.", long: "Villa Oliva is a unique opportunity to stay in La Zagaleta, considered Europe's most prestigious private estate. Mediterranean style, endless gardens, indoor and outdoor pools, and impeccable service for a truly luxurious stay." },
    nl: { short: "Mediterrane villa in La Zagaleta, het meest prestigieuze landgoed van Europa.", long: "Villa Oliva is een unieke kans om te verblijven in La Zagaleta, beschouwd als het meest prestigieuze privélandgoed van Europa. Mediterrane stijl, eindeloze tuinen, binnen- en buitenzwembaden en onberispelijke service voor een waarlijk luxueus verblijf." },
    fr: { short: "Demeure de style méditerranéen à La Zagaleta, le domaine le plus prestigieux d'Europe.", long: "Villa Oliva est une occasion unique de séjourner à La Zagaleta, considéré comme le domaine privé le plus prestigieux d'Europe. Style méditerranéen, jardins infinis, piscines intérieure et extérieure, et un service impeccable pour un séjour d'un luxe authentique." },
    de: { short: "Villa im mediterranen Stil in La Zagaleta, dem prestigeträchtigsten Anwesen Europas.", long: "Villa Oliva ist eine einzigartige Gelegenheit, in La Zagaleta zu wohnen, das als das prestigeträchtigste private Anwesen Europas gilt. Mediterraner Stil, endlose Gärten, Innen- und Außenpools und tadelloser Service für einen wahrhaft luxuriösen Aufenthalt." },
    it: { short: "Villa in stile mediterraneo a La Zagaleta, la tenuta più prestigiosa d'Europa.", long: "Villa Oliva è un'opportunità unica di soggiornare a La Zagaleta, considerata la tenuta privata più prestigiosa d'Europa. Stile mediterraneo, giardini infiniti, piscine interna ed esterna e un servizio impeccabile per un soggiorno di autentico lusso." },
  },
};

export function translateVillaText(
  slug: string,
  locale: Locale,
  fallback: { short: string; long: string },
): { short: string; long: string } {
  if (locale === "es") return fallback;
  return villaTextMap[slug]?.[locale] ?? fallback;
}
