"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { waLink } from "@/lib/site";
import { Btn } from "./Hero";
export default function Highlight() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  return (
    <section ref={ref} className="relative overflow-hidden border-y border-gold/30 py-40 text-center">
      <motion.div style={{ x }} aria-hidden className="absolute inset-0 flex items-center whitespace-nowrap font-serif text-[22vw] font-light text-gold/[0.05]">Defesa Defesa Defesa</motion.div>
      <div className="relative mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-4xl leading-tight sm:text-6xl">Seus direitos merecem uma defesa à altura.</h2>
        <div className="mt-12"><Btn href={waLink()} target="_blank" rel="noopener noreferrer">Entrar em contato pelo WhatsApp</Btn></div>
      </div>
    </section>
  );
}
