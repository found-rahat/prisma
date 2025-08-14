import Image from "next/image";
import prisma from "../../prisma/prisma";

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
    // <layout>
    <main className="m-4">
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}-{user.name}
          </li>
        ))}
      </ul>
    </main>
    // </layout>
  );
}
