"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const directions = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
} as const;

/**
 * Reveal com "rewind": por padrão (once=false) o elemento desanima ao sair
 * do viewport — rolando para cima, a página volta no tempo (estilo
 * rockstargames.com/VI). A saída é mais rápida que a entrada e ignora o
 * delay de entrada, para o rewind ser imediato.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: keyof typeof directions;
  once?: boolean;
}) {
  const offset = directions[direction];
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          ...offset,
          transition: { duration: 0.4, ease: "easeIn" },
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.21, 0.65, 0.34, 1] },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

const staggerParent: Variants = {
  // rewind desmonta em cascata na ordem inversa, mais rápido que a entrada
  hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerChild: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    transition: { duration: 0.35, ease: "easeIn" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.65, 0.34, 1] },
  },
};

export function StaggerGroup({
  children,
  className,
  once = false,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}
