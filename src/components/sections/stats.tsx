import { NumberTicker } from "@/components/ui/number-ticker";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { ParallaxMark } from "@/components/ui/scroll-backdrop";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="relative">
      <ParallaxMark
        className="-top-20 -right-28 h-64 w-64 opacity-[0.05] sm:-top-44 sm:-right-20 sm:h-[28rem] sm:w-[28rem] sm:opacity-[0.07]"
        y={[-90, 120]}
        rotate={[-12, 18]}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <StaggerGroup className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <NumberTicker
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-4xl font-extrabold tracking-tight text-brand-ink-strong sm:text-5xl"
              />
              <span className="mt-2 text-sm font-medium text-brand-ink/70">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
