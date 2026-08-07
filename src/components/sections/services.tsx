import {
  Calculator,
  LineChart,
  Repeat,
  Rocket,
  TrendingDown,
  Users,
  Check,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { ParallaxRings } from "@/components/ui/scroll-backdrop";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons = {
  rocket: Rocket,
  calculator: Calculator,
  "trending-down": TrendingDown,
  users: Users,
  repeat: Repeat,
  "line-chart": LineChart,
} as const;

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = icons[service.icon];
  return (
    <SpotlightCard
      spotlightColor={
        service.featured
          ? "rgba(243, 154, 74, 0.16)"
          : "rgba(91, 168, 233, 0.14)"
      }
      className={cn(
        "flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]",
        service.featured
          ? "border-brand-orange/25 bg-gradient-to-b from-brand-orange/8 via-white to-white shadow-lg shadow-brand-orange/10 hover:shadow-xl hover:shadow-brand-orange/15"
          : "border-brand-ink/8 bg-white shadow-sm hover:border-brand-blue/25 hover:shadow-lg hover:shadow-brand-navy/8"
      )}
    >
      <span
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-2xl",
          service.featured
            ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
            : "bg-brand-blue-soft text-brand-navy"
        )}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-brand-ink-strong">
        {service.title}
      </h3>
      <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-brand-ink/75">
        {service.description}
      </p>
      <ul className="mt-5 space-y-2">
        {service.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-center gap-2 text-sm font-medium text-brand-ink/85"
          >
            <span
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-full",
                service.featured
                  ? "bg-brand-orange/15 text-brand-orange-strong"
                  : "bg-brand-blue/15 text-brand-navy"
              )}
            >
              <Check className="h-3 w-3" />
            </span>
            {highlight}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
}

export function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      <ParallaxRings
        className="top-16 -right-28 h-[30rem] w-[30rem]"
        direction={1}
        y={[-70, 90]}
      />
      <ParallaxRings
        className="-bottom-40 -left-44 hidden h-[26rem] w-[26rem] lg:block"
        direction={-1}
        y={[80, -100]}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Serviços"
          title="Tudo o que sua empresa precisa, em um só lugar"
          description="Da abertura do CNPJ à estratégia de crescimento: soluções completas para empresas de todos os portes."
        />

        {/* Mobile: carrossel horizontal com snap */}
        <Reveal className="mt-12 sm:hidden">
          <MobileCarousel hint={`${services.length} serviços · arraste`}>
            {services.map((service) => (
              <div
                key={service.title}
                className="w-[82vw] max-w-[20rem] shrink-0 snap-center"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </MobileCarousel>
        </Reveal>

        {/* Tablet/desktop: grid simétrico */}
        <StaggerGroup className="mt-14 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
