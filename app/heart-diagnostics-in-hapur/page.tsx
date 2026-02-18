"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const Heart = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 14c1.49-1.28 3.6-2.34 4.63-4.97a5.5 5.5 0 0 0-1.65-7.14 6 6 0 0 0-8.17 1L12 4.7l-1.81-1.8a6 6 0 0 0-8.18-1 5.5 5.5 0 0 0 1.67 7.15C4.66 11.66 6.77 12.72 8.26 14L12 18l7-4Z" />
    </svg>
);

const Activity = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

const ShieldCheck = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const Clock = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const UserCheck = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
    </svg>
);

export default function HeartDiagnosticsPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-white min-h-screen animate-page-enter">
            {/* Hero Section - background image more visible, doctor image full show */}
            <div className="relative min-h-[320px] md:min-h-[400px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/raj/banner1.webp"
                        alt="Heart Diagnostics Banner"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#701a2e] via-[#701a2e]/85 to-[#701a2e]/40 z-10"></div>
                </div>

                <div className="container mx-auto px-4 z-20 relative">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white text-sm font-medium animate-float">
                            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                            <span>{t("heartDiagnostics.badge")}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                            {t("heartDiagnostics.heroTitle")}<span className="text-rose-400">{t("heartDiagnostics.heroTitleHighlight")}</span>
                        </h1>
                        <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
                            {t("heartDiagnostics.heroDesc")}
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="#appointment" className="btn-primary">
                                {t("heartDiagnostics.bookDiagnostic")} <ArrowRight className="w-4 h-4" />
                            </Link>
                            <nav className="flex items-center text-sm text-white/80 py-3">
                                <Link href="/" className="hover:text-white transition-colors">{t("heartDiagnostics.breadcrumbHome")}</Link>
                                <span className="mx-2">/</span>
                                <span className="text-white font-semibold">{t("heartDiagnostics.breadcrumbCurrent")}</span>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Doctor Image - full visibility with object-contain */}
                <div className="absolute right-0 top-0 bottom-0 w-[38%] max-w-[420px] z-20 hidden lg:flex items-center justify-end pr-0">
                    <div className="relative w-full h-full min-h-[450px] flex items-end justify-center">
                        <Image
                            src="/raj/dr.Vipin.jpg"
                            alt="Dr. Vipin Kumar Sharma"
                            fill
                            className="object-contain object-bottom object-right"
                            sizes="(max-width: 1024px) 0px, 420px"
                        />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-20 md:py-24">

                {/* Quick Stats / Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {[
                        { icon: Activity, labelKey: "heartDiagnostics.stat1", color: "text-rose-600 bg-rose-50" },
                        { icon: ShieldCheck, labelKey: "heartDiagnostics.stat2", color: "text-blue-600 bg-blue-50" },
                        { icon: Clock, labelKey: "heartDiagnostics.stat3", color: "text-amber-600 bg-amber-50" },
                        { icon: UserCheck, labelKey: "heartDiagnostics.stat4", color: "text-emerald-600 bg-emerald-50" },
                    ].map((item, idx) => (
                        <div key={idx} className="premium-card p-6 flex flex-col items-center text-center space-y-3 group">
                            <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-gray-800 text-sm md:text-base leading-tight">{t(item.labelKey)}</span>
                        </div>
                    ))}
                </div>

                {/* Intro Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8 animate-page-enter" style={{ animationDelay: '0.2s' }}>
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold tracking-widest text-rose-600 uppercase">{t("heartDiagnostics.introLabel")}</h2>
                            <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                                {t("heartDiagnostics.introTitle")}
                            </h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t("heartDiagnostics.introPara")}
                        </p>
                        <div className="bg-rose-50 border-l-4 border-rose-600 p-6 rounded-r-xl">
                            <p className="italic text-rose-900">
                                &quot;{t("heartDiagnostics.introQuote")}&quot;
                            </p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[400px]">
                        <Image
                            src="/ecg2.jpg"
                            alt="Heart Diagnostic Lab"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                </div>

                {/* Detailed Services Grid */}
                <div className="space-y-16 mb-24">
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900">{t("heartDiagnostics.sectionTitle")}</h2>
                        <div className="h-1.5 w-24 bg-rose-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* 2D Echo */}
                        <div className="premium-card p-8 md:p-10 space-y-6 hover:border-rose-200">
                            <div className="h-14 w-14 bg-rose-100 rounded-2xl flex items-center justify-center">
                                <Activity className="w-8 h-8 text-rose-600" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-gray-900">{t("heartDiagnostics.echoTitle")}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("heartDiagnostics.echoDesc")}
                            </p>
                            <ul className="space-y-3 pt-4">
                                {[t("heartDiagnostics.echoL1"), t("heartDiagnostics.echoL2"), t("heartDiagnostics.echoL3")].map((li, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <ShieldCheck className="w-5 h-5 text-emerald-500" /> {li}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ECG Role */}
                        <div className="premium-card p-8 md:p-10 space-y-6 hover:border-blue-200">
                            <div className="h-14 w-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <Heart className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-gray-900">{t("heartDiagnostics.ecgTitle")}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("heartDiagnostics.ecgDesc")}
                            </p>
                            <ul className="space-y-3 pt-4">
                                {[t("heartDiagnostics.ecgL1"), t("heartDiagnostics.ecgL2"), t("heartDiagnostics.ecgL3")].map((li, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <ShieldCheck className="w-5 h-5 text-emerald-500" /> {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section with Image Overlap */}
                <div className="relative rounded-[3rem] overflow-hidden medical-gradient p-12 md:p-20 text-white mb-24">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <Heart className="w-64 h-64" />
                    </div>
                    <div className="max-w-3xl space-y-8 relative z-10">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                            {t("heartDiagnostics.ctaTitle")}
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            {t("heartDiagnostics.ctaPara")}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 pt-6">
                            <div className="glass p-6 rounded-2xl">
                                <h4 className="font-black text-xl mb-2">{t("heartDiagnostics.ctaCard1Title")}</h4>
                                <p className="text-sm text-white/70">{t("heartDiagnostics.ctaCard1Desc")}</p>
                            </div>
                            <div className="glass p-6 rounded-2xl">
                                <h4 className="font-black text-xl mb-2">{t("heartDiagnostics.ctaCard2Title")}</h4>
                                <p className="text-sm text-white/70">{t("heartDiagnostics.ctaCard2Desc")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link href="#appointment" className="inline-flex items-center gap-3 bg-white text-[#701a2e] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-rose-50 transition-all shadow-xl hover:-translate-y-1">
                            {t("heartDiagnostics.scheduleCheckup")} <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Technology & Interpretation */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[400px]">
                        <Image
                            src="/ecg.jpg"
                            alt="Advanced Heart Monitoring"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-black text-gray-900">{t("heartDiagnostics.expertTitle")}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {t("heartDiagnostics.expertPara")}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                t("heartDiagnostics.expertL1"),
                                t("heartDiagnostics.expertL2"),
                                t("heartDiagnostics.expertL3")
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <div className="h-10 w-10 flex items-center justify-center bg-rose-600 text-white rounded-lg">
                                        {i + 1}
                                    </div>
                                    <span className="font-bold text-gray-800">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Simple Conclusion Box (Requested) */}
                <div className="mt-16 bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm transition-all hover:shadow-md">
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6">{t("heartDiagnostics.conclusionTitle")}</h2>
                    <p className="leading-relaxed text-gray-600 text-lg">
                        {t("heartDiagnostics.conclusionPara")}
                    </p>
                </div>

            </div>
        </div>
    );
}
