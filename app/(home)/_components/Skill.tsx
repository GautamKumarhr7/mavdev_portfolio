"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaWordpress,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiRust,
  SiExpress,
  SiPostgresql,
  SiKubernetes,
  SiJenkins,
  SiJira,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "Rust", icon: <SiRust size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Express", icon: <SiExpress size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "Docker", icon: <FaDocker size={40} /> },
  { name: "Kubernetes", icon: <SiKubernetes size={40} /> },
  { name: "Jenkins", icon: <SiJenkins size={40} /> },
  { name: "Jira", icon: <SiJira size={40} /> },
  { name: "AWS", icon: <FaAws size={40} /> },
  { name: "WordPress", icon: <FaWordpress size={40} /> },
];

export default function Skill() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="w-full py-20 text-gray-300 flex flex-col items-center bg-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-blue-400 text-center mb-12"
      >
        My Skills
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-8 max-w-4xl"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-4"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-400"
            >
              {skill.icon}
            </motion.div>
            <p className="mt-2 text-sm font-semibold text-gray-400">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
