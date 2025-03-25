"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="w-screen top-0 fixed flex justify-between gap-8 pt-5 pb-5 text-gray-400 text-sm border-b border-gray-800 z-10 bg-black">
        <Link href="/" className="text-blue-500 font-extrabold text-lg pl-5">
          <h2>console.log({`Gautam`})</h2>
        </Link>
        <div className="flex gap-10 pr-5">
          <Link
            className="text-purple-400 border-b-2 border-purple-400 pb-1"
            href="/"
          >
            HOME
          </Link>
          <Link href="/about">ABOUT ME</Link>
          <Link href="/achivement">ACHIEVEMENTS</Link>
          <Link href="/skill">SKILLS</Link>
        </div>
      </nav>
    </>
  );
}
