"use client";

import { useState } from "react";
import clsx from "clsx";
import Button from "@/Components/Button/Button";

function PricingCard({
  type,
  title,
  description,
  features,
  premium,
  className,
}: {
  type: "Basic" | "Premium";
  title: string;
  description: string;
  features: { label: string; available: boolean }[];
  premium?: boolean;
  className?: string;
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={clsx(
        /* Changed w-[420px] to be responsive: w-full on mobile, fixed only on lg+ */
        "relative w-full lg:w-[420px] max-w-[450px] lg:max-w-none rounded-[24px] p-[1px] transition-all duration-500",
        className,
      )}
      style={
        premium
          ? {
              background: "linear-gradient(270deg, #16B99E 0%, #BEEE03 100%)",
            }
          : {}
      }
    >
      <div
        className="rounded-[24px] bg-[#171717] p-6 lg:py-6 md:p-10 flex flex-col h-full"
        style={premium ? {} : { border: "1px solid #474747" }}
      >
        {/* HEADER SECTION */}
        <div className="min-h-auto lg:min-h-[190px]">
          <h2
            className="font-['Space_Grotesk'] text-[36px] md:text-[48px] font-bold tracking-[-0.01em]"
          >
            {title}
          </h2>

          <p
            className="font-['Dm_Sans']  mt-4 text-[18px] md:text-[20px] font-light tracking-[-0.01em] text-white"
            
          >
            {description}
          </p>
        </div>

        {/* BUTTONS */}
        {premium ? (
          <div className="mt-8 rounded-full p-[1.5px] bg-gradient-to-r from-[#BEEE03] to-[#16B99E]">
            <button
              onClick={() => {
                setClicked(true);
                setTimeout(() => setClicked(false), 200);
              }}
              className="w-full rounded-full bg-[#171717] text-white py-4 text-[20px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#BEEE03] hover:to-[#16B99E] active:scale-95"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              Get Premium
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setClicked(true);
              setTimeout(() => setClicked(false), 200);
            }}
            className="relative mt-8 w-full rounded-full py-4 text-[20px] font-semibold tracking-[-0.01em] transition-all duration-300 active:scale-95 border-2 border-white text-white hover:bg-white hover:text-black"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Get Basic
          </button>
        )}

        {/* FEATURES */}
        <ul className="mt-10 space-y-5">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-[18px] md:text-[20px] font-semibold tracking-[-0.01em]"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              {premium ? (
                <>
                  <span className="text-[#BEEE03] text-lg font-bold">✓</span>
                  <span className="text-white">{feature.label}</span>
                </>
              ) : (
                <>
                  <span className="text-lg">
                    {feature.available ? "•" : "×"}
                  </span>
                  <span className="text-white">{feature.label}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    /* Changed max-h-screen to min-h-screen to allow scrolling on mobile */
    <section
      id="pricing"
      className="relative min-h-screen bg-[#010101] text-white flex flex-col items-center py-16 px-6"
    >
      <div className="flex justify-center mb-3 lg:mb-8">
        <Button text={"Pricing"} />
      </div>

     <h1
  className="text-[32px] md:text-[48px] font-semibold tracking-[-0.01em] text-center
  [text-shadow:0_0_3px_rgba(255,255,255,0.6),0_0_4px_rgba(255,255,255,0.4)] font-['Space_Grotesk'] lg:mb-8 mb-4"
>
  Plans to Stay <br className="md:hidden" />
  <span className="text-[#67FF1D] [text-shadow:0_0_2px_rgba(103,255,29,0.7),0_0_15px_rgba(103,255,29,0.4)]">
    Secure
  </span>
</h1>

      {/* Changed flex-row to flex-col for mobile, lg:flex-row for your 14" screen */}
      <div className="mt-12 md:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start w-full max-w-7xl justify-center lg:scale-[0.84] xl:scale-[0.9] 2xl:scale-100 origin-top">
        <PricingCard
          type="Basic"
          title="Basic"
          description="Standard encryption that covers your basic, day-to-day online needs."
          features={[
            { label: "Less Server Options", available: true },
            { label: "Moderate Speed Servers", available: true },
            { label: "Split Tunneling", available: false },
            { label: "Wi-Fi Protection", available: false },
            { label: "Kill Switch", available: false },
          ]}
        />

        <PricingCard
          type="Premium"
          title="Premium"
          description="Experience faster, safer, fully unrestricted browsing with all the advanced perks."
          premium
          features={[
            { label: "Wide Server Options", available: true },
            { label: "Faster Speed Servers", available: true },
            { label: "Split Tunneling", available: true },
            { label: "Wi-Fi Protection", available: true },
            { label: "Kill Switch", available: true },
          ]}
        />
      </div>
    </section>
  );
}
