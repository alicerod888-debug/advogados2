import { site } from "@/lib/site";
export default function Footer() {
  return <footer className="border-t border-gold/20 px-6 py-12 text-center text-xs leading-relaxed text-ash">
    <p className="font-serif text-xl text-bone">{site.name}</p>
    <p className="mx-auto mt-4 max-w-2xl">Conteúdo meramente informativo, em conformidade com o Código de Ética e Disciplina e o Provimento 205/2021 da OAB. Não há promessa de resultado nem captação de clientela. © {new Date().getFullYear()}</p></footer>;
}
