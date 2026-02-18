"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap, Activity, ShieldCheck, Clock, ArrowRight, UserCheck, Microscope, Camera, Sparkles, Phone } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function XrayPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-white min-h-screen animate-page-enter mt-32">
            {/* Hero - site theme, no doctor image */}
            <div className="relative min-h-[320px] md:min-h-[400px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/raj/banner1.webp"
                        alt="Digital X-Ray Center"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#9d174d] via-[#9d174d]/90 to-[#9d174d]/50 z-10" />
                </div>
                <div className="relative z-20 max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 w-full py-12 md:py-16">
                    <div className="max-w-3xl space-y-5 md:space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold tracking-wide">
                            <Sparkles className="w-4 h-4 text-rose-200 fill-rose-200" />
                            <span>{t("digitalXRay.badge")}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
                            {t("digitalXRay.heroTitle")}<br /><span className="text-rose-200">{t("digitalXRay.heroTitleHighlight")}</span>
                        </h1>
                        <p className="text-sm md:text-base text-gray-100 leading-relaxed max-w-2xl font-medium">
                            {t("digitalXRay.heroDesc")}
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link href="#appointment" className="px-8 py-4 bg-white text-[#9d174d] rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:bg-rose-50 transition-all hover:-translate-y-0.5">
                                {t("digitalXRay.bookCta")} <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </Link>
                            <nav className="flex items-center text-xs md:text-sm text-white/80 font-semibold">
                                <Link href="/" className="hover:text-white transition-colors">{t("digitalXRay.home")}</Link>
                                <span className="mx-1.5">/</span>
                                <span className="text-white">{t("digitalXRay.breadcrumbCurrent")}</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - responsive padding */}
            <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-12 sm:py-16 md:py-24 lg:py-32">

                {/* Quick Highlights Grid - 2 cols mobile, 4 cols md+ */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-24 md:mb-32">
                    {[
                        { icon: Camera, labelKey: "digitalXRay.stat1", color: "text-[#9d174d] bg-rose-50" },
                        { icon: ShieldCheck, labelKey: "digitalXRay.stat2", color: "text-blue-600 bg-blue-50" },
                        { icon: Clock, labelKey: "digitalXRay.stat3", color: "text-amber-600 bg-amber-50" },
                        { icon: UserCheck, labelKey: "digitalXRay.stat4", color: "text-emerald-600 bg-emerald-50" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-lg hover:shadow-xl hover:border-rose-100 transition-all duration-300 group flex flex-col items-center text-center">
                            <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-105 transition-transform duration-300 mb-4 shadow-sm`}>
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
                            <span className="text-[#9d174d] font-black tracking-[0.2em] uppercase text-xs md:text-sm">{t("digitalXRay.whyLabel")}</span>
                            <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight">
                                {t("digitalXRay.whyTitle")}<br /><span className="text-[#9d174d]">{t("digitalXRay.whyTitleHighlight")}</span>
                            </h2>
                        </div>
                        <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                            <p>{t("digitalXRay.whyP1")}</p>
                            <p>{t("digitalXRay.whyP2")}</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-5 py-2.5 bg-rose-50 text-[#9d174d] rounded-full font-bold text-xs md:text-sm border border-rose-100">&quot;{t("digitalXRay.whyTag")}&quot;</span>
                        </div>
                    </div>
                    <div className="relative group rounded-2xl md:rounded-[3rem] overflow-hidden shadow-xl h-[280px] md:h-[400px] lg:h-[500px] border-4 border-white ring-1 ring-gray-100 order-1 lg:order-2">
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
                        <span className="text-[#9d174d] font-black tracking-[0.2em] uppercase text-xs md:text-sm">{t("digitalXRay.scopeLabel")}</span>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">{t("digitalXRay.scopeTitle")}<span className="text-[#9d174d]">{t("digitalXRay.scopeTitleHighlight")}</span></h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                        {[
                            { titleKey: "digitalXRay.svc1Title", descKey: "digitalXRay.svc1Desc", icon: Activity },
                            { titleKey: "digitalXRay.svc2Title", descKey: "digitalXRay.svc2Desc", icon: Zap },
                            { titleKey: "digitalXRay.svc3Title", descKey: "digitalXRay.svc3Desc", icon: Microscope },
                            { titleKey: "digitalXRay.svc4Title", descKey: "digitalXRay.svc4Desc", icon: UserCheck }
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-xl hover:border-rose-100 transition-all duration-300 group flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                                <div className="w-14 h-14 bg-rose-50 text-[#9d174d] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
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
                <div id="appointment" className="relative rounded-2xl md:rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#9d174d] to-[#831843] p-8 md:p-12 lg:p-20 text-white">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
                        <div className="space-y-6 md:space-y-8">
                            <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">
                                {t("digitalXRay.ctaTitle")}<br /><span className="text-rose-200">{t("digitalXRay.ctaHighlight")}</span>
                            </h2>
                            <p className="text-base md:text-lg text-white/85 font-medium leading-relaxed">
                                {t("digitalXRay.ctaDesc")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="tel:+916397970802" className="flex items-center justify-center gap-3 bg-white text-[#9d174d] px-8 py-4 rounded-2xl font-black text-base shadow-xl hover:scale-[1.02] transition-all">
                                    <Phone className="w-6 h-6" /> +91 63979 70802
                                </Link>
                                <Link href="/contact" className="flex items-center justify-center gap-3 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-2xl font-black text-base hover:bg-white/20 transition-all uppercase tracking-wider">
                                    {t("digitalXRay.findUs")}
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[260px] md:h-[320px] lg:h-[380px] rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl">
                            <Image src="/xray2.jpg" alt="Digital X-Ray" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
