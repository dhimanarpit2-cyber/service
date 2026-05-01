import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center pt-40 pb-20">
        <div className="max-w-2xl mx-auto px-8 text-center space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="relative">
            <h1 className="font-display text-[120px] font-bold text-surface-container opacity-20 select-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Page Not Found</h2>
            </div>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto">
            The page you are looking for might have been moved, deleted, or never existed in the first place. Let&apos;s get you back on track.
          </p>
          <div className="pt-8 flex flex-wrap justify-center gap-4">
            <Link 
              href="/" 
              className="bg-[#C15F41] text-white px-10 py-5 rounded-full font-body-md text-body-md font-bold hover:scale-[1.02] transition-transform shadow-lg"
            >
              Go Home
            </Link>
            <Link 
              href="/services" 
              className="bg-surface-container-low text-on-surface px-10 py-5 rounded-full font-body-md text-body-md hover:bg-surface-container transition-colors border border-surface-variant"
            >
              Our Services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
