import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

const BLOG_FILE = path.join(process.cwd(), "data", "blogs.json");

function getBlogs() {
  const data = readFileSync(BLOG_FILE, "utf-8");
  return JSON.parse(data);
}

function saveBlogs(blogs: unknown[]) {
  writeFileSync(BLOG_FILE, JSON.stringify(blogs, null, 2), "utf-8");
}

function authFailed() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const token = process.env.ADMIN_SECRET || "admin-raj-nursing-2025";
  if (auth !== `Bearer ${token}`) return authFailed();
  try {
    const blogs = getBlogs();
    return NextResponse.json(blogs);
  } catch (e) {
    return NextResponse.json({ error: "Failed to read blogs" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const token = process.env.ADMIN_SECRET || "admin-raj-nursing-2025";
  if (auth !== `Bearer ${token}`) return authFailed();
  try {
    const body = await req.json();
    const blogs = getBlogs();
    const id = String(blogs.length ? Math.max(...blogs.map((b: { id: string }) => parseInt(b.id, 10))) + 1 : 1);
    const newPost = {
      id: String(id),
      slug: body.slug || body.titleEn?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") || `post-${id}`,
      titleEn: body.titleEn || "",
      titleHi: body.titleHi || body.titleEn || "",
      date: body.date || new Date().toISOString().slice(0, 10).split("-").reverse().join("-"),
      image: body.image || "/medical.jpg",
      excerpt: body.excerpt || "",
      content: body.content || "",
      metaTitle: body.metaTitle || "",
      metaDescription: body.metaDescription || "",
      metaKeywords: body.metaKeywords || "",
      ytIframe: body.ytIframe || "",
      status: body.status !== false,
    };
    blogs.push(newPost);
    saveBlogs(blogs);
    return NextResponse.json(newPost);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
