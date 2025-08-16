import prisma from "../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, name, mark } = await req.json();
    if (!email || !name || !mark) {
      return NextResponse.json({ error: "Missing field" }, { status: 400 });
    }
    const user = await prisma.user.create({
      data: {
        email,
        name,
        mark: Number(mark),
      },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (err: any) {
    console.error("Insert Error: ", err);
    return NextResponse.json({ error: "Failed to Insert" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ error: "Faild to fetch user" }, { status: 500 }); //proper database theke data anar process
  }
}
