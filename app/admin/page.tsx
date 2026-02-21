"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ADMIN_SECRET = process.env.NEXT_PUBLIC_ADMIN_SECRET || "admin-raj-nursing-2025";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/blogs", {
        headers: { Authorization: `Bearer ${password}` },
      });
      if (!res.ok) {
        setError("Invalid password. Try again.");
        setLoading(false);
        return;
      }
      if (typeof window !== "undefined") {
        sessionStorage.setItem("admin_token", password);
      }
      router.push("/admin/dashboard");
      router.refresh();
    } catch {
      setError("Something went wrong.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239d174d\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      <div className="relative w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#9d174d]/20 text-[#f43f5e] mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">Admin Dashboard</h1>
            <p className="text-slate-400 text-sm font-medium mt-2">Raj Nursing Home – Sign in to manage blogs</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-slate-300 mb-2">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#9d174d]/50 focus:border-[#9d174d]/50 transition-all"
                required
              />
            </div>
            {error && <p className="text-red-400 text-sm font-bold">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-[#9d174d] hover:bg-[#831843] text-white font-black text-sm uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#9d174d]/20"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
          <p className="text-center mt-6">
            <Link href="/" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">← Back to website</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
