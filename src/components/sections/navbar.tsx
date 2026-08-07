"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  type Variants,
} from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { UniLogo, UniMark } from "@/components/ui/logo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const menuPanel: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.25, delay: 0.15 } },
};

const menuList: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const menuItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.65, 0.34, 1] },
  },
  exit: { opacity: 0, y: 16, transition: { duration: 0.2 } },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  // trava o scroll do body enquanto o menu fullscreen está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.65, 0.34, 1] }}
      className={cn("fixed inset-x-0 top-0", open ? "z-[70]" : "z-50")}
    >
      <div
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between rounded-b-2xl px-4 transition-all duration-300 sm:px-6",
          scrolled && !open
            ? "border-x border-b border-brand-ink/8 bg-white/80 shadow-lg shadow-brand-ink/5 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <Link
          href="#inicio"
          aria-label="Uni Contabilidade Digital — início"
          onClick={() => setOpen(false)}
          className="relative z-[70]"
        >
          <UniLogo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-brand-ink/80 transition-colors hover:bg-brand-smoke hover:text-brand-ink-strong"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 font-display text-sm font-semibold text-white shadow-lg shadow-brand-orange/30 transition-all hover:bg-brand-orange-strong hover:shadow-brand-orange/40 active:scale-[0.97] sm:inline-flex"
          >
            Falar com especialista
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          {/* Hambúrguer animado */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="relative z-[70] inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-ink/10 bg-white/80 backdrop-blur transition-transform active:scale-90 lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute top-0 left-0 block h-0.5 w-5 rounded-full bg-brand-ink-strong"
              />
              <motion.span
                animate={open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-1/2 left-0 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-brand-ink-strong"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-0 left-0 block h-0.5 w-5 rounded-full bg-brand-ink-strong"
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile fullscreen */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[60] flex h-dvh flex-col overflow-hidden bg-white/92 backdrop-blur-2xl lg:hidden"
          >
            {/* aurora do menu */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-brand-blue/15 blur-[100px]" />
              <div className="absolute bottom-10 -left-24 h-72 w-72 rounded-full bg-brand-orange/15 blur-[100px]" />
              <UniMark className="absolute -right-16 bottom-[-4rem] h-64 w-64 opacity-[0.05]" />
            </div>

            <motion.nav
              variants={menuList}
              className="relative flex flex-1 flex-col justify-center gap-1 px-8 pt-16"
            >
              {site.nav.map((item, i) => (
                <motion.div key={item.href} variants={menuItem}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-3 py-3 active:scale-[0.98]"
                  >
                    <span className="font-display text-sm font-semibold text-brand-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[2rem] leading-tight font-bold tracking-tight text-brand-ink-strong transition-colors group-hover:text-brand-navy">
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-5 w-5 translate-y-1 text-brand-ink/30 transition-all group-hover:translate-x-0.5 group-hover:text-brand-orange" />
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={menuItem} className="mt-8">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-brand-orange px-6 py-4 font-display text-base font-semibold text-white shadow-xl shadow-brand-orange/30 active:scale-[0.97]"
                >
                  Falar com um especialista
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
              </motion.div>
            </motion.nav>

            <motion.div
              variants={menuItem}
              className="relative flex items-center justify-between px-8 pb-10 text-sm text-brand-ink/60"
            >
              <span>{site.phone}</span>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-navy"
              >
                @uni_contabilidade
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
