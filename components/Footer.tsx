import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-black w-full mt-24 border-t border-stone-800">
      <div className="max-w-[1280px] mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 font-serif text-stone-300">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-4xl font-bold text-white mb-8 block">
            AssistPro
          </Link>
          <p className="text-stone-500 hover:text-stone-300 transition-colors duration-200 mt-8">
            © 2024 AssistPro Agency. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white font-semibold mb-4">Navigation</span>
          <Link href="/about" className="text-stone-500 hover:text-[#C15F41] transition-colors duration-200">
            Brand
          </Link>
          <Link href="/services" className="text-stone-500 hover:text-[#C15F41] transition-colors duration-200">
            Services
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white font-semibold mb-4">Connect</span>
          <Link href="/contact" className="text-[#C15F41] hover:text-[#C15F41] transition-colors duration-200">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
