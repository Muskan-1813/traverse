import React from "react";
import Image from "next/image";
import MotionDiv from "@/utils/motionDivWrapper";
interface KillSwitchProps {
  isMobile: boolean;
  animateActive: boolean;
}

export default function KillSwitch({ isMobile, animateActive }: KillSwitchProps) {
  return (
    <div className="relative w-full h-40 mx-auto flex items-center justify-center md:scale-[0.85] lg:scale-100">

      {/* LEFT LINE */}
<MotionDiv
  initial={{ x: -3 }}
  animate={
    isMobile || animateActive
      ? { x: [-70, -3, -70] }
      : { x: -3 }
  }
  transition={{
    duration: 4,
    ease: [1, 1, 0.36, 1],
    repeat: isMobile || animateActive ? Infinity : 0,
  }}
  className="absolute left-[calc(50%-150px)] w-[150px] h-[3px] bg-[#B6FF00] rounded-full shadow-[0_0_15px_rgba(182,255,0,0.8)] z-20"
/>

{/* RIGHT LINE */}
<MotionDiv
  initial={{ x: 3 }}
  animate={
    isMobile || animateActive
      ? { x: [70, 3, 70] }
      : { x: 3 }
  }
  transition={{
    duration: 4,
    ease: [1, 1, 0.36, 1],
    repeat: isMobile || animateActive ? Infinity : 0,
  }}
  className="absolute right-[calc(50%-150px)] w-[150px] h-[3px] bg-[#B6FF00] rounded-full shadow-[0_0_15px_rgba(182,255,0,0.8)] z-20"
/>

      {/* SHIELD */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isMobile || animateActive
            ? {
                opacity: [1, 0, 1],
                scale: [1, 0, 1],
                filter: [
                  "drop-shadow(0 0 20px rgba(182,255,0,0.6))",
                  "drop-shadow(0 0 0px rgba(182,255,0,0))",
                  "drop-shadow(0 0 20px rgba(182,255,0,0.6))",
                ],
              }
            : { opacity: 0, scale: 0.8 }
        }
        transition={{
          duration: 4,
          ease: [1, 1, 0.36, 1],
          times: [0, 0.5, 1],
          repeat: isMobile || animateActive ? Infinity : 0,
        }}
        style={{
          width: "55.75px",
          height: "61.95px",
          position: "absolute",
        }}
        className="relative z-10 will-change-transform"
      >
        <Image
          src="/logo.png"
          alt="logo"
          fill
          className="object-contain"
        />
      </MotionDiv>
    </div>
  );
}