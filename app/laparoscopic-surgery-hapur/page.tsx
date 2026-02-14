"use client";

import Image from "next/image";
import Link from "next/link";
import { Scissors, Activity, Zap, ShieldCheck, ArrowRight, Clock, UserCheck, Microscope, Sparkles, Phone } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function LaparoscopicSurgeryPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen animate-page-enter mt-32">
      {/* Hero Section */}
      <div className="relative min-h-[450px] md:min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/raj/banner1.webp"
            alt="Advanced Laparoscopic Center"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4338ca] via-[#4338ca]/85 to-[#4338ca]/40 z-10"></div>
        </div>

        <div className="container mx-auto px-6 z-20 relative">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex mt-10 items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold animate-float tracking-wide">
              <Sparkles className="w-4 h-4 text-indigo-200 fill-indigo-200" />
              <span>{t("laparoscopicSurgery.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              {t("laparoscopicSurgery.heroTitle")}<br /><span className="text-indigo-200">{t("laparoscopicSurgery.heroTitleHighlight")}</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
              {t("laparoscopicSurgery.heroDesc")}
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Link href="#appointment" className="px-10 py-5 bg-white text-[#4338ca] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-indigo-50 transition-all transform hover:-translate-y-1">
                {t("laparoscopicSurgery.bookCta")} <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <nav className="flex items-center text-sm text-white/80 py-3 font-semibold">
                <Link href="/" className="hover:text-white transition-colors">{t("laparoscopicSurgery.home")}</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{t("laparoscopicSurgery.breadcrumbCurrent")}</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Floating - full image */}
        <div className="absolute right-0 top-0 bottom-0 w-[42%] max-w-[420px] z-20 hidden lg:flex items-end justify-center">
          <div className="relative w-full h-full min-h-[450px]">
            <Image
              src="/raj/M.C.Sharma.jpg"
              alt="Senior Surgeon"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 0px, 420px"
            />
          </div>
          <div className="absolute bottom-10 left-32 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl text-white">
            <p className="font-black text-xl mb-1">{t("laparoscopicSurgery.drName")}</p>
            <p className="text-indigo-200 text-sm font-bold tracking-widest uppercase text-center">{t("laparoscopicSurgery.seniorSurgeon")}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-24 sm:py-32">

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Zap, labelKey: "laparoscopicSurgery.stat1", color: "text-indigo-600 bg-indigo-50" },
            { icon: Scissors, labelKey: "laparoscopicSurgery.stat2", color: "text-rose-600 bg-rose-50" },
            { icon: ShieldCheck, labelKey: "laparoscopicSurgery.stat3", color: "text-emerald-600 bg-emerald-50" },
            { icon: UserCheck, labelKey: "laparoscopicSurgery.stat4", color: "text-blue-600 bg-blue-50" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(67,56,202,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
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
              <span className="text-indigo-700 font-black tracking-[0.3em] uppercase text-sm">{t("laparoscopicSurgery.introLabel")}</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                {t("laparoscopicSurgery.introTitle")}<br /><span className="text-indigo-700">{t("laparoscopicSurgery.introTitleHighlight")}</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-medium">
              <p>{t("laparoscopicSurgery.introP1")}</p>
              <p>{t("laparoscopicSurgery.introP2")}</p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-700 p-8 rounded-r-[2rem] shadow-sm">
              <p className="italic text-indigo-700 text-xl font-semibold leading-relaxed">
                &quot;{t("laparoscopicSurgery.introQuote")}&quot;
              </p>
            </div>
          </div>
          <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-white ring-1 ring-gray-100">
            <Image
              src="/laparoscopic.jpg"
              alt="Laparoscopic Surgery Setup"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </div>

        {/* Surgical Services (Cards) */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <span className="text-indigo-700 font-black tracking-[0.3em] uppercase text-sm">{t("laparoscopicSurgery.expertiseLabel")}</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">{t("laparoscopicSurgery.expertiseTitle")}<span className="text-indigo-700">{t("laparoscopicSurgery.expertiseTitleHighlight")}</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { titleKey: "laparoscopicSurgery.proc1Title", descKey: "laparoscopicSurgery.proc1Desc", icon: Zap },
              { titleKey: "laparoscopicSurgery.proc2Title", descKey: "laparoscopicSurgery.proc2Desc", icon: Microscope },
              { titleKey: "laparoscopicSurgery.proc3Title", descKey: "laparoscopicSurgery.proc3Desc", icon: ShieldCheck }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-700 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-inner">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{t(service.titleKey)}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{t(service.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section (Indigo Gradient) */}
        <div id="appointment" className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#4338ca] to-[#1e1b4b] p-12 md:p-24 text-white group">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Scissors className="w-64 h-64 rotate-45" />
          </div>
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-20 items-center relative z-10">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                {t("laparoscopicSurgery.ctaHeading")} <br /><span className="text-indigo-300">{t("laparoscopicSurgery.ctaHeadingHighlight")}</span>
              </h2>
              <p className="text-2xl text-white/80 font-medium leading-relaxed">
                {t("laparoscopicSurgery.ctaDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-indigo-900 px-12 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl hover:scale-105 transition-all">
                  <Phone className="w-8 h-8" /> +91 63979 70802
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-6 rounded-[2.5rem] font-black text-xl hover:bg-white/20 transition-all uppercase tracking-widest">
                  {t("laparoscopicSurgery.bookConsult")}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative group-hover:scale-105 transition-transform duration-1000 h-[450px]">
              <Image src="/raj/ot.jpg" alt="Modular OT" fill className="object-cover rounded-[3rem] border-8 border-white/10 ring-1 ring-white/20" />
            </div>
          </div>
        </div>

        {/* Final Conclusion Box */}
        <div className="mt-32 bg-gray-50 rounded-[4rem] p-12 md:p-20 border border-gray-100 flex flex-col items-center text-center">
          <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">{t("laparoscopicSurgery.partnerTitle")}</h3>
          <p className="text-2xl font-medium text-gray-500 leading-relaxed max-w-5xl italic">
            &quot;{t("laparoscopicSurgery.partnerQuote")}&quot;
          </p>
        </div>

      </div>
    </div>
  );
}
