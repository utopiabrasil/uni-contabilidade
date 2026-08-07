import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyUni } from "@/components/sections/why-uni";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { WhatsappFab } from "@/components/ui/whatsapp-fab";
import { ScrollProgress } from "@/components/ui/scroll-backdrop";
import { PageBackdrop } from "@/components/ui/page-backdrop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <div className="relative overflow-x-clip">
        <PageBackdrop />
        <main>
          <Hero />
          <Stats />
          <Services />
          <HowItWorks />
          <WhyUni />
          <Testimonials />
          <Faq />
          <Cta />
        </main>
      </div>
      <Footer />
      <WhatsappFab />
    </>
  );
}
