import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - AssistPro",
  description: "Everything you need, done right. Bespoke support tailored to your unique workflow.",
};

export default function Services() {
  return (
    <>
      <Header />
      <main className="max-w-[1280px] mx-auto px-8 pt-24">
        {/* Hero Section */}
        <section className="mt-[120px] mb-[120px] text-center max-w-4xl mx-auto">
          <nav className="flex justify-center items-center space-x-2 text-on-surface-variant font-label-caps text-label-caps mb-8 uppercase">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary">Services</span>
          </nav>
          <h1 className="font-display text-display text-on-surface mb-6">Everything You Need, Done Right</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Bespoke support tailored to your unique workflow. We handle the intricacies so you can focus on the big picture.
          </p>
        </section>

        {/* Services Tabbed Showcase */}
        <section className="mb-[120px]">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Tabs */}
            <div className="lg:w-[30%] flex flex-col space-y-2">
              <button className="text-left px-6 py-4 rounded-xl bg-surface-container text-on-surface font-body-md text-body-md flex justify-between items-center group transition-colors">
                <span className="font-semibold text-primary">Executive Support</span>
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </button>
              {[
                "Inbox & Calendar",
                "Research",
                "Social Media",
                "Project Management",
                "Customer Support",
              ].map((tab) => (
                <button
                  key={tab}
                  className="text-left px-6 py-4 rounded-xl text-on-surface-variant hover:bg-surface-container-low font-body-md text-body-md transition-colors flex justify-between items-center"
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Right Panel */}
            <div className="lg:w-[70%] bg-surface-container-low rounded-[24px] p-2 md:p-4">
              <div className="bg-surface-container-lowest rounded-[20px] p-8 md:p-12 shadow-[0px_12px_32px_rgba(26,26,26,0.04)] border border-surface-variant h-full flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Executive Support</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                    White-glove assistance for top-level professionals. We anticipate your needs, manage your complex schedules, and act as the ultimate gatekeeper, ensuring your time is spent only on high-leverage activities.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Proactive schedule & priority management",
                      "High-level communication drafting",
                      "Travel and itinerary orchestration",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-1">check_circle</span>
                        <span className="font-body-md text-body-md text-on-surface">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {["Gatekeeping", "Confidentiality", "Precision"].map((tag) => (
                      <span key={tag} className="bg-surface-container-low text-on-surface font-label-caps text-label-caps px-4 py-2 rounded-full uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:w-[40%] rounded-xl overflow-hidden bg-surface-container flex items-center justify-center min-h-[300px] relative">
                  <Image
                    alt="Executive workspace"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTkVegVDsvgVQ-y8veYW_VNAq8dXw5Tb-mp5VWQ9wQBllna-URMl-MK2RtL2Uv7s7AwrPc7Kuf-au1NDewBi0SbTP7lJUu7kYOFG5ztNkWpO_ReretnSj7SjD8ajXJ9W0WGjoC3tUqUORHjF3_xxxxM2tkOZDeZrCBgaN-bUyowvWjhYRBwFl4b882I2pjTZR8Bj-R0Z1YYK_6qnrxQ99t6pHq-cZHQwIa5K0PaaWq8ifdDBAR_PUoOQ_3kmKtobjpccvmfwgE2wzQ"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-[120px]">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Transparent Pricing</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Simple tiers to fit the scale of your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pricing Cards */}
            <div className="bg-surface-container-lowest rounded-[24px] p-8 border border-surface-variant shadow-[0px_4px_16px_rgba(26,26,26,0.02)] flex flex-col">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Starter</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 pb-6 border-b border-surface-variant">Essential support for focused individuals.</p>
              <div className="mb-8">
                <span className="font-display text-[48px] font-semibold text-on-surface">$500</span>
                <span className="font-body-md text-on-surface-variant">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px]">done</span> 20 hours per month
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px]">done</span> Dedicated Assistant
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px]">done</span> Standard Response Time
                </li>
              </ul>
              <button className="w-full border border-on-surface text-on-surface font-body-md text-body-md py-3 rounded-full hover:bg-surface-container-low transition-colors">
                Select Starter
              </button>
            </div>
            
            <div className="bg-surface-container-lowest rounded-[24px] p-8 border-2 border-[#994125] shadow-[0px_16px_40px_rgba(26,26,26,0.08)] flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#994125] text-white font-label-caps text-label-caps px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Growth</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 pb-6 border-b border-surface-variant">Expanded capacity for growing teams.</p>
              <div className="mb-8">
                <span className="font-display text-[48px] font-semibold text-on-surface">$1,200</span>
                <span className="font-body-md text-on-surface-variant">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-[#994125] text-[18px]">done</span> 50 hours per month
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-[#994125] text-[18px]">done</span> Dedicated Assistant + Backup
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-[#994125] text-[18px]">done</span> Priority Response Time
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-[#994125] text-[18px]">done</span> Strategic Consultation
                </li>
              </ul>
              <button className="w-full bg-[#994125] text-white font-body-md text-body-md py-3 rounded-full hover:scale-[1.02] transition-transform shadow-md">
                Select Growth
              </button>
            </div>

            <div className="bg-surface-container-lowest rounded-[24px] p-8 border border-surface-variant shadow-[0px_4px_16px_rgba(26,26,26,0.02)] flex flex-col">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Executive</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 pb-6 border-b border-surface-variant">Comprehensive support suite.</p>
              <div className="mb-8">
                <span className="font-display text-[48px] font-semibold text-on-surface">$2,500</span>
                <span className="font-body-md text-on-surface-variant">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px]">done</span> 120 hours per month
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px]">done</span> Full Support Team
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px]">done</span> Immediate Response Time
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px]">done</span> Advanced Analytics
                </li>
              </ul>
              <button className="w-full border border-on-surface text-on-surface font-body-md text-body-md py-3 rounded-full hover:bg-surface-container-low transition-colors">
                Select Executive
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-[120px] max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              "How do you match me with an assistant?",
              "Can hours roll over to the next month?",
              "What software do your assistants use?",
              "Is there a long-term commitment?",
            ].map((q) => (
              <div key={q} className="border-b border-surface-variant pb-4">
                <button className="w-full flex justify-between items-center py-4 text-left group">
                  <span className="font-headline-md text-[24px] text-on-surface group-hover:text-primary transition-colors">{q}</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
