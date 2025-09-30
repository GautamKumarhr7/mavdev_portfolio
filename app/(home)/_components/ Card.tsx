"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CardProps } from "@/app/types";

export default function Card({
  title,
  description,
  image,
  link = "#",
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-blue-500/50"
    >
      <Link href={link} className="block">
        <div className="relative h-48 w-full">
          <Image
            className="object-cover"
            src={image}
            alt={title}
            layout="fill"
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-400">{description}</p>
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
            text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none 
            focus:ring-blue-800"
          >
            Source code
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
}
