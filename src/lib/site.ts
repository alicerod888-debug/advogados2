// EDITE AQUI: todos os dados do escritório. Campos vazios ficam ocultos no site.
export type Lawyer = { name: string; oab: string; areas: string[]; bio: string; photo?: string };
export const site = {
  name: "Nome do Escritório",
  url: "https://seudominio.com.br",
  whatsapp: "",                          // só dígitos com DDI+DDD. Ex.: 5574999999999
  phone: "", email: "", address: "", instagram: "", // instagram: usuário sem @
  whatsappMessage: "Olá! Gostaria de agendar uma conversa inicial com o escritório.",
  lawyers: [] as Lawyer[],
  testimonials: [] as { text: string; author: string }[],
};
export const waLink = (msg = site.whatsappMessage) =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}` : "#contato";
export const areas = [
  ["Scale", "Direito Civil", "Contratos, responsabilidade civil, obrigações e demais relações entre pessoas, analisadas com rigor técnico."],
  ["HardHat", "Direito Trabalhista", "Orientação a empregados e empregadores sobre vínculo, verbas e conformidade das relações de trabalho."],
  ["Hourglass", "Direito Previdenciário", "Análise de benefícios, tempo de contribuição e requerimentos junto ao INSS."],
  ["Users", "Direito de Família", "Divórcio, guarda, alimentos e sucessões, conduzidos com sensibilidade e discrição."],
  ["Building2", "Direito Empresarial", "Estruturação societária, contratos e consultoria jurídica preventiva para empresas."],
  ["Gavel", "Direito Criminal", "Acompanhamento técnico em investigações e processos, com respeito às garantias legais."],
  ["ShoppingBag", "Direito do Consumidor", "Defesa de direitos nas relações de consumo, de produtos, serviços e contratos."],
  ["KeyRound", "Direito Imobiliário", "Compra, venda, locação, regularização e contratos envolvendo imóveis."],
] as const;
