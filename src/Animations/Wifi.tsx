import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Wifi({ animateActive }: { animateActive: boolean }) {
  const arcs = [
    {
      d: "M8.5 13.5C9.5 12.5 10.5 12 12 12C13.5 12 14.5 12.5 15.5 13.5",
      delay: 0,
    },
    {
      d: "M5.5 10.5C7.5 8.5 9.5 7.5 12 7.5C14.5 7.5 16.5 8.5 18.5 10.5",
      delay: 0.3,
    },
    { d: "M2.5 7.5C5.5 4.5 8.5 3 12 3C15.5 3 18.5 4.5 21.5 7.5", delay: 0.5 },
  ];
  return ( 
    <div className="relative w-full h-[180px] flex items-center justify-center md:scale-[0.85] lg:scale-100">
      {/* LOCK */}
      <motion.div
        animate={
          animateActive
            ? {
                y: [0, 0, 0],
                filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
              }
            : { y: 0 }
        }
        transition={{
          duration: 3,
          repeat: animateActive ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="relative w-24 h-24 flex items-center justify-center mt-14 will-change-transfor"
      >
        {/* WIFI ARCS */}
        <div className="absolute -top-16 lg:-top-16 left-1/2 -translate-x-1/2 w-40 h-28">
          <svg viewBox="0 0 24 24" className="w-full h-full overflow-visible">
            {arcs.map((arc, i) => (
              <g key={i}>
                {/* Background Arc */}
                <path
                  d={arc.d}
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="opacity-20"
                />

                {/* Animated Glow */}
                <motion.path
                  d={arc.d}
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  animate={
                    animateActive
                      ? {
                          opacity: [0, 1, 0],
                          filter: [
                            "blur(0px) brightness(1)",
                            "blur(0.5px) brightness(1.5) drop-shadow(0 0 2px rgba(255,255,255,0.3))",
                            "blur(0px) brightness(1)",
                          ],
                        }
                      : { opacity: 0 }
                  }
                  transition={{
                    duration: 2.5,
                    repeat: animateActive ? Infinity : 0,
                    delay: arc.delay,
                    ease: "easeInOut",
                  }}
                />
              </g>
            ))}
          </svg>
        </div>

        <div className=" ">
          <Image
            src="/lock.png"
            alt="Lock"
            width={62}
            height={62}
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
