"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
const links = [["Início", "#inicio"], ["O Escritório", "#escritorio"], ["Atuação", "#atuacao"], ["Profissionais", "#profissionais"], ["Diferenciais", "#diferenciais"], ["Contato", "#contato"]];
export default function Header() {
  const [s, setS] = useState(false), [o, setO] = useState(false);
  useEffect(() => { const f = () => setS(scrollY > 40); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${s || o ? "bg-ink/70 backdrop-blur-xl border-b border-gold/20 py-3" : "py-6"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="font-serif text-2xl tracking-wide">{site.name}</a>
        <nav aria-label="Principal" className="hidden gap-8 text-sm lg:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="group relative py-1 text-bone/80 hover:text-bone">{l}<span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" /></a>)}
        </nav>
        <button className="lg:hidden" aria-label={o ? "Fechar menu" : "Abrir menu"} aria-expanded={o} onClick={() => setO(!o)}>{o ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>{o && (
        <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "100vh" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden bg-ink lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-6 px-6 pt-10 font-serif text-4xl">
            {links.map(([l, h], i) => <motion.li key={h} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 + i * 0.06 }}><a href={h} onClick={() => setO(false)}>{l}</a></motion.li>)}
          </ul>
        </motion.nav>)}
      </AnimatePresence>
    </header>
  );
}
