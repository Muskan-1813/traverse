import Image from "next/image";
import { Space_Grotesk, DM_Sans } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const systems = [
  { name: "Windows", icon: "/window.png" },
  { name: "mac OS", icon: "/macos.png" },
  { name: "Android", icon: "/android.png" },
  { name: "iOS", icon: "/ios.png" },
];

export default function WorksWherever() {
  return (
    <section className="w-full flex flex-col hidden md:flex  items-center text-center bg-transparent pt-32">

      {/* Title */}
      <h2
        className={`${spaceGrotesk.className} text-[48px] font-bold leading-[100%] tracking-[-0.01em] [text-shadow:0_0_6px_rgba(255,255,255,0.6),0_0_1px_rgba(255,255,255,0.4)]`}
      >
        Works <span className="text-[#67FF1D] ">Wherever</span> You Do
      </h2>

      {/* Description */}
      <p
        className={`${dmSans.className} mt-6 text-[20px] font-light leading-[142%] tracking-[-0.01em] max-w-[720px]`}
      >
        A single VPN experience that follows you across all major operating systems.
      </p>

      {/* Icons */}
<div className="mt-16 flex items-center justify-center gap-20">
  {systems.map((system) => (
    <div key={system.name} className="flex flex-col items-center gap-4">

  <div className="w-[72px] h-[72px] flex items-center justify-center">
    <Image
      src={system.icon}
      alt={system.name}
      width={60}
      height={60}
      className="object-contain transition duration-300 hover:grayscale hover:opacity-70"
    />
  </div>

  <p className={`${dmSans.className} text-white text-[20px] font-normal tracking-[-0.01em]`}>
    {system.name}
  </p>

</div>
  ))}
</div>

    </section>
  );
}