"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Canvas de fundo contínuo da página inteira (estilo labs.google/flow):
 * ondas de cor quase imperceptíveis + blobs de aurora que atravessam os
 * limites das seções e derivam lentamente com o scroll. As seções ficam
 * transparentes por cima, sem bordas nem faixas de cor.
 */

const blobs = [
  { className: "top-[6%] left-[-12%] h-[34rem] w-[34rem] bg-brand-orange/12", drift: 210 },
  { className: "top-[15%] right-[-10%] h-[38rem] w-[38rem] bg-brand-blue/12", drift: -170 },
  { className: "top-[34%] left-[-9%] h-[30rem] w-[30rem] bg-brand-navy/8", drift: 250 },
  { className: "top-[48%] right-[-12%] h-[36rem] w-[36rem] bg-brand-orange/9", drift: -210 },
  { className: "top-[64%] left-[-10%] h-[34rem] w-[34rem] bg-brand-blue/11", drift: 190 },
  { className: "top-[82%] right-[-9%] h-[30rem] w-[30rem] bg-brand-navy/7", drift: -150 },
] as const;

function DriftBlob({
  className,
  drift,
}: {
  className: string;
  drift: number;
}) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, drift]);

  return (
    <motion.div
      style={reduceMotion ? undefined : { y }}
      className={`absolute rounded-full blur-[140px] will-change-transform ${className}`}
    />
  );
}

export function PageBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Ondas verticais de cor — transições em escala muito maior que as seções */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f7fafd 12%, #fbfcfe 24%, #ffffff 38%, #fdf9f4 52%, #ffffff 66%, #f6f9fc 80%, #ffffff 92%, #f8f9fa 100%)",
        }}
      />
      {blobs.map((blob, i) => (
        <DriftBlob key={i} className={blob.className} drift={blob.drift} />
      ))}
    </div>
  );
}
