/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-pink-500",
    "bg-sky-500",
    "bg-slate-200",
    "bg-white",
    "bg-black",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["var(--font-figtree)"],
        geist: ["var(--font-geist-sans)"],
        "geist-mono": ["var(--font-geist-mono)"],
        montserrat: ["var(--font-montserrat)"],
        poppins: ["var(--font-poppins)"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "spin-slow": "spin 100s linear infinite",
        "spin-slow-reverse": "spin 100s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
