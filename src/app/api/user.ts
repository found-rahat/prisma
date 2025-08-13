import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return res.status(200);
  }
  if (req.method === "POST") {
    const { email, name, mark } = req.body;
    try {
      const user = await prisma.user.create({
        data: { email, name, mark },
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: "Failed to insert user" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
