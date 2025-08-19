import Menu from "@/app/menu";
import Link from "next/link";

export default async function NewArticles({
  params,
  searchParams,
}: {
  params: Promise<{ articlesId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articlesId } = await params;
  const { lang = "en" } = await searchParams;
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
