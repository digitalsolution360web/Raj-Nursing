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

export default function HospitalNursingHomeDhaulana() {
  const { t } = useLanguage();

  const sections = [
    {
      titleKey: "dhaulana.emergencyTitle" as const,
      introKey: "dhaulana.emergencyIntro" as const,
      bullets: [
        "dhaulana.emergency1",
        "dhaulana.emergency2",
        "dhaulana.emergency3",
        "dhaulana.emergency4",
        "dhaulana.emergency5",
        "dhaulana.emergency6",
      ] as const,
      endKey: "dhaulana.emergencyEnd" as const,
    },
    {
      titleKey: "dhaulana.icuTitle" as const,
      introKey: "dhaulana.icuIntro" as const,
      bullets: ["dhaulana.icu1", "dhaulana.icu2", "dhaulana.icu3", "dhaulana.icu4"] as const,
      endKey: "dhaulana.icuEnd" as const,
    },
    {
      titleKey: "dhaulana.heartTitle" as const,
      introKey: "dhaulana.heartIntro" as const,
      bullets: ["dhaulana.heart1", "dhaulana.heart2", "dhaulana.heart3", "dhaulana.heart4"] as const,
      endKey: "dhaulana.heartEnd" as const,
    },
    {
      titleKey: "dhaulana.surgeryTitle" as const,
      introKey: "dhaulana.surgeryIntro" as const,
      leadKey: "dhaulana.surgeryLead" as const,
      bullets: ["dhaulana.surgery1", "dhaulana.surgery2", "dhaulana.surgery3", "dhaulana.surgery4", "dhaulana.surgery5"] as const,
      endKey: "dhaulana.surgeryEnd" as const,
    },
    {
      titleKey: "dhaulana.internalTitle" as const,
      introKey: "dhaulana.internalIntro" as const,
      bullets: ["dhaulana.internal1", "dhaulana.internal2", "dhaulana.internal3", "dhaulana.internal4"] as const,
      endKey: "dhaulana.internalEnd" as const,
    },
    {
      titleKey: "dhaulana.diagnosticTitle" as const,
      introKey: "dhaulana.diagnosticIntro" as const,
      bullets: ["dhaulana.diagnostic1", "dhaulana.diagnostic2", "dhaulana.diagnostic3", "dhaulana.diagnostic4", "dhaulana.diagnostic5"] as const,
      endKey: "dhaulana.diagnosticEnd" as const,
    },
    {
      titleKey: "dhaulana.womensTitle" as const,
      introKey: "dhaulana.womensIntro" as const,
      bullets: ["dhaulana.womens1", "dhaulana.womens2", "dhaulana.womens3", "dhaulana.womens4", "dhaulana.womens5"] as const,
      endKey: "dhaulana.womensEnd" as const,
    },
    {
      titleKey: "dhaulana.seasonalTitle" as const,
      introKey: "dhaulana.seasonalIntro" as const,
      bullets: ["dhaulana.seasonal1", "dhaulana.seasonal2", "dhaulana.seasonal3", "dhaulana.seasonal4"] as const,
      endKey: "dhaulana.seasonalEnd" as const,
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
          <span className="text-gray-900">{t("footer.dhaulana")}</span>
        </nav>

        {/* Main title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
          {t("dhaulana.title")}
        </h1>

        {/* Intro paragraphs */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          {t("dhaulana.intro1")}
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          {t("dhaulana.intro2")}
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-12 font-medium">
          {t("dhaulana.mission")}
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

        {/* Why Families Trust */}
        <div className="h-px bg-gray-200 my-10" />
        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">
          {t("dhaulana.whyTitle")}
        </h2>
        <ul className="space-y-3 mb-4">
          {[
            "dhaulana.why1",
            "dhaulana.why2",
            "dhaulana.why3",
            "dhaulana.why4",
            "dhaulana.why5",
            "dhaulana.why6",
            "dhaulana.why7",
          ].map((key, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                <CheckIcon />
              </span>
              {t(key as "dhaulana.why1")}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 text-base leading-relaxed">
          {t("dhaulana.whyEnd")}
        </p>

        {/* CTA */}
        <div className="h-px bg-gray-200 my-10" />
        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">
          {t("dhaulana.ctaTitle")}
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t("dhaulana.ctaPara")}
        </p>
        <a
          href="tel:+916397970802"
          className="inline-flex items-center gap-3 px-6 py-4 bg-[#9d174d] text-white font-bold rounded-xl hover:bg-[#831843] transition-all shadow-lg"
        >
          <span className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
            <PhoneIcon />
          </span>
          {t("dhaulana.ctaCall")}
        </a>
      </div>
    </div>
  );
}

