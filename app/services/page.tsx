import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ServicesClient from "@/components/ServicesClient";
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
        <section className="mt-[80px] mb-[80px] text-center max-w-4xl mx-auto">
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
        <section className="mb-[80px]">
          <ServicesClient />
        </section>

        {/* Pricing Section */}
        <section className="mb-[80px]">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Transparent Pricing</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Simple tiers to fit the scale of your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-surface-container-lowest rounded-[24px] p-8 border border-surface-variant shadow-[0px_4px_16px_rgba(26,26,26,0.02)] flex flex-col hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
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
              <Link href="/contact" className="w-full border border-on-surface text-on-surface font-body-md text-body-md py-3 rounded-full hover:bg-surface-container-low transition-colors text-center">
                Select Starter
              </Link>
            </div>
            
            {/* Growth */}
            <div className="bg-surface-container-lowest rounded-[24px] p-8 border-2 border-primary shadow-[0px_16px_40px_rgba(26,26,26,0.08)] flex flex-col relative transform md:-translate-y-4 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white font-label-caps text-label-caps px-4 py-1 rounded-full uppercase tracking-wider text-[12px]">
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
                  <span className="material-symbols-outlined text-primary text-[18px]">done</span> 50 hours per month
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">done</span> Dedicated Assistant + Backup
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">done</span> Priority Response Time
                </li>
                <li className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">done</span> Strategic Consultation
                </li>
              </ul>
              <Link href="/contact" className="w-full bg-primary text-white font-body-md text-body-md py-3 rounded-full hover:scale-[1.02] transition-transform shadow-md text-center">
                Select Growth
              </Link>
            </div>

            {/* Executive */}
            <div className="bg-surface-container-lowest rounded-[24px] p-8 border border-surface-variant shadow-[0px_4px_16px_rgba(26,26,26,0.02)] flex flex-col hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
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
              <Link href="/contact" className="w-full border border-on-surface text-on-surface font-body-md text-body-md py-3 rounded-full hover:bg-surface-container-low transition-colors text-center">
                Select Executive
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-[80px] max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How do you match me with an assistant?",
                a: "We conduct a thorough intake process to understand your workflow, communication style, and specific needs. We then match you with an assistant whose skills and experience align perfectly with your requirements."
              },
              {
                q: "Can hours roll over to the next month?",
                a: "While we encourage consistent utilization to ensure team availability, we offer flexible rollover options for our Growth and Executive plans. Contact us for specific details."
              },
              {
                q: "What software do your assistants use?",
                a: "Our team is proficient in all major productivity suites including Google Workspace, Microsoft 365, Slack, Trello, Asana, and many more. We adapt to your preferred tools."
              },
              {
                q: "Is there a long-term commitment?",
                a: "No, all our plans are month-to-month. You can scale up, scale down, or cancel at any time with a 30-day notice."
              },
            ].map((faq) => (
              <details key={faq.q} className="group border-b border-surface-variant">
                <summary className="list-none w-full flex justify-between items-center py-6 cursor-pointer text-left">
                  <span className="font-headline-md text-[24px] text-on-surface group-hover:text-primary transition-colors">{faq.q}</span>
                  <span className="material-symbols-outlined text-on-surface-variant transition-transform duration-300 group-open:rotate-45">add</span>
                </summary>
                <div className="pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
