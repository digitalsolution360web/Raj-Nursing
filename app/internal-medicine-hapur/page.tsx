"use client";

import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Activity, ShieldCheck, Heart, UserCheck, Clock, ArrowRight, CheckCircle2, FlaskConical, Thermometer, Brain, Sparkles, Phone } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function InternalMedicinePage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen animate-page-enter mt-32">
      {/* Hero Section */}
      <div className="relative h-[450px] md:h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/raj/banner3.webp"
            alt="Internal Medicine Department"
            fill
            className="object-cover object-center scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d4ed8] via-[#1d4ed8]/90 to-transparent z-10"></div>
        </div>

        <div className="container mx-auto px-6 z-20 relative">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex mt-10 items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold animate-float tracking-wide">
              <Sparkles className="w-4 h-4 text-blue-200 fill-blue-200" />
              <span>{t("internalMedicine.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              {t("internalMedicine.heroTitle")}<br /><span className="text-blue-200">{t("internalMedicine.heroTitleHighlight")}</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
              {t("internalMedicine.heroDesc")}
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Link href="#appointment" className="px-10 py-5 bg-white text-[#1d4ed8] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-blue-50 transition-all transform hover:-translate-y-1">
                {t("internalMedicine.bookCta")} <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <nav className="flex items-center text-sm text-white/80 py-3 font-semibold">
                <Link href="/" className="hover:text-white transition-colors">{t("internalMedicine.home")}</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{t("internalMedicine.breadcrumbCurrent")}</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Floating Decoration */}
        <div className="absolute right-0 bottom-0 h-full w-[45%] z-20 hidden lg:block opacity-90 transition-transform hover:scale-105 duration-1000">
          <Image
            src="/raj/dr.Vipin.jpg"
            alt="Dr. Vipin Kumar Sharma"
            fill
            className="object-contain object-bottom"
          />
          <div className="absolute bottom-10 left-32 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl">
            <p className="text-white font-black text-xl mb-1">{t("internalMedicine.drName")}</p>
            <p className="text-blue-200 text-sm font-bold tracking-widest uppercase">{t("internalMedicine.drQual")}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-24 sm:py-32">

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Heart, labelKey: "internalMedicine.stat1", color: "text-blue-600 bg-blue-50" },
            { icon: FlaskConical, labelKey: "internalMedicine.stat2", color: "text-emerald-600 bg-emerald-50" },
            { icon: ShieldCheck, labelKey: "internalMedicine.stat3", color: "text-indigo-600 bg-indigo-50" },
            { icon: UserCheck, labelKey: "internalMedicine.stat4", color: "text-amber-600 bg-amber-50" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(29,78,216,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
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
              <span className="text-blue-700 font-black tracking-[0.3em] uppercase text-sm">{t("internalMedicine.introLabel")}</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                {t("internalMedicine.introTitle")}<span className="text-blue-700">{t("internalMedicine.introTitleHighlight")}</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-medium">
              <p>{t("internalMedicine.introP1")}</p>
              <p>{t("internalMedicine.introP2")}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { titleKey: "internalMedicine.focus1Title", descKey: "internalMedicine.focus1Desc" },
                { titleKey: "internalMedicine.focus2Title", descKey: "internalMedicine.focus2Desc" }
              ].map((f, i) => (
                <div key={i} className="bg-blue-50/50 p-6 rounded-[2.5rem] border border-blue-100 flex items-start gap-4">
                  <CheckCircle2 className="text-blue-700 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-black text-gray-900 mb-1">{t(f.titleKey)}</h5>
                    <p className="text-sm text-gray-500 font-medium">{t(f.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-white ring-1 ring-gray-100">
            <Image
              src="/internal1.jpg"
              alt="Physician Consultation"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
          </div>
        </div>

        {/* Specialized Areas (Cards) */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <span className="text-blue-700 font-black tracking-[0.3em] uppercase text-sm">{t("internalMedicine.areasLabel")}</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">{t("internalMedicine.areasTitle")}<span className="text-blue-700">{t("internalMedicine.areasTitleHighlight")}</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { titleKey: "internalMedicine.svc1Title", descKey: "internalMedicine.svc1Desc", icon: Activity },
              { titleKey: "internalMedicine.svc2Title", descKey: "internalMedicine.svc2Desc", icon: Thermometer },
              { titleKey: "internalMedicine.svc3Title", descKey: "internalMedicine.svc3Desc", icon: Brain }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{t(service.titleKey)}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{t(service.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section (Blue Gradient) */}
        <div id="appointment" className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#1d4ed8] to-[#1e40af] p-12 md:p-24 text-white group">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Stethoscope className="w-64 h-64 rotate-12" />
          </div>
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-20 items-center relative z-10">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                {t("internalMedicine.ctaTitle")}<span className="text-blue-200">{t("internalMedicine.ctaHighlight")}</span>
              </h2>
              <p className="text-2xl text-white/80 font-medium leading-relaxed">
                {t("internalMedicine.ctaDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-blue-700 px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-all">
                  <Phone className="w-8 h-8" /> +91 63979 70802
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-4 bg-blue-800/40 backdrop-blur-md border border-white/30 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-blue-800/60 transition-all">
                  {t("internalMedicine.bookVisit")}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[4rem] border border-white/20 space-y-8">
                <h3 className="text-2xl font-black text-blue-200">{t("internalMedicine.waitFreeTitle")}</h3>
                <div className="space-y-4">
                  {[
                    t("internalMedicine.waitFree1"),
                    t("internalMedicine.waitFree2"),
                    t("internalMedicine.waitFree3"),
                    t("internalMedicine.waitFree4")
                  ].map((li, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="font-bold tracking-tight">{li}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
