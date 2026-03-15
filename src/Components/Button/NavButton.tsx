import React from "react";
import Link from "next/link";

type ButtonProps = {
  text: string;
};

const NavButton = ({ text }: ButtonProps) => {
  return (
    <Link href="https://apps.apple.com/in/app/traversevpn-ai-app-with-vpn/id6754161193">
      <button
        className="group relative flex items-center justify-center overflow-hidden transition-all duration-300
        lg:w-[130px] lg:h-[32px] rounded-[14.2px] lg:px-[1px] py-[9.88px] gap-[6.17px]
        md:w-auto md:h-[45px] md:rounded-[23px] md:px-[20px] md:py-[16px] md:gap-[10px]"
        style={{
          border: "0.62px solid transparent",
          boxShadow: "0px 0px 4.6px 0px #73D64896",
        }}
      >
        {/* Rotating Gradient Border */}
        <div
          className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, #73D648 25%, transparent 50%, #73D648 75%, transparent 100%)",
          }}
        />

        {/* Inner Mask */}
        <div
          className="absolute inset-[1px] bg-[#0a0a0a] group-hover:bg-[#67FF1D] transition-colors duration-300"
          style={{
            borderRadius: "inherit",
          }}
        />

        {/* Button Text */}
        <span className="relative z-10 font-medium tracking-wide lg:text-[18px] md:text-[20px] text-[#FFFFFFD0] group-hover:text-black transition-colors duration-300">
          {text}
        </span>
      </button>
    </Link>
  );
};

export default NavButton;