import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Hospital in Pilkhuwa – Trusted Healthcare by Raj Nursing Home",
  description: "Raj Nursing Home serves Pilkhuwa with 24/7 emergency care, ICU, heart specialist, laparoscopic surgery, diagnostic center, women's health, IVF & seasonal disease treatment. Quality healthcare near Pilkhuwa.",
  keywords: "best hospital in Pilkhuwa, nursing home near Pilkhuwa, emergency hospital Pilkhuwa, heart specialist Pilkhuwa, laparoscopic surgery Pilkhuwa, diagnostic center Pilkhuwa",
  openGraph: {
    title: "Best Hospital in Pilkhuwa – Raj Nursing Home",
    description: "Trusted healthcare for Pilkhuwa: 24/7 emergency, ICU, cardiac care, surgery, diagnostics, women's health & IVF.",
  },
};

export default function PilkhuwaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
