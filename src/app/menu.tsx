import Link from "next/link";

Link;
export default function Menu() {
  return (
    <nav className="bg-white shadow-md mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
            {" "}
            Resss Online
          </div>

          {/* Menu items */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/insert"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Insert
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Login
            </Link>
            <Link
              href="/forgot-password"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Forgot Password
            </Link>
            <Link
              href="/register"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Register
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              {/* Simple hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
