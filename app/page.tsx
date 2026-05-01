import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-[100px]">
        {/* 1. Hero */}
        <section className="max-w-[1280px] mx-auto px-8 pt-[80px] pb-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-12">
              <span className="inline-block bg-surface-container-low px-4 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
                VIRTUAL ASSISTANT AGENCY
              </span>
              <h1 className="font-headline-hero text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1]">
                We Handle the Details, <br className="hidden md:block" /> You Drive the Vision
              </h1>
              <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl">
                Bespoke virtual assistance tailored for founders and executives. Regain
                hours in your week with our highly vetted, proactive professionals
                managing your operational blind spots.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="bg-[#C15F41] text-white px-8 py-4 rounded-full font-body-md text-body-md hover:scale-[1.02] transition-transform soft-shadow text-center min-w-[180px]">
                  Get Started
                </Link>
                <Link href="/services" className="bg-transparent border border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-full font-body-md text-body-md hover:bg-surface-container-low transition-colors text-center min-w-[180px]">
                  View Services
                </Link>
              </div>
              <div className="pt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-body-md text-body-md text-on-surface-variant/70">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                  No contracts
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                  24hr response
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                  Vetted professionals
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 relative mt-12 lg:mt-0 h-[600px] w-full bg-surface-container-low rounded-[40px] overflow-hidden flex items-center justify-center group">
              <Image
                alt="Abstract architectural workspace"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNLKz0L5a18dNJ62KJfDK8FGgzPvfVNVYdkFbwSshOOkmCFui-jqdbtSNP3wkxuozrLf1M6_yPBGuI6XuexcPNCUfbLLm4j8gy1KhXFnvIqErRA5xZs7l8v-IdaA8ujbIMnoEePj4hug-Y9xJ3-t383fJs3Az_lZfIcNesEewYtjKVHhKb9-Q17CO5vl8mMUq-D0NznykpIeuN0BaKVRm7QsgWu9tK8YYk3f3m-ucm8stjjizFDr_sWBTFTN-QNwt76H06-fdaY5j8"
                fill
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF9F6] via-transparent to-[#C15F41]/20"></div>
            </div>
          </div>
        </section>

        {/* 2. Social Proof Bar */}
        <section className="bg-[#F2F1ED] py-16 border-y border-[#EAE9E6]">
          <div className="max-w-[1280px] mx-auto px-8 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 font-headline-md text-[24px] text-on-surface mb-12">
              <div>120+ Clients Served</div>
              <div className="hidden md:block w-px h-8 bg-outline-variant"></div>
              <div>98% Satisfaction Rate</div>
              <div className="hidden md:block w-px h-8 bg-outline-variant"></div>
              <div>4.9★ Average Rating</div>
            </div>
            <p className="font-label-caps text-label-caps text-on-surface-variant mb-8 uppercase tracking-widest">
              Your assistant works inside the tools you already use
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              <span className="font-headline-md text-headline-md">Notion</span>
              <span className="font-headline-md text-headline-md">Slack</span>
              <span className="font-headline-md text-headline-md">Asana</span>
              <span className="font-headline-md text-headline-md">Google</span>
              <span className="font-headline-md text-headline-md">Calendly</span>
            </div>
          </div>
        </section>

        {/* 3. What We Do */}
        <section className="max-w-[1280px] mx-auto px-8 py-[80px]">
          <div className="hr-guide mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <span className="font-display text-[140px] text-[#C15F41] leading-none block -mt-8">“</span>
            </div>
            <div className="md:col-span-9 space-y-8">
              <p className="font-headline-lg text-headline-lg text-on-surface leading-tight">
                We believe that your time is your most valuable asset. Our philosophy is
                rooted in proactive anticipation rather than mere reaction. By
                delegating the essential yet time-consuming tasks to our vetted
                professionals, you create space for strategic thinking and personal
                growth.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="bg-surface-container-low px-4 py-2 rounded-full font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
                  Admin Support
                </span>
                <span className="bg-surface-container-low px-4 py-2 rounded-full font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
                  Executive Assistance
                </span>
                <span className="bg-surface-container-low px-4 py-2 rounded-full font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
                  Project Coordination
                </span>
              </div>
            </div>
          </div>
          <div className="hr-guide mt-16"></div>
        </section>

        {/* 4. Services Snapshot */}
        <section className="max-w-[1280px] mx-auto px-8 pb-[80px]">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">What We Take Off Your Plate</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Cards */}
            {[
              {
                icon: "work",
                title: "Executive Support",
                desc: "Comprehensive management of your daily priorities, ensuring you focus only on high-leverage activities.",
              },
              {
                icon: "mail",
                title: "Inbox & Calendar",
                desc: "Ruthless prioritization of your communications and scheduling to protect your deep work blocks.",
              },
              {
                icon: "analytics",
                title: "Research & Reports",
                desc: "Synthesized data and market research delivered in clean, actionable formats for confident decision-making.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-[24px] p-12 soft-shadow border border-[#EAE9E6] group hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="material-symbols-outlined text-[32px] text-[#C15F41] mb-6">{service.icon}</span>
                <h3 className="font-headline-md text-[24px] text-on-surface mb-4">{service.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-2">{service.desc}</p>
                <Link className="font-body-md text-body-md text-[#C15F41] flex items-center gap-2 group-hover:gap-3 transition-all" href="/services">
                  Learn More <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              className="font-body-lg text-body-lg text-on-surface border-b border-[#1A1A1A] pb-1 hover:text-[#C15F41] hover:border-[#C15F41] transition-colors inline-flex items-center gap-2"
              href="/services"
            >
              View all 6 services <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* 5. How It Works */}
        <section className="max-w-[1280px] mx-auto px-8 pb-[80px]">
          <h2 className="font-headline-lg text-3xl md:text-5xl lg:text-6xl text-on-surface text-center mb-16 md:mb-24">Up and Running in 3 Simple Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 relative">
            <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] border-t-2 border-dashed border-surface-variant -z-10"></div>
            {[
              {
                num: "01",
                title: "Tell Us Your Needs",
                desc: "We start with a deep dive into your workflow to identify exactly where you need support.",
              },
              {
                num: "02",
                title: "Meet Your Match",
                desc: "We pair you with a vetted assistant whose skills and communication style perfectly align with yours.",
              },
              {
                num: "03",
                title: "Start Delegating",
                desc: "Experience immediate relief as your new assistant begins managing tasks from day one.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center relative bg-[#FAF9F6] md:bg-transparent p-8 md:p-0 rounded-3xl border border-surface-variant md:border-none">
                <div className="font-display text-[64px] md:text-[84px] text-[#C15F41] opacity-20 mb-4 leading-none">{step.num}</div>
                <div className="w-4 h-4 bg-[#C15F41] rounded-full mx-auto mb-8 ring-8 ring-[#FAF9F6] hidden md:block"></div>
                <h3 className="font-headline-md text-xl md:text-2xl text-on-surface mb-4">{step.title}</h3>
                <p className="font-body-md text-base text-on-surface-variant">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link href="/contact" className="inline-block bg-[#C15F41] text-white px-8 py-4 rounded-full font-body-md text-body-md hover:scale-[1.02] transition-transform soft-shadow">
              Book a Free Discovery Call
            </Link>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section className="bg-surface-bright py-32 border-t border-surface-variant overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="font-label-caps text-label-caps text-[#C15F41] mb-4 block uppercase tracking-[0.2em]">Success Stories</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Trusted by the World&apos;s Most Productive Founders</h2>
            </div>
            
            <TestimonialsCarousel />
          </div>
        </section>

        {/* 7. Ultra-Modern CTA */}
        <section className="max-w-[1280px] mx-auto px-8 pb-20">
          <div className="relative overflow-hidden bg-[#1A1A1A] rounded-[48px] py-24 md:py-32 px-8 group">
            {/* Animated Background Glows */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-[#C15F41] opacity-20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#994125] opacity-10 blur-[120px] rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#C15F41] animate-ping" />
                <span className="font-label-caps text-[11px] text-white/70 uppercase tracking-[0.2em]">Available for New Partners</span>
              </div>
              
              <h2 className="font-headline-hero text-headline-hero text-white leading-[1.1] tracking-tight">
                Stop Managing. <br /> 
                <span className="text-[#C15F41]">Start Leading.</span>
              </h2>
              
              <p className="font-body-lg text-body-lg text-white/60 max-w-xl mx-auto leading-relaxed">
                Join the ranks of founders who have reclaimed 20+ hours every week. Your dedicated premium assistant is just a click away.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Link 
                  href="/contact" 
                  className="group relative px-10 py-5 bg-[#C15F41] text-white rounded-full font-body-md font-bold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(193,95,65,0.3)]"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                </Link>
                
                <Link 
                  href="/services" 
                  className="font-body-md text-white/80 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  Explore Capabilities 
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
            
            {/* Minimalist Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
