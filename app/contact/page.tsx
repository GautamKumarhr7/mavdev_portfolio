"use client";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-blue-400 text-center mb-12"
      >
        Get In Touch
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="flex flex-col gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg"
          >
            <FaPhone size={24} className="text-blue-400" />
            <div>
              <h2 className="text-lg font-semibold">Phone</h2>
              <a
                href="tel:+916299664696"
                className="text-gray-300 hover:text-blue-400"
              >
                +91 62996 64696
              </a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg"
          >
            <FaEnvelope size={24} className="text-blue-400" />
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <a
                href="mailto:kumargautam3231@gmail.com"
                className="text-gray-300 hover:text-blue-400"
              >
                kumargautam3231@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
