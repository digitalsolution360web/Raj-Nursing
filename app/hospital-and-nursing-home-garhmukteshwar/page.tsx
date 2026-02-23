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

export default function HospitalNursingHomeGarhmukteshwar() {
  const { t } = useLanguage();

  const sections = [
    {
      titleKey: "garhmukteshwar.emergencyTitle" as const,
      introKey: "garhmukteshwar.emergencyIntro" as const,
      bullets: ["garhmukteshwar.emergency1", "garhmukteshwar.emergency2", "garhmukteshwar.emergency3", "garhmukteshwar.emergency4", "garhmukteshwar.emergency5"] as const,
      endKey: "garhmukteshwar.emergencyEnd" as const,
    },
    {
      titleKey: "garhmukteshwar.icuTitle" as const,
      introKey: "garhmukteshwar.icuIntro" as const,
      bullets: ["garhmukteshwar.icu1", "garhmukteshwar.icu2", "garhmukteshwar.icu3", "garhmukteshwar.icu4"] as const,
      endKey: "garhmukteshwar.icuEnd" as const,
    },
    {
      titleKey: "garhmukteshwar.heartTitle" as const,
      introKey: "garhmukteshwar.heartIntro" as const,
      bullets: ["garhmukteshwar.heart1", "garhmukteshwar.heart2", "garhmukteshwar.heart3", "garhmukteshwar.heart4"] as const,
      endKey: "garhmukteshwar.heartEnd" as const,
    },
    {
      titleKey: "garhmukteshwar.surgeryTitle" as const,
      introKey: "garhmukteshwar.surgeryIntro" as const,
      leadKey: "garhmukteshwar.surgeryLead" as const,
      bullets: ["garhmukteshwar.surgery1", "garhmukteshwar.surgery2", "garhmukteshwar.surgery3", "garhmukteshwar.surgery4", "garhmukteshwar.surgery5"] as const,
      endKey: "garhmukteshwar.surgeryEnd" as const,
    },
    {
      titleKey: "garhmukteshwar.internalTitle" as const,
      introKey: "garhmukteshwar.internalIntro" as const,
      bullets: ["garhmukteshwar.internal1", "garhmukteshwar.internal2", "garhmukteshwar.internal3", "garhmukteshwar.internal4"] as const,
      endKey: "garhmukteshwar.internalEnd" as const,
    },
    {
      titleKey: "garhmukteshwar.diagnosticTitle" as const,
      introKey: "garhmukteshwar.diagnosticIntro" as const,
      bullets: ["garhmukteshwar.diagnostic1", "garhmukteshwar.diagnostic2", "garhmukteshwar.diagnostic3", "garhmukteshwar.diagnostic4", "garhmukteshwar.diagnostic5"] as const,
      endKey: "garhmukteshwar.diagnosticEnd" as const,
    },
    {
      titleKey: "garhmukteshwar.womensTitle" as const,
      introKey: "garhmukteshwar.womensIntro" as const,
      bullets: ["garhmukteshwar.womens1", "garhmukteshwar.womens2", "garhmukteshwar.womens3", "garhmukteshwar.womens4", "garhmukteshwar.womens5"] as const,
      endKey: "garhmukteshwar.womensEnd" as const,
    },
    {
      titleKey: "garhmukteshwar.seasonalTitle" as const,
      introKey: "garhmukteshwar.seasonalIntro" as const,
      bullets: ["garhmukteshwar.seasonal1", "garhmukteshwar.seasonal2", "garhmukteshwar.seasonal3", "garhmukteshwar.seasonal4"] as const,
      endKey: "garhmukteshwar.seasonalEnd" as const,
    },
  ];

  return (
    <div className="pt-[100px] sm:pt-[110px] md:pt-[130px] min-h-screen bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-14 md:py-20">
        {/* ========== SECTION 1: Left content | Right BIG image (hero) ========== */}
        <div className="flex flex-col lg:flex-row lg:gap-14 xl:gap-16 lg:items-center mb-16 md:mb-24">
          <div className="lg:flex-1 lg:min-w-0 w-full order-2 lg:order-1">
            <nav className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
              <Link href="/" className="hover:text-[#9d174d] transition-colors">{t("footer.home")}</Link>
              <span>/</span>
              <span className="text-[#9d174d] font-semibold">{t("footer.garhmukteshwar")}</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              {t("garhmukteshwar.title")}
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              {t("garhmukteshwar.intro1")}
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              {t("garhmukteshwar.intro2")}
            </p>
            <p className="text-gray-800 text-base md:text-lg font-semibold border-l-4 border-[#9d174d] pl-5 mb-8">
              {t("garhmukteshwar.mission")}
            </p>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{t("garhmukteshwar.whyTitle")}</h2>
              <ul className="space-y-3">
                {["garhmukteshwar.why1", "garhmukteshwar.why2", "garhmukteshwar.why3"].map((key, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-[#9d174d]/10 text-[#9d174d] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon />
                    </span>
                    {t(key as "garhmukteshwar.why1")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-[48%] xl:w-[50%] lg:max-w-[620px] w-full order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-100 bg-white">
              <div className="relative w-full aspect-[4/3] min-h-[280px] sm:min-h-[340px] md:min-h-[400px]">
                <Image src="/14.jpg" alt="Raj Nursing Home - Garhmukteshwar" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 620px" priority />
              </div>
            </div>
          </div>
        </div>

        {/* ========== SECTION 2: Left BIG image | Right content (alternating) ========== */}
        <div className="flex flex-col lg:flex-row lg:gap-14 xl:gap-16 lg:items-center mb-16 md:mb-24">
          <div className="lg:w-[48%] xl:w-[50%] lg:max-w-[620px] w-full order-1 mb-10 lg:mb-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-100 bg-white">
              <div className="relative w-full aspect-[4/3] min-h-[280px] sm:min-h-[340px] md:min-h-[400px]">
                <Image src="/medical.jpg" alt="Hospital Facility - Garhmukteshwar" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 620px" />
              </div>
            </div>
          </div>
          <div className="lg:flex-1 lg:min-w-0 w-full order-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{t("garhmukteshwar.whyTitle")}</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {t("garhmukteshwar.whyEnd")}
            </p>
            <ul className="space-y-3 mb-6">
              {["garhmukteshwar.why4", "garhmukteshwar.why5", "garhmukteshwar.why6", "garhmukteshwar.why7"].map((key, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </span>
                  {t(key as "garhmukteshwar.why1")}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ========== SECTION 3: Left content (services) | Right BIG images ========== */}
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
              <h2 className="text-lg font-bold text-gray-900 mb-2">{t("garhmukteshwar.ctaTitle")}</h2>
              <p className="text-gray-600 text-sm mb-4">{t("garhmukteshwar.ctaPara")}</p>
              <a
                href="tel:+916397970802"
                className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#9d174d] to-[#be185d] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#9d174d]/25 transition-all"
              >
                <span className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center"><PhoneIcon /></span>
                {t("garhmukteshwar.ctaCall")}
              </a>
            </div>
          </div>
          <div className="lg:w-[48%] xl:w-[50%] lg:max-w-[620px] w-full order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-100 bg-white">
              <div className="relative w-full aspect-[3/4] min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
                <Image src="/raj/raj-nursing-home-icu.jpg" alt="ICU & Critical Care - Garhmukteshwar" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 620px" />
              </div>
            </div>
          </div>
        </div>

        {/* ========== SECTION 4: Full-width services list ========== */}
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

