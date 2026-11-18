"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Scale, HardHat, Hourglass, Users, Building2, Gavel, ShoppingBag, KeyRound } from "lucide-react";
import { areas, waLink } from "@/lib/site";
import Reveal from "./Reveal";
const I = { Scale, HardHat, Hourglass, Users, Building2, Gavel, ShoppingBag, KeyRound } as const;
export default function Areas() {
  const [a, setA] = useState(0);
  const [ic, name, desc] = areas[a]; const Icon = I[ic];
  return (
    <section id="atuacao" className="bg-[#0d0c0a] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal><h2 className="max-w-2xl font-serif text-4xl sm:text-6xl">Áreas de atuação</h2></Reveal>
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ul role="tablist" aria-label="Áreas" className="border-gold/20 lg:border-r lg:pr-12">
            {areas.map(([, n], i) => (
              <li key={n}><button role="tab" aria-selected={a === i} onClick={() => setA(i)} onMouseEnter={() => setA(i)} onFocus={() => setA(i)}
                className={`relative flex w-full items-center justify-between border-b border-gold/15 py-5 text-left font-serif text-2xl transition-all duration-500 sm:text-3xl ${a === i ? "pl-6 text-gold" : "text-bone/60 hover:text-bone"}`}>
                {n}{a === i && <motion.span layoutId="bar" className="absolute bottom-0 left-0 top-0 w-px bg-gold" />}</button></li>))}
          </ul>
          <div className="relative min-h-[320px] border border-gold/25 p-10">
            <AnimatePresence mode="wait">
              <motion.div key={name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }} role="tabpanel">
                <Icon className="h-10 w-10 text-gold" strokeWidth={1} />
                <h3 className="mt-8 font-serif text-4xl">{name}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-bone/70">{desc}</p>
                <a href={waLink(`Olá! Gostaria de conversar sobre ${name}.`)} className="mt-8 inline-block border-b border-gold pb-1 text-sm text-gold">Conversar sobre este tema</a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
