"use client";

import Image from "next/image";

export default function InstantConnectionSection() {
  return (
    <section className="relative min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden text-white py-0 lg:py-50">

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-t from-transparent to-[#010101]" />

      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-10">

        <div className="flex flex-col items-center lg:block">

          {/* TOP HEADING */}
          <h1
  className="
    text-[34px] sm:text-[42px] md:text-[52px] lg:text-[64px]
    leading-[1.15] lg:leading-[1.02]
    tracking-[-0.02em]
    font-semibold
    font-['Space_Grotesk']
    text-white
    text-left
    -ml-8
    [text-shadow:0_0_6px_rgba(255,255,255,0.6),0_0_15px_rgba(255,255,255,0.4)]
    lg:relative lg:left-[32px] lg:mb-40
    mb-1
    max-w-[500px] lg:max-w-none
  "
>
  Instant Connection
</h1>

          {/* PHONES IMAGE */}
          <div className="relative flex justify-center items-center w-auto mb-1 lg:mb-0 lg:absolute lg:inset-0 z-10 pointer-events-none">

            <div className="relative w-[420px] sm:w-[480px] md:w-[520px] lg:w-[820px] h-[360px] sm:h-[420px] md:h-[520px] lg:h-[720px] lg:translate-x-5">

              <Image
                src="/nphones.webp"
                alt="Phones"
                fill
                className=" object-cover lg:object-contain drop-shadow-[0_60px_180px_rgba(0,0,0,0.9)]"
                loading="lazy"
              />

            </div>

          </div>

          {/* BOTTOM HEADING */}
          <h1
  className="
    text-[30px] sm:text-[40px] md:text-[52px] lg:text-[64px]
    font-['Space_Grotesk']
    leading-[1.15] lg:leading-[1.02]
    tracking-[-0.02em]
    font-semibold
    text-white
    w-full text-right
    [text-shadow:0_0_6px_rgba(255,255,255,0.6),0_0_15px_rgba(255,255,255,0.4)]

    lg:relative lg:right-20 lg:mt-8
    max-w-[420px] lg:max-w-none
  "
>
  With One Tap
</h1>

        </div>
      </div>

    </section>
  );
}