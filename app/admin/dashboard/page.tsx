"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BarChart3, TrendingUp, FileText, Calendar } from "lucide-react";

export default function DashboardHomePage() {
  const [blogCount, setBlogCount] = useState(0);

  useEffect(() => {
    const token = typeof window !== "undefined" ? sessionStorage.getItem("admin_token") : null;
    if (!token) return;
    fetch("/api/admin/blogs", { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((d) => setBlogCount(Array.isArray(d) ? d.length : 0))
      .catch(() => {});
  }, []);

  const cards = [
    { title: "Primary Card", sub: "Blog posts", value: blogCount, color: "bg-blue-500", href: "/admin/dashboard/blogs", icon: FileText },
    { title: "Warning Card", sub: "Pending", value: "—", color: "bg-amber-500", href: "#", icon: Calendar },
    { title: "Success Card", sub: "Completed", value: "—", color: "bg-emerald-500", href: "#", icon: TrendingUp },
    { title: "Danger Card", sub: "Alerts", value: "0", color: "bg-red-500", href: "#", icon: BarChart3 },
  ];

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">Dashboard</h1>
      <p className="text-slate-500 text-sm mt-1">Dashboard</p>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {cards.map((card) => (
          <div key={card.title} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className={`h-1.5 ${card.color}`} />
            <div className="p-5">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{card.title}</p>
              <p className="text-2xl font-black text-slate-800 mt-1">{card.value}</p>
              <Link
                href={card.href}
                className="inline-block mt-4 text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Chart placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Area Chart Example</h3>
          <div className="h-64 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center">
            <p className="text-slate-400 text-sm font-medium">Chart area (Mar 1 – Mar 13)</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Bar Chart Example</h3>
          <div className="h-64 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center">
            <p className="text-slate-400 text-sm font-medium">Bar chart (January – June)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
