"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Microscope, Activity, ShieldCheck, Heart, UserCheck, Phone, CheckCircle2, FlaskConical, Scan, Syringe, Sparkles } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function DiagnosticCenterHapur() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen animate-page-enter mt-32">
      {/* Hero Section */}
      <div className="relative min-h-[320px] md:min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/raj/banner1.webp"
            alt="Advanced Diagnostic Center Hapur"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0369a1] via-[#0369a1]/85 to-[#0369a1]/40 z-10"></div>
        </div>

        <div className="container mx-auto px-6 z-20 relative">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex mt-10 items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold animate-float tracking-wide">
              <Sparkles className="w-4 h-4 text-cyan-200 fill-cyan-200" />
              <span>{t("diagnosticCenter.badge")}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
              {t("diagnosticCenter.heroTitle")}<br /><span className="text-cyan-200">{t("diagnosticCenter.heroTitleHighlight")}</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
              {t("diagnosticCenter.heroDesc")}
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Link href="#appointment" className="px-10 py-5 bg-white text-[#0369a1] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-cyan-50 transition-all transform hover:-translate-y-1">
                {t("diagnosticCenter.bookCta")} <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <nav className="flex items-center text-sm text-white/80 py-3 font-semibold">
                <Link href="/" className="hover:text-white transition-colors">{t("diagnosticCenter.home")}</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{t("diagnosticCenter.breadcrumbCurrent")}</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Floating - full image */}
        <div className="absolute right-0 top-0 bottom-0 w-[42%] max-w-[420px] z-20 hidden lg:flex items-end justify-center">
          <div className="relative w-full h-full min-h-[450px]">
            <Image
              src="/Diagnostic.jpg"
              alt="Laboratory Tech"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 0px, 420px"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-24 sm:py-32">

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Microscope, labelKey: "diagnosticCenter.stat1", color: "text-blue-600 bg-blue-50" },
            { icon: Scan, labelKey: "diagnosticCenter.stat2", color: "text-cyan-600 bg-cyan-50" },
            { icon: FlaskConical, labelKey: "diagnosticCenter.stat3", color: "text-emerald-600 bg-emerald-50" },
            { icon: UserCheck, labelKey: "diagnosticCenter.stat4", color: "text-slate-600 bg-slate-50" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(3,105,161,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
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
              <span className="text-cyan-700 font-black tracking-[0.3em] uppercase text-sm">{t("diagnosticCenter.introLabel")}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.1] tracking-tight">
                {t("diagnosticCenter.introTitle")}<span className="text-cyan-700">{t("diagnosticCenter.introTitleHighlight")}</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-medium">
              <p>{t("diagnosticCenter.introP1")}</p>
              <p>{t("diagnosticCenter.introP2")}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                t("diagnosticCenter.introL1"),
                t("diagnosticCenter.introL2"),
                t("diagnosticCenter.introL3"),
                t("diagnosticCenter.introL4")
              ].map((li, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  <span className="font-bold text-gray-800 tracking-tight">{li}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-white ring-1 ring-gray-100">
            <Image
              src="/Diagnostic3.jpg"
              alt="Advanced Diagnostic Lab"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </div>

        {/* Diagnostic Services (Cards) */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <span className="text-cyan-700 font-black tracking-[0.3em] uppercase text-sm">{t("diagnosticCenter.coreLabel")}</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">{t("diagnosticCenter.coreTitle")}<span className="text-cyan-700">{t("diagnosticCenter.coreHighlight")}</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { titleKey: "diagnosticCenter.pathLabTitle", descKey: "diagnosticCenter.pathLabDesc", icon: FlaskConical },
              { titleKey: "diagnosticCenter.digitalImgTitle", descKey: "diagnosticCenter.digitalImgDesc", icon: Scan },
              { titleKey: "diagnosticCenter.bloodCenterTitle", descKey: "diagnosticCenter.bloodCenterDesc", icon: Syringe }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center hover:border-cyan-100">
                <div className="w-16 h-16 bg-cyan-50 text-cyan-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{t(service.titleKey)}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{t(service.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section (Cyan Gradient) */}
        <div id="appointment" className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#0369a1] to-[#0c4a6e] p-12 md:p-24 text-white group">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Microscope className="w-64 h-64 rotate-12" />
          </div>
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-20 items-center relative z-10">
            <div className="space-y-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                {t("diagnosticCenter.ctaTitle")} <br /><span className="text-cyan-200">{t("diagnosticCenter.ctaHighlight")}</span>
              </h2>
              <p className="text-2xl text-cyan-50 font-medium leading-relaxed">
                {t("diagnosticCenter.ctaDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-cyan-900 px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-all">
                  <Phone className="w-8 h-8" /> {t("diagnosticCenter.bookHomeVisit")}
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-4 bg-cyan-800/40 backdrop-blur-md border border-white/30 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-cyan-800/60 transition-all uppercase tracking-widest text-center">
                  {t("diagnosticCenter.seeAllTests")}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[4rem] border border-white/20 space-y-8">
                <h3 className="text-2xl font-black text-cyan-200">{t("diagnosticCenter.labPromiseTitle")}</h3>
                <div className="space-y-4">
                  {[
                    t("diagnosticCenter.labPromise1"),
                    t("diagnosticCenter.labPromise2"),
                    t("diagnosticCenter.labPromise3"),
                    t("diagnosticCenter.labPromise4")
                  ].map((li, i) => (
                    <div key={i} className="flex items-center gap-4 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold tracking-tight">{li}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion Box */}
        <div className="mt-32 bg-gray-50 rounded-[4rem] p-12 md:p-20 text-center border border-gray-100">
          <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">{t("diagnosticCenter.partnerTitle")}</h3>
          <p className="text-xl font-medium text-gray-500 leading-relaxed max-w-4xl mx-auto italic">
            &quot;{t("diagnosticCenter.partnerQuote")}&quot;
          </p>
        </div>

      </div>
    </div>
  );
}
