"use client";
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const PlanetAnimation = dynamic(() => import("@/Animations/PlanetAnimation"), {
  ssr: false,
});

const Performance = dynamic(() => import("@/Animations/Performance"), {
  ssr: false,
  loading: () => null,
});

const Devices = dynamic(() => import("@/Animations/Devices"), {
  ssr: false,
  loading: () => null,
});

const Split = dynamic(() => import("@/Animations/Split"), {
  ssr: false,
  loading: () => null,
});

const Wifi = dynamic(() => import("@/Animations/Wifi"), {
  ssr: false,
  loading: () => null,
});

const KillSwitch = dynamic(() => import("@/Animations/KillSwitch"), {
  ssr: false,
  loading: () => null,
});

interface Props {
  title: string;
  desc: string;
  type: string;
}

export default function FeatureCard({ title, desc, type }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });


  const animateActive = inView && (isMobile || isHovered);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  return (
    <div
      ref={ref}
      className="relative rounded-[22px] p-8 h-[290px] w-full overflow-hidden border border-white/[0.06] bg-[linear-gradient(180deg,#0B0B0B_0%,#050505_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
      // HOVER LOGIC MOVED TO MAIN CARD WRAPPER
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      {/* Top Highlight */}
      <div className="absolute inset-0 rounded-[32px] pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />

      {/* Title */}
      <h3 className="font-['Space_Grotesk'] font-medium text-[20px] md:text-[20px] leading-[100%] tracking-[-0.01em] text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-white text-[13px] text-base">{desc}</p>

      {/* Animation Area */}
      <div className="absolute bottom-5 left-6 right-6 h-40 pointer-events-none">
        {/* ================= PLANET ================= */}
        {inView && type === "planet" && (
          <PlanetAnimation animateActive={animateActive} />
        )}

        {/* ================= PERFORMANCE ================= */}
        {inView && type === "performance" && (
          <Performance animateActive={animateActive} />
        )}
        {/* ================= DEVICES ================= */}
        {inView && type === "devices" && (
          <Devices animateActive={animateActive} />
        )}

        {/* ================= SPLIT ================= */}
        {inView && type === "split" && <Split animateActive={animateActive} />}

        {/* ================= WIFI ================= */}
        {inView && type === "wifi" && <Wifi animateActive={animateActive} />}
        {/* ================= KILL SWITCH ================= */}
        {inView && type === "kill" && (
          <KillSwitch isMobile={isMobile} animateActive={animateActive} />
        )}
      </div>
    </div>
  );
}
