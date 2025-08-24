import Menu from "../menu";
import { redirect } from "next/navigation";

export default function Folder1() {
  redirect("folder2");
  return (
    <div>
      <Menu />
      <h1>This is the Folder 1</h1>
    </div>
  );
}
