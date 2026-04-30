import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-[100px]">
        {/* 1. Hero */}
        <section className="max-w-[1280px] mx-auto px-8 pt-[120px] pb-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-12">
              <span className="inline-block bg-surface-container-low px-4 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
                VIRTUAL ASSISTANT AGENCY
              </span>
              <h1 className="font-headline-hero text-headline-hero text-on-surface">
                We Handle the Details, You Drive the Vision
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Bespoke virtual assistance tailored for founders and executives. Regain
                hours in your week with our highly vetted, proactive professionals
                managing your operational blind spots.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#C15F41] text-white px-8 py-4 rounded-full font-body-md text-body-md hover:scale-[1.02] transition-transform soft-shadow">
                  Get Started
                </button>
                <button className="bg-transparent border border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-full font-body-md text-body-md hover:bg-surface-container-low transition-colors">
                  View Services
                </button>
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
        <section className="max-w-[1280px] mx-auto px-8 py-[120px]">
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
        <section className="max-w-[1280px] mx-auto px-8 pb-[120px]">
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
                <a className="font-body-md text-body-md text-[#C15F41] flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                  Learn More <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              className="font-body-lg text-body-lg text-on-surface border-b border-[#1A1A1A] pb-1 hover:text-[#C15F41] hover:border-[#C15F41] transition-colors inline-flex items-center gap-2"
              href="#"
            >
              View all 6 services <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </a>
          </div>
        </section>

        {/* 5. How It Works */}
        <section className="max-w-[1280px] mx-auto px-8 pb-[120px]">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-24">Up and Running in 3 Simple Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
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
              <div key={step.num} className="text-center relative">
                <div className="font-display text-[84px] text-[#C15F41] opacity-20 mb-4 leading-none">{step.num}</div>
                <div className="w-4 h-4 bg-[#C15F41] rounded-full mx-auto mb-8 ring-8 ring-[#FAF9F6]"></div>
                <h3 className="font-headline-md text-[24px] text-on-surface mb-4">{step.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <button className="bg-[#C15F41] text-white px-8 py-4 rounded-full font-body-md text-body-md hover:scale-[1.02] transition-transform soft-shadow">
              Book a Free Discovery Call
            </button>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section className="bg-[#F2F1ED] py-[120px]">
          <div className="max-w-[1280px] mx-auto px-8 text-center">
            <h2 className="font-label-caps text-label-caps text-on-surface-variant mb-16 uppercase tracking-widest">
              Trusted by Founders & Busy Professionals
            </h2>
            <div className="max-w-4xl mx-auto relative">
              <span className="absolute -top-12 -left-12 font-display text-[120px] text-[#C15F41] opacity-20 leading-none">“</span>
              <p className="font-headline-md text-[36px] text-on-surface leading-tight mb-12 relative z-10 italic">
                AssistPro didn&apos;t just give me an assistant; they gave me back my evenings. The level of proactivity and attention to detail is unmatched. I finally feel like I&apos;m steering the ship instead of constantly patching leaks.
              </p>
              <div className="flex flex-col items-center gap-4">
                  <Image
                    alt="Client Avatar"
                    className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn4lseu_UlAPmsol6pgRueY3rPNAnh68N-vfI-iwfsh14jNLSvhiLPC5XCK1vHyj5W7-3MYlhngVuZL6ZxYl4zy3gWbNUEyhBePNevfGMeRwiNuFd5IXPK-VlTHzOWn2AwBpXwd8AL3auvKoelTfH2TpRa0aGWmYe91fmxKe5ZnC8PKh0XK1YdrK1wyaHsa3J2Rsvg0HYDstWLRHVrgmPwbJ-te0k12SHI0K9SRY_BWmflJsPzsRwAwvu95IKKBnptBVF7CPp3_6fV"
                    width={80}
                    height={80}
                  />
                <div>
                  <div className="font-headline-md text-[18px] text-on-surface">Sarah Jenkins</div>
                  <div className="font-body-md text-body-md text-on-surface-variant">CEO, TechForward</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CTA Banner */}
        <section className="bg-[#C15F41] py-24">
          <div className="max-w-[1280px] mx-auto px-8 text-center space-y-8">
            <h2 className="font-headline-hero text-headline-hero text-white">Ready to Reclaim Your Time?</h2>
            <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto">
              Stop drowning in details. Partner with a dedicated virtual assistant today and start focusing on what truly matters for your business.
            </p>
            <div className="pt-4">
              <button className="bg-white text-[#C15F41] px-10 py-5 rounded-full font-body-md text-body-md font-bold hover:scale-[1.02] transition-transform shadow-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
