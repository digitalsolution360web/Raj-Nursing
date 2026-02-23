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

export default function HospitalNursingHomePilkhuwa() {
  const { t } = useLanguage();

  const sections = [
    {
      titleKey: "pilkhuwa.emergencyTitle" as const,
      introKey: "pilkhuwa.emergencyIntro" as const,
      bullets: ["pilkhuwa.emergency1", "pilkhuwa.emergency2", "pilkhuwa.emergency3", "pilkhuwa.emergency4", "pilkhuwa.emergency5"] as const,
      endKey: "pilkhuwa.emergencyEnd" as const,
    },
    {
      titleKey: "pilkhuwa.heartTitle" as const,
      introKey: "pilkhuwa.heartIntro" as const,
      bullets: ["pilkhuwa.heart1", "pilkhuwa.heart2", "pilkhuwa.heart3", "pilkhuwa.heart4", "pilkhuwa.heart5"] as const,
      endKey: "pilkhuwa.heartEnd" as const,
    },
    {
      titleKey: "pilkhuwa.surgeryTitle" as const,
      introKey: "pilkhuwa.surgeryIntro" as const,
      leadKey: "pilkhuwa.surgeryLead" as const,
      bullets: ["pilkhuwa.surgery1", "pilkhuwa.surgery2", "pilkhuwa.surgery3", "pilkhuwa.surgery4", "pilkhuwa.surgery5"] as const,
      endKey: "pilkhuwa.surgeryEnd" as const,
    },
    {
      titleKey: "pilkhuwa.internalTitle" as const,
      introKey: "pilkhuwa.internalIntro" as const,
      bullets: ["pilkhuwa.internal1", "pilkhuwa.internal2", "pilkhuwa.internal3", "pilkhuwa.internal4", "pilkhuwa.internal5"] as const,
      endKey: "pilkhuwa.internalEnd" as const,
    },
    {
      titleKey: "pilkhuwa.diagnosticTitle" as const,
      introKey: "pilkhuwa.diagnosticIntro" as const,
      bullets: ["pilkhuwa.diagnostic1", "pilkhuwa.diagnostic2", "pilkhuwa.diagnostic3", "pilkhuwa.diagnostic4", "pilkhuwa.diagnostic5"] as const,
      endKey: "pilkhuwa.diagnosticEnd" as const,
    },
    {
      titleKey: "pilkhuwa.womensTitle" as const,
      introKey: "pilkhuwa.womensIntro" as const,
      bullets: ["pilkhuwa.womens1", "pilkhuwa.womens2", "pilkhuwa.womens3", "pilkhuwa.womens4", "pilkhuwa.womens5", "pilkhuwa.womens6"] as const,
      endKey: "pilkhuwa.womensEnd" as const,
    },
    {
      titleKey: "pilkhuwa.seasonalTitle" as const,
      introKey: "pilkhuwa.seasonalIntro" as const,
      bullets: ["pilkhuwa.seasonal1", "pilkhuwa.seasonal2", "pilkhuwa.seasonal3", "pilkhuwa.seasonal4"] as const,
      endKey: "pilkhuwa.seasonalEnd" as const,
    },
  ];

  return (
    <div className="pt-[100px] sm:pt-[110px] md:pt-[130px] min-h-screen bg-white">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 font-medium mb-8">
          <Link href="/" className="hover:text-[#9d174d] transition-colors">{t("footer.home")}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{t("footer.pilkhuwa")}</span>
        </nav>

        {/* Main title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
          {t("pilkhuwa.title")}
        </h1>

        {/* Intro paragraphs */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          {t("pilkhuwa.intro1")}
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          {t("pilkhuwa.intro2")}
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          {t("pilkhuwa.intro3")}
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-12 font-medium">
          {t("pilkhuwa.mission")}
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

        {/* Why Patients Choose */}
        <div className="h-px bg-gray-200 my-10" />
        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">
          {t("pilkhuwa.whyTitle")}
        </h2>
        <ul className="space-y-3 mb-4">
          {["pilkhuwa.why1", "pilkhuwa.why2", "pilkhuwa.why3", "pilkhuwa.why4", "pilkhuwa.why5", "pilkhuwa.why6", "pilkhuwa.why7"].map((key, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                <CheckIcon />
              </span>
              {t(key as "pilkhuwa.why1")}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 text-base leading-relaxed">
          {t("pilkhuwa.whyEnd")}
        </p>

        {/* CTA */}
        <div className="h-px bg-gray-200 my-10" />
        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">
          {t("pilkhuwa.ctaTitle")}
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t("pilkhuwa.ctaPara")}
        </p>
        <a
          href="tel:+916397970802"
          className="inline-flex items-center gap-3 px-6 py-4 bg-[#9d174d] text-white font-bold rounded-xl hover:bg-[#831843] transition-all shadow-lg"
        >
          <span className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
            <PhoneIcon />
          </span>
          {t("pilkhuwa.ctaCall")}
        </a>
      </div>
    </div>
  );
}
