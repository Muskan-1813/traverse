import React from "react";
import { motion } from "framer-motion";

export default function Performance({ animateActive }: { animateActive: boolean }) {
  return (
    <div className="relative w-full h-full scale-[0.7] md:scale-[0.85] lg:scale-100 ">
      {/* Line length and position restored to your original right-[80px] */}
      <div className="absolute bottom-3 lg:bottom-9 md:bottom-9 left-0 right-[30px] lg:right-[80px] md:right-[80px] flex flex-col justify-between h-[120px] z-10">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="relative h-[1px] w-full bg-gradient-to-r from-[#B6FF00]/10 via-[#B6FF00]/40 to-transparent"
          >
            <motion.div
              /* - initial: positioned at -4px to be "half-hidden" on the left 
 - animate: travels to 140% to reach the planet even though the line is shorter
 */
              initial={{ left: "-4px", opacity: 0.5 }}
              animate={
                animateActive
                  ? {
                      left: ["-4px", "130%"],
                      opacity: [0.5, 1, 1, 0],
                    }
                  : { left: "-4px", opacity: 0.5 }
              }
              transition={{
                repeat: animateActive ? Infinity : 0,
                duration: 2.5 + i * 0.5,
                ease: "circIn",
                delay: i * 0.4,
                times: [0, 0.1, 0.85, 1], // Stays visible until 85% of the way to the planet
              }}
              className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 will-change-transform rounded-full blur-[0.5px] ${
                i === 0
                  ? "bg-yellow-400 shadow-[0_0_12px_#fbbf24]"
                  : i === 1 || i === 3
                  ? "bg-teal-400 shadow-[0_0_12px_#2dd4bf]"
                  : "bg-white shadow-[0_0_12px_#ffffff]"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="absolute top-18 lg:-translate-y-[60px] -translate-y-[30px] right-[-200px] md:right-[-130px] lg:right-[-130px] w-[220px] h-[220px] rounded-full border border-[#7CFF00]/30 bg-gradient-to-l from-[#7CFF00]/10 to-transparent shadow-[0_0_80px_rgba(124,255,0,0.15)]" />
    
    </div>
  );
}
