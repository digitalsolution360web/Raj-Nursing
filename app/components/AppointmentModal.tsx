"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { useAppointment } from "@/app/context/AppointmentContext";

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const serviceOptions = [
  "General OPD",
  "Heart & Chest Care",
  "Internal Medicine",
  "Laparoscopic Surgery",
  "Diagnostic / Lab",
  "Ultrasound & Imaging",
  "Digital X-Ray",
  "PFT Testing",
  "Woman's Health / Gynaecology",
  "IVF & Fertility",
  "Health Checkup",
  "Emergency / ICU",
];

export default function AppointmentModal() {
  const { t } = useLanguage();
  const { isOpen, closeAppointment } = useAppointment();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={closeAppointment}
        aria-hidden
      />
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-100">
        <button
          type="button"
          onClick={closeAppointment}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-gray-100 text-gray-600 hover:text-gray-900 border border-gray-200 transition-colors"
          aria-label="Close"
        >
          <XIcon />
        </button>

        <div className="bg-gradient-to-r from-[#9d174d] via-[#831843] to-gray-900 text-white px-6 py-8 sm:py-10 rounded-t-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            {t("appointment.title")}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/90 max-w-lg mx-auto">
            {t("appointment.subtitle")}
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="text-lg font-bold text-[#9d174d] mb-6">
            {t("appointment.formTitle")}
          </h3>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                {t("appointment.fullName")}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                {t("appointment.email")}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                {t("appointment.phone")}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                {t("appointment.city")}
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Hapur, Ghaziabad"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
              />
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                {t("appointment.date")}
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
              />
              <span className="absolute right-3 bottom-3 text-gray-400 pointer-events-none">
                <CalendarIcon />
              </span>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                {t("appointment.selectService")}
              </label>
              <div className="relative">
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
                >
                  <option value="">{t("appointment.selectService")}</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <ChevronDownIcon />
                </span>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                {t("appointment.additionalMessage")}
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any specific request or note..."
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
              />
            </div>

            <div className="sm:col-span-2 flex justify-center pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[220px] py-4 px-8 rounded-xl bg-gradient-to-r from-[#9d174d] via-[#831843] to-gray-900 text-white font-black text-sm uppercase tracking-wide shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all"
              >
                {t("appointment.bookButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
