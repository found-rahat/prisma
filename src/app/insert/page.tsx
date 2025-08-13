import Image from "next/image";
import prisma from "../../../prisma/prisma";
import AddFormDesign from "./AddFormDesign";

export default async function Home() {
  // const InsertUser = await prisma.user.create({
  //   data: {
  //     email: "shaheb@gmail.com",
  //     name: "mia",
  //     mark: 99,
  //   },
  // });

  // console.log("Created user:", InsertUser);
  const users = await prisma.user.findMany();

  return (
    <main className="m-4">
      <AddFormDesign />
    </main>
  );
}
