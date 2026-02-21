"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Save, Upload } from "lucide-react";

export default function NewBlogPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    titleEn: "",
    titleHi: "",
    slug: "",
    date: new Date().toISOString().slice(0, 10).split("-").reverse().join("-"),
    image: "/medical.jpg",
    excerpt: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    ytIframe: "",
    status: true,
  });

  function getToken() {
    return typeof window !== "undefined" ? sessionStorage.getItem("admin_token") : null;
  }

  function updateSlugFromTitle() {
    const slug = form.titleEn
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    setForm((f) => ({ ...f, slug }));
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const token = getToken();
    if (!token) return;
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("image", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      if (data.url) setForm((f) => ({ ...f, image: data.url }));
    } catch {
      setError("Image upload failed. Use path instead.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    const token = getToken();
    if (!token) {
      router.replace("/admin");
      return;
    }
    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data.error as string) || "Failed to create");
      }
      router.push("/admin/dashboard/blogs");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-black text-slate-800 mb-6">New Post</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
          <input
            type="text"
            value={form.titleEn}
            onChange={(e) => setForm((f) => ({ ...f, titleEn: e.target.value }))}
            onBlur={updateSlugFromTitle}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. Diabetes & Thyroid Clinic in Hapur"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Slug</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. diabetes-thyroid-clinic-in-hapur"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Description</label>
          <textarea
            value={form.content}
            onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
            rows={10}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 font-sans text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Use HTML: <p>, <h2>, <ul>, <li>, etc."
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Thumbnail image</label>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="w-full sm:w-40 h-28 rounded-lg border border-slate-200 overflow-hidden bg-slate-50 shrink-0">
              <img src={form.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 w-full space-y-2">
              <label className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-medium text-sm cursor-pointer hover:bg-slate-200">
                <Upload className="w-4 h-4" />
                {uploading ? "Uploading…" : "Choose File"}
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
              </label>
              <input
                type="text"
                value={form.image}
                onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Or enter image path"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">YT IFrame Link</label>
          <input
            type="text"
            value={form.ytIframe}
            onChange={(e) => setForm((f) => ({ ...f, ytIframe: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="YouTube embed URL (optional)"
          />
        </div>

        <div className="border-t border-slate-200 pt-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Seo Tags</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Meta Title</label>
              <input
                type="text"
                value={form.metaTitle}
                onChange={(e) => setForm((f) => ({ ...f, metaTitle: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Meta Description</label>
              <input
                type="text"
                value={form.metaDescription}
                onChange={(e) => setForm((f) => ({ ...f, metaDescription: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Meta KeyWords</label>
              <input
                type="text"
                value={form.metaKeywords}
                onChange={(e) => setForm((f) => ({ ...f, metaKeywords: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="status"
            checked={form.status}
            onChange={(e) => setForm((f) => ({ ...f, status: e.target.checked }))}
            className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="status" className="text-sm font-bold text-slate-700">Status</label>
        </div>

        {error && <p className="text-red-600 text-sm font-bold">{error}</p>}

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> {saving ? "Saving…" : "Save Post"}
          </button>
          <Link
            href="/admin/dashboard/blogs"
            className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
