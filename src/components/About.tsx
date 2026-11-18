import Reveal from "./Reveal";
const items = [["Filosofia", "Cada caso é conduzido com análise técnica, planejamento e respeito à singularidade de quem nos procura."], ["Compromisso", "Comunicação clara, prazos acompanhados de perto e informação honesta sobre cada etapa, sem promessas de resultado."], ["Método", "Estudo aprofundado dos fatos e da legislação para construir a estratégia mais adequada a cada situação."]];
export default function About() {
  return (
    <section id="escritorio" className="mx-auto grid max-w-7xl gap-16 px-6 py-32 lg:grid-cols-12">
      <Reveal className="lg:col-span-5">
        <h2 className="font-serif text-4xl leading-tight sm:text-6xl">Advocacia feita com método, presença e discrição.</h2>
        <div className="mt-8 h-px w-24 bg-gold" />
        <p className="mt-8 max-w-md text-bone/70">Um escritório dedicado a oferecer orientação jurídica séria e personalizada, com atenção ao detalhe e à ética profissional.</p>
      </Reveal>
      <div className="lg:col-span-6 lg:col-start-7 lg:pt-24">
        {items.map(([t, p], i) => (
          <Reveal key={t} delay={i * 0.1} x={40}><div className="border-t border-gold/30 py-8"><h3 className="font-serif text-2xl text-gold">{t}</h3><p className="mt-3 max-w-lg text-bone/70">{p}</p></div></Reveal>))}
      </div>
    </section>
  );
}
