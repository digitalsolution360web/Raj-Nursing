"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap, Activity, ShieldCheck, Clock, ArrowRight, UserCheck, Microscope, Camera, Sparkles, Phone } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function XrayPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-white min-h-screen animate-page-enter pt-24 sm:pt-28 md:mt-32">
            {/* Hero Section - responsive */}
            <div className="relative min-h-[380px] sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/raj/banner1.webp"
                        alt="Advanced Digital X-Ray Center"
                        fill
                        className="object-cover object-center scale-105 animate-pulse-slow"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#701a2e] via-[#701a2e]/90 to-transparent z-10"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 z-20 relative w-full">
                    <div className="max-w-4xl space-y-4 sm:space-y-6 md:space-y-8">
                        <div className="inline-flex mt-6 sm:mt-10 items-center gap-2 px-4 py-2 sm:px-5 py-2.5 rounded-full glass text-white text-xs sm:text-sm font-bold animate-float tracking-wide">
                            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-300 fill-rose-300" />
                            <span>{t("digitalXRay.badge")}</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                            {t("digitalXRay.heroTitle")}<br /><span className="text-rose-400">{t("digitalXRay.heroTitleHighlight")}</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
                            {t("digitalXRay.heroDesc")}
                        </p>
                        <div className="flex flex-wrap gap-3 sm:gap-5 pt-2 sm:pt-4">
                            <Link href="#appointment" className="px-6 py-3.5 sm:px-10 sm:py-5 bg-white text-[#701a2e] rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest shadow-2xl hover:bg-rose-50 transition-all transform hover:-translate-y-1">
                                {t("digitalXRay.bookCta")} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline" />
                            </Link>
                            <nav className="flex items-center text-xs sm:text-sm text-white/80 py-2 sm:py-3 font-semibold">
                                <Link href="/" className="hover:text-white transition-colors">{t("digitalXRay.home")}</Link>
                                <span className="mx-2">/</span>
                                <span className="text-white">{t("digitalXRay.breadcrumbCurrent")}</span>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="absolute right-0 bottom-0 h-full w-[40%] sm:w-[45%] max-w-[400px] z-20 hidden lg:flex items-end justify-center opacity-90 transition-transform hover:scale-105 duration-1000">
                    <Image
                        src="/raj/dr.Vipin.jpg"
                        alt="Clinical Director"
                        fill
                        className="object-contain object-bottom"
                        sizes="(max-width: 1024px) 0px, 400px"
                    />
                </div>
            </div>

            {/* Main Content - responsive padding */}
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32">

                {/* Quick Highlights Grid - 2 cols mobile, 4 cols md+ */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-24 md:mb-32">
                    {[
                        { icon: Camera, labelKey: "digitalXRay.stat1", color: "text-rose-600 bg-rose-50" },
                        { icon: ShieldCheck, labelKey: "digitalXRay.stat2", color: "text-blue-600 bg-blue-50" },
                        { icon: Clock, labelKey: "digitalXRay.stat3", color: "text-amber-600 bg-amber-50" },
                        { icon: UserCheck, labelKey: "digitalXRay.stat4", color: "text-emerald-600 bg-emerald-50" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(112,26,46,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
                            <div className={`p-3 sm:p-5 rounded-2xl sm:rounded-3xl ${item.color} group-hover:scale-110 transition-transform duration-500 mb-3 sm:mb-6 shadow-sm`}>
                                <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>
                            <span className="font-extrabold text-gray-900 text-sm sm:text-lg md:text-xl tracking-tight leading-tight">{t(item.labelKey)}</span>
                        </div>
                    ))}
                </div>

                {/* Why Choose - stack on mobile, 2 cols on lg; image responsive height */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-24 md:mb-32">
                    <div className="space-y-6 sm:space-y-10 animate-page-enter order-2 lg:order-1">
                        <div className="space-y-3 sm:space-y-5">
                            <span className="text-[#701a2e] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm">{t("digitalXRay.whyLabel")}</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                                {t("digitalXRay.whyTitle")}<br /><span className="text-[#701a2e]">{t("digitalXRay.whyTitleHighlight")}</span>
                            </h2>
                        </div>
                        <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                            <p>{t("digitalXRay.whyP1")}</p>
                            <p>{t("digitalXRay.whyP2")}</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2.5 sm:px-6 sm:py-3 bg-rose-50 text-[#701a2e] rounded-full font-bold text-xs sm:text-sm border border-rose-100 italic">&quot;{t("digitalXRay.whyTag")}&quot;</span>
                        </div>
                    </div>
                    <div className="relative group rounded-2xl sm:rounded-[4rem] overflow-hidden shadow-2xl h-[280px] sm:h-[350px] md:h-[450px] lg:h-[600px] border-4 sm:border-8 lg:border-[12px] border-white ring-1 ring-gray-100 order-1 lg:order-2">
                        <Image
                            src="/xray.jpg"
                            alt="Digital X-Ray Lab"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Services Grid - 1 col mobile, 2 cols md; responsive cards */}
                <div className="mb-16 sm:mb-24 md:mb-32">
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-4 sm:space-y-6">
                        <span className="text-[#701a2e] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm">{t("digitalXRay.scopeLabel")}</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">{t("digitalXRay.scopeTitle")}<span className="text-[#701a2e]">{t("digitalXRay.scopeTitleHighlight")}</span></h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                        {[
                            { titleKey: "digitalXRay.svc1Title", descKey: "digitalXRay.svc1Desc", icon: Activity },
                            { titleKey: "digitalXRay.svc2Title", descKey: "digitalXRay.svc2Desc", icon: Zap },
                            { titleKey: "digitalXRay.svc3Title", descKey: "digitalXRay.svc3Desc", icon: Microscope },
                            { titleKey: "digitalXRay.svc4Title", descKey: "digitalXRay.svc4Desc", icon: UserCheck }
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[4rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 hover:border-rose-100">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-rose-50 text-[#701a2e] rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3 tracking-tight">{t(service.titleKey)}</h4>
                                    <p className="text-gray-500 font-medium leading-relaxed text-sm sm:text-base">{t(service.descKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dark CTA Section - responsive; stack on mobile */}
                <div id="appointment" className="relative rounded-2xl sm:rounded-[4rem] lg:rounded-[5rem] overflow-hidden bg-[#701a2e] p-6 sm:p-10 md:p-12 lg:p-24 text-white group">
                    <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/5 rounded-full blur-3xl -mr-10 sm:-mr-20 -mt-10 sm:-mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-black/10 rounded-full blur-3xl -ml-10 sm:-ml-20 -mb-10 sm:-mb-20"></div>

                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center relative z-10">
                        <div className="space-y-6 sm:space-y-10">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tighter">
                                {t("digitalXRay.ctaTitle")}<br /><span className="text-rose-400">{t("digitalXRay.ctaHighlight")}</span>
                            </h2>
                            <p className="text-lg sm:text-xl md:text-2xl text-rose-100 font-medium leading-relaxed">
                                {t("digitalXRay.ctaDesc")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <Link href="tel:+916397970802" className="flex items-center justify-center gap-3 sm:gap-4 bg-white text-[#701a2e] px-8 py-4 sm:px-12 sm:py-6 rounded-2xl sm:rounded-3xl font-black text-lg sm:text-xl shadow-2xl hover:scale-105 transition-all">
                                    <Phone className="w-6 h-6 sm:w-8 sm:h-8" /> +91 63979 70802
                                </Link>
                                <Link href="/contact" className="flex items-center justify-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-2xl sm:rounded-3xl font-black text-lg sm:text-xl hover:bg-white/20 transition-all uppercase tracking-widest text-center">
                                    {t("digitalXRay.findUs")}
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[240px] sm:h-[300px] md:h-[350px] lg:h-[450px] rounded-2xl sm:rounded-[3rem] overflow-hidden border-4 sm:border-[10px] border-white/10 shadow-2xl">
                            <Image src="/xray2.jpg" alt="Clinical X-Ray" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
