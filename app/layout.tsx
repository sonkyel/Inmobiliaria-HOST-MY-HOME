import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { LanguageProvider } from "@/components/LanguageProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marbellahostmyhome.com"),
  title: {
    default: "Marbella Host My Home — Villas y apartamentos de lujo en Marbella",
    template: "%s | Marbella Host My Home",
  },
  description:
    "Alquiler vacacional de villas y apartamentos de lujo en Marbella: piscina privada, vistas al mar y las mejores zonas. Reserva por WhatsApp.",
  keywords: [
    "alquiler vacacional Marbella",
    "villas de lujo Marbella",
    "apartamentos Marbella",
    "Puerto Banús",
    "Nueva Andalucía",
    "Golden Mile",
  ],
  openGraph: {
    title: "Marbella Host My Home — Villas y apartamentos de lujo en Marbella",
    description:
      "Alquiler vacacional de villas y apartamentos de lujo en Marbella. Reserva por WhatsApp.",
    type: "website",
    locale: "es_ES",
    siteName: "Marbella Host My Home",
  },
  icons: {
    icon: "/logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloating />
        </LanguageProvider>
      </body>
    </html>
  );
}
