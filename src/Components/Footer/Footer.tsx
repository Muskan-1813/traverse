"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetTraverseButton from "../Button/GetTraverseButton";
import { ChevronDown } from "lucide-react";

export default function CTASection() {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  return (
    <section className="relative font-['Space_Grotesk'] text-white lg:pt-30 pb-12 overflow-hidden bg-[#020202]">
      <div
        className="absolute top-0 left-0 w-full h-32 pointer-events-none 
bg-gradient-to-t from-transparent to-[#030A00]"
      />
      {/* Large Green Curved Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] aspect-[2/1] pointer-events-none">
        <div
          className="
            absolute
            top-[40px] lg:top-[100px]
            left-0
            w-full
            h-full
            rounded-[100%]
            border-t
            border-lime-400/40
            shadow-[0_-15px_40px_rgba(16,255,0,0.15)]
          "
        />
      </div>

      <div className="w-full mt-17  lg:mt-5 lg:max-w-[1000px] lg:mx-auto lg:px-6 relative z-10">
        {/* ================= TOP CTA CARD ================= */}
        <div
          className="relative mt-[70px] lg:-mt-[20px] lg:rounded-[28px] overflow-hidden 
          border border-white/5
          bg-[linear-gradient(90deg,#0d0f14_0%,#0a0c10_50%,#061b0f_100%)]
          px-6 py-8 sm:px-8 md:px-10 md:py-12 lg:px-12 lg:py-14 flex flex-col lg:flex-row items-start justify-between"
        >
          {/* LEFT CONTENT */}
          <div className="lg:max-w-xl z-10 text-left">
            <h3 className="font-bold font-['Space_Grotesk'] text-[22px] md:text-[40px] lg:text-[48px] leading-[115%] tracking-[-0.02em] mb-6 lg:mb-10">
              Don’t miss what’s <br className="" /> coming next
            </h3>

            <div className="flex lg:flex-row md:flex-row gap-4 items-start justify-start">
              <input
                type="email"
                placeholder="Enter Your Email"
                className=" w-[120px] lg:w-full md:w-[300px] h-[36px] lg:h-[52px]   px-3 lg:px-6 rounded-full
                bg-[#0b0f14] border-2 border-[#67FF1D]
                text-white   lg:text-xl outline-none text-[12px]
                placeholder:text-gray-400 focus:border-[#67FF1D]"
              />

              <button
                onClick={() => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }}
                className=" w-auto md:w-auto h-[36px] lg:h-[52px] px-5 lg:px-10 rounded-full
                bg-[#67FF1D] text-black font-light
                border-2 border-[#67FF1D] text-[12px] lg:text-[18px]
                transition-all duration-300 ease-in-out
                hover:bg-transparent hover:text-[#67FF1D]"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Earth Image */}
          <div className="absolute  w-[240px] h-[240px] -right-[100px] -bottom-16 lg:right-0 lg:-bottom-48 lg:w-[460px] lg:h-[460px] lg:translate-x-[20%] lg:-translate-y-[60px]  pointer-events-none">
            <Image
              src="/earth.png"
              alt="Earth"
              fill
              className="object-contain drop-shadow-[0_0_60px_rgba(255,255,255,0.25)]"
            />
          </div>
        </div>

        {/* ================= FOOTER AREA ================= */}
        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row justify-between  lg:items-start gap-6">
          {/* LEFT - Brand */}
          <div className="flex flex-col items-start md:text-left  lg:text-left px-8 lg:px-0 md:px-0">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Logo" width={25} height={50} />
              <span className="font-['Inter'] text-2xl">Traverse VPN</span>
            </div>
            <p className="font-['DM_Sans'] lg:max-w-60 font-light text-white text-lg mb-6 leading-relaxed">
              Take control of your digital identity and enjoy the web the way it
              was meant to be.
            </p>
           
              <div className="flex justify-center mb-0">
  <Link
    href="https://apps.apple.com/in/app/traversevpn-ai-app-with-vpn/id6754161193"
    className=" md:inline-flex "
  >
    <GetTraverseButton text={"Get Traverse Now!"} />
  </Link>
</div>
            
               
          </div>

          {/* RIGHT - Links Groups */}
          <div className="w-full lg:w-auto lg:ml-auto">
            {/* MOBILE SOCIAL ICONS */}
            <div className="flex lg:hidden justify-start px-8 mb-20">
  <div className="flex gap-6 opacity-80">
    {[
      { src: "/x.svg", alt: "X", link: "https://x.com/bloxstacking" },
      { src: "/instagram.svg", alt: "IG", link: "https://www.instagram.com/traverse.vpn/" },
      { src: "/youtube.svg", alt: "YT", link: "" },
      { src: "/linkedin.svg", alt: "IN", link: "https://www.linkedin.com/in/blox-stacking-game-2b97753b3/" },
    ].map((icon) => (
      <a
        key={icon.alt}
        href={icon.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          style={{
            maskImage: `url(${icon.src})`,
            WebkitMaskImage: `url(${icon.src})`,
            maskRepeat: "no-repeat",
            maskSize: "contain",
          }}
          className={`${
            icon.alt === "YT" ? "w-8 h-8" : "w-6 h-6"
          } bg-[#FFFFFF] cursor-pointer transition-colors duration-300 hover:bg-[#67FF1D]`}
        />
      </a>
    ))}
  </div>
</div>
            {/* MOBILE DROPDOWNS */}
            <div className="lg:hidden flex flex-col gap-6 px-8">
              {/* COMPANY */}
              <div className="border-b border-white/10 pb-4">
                <button
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className="w-full flex justify-between items-center text-lg font-medium"
                >
                  Company
                  <ChevronDown
                    className={`transition-transform ${
                      companyOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {companyOpen && (
                  <div className="flex flex-col gap-3 mt-4 text-gray-300">
                    <a className="hover:text-[#67FF1D]">About Us</a>
                    <a className="hover:text-[#67FF1D]">Contact Us</a>
                    <a className="hover:text-[#67FF1D]">Refund Policy</a>
                  </div>
                )}
              </div>

              {/* PLATFORMS */}
              <div className="border-b border-white/10 pb-4">
                <button
                  onClick={() => setPlatformOpen(!platformOpen)}
                  className="w-full flex justify-between items-center text-lg font-medium"
                >
                  Platforms
                  <ChevronDown
                    className={`transition-transform ${
                      platformOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {platformOpen && (
                  <div className="flex flex-col gap-3 mt-4 text-gray-300">
                    <a>VPN for Android</a>
                    <a>VPN for iPhone</a>
                    <a>VPN for Business</a>
                    <a>VPN for Streaming</a>
                    <a>VPN for Gaming</a>
                    <a>VPN for Security</a>
                    <a>VPN for Mac</a>
                    <a>VPN for Windows</a>
                  </div>
                )}
              </div>
            </div>

            {/* DESKTOP VERSION (UNCHANGED) */}
            <div className="hidden lg:flex gap-12 md:gap-24">
              {/* Company */}
              <div className="font-['DM_Sans'] flex flex-col items-center lg:items-start text-center lg:text-left gap-3 text-white">
                <span className="text-xl lg:text-2xl mb-2">Company</span>
                <a className="hover:text-[#67FF1D] font-light transition text-lg">
                  About Us
                </a>
                <a className="hover:text-[#67FF1D] font-light transition text-lg">
                  Contact Us
                </a>
                <a className="hover:text-[#67FF1D] font-light transition text-lg whitespace-nowrap">
                  Refund Policy
                </a>
              </div>

              {/* Platforms */}
              <div className="font-['DM_Sans'] flex flex-col items-center lg:items-start text-center lg:text-left gap-3 text-white">
                <span className="text-xl lg:text-2xl mb-2">Platforms</span>
                <a className="hover:text-[#67FF1D] font-light transition text-lg whitespace-nowrap">
                  VPN for Android
                </a>
                <a className="hover:text-[#67FF1D] font-light transition text-lg whitespace-nowrap">
                  VPN for iPhone
                </a>
                <a className="hover:text-[#67FF1D] font-light transition text-lg whitespace-nowrap">
                  VPN for Business
                </a>
                <a className="hover:text-[#67FF1D] font-light transition text-lg whitespace-nowrap">
                  VPN for Streaming
                </a>
                <a className="hover:text-[#67FF1D] font-light transition text-lg whitespace-nowrap">
                  VPN for Gaming
                </a>
                <a className="hover:text-[#67FF1D] font-light transition text-lg whitespace-nowrap cursor-pointer relative z-10">
  VPN for Security
</a>            <a className="hover:text-[#67FF1D] font-light transition text-lg whitespace-nowrap cursor-pointer relative z-10">
  VPN for Mac
</a>
<a className="hover:text-[#67FF1D] font-light transition text-lg whitespace-nowrap cursor-pointer relative z-10">
  VPN for Windows
</a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW - Socials */}
       <div className="hidden lg:flex lg:justify-start -translate-y-8 px-8 lg:px-0 mb-4">
  <div className="flex gap-6 opacity-80">
    {[
      { src: "/x.svg", alt: "X", link: "https://x.com/bloxstacking" },
      { src: "/instagram.svg", alt: "IG", link: "https://www.instagram.com/traverse.vpn/" },
      { src: "/youtube.svg", alt: "YT", link: "" },
      { src: "/linkedin.svg", alt: "IN", link: "https://www.linkedin.com/in/blox-stacking-game-2b97753b3/" },
    ].map((icon) => (
      <a
        key={icon.alt}
        href={icon.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          style={{
            maskImage: `url(${icon.src})`,
            WebkitMaskImage: `url(${icon.src})`,
            maskRepeat: "no-repeat",
            maskSize: "contain",
          }}
          className={`${
            icon.alt === "YT" ? "w-8 h-8" : "w-6 h-6"
          } bg-[#FFFFFF] cursor-pointer transition-colors duration-300 hover:bg-lime-400`}
        />
      </a>
    ))}
  </div>
</div>

        {/* Divider & Copyright */}
        <div className="font-['DM_Sans'] text-[#5C5C5C]">
          <div className="w-full h-[1px] bg-white/20 mb-6"></div>

          <div className="flex flex-col lg:flex-row justify-between items-start px-8 gap-4 text-center lg:text-left text-sm md:text-base lg:text-[14px]">
            <div className="absolute lg:display-inline md:display-inline text-lg -bottom-12 lg:bottom-0 ">
              © 2025, All Rights Reserved
            </div>

            <div className="flex flex-wrap justify-start text-lg lg:justify-end md:justify-end text-[xl] w-[100px] lg:w-full items-center gap-2 md:gap-4">
              <span className=" transition cursor-pointer whitespace-nowrap">
                Privacy Policy
              </span>
              <span className="hidden sm:inline">|</span>
              <span className=" transition cursor-pointer whitespace-nowrap">
                Terms of Use
              </span>
              <span className="hidden sm:inline">|</span>
              <span className=" transition cursor-pointer whitespace-nowrap">
                Sitemap
              </span>
            </div>
          </div>
        </div>
      </div>
      {showToast && (
  <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-fade">
    ✓ Thanks for subscribing!
  </div>
)}
    </section>
  );
}
