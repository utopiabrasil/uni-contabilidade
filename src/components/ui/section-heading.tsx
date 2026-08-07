import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  onDark?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.12em]",
          onDark
            ? "border-white/20 bg-white/10 text-white/90"
            : "border-brand-blue/30 bg-brand-blue-soft text-brand-navy"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-5 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]",
          onDark ? "text-white" : "text-brand-ink-strong"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            onDark ? "text-white/75" : "text-brand-ink/80"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
