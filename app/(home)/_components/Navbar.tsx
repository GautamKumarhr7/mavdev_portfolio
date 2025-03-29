"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full top-0 fixed flex justify-between items-center gap-8 pt-5 pb-5 text-gray-400 text-sm border-b border-gray-800 z-10 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
        <Link href="/" className="text-blue-500 font-extrabold text-lg pl-5">
          <h2>console.log({`Gautam`})</h2>
        </Link>

        <div className="flex gap-10 pr-5 hidden md:flex">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition">
            About Me
          </Link>
          <Link href="/experience" className="hover:text-blue-400 transition">
            Achievements
          </Link>
          <Link href="/skill" className="hover:text-blue-400 transition">
            Skills
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden pr-5 text-gray-400 hover:text-blue-400 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-16 right-5 bg-gray-800 rounded-md shadow-md p-4 text-white md:hidden">
            <Link
              href="/"
              className="block mb-2 hover:text-blue-400 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block mb-2 hover:text-blue-400 transition"
            >
              About Me
            </Link>
            <Link
              href="/experience"
              className="block mb-2 hover:text-blue-400 transition"
            >
              Achievements
            </Link>
            <Link
              href="/skill"
              className="block hover:text-blue-400 transition"
            >
              Skills
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
