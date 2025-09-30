"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
        {/* Animated Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I&apos;m <span className="text-blue-400">Gautam</span>
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mt-2 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A Software Developer
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4 max-w-xl pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I build beautiful and functional web applications. I&apos;m
            passionate about creating great user experiences and solving complex
            problems.
          </motion.p>
          <motion.div
            className="flex flex-row justify-start gap-5 pt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="https://github.com/GautamKumarhr7">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Image
                  src="/githubLogo.svg"
                  alt="GitHub Profile"
                  width={30}
                  height={30}
                  className="bg-gray-100 rounded-full border-2 border-blue-400 p-1"
                />
              </motion.div>
            </Link>
            <Link href="https://www.linkedin.com/in/gautam-kumar-02586b270/">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Image
                  src="/linkedinLogo.png"
                  alt="LinkedIn Profile"
                  width={30}
                  height={30}
                  className="bg-gray-100 rounded-full border-2 border-blue-400 p-1"
                />
              </motion.div>
            </Link>
            <Link href="https://discord.com/channels/gautam6739">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Image
                  src="/discord-icon.svg"
                  alt="Discord Profile"
                  width={30}
                  height={30}
                  className="bg-gray-100 rounded-full border-2 border-blue-400 p-1"
                />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/main1.jpg"
              alt="Portfolio Main Image"
              width={400}
              height={400}
              className="border-4 p-2 border-blue-400 bg-gray-800 rounded-full shadow-2xl shadow-blue-500/50"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
