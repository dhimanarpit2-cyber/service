"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#EAE9E6]">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-8 py-6">
        <Link href="/" className="text-2xl font-serif font-bold text-[#1A1A1A]">
          AssistPro
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-body-md text-body-md transition-colors ${
                pathname === link.href
                  ? "text-[#C15F41] border-b border-[#C15F41] pb-1"
                  : "text-[#1A1A1A] hover:text-[#C15F41]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action */}
        <Link href="/contact" className="hidden md:block bg-[#C15F41] text-white font-body-md text-body-md px-6 py-2 rounded-full hover:opacity-80 hover:scale-105 active:scale-95 transition-all duration-300 text-center">
          Get Started
        </Link>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-[#1A1A1A] p-2 hover:bg-surface-container-low rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-[28px]">{isMenuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#FAF9F6] border-b border-[#EAE9E6] transition-all duration-300 ease-in-out ${
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}>
        <div className="px-8 py-8 flex flex-col space-y-6 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-headline-md text-2xl transition-colors ${
                pathname === link.href ? "text-[#C15F41]" : "text-[#1A1A1A]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block bg-[#C15F41] text-white font-body-md text-body-md px-6 py-4 rounded-full w-full text-center font-bold shadow-lg shadow-[#C15F41]/20">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
