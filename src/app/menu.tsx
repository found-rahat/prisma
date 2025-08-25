"use client";

import { useState } from "react";
import Link from "next/link";

const Navlink = [
  { name: "Home", href: "/" },
  { name: "Insert", href: "/insert" },
  { name: "Login", href: "/login" },
  { name: "user Client", href: "/userClient" },
  { name: "user server", href: "/userServer" },
  { name: "Sequential", href: "/sequential" },
  // { name: "Register", href: "/register" },
  // { name: "Forgot Password", href: "/forgot-password" },
  // { name: "Dashboard", href: "/dashboard" },
  // { name: "Photos", href: "/photo-feed" },
  // { name: "Folder 1", href: "/Folder1" },
  // { name: "Folder 2", href: "/folder2" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
            Resss Online
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {Navlink.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {Navlink.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="block text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
