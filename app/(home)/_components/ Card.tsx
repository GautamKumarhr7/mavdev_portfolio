"use client";

import Image from "next/image";
import Link from "next/link";
import { CardProps } from "@/app/types";

export default function Card({
  title,
  description,
  image,
  link = "#",
}: CardProps) {
  return (
    <div
      className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 
      dark:border-gray-700 transform transition duration-300 hover:scale-105 opacity-100 animate-fade-in"
    >
      <Link href={link} className="block">
        <div className="aspect-video aspect-h-3 overflow-hidden rounded-t-lg">
          <Image
            className="w-full h-full object-cover"
            src={image}
            alt={title}
            width={400}
            height={400}
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <span
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
            text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Source code
          </span>
        </div>
      </Link>
    </div>
  );
}
