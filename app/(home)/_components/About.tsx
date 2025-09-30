"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-20 px-4 bg-gray-900 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-blue-400 text-center mb-12"
      >
        About Me
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-purple-400 rounded-lg opacity-75"
            style={{ backgroundColor: "transparent" }}
          ></div>
          <Image
            src="/profile2.png"
            alt="Gautam Kumar"
            width={300}
            height={400}
            className="rounded-lg shadow-2xl relative"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl text-left"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            I&apos;m a software developer with a passion for building robust and
            scalable backend systems. My expertise lies in TypeScript and
            Node.js, and I have hands-on experience with microservices,
            relational databases, and creating seamless full-stack experiences
            with Next.js and React.
            <br />
            <br />
            I&apos;m currently diving deeper into Rust and Python to expand my
            backend development skills. I thrive on solving complex problems and
            I&apos;m always looking for opportunities to learn and contribute to
            open-source projects.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <a
              href="/Gautam_resume_jf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out shadow-lg"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
