import { site } from "@/lib/site";
import Reveal from "./Reveal";
export default function Testimonials() {
  const t = site.testimonials.length ? site.testimonials : [{ text: "Espaço reservado para depoimento real, com autorização expressa do cliente.", author: "Conteúdo demonstrativo" }];
  return (
    <section className="mx-auto max-w-5xl px-6 py-32">
      <Reveal><h2 className="font-serif text-4xl sm:text-6xl">Depoimentos</h2></Reveal>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {t.map((x) => (
          <Reveal key={x.author + x.text}><figure className="border-l border-gold pl-8"><blockquote className="font-serif text-2xl italic leading-snug">{x.text}</blockquote><figcaption className="mt-4 text-sm text-ash">{x.author}</figcaption></figure></Reveal>))}
      </div>
    </section>
  );
}
