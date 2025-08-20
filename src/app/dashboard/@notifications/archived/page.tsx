import { Card } from "@/components/card";
import Link from "next/link";

export default function Notification() {
  return (
    <>
      <Card>
        Notification
        <Link className="bg-amber-400 m-4 p-5 rounded-xl" href={"/dashboard"}>
          Default
        </Link>
      </Card>
    </>
  );
}
