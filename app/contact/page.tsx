import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AssistPro - High-End Assistant Services",
  description: "Let's find your perfect assistant. Whether you need dedicated administrative support or specialized executive assistance.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-[80px]">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-8 mt-20 mb-24 text-center">
          <h1 className="font-headline-hero text-headline-hero text-on-surface mb-6 max-w-4xl mx-auto">
            Let&apos;s Find Your Perfect Assistant
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Whether you need dedicated administrative support, specialized executive assistance, or flexible project management, our white-glove matching process ensures a seamless fit.
          </p>
        </section>

        {/* Two-Column Layout */}
        <section className="max-w-[1280px] mx-auto px-8 flex flex-col lg:flex-row gap-8 mb-[80px]">
          {/* Left Column: Form (60%) */}
          <div className="lg:w-3/5 bg-surface-container-lowest rounded-[24px] p-10 lg:p-14 shadow-[0px_12px_32px_rgba(26,26,26,0.04)] border border-surface-variant">
            <ContactForm />
          </div>
          {/* Right Column: Info (40%) */}
          <div className="lg:w-2/5 flex flex-col justify-between pt-4 lg:pt-0 pl-0 lg:pl-12">
            <div className="space-y-12">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-8">Get in touch directly.</h2>
                <div className="space-y-6">
                  {[
                    { icon: "mail", label: "Email", value: "hello@assistpro.agency", href: "mailto:hello@assistpro.agency" },
                    { icon: "call", label: "Phone", value: "+1 (800) 555-0199", href: "tel:+18005550199" },
                    { icon: "chat", label: "WhatsApp", value: "Message us anytime", href: "#" },
                  ].map((item) => (
                    <a key={item.label} className="flex items-center gap-4 group cursor-pointer" href={item.href}>
                      <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-surface-container-high transition-colors">
                        <span className="material-symbols-outlined text-on-surface-variant">{item.icon}</span>
                      </div>
                      <div>
                        <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">{item.label}</p>
                        <p className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="h-px w-full bg-surface-variant"></div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <p className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">Global HQ</p>
                </div>
                <div className="rounded-2xl overflow-hidden h-48 bg-surface-container-low relative shadow-[inset_0px_2px_10px_rgba(0,0,0,0.02)]">
                  <Image
                    alt="Map location"
                    className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDexWyhJi869m37ldTsSGVh6p6yrCTGLhZhoGLq4R3NgsUUAMdOMcRqA3UjYZ88PyMegBoViEQOi_WCQL4uYSh_SYGIbkEKPH2IIJxcuWXxfAsyKXqKC-idmsAx5X82FFsm097ik8Jdy9rNEAgdzJJb9dhZy7Ub1-NhRXt3T_ZLvR7rcDozr953V5xFgCJ1_Jk4RTkmvxJTd47KDsmN8Zj0r29UITP26aaFnORmERMRaiL4t_-lEDbFAnYd99le10jSkrqiNkpPI1vN"
                    fill
                  />
                  <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-4 py-2 rounded-lg font-body-md text-on-surface text-sm border border-surface-variant/50">
                    100 Park Avenue, NY
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-high p-6 rounded-2xl border border-surface-variant">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">verified_user</span>
                  <div>
                    <h3 className="font-headline-md text-xl text-on-surface mb-2 font-medium">Our Response Promise</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">We review all inquiries personally and guarantee a thoughtful, human response within 2 business hours during standard operational times.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise Strip */}
        <section className="border-t border-b border-surface-variant bg-surface-bright">
          <div className="max-w-[1280px] mx-auto px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-surface-variant">
              {[
                { icon: "schedule", title: "24hr Turnaround", desc: "Standard tasks are completed within a 24-hour window, ensuring your momentum never stalls." },
                { icon: "how_to_reg", title: "Top 1% Talent", desc: "Every assistant passes a rigorous multi-stage vetting process. You only work with proven professionals." },
                { icon: "tune", title: "Flexible Scaling", desc: "Scale hours up or down based on your seasonal demands without restrictive long-term commitments." },
              ].map((item, idx) => (
                <div key={item.title} className={`flex flex-col md:flex-row items-center md:items-start gap-6 pt-8 md:pt-0 ${idx === 0 ? "first:pt-0" : ""} px-6`}>
                  <div className="w-16 h-16 shrink-0 rounded-full bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-2xl text-on-surface mb-3">{item.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
