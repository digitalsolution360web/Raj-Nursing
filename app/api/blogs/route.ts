import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "blogs.json");
    const data = readFileSync(filePath, "utf-8");
    const blogs = JSON.parse(data);
    return NextResponse.json(blogs);
  } catch (e) {
    console.error("Blogs API error:", e);
    return NextResponse.json([], { status: 200 });
  }
}
