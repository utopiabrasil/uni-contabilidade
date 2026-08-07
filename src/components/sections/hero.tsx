"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, TrendingUp } from "lucide-react";
import { UniMark } from "@/components/ui/logo";
import { site } from "@/lib/site";

/**
 * As palavras destacadas compartilham um único gradiente contínuo:
 * cada uma recorta uma fatia do mesmo linear-gradient via background-position,
 * então o degradê flui do começo ao fim do trecho, mesmo com stagger por palavra.
 */
const headline: Array<{ word: string; slice?: string }> = [
  { word: "A" },
  { word: "contabilidade" },
  { word: "vai" },
  { word: "além", slice: "0%" },
  { word: "dos", slice: "50%" },
  { word: "números.", slice: "100%" },
];

/* Todas as entradas do hero usam whileInView com once:false — ao voltar ao
 * topo, a intro se re-orquestra; ao sair, faz rewind rápido (sem delay). */
const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
    transition: { duration: 0.3, ease: "easeIn" },
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      delay: 0.15 + i * 0.08,
      ease: [0.21, 0.65, 0.34, 1],
    },
  }),
};

function riseVariants(delay: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.35, ease: "easeIn" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.21, 0.65, 0.34, 1] },
    },
  };
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yAurora = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative pt-32 pb-20 sm:pt-40 lg:pb-28"
    >
      {/* Aurora de fundo com as cores da marca */}
      <motion.div
        style={{ y: yAurora }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-brand-blue/25 blur-[120px]" />
        <div className="absolute top-40 left-[-12%] h-[28rem] w-[28rem] rounded-full bg-brand-orange/20 blur-[110px]" />
        <div className="absolute bottom-[-6rem] left-1/3 h-[22rem] w-[22rem] rounded-full bg-brand-navy/10 blur-[100px]" />
        {/* grade sutil */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(73,75,77,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(73,75,77,0.055) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 35%, black 30%, transparent 75%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity: opacityHero }}
        className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
      >
        {/* Coluna de texto */}
        <div>
          <h1 className="font-display text-[2.6rem] leading-[1.08] font-extrabold tracking-tight text-brand-ink-strong sm:text-6xl lg:text-[4.1rem]">
            {headline.map(({ word, slice }, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="mr-[0.55rem] inline-block"
                style={
                  slice
                    ? {
                        backgroundImage:
                          "linear-gradient(90deg in oklab, #F39A4A, #5BA8E9)",
                        backgroundSize: "300% 100%",
                        backgroundPosition: `${slice} 0%`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }
                    : undefined
                }
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={riseVariants(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-brand-ink/85 sm:text-xl"
          >
            A Uni cuida dos impostos, da folha e de toda a burocracia da sua
            empresa — com tecnologia e um contador de verdade a uma mensagem de
            distância. Você foca no que importa: <strong className="font-semibold text-brand-ink-strong">crescer</strong>.
          </motion.p>

          <motion.div
            variants={riseVariants(0.85)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-orange px-6 py-3.5 font-display text-sm font-semibold whitespace-nowrap text-white shadow-xl shadow-brand-orange/35 transition-all hover:-translate-y-0.5 hover:bg-brand-orange-strong hover:shadow-2xl hover:shadow-brand-orange/40 active:scale-[0.97]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <MessageCircle className="h-4.5 w-4.5" />
              Falar com um especialista
            </a>
            <a
              href="#servicos"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-brand-ink/15 bg-white/80 px-6 py-3.5 font-display text-sm font-semibold whitespace-nowrap text-brand-ink-strong backdrop-blur transition-all hover:border-brand-navy/30 hover:bg-white active:scale-[0.97]"
            >
              Conhecer os serviços
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.ul
            variants={riseVariants(1.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-ink/70"
          >
            {["Sem fidelidade", "Resposta em minutos", "Atendimento humano"].map(
              (item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                  {item}
                </li>
              )
            )}
          </motion.ul>

          {/* Composição visual compacta — apenas mobile */}
          <motion.div
            variants={riseVariants(1.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="relative mt-10 flex h-44 items-center justify-center sm:hidden"
          >
            <div className="absolute inset-x-8 inset-y-0 rounded-full border border-dashed border-brand-blue/20" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full bg-white/70 p-6 shadow-xl shadow-brand-navy/10 ring-1 ring-brand-ink/5 backdrop-blur-xl"
            >
              <UniMark className="h-20 w-20" />
            </motion.div>
            <div className="absolute top-1 left-2 animate-float">
              <div className="flex items-center gap-2 rounded-xl border border-white/60 bg-white/90 px-3 py-2 shadow-lg shadow-brand-navy/10 backdrop-blur-xl">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <p className="font-display text-xs font-semibold text-brand-ink-strong">
                  Guias em dia
                </p>
              </div>
            </div>
            <div className="absolute right-0 bottom-2 animate-float-delayed">
              <div className="rounded-xl border border-white/60 bg-white/90 px-3.5 py-2 shadow-lg shadow-brand-navy/10 backdrop-blur-xl">
                <p className="flex items-center gap-1.5 text-[0.65rem] font-medium text-brand-ink/70">
                  <TrendingUp className="h-3 w-3 text-brand-orange" />
                  Economia no ano
                </p>
                <p className="font-display text-base font-bold text-brand-ink-strong">
                  R$ 12.480
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Composição visual */}
        <motion.div
          style={{ y: yVisual }}
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.92,
              transition: { duration: 0.4, ease: "easeIn" },
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.9,
                delay: 0.5,
                ease: [0.21, 0.65, 0.34, 1],
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="relative mx-auto hidden aspect-square w-full max-w-[30rem] sm:block"
        >
          {/* Anéis orbitais */}
          <div className="absolute inset-[6%] rounded-full border border-brand-ink/8" />
          <div className="absolute inset-[18%] rounded-full border border-dashed border-brand-blue/25" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[6%] rounded-full"
          >
            <span className="absolute top-1/2 -left-1.5 h-3 w-3 -translate-y-1/2 rounded-full bg-brand-orange shadow-lg shadow-brand-orange/50" />
            <span className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue" />
          </motion.div>

          {/* Donut da marca */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full bg-white/60 p-10 shadow-2xl shadow-brand-navy/10 backdrop-blur-xl ring-1 ring-brand-ink/5"
            >
              <UniMark className="h-40 w-40 lg:h-48 lg:w-48" />
            </motion.div>
          </div>

          {/* Card: guias em dia */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -24,
                transition: { duration: 0.3, ease: "easeIn" },
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, delay: 1.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="absolute top-[12%] -left-2"
          >
            <div className="flex animate-float items-center gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 shadow-xl shadow-brand-navy/10 backdrop-blur-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-brand-ink-strong">
                  Guias do mês
                </p>
                <p className="text-xs text-brand-ink/70">Todas pagas em dia</p>
              </div>
            </div>
          </motion.div>

          {/* Card: economia tributária */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 24,
                transition: { duration: 0.3, ease: "easeIn" },
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, delay: 1.3 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="absolute right-0 bottom-[26%]"
          >
            <div className="animate-float-delayed rounded-2xl border border-white/60 bg-white/85 px-5 py-4 shadow-xl shadow-brand-navy/10 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-medium text-brand-ink/70">
                <TrendingUp className="h-3.5 w-3.5 text-brand-orange" />
                Economia com planejamento
              </div>
              <p className="mt-1 font-display text-2xl font-bold text-brand-ink-strong">
                R$ 12.480<span className="text-sm font-semibold text-brand-ink/60">/ano</span>
              </p>
              <svg viewBox="0 0 120 32" className="mt-2 h-8 w-full" aria-hidden="true">
                <path
                  d="M0 26 C 14 24, 22 18, 34 19 S 56 12, 68 13 S 92 6, 104 7 L 120 4"
                  fill="none"
                  stroke="#F39A4A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="120" cy="4" r="3" fill="#F39A4A" />
              </svg>
            </div>
          </motion.div>

          {/* Card: mensagem do contador */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 24,
                transition: { duration: 0.3, ease: "easeIn" },
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 1.5 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="absolute bottom-[2%] left-[6%]"
          >
            <div className="flex max-w-[16rem] items-start gap-3 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-xl shadow-brand-navy/10 backdrop-blur-xl">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue-soft">
                <Sparkles className="h-4.5 w-4.5 text-brand-navy" />
              </span>
              <div>
                <p className="font-display text-xs font-semibold text-brand-ink-strong">
                  Seu contador · agora
                </p>
                <p className="mt-0.5 text-xs leading-snug text-brand-ink/75">
                  Apuração fechada! Este mês você pagou menos imposto. 🎉
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
