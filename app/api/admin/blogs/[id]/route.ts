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

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = req.headers.get("authorization");
  const token = process.env.ADMIN_SECRET || "admin-raj-nursing-2025";
  if (auth !== `Bearer ${token}`) return authFailed();
  const { id } = await params;
  try {
    const body = await req.json();
    const blogs = getBlogs();
    const idx = blogs.findIndex((b: { id: string }) => b.id === id);
    if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
    const updated = {
      ...blogs[idx],
      ...body,
      id: blogs[idx].id,
    };
    blogs[idx] = updated;
    saveBlogs(blogs);
    return NextResponse.json(updated);
  } catch (e) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = _req.headers.get("authorization");
  const token = process.env.ADMIN_SECRET || "admin-raj-nursing-2025";
  if (auth !== `Bearer ${token}`) return authFailed();
  const { id } = await params;
  try {
    const blogs = getBlogs();
    const filtered = blogs.filter((b: { id: string }) => b.id !== id);
    if (filtered.length === blogs.length) return NextResponse.json({ error: "Not found" }, { status: 404 });
    saveBlogs(filtered);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
