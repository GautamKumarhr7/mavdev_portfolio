"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full top-0 fixed flex justify-between items-center gap-8 pt-5 pb-5 text-gray-400 text-sm border-b border-gray-800 z-10 bg-gray-900 bg-opacity-80 backdrop-blur-md"
      >
        <Link href="/" className="text-blue-500 font-extrabold text-lg pl-5">
          <motion.h2 whileHover={{ scale: 1.05 }}>
            console.log({`Gautam`})
          </motion.h2>
        </Link>

        <div className="flex gap-10 pr-5 hidden md:flex">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/about" className="hover:text-blue-400 transition">
              About Me
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/experience" className="hover:text-blue-400 transition">
              Achievements
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/skill" className="hover:text-blue-400 transition">
              Skills
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </motion.div>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden pr-5 text-gray-400 hover:text-blue-400 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 right-0 left-0 bg-gray-900 bg-opacity-95 z-0 md:hidden"
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center p-4 text-white"
            >
              <motion.div variants={menuItemVariants} className="mb-4">
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="hover:text-blue-400 transition"
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants} className="mb-4">
                <Link
                  href="/about"
                  onClick={toggleMenu}
                  className="hover:text-blue-400 transition"
                >
                  About Me
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants} className="mb-4">
                <Link
                  href="/experience"
                  onClick={toggleMenu}
                  className="hover:text-blue-400 transition"
                >
                  Achievements
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants} className="mb-4">
                <Link
                  href="/skill"
                  onClick={toggleMenu}
                  className="hover:text-blue-400 transition"
                >
                  Skills
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/contact"
                  onClick={toggleMenu}
                  className="hover:text-blue-400 transition"
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
