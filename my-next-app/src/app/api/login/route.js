import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === "user@example.com" && password === "password123") {
    return NextResponse.json({ message: "Login successful!" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }
}