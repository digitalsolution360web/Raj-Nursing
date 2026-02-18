"use client";

import Image from "next/image";
import Link from "next/link";
import { Wind, Activity, ShieldCheck, Clock, ArrowRight, UserCheck, Stethoscope, Sparkles, Phone, Shield } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function PFTTestingPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-white min-h-screen animate-page-enter mt-32">
            {/* Hero - site theme, no doctor image */}
            <div className="relative min-h-[320px] md:min-h-[400px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/raj/banner3.webp"
                        alt="PFT Testing & Respiratory Center"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#9d174d] via-[#9d174d]/90 to-[#9d174d]/50 z-10" />
                </div>
                <div className="relative z-20 max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 w-full py-12 md:py-16">
                    <div className="max-w-3xl space-y-5 md:space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold tracking-wide">
                            <Sparkles className="w-4 h-4 text-rose-200 fill-rose-200" />
                            <span>{t("pftTesting.badge")}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
                            {t("pftTesting.heroTitle")}<br /><span className="text-rose-200">{t("pftTesting.heroTitleHighlight")}</span>
                        </h1>
                        <p className="text-sm md:text-base text-gray-100 leading-relaxed max-w-2xl font-medium">
                            {t("pftTesting.heroDesc")}
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link href="#appointment" className="px-8 py-4 bg-white text-[#9d174d] rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:bg-rose-50 transition-all hover:-translate-y-0.5">
                                {t("pftTesting.bookCta")} <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </Link>
                            <nav className="flex items-center text-xs md:text-sm text-white/80 font-semibold">
                                <Link href="/" className="hover:text-white transition-colors">{t("pftTesting.home")}</Link>
                                <span className="mx-1.5">/</span>
                                <span className="text-white">{t("pftTesting.breadcrumbCurrent")}</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-24 sm:py-32">

                {/* Quick Highlights Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-24 md:mb-32">
                    {[
                        { icon: Wind, labelKey: "pftTesting.stat1", color: "text-[#9d174d] bg-rose-50" },
                        { icon: Stethoscope, labelKey: "pftTesting.stat2", color: "text-rose-600 bg-rose-50" },
                        { icon: Clock, labelKey: "pftTesting.stat3", color: "text-amber-600 bg-amber-50" },
                        { icon: UserCheck, labelKey: "pftTesting.stat4", color: "text-emerald-600 bg-emerald-50" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl md:rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(157,23,77,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
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
                            <span className="text-[#9d174d] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">{t("pftTesting.introLabel")}</span>
                            <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-[1.1] tracking-tight">
                                {t("pftTesting.introTitle")}<br /><span className="text-[#9d174d]">{t("pftTesting.introTitleHighlight")}</span>
                            </h2>
                        </div>
                        <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                            <p>{t("pftTesting.introP1")}</p>
                            <p>{t("pftTesting.introP2")}</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div className="p-5 md:p-6 bg-rose-50 rounded-2xl md:rounded-3xl border border-rose-100">
                                <h5 className="font-black text-[#9d174d] mb-2 tracking-tight text-sm md:text-base">{t("pftTesting.nonInvasive")}</h5>
                                <p className="text-gray-500 text-xs md:text-sm font-medium">{t("pftTesting.nonInvasiveDesc")}</p>
                            </div>
                            <div className="p-5 md:p-6 bg-rose-50 rounded-2xl md:rounded-3xl border border-rose-100">
                                <h5 className="font-black text-[#9d174d] mb-2 tracking-tight text-sm md:text-base">{t("pftTesting.fastInterpretation")}</h5>
                                <p className="text-gray-500 text-xs md:text-sm font-medium">{t("pftTesting.fastInterpretationDesc")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-white ring-1 ring-gray-100">
                        <Image
                            src="/pft.jpg"
                            alt="Lung Function Test"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                    </div>
                </div>

                {/* Process & Comfort (Styled Boxes) */}
                <div className="mb-32">
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
                        <span className="text-[#9d174d] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">{t("pftTesting.patientExperience")}</span>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">{t("pftTesting.simpleProcessTitle")}<span className="text-[#9d174d]">{t("pftTesting.simpleProcessHighlight")}</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                        <div className="bg-white p-8 md:p-10 rounded-2xl md:rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="flex items-center gap-5 mb-6">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-rose-50 text-[#9d174d] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                                    <Clock className="w-7 h-7 md:w-8 md:h-8" />
                                </div>
                                <h4 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">{t("pftTesting.procedureStepsTitle")}</h4>
                            </div>
                            <p className="text-gray-500 font-medium leading-relaxed text-base md:text-lg mb-6">
                                {t("pftTesting.procedureDesc")}
                            </p>
                            <ul className="space-y-3">
                                {[
                                    t("pftTesting.procedureL1"),
                                    t("pftTesting.procedureL2"),
                                    t("pftTesting.procedureL3"),
                                    t("pftTesting.procedureL4")
                                ].map((li, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold text-gray-700 text-sm md:text-base">
                                        <div className="w-2 h-2 rounded-full bg-[#9d174d] shrink-0"></div>
                                        {li}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#9d174d] p-8 md:p-10 rounded-2xl md:rounded-[3rem] text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10">
                                <Shield className="w-40 h-40 md:w-48 md:h-48" />
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-xl md:text-2xl font-black mb-6 tracking-tight text-rose-200">{t("pftTesting.preTestTitle")}</h4>
                                <p className="text-rose-100/90 font-medium leading-relaxed text-base md:text-lg mb-6">
                                    {t("pftTesting.preTestIntro")}
                                </p>
                                <div className="space-y-5">
                                    {[
                                        { titleKey: "pftTesting.preTest1Title", descKey: "pftTesting.preTest1Desc" },
                                        { titleKey: "pftTesting.preTest2Title", descKey: "pftTesting.preTest2Desc" },
                                        { titleKey: "pftTesting.preTest3Title", descKey: "pftTesting.preTest3Desc" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-300 mt-2 shrink-0"></div>
                                            <div>
                                                <p className="font-black text-base md:text-lg tracking-tight">{t(item.titleKey)}</p>
                                                <p className="text-rose-200/80 text-xs md:text-sm font-medium">{t(item.descKey)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div id="appointment" className="relative rounded-[5rem] overflow-hidden bg-gradient-to-br from-[#0891b2] to-[#155e75] p-12 md:p-24 text-white group">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <Wind className="w-64 h-64 scale-125" />
                    </div>
                    <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-20 items-center relative z-10">
                        <div className="space-y-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                                {t("pftTesting.ctaTitle")}<br /><span className="text-cyan-300">{t("pftTesting.ctaHighlight")}</span>
                            </h2>
                            <p className="text-2xl text-white/80 font-medium leading-relaxed">
                                {t("pftTesting.ctaDesc")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-cyan-900 px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-all">
                                    <Phone className="w-8 h-8" /> +91 63979 70802
                                </Link>
                                <Link href="/contact" className="flex items-center justify-center gap-4 bg-cyan-800/40 backdrop-blur-md border border-white/30 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-cyan-800/60 transition-all uppercase tracking-widest text-center">
                                    {t("pftTesting.visitCenter")}
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl skew-x-1 group-hover:skew-x-0 transition-transform duration-1000">
                            <Image src="/pft2.jpg" alt="PFT Lab" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Conclusion Box */}
                <div className="mt-32 bg-gray-50 border border-gray-200 rounded-[3rem] p-12 md:p-20 text-center">
                    <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">{t("pftTesting.partnerTitle")}</h2>
                    <p className="leading-relaxed text-gray-500 text-xl font-medium max-w-5xl mx-auto italic">
                        &quot;{t("pftTesting.partnerQuote")}&quot;
                    </p>
                </div>

            </div>
        </div>
    );
}
