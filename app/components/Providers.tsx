"use client";

import { LanguageProvider } from "@/app/context/LanguageContext";
import { AppointmentProvider } from "@/app/context/AppointmentContext";
import AppointmentModal from "./AppointmentModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <AppointmentProvider>
        {children}
        <AppointmentModal />
      </AppointmentProvider>
    </LanguageProvider>
  );
}
