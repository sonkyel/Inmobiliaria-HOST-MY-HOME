# Marbella Host My Home

Web de alquiler vacacional (villas y apartamentos de lujo en Marbella). Catálogo con
filtros y reserva directa por **WhatsApp**. Hecha con Next.js + Tailwind CSS.

## Arrancar en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Cómo editar el contenido (sin programar)

### 1. Número de WhatsApp y contacto
Edita **`lib/site.ts`**:
- `whatsappNumber`: número real en formato internacional, **solo dígitos** (ej. España
  `+34 612 345 678` → `"34612345678"`).
- `email`, `instagram`, `city`: datos de contacto.

### 2. Alojamientos (villas / apartamentos)
Edita **`lib/villas.ts`**. Cada alojamiento es un objeto con:

| Campo | Significado |
|-------|-------------|
| `slug` | identificador para la URL (sin espacios, ej. `villa-aurora`) |
| `name` | nombre |
| `zone` | zona de Marbella (Puerto Banús, Golden Mile…) |
| `pricePerNight` | precio por noche en € |
| `bedrooms` / `bathrooms` / `guests` / `sizeM2` | capacidad y tamaño |
| `privatePool` | `true` o `false` |
| `badge` | etiqueta opcional: `"Last Minute"`, `"Oferta"`, `"Nuevo"`, `"Top ventas"` |
| `shortDescription` | texto corto de la tarjeta |
| `description` | descripción larga (página de detalle) |
| `amenities` | lista de servicios |
| `images` | lista de URLs de fotos |

> Las fotos actuales son **de ejemplo (Unsplash)**. Sustitúyelas por las reales: súbelas a
> `public/images/` y usa rutas como `/images/villa-aurora-1.jpg`.

### 3. Logo
El logo está en `public/logo.svg` (completo) y `public/logo-mark.svg` (solo el rombo, usado
en la barra superior). Son vectoriales y se ven nítidos a cualquier tamaño.

### 4. Banner de oferta
Texto editable en el diccionario de idiomas (ver más abajo), clave `promo`.

### 5. Idiomas (Español, Inglés, Neerlandés, Francés, Alemán, Italiano)
La web es multilingüe con un selector de banderas en la barra superior. El idioma elegido
se recuerda en el navegador.
- **Textos de la interfaz** (menú, hero, botones, secciones, footer): `lib/i18n.ts`.
- **Descripciones de las villas y servicios**: `lib/i18n-villas.ts`
  (`villaTextMap` para descripciones y `amenityMap` para los servicios).
- **Idioma por defecto**: cambia `DEFAULT_LOCALE` en `lib/i18n.ts` (ahora `"es"`).

> Cuando añadas una villa real, escribe su descripción en español en `lib/villas.ts` y,
> si quieres, sus traducciones en `lib/i18n-villas.ts`. Si falta una traducción, se muestra
> automáticamente el texto en español.

## Publicar online
Recomendado: desplegar gratis en [Vercel](https://vercel.com) (sube el proyecto y se
publica automáticamente). El dominio se puede conectar después.
