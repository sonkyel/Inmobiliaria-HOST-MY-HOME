"use client";

import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon, PinIcon } from "./icons";
import { whatsappLink } from "@/lib/whatsapp";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { d } = useLang();

  return (
    <footer id="contacto" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-white/70 max-w-xs leading-relaxed">{d.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-4">{d.footer.linksTitle}</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/#villas" className="hover:text-white transition-colors duration-200">
                  {d.nav.accommodations}
                </Link>
              </li>
              <li>
                <Link href="/#zonas" className="hover:text-white transition-colors duration-200">
                  {d.nav.zones}
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="hover:text-white transition-colors duration-200">
                  {d.nav.services}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-4">{d.footer.contactTitle}</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2.5">
                <PinIcon className="h-5 w-5 text-brand-light shrink-0" />
                {site.city}
              </li>
              <li>
                <a
                  href={whatsappLink(d.wa.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
                >
                  <WhatsAppIcon className="h-5 w-5 text-whatsapp shrink-0" />
                  {d.footer.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
                >
                  <InstagramIcon className="h-5 w-5 text-brand-light shrink-0" />
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>© {new Date().getFullYear()} {site.name}. {d.footer.rights}</p>
          <p>{d.footer.madeFor}</p>
        </div>
      </div>
    </footer>
  );
}
