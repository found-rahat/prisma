"use client";

import { useState, useEffect } from "react";

export default function AddFormDesign() {
  const [users, setUsers] = useState<any[]>([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mark, setMark] = useState("");

  // প্রথমে ডেটা লোড করা
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
      headers: { "Content-Type": "application/json" },
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
  const total = users.reduce((sum, u) => sum + (u.mark || 0), 0);

  return (
    <div>
      {/* Form */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 mb-6">
        <div>
          <label>Email</label>
          <input
            className="border px-3 py-2 w-full "
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Name</label>
          <input
            className="border px-3 py-2 w-full"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Mark</label>
          <input
            className="border px-3 py-2 w-full"
            type="number"
            placeholder="Marks"
            value={mark}
            onChange={(e) => setMark(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        >
          Submit
        </button>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border-b">id</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Mark</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-4 py-2 border-b">{index + 1}</td>
              <td className="px-4 py-2 border-b">{user.name}</td>
              <td className="px-4 py-2 border-b">{user.email}</td>
              <td className="px-4 py-2 border-b">{user.mark}</td>
            </tr>
          ))}
          <tr>
            <td className="text-center" colSpan={3}>
              total
            </td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
