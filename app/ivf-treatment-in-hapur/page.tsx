"use client";

import Image from "next/image";
import Link from "next/link";
import { Baby, HeartHandshake, Microscope, Dna, ArrowRight, ShieldCheck, Clock, UserCheck, Activity, Heart, CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function IvfTreatmentPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen animate-page-enter mt-32">
      {/* Hero Section - no clipping, proper padding */}
      <div className="relative min-h-[380px] md:min-h-[460px] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/raj/banner1.webp"
            alt="IVF & Fertility Center in Hapur"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9d174d] via-[#9d174d]/85 to-[#9d174d]/40 z-10" />
        </div>

        <div className="relative z-20 w-full max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-14 md:py-20">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-rose-300 fill-rose-300 shrink-0" />
              <span>{t("ivfTreatment.badge")}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
              {t("ivfTreatment.heroTitle")}<br /><span className="text-rose-300">{t("ivfTreatment.heroTitleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
              {t("ivfTreatment.heroDesc")}
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2 pb-2">
              <Link
                href="#appointment"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#9d174d] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-rose-50 transition-all hover:-translate-y-0.5 border-2 border-transparent hover:border-white/50"
              >
                {t("ivfTreatment.bookCta")}
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
              <nav className="flex items-center text-sm text-white/80 font-semibold">
                <Link href="/" className="hover:text-white transition-colors">{t("ivfTreatment.home")}</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{t("ivfTreatment.breadcrumbCurrent")}</span>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-24 sm:py-32">

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Baby, labelKey: "ivfTreatment.stat1", color: "text-rose-600 bg-rose-50" },
            { icon: Microscope, labelKey: "ivfTreatment.stat2", color: "text-blue-600 bg-blue-50" },
            { icon: HeartHandshake, labelKey: "ivfTreatment.stat3", color: "text-amber-600 bg-amber-50" },
            { icon: UserCheck, labelKey: "ivfTreatment.stat4", color: "text-emerald-600 bg-emerald-50" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(157,23,77,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
              <div className={`p-5 rounded-3xl ${item.color} group-hover:scale-110 transition-transform duration-500 mb-6 shadow-sm`}>
                <item.icon className="w-8 h-8" />
              </div>
              <span className="font-extrabold text-gray-900 text-lg md:text-xl tracking-tight leading-tight">{t(item.labelKey)}</span>
            </div>
          ))}
        </div>

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-10 animate-page-enter">
            <div className="space-y-5">
              <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">{t("ivfTreatment.introLabel")}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.1] tracking-tight">
                {t("ivfTreatment.introTitle")}<span className="text-[#9d174d]">{t("ivfTreatment.introTitleHighlight")}</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-medium">
              <p>{t("ivfTreatment.introP1")}</p>
              <p>{t("ivfTreatment.introP2")}</p>
            </div>
            <div className="bg-rose-50 border-l-4 border-[#9d174d] p-8 rounded-r-[2rem] shadow-sm">
              <p className="italic text-[#9d174d] text-xl font-semibold leading-relaxed">
                &quot;{t("ivfTreatment.introQuote")}&quot;
              </p>
            </div>
          </div>
          <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-white ring-1 ring-gray-100">
            <Image
              src="/IVF.jpg"
              alt="IVF Laboratory Center"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#9d174d]/40 to-transparent"></div>
          </div>
        </div>

        {/* Detailed Services (Styled as Cards) */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">{t("ivfTreatment.expertiseLabel")}</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">{t("ivfTreatment.expertiseTitle")}<span className="text-[#9d174d]">{t("ivfTreatment.expertiseTitleHighlight")}</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "IVF Specialist Center", desc: "Advanced egg retrieval and embryo transfer protocols using state-of-the-art laboratory standards.", icon: Dna },
              { title: "IUI (Intrauterine Insemination)", desc: "A simpler fertility procedure that places sperm directly into the uterus during ovulation.", icon: Activity },
              { title: "Fertility Evaluation", desc: "Comprehensive testing for both partners to identify and address the root causes of infertility.", icon: Microscope },
              { title: "Supporting Care", desc: "Hormonal therapy, monitoring, and lifestyle guidance to optimize reproductive health.", icon: Heart }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group flex items-start gap-8">
                <div className="w-16 h-16 bg-rose-50 text-[#9d174d] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                  <service.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-3 tracking-tight">{service.title}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us (Dark Section) */}
        <div className="mb-32 bg-[#9d174d] p-8 md:p-24 rounded-[5rem] text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-10">
              <h3 className="text-xl md:text-2xl font-black leading-tight tracking-tight">
                Why Couples Trust <br /><span className="text-rose-300">Raj IVF Center?</span>
              </h3>
              <div className="space-y-6">
                {[
                  { t: "Advanced Lab Standards", d: "Equipped with the latest incubation and monitoring tech." },
                  { t: "Personalized Protocols", d: "No one-size-fits-all. Every plan is unique to you." },
                  { t: "Caring Environment", d: "Sensitive care in a respectful and supportive setting." },
                  { t: "Transparent Success", d: "Clear communication regarding expectations and outcomes." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group/item backdrop-blur-md bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6 text-rose-300" />
                    </div>
                    <div>
                      <h5 className="font-black text-xl tracking-tight mb-1">{item.t}</h5>
                      <p className="text-rose-100 font-medium opacity-80">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[650px] rounded-[4rem] overflow-hidden border-[12px] border-white/10 ring-1 ring-white/20 shadow-2xl skew-y-1">
              <Image src="/IVF2.jpg" alt="IVF Success" fill className="object-cover brightness-110" />
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div id="appointment" className="max-w-[1420px] mx-auto">
          <div className="relative rounded-[4rem] overflow-hidden bg-gray-50 p-12 md:p-24 flex flex-col items-center text-center space-y-10">
            <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center text-[#9d174d] animate-bounce">
              <Heart className="w-12 h-12 fill-[#9d174d]" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Start Your <span className="text-[#9d174d]">Parenthood Dream</span> Today
            </h2>
            <p className="text-2xl text-gray-500 font-medium max-w-3xl">
              Don't let infertility stand in the way. Schedule a confidential consultation with our fertility experts in Hapur.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
              <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-[#9d174d] text-white px-12 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl hover:bg-[#831843] transition-all transform hover:-translate-y-1 uppercase tracking-widest">
                <Activity className="w-8 h-8" /> Call IVF Center
              </Link>
              <Link href="/contact" className="flex items-center justify-center gap-4 bg-white border border-gray-200 text-gray-900 px-12 py-6 rounded-[2.5rem] font-black text-xl transition-all hover:bg-gray-50 uppercase tracking-widest shadow-lg">
                Book Visit
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
