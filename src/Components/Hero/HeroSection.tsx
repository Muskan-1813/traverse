import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow md:mr-4 py-10 lg:py-0 lg:mt-10 mt-0">
      {/* Smooth Green Atmospheric Glow */}
      <div
        className="
          absolute right-0 top-0 h-full w-[40%]
          bg-linear-to-l
          from-green-950/5
          via-green-900/10
          to-transparent
          blur-[60px]
          pointer-events-none
        "
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 lg:max-w-7xl   flex flex-col lg:flex-row items-center ">
        {/* LEFT SIDE CONTENT WRAPPER */}
        {/* Note: xl:right-100 preserved for your 14-inch layout */}
        <div className="flex flex-col items-center mt-20 lg:mt-0 lg:items-start text-center lg:left-[72px] lg:top-[120px] lg:text-left max-w-2xl relative  ">
          {/* Heading */}
          <h1 className="font-['Space_Grotesk'] w-[380px] lg:w-[600px] lg:text-[48px] text-3xl md:text-6xl lg:text-5xl leading-tight lg:leading-[1.05] font-light tracking-wider text-[#FFFFFF] drop-shadow-[0_0_40px_rgba(255,255,255,1)] text-glow-white ">
            Privacy that follows you everywhere
          </h1>

          {/* Subtext */}
          <p className="font-['DM_Sans'] mt-6 text-gray-300 w-[350px] lg:w-[600px] text-[13px] md:text-[16px] lg:text-[19px] leading-[121%] max-w-lg">
  Access worldwide content and keep your digital life shielded
</p>
          {/* Phones Image Container */}
          {/* Earth for Mobile */}
          <div className="flex justify-center items-center md:mt-2 md:hidden">
            <div className="relative w-[400px] h-[400px]">
              {/* GREEN GLOW */}
              <div
                className="
        absolute inset-0
        rounded-full
        bg-[radial-gradient(circle,rgba(103,255,29,0.45)_0%,rgba(103,255,29,0.25)_25%,rgba(103,255,29,0.12)_40%,transparent_75%)]
        blur-[40px]
        scale-125
        pointer-events-none
      "
              />

              <Image
                src="/earth.avif"
                alt="Earth"
                fill
                loading="lazy"
                fetchPriority="high"
                className="spin-delayed relative z-10"
              />
            </div>
          </div>
          {/* On mobile, we remove the negative offsets so it stays in flow */}
          <div
            className="relative w-full hidden md:block max-w-[450px] md:max-w-[650px] lg:w-[800px] 
                h-[350px] md:h-[500px] lg:h-[430px] 
                lg:relative lg:translate-x-[-12rem] lg:-top-[22px]  md:display-none "
          >
            <Image
              src="/phones.avif"
              alt="Phones"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              className="object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Store Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-4 md:mt-4 lg:mt-0 lg:relative lg:bottom-51">
            <a
              href="https://apps.apple.com/in/app/traversevpn-ai-app-with-vpn/id6754161193"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/appStore.png"
                alt="App Store"
                width={160}
                height={55}
                loading="lazy"
                className="w-[140px] md:w-[120px] h-auto hover:scale-105 transition duration-300 cursor-pointer"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.web3task.vpn&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
               <Image
              src="/playStore.png"
              alt="Google Play"
              width={160}
              height={55}
              loading="lazy"
              className="w-[140px] md:w-[120px] h-auto hover:scale-105 transition duration-300 cursor-pointer"
            />
            </a>
           
          </div>
        </div>
      </div>

      {/* MASSIVE CROPPED EARTH */}
      {/* Adjusted responsiveness: scale down for tablets, hide on small mobile to prevent overlap */}
      <div
        className="absolute right-[-20%] lg:right-[-12%] top-[22%] lg:top-[76%]
              -translate-y-1/2
              w-[300px] h-[400px] md:w-[600px] md:h-[1000px] lg:w-[700px] lg:h-[1600px]
              scale-110 md:scale-150 lg:scale-220
              hidden md:block -z-10 opacity-50 lg:opacity-100"
      >
        <Image
          src="/earth.avif"
          alt="Earth"
          fill
          loading="lazy"
          fetchPriority="high"
          className="object-contain animate-spin-slow-reverse drop-shadow-[0_0_50px_rgba(34,197,94,0.9)]"
        />
      </div>
    </section>
  );
}
