"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AddFormDesign() {
  const [users, setUsers] = useState<any[]>([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mark, setMark] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const res = await fetch("/api/insert");
    const data = await res.json();
    setUsers(data);
  }

  async function handleSubmit() {
    if (!email || !name || !mark) {
      alert("Please fill all fields!");
      return;
    }

    const res = await fetch("/api/insert", {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, mark: Number(mark) }),
    });

    if (res.ok) {
      // নতুন ইউজার ডেটা অ্যাড করা
      const newUser = await res.json();
      setUsers((prev) => [...prev, newUser]); // instant update
      setEmail("");
      setName("");
      setMark("");
    } else {
      alert("Failed to add user");
    }
  }
  return (
    <div>
      <>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 mb-6">
          <div>
            <label>Email</label>
            <input
              className="border px-3 py-2 w-full "
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)} // aita na dle value show kore na and typing korle o show kore na
            />
          </div>

          <div>
            <label>Name</label>
            <input
              className="border px-3 py-2 w-full"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)} // aita na dle value show kore na and typing korle o show kore na
            />
          </div>

          <div>
            <label>Mark</label>
            <input
              className="border px-3 py-2 w-full"
              type="number"
              value={mark}
              placeholder="Marks"
              onChange={(e) => setMark(e.target.value)} // aita na dle value show kore na and typing korle o show kore na
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Submit
          </button>
        </div>
      </>
      <>
        <table className="min-w-full bg-white border border-gray-700 rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border-b">Id</th>
              <th className="px-4 py-2 border-b">User Id</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Mark</th>
              <th className="px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={
                  index % 2 === 0
                    ? "bg-white text-center"
                    : "bg-gray-50 text-center"
                }
              >
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">{user.id}</td>
                <td className="px-4 py-2 border-b">{user.name}</td>
                <td className="px-4 py-2 border-b">{user.email}</td>
                <td className="px-4 py-2 border-b">{user.mark}</td>
                <td className="px-4 py-2 border-b">
                  <Link href={`/insert/${user.id}`}> View </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}
