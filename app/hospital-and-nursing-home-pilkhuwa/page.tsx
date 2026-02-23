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
    <div className="pt-[100px] sm:pt-[110px] md:pt-[130px] min-h-screen bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-14 md:py-20">
        {/* SECTION 1: Left content | Right BIG image */}
        <div className="flex flex-col lg:flex-row lg:gap-14 xl:gap-16 lg:items-center mb-16 md:mb-24">
          <div className="lg:flex-1 lg:min-w-0 w-full order-2 lg:order-1">
            <nav className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
              <Link href="/" className="hover:text-[#9d174d] transition-colors">{t("footer.home")}</Link>
              <span>/</span>
              <span className="text-[#9d174d] font-semibold">{t("footer.pilkhuwa")}</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              {t("pilkhuwa.title")}
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">{t("pilkhuwa.intro1")}</p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">{t("pilkhuwa.intro2")}</p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">{t("pilkhuwa.intro3")}</p>
            <p className="text-gray-800 text-base md:text-lg font-semibold border-l-4 border-[#9d174d] pl-5 mb-8">
              {t("pilkhuwa.mission")}
            </p>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{t("pilkhuwa.whyTitle")}</h2>
              <ul className="space-y-3">
                {["pilkhuwa.why1", "pilkhuwa.why2", "pilkhuwa.why3"].map((key, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-[#9d174d]/10 text-[#9d174d] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon />
                    </span>
                    {t(key as "pilkhuwa.why1")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-[48%] xl:w-[50%] lg:max-w-[620px] w-full order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-100 bg-white">
              <div className="relative w-full aspect-[4/3] min-h-[280px] sm:min-h-[340px] md:min-h-[400px]">
                <Image src="/6.jpg" alt="Raj Nursing Home - Pilkhuwa" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 620px" priority />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Left BIG image | Right content */}
        <div className="flex flex-col lg:flex-row lg:gap-14 xl:gap-16 lg:items-center mb-16 md:mb-24">
          <div className="lg:w-[48%] xl:w-[50%] lg:max-w-[620px] w-full order-1 mb-10 lg:mb-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-100 bg-white">
              <div className="relative w-full aspect-[4/3] min-h-[280px] sm:min-h-[340px] md:min-h-[400px]">
                <Image src="/internal1.jpg" alt="Internal Medicine & Care - Pilkhuwa" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 620px" />
              </div>
            </div>
          </div>
          <div className="lg:flex-1 lg:min-w-0 w-full order-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{t("pilkhuwa.whyTitle")}</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">{t("pilkhuwa.whyEnd")}</p>
            <ul className="space-y-3 mb-6">
              {["pilkhuwa.why4", "pilkhuwa.why5", "pilkhuwa.why6", "pilkhuwa.why7"].map((key, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </span>
                  {t(key as "pilkhuwa.why1")}
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
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{t(sec.introKey)}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-md border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-2">{t("pilkhuwa.ctaTitle")}</h2>
              <p className="text-gray-600 text-sm mb-4">{t("pilkhuwa.ctaPara")}</p>
              <a
                href="tel:+916397970802"
                className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#9d174d] to-[#be185d] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#9d174d]/25 transition-all"
              >
                <span className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center"><PhoneIcon /></span>
                {t("pilkhuwa.ctaCall")}
              </a>
            </div>
          </div>
          <div className="lg:w-[48%] xl:w-[50%] lg:max-w-[620px] w-full order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-100 bg-white">
              <div className="relative w-full aspect-[3/4] min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
                <Image src="/raj/ot.jpg" alt="Modular OT - Pilkhuwa" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 620px" />
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
