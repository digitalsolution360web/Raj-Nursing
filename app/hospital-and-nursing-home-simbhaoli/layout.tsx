import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Hospital in Simbhaoli – Advanced & Trusted Healthcare | Raj Nursing Home",
  description: "Raj Nursing Home serves Simbhaoli with 24/7 emergency, ICU, heart specialist, laparoscopic surgery, diagnostic center, women's health, IVF & seasonal disease treatment. Trusted healthcare near Simbhaoli.",
  keywords: "best hospital in Simbhaoli, nursing home near Simbhaoli, emergency hospital Simbhaoli, heart specialist Simbhaoli, laparoscopic surgery Simbhaoli, diagnostic center Simbhaoli",
  openGraph: {
    title: "Best Hospital in Simbhaoli – Raj Nursing Home",
    description: "Advanced & trusted healthcare for Simbhaoli: 24/7 emergency, ICU, cardiac care, surgery, diagnostics, maternity & IVF.",
  },
};

export default function SimbhaoliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
