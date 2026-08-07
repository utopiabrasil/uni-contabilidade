"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

/**
 * Contador animado com rewind: ao sair do viewport o número regride a zero,
 * e reconta quando o usuário volta — acompanhando o efeito de "voltar no
 * tempo" do restante da página.
 */
export function NumberTicker({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 55, stiffness: 130 });
  const inView = useInView(ref, { margin: "-60px" });

  useEffect(() => {
    motionValue.set(inView ? value : 0);
  }, [inView, motionValue, value]);

  useEffect(
    () =>
      spring.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(latest)}${suffix}`;
        }
      }),
    [spring, suffix]
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
