"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

type BlogPost = {
  id: string;
  slug: string;
  titleEn: string;
  titleHi?: string;
  date: string;
  image: string;
  excerpt?: string;
};

export default function BlogPage() {
  const { t, lang } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const title = (post: BlogPost) => (lang === "hi" && post.titleHi ? post.titleHi : post.titleEn);

  return (
    <div className="bg-slate-50/50 min-h-screen animate-page-enter mt-32 pb-20">
      {/* Header Section - unchanged */}
      <div className="bg-[#800020] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/raj/banner2.webp"
            alt="Blog"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-[1420px] mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">{t("blog.title")}</h1>
          <p className="text-xl text-rose-100 font-medium max-w-2xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </div>
      </div>

      {/* Breadcrumbs - unchanged */}
      <div className="bg-white border-b border-gray-100 py-4 px-6 mb-12">
        <div className="max-w-[1420px] mx-auto">
          <nav className="flex items-center text-sm font-bold text-gray-500">
            <Link href="/" className="hover:text-[#800020] transition-colors">{t("nav.home")}</Link>
            <span className="mx-3 text-gray-300">/</span>
            <span className="text-[#800020]">{t("nav.blogs")}</span>
          </nav>
        </div>
      </div>

      {/* Blog Grid - same UI, dynamic data */}
      <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={title(post)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#800020] px-4 py-2 rounded-xl text-xs font-black shadow-sm">
                    {t("blog.healthTips")}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-4 text-xs font-black text-gray-400 uppercase tracking-widest">
                    <Calendar className="w-3.5 h-3.5" />
                    {t("blog.dateLabel")} {post.date}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight mb-4 group-hover:text-[#800020] transition-colors line-clamp-2">
                    {title(post)}
                  </h3>
                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[#800020] font-black text-sm group-hover:gap-3 transition-all flex items-center gap-2 uppercase tracking-widest">
                      {t("blog.readMore")} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
