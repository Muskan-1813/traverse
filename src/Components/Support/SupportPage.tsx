"use client";
import React, { useState } from "react";
import Button from "@/Components/Button";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SUPPORT_SECTIONS = [
  {
    title: "Traverse VPN Support: How can we help you today?",
    content: [
      "We know that dealing with technical issues can be annoying, so we made our support simple and fast. At Traverse VPN, our main goal is to keep you safe online without any headaches. Whether you are trying to do a quick VPN download or need help fixing a connection issue, our real human team is right here to guide you.",
      "We have organized our support so you can find exactly what you need based on how you use our app."
    ],
  },
  {
    title: "Get Help With Your Devices",
    content: [
      "Setting up your privacy should be easy. If you are trying to install our secure VPN on your computer, we have simple steps to get your VPN for Gaming or VPN for Mobile running smoothly in minutes.",
      "For mobile users on the go, we know you want things fast. If you are having any trouble with your VPN for iPhone or VPN for Android, just reach out. We can help you fix connection drops or show you how to use the best VPN features right on your phone.",
    ],
  },
  {
    title: "Get Help Based on Your Activity",
    content: [
      "Different people use Traverse VPN for different things, and we are experts in all of them.",
    ],
    bullets: [
      "Watching Shows: Having trouble unlocking global content? Let us help you set up your VPN for Streaming, so you can watch movies without any buffering.",
      "Playing Games: Nobody likes lag. If you need help setting up your VPN for Gaming for the fastest speeds, we can show you which servers to pick.",
      "Staying Safe: If your main focus is privacy, our team can help you activate all the advanced VPN for Security features to keep hackers away from your data.",
    ],
    maxWidth: "max-w-3xl",
  },
  {
    title: "Help for business users",
    content: [
      "We don't just protect individuals; we protect whole companies, too. If you are an office manager looking for help with your VPN for Business, we have dedicated tech experts for you. We also provide custom support for huge companies using our Enterprise VPN, so your remote workers stay connected safely anywhere in the world.",
    ],
    maxWidth: "max-w-3xl",
  },
  {
    title: "Contact Our Real Human Team",
    content: [
      "We believe the best virtual private network service needs the best customer support. We are real people sitting here, ready to fix your problem fast. Send us an email or open a support ticket, and we will get your internet freedom back on track.",
    ],
    maxWidth: "max-w-3xl",
  },
];

const FAQS = [
  {
    question: "Can Traverse VPN support give me a refund directly?",
    answer:
      "If you bought our service on a mobile device, no. Payments for our VPN for iPhone and VPN for Android are locked in the Apple and Google payment systems. We do not have the technical ability to refund those payments, so you must request them through your app store.",
  },
  {
    question: "What happens if I forget to cancel my subscription?",
    answer:
      "If you forget to turn off auto-renewal, the app store will automatically charge you for the next period to keep your secure VPN active. If this happens by mistake, you must contact Apple or Google immediately to ask for a refund.",
  },
  {
    question: "Do I lose access immediately after a refund?",
    answer:
      "Yes. Once Apple or Google processes your refund and returns your money, your premium access will be canceled. You will no longer be able to connect to our high-speed USA VPN servers or use any advanced security features.",
  },
];

type SectionType = (typeof SUPPORT_SECTIONS)[0] & {
  bullets?: string[];
  email?: string;
};

function Section({ section, index }: { section: SectionType; index: number }) {
  return (
    <div id={`section-${index}`} className={`mb-15, ${section.maxWidth ?? ""} `}>
      <h2
        className="text-[20px] md:text-[28px] lg:text-[36px] font-['Space_Grotesk'] leading-[1.1] md:leading-[100%] tracking-[-0.01em] text-white font-semibold mb-4 md:mb-8
        [text-shadow:0_0_6px_rgba(255,255,255,0.6),0_0_1px_rgba(255,255,255,0.4)]"
      >
        {section.title}
      </h2>

      <div className="mb-6 md:mb-20 space-y-3 font-['DM_Sans'] text-white font-light leading-relaxed text-base md:text-xl">
        {section.content.map((para, j) => (
          <p key={j}>{para}</p>
        ))}

        {section.bullets && (
          <ul className="space-y-2 mt-3">
            {section.bullets.map((bullet, k) => {
              const colonIdx = bullet.indexOf(":");
              const hasLabel = colonIdx !== -1 && colonIdx < 30;
              const label = hasLabel ? bullet.slice(0, colonIdx) : null;
              const rest = hasLabel
                ? bullet.slice(colonIdx + 1).trimStart()
                : bullet;
              return (
                <li key={k} className="flex items-start gap-2">
                  <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-white" />
                  <span>
                    {label && (
                      <span className="font-semibold text-white">
                        {label}:{" "}
                      </span>
                    )}
                    {rest}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#010101] min-h-[80vh] pt-10 pb-20 text-white relative">
      <div className="absolute -top-10 lg:-top-[120px] left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-transparent to-[#010101] z-10" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-center mt-10 mb-10">
          <Button text={"FAQs"} />
        </div>

        <h2
          className="font-['Space_Grotesk'] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[110%] md:leading-[100%] tracking-[-0.48px] text-center text-white
          [text-shadow:0_0_6px_rgba(255,255,255,0.6),0_0_15px_rgba(255,255,255,0.4)] mb-12 md:mb-24"
        >
          Your questions,{" "}
          <span className="text-[#67FF1D] [text-shadow:0_0_2px_rgba(103,255,29,0.7),0_0_15px_rgba(103,255,29,0.4)]">
            covered
          </span>
        </h2>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-start lg:items-center">
          <div className="font-['Space_Grotesk'] w-full max-w-2xl mx-auto lg:ml-25">
            {FAQS.map((faq, index) => {
              const isActive = activeIndex === index;
              return (
                <div key={index} className="w-full">
                  <div
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className={`flex justify-between items-center w-full lg:w-[614px] min-h-[75px] px-2 md:px-6 rounded-[14px] cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "lg:bg-[linear-gradient(90deg,rgba(190,238,3,0)_4%,rgba(190,238,3,0.8)_43.27%,rgba(102,210,84,0.8)_68.75%,rgba(22,185,158,0.8)_100%)]"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <p className="font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[118%] tracking-[-0.24px] text-white">
                      {faq.question}
                    </p>
                    {isActive ? (
                      <>
                        <ChevronRight size={24} className="hidden lg:block text-black shrink-0" />
                        <ChevronDown size={22} className="lg:hidden text-gray-400 shrink-0 rotate-180" />
                      </>
                    ) : (
                      <ChevronDown size={22} className="text-gray-400 shrink-0" />
                    )}
                  </div>

                  {/* Mobile answer */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="lg:hidden mt-3 rounded-2xl p-[1px] bg-[linear-gradient(270deg,#16B99E,#BEEE03)]"
                      >
                        <div className="rounded-2xl bg-[#010101] px-4 pt-3 pb-5 text-gray-300 text-[15px] md:text-[18px] leading-relaxed font-['DM_Sans']">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Desktop answer box */}
          <div className="hidden lg:block font-['DM_Sans'] w-full max-w-[410px] h-auto min-h-[250px] lg:h-[400px] rounded-[17px] bg-gradient-to-b from-white to-[rgba(52,52,52,0.3)] p-[1px] mt-6 lg:mt-0 lg:ml-20">
            <div className="w-full h-full rounded-[16px] bg-[#010101] p-4 md:p-10 overflow-hidden relative">
              <AnimatePresence mode="popLayout">
                {activeIndex !== null ? (
                  <motion.div
                    key={activeIndex}
                    initial={{ y: 120, opacity: 0, filter: "blur(15px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: 120, opacity: 0, filter: "blur(15px)" }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full flex flex-col justify-start items-start"
                  >
                    <p className="w-full max-w-[330px] font-['DM_Sans'] text-white text-base md:text-2xl leading-relaxed text-left lg:text-[22px] pb-6 md:pb-10">
                      {FAQS[activeIndex].answer}
                    </p>
                  </motion.div>
                ) : (
                  <motion.p
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-500"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#020202] font-['Space_Grotesk'] text-white">
      {/* Hero */}
      <div className="relative pt-32 px-6 text-center overflow-hidden">
        <div className="flex justify-center mb-10 font-['DM_Sans']">
          <Button text={"Support"} />
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="p-6 md:p-8 font-['DM_Sans'] text-white leading-relaxed space-y-3 text-base md:text-xl text-center font-light">
          <p>
            Need help with Traverse VPN? Our real human support team is ready to
            help you fix any issues with your VPN for mobile phone, iPhone, or
            Enterprise. Contact us today.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {SUPPORT_SECTIONS.map((section, i) => (
          <Section key={i} section={section as SectionType} index={i} />
        ))}
      </div>

      <FAQSection />
    </main>
  );
}