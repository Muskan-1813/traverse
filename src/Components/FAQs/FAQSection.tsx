"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/Components/Button/Button";

const faqs = [
  {
    question: "Are VPNs legal?",
    answer:
      "Yes, VPNs are legal in most countries. They're simply a tool to protect your privacy online.",
  },
  {
    question: "What makes Traverse one of the best VPNs on the market?",
    answer:
      "We focus on speed, security and a clean, simple experience, built to work reliably without slowing you down.",
  },
  {
    question: "Does VPN harm your device?",
    answer:
      "Not at all. A VPN only encrypts your connection and doesn't affect your device's health or performance.",
  },
  {
    question: "Can I download and use VPN on multiple devices?",
    answer:
      "Yes. You can use your account across all your devices with no hassle.",
  },
  {
    question: "Does VPN work with online games?",
    answer:
      "Yes, it works smoothly for gaming and can even reduce lag by connecting you to better routes.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#010101] min-h-[80vh] py-20 text-white relative px-0 md:px-1">
      <div className="absolute -top-10 lg:-top-[120px] left-0 w-full h-32 pointer-events-none z-10" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Button */}
        <div className="flex justify-center mt-10 mb-10">
          <Button text={"FAQs"} />
        </div>

        {/* Heading */}
        <h2
  className="
    font-['Space_Grotesk']
    font-semibold
    text-[32px] md:text-[40px] lg:text-[48px]
    leading-[110%] md:leading-[100%]
    tracking-[-0.48px]
    text-center
    text-white
    [text-shadow:0_0_6px_rgba(255,255,255,0.6),0_0_15px_rgba(255,255,255,0.4)]
    mb-12 md:mb-24
  "
>
  Your Questions,{" "}
  <span className="text-[#67FF1D;] [text-shadow:0_0_2px_rgba(103,255,29,0.7),0_0_15px_rgba(103,255,29,0.4)]">
    Covered
  </span>
</h2>

        {/* Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-5  lg:items-center">
          <div className="font-['Space_Grotesk'] w-full max-w-2xl mx-auto ml-0 lg:ml-25">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                 <div key={index} className="w-full mb-4 md:mb-0">
                  {/* QUESTION */}
                  <div
  onClick={() => setActiveIndex(isActive ? null : index)}
  className={`
    relative overflow-hidden
    flex justify-between items-center
    w-[345px] h-[60px]
    lg:w-[614px] lg:h-[75px]
    px-2 md:px-6
    rounded-[12px]
    cursor-pointer
    mb-0 md:md-0 lg:mb-0 bg-[#171717] lg:bg-transparent
    
    transition-all duration-300
    ${
      isActive
        ? ""
        : "hover:bg-transparent"
    }
  `}
  
>
  <motion.div
  initial={{ scaleX: 0 }}
  animate={{ scaleX: isActive ? 1 : 0 }}
  transition={{ duration: 0.4 }}
  style={{ originX: 0 }}
  className="absolute inset-0 z-0 hidden lg:block bg-[linear-gradient(90deg,rgba(190,238,3,0)_4%,rgba(190,238,3,0.8)_43.27%,rgba(102,210,84,0.8)_68.75%,rgba(22,185,158,0.8)_100%)]"
/>
                    <p
                      className="
                      relative z-10
              font-medium
              text-[14px] md:text-[16px] lg:text-[18px]
              leading-[118%]
              tracking-[-0.24px]
              text-white
            "
                    >
                      {faq.question}
                    </p>

                    {/* Laptop Arrow */}
                    {isActive ? (
  <>
    <ChevronRight
      size={24}
      className="hidden lg:block text-white shrink-0 relative z-10"
    />
    <ChevronDown
      size={22}
      className="lg:hidden text-white shrink-0 rotate-180 relative z-10"
    />
  </>
) : (
  <ChevronDown
    size={22}
    className="text-white shrink-0 relative z-10"
  />
)}
                  </div>

                  {/* MOBILE ANSWER */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="lg:hidden mt-3 rounded-2xl p-[1px] bg-[linear-gradient(270deg,#16B99E,#BEEE03)]"
                      >
                        <div className="rounded-2xl bg-[#010101] px-2 pt-3 pb-5 text-gray-300 text-[15px] md:text-[18px] lg:text-[20px] leading-relaxed font-['DM_Sans']">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE ANSWER BOX */}
          <div
            className="
              hidden lg:block
              font-['DM_Sans']
              w-full
              max-w-[410px]
              h-auto min-h-[250px] lg:h-[400px]
              rounded-[17px]
              bg-gradient-to-b
              from-white
              to-[rgba(52,52,52,0.3)]
              p-[1px]
              mt-6 lg:mt-0
              lg:ml-20
            "
          >
            <div className="w-full h-full rounded-[16px] bg-[#010101] p-4 md:p-10 overflow-hidden relative">
              {/* mode="popLayout" use karne se purana text niche jayega aur naya turant upar aane lagega */}
              <AnimatePresence mode="popLayout">
                {activeIndex !== null ? (
                  <motion.div
                    key={activeIndex}
                    // Initial: Text box ke kafi niche se start hoga aur blur rahega
                    initial={{ y: 120, opacity: 0, filter: "blur(15px)" }}
                    // Animate: Apni asli jagah (top) par aayega aur clear ho jayega
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    // Exit: Purana answer niche ki taraf slide karke blur hote hue gayab hoga
                    exit={{ y: 120, opacity: 0, filter: "blur(15px)" }}
                    transition={{
                      duration: 2,
                      ease: [0.22, 1, 0.36, 1], // Smooth exponential easing
                    }}
                    className="w-full flex flex-col justify-start items-start"
                  >
                    <p className="w-full max-w-[330px] font-['DM_Sans'] text-white text-base md:text-2xl leading-relaxed text-left lg:text-[22px] pb-6 md:pb-10">
                      {faqs[activeIndex].answer}
                    </p>
                  </motion.div>
                ) : (
                  <motion.p
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-500"
                  ></motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}