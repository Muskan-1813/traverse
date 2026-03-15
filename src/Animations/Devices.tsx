import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Devices({ animateActive }: { animateActive: boolean }) {
  return (
    <div className="relative w-full h-[220px] flex items-center justify-center lg:overflow-hidden  scale-[0.7] md:scale-[0.85] lg:scale-100">
      <div className="relative w-[320px] h-[160px] z-10 mb-20 ">
        <Image
          src="/devices.png"
          alt="Devices"
          fill
          loading="lazy"
          sizes="320px"
          className="object-contain"
        />
      </div>

      <motion.div
        animate={
          animateActive
            ? {
                x: ["-190px", "195px", "195px", "-190px"],
                zIndex: 20,
                scale: [1, 1, 1, 1]
              }
            : { x: "-190px", zIndex: 20, scale: 1 }
        }
        transition={
          animateActive
            ? {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.45, 0.55, 1],
              }
            : { duration: 0.5 }
        }
        className="absolute w-24 h-24 will-change-transform drop-shadow-[0_0_30px_rgba(124,255,0,0.6)] mb-20"
      >
        <Image
          src="/shield.png"
          alt="Shield"
          fill
          loading="lazy"
          sizes="96px"
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
