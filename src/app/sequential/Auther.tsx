type Author = {
  id: number;
  name: string;
};

export default async function AuthorShow({ userId }: { userId: number }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const author: Author = await response.json();

  return (
    <>
      <div className="text-sm text-gray-500">
        Writter by: {""}
        <span className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">
          {author.name}
        </span>
      </div>
    </>
  );
}
