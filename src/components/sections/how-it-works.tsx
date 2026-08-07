"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { ParallaxMark } from "@/components/ui/scroll-backdrop";
import { steps, site } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="como-funciona" className="relative py-24 lg:py-32">
      <ParallaxMark
        className="-bottom-24 -left-32 h-72 w-72 opacity-[0.05] sm:-bottom-32 sm:-left-36 sm:h-[26rem] sm:w-[26rem] sm:opacity-[0.06]"
        y={[110, -130]}
        rotate={[12, -20]}
      />
      <ParallaxMark
        className="top-10 right-[6%] h-16 w-16 opacity-[0.09] blur-[2px] lg:h-24 lg:w-24"
        y={[150, -190]}
        rotate={[0, 70]}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Como funciona"
          title="Começar é mais simples do que você imagina"
          description="Quatro passos separam sua empresa de uma contabilidade sem fricção — e o primeiro é grátis."
        />

        <div ref={ref} className="relative mt-16">
          {/* Linha de progresso horizontal (desktop) */}
          <div className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-0.5 bg-brand-ink/10 lg:block">
            <motion.div
              style={{ scaleX: lineScale }}
              className="h-full origin-left bg-gradient-to-r from-brand-orange via-brand-blue to-brand-navy"
            />
          </div>

          {/* Linha de progresso vertical (mobile/tablet) */}
          <div className="absolute top-7 bottom-10 left-7 w-0.5 -translate-x-1/2 bg-brand-ink/10 lg:hidden">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top bg-gradient-to-b from-brand-orange via-brand-blue to-brand-navy"
            />
          </div>

          <StaggerGroup className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <StaggerItem key={step.title} className="relative">
                <div className="flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-ink/8 bg-white font-display text-lg font-extrabold text-brand-navy shadow-md shadow-brand-navy/8">
                    {String(i + 1).padStart(2, "0")}
                    <span className="absolute -inset-1 -z-10 rounded-[1.25rem] bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 blur-sm" />
                  </span>
                  <div className="pt-1 lg:pt-0">
                    <h3 className="font-display text-lg font-bold text-brand-ink-strong lg:mt-5">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-brand-ink/75">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-brand-navy px-7 py-4 font-display text-sm font-semibold whitespace-nowrap text-white shadow-xl shadow-brand-navy/25 transition-all hover:-translate-y-0.5 hover:bg-brand-navy-deep active:scale-[0.97] sm:text-base"
          >
            <span className="sm:hidden">Diagnóstico gratuito</span>
            <span className="hidden sm:inline">Começar meu diagnóstico gratuito</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
