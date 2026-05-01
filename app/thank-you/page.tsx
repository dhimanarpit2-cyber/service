import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - AssistPro",
  description: "Your request has been received. We will get back to you shortly.",
};

export default function ThankYou() {
  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center pt-40 pb-20">
        <div className="max-w-2xl mx-auto px-8 text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-8 shadow-soft">
            <span className="material-symbols-outlined text-primary text-[48px] scale-110">check_circle</span>
          </div>
          <h1 className="font-headline-hero text-headline-hero text-on-surface">We&apos;ve Received Your Request</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Thank you for reaching out to AssistPro. Our operations team is currently reviewing your details. 
            A dedicated specialist will contact you within the next <strong>2 business hours</strong> to discuss the next steps.
          </p>
          <div className="pt-8">
            <Link 
              href="/" 
              className="inline-block bg-[#C15F41] text-white px-10 py-5 rounded-full font-body-md text-body-md font-bold hover:scale-[1.02] transition-transform shadow-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
