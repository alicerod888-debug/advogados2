import Loader from "@/components/Loader"; import Header from "@/components/Header"; import Hero from "@/components/Hero";
import About from "@/components/About"; import Areas from "@/components/Areas"; import Differentials from "@/components/Differentials";
import Highlight from "@/components/Highlight"; import Team from "@/components/Team"; import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact"; import Footer from "@/components/Footer"; import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
export default function Home() {
  const ld = { "@context": "https://schema.org", "@type": "LegalService", name: site.name, url: site.url, ...(site.phone && { telephone: site.phone }), ...(site.address && { address: site.address }) };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <Loader /><Header />
    <main><Hero /><About /><Areas /><Differentials /><Highlight /><Team /><Testimonials /><Contact /></main>
    <Footer /><WhatsAppFloat />
  </>);
}
