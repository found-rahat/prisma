import prisma from "../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ error: "Faild to fetch user" }, { status: 500 });
  }
}
