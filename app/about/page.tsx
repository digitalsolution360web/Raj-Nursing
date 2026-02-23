"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-[100px] sm:pt-[110px] md:pt-[130px] overflow-x-hidden">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/medical.jpg"
            alt="About Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5b0f2d]/90 via-[#6f1436]/80 to-[#6f1436]/40" />
        </div>
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 pt-8 sm:pt-12 pb-8 sm:pb-12 relative flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
              {t("about.title")}
            </h1>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-white/80">
              <Link href="/" className="hover:text-white transition-colors">
                {t("about.breadcrumbHome")}
              </Link>
              <span>/</span>
              <span className="text-white">{t("about.breadcrumbAbout")}</span>
            </div>
          </div>
          <div className="hidden md:block relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/20">
            <Image
              src="/indian-nurse-39.jpg"
              alt="Nurse"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-24">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-5">
                {t("about.storyTitle")} <span className="text-[#9d174d]">{t("about.storyHighlight")}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {t("about.storyPara")}
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#9d174d] mb-5">{t("about.whyChoose")}</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="shrink-0 w-7 h-7 mt-1 text-[#9d174d] text-xl">🩺</div>
                  <div>
                    <h4 className="text-base md:text-lg font-black text-gray-900">{t("about.doctorLed")}</h4>
                    <p className="text-sm md:text-base text-gray-600">{t("about.doctorLedDesc")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-7 h-7 mt-1 text-[#9d174d] text-xl">💡</div>
                  <div>
                    <h4 className="text-base md:text-lg font-black text-gray-900">{t("about.techCompassion")}</h4>
                    <p className="text-sm md:text-base text-gray-600">{t("about.techCompassionDesc")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-7 h-7 mt-1 text-[#9d174d] text-xl">🌱</div>
                  <div>
                    <h4 className="text-base md:text-lg font-black text-gray-900">{t("about.communityImpact")}</h4>
                    <p className="text-sm md:text-base text-gray-600">{t("about.communityImpactDesc")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#9d174d] mb-5">{t("about.milestones")}</h3>
              <ul className="space-y-3 list-disc list-inside text-base md:text-lg text-gray-700 font-medium">
                <li>{t("about.milestone1")}</li>
                <li>{t("about.milestone2")}</li>
              </ul>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="/raj/cabin3.jpg"
              alt="Hospital Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/medic-563423_1280.jpg"
              alt="Doctor with Child"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-5">{t("about.visionTitle")}</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {t("about.visionText")}
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-5">{t("about.missionTitle")}</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {t("about.missionText")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
