"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function HospitalNursingHomeSimbhaoli() {
  const { t } = useLanguage();

  const sections = [
    {
      titleKey: "simbhaoli.emergencyTitle" as const,
      introKey: "simbhaoli.emergencyIntro" as const,
      bullets: ["simbhaoli.emergency1", "simbhaoli.emergency2", "simbhaoli.emergency3", "simbhaoli.emergency4", "simbhaoli.emergency5"] as const,
      endKey: "simbhaoli.emergencyEnd" as const,
    },
    {
      titleKey: "simbhaoli.icuTitle" as const,
      introKey: "simbhaoli.icuIntro" as const,
      bullets: ["simbhaoli.icu1", "simbhaoli.icu2", "simbhaoli.icu3", "simbhaoli.icu4"] as const,
      endKey: "simbhaoli.icuEnd" as const,
    },
    {
      titleKey: "simbhaoli.heartTitle" as const,
      introKey: "simbhaoli.heartIntro" as const,
      bullets: ["simbhaoli.heart1", "simbhaoli.heart2", "simbhaoli.heart3", "simbhaoli.heart4"] as const,
      endKey: "simbhaoli.heartEnd" as const,
    },
    {
      titleKey: "simbhaoli.surgeryTitle" as const,
      introKey: "simbhaoli.surgeryIntro" as const,
      leadKey: "simbhaoli.surgeryLead" as const,
      bullets: ["simbhaoli.surgery1", "simbhaoli.surgery2", "simbhaoli.surgery3", "simbhaoli.surgery4", "simbhaoli.surgery5"] as const,
      endKey: "simbhaoli.surgeryEnd" as const,
    },
    {
      titleKey: "simbhaoli.internalTitle" as const,
      introKey: "simbhaoli.internalIntro" as const,
      bullets: ["simbhaoli.internal1", "simbhaoli.internal2", "simbhaoli.internal3", "simbhaoli.internal4"] as const,
      endKey: "simbhaoli.internalEnd" as const,
    },
    {
      titleKey: "simbhaoli.diagnosticTitle" as const,
      introKey: "simbhaoli.diagnosticIntro" as const,
      bullets: ["simbhaoli.diagnostic1", "simbhaoli.diagnostic2", "simbhaoli.diagnostic3", "simbhaoli.diagnostic4", "simbhaoli.diagnostic5"] as const,
      endKey: "simbhaoli.diagnosticEnd" as const,
    },
    {
      titleKey: "simbhaoli.womensTitle" as const,
      introKey: "simbhaoli.womensIntro" as const,
      bullets: ["simbhaoli.womens1", "simbhaoli.womens2", "simbhaoli.womens3", "simbhaoli.womens4", "simbhaoli.womens5"] as const,
      endKey: "simbhaoli.womensEnd" as const,
    },
    {
      titleKey: "simbhaoli.seasonalTitle" as const,
      introKey: "simbhaoli.seasonalIntro" as const,
      bullets: ["simbhaoli.seasonal1", "simbhaoli.seasonal2", "simbhaoli.seasonal3", "simbhaoli.seasonal4"] as const,
      endKey: "simbhaoli.seasonalEnd" as const,
    },
  ];

  return (
    <div className="pt-[100px] sm:pt-[110px] md:pt-[130px] min-h-screen bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-14 md:py-20">
        {/* SECTION 1: Left content | Right BIG image */}
        <div className="flex flex-col lg:flex-row lg:gap-14 xl:gap-16 lg:items-center mb-16 md:mb-24">
          <div className="lg:flex-1 lg:min-w-0 w-full order-2 lg:order-1">
            <nav className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
              <Link href="/" className="hover:text-[#9d174d] transition-colors">{t("footer.home")}</Link>
              <span>/</span>
              <span className="text-[#9d174d] font-semibold">{t("footer.simbhaoli")}</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              {t("simbhaoli.title")}
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              {t("simbhaoli.intro1")}
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              {t("simbhaoli.intro2")}
            </p>
            <p className="text-gray-800 text-base md:text-lg font-semibold border-l-4 border-[#9d174d] pl-5 mb-8">
              {t("simbhaoli.goal")}
            </p>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{t("simbhaoli.whyTitle")}</h2>
              <ul className="space-y-3">
                {["simbhaoli.why1", "simbhaoli.why2", "simbhaoli.why3"].map((key, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-[#9d174d]/10 text-[#9d174d] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon />
                    </span>
                    {t(key as "simbhaoli.why1")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-[48%] xl:w-[50%] lg:max-w-[620px] w-full order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-100 bg-white">
              <div className="relative w-full aspect-[4/3] min-h-[280px] sm:min-h-[340px] md:min-h-[400px]">
                <Image src="/8.jpg" alt="Raj Nursing Home - Simbhaoli" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 620px" priority />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Left BIG image | Right content */}
        <div className="flex flex-col lg:flex-row lg:gap-14 xl:gap-16 lg:items-center mb-16 md:mb-24">
          <div className="lg:w-[48%] xl:w-[50%] lg:max-w-[620px] w-full order-1 mb-10 lg:mb-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-100 bg-white">
              <div className="relative w-full aspect-[4/3] min-h-[280px] sm:min-h-[340px] md:min-h-[400px]">
                <Image src="/raj/ultrasound.jpg" alt="Ultrasound & Diagnostics - Simbhaoli" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 620px" />
              </div>
            </div>
          </div>
          <div className="lg:flex-1 lg:min-w-0 w-full order-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{t("simbhaoli.whyTitle")}</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {t("simbhaoli.whyEnd")}
            </p>
            <ul className="space-y-3 mb-6">
              {["simbhaoli.why4", "simbhaoli.why5", "simbhaoli.why6", "simbhaoli.why7"].map((key, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </span>
                  {t(key as "simbhaoli.why1")}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SECTION 3: Left content (services + CTA) | Right 1 BIG image */}
        <div className="flex flex-col lg:flex-row lg:gap-14 xl:gap-16 lg:items-start mb-16 md:mb-24">
          <div className="lg:flex-1 lg:min-w-0 w-full order-2 lg:order-1">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
            <div className="space-y-6">
              {sections.slice(0, 4).map((sec, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-5 sm:p-6 shadow-md border border-gray-100">
                  <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#9d174d]" />
                    {t(sec.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {t(sec.introKey)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-md border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-2">{t("simbhaoli.ctaTitle")}</h2>
              <p className="text-gray-600 text-sm mb-4">{t("simbhaoli.ctaPara")}</p>
              <a
                href="tel:+916397970802"
                className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#9d174d] to-[#be185d] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#9d174d]/25 transition-all"
              >
                <span className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center"><PhoneIcon /></span>
                {t("simbhaoli.ctaCall")}
              </a>
            </div>
          </div>
          <div className="lg:w-[48%] xl:w-[50%] lg:max-w-[620px] w-full order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-100 bg-white">
              <div className="relative w-full aspect-[3/4] min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
                <Image src="/raj/cabin3.jpg" alt="Premium Rooms - Simbhaoli" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 620px" />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: Full-width Care & Facilities */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-lg border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Care &amp; Facilities</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {sections.map((sec, idx) => (
              <div key={idx} className="border-l-4 border-[#9d174d] pl-4">
                <h3 className="font-bold text-gray-900 mb-1">{t(sec.titleKey)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(sec.introKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
