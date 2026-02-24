"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

// --- Icons (Standard Premium Set) ---
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
const ChevronRightIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;

export default function ServicesPage() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { titleKey: "emergencyCare", icon: "🚑", featureCount: 7, image: "/raj/raj-nursing-home-icu.jpg" },
        { titleKey: "womensHealth", icon: "🤰", featureCount: 4, image: "/raj/gyne-2.jpg" },
        { titleKey: "advancedSurgery", icon: "🔬", featureCount: 4, image: "/laparoscopic2.jpg" },
        { titleKey: "internalMedicine", icon: "🩺", featureCount: 4, image: "/internal1.jpg" },
        { titleKey: "diagnosticCenter", icon: "🧪", featureCount: 4, image: "/Diagnostic3.jpg" }
    ];

    const activeContent = services[activeTab] || services[0];
    const heading = t("servicesPage." + activeContent.titleKey + "Heading");
    const description = t("servicesPage." + activeContent.titleKey + "Desc");
    const features = Array.from({ length: activeContent.featureCount }, (_, i) => t("servicesPage." + activeContent.titleKey + "F" + (i + 1)));

    return (
        <div className="bg-gray-50 min-h-screen text-gray-900 font-sans overflow-x-hidden">
            <main className="pt-[100px] sm:pt-[110px] md:pt-[125px] px-4 sm:px-8 md:px-10 lg:px-12 pb-8 max-w-[1420px] mx-auto min-h-screen flex flex-col">
                <div className="mb-3 text-center max-w-3xl mx-auto">
                    <span className="inline-block px-2 py-0.5 bg-red-50 text-[#9d174d] font-bold tracking-widest uppercase text-[8px] rounded-full mb-1 border border-red-100">{t("servicesPage.badge")}</span>
                    <h1 className="text-lg md:text-xl lg:text-2xl mt-1 font-black text-gray-900 mb-1 leading-tight uppercase tracking-tight">{t("servicesPage.title")}</h1>
                    <div className="h-1 w-12 bg-gradient-to-r from-[#9d174d] to-red-400 rounded-full mx-auto mb-2"></div>
                    <p className="text-gray-500 text-xs font-medium max-w-lg mx-auto leading-relaxed">
                        {t("servicesPage.intro")}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 lg:h-[500px] items-stretch">
                    <div className="lg:hidden overflow-x-auto pb-3 -mx-4 px-4 flex gap-2 snap-x scrollbar-hide">
                        {services.map((service, idx) => (
                            <button key={idx} onClick={() => setActiveTab(idx)} className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide whitespace-nowrap transition-all border snap-center ${activeTab === idx ? "bg-[#9d174d] text-white border-[#9d174d] shadow-md" : "bg-white text-gray-600 border-gray-200 hover:border-[#9d174d]"}`}>{t("servicesPage." + service.titleKey)}</button>
                        ))}
                    </div>

                    {/* Filter List (Left) */}
                    <div className="hidden lg:flex w-[240px] xl:w-[280px] flex-col gap-2 overflow-y-auto pr-1 flex-shrink-0">
                        {services.map((service, idx) => (
                            <button key={idx} onClick={() => setActiveTab(idx)} className={`group relative p-3 rounded-2xl text-left transition-all duration-300 border overflow-hidden ${activeTab === idx ? "bg-white border-[#9d174d] shadow-xl scale-[1.01] z-10" : "bg-white border-transparent hover:border-gray-200 opacity-80 hover:opacity-100"}`}>
                                <div className="flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg transition-colors shadow-sm ${activeTab === idx ? "bg-[#9d174d] text-white" : "bg-gray-100 text-gray-500"}`}>{service.icon}</div>
                                        <div>
                                            <h3 className={`font-black text-[11px] uppercase tracking-tight ${activeTab === idx ? "text-gray-900" : "text-gray-500"}`}>{t("servicesPage." + service.titleKey)}</h3>
                                            {activeTab === idx && <p className="text-[7px] text-[#9d174d] font-bold mt-0.5 tracking-wider uppercase">{t("servicesPage.showing")}</p>}
                                        </div>
                                    </div>
                                    {activeTab === idx && (<div className="w-6 h-6 bg-[#0b1120] text-white rounded-full flex items-center justify-center animate-pulse"><ArrowRightIcon /></div>)}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Highly Compact Detail Box (Right) */}
                    <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 group flex flex-col">
                        <div className="absolute inset-0 z-0 h-full">
                            <Image src={activeContent.image} alt={t("servicesPage." + activeContent.titleKey)} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" priority />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent/20 opacity-95"></div>
                            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#9d174d] rounded-full blur-[80px] opacity-20 mix-blend-screen animate-pulse"></div>
                        </div>

                        <div className="relative z-10 p-4 md:p-8 flex-1 flex flex-col justify-end text-white animate-in fade-in slide-in-from-bottom-5 duration-500 key={activeTab}">
                            <div className="mb-auto flex justify-between items-start">
                                <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-lg"><div className="text-xl">{activeContent.icon}</div></div>
                                <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[7px] font-bold uppercase tracking-widest flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div> {t("servicesPage.excellence")}</span>
                            </div>

                            <h2 className="text-base md:text-xl font-black mb-2 leading-none max-w-3xl drop-shadow-lg text-white uppercase tracking-tight">{heading}</h2>
                            <p className="text-[10px] md:text-xs text-gray-200 mb-5 max-w-2xl leading-relaxed font-medium border-l-[3px] border-[#9d174d] pl-3 bg-black/20 p-2 rounded-r-lg">{description}</p>

                            <div className="grid sm:grid-cols-2 gap-2 mb-6">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-lg hover:bg-white/10 transition-colors">
                                        <div className="w-4 h-4 rounded-full bg-[#9d174d] flex items-center justify-center text-[7px] shadow-lg shrink-0">✓</div>
                                        <span className="font-bold text-[9px] md:text-[11px] tracking-wide text-white">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-3 pb-0">
                                <Link href="/contact" className="px-5 py-3 bg-white text-gray-900 font-black text-[11px] md:text-xs rounded-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-2 uppercase">{t("servicesPage.bookAppointment")} <ArrowRightIcon /></Link>
                                <Link href="/#doctors" className="hidden sm:flex px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-[11px] md:text-xs rounded-xl hover:bg-white/20 transition-all items-center gap-2 uppercase tracking-wide">{t("servicesPage.meetDoctors")} <ChevronRightIcon /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

// ... footer code removed ...
        </div>
    );
}
