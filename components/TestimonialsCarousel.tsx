"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechForward",
    quote: "AssistPro didn't just give me an assistant; they gave me back my evenings. The level of proactivity is unmatched. I finally feel like I'm steering the ship instead of constantly patching leaks.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Founder, Nexus Studio",
    quote: "The onboarding was seamless. My assistant picked up our complex workflow in days. It's the best operational investment we've made this year. Absolute game changer for our studio.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Director, Global RE",
    quote: "Uncompromising reliability. They handle my high-stakes scheduling with grace and precision. I can't imagine my workflow without them now. Truly white-glove service.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    rating: 5
  },
  {
    name: "David Park",
    role: "Serial Entrepreneur",
    quote: "I've tried many VA agencies, but AssistPro's vetting process is clearly superior. My assistant doesn't just follow instructions; they think two steps ahead of me.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    rating: 5
  },
  {
    name: "Aisha Taylor",
    role: "COO, Bloom Creative",
    quote: "Our productivity has soared since partnering with AssistPro. The project management support is top-tier. Highly recommended for any growing executive team.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
    rating: 5
  }
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden px-4 py-12">
        <div 
          className="flex transition-transform duration-500 ease-out" 
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="w-full shrink-0 px-4 md:px-8">
              <div className="bg-surface-container-lowest p-10 md:p-16 rounded-[40px] border border-surface-variant shadow-xl relative overflow-hidden group">
                {/* Decorative Quote Mark */}
                <span className="absolute -top-4 -left-2 font-display text-[160px] text-[#C15F41] opacity-5 select-none leading-none">“</span>
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[#C15F41] text-[24px] fill-current">star</span>
                    ))}
                  </div>

                  <p className="font-headline-md text-2xl md:text-3xl text-on-surface italic leading-relaxed max-w-3xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex flex-col items-center gap-4 pt-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg transform transition-transform duration-500 group-hover:scale-110">
                      <Image
                        alt={t.name}
                        className="object-cover"
                        src={t.image}
                        fill
                      />
                    </div>
                    <div>
                      <h4 className="font-headline-md text-xl text-on-surface mb-1">{t.name}</h4>
                      <p className="font-label-caps text-xs text-on-surface-variant uppercase tracking-[0.2em]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button 
          onClick={prev}
          className="w-14 h-14 rounded-full border border-surface-variant flex items-center justify-center text-on-surface hover:bg-[#C15F41] hover:text-white hover:border-[#C15F41] transition-all duration-300 group shadow-sm"
          aria-label="Previous testimonial"
        >
          <span className="material-symbols-outlined group-active:scale-90 transition-transform">arrow_back</span>
        </button>

        <div className="flex gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setActiveIndex(i);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                activeIndex === i ? "w-10 bg-[#C15F41]" : "w-2 bg-surface-variant hover:bg-on-surface-variant/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={next}
          className="w-14 h-14 rounded-full border border-surface-variant flex items-center justify-center text-on-surface hover:bg-[#C15F41] hover:text-white hover:border-[#C15F41] transition-all duration-300 group shadow-sm"
          aria-label="Next testimonial"
        >
          <span className="material-symbols-outlined group-active:scale-90 transition-transform">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
