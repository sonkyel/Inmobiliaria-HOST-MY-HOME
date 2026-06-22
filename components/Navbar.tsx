"use client";

import Link from "next/link";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLang } from "./LanguageProvider";

export default function Navbar() {
  const { d } = useLang();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-line">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-[72px] flex items-center justify-between gap-4">
        <Logo />

        <div className="hidden lg:flex items-center gap-8 text-charcoal font-medium">
          <Link href="/#villas" className="hover:text-brand transition-colors duration-200">
            {d.nav.accommodations}
          </Link>
          <Link href="/#zonas" className="hover:text-brand transition-colors duration-200">
            {d.nav.zones}
          </Link>
          <Link href="/#servicios" className="hover:text-brand transition-colors duration-200">
            {d.nav.services}
          </Link>
          <Link href="/#contacto" className="hover:text-brand transition-colors duration-200">
            {d.nav.contact}
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <WhatsAppButton
            message={d.wa.general}
            label="WhatsApp"
            className="!px-4 !py-2.5 text-sm"
          />
        </div>
      </nav>
    </header>
  );
}
