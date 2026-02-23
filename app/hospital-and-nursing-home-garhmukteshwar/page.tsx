"use client";

import Link from "next/link";
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
    <div className="pt-[100px] sm:pt-[110px] md:pt-[130px] min-h-screen bg-white">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 font-medium mb-8">
          <Link href="/" className="hover:text-[#9d174d] transition-colors">
            {t("footer.home")}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{t("footer.garhmukteshwar")}</span>
        </nav>

        {/* Main title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
          {t("garhmukteshwar.title")}
        </h1>

        {/* Intro paragraphs */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          {t("garhmukteshwar.intro1")}
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          {t("garhmukteshwar.intro2")}
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-12 font-medium">
          {t("garhmukteshwar.mission")}
        </p>

        {/* Service sections with separators */}
        {sections.map((sec, idx) => (
          <div key={idx}>
            <div className="h-px bg-gray-200 mb-10" />
            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">
              {t(sec.titleKey)}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t(sec.introKey)}
            </p>
            {"leadKey" in sec && sec.leadKey && (
              <p className="text-gray-900 font-bold mb-2">{t(sec.leadKey)}</p>
            )}
            <ul className="space-y-2 mb-4 pl-4">
              {sec.bullets.map((key, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0 mt-2" />
                  {t(key)}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 text-base leading-relaxed">
              {t(sec.endKey)}
            </p>
          </div>
        ))}

        {/* Why Patients Trust */}
        <div className="h-px bg-gray-200 my-10" />
        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">
          {t("garhmukteshwar.whyTitle")}
        </h2>
        <ul className="space-y-3 mb-4">
          {[
            "garhmukteshwar.why1",
            "garhmukteshwar.why2",
            "garhmukteshwar.why3",
            "garhmukteshwar.why4",
            "garhmukteshwar.why5",
            "garhmukteshwar.why6",
            "garhmukteshwar.why7",
          ].map((key, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                <CheckIcon />
              </span>
              {t(key as "garhmukteshwar.why1")}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 text-base leading-relaxed">
          {t("garhmukteshwar.whyEnd")}
        </p>

        {/* CTA */}
        <div className="h-px bg-gray-200 my-10" />
        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">
          {t("garhmukteshwar.ctaTitle")}
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t("garhmukteshwar.ctaPara")}
        </p>
        <a
          href="tel:+916397970802"
          className="inline-flex items-center gap-3 px-6 py-4 bg-[#9d174d] text-white font-bold rounded-xl hover:bg-[#831843] transition-all shadow-lg"
        >
          <span className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
            <PhoneIcon />
          </span>
          {t("garhmukteshwar.ctaCall")}
        </a>
      </div>
    </div>
  );
}

