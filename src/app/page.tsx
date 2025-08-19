import Image from "next/image";
import prisma from "../../prisma/prisma";
import Link from "next/link";
import Menu from "./menu";

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
    <div>
      <Menu />
      <main className="m-6 max-w-2xl mx-auto">
        {/* Top bar */}

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">User List</h1>
          <Link
            href={"/insert"}
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            + Insert
          </Link>
        </div>

        {/* User list */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <ul>
            {users.length > 0 ? (
              users.map((user, index) => (
                <li
                  key={user.id}
                  className={`flex justify-between items-center px-4 py-3 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition`}
                >
                  <span className="font-medium text-gray-700">
                    #{user.id} - {user.name}
                  </span>
                  <Link
                    href={`/insert/${user.id}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-center text-gray-500 py-6">No users found</li>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}
