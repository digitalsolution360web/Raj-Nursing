"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/admin";
  const isDashboard = pathname?.startsWith("/admin/dashboard");

  useEffect(() => {
    if (isLoginPage) return;
    const token = typeof window !== "undefined" ? sessionStorage.getItem("admin_token") : null;
    if (!token && isDashboard) {
      router.replace("/admin");
    }
  }, [isLoginPage, isDashboard, router]);

  return <>{children}</>;
}
