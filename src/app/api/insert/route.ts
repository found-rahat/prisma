import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function POST(req: NextRequest) {
  try {
    if (req.headers.get("content-type") !== "application/json") {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 415 }
      );
    }

    const { email, name, mark } = await req.json();

    if (!email || !name || mark === undefined) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
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
    if (err.code === "P2002") {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }
    console.error("Insert Error:", err);
    return NextResponse.json(
      { error: "Failed to insert user" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { id: "desc" },
    });
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
