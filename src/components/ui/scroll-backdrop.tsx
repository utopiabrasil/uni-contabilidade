"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { UniMark } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

type Range = [number, number];

/**
 * Donut da marca como elemento de fundo, reagindo ao scroll com
 * parallax (y/x) e rotação enquanto a seção atravessa o viewport.
 * Sempre decorativo: pointer-events-none, aria-hidden e opacidade
 * baixíssima definida pelo caller via className.
 */
export function ParallaxMark({
  className,
  y = [-48, 48],
  x,
  rotate = [-12, 12],
}: {
  className?: string;
  y?: Range;
  x?: Range;
  rotate?: Range;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yT = useTransform(scrollYProgress, [0, 1], y);
  const xT = useTransform(scrollYProgress, [0, 1], x ?? [0, 0]);
  const rT = useTransform(scrollYProgress, [0, 1], rotate);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute select-none", className)}
    >
      <motion.div
        style={reduceMotion ? undefined : { y: yT, x: xT, rotate: rT }}
        className="h-full w-full"
      >
        <UniMark className="h-full w-full" />
      </motion.div>
    </div>
  );
}

/**
 * Anéis concêntricos (eco do formato do logo) com um anel tracejado
 * e satélites nas cores da marca girando conforme o scroll.
 */
export function ParallaxRings({
  className,
  direction = 1,
  y = [0, 0],
}: {
  className?: string;
  direction?: 1 | -1;
  y?: Range;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 170 * direction]);
  const yT = useTransform(scrollYProgress, [0, 1], y);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={reduceMotion ? undefined : { y: yT }}
      className={cn(
        "pointer-events-none absolute select-none will-change-transform",
        className
      )}
    >
      {/* anéis estáticos */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <circle
          cx="200"
          cy="200"
          r="192"
          fill="none"
          stroke="rgba(73, 75, 77, 0.07)"
          strokeWidth="1.5"
        />
        <circle
          cx="200"
          cy="200"
          r="96"
          fill="none"
          stroke="rgba(243, 154, 74, 0.1)"
          strokeWidth="1.5"
        />
      </svg>
      {/* anel tracejado + satélites, girando com o scroll */}
      <motion.div
        style={reduceMotion ? undefined : { rotate }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <circle
            cx="200"
            cy="200"
            r="146"
            fill="none"
            stroke="rgba(91, 168, 233, 0.16)"
            strokeWidth="1.5"
            strokeDasharray="3 10"
          />
          <circle cx="200" cy="54" r="4.5" fill="rgba(243, 154, 74, 0.4)" />
          <circle cx="346" cy="200" r="3.5" fill="rgba(91, 168, 233, 0.4)" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/** Barra de progresso de leitura no topo da página. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-orange via-brand-blue to-brand-navy"
    />
  );
}
