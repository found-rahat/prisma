export default async function ProdutDetils({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <div>
      <>
        <h1 className="bg-fuchsia-700 text-center text-3xl py-3">
          Product Detils {productId}
        </h1>
      </>
    </div>
  );
}
