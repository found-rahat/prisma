import Image from "next/image";
import prisma from "../../../prisma/prisma";
import AddFormDesign from "./AddFormDesign";
import Menu from "../menu";
export const metadata = {
  title: "Insert User data",
};

export default async function Home() {
  return (
    <main>
      <Menu />
      <AddFormDesign />
    </main>
  );
}
