"use client";

export default function Navbar() {
  return (
    <>
      <nav className="absolute w-screen top-6 pb-6 flex justify-between gap-8 text-gray-400 text-sm border-b border-gray-800">
        <a href="/" className="text-blue-500 font-extrabold text-lg pl-5">
          <h2>console.log("Gautam")</h2>
        </a>
        <div className="flex gap-10 pr-5">
          <a
            className="text-purple-400 border-b-2 border-purple-400 pb-1"
            href="/"
          >
            HOME
          </a>
          <a href="/about-me">ABOUT ME</a>
          <a href="/experience">ACHIEVEMENTS</a>
          <a href="/skills">SKILLS</a>
        </div>
      </nav>
    </>
  );
}
