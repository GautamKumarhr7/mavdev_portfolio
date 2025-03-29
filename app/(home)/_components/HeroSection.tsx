"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <div className="w-full h-screen flex flex-row flex-wrap justify-center items-center gap-10">
        {/* Animated Text Section */}
        <div
          className={`text-center border border-purple-800 p-10 rounded-lg transition-all duration-100 ${
            animate ? "animate-slideLeft opacity-100" : "opacity-0"
          }`}
        >
          {/* Typing Effect */}
          <h1 className="text-6xl font-bold text-gray-400">
            <span className="animate-typing">Hello</span>
            <span className="animate-blink">!</span>
          </h1>
          <h2 className="text-5xl font-extrabold mt-2 text-blue-400">
            I am a Software Developer
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl pb-8">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
          </p>
          <div className="flex flex-row justify-center gap-5 border-t-1 border-gray-700 pt-5">
            <Link href="https://github.com/GautamKumarhr7">
              <Image
                src="/githubLogo.svg"
                alt="GitHub Profile"
                width={30}
                height={30}
                className="bg-gray-100 rounded-full border-1 border-purple-700 p-1 hover:scale-110 transition"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/gautam-kumar-02586b270/">
              <Image
                src="/linkedinLogo.png"
                alt="LinkedIn Profile"
                width={30}
                height={30}
                className="bg-gray-100 rounded-full border-1 border-purple-700 p-1 hover:scale-110 transition"
              />
            </Link>
            <Link href="https://github.com/kumargautamhr7/">
              <Image
                src="/discord-icon.svg"
                alt="Discord Profile"
                width={30}
                height={30}
                className="bg-gray-100 rounded-full border-1 border-purple-700 p-1 hover:scale-110 transition"
              />
            </Link>
          </div>
        </div>

        {/* Animated Image Section */}
        <div
          className={`transition-all duration-1000 ${
            animate ? "animate-slideRight opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/main1.jpg"
            alt="Portfolio Main Image"
            width={350}
            height={350}
            className="border-2 p-5 border-purple-400 bg-purple-900 rounded-full shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
