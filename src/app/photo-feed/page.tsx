import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";
import Menu from "../menu";

export default function Home() {
  return (
    <>
      <div>
        <Menu />
        <main className="container mx-auto">
          <h1 className="text-center text-3xl font-bold my-4">
            New Wonders of the World
          </h1>
          <div className="flex flex-wrap gap-4">
            {wonders.map(({ id, src, name }) => (
              <Link key={id} href={`/photo-feed/${id}`}>
                <Image
                  alt={name}
                  src={src}
                  className="w-48 h-48 object-cover" // প্রতিটা image এর ফিক্সড সাইজ
                />
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
