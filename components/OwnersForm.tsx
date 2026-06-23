"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { useLang } from "./LanguageProvider";
import { WhatsAppIcon, CheckIcon } from "./icons";

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand";

export default function OwnersForm() {
  const { d } = useLang();
  const f = d.owners.form;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState(f.typeApartamento);
  const [zone, setZone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      d.owners.waIntro,
      "",
      `${f.name}: ${name}`,
      phone ? `${f.phone}: ${phone}` : "",
      `${f.type}: ${type}`,
      zone ? `${f.zone}: ${zone}` : "",
      message ? `${f.message}: ${message}` : "",
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="own-name" className="block text-sm font-medium text-ink mb-1.5">
          {f.name}
        </label>
        <input
          id="own-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={f.namePh}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="own-phone" className="block text-sm font-medium text-ink mb-1.5">
          {f.phone}
        </label>
        <input
          id="own-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={f.phonePh}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="own-type" className="block text-sm font-medium text-ink mb-1.5">
          {f.type}
        </label>
        <select
          id="own-type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={`${fieldClass} cursor-pointer`}
        >
          <option value={f.typeApartamento}>{f.typeApartamento}</option>
          <option value={f.typeCasa}>{f.typeCasa}</option>
          <option value={f.typeAtico}>{f.typeAtico}</option>
          <option value={f.typeHabitacion}>{f.typeHabitacion}</option>
          <option value={f.typeOtro}>{f.typeOtro}</option>
        </select>
      </div>

      <div>
        <label htmlFor="own-zone" className="block text-sm font-medium text-ink mb-1.5">
          {f.zone}
        </label>
        <input
          id="own-zone"
          type="text"
          value={zone}
          onChange={(e) => setZone(e.target.value)}
          placeholder={f.zonePh}
          className={fieldClass}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="own-message" className="block text-sm font-medium text-ink mb-1.5">
          {f.message}
        </label>
        <textarea
          id="own-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={f.messagePh}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-whatsapp hover:bg-whatsapp-dark text-white px-7 py-4 font-semibold text-lg transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp-dark"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {f.submit}
        </button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-muted">
          <CheckIcon className="h-4 w-4 text-whatsapp" />
          {f.requiredNote}
        </p>
      </div>
    </form>
  );
}
