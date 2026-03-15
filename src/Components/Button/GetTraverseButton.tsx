import React from "react";

type ButtonProps = {
  text: string;
};

const GetTraverseButton = ({ text }: ButtonProps) => {
  return (
    <button
      className="
      group relative flex items-center justify-center overflow-hidden
      transition-all duration-300

      w-auto h-[36px] rounded-3xl px-[17px] text-2xl py-[24px] gap-[6.17px]
      md:w-auto md:h-[45px] md:rounded-[23px] md:px-[20px] md:py-[16px] md:gap-[10px]
      "
      style={{
        background: "transparent",
        border: "0.62px solid transparent",
        boxShadow: "0px 0px 4.6px #73D64896",
      }}
    >
      {/* Rotating Gradient Border */}
      <div
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] opacity-70 group-hover:opacity-100 transition"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, #73D648 25%, transparent 50%, #73D648 75%, transparent 100%)",
        }}
      />

      {/* Inner Background */}
      <div
        className="
  absolute inset-[1px] rounded-[inherit]
  transition-all duration-300
  bg-[#0a0a0a]

group-hover:bg-[#67FF1D]
  "
      />

      {/* Glow Layer */}
      
      <span className="relative z-10 font-semibold tracking-wide text-[18px] group-hover:text-[#010101] transition-hover 300 ease md:text-[20px] text-[#FFFFFFD0]">
        {text}
      </span>
    </button>
  );
};

export default GetTraverseButton;
