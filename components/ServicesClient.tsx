"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const SERVICES_DATA = {
  "Executive Support": {
    title: "Executive Support",
    description: "White-glove assistance for top-level professionals. We anticipate your needs, manage your complex schedules, and act as the ultimate gatekeeper, ensuring your time is spent only on high-leverage activities.",
    benefits: [
      "Proactive schedule & priority management",
      "High-level communication drafting",
      "Travel and itinerary orchestration",
    ],
    tags: ["Gatekeeping", "Confidentiality", "Precision"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
  },
  "Inbox & Calendar": {
    title: "Inbox & Calendar",
    description: "Master your day with precision. We handle the noise, filter the junk, and orchestrate a schedule that respects your deep work and personal time.",
    benefits: [
      "Zero-Inbox management",
      "Calendar auditing & optimization",
      "Appointment & meeting coordination",
    ],
    tags: ["Organization", "Flow", "Productivity"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2000",
  },
  "Research": {
    title: "Research",
    description: "Informed decisions made faster. We dig deep into market trends, competitor analysis, and specific inquiries, delivering concise reports that drive your strategy forward.",
    benefits: [
      "Comprehensive market research",
      "Competitor benchmarking",
      "Lead generation & data mining",
    ],
    tags: ["Insights", "Strategy", "Analysis"],
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=2000",
  },
  "Social Media": {
    title: "Social Media",
    description: "Elevate your digital presence. From content scheduling to community engagement, we ensure your brand voice remains consistent and resonant across all platforms.",
    benefits: [
      "Content planning & scheduling",
      "Audience engagement & moderation",
      "Basic analytics reporting",
    ],
    tags: ["Growth", "Presence", "Connection"],
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=2000",
  },
  "Project Management": {
    title: "Project Management",
    description: "Keeping the momentum alive. We coordinate teams, track milestones, and manage deadlines, ensuring every project stays on track and within scope.",
    benefits: [
      "Task tracking & milestone management",
      "Team coordination & follow-ups",
      "Process optimization & documentation",
    ],
    tags: ["Momentum", "Delivery", "Oversight"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2000",
  },
  "Customer Support": {
    title: "Customer Support",
    description: "Exceptional service as a standard. We handle inquiries with empathy and efficiency, turning every interaction into a positive touchpoint for your brand.",
    benefits: [
      "Email & chat support management",
      "FAQ & help center maintenance",
      "Resolution tracking & feedback loops",
    ],
    tags: ["Empathy", "Loyalty", "Excellence"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000",
  },
};

type ServiceKey = keyof typeof SERVICES_DATA;

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState<ServiceKey>("Executive Support");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: ServiceKey) => {
    if (tab === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
    }, 300);
  };

  const currentService = SERVICES_DATA[activeTab];

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Sidebar Tabs */}
      <div className="lg:w-[30%] overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
        <div 
          ref={scrollRef}
          className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-3 min-w-max lg:min-w-0 pr-4 lg:pr-0"
        >
          {(Object.keys(SERVICES_DATA) as ServiceKey[]).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`text-left px-6 py-4 rounded-xl transition-all duration-300 flex justify-between items-center group whitespace-nowrap lg:whitespace-normal ${
                activeTab === tab
                  ? "bg-[#C15F41] text-white shadow-md scale-[1.02]"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              <span className="font-body-md text-body-md">{tab}</span>
              <span className={`material-symbols-outlined hidden lg:block transition-transform duration-300 ${
                activeTab === tab ? "translate-x-1 text-white opacity-100" : "opacity-0 group-hover:opacity-50"
              }`}>
                arrow_forward
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="lg:w-[70%] bg-surface-container-low rounded-[32px] p-2 md:p-4">
        <div className={`bg-surface-container-lowest rounded-[28px] p-8 md:p-12 shadow-[0px_12px_32px_rgba(26,26,26,0.04)] border border-surface-variant h-full flex flex-col md:flex-row gap-12 min-h-[550px] transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex-1 animate-in fade-in slide-in-from-right-8 duration-700">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">{currentService.title}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              {currentService.description}
            </p>
            <div className="space-y-6 mb-10">
              <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[12px]">What you can expect</h4>
              <ul className="space-y-4">
                {currentService.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#C15F41] text-[22px] mt-0.5">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-variant">
              {currentService.tags.map((tag) => (
                <span key={tag} className="bg-surface-container text-on-surface-variant font-label-caps text-label-caps px-4 py-1.5 rounded-full uppercase tracking-wider text-[10px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:w-[45%] rounded-2xl overflow-hidden bg-surface-container flex items-center justify-center min-h-[350px] relative group animate-in zoom-in-95 duration-1000">
            <Image
              alt={currentService.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src={currentService.image}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#C15F41]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
