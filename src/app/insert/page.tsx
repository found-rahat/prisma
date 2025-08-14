import Image from "next/image";
import prisma from "../../../prisma/prisma";
import AddFormDesign from "./AddFormDesign";

export default async function Home() {
  return (
    <main className="m-4">
      <AddFormDesign />
    </main>
  );
}
