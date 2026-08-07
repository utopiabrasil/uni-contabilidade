"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { faq, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="Ficou com alguma dúvida? Fale com a gente no WhatsApp — respondemos rapidinho."
        />

        <div className="mt-12 space-y-3">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 0.05}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors duration-300",
                    isOpen
                      ? "border-brand-blue/30 bg-brand-blue-soft/40 shadow-sm"
                      : "border-brand-ink/8 bg-white hover:border-brand-ink/15"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-brand-ink-strong">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                        isOpen
                          ? "bg-brand-navy text-white"
                          : "bg-brand-smoke text-brand-ink"
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.21, 0.65, 0.34, 1] }}
                      >
                        <p className="px-6 pb-6 leading-relaxed text-brand-ink/80">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center" delay={0.2}>
          <p className="text-brand-ink/70">
            Não encontrou sua resposta?{" "}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-navy underline decoration-brand-blue/40 underline-offset-4 transition-colors hover:text-brand-orange-strong hover:decoration-brand-orange/40"
            >
              Chama no WhatsApp
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
