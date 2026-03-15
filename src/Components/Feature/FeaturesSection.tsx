"use client";

import Button from "@/Components/Button/Button";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full py-12 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite
          }
        `}
      </style>

      {/* Top Label */}
      <div className="flex justify-center lg:mb-8 mb-3">
        <Button text={"Features"} />
      </div>

      {/* Main Heading */}
      {/* Changed text size to be fluid: 32px on mobile, 48px on laptop */}
      <h2
  className="text-[32px] md:text-[40px] lg:text-[48px] font-['Space_Grotesk'] leading-[1.1] md:leading-[100%] tracking-[-0.01em] text-white font-semibold text-center lg:mb-24 mb-8 md:mb-12
  [text-shadow:0_0_6px_rgba(255,255,255,0.6),0_0_1px_rgba(255,255,255,0.4)]"
>
  What{" "}
  <span
    className="text-[#67FF1D] 
    [text-shadow:0_0_2px_rgba(103,255,29,0.7),0_0_15px_rgba(103,255,29,0.4)]"
  >
    Traverse
  </span>
  
  {/* Mobile ke liye line break */}
  <br className="block md:hidden" />

  {" "}Brings

  {/* Desktop ke liye line break */}
  <br className="hidden md:block" />

  {" "}To You?
</h2>

      {/* Features Grid */}
      {/* - grid-cols-1: Single column for mobile 
          - md:grid-cols-2: Your perfect layout for tablets/laptops 
          - gap-6: Smaller gap for mobile to save space
          - md:gap-10: Restored gap for larger screens
      */}
      {/* Features Grid */}

      <div className="max-w-[90rem] mx-auto justify-center align-middle flex flex-wrap gap-6 md:gap-8">
        <div className="flex flex-col lg:flex-row gap-10 mx-auto">
          <div className="w-full lg:w-[424px]">
            <FeatureCard
              title="Global Server Access"
              desc="Connect to servers easily across the globe"
              type="planet"
            />
          </div>
          <div className="w-full lg:w-[634px]">
            <FeatureCard
              title="Fast, Steady Performance"
              desc="Get high speed servers so your work never slow down"
              type="performance"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mx-auto">
          <div className="w-full lg:w-[500px]">
            <FeatureCard
              title="Multiple Devices"
              desc="Protect all your devices with one account"
              type="devices"
            />
          </div>

          <div className="w-full lg:w-[560px]">
            <FeatureCard
              title="Split Tunneling"
              desc="Decide which app takes the secure path"
              type="split"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mx-auto">
          <div className="w-full lg:w-[472px]">
            <FeatureCard
              title="Wi-Fi Protection"
              desc="Guard your data on shared and public hotspots"
              type="wifi"
            />
          </div>

          <div className="w-full lg:w-[581px]">
            <FeatureCard
              title="Kill Switch"
              desc="Stops internet access until your VPN is back"
              type="kill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

