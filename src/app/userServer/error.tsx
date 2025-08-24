"use client";

import { useEffect } from "react";

export default function errorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-2xl text-red-500">Error data is not fetch</div>
    </div>
  );
}
