import { NextRequest, NextResponse } from "next/server";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

function authFailed() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const token = process.env.ADMIN_SECRET || "admin-raj-nursing-2025";
  if (auth !== `Bearer ${token}`) return authFailed();

  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No image file" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const ext = path.extname(file.name) || ".jpg";
    const safeName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, safeName);
    writeFileSync(filePath, buffer);

    const url = `/uploads/${safeName}`;
    return NextResponse.json({ url });
  } catch (e) {
    console.error("Upload error:", e);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
