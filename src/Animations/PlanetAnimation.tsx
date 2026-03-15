import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PlanetAnimation({ animateActive }: { animateActive: boolean }) {
  return (
    <motion.div
      animate={animateActive ? "hover" : "rest"}
      className="relative w-[350px] h-full scale-[0.7] md:scale-[0.85] lg:scale-100"
    >
      <div className="absolute bottom-0 -left-10 w-40 h-40">
        <Image src="/planet.png" alt="" fill className="object-contain" />

        <motion.div
          variants={{
            rest: { rotate: 0 },
            hover: {
              rotate: 360,
              transition: {
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              },
            },
          }}
          className="absolute inset-0"
        >
          <Image
            src="/dashed-lines.png"
            alt=""
            fill
            className="object-contain opacity-80"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-3.5 left-[80px]">
        {[
          { angle: -12, length: 280 },
          { angle: -4, length: 280 },
          { angle: 6, length: 280 },
          { angle: 12, length: 290 },
        ].map((line, i) => (
          <div
            key={i}
            className="relative mb-6 origin-left flex items-center"
            style={{
              width: `${line.length}px`,
              transform: `rotate(${line.angle}deg)`,
            }}
          >
            <div className="absolute w-full h-[2px] border-t border-dashed border-white/40" />

            <motion.div
              variants={{
                rest: { translateX: 0, opacity: 0 },
hover: {
  translateX: line.length,
                  opacity: [0, 1, 1, 0],
                  transition: {
                    repeat: Infinity,
                    duration: line.length / 60,
                    ease: "linear",
                    delay: i * 0.6,
                  },
                },
              }}
              className={`absolute -translate-y-[100px] w-2.5 h-2.5 rounded-full will-change-transform ${
                i % 2 === 0
                  ? "bg-lime-400 shadow-[0_0_14px_rgba(124,255,0,0.9)]"
                  : "bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
              }`}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
