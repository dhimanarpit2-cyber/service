import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - AssistPro",
  description: "The team behind your time freedom. We believe that true luxury is having the time to focus on what matters most.",
};

export default function About() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-8 pt-[80px] pb-[60px] text-center">
          <h1 className="font-headline-hero text-4xl md:text-6xl lg:text-8xl text-on-surface mb-8 max-w-[900px] mx-auto leading-tight">
            The Team Behind Your Time Freedom
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-[600px] mx-auto mb-12 md:mb-16">
            We believe that true luxury is having the time to focus on what matters most. Our bespoke assistance is designed to elevate your daily operations with quiet efficiency.
          </p>
          <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-[32px] md:rounded-card overflow-hidden shadow-soft relative">
            <Image
              alt="Hero Image"
              className="w-full h-full object-cover object-center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKsCJH7ddHdJ9RdBIrnUOLp9HjtxKcpDAEX0hdDgCdnBJ739rc_ckL3Zp94DikDTxwgsGeb4kM8gU19GmTJOVql7uVeBREYMM7mMQe65rZciWlyQJqRyLFRcDcK9-kBWyJQJiL0zyPDDnTF4zYolCVybJR_dgaaj5LPiUizfK5ybepT7I3HM3yMjC8KUh-DbX0O_kGxxxCUkcvArGalU-vewpG4gh0xgbXSmUrF0_v5kfseeWtijRrvT7QihihnFEhfPwP2aCd5bhk"
              fill
              priority
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="pr-0 md:pr-16 relative">
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-[#EAE9E6]"></div>
              <blockquote className="font-headline-lg text-headline-lg text-[#994125] italic">
                &quot;Our mission is to replace the friction of daily logistics with seamless, anticipatory support.&quot;
              </blockquote>
            </div>
            <div className="pl-0 md:pl-16">
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Founded on the principles of high-end editorial management, AssistPro operates in the background, ensuring your foreground is clear. We don&apos;t just complete tasks; we curate your time.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every assistant is rigorously trained to adopt a proactive mindset, acting as a true extension of your own capabilities. Experience the calm that comes with uncompromising reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[80px] bg-surface-bright rounded-card my-[80px] shadow-soft">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Core Principles</h2>
            <div className="w-16 h-[1px] bg-outline mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "verified_user",
                title: "Reliability",
                desc: "Unwavering consistency in execution. We are the steadfast foundation upon which you can build your day without second-guessing.",
              },
              {
                icon: "lock",
                title: "Confidentiality",
                desc: "Absolute discretion is our standard. Your data, conversations, and strategies remain secure within our strictly curated environment.",
              },
              {
                icon: "bolt",
                title: "Proactivity",
                desc: "Anticipating needs before they become requests. We stay three steps ahead to eliminate roadblocks from your path.",
              },
              {
                icon: "star",
                title: "Excellence",
                desc: "A commitment to the highest standard of quality. Every task, regardless of size, is executed with precision and polish.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-surface-container-lowest p-12 rounded-card shadow-soft hover:shadow-soft-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {value.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{value.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-[80px]">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">People You&apos;ll Actually Enjoy Working With</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px] mx-auto">
              Meticulously vetted professionals who bring warmth alongside unparalleled competence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Eleanor Vance",
                role: "Director of Operations",
                quote: "I thrive on turning chaotic schedules into calm, structured symphonies.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQeN5pYhIc5M3_Y9SKkolol6WB7gJEeaNaf_4d-QHNn8HCMWZcgV8qdGWoAPk_M2wmwi2J7MAaUhrSKo7EJygmP8U0oaA5Y2K-f2OEfSRrZh2fEdoumtEqIezbUF22uZ8_DGZ5396TBrWiSNH9GNNv0nGKDqppLTNLywngNYN5IOH8-uHdoxy_bfaU27jp9RZxl7k1RzsBaMs0575Nk8NAg1dsjokC-7jrC1M5pzgvMro_ODBVqUdRV_OtLiUOS3csFcmbaBsNmOlc",
                offset: "",
              },
              {
                name: "Julian Hayes",
                role: "Lead Executive Assistant",
                quote: "Anticipation is the greatest luxury I can offer my clients.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn4TGOzGyGvwk_lwKPbHb2APDX7E8QYqMxs2Amf841WwdcmHBdCKLyzbhzCLBD2TDYGIUYY5ZoHdW45_zN9y7KbgZZDA0XRk_IsXhJ8QtlSw0wZ3thTF5WdL5pNPqrmLN4p7TMHLgeltQmww5zFqJgdAoXet16aVCKX9Obw6m3qOyGzsgJV2hQkIK0GTjNJJlMzuCVYV3IQ2fXdsq_n2e9NlxR9v54JrvzlMSWYBWKNVPxPDWJPtgLOtQSRhkFNLIl9paaXLBG-06C",
                offset: "md:mt-12",
              },
              {
                name: "Clara Lin",
                role: "Client Success Manager",
                quote: "Connecting the right bespoke support to the right ambitious vision.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWjElo4_apWTRqjke3O6bQ-vBE2maRqanUN7NAgfxfnkHDqGYb7JVhxz5aOFu4SK1CGu5uhwTquMVAVQYo08wZHJ9J-UBxX6wQy59t8DChvrmg4BfR2AZpD5SOrtNt9omrGTeWJ-w03LwM8Azqs7r9xjsVSHsbcQPXPakvjl7CZ1asu2BZ7_Xr9Y_eYGxyxHJes72LTM8NIoUZ4lpyt91tFGF3a9_eetYh2NRvyRIyBOWHHBgvyYMdnRXFUmImiuZ7Ahw8fRUZ1tmL",
                offset: "md:mt-24",
              },
            ].map((member) => (
              <div
                key={member.name}
                className={`group relative bg-surface-container-lowest rounded-card overflow-hidden shadow-soft hover:shadow-soft-hover hover:-translate-y-2 transition-all duration-500 ${member.offset}`}
              >
                <div className="h-[400px] overflow-hidden relative">
                  <Image
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={member.img}
                    fill
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-1">{member.name}</h3>
                  <p className="font-label-caps text-label-caps text-primary uppercase mb-6">{member.role}</p>
                  <div className="h-[1px] w-full bg-[#EAE9E6] mb-6"></div>
                  <p className="font-body-md text-body-md text-on-surface-variant italic">&quot;{member.quote}&quot;</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-[1280px] mx-auto px-8 py-[80px]">
          <div className="text-center mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The AssistPro Difference</h2>
            <div className="w-16 h-[1px] bg-outline mx-auto"></div>
          </div>
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24">
            <div className="h-[500px] rounded-card overflow-hidden shadow-soft relative">
              <Image
                alt="Minimalist Office"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_vQF_6yCNuElYmKls2h5y0V1aFGuWjoabJ-VEHnuStKGJ7wc1ziDrF0Vhkas6L9f7BgUDsRbEtePZfESHiKK6IApN-DlPLyNbBMTMyZ4dVAY1GdxGh4qug6WxTVrhVXlfR_kUa2JsaJFQKxcaEsomLBx2WqnYLWpxb0ROq4X8H6cXXJr8uqscZfBUIzDnyh1WQ4cMIpk5U0OVfS3r0DOGPcydaugGovjoiNRu4hDbdPCywxFuUB80rW3wGYBeXgFL2dmoc3cq8XZQ"
                fill
              />
            </div>
            <div className="pl-0 md:pl-16 mt-8 md:mt-0">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-surface-container-low mb-6">
                <span className="font-label-caps text-label-caps text-on-surface">Curated Matching</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Beyond Skills, We Match Chemistry</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We look past mere resumes. Our proprietary vetting process ensures that your assistant not only possesses the required technical acumen but perfectly aligns with your communication style and working tempo.
              </p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="pr-0 md:pr-16 mb-8 md:mb-0 order-2 md:order-1">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-surface-container-low mb-6">
                <span className="font-label-caps text-label-caps text-on-surface">Seamless Integration</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Zero Onboarding Friction</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We handle the administrative burden of integration. From day one, your AssistPro professional steps into your workflow quietly and efficiently, requiring minimal direction to begin generating value.
              </p>
            </div>
            <div className="h-[500px] rounded-card overflow-hidden shadow-soft order-1 md:order-2 relative">
              <Image
                alt="Seamless Work"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLdUyynz-MjQwAo_B2F3bJWIHjC-ta4wZSIwFQOp-jkpkK3fxrHoD-PX24kZc0ifuJ8x-SomSTXugwtMRbfiEh_IhbrnJCzKM3Y17GpFEVNU-ZwvXykTh1bOgBV-iJGm8JBPPSpge4N5ObaSGAUVFRU0lw50wt5afN6CzVbm2LBWpDpUbLhLOl8XgjkKf4VKcCJaZLQlyYSuxZ3yIN75zbo4g-rm2Df1iWr5jGuh0myaA01DLDlH2E5GU7LqmSpL1CnldzBFJ3p9bc"
                fill
              />
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-[1280px] mx-auto px-8 pb-16">
          <div className="bg-[#C15F41] rounded-[48px] overflow-hidden relative group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-20 flex flex-col justify-center items-start text-left space-y-8 relative z-10">
                <h2 className="font-headline-hero text-headline-hero text-white leading-tight">
                  Ready to Reclaim <br className="hidden md:block" /> Your Time?
                </h2>
                <p className="font-body-lg text-body-lg text-white/80 max-w-md">
                  Partner with a dedicated virtual assistant today and experience the calm of uncompromising reliability.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="inline-block bg-white text-[#C15F41] px-12 py-5 rounded-full font-body-md text-body-md font-bold hover:bg-stone-100 hover:shadow-2xl transition-all duration-300">
                    Get Started Today
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-full overflow-hidden">
                <Image
                  alt="Minimalist productive workspace"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#C15F41] via-transparent to-transparent lg:block hidden" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
