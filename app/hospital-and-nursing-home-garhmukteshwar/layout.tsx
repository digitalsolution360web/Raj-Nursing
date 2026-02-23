import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Hospital in Garhmukteshwar – Advanced & Trusted Medical Care | Raj Nursing Home",
  description:
    "Raj Nursing Home provides advanced and trusted healthcare for Garhmukteshwar: 24/7 emergency, ICU, cardiac care, laparoscopic surgery, diagnostics, maternity services and chronic disease management.",
  keywords:
    "best hospital in Garhmukteshwar, nursing home near Garhmukteshwar, emergency hospital Garhmukteshwar, heart specialist Garhmukteshwar, laparoscopic surgery Garhmukteshwar, diagnostic center Garhmukteshwar",
  openGraph: {
    title: "Best Hospital in Garhmukteshwar – Raj Nursing Home",
    description:
      "Trusted medical care for Garhmukteshwar and nearby areas with 24/7 emergency, ICU, cardiac care, surgery, diagnostics, maternity and seasonal disease treatment.",
  },
};

export default function GarhmukteshwarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

