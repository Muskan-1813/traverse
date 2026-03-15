import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Split({ animateActive }: { animateActive: boolean }) {
  return (
    <div className="relative w-72 h-72 mx-auto mb-20 flex items-center justify-center scale-[0.7] md:scale-[0.85] lg:scale-100">
      <motion.div
        animate={
          animateActive
            ? { scale: 1.4, opacity: 0.15 }
            : { scale: 1, opacity: 0.2 }
        }
        className="absolute w-48 h-48 rounded-full will-change-transform bg-[#B6FF00] blur-2xl lg:blur-2xl pointer-events-none"
      />

      <motion.div
        animate={
          animateActive
            ? {
                filter:
                  "brightness(1.1) drop-shadow(0 0 10px rgba(182, 255, 0, 0.3))",
                scale: 1.05,
              }
            : {
                filter: "brightness(0.5) drop-shadow(0_0_0px_rgba(182,255,0,0))",
                scale: 1,
              }
        }
        transition={{ duration: 0.4 }}
        className="relative -top-12 w-32 will-change-transform h-32 lg:w-44 lg:h-36 md:h-40 z-10"
      >
        <Image
          src="/shield.png"
          alt="Shield"
          fill
          loading="lazy"
          className="object-contain"
        />
      </motion.div>

      <motion.div
        animate={
          animateActive
            ? {
                x: [0, 0, 0],
                y: [-50, -30, -50],
                scale: [1, 1, 1],
                opacity: [1, 1, 1],
              }
            : { x: 0, y: -50, opacity: 1 }
        }
        transition={{
          repeat: animateActive ? Infinity : 0,
          duration: 4,
          ease: "easeInOut",
        }}
        className="absolute left-12 top-9 w-20 h-20 z-20 will-change-transform pointer-events-none mb-20"
      >
        <Image
          src="/leftarrow.png"
          alt=""
          fill
          loading="lazy"
          className="object-contain"
        />
      </motion.div>

      <motion.div
        animate={
          animateActive
            ? {
                x: [0, 0, 0],
                y: [-50, -30, -50],
                scale: [1, 1, 1],
                opacity: [1, 0.5, 1],
              }
            : { x: 0, y: -50, opacity: 1 }
        }
        transition={{
          repeat: animateActive ? Infinity : 0,
          duration: 4,
          ease: "easeInOut",
        }}
        className="absolute right-12 top-9 w-20 h-20 z-20 will-change-transform pointer-events-none mb-40"
      >
        <Image
          src="/rightarrow.png"
          alt=""
          fill
          loading="lazy"
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
