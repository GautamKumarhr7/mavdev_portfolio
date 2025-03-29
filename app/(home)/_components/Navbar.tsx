"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="w-full top-0 fixed flex justify-between gap-8 pt-5 pb-5 text-gray-400 text-sm border-b border-gray-800 z-10 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
        <Link href="/" className="text-blue-500 font-extrabold text-lg pl-5">
          <h2>console.log({`Gautam`})</h2>
        </Link>
        <div className="flex gap-10 pr-5">
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
      </nav>
    </>
  );
}
