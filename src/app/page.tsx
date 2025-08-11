import Image from "next/image";
import prisma from "../../prisma/prisma";

export default async function Home() {
  const InsertUser = await prisma.user.create({
    data: {
      email: "shahinur@gmail.com",
      name: "shahinur",
      mark: "90",
    },
  });
  const users = await prisma.user.findMany();

  return (
    <main>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
