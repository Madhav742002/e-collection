// app/api/member/route.ts
import { db } from "@/configs/db";
import { memberlist } from "@/configs/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const members = await db.select().from(memberlist);
    return NextResponse.json({ members });
  } catch (error) {
    console.log("Error fetching data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
