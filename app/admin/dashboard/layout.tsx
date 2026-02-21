"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Calendar,
  Mail,
  ChevronRight,
  Menu,
  Search,
  ChevronDown,
  LogOut,
  ExternalLink,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userOpen, setUserOpen] = useState(false);

  function logout() {
    sessionStorage.removeItem("admin_token");
    router.replace("/admin");
    router.refresh();
  }

  const nav = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Blogs", href: "/admin/dashboard/blogs", icon: FileText },
    { label: "Appointments", href: "/contact", icon: Calendar },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 z-40">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen((o) => !o)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link href="/admin/dashboard" className="font-black text-slate-800 text-lg tracking-tight">
            Raj Nursing Home
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center bg-slate-100 rounded-lg overflow-hidden border border-slate-200 max-w-xs">
            <input
              type="text"
              placeholder="Search for..."
              className="px-3 py-2 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none w-full"
            />
            <button type="button" className="p-2 text-blue-600 hover:bg-slate-200">
              <Search className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={() => setUserOpen((o) => !o)}
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-600"
            >
              <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-slate-600 text-sm font-bold">
                R
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>
            {userOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setUserOpen(false)} />
                <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-20">
                  <p className="px-4 py-2 text-xs text-slate-500 font-medium">Logged in as</p>
                  <p className="px-4 py-1 text-sm font-bold text-slate-800">Raj</p>
                  <button
                    type="button"
                    onClick={logout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4" /> Sign out
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Left Sidebar - Dark */}
      <aside
        className={`fixed left-0 top-14 bottom-0 z-30 w-64 bg-slate-800 border-r border-slate-700 flex flex-col transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex-1 p-4 overflow-y-auto">
          <p className="px-3 mb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">CORE</p>
          <Link
            href="/admin/dashboard"
            className={`flex items-center justify-between gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              pathname === "/admin/dashboard" ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
            }`}
          >
            <span className="flex items-center gap-3">
              <LayoutDashboard className="w-5 h-5 text-slate-400" />
              Dashboard
            </span>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </Link>

          <p className="px-3 mt-6 mb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Interface</p>
          {[
            { label: "Blogs", href: "/admin/dashboard/blogs", icon: FileText },
            { label: "Appointments", href: "/contact", icon: Calendar },
            { label: "Contact", href: "/contact", icon: Mail },
          ].map((item) => {
            const isActive = pathname === item.href || (item.href === "/admin/dashboard/blogs" && (pathname?.startsWith("/admin/dashboard/blogs") || pathname?.startsWith("/admin/dashboard/edit") || pathname === "/admin/dashboard/new"));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-slate-400" />
                  {item.label}
                </span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-700">
          <p className="text-xs text-slate-500 font-medium">Logged in as</p>
          <p className="text-sm font-bold text-white mt-0.5">Raj</p>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 text-slate-400 hover:text-white text-sm"
          >
            <ExternalLink className="w-4 h-4" /> View site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className={`flex-1 pt-14 transition-all duration-200 ${sidebarOpen ? "md:ml-64" : "md:ml-0"} min-h-screen`}>
        <div className="p-6 md:p-8">{children}</div>
      </main>
    </div>
  );
}
