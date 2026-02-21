"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, ExternalLink, Calendar, Image as ImageIcon } from "lucide-react";

type Blog = {
  id: string;
  slug: string;
  titleEn: string;
  titleHi?: string;
  date: string;
  image: string;
  excerpt: string;
  content?: string;
};

export default function BlogsListPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function getToken() {
    return typeof window === "undefined" ? null : sessionStorage.getItem("admin_token");
  }

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace("/admin");
      return;
    }
    fetch("/api/admin/blogs", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(setBlogs)
      .catch(() => router.replace("/admin"))
      .finally(() => setLoading(false));
  }, [router]);

  async function handleDelete(id: string) {
    const token = getToken();
    if (!token || !confirm("Delete this blog post?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) setBlogs((prev) => prev.filter((b) => b.id !== id));
    } finally {
      setDeletingId(null);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-slate-500 font-medium">Loading…</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">Blogs</h1>
      <p className="text-slate-500 text-sm mt-1">Manage your health insights and news.</p>

      <Link
        href="/admin/dashboard/new"
        className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors"
      >
        <Plus className="w-4 h-4" /> Add new post
      </Link>

      <div className="mt-6 space-y-4">
        {blogs.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-500 font-medium">
            No blog posts yet. Create your first post.
          </div>
        ) : (
          blogs.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-slate-300 transition-colors shadow-sm"
            >
              <div className="relative w-full sm:w-24 h-32 sm:h-24 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-slate-800 text-lg truncate">{post.titleEn}</h2>
                <div className="flex items-center gap-4 mt-1 text-slate-500 text-xs font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="truncate">{post.slug}</span>
                </div>
                {post.excerpt && (
                  <p className="text-slate-500 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200"
                  title="View"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  href={`/admin/dashboard/edit/${post.id}`}
                  className="p-2.5 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200"
                  title="Edit"
                >
                  <Pencil className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => handleDelete(post.id)}
                  disabled={deletingId === post.id}
                  className="p-2.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-50"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
