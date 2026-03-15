import React from "react";

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button
      className="group relative flex items-center justify-center overflow-hidden transition-all duration-300
      w-[auto] h-[28px] rounded-[14.2px] px-[12.35px] py-[9.88px] gap-[6.17px]
      md:w-auto md:h-[45px] md:rounded-[23px] md:px-[20px] md:py-[16px] md:gap-[10px]"
      style={{
        background: "transparent",
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
        className="absolute inset-[1px] group-hover:bg-black/80 transition-colors"
        style={{
          borderRadius: "inherit",
          background: "#0a0a0a",
        }}
      />

      <span className="relative z-10 font-semibold tracking-wide text-[12px] md:text-[20px] text-[#FFFFFFD0]">
        {text}
      </span>
    </button>
  );
};

export default Button;