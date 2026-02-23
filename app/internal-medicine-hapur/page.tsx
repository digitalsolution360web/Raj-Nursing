"use client";

import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Activity, ShieldCheck, Heart, UserCheck, Clock, ArrowRight, CheckCircle2, FlaskConical, Thermometer, Brain, Sparkles, Phone } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function InternalMedicinePage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen animate-page-enter mt-32">
      {/* Hero Section - brand theme #9d174d, no clipping, strong overlay so no background text shows */}
      <div className="relative min-h-[380px] md:min-h-[460px] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/raj/banner3.webp"
            alt="Internal Medicine Department"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9d174d] via-[#9d174d]/92 to-[#9d174d]/50 z-10" />
        </div>

        <div className="relative z-20 w-full max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-14 md:py-20">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-rose-200 fill-rose-200 shrink-0" />
              <span>{t("internalMedicine.badge")}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight drop-shadow-sm">
              {t("internalMedicine.heroTitle")}<br /><span className="text-rose-200">{t("internalMedicine.heroTitleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
              {t("internalMedicine.heroDesc")}
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2 pb-2">
              <Link
                href="#appointment"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#9d174d] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-rose-50 transition-all hover:-translate-y-0.5 border-2 border-transparent hover:border-white/50"
              >
                {t("internalMedicine.bookCta")}
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
              <nav className="flex items-center text-sm text-white/80 font-semibold">
                <Link href="/" className="hover:text-white transition-colors">{t("internalMedicine.home")}</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{t("internalMedicine.breadcrumbCurrent")}</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Dr. Vipin - readable overlay */}
        <div className="absolute right-0 bottom-0 h-full w-[45%] z-20 hidden lg:block">
          <Image
            src="/raj/dr.Vipin.jpg"
            alt="Dr. Vipin Kumar Sharma"
            fill
            className="object-contain object-bottom"
          />
          <div className="absolute bottom-10 left-24 right-8 bg-gray-900/90 backdrop-blur-sm p-5 rounded-2xl border border-white/10 shadow-xl">
            <p className="text-white font-black text-lg mb-1">{t("internalMedicine.drName")}</p>
            <p className="text-rose-200 font-bold text-sm tracking-widest uppercase">{t("internalMedicine.drQual")}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-24 sm:py-32">

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Heart, labelKey: "internalMedicine.stat1", color: "text-[#9d174d] bg-rose-50" },
            { icon: FlaskConical, labelKey: "internalMedicine.stat2", color: "text-emerald-600 bg-emerald-50" },
            { icon: ShieldCheck, labelKey: "internalMedicine.stat3", color: "text-[#9d174d] bg-rose-50" },
            { icon: UserCheck, labelKey: "internalMedicine.stat4", color: "text-amber-600 bg-amber-50" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(157,23,77,0.12)] transition-all duration-500 group flex flex-col items-center text-center">
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
              <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">{t("internalMedicine.introLabel")}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.1] tracking-tight">
                {t("internalMedicine.introTitle")}<span className="text-[#9d174d]">{t("internalMedicine.introTitleHighlight")}</span>
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
                <div key={i} className="bg-rose-50/80 p-6 rounded-[2.5rem] border border-rose-100 flex items-start gap-4">
                  <CheckCircle2 className="text-[#9d174d] w-6 h-6 mt-1 flex-shrink-0" />
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#9d174d]/20 to-transparent"></div>
          </div>
        </div>

        {/* Specialized Areas (Cards) */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">{t("internalMedicine.areasLabel")}</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">{t("internalMedicine.areasTitle")}<span className="text-[#9d174d]">{t("internalMedicine.areasTitleHighlight")}</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { titleKey: "internalMedicine.svc1Title", descKey: "internalMedicine.svc1Desc", icon: Activity },
              { titleKey: "internalMedicine.svc2Title", descKey: "internalMedicine.svc2Desc", icon: Thermometer },
              { titleKey: "internalMedicine.svc3Title", descKey: "internalMedicine.svc3Desc", icon: Brain }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-rose-50 text-[#9d174d] rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-4 tracking-tight">{t(service.titleKey)}</h4>
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                {t("internalMedicine.ctaTitle")}<span className="text-rose-200">{t("internalMedicine.ctaHighlight")}</span>
              </h2>
              <p className="text-2xl text-white/80 font-medium leading-relaxed">
                {t("internalMedicine.ctaDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-[#9d174d] px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-all">
                  <Phone className="w-8 h-8" /> +91 63979 70802
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-4 bg-[#9d174d]/80 backdrop-blur-md border border-white/30 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-[#831843] transition-all">
                  {t("internalMedicine.bookVisit")}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[4rem] border border-white/20 space-y-8">
                <h3 className="text-xl md:text-2xl font-black text-rose-200">{t("internalMedicine.waitFreeTitle")}</h3>
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
