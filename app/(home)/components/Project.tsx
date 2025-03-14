"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectProps {
  imageSrc: string;
  title: string;
  description: string;
  githubLink: string;
}

export default function Project({
  imageSrc,
  title,
  description,
  githubLink,
}: ProjectProps) {
  return (
    <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
      <motion.div
        className="w-full h-64 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={imageSrc}
          alt="Project Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </motion.div>
      <h3 className="text-2xl font-bold text-white mt-4">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-blue-400 hover:underline"
      >
        View Source Code
      </a>
    </div>
  );
}
