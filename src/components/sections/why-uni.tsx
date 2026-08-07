import { Cpu, MessageCircle, ShieldCheck, Wallet, X, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { ParallaxMark } from "@/components/ui/scroll-backdrop";
import { differentials } from "@/lib/site";

const icons = {
  "message-circle": MessageCircle,
  cpu: Cpu,
  "shield-check": ShieldCheck,
  wallet: Wallet,
} as const;

const comparison = [
  {
    traditional: "Resposta em dias, por e-mail ou telefone fixo",
    uni: "Resposta em minutos, direto no WhatsApp",
  },
  {
    traditional: "Papelada, carimbo e visita ao escritório",
    uni: "Tudo digital: documentos e assinaturas online",
  },
  {
    traditional: "Imposto apurado no piloto automático",
    uni: "Planejamento tributário ativo para pagar menos",
  },
  {
    traditional: "Você corre atrás de prazos e pendências",
    uni: "Monitoramento contínuo, sem surpresas",
  },
];

export function WhyUni() {
  return (
    <section id="por-que-a-uni" className="relative py-24 lg:py-32">
      <ParallaxMark
        className="top-1/4 -right-32 h-72 w-72 opacity-[0.05] sm:h-[26rem] sm:w-[26rem] sm:opacity-[0.06]"
        y={[-110, 130]}
        rotate={[-10, 16]}
      />
      <ParallaxMark
        className="bottom-16 left-[4%] h-14 w-14 opacity-[0.09] blur-[2px] lg:h-20 lg:w-20"
        y={[130, -170]}
        rotate={[0, -60]}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Por que a Uni"
          title="Contabilidade digital, atendimento de gente"
          description="Tecnologia para agilizar o repetitivo. Pessoas para orientar o que é estratégico. É assim que vamos além dos números."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => {
            const Icon = icons[item.icon];
            return (
              <StaggerItem
                key={item.title}
                className="rounded-3xl border border-brand-ink/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-blue/15 text-brand-orange-strong">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-ink-strong">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">
                  {item.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Comparativo */}
        <Reveal className="mt-16" delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-brand-ink/8 bg-white shadow-xl shadow-brand-navy/5">
            <div className="grid sm:grid-cols-2">
              <div className="border-b border-brand-ink/8 p-7 sm:border-r sm:border-b-0 sm:p-9">
                <p className="font-display text-sm font-semibold tracking-wide text-brand-ink/50 uppercase">
                  Contabilidade tradicional
                </p>
                <ul className="mt-5 space-y-4">
                  {comparison.map((row) => (
                    <li key={row.traditional} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-brand-smoke text-brand-ink/50">
                        <X className="h-3 w-3" />
                      </span>
                      <span className="text-[0.95rem] leading-snug text-brand-ink/65">
                        {row.traditional}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative bg-gradient-to-b from-brand-blue-soft/60 to-white p-7 sm:p-9">
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 h-1 w-full bg-gradient-to-r from-brand-orange to-brand-blue sm:h-full sm:w-1 sm:bg-gradient-to-b"
                />
                <p className="font-display text-sm font-semibold tracking-wide text-brand-navy uppercase">
                  Com a Uni
                </p>
                <ul className="mt-5 space-y-4">
                  {comparison.map((row) => (
                    <li key={row.uni} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-sm shadow-brand-orange/40">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-[0.95rem] font-medium leading-snug text-brand-ink-strong">
                        {row.uni}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
