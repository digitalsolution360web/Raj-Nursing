"use client";

import Image from "next/image";
import Link from "next/link";
import { Activity, Heart, ShieldCheck, Phone, Clock, ArrowRight, UserCheck, Stethoscope } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function HeartChestCareHapur() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-[100px] sm:pt-[110px] md:pt-[130px] overflow-x-hidden">

      {/* Header / Breadcrumb Area - same height & alignment as content below */}
      <div className="bg-[#800020] text-white min-h-[320px] md:min-h-[400px] flex items-center">
        <div className="max-w-[1420px] mx-auto w-full px-4 sm:px-8 md:px-10 lg:px-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4">{t("heartChestCare.heroTitle")}</h1>
          <nav className="flex items-center gap-2 text-white/90 text-sm font-medium">
            <Link href="/" className="hover:underline">{t("heartChestCare.home")}</Link>
            <span>/</span>
            <span className="opacity-75">{t("heartChestCare.breadcrumbCurrent")}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-12 md:py-20 space-y-12 sm:space-y-20">

        {/* Intro Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            {t("heartChestCare.introTitle")}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {t("heartChestCare.introP1")}
          </p>
        </section>

        {/* Section 1: Image Left + Content Right */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100">
            <Image
              src="/heart-chest.jpg"
              alt="Heart Surgery Team"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-black text-[#800020]">{t("heartChestCare.expertHeartTitle")}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t("heartChestCare.expertHeartDesc")}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-black text-[#800020]">{t("heartChestCare.chestPainTitle")}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t("heartChestCare.chestPainDesc")}
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-xl md:text-2xl font-black text-[#800020]">{t("heartChestCare.cardiologistTitle")}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t("heartChestCare.cardiologistIntro")}
              </p>
              <ul className="grid gap-3 pl-2 text-gray-700 text-lg">
                {[t("heartChestCare.li1"), t("heartChestCare.li2"), t("heartChestCare.li3"), t("heartChestCare.li4")].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#800020] rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Full Width Text */}
        <section className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-[#800020]">{t("heartChestCare.completeCareTitle")}</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t("heartChestCare.completeCareDesc")}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-[#800020]">{t("heartChestCare.bpTitle")}</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t("heartChestCare.bpDesc")}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-black text-[#800020]">{t("heartChestCare.whyChooseTitle")}</h3>
            <ul className="grid sm:grid-cols-1 gap-4">
              {[
                t("heartChestCare.whyChooseL1"),
                t("heartChestCare.whyChooseL2"),
                t("heartChestCare.whyChooseL3"),
                t("heartChestCare.whyChooseL4")
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-700 text-lg">
                  <div className="mt-1.5 min-w-[1.5rem] w-6 h-6 bg-red-50 text-[#800020] rounded-full flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Content Left + Image Right */}
        <section className="grid lg:grid-cols-2 gap-16 items-center bg-gray-50/50 rounded-3xl p-8 md:p-12">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-5">
              <h3 className="text-xl md:text-2xl font-black text-[#800020]">{t("heartChestCare.conditionsTitle")}</h3>
              <ul className="grid gap-3 text-gray-700 text-lg">
                {[
                  t("heartChestCare.cond1"),
                  t("heartChestCare.cond2"),
                  t("heartChestCare.cond3"),
                  t("heartChestCare.cond4"),
                  t("heartChestCare.cond5")
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#800020] rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-xl md:text-2xl font-black text-[#800020]">{t("heartChestCare.bookTodayTitle")}</h3>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                {t("heartChestCare.bookTodayDesc")}
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#800020] text-white px-8 py-4 rounded-full font-bold hover:bg-[#a01a3a] transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  {t("heartChestCare.bookAppointment")}
                </Link>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
            <Image
              src="/heart-chest2.jpg"
              alt="Advanced Heart Care Diagnosis"
              fill
              className="object-contain p-6 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </section>

        {/* Bottom Box */}
        <section className="bg-[#800020] text-white rounded-2xl p-10 md:p-14 shadow-xl -mx-4 md:mx-0">
          <h3 className="text-xl md:text-2xl font-black mb-6">{t("heartChestCare.partnerHeading")}</h3>
          <p className="text-white/90 leading-relaxed text-xl">
            {t("heartChestCare.partnerDesc")}
          </p>
        </section>

      </div>
    </div>
  );
}
