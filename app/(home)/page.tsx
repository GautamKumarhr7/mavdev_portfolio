"use client"; // Required for animations in Next.js App Router

import Image from "next/image";
import { motion } from "framer-motion";
// import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* <Navbar></Navbar> */}
      <div className="flex flex-col md:flex-row items-center justify-between w-10/12 max-w-5xl">
        {/* Left Section - Animated Text */}
        <motion.div
          className="md:w-1/2 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-lg text-gray-400">Hi, I am</p>
          <motion.h1
            className="text-4xl font-bold text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Gautam Kumar
          </motion.h1>
          <motion.h2
            className="text-2xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            SOFTWARE DEVELOPER
          </motion.h2>
          <motion.p
            className="text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ab velit reiciendis aliquam, adipisci alias iste nihil. Maiores,
            illo veritatis quod necessitatibus soluta suscipit.
          </motion.p>
        </motion.div>

        {/* Right Section - Animated Profile Picture with Gradient */}
        <motion.div
          className="relative flex justify-center items-center md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Gradient Background */}
          <motion.div
            className="absolute w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-blue-900 to-blue-600"
            animate={{
              scale: [1, 1.1, 1], // Subtle pulsating effect
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Floating & Scaling Image */}
          <motion.div
            animate={{
              y: [0, -10, 0], // Floating effect
              scale: [1, 1.05, 1], // Slight scaling effect
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/img.jpg"
              width={200}
              height={200}
              alt="Profile Picture"
              className="relative rounded-full object-cover w-40 h-40 md:w-56 md:h-56"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
