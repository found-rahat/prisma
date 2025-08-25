import Menu from "./menu";
export default function NotFound() {
  return (
    <>
      <Menu />
      <div className="flex items-center justify-center h-screen bg-fuchsia-100">
        <div className="text-center bg-blue-50 px-40 py-40">
          <h1 className="text-5xl font-bold">404 | Not Found</h1>
          <p className="mt-4 text-lg">Could not page resource</p>
        </div>
      </div>
    </>
  );
}
