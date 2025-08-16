import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function GET(
  req: Request,
  { params }: { params: { profile: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.profile) },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(
  req: Request,
  { params }: { params: { profile: string } }
) {
  const body = await req.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(params.profile) },
      data: { mark: Number(body.mark), name: body.name },
    });
    return NextResponse.json(updatedUser);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
