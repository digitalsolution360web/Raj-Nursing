"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type AppointmentContextType = {
  isOpen: boolean;
  openAppointment: () => void;
  closeAppointment: () => void;
};

const AppointmentContext = createContext<AppointmentContextType | null>(null);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openAppointment = useCallback(() => setIsOpen(true), []);
  const closeAppointment = useCallback(() => setIsOpen(false), []);

  return (
    <AppointmentContext.Provider value={{ isOpen, openAppointment, closeAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const ctx = useContext(AppointmentContext);
  if (!ctx) throw new Error("useAppointment must be used within AppointmentProvider");
  return ctx;
}
