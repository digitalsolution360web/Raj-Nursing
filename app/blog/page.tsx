"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const blogPosts = [
    { id: 1, titleKey: "blog.post1Title", date: "13-11-2025", image: "/Thyroid.jpg", slug: "diabetes-thyroid-clinic-hapur" },
    { id: 2, titleKey: "blog.post2Title", date: "21-06-2025", image: "/Diagnostic.jpg", slug: "best-gynecologist-hapur" },
    { id: 3, titleKey: "blog.post3Title", date: "19-06-2025", image: "/india-doctor.jpg", slug: "pregnancy-ultrasound-guide-hindi" },
    { id: 4, titleKey: "blog.post4Title", date: "15-06-2025", image: "/laparoscopic.jpg", slug: "laparoscopic-hapur" },
    { id: 5, titleKey: "blog.post5Title", date: "15-06-2025", image: "/ultrasound.jpg", slug: "ultrasound-advanced-diagnostic-hapur" }
];

export default function BlogPage() {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-50/50 min-h-screen animate-page-enter mt-32 pb-20">
            {/* Header Section */}
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

            {/* Breadcrumbs */}
            <div className="bg-white border-b border-gray-100 py-4 px-6 mb-12">
                <div className="max-w-[1420px] mx-auto">
                    <nav className="flex items-center text-sm font-bold text-gray-500">
                        <Link href="/" className="hover:text-[#800020] transition-colors">{t("nav.home")}</Link>
                        <span className="mx-3 text-gray-300">/</span>
                        <span className="text-[#800020]">{t("nav.blogs")}</span>
                    </nav>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={t(post.titleKey)}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#800020] px-4 py-2 rounded-xl text-xs font-black shadow-sm">
                                    {t("blog.healthTips")}
                                </div>
                            </div>

                            {/* Content area */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-4 text-xs font-black text-gray-400 uppercase tracking-widest">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {t("blog.dateLabel")} {post.date}
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight mb-4 group-hover:text-[#800020] transition-colors line-clamp-2">
                                    {t(post.titleKey)}
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
            </div>
        </div>
    );
}
