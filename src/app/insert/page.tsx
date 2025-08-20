import Image from "next/image";
import prisma from "../../../prisma/prisma";
import AddFormDesign from "./AddFormDesign";
import Menu from "../menu";
import { resolve } from "path";
export const metadata = {
  title: "Insert User data",
};

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("InterNational delay");
    }, 2000);
  });
  return (
    <main>
      <Menu />
      <AddFormDesign />
    </main>
  );
}
