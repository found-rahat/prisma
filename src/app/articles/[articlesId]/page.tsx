// "use client";
import Menu from "@/app/menu";
import Link from "next/link";
// import { use } from "react";

export default async function NewArticles({
  params,
  searchParams,
}: {
  params: Promise<{ articlesId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articlesId } = await params; // jokhon use client a use korbo tokhon use add kore nete hobe linke use(params) await bad a
  const { lang = "en" } = await searchParams; // jokhon use client a use korbo tokhon use add kore nete hobe linke use(searchParams) await bad a
  return (
    <>
      <Menu />
      <div>
        <h1>News articles {articlesId}</h1>
        <p>reading in {lang}</p>
        <div>
          <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
          <Link href={`/articles/${articlesId}?lang=es`}>Spanish</Link>
          <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
        </div>
      </div>
    </>
  );
}
