import { HeartHandshake, Compass, Eye, ShieldCheck, BookOpenCheck } from "lucide-react";
import Reveal from "./Reveal";
const d = [[HeartHandshake, "Atendimento personalizado", "Cada cliente é ouvido com atenção e acompanhado de perto."], [Compass, "Estratégia jurídica", "Planejamento cuidadoso, desenhado para o seu caso."], [Eye, "Transparência", "Informação clara sobre cenários, etapas e custos."], [ShieldCheck, "Comprometimento", "Dedicação e responsabilidade em todas as etapas."], [BookOpenCheck, "Excelência técnica", "Estudo constante da legislação e da jurisprudência."]] as const;
export default function Differentials() {
  return (
    <section id="diferenciais" className="mx-auto max-w-7xl px-6 py-32">
      <Reveal><h2 className="max-w-2xl font-serif text-4xl sm:text-6xl">O que orienta o nosso trabalho</h2></Reveal>
      <div className="mt-16 grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-6">
        {d.map(([Ic, t, p], i) => (
          <Reveal key={t} delay={i * 0.08} className={`bg-ink p-8 ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
            <Ic className="h-7 w-7 text-gold" strokeWidth={1.2} /><h3 className="mt-6 font-serif text-2xl">{t}</h3><p className="mt-2 text-bone/60">{p}</p></Reveal>))}
      </div>
    </section>
  );
}
