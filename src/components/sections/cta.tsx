import { ArrowRight, MessageCircle } from "lucide-react";
import { ParallaxMark } from "@/components/ui/scroll-backdrop";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <section className="relative px-4 pt-4 pb-24 sm:px-6 lg:pb-32">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-navy-deep px-6 py-16 text-center shadow-2xl shadow-brand-navy/30 sm:px-12 lg:py-24">
          {/* Aurora interna */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -top-24 left-[10%] h-72 w-72 rounded-full bg-brand-orange/25 blur-[100px]" />
            <div className="absolute -right-16 -bottom-24 h-80 w-80 rounded-full bg-brand-blue/30 blur-[110px]" />
            <ParallaxMark
              className="-right-16 -bottom-20 h-72 w-72 opacity-[0.07] lg:h-96 lg:w-96"
              y={[30, -30]}
              rotate={[0, 42]}
            />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-display text-xs font-semibold tracking-[0.12em] text-white/90 uppercase backdrop-blur">
              Diagnóstico gratuito
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl lg:leading-[1.12]">
              Pronto para uma contabilidade que vai{" "}
              <span className="bg-gradient-to-r from-brand-orange to-brand-blue bg-clip-text text-transparent">
                além dos números
              </span>
              ?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              Converse agora com um especialista, sem compromisso. Em poucos
              minutos você descobre como simplificar a rotina fiscal da sua
              empresa — e quanto pode economizar.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-brand-orange px-8 py-4 font-display text-base font-semibold text-white shadow-xl shadow-brand-orange/30 transition-all hover:-translate-y-0.5 hover:bg-brand-orange-strong active:scale-[0.97]"
              >
                <MessageCircle className="h-5 w-5" />
                Falar com um especialista
              </a>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 font-display text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/15 active:scale-[0.97]"
              >
                Enviar um e-mail
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-6 text-sm text-white/55">
              Sem fidelidade · Sem taxa de adesão · Resposta em minutos
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
