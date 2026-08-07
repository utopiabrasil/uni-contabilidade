"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Carrossel horizontal mobile com scroll-snap nativo (fluido e acessível)
 * e barra de progresso ligada ao scroll — padrão dos carrosséis do 21st.dev
 * e da seção de personas do antigravity.google.
 */
export function MobileCarousel({
  children,
  className,
  hint = "Arraste para explorar",
}: {
  children: ReactNode;
  className?: string;
  hint?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 220,
    damping: 32,
    mass: 0.4,
  });

  return (
    <div className={cn("relative", className)}>
      <div
        ref={ref}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2"
      >
        {children}
      </div>
      <div className="mt-5 flex items-center gap-4 px-1">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-brand-ink/8">
          <motion.div
            style={{ scaleX }}
            className="h-full origin-left rounded-full bg-gradient-to-r from-brand-orange to-brand-blue"
          />
        </div>
        <span className="shrink-0 text-xs font-medium text-brand-ink/50">
          {hint}
        </span>
      </div>
    </div>
  );
}
