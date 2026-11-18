import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const desc = "Escritório de advocacia com atuação estratégica, excelência técnica e transparência em Direito Civil, Trabalhista, Previdenciário, Família, Empresarial, Criminal, Consumidor e Imobiliário.";
export const metadata: Metadata = {
  metadataBase: new URL(site.url), title: { default: `${site.name} | Advocacia estratégica`, template: `%s | ${site.name}` }, description: desc,
  alternates: { canonical: "/" }, openGraph: { title: `${site.name} | Advocacia estratégica`, description: desc, url: site.url, siteName: site.name, locale: "pt_BR", type: "website" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#080808" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}><body>{children}</body></html>;
}
