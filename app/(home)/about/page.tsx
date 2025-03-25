"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-900 text-white">
      <Navbar />
      <h1 className="text-5xl font-extrabold pt-10 pb-6 text-blue-400">
        ABOUT ME
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10 p-5">
        {/* Image Section */}
        <div className="relative">
          <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/50">
            <Image
              src="/profile.png" // Store processed image in `public/profile.png`
              alt="Profile Image"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-lg text-gray-300">
            Hi, I&apos;m a passionate software developer specializing in backend
            development with Node.js and TypeScript. I build scalable web
            applications and enjoy working with PostgreSQL, Express.js, and
            CI/CD pipelines. My goal is to create efficient and maintainable
            software solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
