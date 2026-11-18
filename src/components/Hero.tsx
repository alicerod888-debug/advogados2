"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { waLink } from "@/lib/site";
const cols = [80, 190, 300, 500, 610, 720];
export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 160]);
  const d = (i: number) => ({ initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 2.2, delay: 1.4 + i * 0.12, ease: "easeInOut" as const } });
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,#2a2113_0%,#080808_60%)]" />
      <motion.svg style={{ y }} viewBox="0 0 800 600" className="absolute right-[-10%] top-0 h-full w-[85%] opacity-70 lg:right-0 lg:w-[62%]" fill="none" stroke="#C6A15B" strokeWidth="1" aria-hidden preserveAspectRatio="xMidYMid slice">
        <motion.path d="M40 140h720L400 20z" {...d(0)} />
        <motion.path d="M40 160h720M40 175h720" {...d(1)} />
        {cols.map((x, i) => <motion.path key={x} d={`M${x - 22} 190h44M${x - 16} 190v330M${x} 190v330M${x + 16} 190v330M${x - 24} 520h48`} {...d(i + 2)} />)}
        <motion.path d="M20 540h760M0 560h800M-20 580h840" {...d(8)} />
      </motion.svg>
      <motion.div aria-hidden className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-gold/10 to-transparent" animate={{ x: ["0%", "500%"] }} transition={{ duration: 9, repeat: Infinity, ease: "linear", repeatDelay: 3 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-24">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 1.5 }} className="max-w-4xl font-serif text-5xl font-light leading-[1.05] sm:text-7xl lg:text-8xl">
          Justiça, estratégia e <span className="gold-text italic">compromisso</span> com seus direitos.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1, duration: 1 }} className="mt-8 max-w-xl text-lg text-bone/70">
          Atuação jurídica estratégica, com excelência técnica, transparência e dedicação em cada etapa.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }} className="mt-10 flex flex-wrap gap-4">
          <Btn href={waLink()}>Falar com o escritório</Btn>
          <a href="#atuacao" className="px-6 py-4 text-sm text-bone/80 underline decoration-gold/50 underline-offset-8 hover:decoration-gold">Conhecer as áreas de atuação</a>
        </motion.div>
      </div>
    </section>
  );
}
export function Btn({ href, children, ...p }: { href: string; children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a href={href} {...p} className="group relative inline-flex overflow-hidden border border-gold px-8 py-4 text-sm tracking-wide text-gold transition-colors duration-500 hover:text-ink">
    <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-500 ease-out group-hover:translate-x-0" /><span className="relative">{children}</span></a>;
}
