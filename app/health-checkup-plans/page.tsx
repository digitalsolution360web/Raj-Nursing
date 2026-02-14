
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const planKeys = ["plan1", "plan2", "plan3", "plan4", "plan5", "plan6"];
const planIcons = ["🧘‍♂️", "👔", "👴", "🩸", "❤️", "🔬"];

export default function HealthCheckupPlans() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-[110px] md:pt-[130px]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/medical.jpg"
            alt="Health Checkup Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5b0f2d]/90 via-[#6f1436]/80 to-[#6f1436]/40" />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 pt-12 pb-12 relative">
          <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/15 text-white border border-white/20">
            {t("healthPlans.preventiveCare")}
          </span>
          <div className="mt-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
              {t("healthPlans.heading")}
            </h1>
            <div className="flex items-center gap-2 text-xs font-bold text-white/80">
              <Link href="/" className="hover:text-white transition-colors">
                {t("nav.home")}
              </Link>
              <span>/</span>
              <span className="text-white">{t("healthPlans.title")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-4">
              {t("healthPlans.sectionHeading")}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t("healthPlans.sectionIntro")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planKeys.map((planKey, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col h-full">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-3xl mb-6 text-[#9d174d]">
                  {planIcons[index]}
                </div>
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-3">{t("healthPlans." + planKey + "Title")}</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed font-medium">
                  {t("healthPlans." + planKey + "Desc")}
                </p>

                <div className="mt-auto space-y-4 pt-6 border-t border-gray-100">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#9d174d] block mb-1">{t("healthPlans.includesLabel")}</span>
                    <p className="text-xs font-bold text-gray-700 leading-relaxed">{t("healthPlans." + planKey + "Includes")}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#9d174d] block mb-1">{t("healthPlans.recommendedLabel")}</span>
                      <p className="text-xs font-bold text-gray-700">{t("healthPlans." + planKey + "Recommended")}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#9d174d] block mb-1">{t("healthPlans.frequencyLabel")}</span>
                      <p className="text-xs font-bold text-gray-700">{t("healthPlans." + planKey + "Frequency")}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 w-full py-3 bg-gray-900 text-white text-xs font-black uppercase tracking-widest rounded-xl flex items-center justify-center hover:bg-[#9d174d] transition-colors"
                >
                  {t("healthPlans.bookNow")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

