import { NextRequest, NextResponse } from "next/server";

// Map project slugs to their env var names
const PROJECT_PASSWORD_KEYS: Record<string, string> = {
  detectify: "DETECTIFY_PASSWORD",
  appstract: "APPSTRACT_PASSWORD",
};

export async function POST(request: NextRequest) {
  const { password, project } = await request.json();

  if (!project || typeof project !== "string") {
    return NextResponse.json({ error: "Missing project." }, { status: 400 });
  }

  const envKey = PROJECT_PASSWORD_KEYS[project];
  if (!envKey) {
    return NextResponse.json({ error: "Unknown project." }, { status: 400 });
  }

  const correctPassword = process.env[envKey];
  if (!correctPassword) {
    return NextResponse.json(
      { error: `Server misconfiguration — ${envKey} is not set.` },
      { status: 500 }
    );
  }

  if (password !== correctPassword) {
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }

  return NextResponse.json({ success: true });
}
