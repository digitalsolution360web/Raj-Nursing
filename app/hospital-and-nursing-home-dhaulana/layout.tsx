import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Hospital in Dhaulana – Advanced & Trusted Healthcare Services | Raj Nursing Home",
  description:
    "Raj Nursing Home offers advanced and trusted healthcare for Dhaulana: 24/7 emergency, ICU, heart treatment, laparoscopic surgery, diagnostics, maternity care and chronic disease management.",
  keywords:
    "best hospital in Dhaulana, nursing home near Dhaulana, emergency hospital Dhaulana, heart specialist Dhaulana, laparoscopic surgery Dhaulana, diagnostic center Dhaulana",
  openGraph: {
    title: "Best Hospital in Dhaulana – Raj Nursing Home",
    description:
      "Trusted healthcare for Dhaulana and nearby areas with 24/7 emergency, ICU, cardiac care, surgery, diagnostics, maternity and seasonal disease treatment.",
  },
};

export default function DhaulanaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

