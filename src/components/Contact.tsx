"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { site, waLink } from "@/lib/site";
import Reveal from "./Reveal";
export default function Contact() {
  const [f, setF] = useState({ nome: "", tel: "", msg: "" });
  const send = (e: React.FormEvent) => { e.preventDefault(); window.open(waLink(`Olá! Meu nome é ${f.nome}. ${f.msg} Contato: ${f.tel}`), "_blank", "noopener"); };
  const row = "flex items-center gap-4 text-bone/80 hover:text-gold";
  const inp = "w-full border-b border-gold/30 bg-transparent py-3 text-bone outline-none transition-colors focus:border-gold";
  return (
    <section id="contato" className="mx-auto grid max-w-7xl gap-16 px-6 py-32 lg:grid-cols-2">
      <Reveal>
        <h2 className="font-serif text-4xl sm:text-6xl">Vamos conversar sobre o seu caso.</h2>
        <ul className="mt-12 space-y-5">
          {site.whatsapp && <li><a className={row} href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle className="text-gold" />WhatsApp</a></li>}
          {site.phone && <li><a className={row} href={`tel:${site.phone}`}><Phone className="text-gold" />{site.phone}</a></li>}
          {site.email && <li><a className={row} href={`mailto:${site.email}`}><Mail className="text-gold" />{site.email}</a></li>}
          {site.instagram && <li><a className={row} href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer"><Instagram className="text-gold" />@{site.instagram}</a></li>}
          {site.address && <li className="flex items-center gap-4 text-bone/80"><MapPin className="text-gold" />{site.address}</li>}
          {!site.whatsapp && !site.phone && !site.email && <li className="text-ash">Preencha os dados de contato em src/lib/site.ts.</li>}
        </ul>
        {site.address && <iframe title="Mapa" loading="lazy" className="mt-8 h-56 w-full border border-gold/30 grayscale invert" src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`} />}
      </Reveal>
      <Reveal delay={0.15}>
        <form onSubmit={send} className="space-y-8 border border-gold/25 p-8">
          <label className="block text-sm text-ash">Nome<input required className={inp} value={f.nome} onChange={(e) => setF({ ...f, nome: e.target.value })} autoComplete="name" /></label>
          <label className="block text-sm text-ash">Telefone<input required type="tel" className={inp} value={f.tel} onChange={(e) => setF({ ...f, tel: e.target.value })} autoComplete="tel" /></label>
          <label className="block text-sm text-ash">Como podemos ajudar?<textarea required rows={4} className={inp} value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} /></label>
          <button className="w-full bg-gold py-4 text-ink transition hover:bg-bone">Enviar pelo WhatsApp</button>
          <p className="text-xs text-ash">Ao enviar, você abre uma conversa no WhatsApp com a mensagem preenchida. Não compartilhe informações sigilosas neste primeiro contato.</p>
        </form>
      </Reveal>
    </section>
  );
}
