"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Menu, X } from "lucide-react";
import NavButton from "@/Components/Button/NavButton";
import Button from "@/Components/Button/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideMobileNav, setHideMobileNav] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const currentScroll = window.scrollY;

    setScrolled(currentScroll > 30); // laptop behavior same

    if (currentScroll > 80) {
      setHideMobileNav(true);   // mobile par hide
    } else {
      setHideMobileNav(false);  // top par wapas show
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Plans", href: "#pricing" },
    { name: "Enterprise", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
   <nav
  className={`fixed w-full z-50 px-5
  transition-all duration-300
  ${hideMobileNav ? "-top-24 md:top-0" : "top-0"}
  lg:left-1/2 lg:-translate-x-1/2 lg:max-w-[1200px]
  lg:transition-[top,box-shadow,transform] lg:duration-300
  ${
    scrolled
      ? "bg-[#010101] lg:bg-[#010101] lg:rounded-full lg:shadow-lg lg:shadow-black/40 lg:top-4"
      : "bg-transparent lg:top-4"
  }`}
>
      <div className="max-w-full mx-auto px-5 h-16 flex items-center justify-between">
        {/* Left Section */}
        <div className="text-white flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Traverse Logo"
              width={30}
              height={30}
              className="object-contain w-[30px] h-[30px]"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#67FF1D] transition-colors text-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-8 mr-10">
          <button className="hidden md:flex ml-60 text-gray-300 hover:text-white transition-colors">
          <Languages size={20} />
        </button>

        {/* Button */}
        <div className="flex justify-center px-2">
        <NavButton text={"Get Traverse"} />
      </div>
        </div>
        

        {/* Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="h-[3px] w-4 bg-white rounded-full"></span>
              <span className="h-[3px] w-8 bg-white rounded-full"></span>
              <span className="h-[3px] w-5 bg-white rounded-full"></span>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 right-0 h-screen w-[80%] max-w-[320px] bg-[#030A00] z-50 md:hidden text-white"
    >
      <div className="flex flex-col h-full px-6 py-6">
        
        {/* Top */}
        <div className="flex items-center justify-between mb-10">
          <Image
            src="/logo.png"
            alt="Traverse Logo"
            width={28}
            height={28}
          />

          <button onClick={() => setMenuOpen(false)}>
            <X size={26} className="text-white" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6">
  {navLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      onClick={() => setMenuOpen(false)}
      className="font-['Space_Grotesk'] font-medium text-[18px] leading-[118%] tracking-[-0.01em] text-white hover:text-[#67FF1D] transition-colors"
    >
      {link.name}
    </Link>
  ))}
</div>

        {/* Divider */}
        <div className="border-t border-white my-8"></div>

        {/* Extra Links */}
        
          
          <div className="flex flex-col gap-6">
  <Link href="#" className="font-['Space_Grotesk'] font-medium text-[18px] leading-[118%] tracking-[-0.01em] text-white hover:text-[#67FF1D] transition-colors">About Us</Link>
  <Link href="#" className="font-['Space_Grotesk'] font-medium text-[18px] leading-[118%] tracking-[-0.01em] text-white hover:text-[#67FF1D] transition-colors">Terms of Use</Link>
  <Link href="#" className="font-['Space_Grotesk'] font-medium text-[18px] leading-[118%] tracking-[-0.01em] text-white hover:text-[#67FF1D] transition-colors">Contact Us</Link>
  <Link href="#" className="font-['Space_Grotesk'] font-medium text-[18px] leading-[118%] tracking-[-0.01em] text-white hover:text-[#67FF1D] transition-colors">Privacy Policy</Link>
  <Link href="#" className="font-['Space_Grotesk'] font-medium text-[18px] leading-[118%] tracking-[-0.01em] text-white hover:text-lime-400 transition-colors">Refund Policy</Link>
</div>
        

        <div className="mt-8 flex justify-center md:hidden">
  <Link
    href="https://apps.apple.com/in/app/traversevpn-ai-app-with-vpn/id6754161193"
    target="_blank"
    onClick={() => setMenuOpen(false)}
  >
    <Button text={"Get Traverse Now!"} />
  </Link>
</div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Navbar;