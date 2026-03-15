"use client";
import Button from "@/Components/Button/Button";
import Image from "next/image";

export default function ServerCoverage() {
  return (
    <section className="w-full bg-transparent overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none  " />

      {/* ===== Top Content ===== */}
      <div className="flex flex-col items-center px-6">
        {/* Servers Neon Pill */}
        <div className="relative mb-6 inline-block">
          <div
            className="
              absolute inset-0
              rounded-full
              bg-lime-400/20
              blur-xl
              opacity-60
            "
          ></div>

          <div className="absolute inset-0 rounded-full overflow-hidden">
            <style>
              {`
                @keyframes spin-slow {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                  animation: spin-slow 3s linear infinite;
                }
              `}
            </style>
          </div>
        </div>

        {/* Top Label */}
        <div className="flex justify-center mb-3 lg:mb-8">
          <Button text={"Servers"} />
        </div>
      </div>

      {/* Global Server Coverage Heading */}
      <h2
  className="
    font-['Space_Grotesk']
    font-semibold
    text-[32px] md:text-[40px] lg:text-[48px]
    leading-[110%] md:leading-[100%]
    tracking-[-0.48px]
    text-center
    text-white
    [text-shadow:0_0_6px_rgba(255,255,255,0.6),0_0_15px_rgba(255,255,255,0.4)]
    mb-6 md:mb-24 lg:mb-16
  "
>
        
          Global {"  "}
          <span className="text-[#67FF1D] [text-shadow:0_0_8px_rgba(103,255,29,0.7),0_0_15px_rgba(103,255,29,0.4)]">
           Server <br className="md:hidden" />
          </span>{" "}
       Coverage
        </h2>
      
      {/* ===== World Map Container ===== */}
      {/* - min-h-[300px] ensures it doesn't disappear on tiny phones
          - h-[50vh] for mobile/tablet to keep it concise
          - lg:h-screen restores your perfect 14-inch layout
      */}
      <div className="relative w-full h-[28vh] md:h-[60vh] lg:h-[90vh] bg-[#010101]">
        <div className="absolute -top-4 md:-top-10 lg:-top-[10px] left-0 w-full h-28 pointer-events-none bg-gradient-to-b  z-10" />
        <Image
          src="/world-map-dots.png"
          alt="World Map"
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
          className="object-contain px-4 md:px-10 scale-y-90"
        />
      </div>
    </section>
  );
}