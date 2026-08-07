"use client";

import { motion } from "motion/react";
import { site } from "@/lib/site";

export function WhatsappFab() {
  return (
    <motion.a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.21, 0.65, 0.34, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/35 sm:right-7 sm:bottom-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25 [animation-duration:2.4s]" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16.004 4C9.383 4 4 9.38 4 15.998a11.93 11.93 0 0 0 1.716 6.183L4 28l5.976-1.676a12.03 12.03 0 0 0 6.028 1.607h.005C22.625 27.93 28 22.55 28 15.998 28 9.38 22.62 4 16.004 4Zm0 21.906h-.004a9.94 9.94 0 0 1-5.07-1.387l-.364-.216-3.546.994.948-3.457-.237-.355a9.9 9.9 0 0 1-1.522-5.487c0-5.485 4.464-9.948 9.955-9.948 5.485 0 9.948 4.463 9.948 9.948 0 5.486-4.463 9.908-10.108 9.908Zm5.457-7.44c-.3-.15-1.77-.874-2.045-.974-.274-.1-.474-.15-.673.15-.2.3-.774.973-.949 1.173-.174.2-.35.225-.649.075-.3-.15-1.263-.466-2.406-1.485-.889-.793-1.489-1.772-1.664-2.071-.174-.3-.018-.462.132-.611.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.673-1.622-.923-2.221-.243-.583-.49-.504-.673-.513l-.573-.01c-.2 0-.524.075-.799.375-.274.3-1.048 1.024-1.048 2.496 0 1.473 1.073 2.896 1.223 3.096.15.2 2.112 3.224 5.116 4.52.715.309 1.273.493 1.708.631.718.228 1.371.196 1.887.119.576-.086 1.77-.723 2.02-1.422.25-.698.25-1.297.175-1.422-.075-.125-.275-.2-.574-.35Z" />
      </svg>
    </motion.a>
  );
}
