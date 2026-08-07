import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ParallaxMark } from "@/components/ui/scroll-backdrop";
import { testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";

const avatarStyles = [
  "bg-brand-orange/15 text-brand-orange-strong",
  "bg-brand-blue/15 text-brand-navy",
  "bg-brand-navy/10 text-brand-navy",
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  const initials = testimonial.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <figure className="w-[20rem] shrink-0 rounded-3xl border border-brand-ink/8 bg-white p-6 shadow-sm sm:w-[22rem]">
      <div className="flex gap-1" aria-label="Avaliação: 5 de 5 estrelas">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
        ))}
      </div>
      <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-brand-ink/85">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold",
            avatarStyles[index % avatarStyles.length]
          )}
        >
          {initials}
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-brand-ink-strong">
            {testimonial.name}
          </p>
          <p className="text-xs text-brand-ink/60">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3);

  return (
    <section id="depoimentos" className="relative py-24 lg:py-32">
      <ParallaxMark
        className="top-4 right-[6%] h-36 w-36 opacity-[0.06] sm:right-[10%] lg:h-52 lg:w-52"
        x={[-70, 110]}
        y={[60, -70]}
        rotate={[-20, 14]}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem confia na Uni, recomenda"
          description="Histórias reais de quem trocou a burocracia por clareza e tranquilidade."
        />
      </div>

      <div className="relative mt-14 flex flex-col gap-6">
        {/* fade lateral via mask — funciona sobre qualquer fundo */}
        <div className="flex gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-6 pr-6 hover:[animation-play-state:paused]">
            {[...firstRow, ...firstRow].map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} index={i} />
            ))}
          </div>
        </div>

        <div className="flex gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex shrink-0 animate-marquee-reverse gap-6 pr-6 hover:[animation-play-state:paused]">
            {[...secondRow, ...secondRow].map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
