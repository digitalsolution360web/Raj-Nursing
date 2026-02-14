"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ContactPage() {
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
            alt="Contact Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5b0f2d]/90 via-[#6f1436]/80 to-[#6f1436]/40" />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 pt-12 pb-12 relative">
          <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/15 text-white border border-white/20">
            {t("contact.title")}
          </span>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              {t("nav.home")}
            </Link>
            <span>/</span>
            <span className="text-white">{t("contact.breadcrumbContact")}</span>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-gradient-to-b from-white via-white to-gray-50/40">
        <div className="max-w-screen-2xl mx-auto px-6 grid lg:grid-cols-[1.15fr,0.85fr] gap-10">
          <div className="bg-white border border-gray-100 rounded-[2.75rem] shadow-[0_30px_80px_rgba(17,24,39,0.08)] p-6 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-red-50 text-[#9d174d] text-lg">
                ✉️
              </span>
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900">
                  {t("contact.hereForYou")}
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  {t("contact.hereDesc")}
                </p>
              </div>
            </div>
            <form className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t("contact.email")}
                </label>
                <p className="text-[10px] text-gray-400 mt-1">
                  {t("contact.emailNote")}
                </p>
                <input
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  placeholder={t("contact.phonePlaceholder")}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t("contact.subject")}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.subjectPlaceholder")}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t("contact.message")}
                </label>
                <textarea
                  rows={5}
                  placeholder={t("contact.messagePlaceholder")}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30"
                />
              </div>
              <div className="md:col-span-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-[#9d174d] text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-red-500/20 hover:bg-[#831843] transition-all"
                >
                  {t("contact.sendMessage")}
                </button>
                <span className="text-[11px] text-gray-400">
                  {t("contact.submitNote")}
                </span>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#9d174d] flex items-center justify-center text-xl">
                  🚑
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900">
                    {t("contact.emergencyService")}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    🚨 {t("contact.emergencyCallNum")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#9d174d] flex items-center justify-center text-xl">
                  ⏰
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900">
                    {t("contact.opdHours")}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {t("contact.opdHoursDetail")}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {t("contact.opdHoursSun")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#9d174d] flex items-center justify-center text-xl">
                  🏥
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900">
                    {t("contact.mainCenter")}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {t("contact.mainCenterName")}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {t("contact.mainCenterAddress")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#9d174d] flex items-center justify-center text-xl">
                  📩
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900">
                    {t("contact.bookAppointments")}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {t("contact.whatsappAppoint")}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {t("contact.emailLabel")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9d174d]">
                {t("contact.location")}
              </span>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mt-2">
                {t("contact.findOnMap")}
              </h2>
            </div>
            <Link
              href="https://maps.google.com/?q=Raj%20Nursing%20Home%20Hapur"
              className="hidden sm:inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-gray-900 font-black text-xs uppercase tracking-widest border border-gray-200 hover:border-[#9d174d] hover:text-[#9d174d] transition-all shadow-sm"
            >
              {t("contact.getDirections")}
            </Link>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl">
            <iframe
              title="Raj Nursing Home - Hapur"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13993.960902714158!2d77.788486!3d28.734777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c85b28f530843%3A0x255093a94d78e2dc!2sRaj%20Nursing%20Home%20-%20Hapur!5e0!3m2!1sen!2sin!4v1771085116646!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

