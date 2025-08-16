"use client";

import React from "react";
import { useEffect, useState } from "react";

export default function ProfilePage({
  params,
}: {
  params: Promise<{ profile: string }>;
}) {
  const resolvedParams = React.use(params);
  const profileId = Number(resolvedParams.profile);
  const [user, setUser] = useState<any>(null);
  const [mark, setMark] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load user on mount
  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    try {
      setError("");
      const res = await fetch(`/api/insert/${profileId}`);
      const data = await res.json();

      if (!res.ok) {
        console.error("Failed to fetch user:", data);
        setError(data.error || "Failed to fetch user");
        setUser(null);
        return;
      }

      setUser(data);
      setMark(data?.mark?.toString() || "");
      setName(data?.name || "");
    } catch (err) {
      console.error("Error fetching user:", err);
      setError("Error fetching user");
      setUser(null);
    }
  }

  async function updateUser() {
    if (!user) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/insert/${profileId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mark, name }),
      });

      const updated = await res.json();

      if (!res.ok) {
        console.error("Failed to update user:", updated);
        setError(updated.error || "Failed to update user");
        setLoading(false);
        return;
      }

      setUser(updated);
    } catch (err) {
      console.error("Error updating user:", err);
      setError("Error updating user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="bg-fuchsia-700 text-center text-3xl py-3 mb-4 text-white">
        Product Details {profileId}
      </h1>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      {user ? (
        <>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Mark:</strong> {user.mark}
          </p>
          <p>
            <strong>Registration Date:</strong>{" "}
            {new Date(user.createAt).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
          <form onClick={updateUser}>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border px-2 py-1 flex-1"
                placeholder="Update name"
              />
              <input
                type="number"
                value={mark}
                onChange={(e) => setMark(e.target.value)}
                className="border px-2 py-1 w-24"
                placeholder="Mark"
              />
              <button
                // onClick={updateUser}
                type="submit"
                disabled={loading}
                className="bg-green-500 px-4 py-1 text-white rounded"
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>No user found.</p>
      )}
    </div>
  );
}
