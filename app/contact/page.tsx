import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AssistPro - High-End Assistant Services",
  description: "Let's find your perfect assistant. Whether you need dedicated administrative support or specialized executive assistance.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-[120px]">
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
        <section className="max-w-[1280px] mx-auto px-8 flex flex-col lg:flex-row gap-8 mb-[120px]">
          {/* Left Column: Form (60%) */}
          <div className="lg:w-3/5 bg-surface-container-lowest rounded-[24px] p-10 lg:p-14 shadow-[0px_12px_32px_rgba(26,26,26,0.04)] border border-surface-variant">
            <form action="#" className="space-y-8" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="name">Full Name</label>
                  <input className="w-full bg-surface-container-low rounded-xl px-5 py-4 font-body-md text-on-surface border-none focus:ring-1 focus:ring-outline transition-shadow placeholder:text-on-surface-variant/50" id="name" name="name" placeholder="Jane Doe" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
                  <input className="w-full bg-surface-container-low rounded-xl px-5 py-4 font-body-md text-on-surface border-none focus:ring-1 focus:ring-outline transition-shadow placeholder:text-on-surface-variant/50" id="email" name="email" placeholder="jane@company.com" type="email" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="phone">Phone Number</label>
                  <input className="w-full bg-surface-container-low rounded-xl px-5 py-4 font-body-md text-on-surface border-none focus:ring-1 focus:ring-outline transition-shadow placeholder:text-on-surface-variant/50" id="phone" name="phone" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="business_type">Business Type</label>
                  <select className="w-full bg-surface-container-low rounded-xl px-5 py-4 font-body-md text-on-surface border-none focus:ring-1 focus:ring-outline transition-shadow appearance-none cursor-pointer" id="business_type" name="business_type" defaultValue="">
                    <option disabled value="">Select industry</option>
                    <option value="tech">Technology & Startups</option>
                    <option value="creative">Creative Agency</option>
                    <option value="finance">Finance & Legal</option>
                    <option value="real_estate">Real Estate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-label-caps text-label-caps text-on-surface-variant ml-1">How can we help? (Select all that apply)</label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: "inbox", label: "Inbox Management" },
                    { id: "scheduling", label: "Scheduling" },
                    { id: "travel", label: "Travel Booking" },
                    { id: "research", label: "Research" },
                    { id: "personal", label: "Personal Tasks" },
                  ].map((item) => (
                    <label key={item.id} className="cursor-pointer">
                      <input className="peer sr-only" name="help[]" type="checkbox" value={item.id} />
                      <span className="block px-5 py-2.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps border border-transparent peer-checked:bg-surface-container-highest peer-checked:text-on-surface peer-checked:border-outline transition-all">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="message">Additional Details</label>
                <textarea className="w-full bg-surface-container-low rounded-xl px-5 py-4 font-body-md text-on-surface border-none focus:ring-1 focus:ring-outline transition-shadow placeholder:text-on-surface-variant/50 resize-none" id="message" name="message" placeholder="Tell us a bit more about what you're looking for..." rows={4}></textarea>
              </div>
              <button className="w-full bg-[#994125] text-white font-label-caps text-label-caps rounded-full py-5 hover:scale-[1.02] shadow-[0px_8px_20px_rgba(153,65,37,0.2)] transition-all duration-300 uppercase tracking-widest mt-4" type="submit">
                Send My Request
              </button>
            </form>
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
