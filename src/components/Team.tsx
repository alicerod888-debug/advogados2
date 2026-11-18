import { UserRound } from "lucide-react";
import Image from "next/image";
import { site, type Lawyer } from "@/lib/site";
import Reveal from "./Reveal";
export default function Team() {
  const list: Lawyer[] = site.lawyers.length ? site.lawyers : [{ name: "Perfil a ser preenchido", oab: "", areas: [], bio: "Adicione nome, inscrição na OAB, especialidades e fotografia autorizada em src/lib/site.ts." }];
  return (
    <section id="profissionais" className="bg-[#0d0c0a] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal><h2 className="font-serif text-4xl sm:text-6xl">Profissionais</h2></Reveal>
        <div className="mt-16 grid gap-16 md:grid-cols-2">
          {list.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1} className={`grid gap-6 sm:grid-cols-[220px_1fr] ${i % 2 ? "md:mt-24" : ""}`}>
              <div className="relative aspect-[3/4] overflow-hidden border border-gold/30">
                {l.photo ? <Image src={l.photo} alt={`Fotografia de ${l.name}`} fill sizes="220px" className="object-cover grayscale" /> : <div className="grid h-full place-items-center bg-gradient-to-b from-[#1a160e] to-ink"><UserRound className="h-16 w-16 text-gold/40" strokeWidth={0.8} /></div>}
              </div>
              <div className="self-end"><h3 className="font-serif text-3xl">{l.name}</h3>
                {l.oab && <p className="mt-1 text-sm text-gold">OAB {l.oab}</p>}
                {l.areas.length > 0 && <p className="mt-3 text-sm text-bone/60">{l.areas.join(", ")}</p>}
                <p className="mt-4 text-bone/70">{l.bio}</p></div>
            </Reveal>))}
        </div>
      </div>
    </section>
  );
}
