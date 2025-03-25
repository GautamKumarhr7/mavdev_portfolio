"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";

import { useState, useEffect } from "react";
import Card from "./components/ Card";
import LeftLabelPageName from "./components/LeftLabelPageNmae";

const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Zustand",
    "Tailwind CSS",
    "Framer Motion",
    "DOM",
    "Unit Test",
    "Performance Optimize",
    "SSR",
  ],
  Backend: [
    "Node",
    "Bun",
    "Express",
    "REST API",
    "Zod Validation",
    "JWT/OAuth",
    "SQL",
    "Postgres",
    "Prisma ORM",
    "DB Modeling",
    "Stripe Payments",
  ],
  Other: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Go",
    "React Native",
    "Git",
    "GitHub",
    "Linux",
    "WordPress",
    "VPS",
    "Vercel",
    "UX/UI Design",
    "Product Design",
    "Figma",
    "Adobe XD",
    "Wireframe",
  ],
};

export default function Home() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-black w-screen flex flex-col">
      <Navbar />

      <div className="flex flex-row">
        <div className="pt-20">
          <LeftLabelPageName pageName="HOME" label="01" />
        </div>
        <Hero />
      </div>

      <div
        className={`flex flex-row ${
          animate ? "animate-slideLeft opacity-100" : "opacity-0"
        }`}
      >
        <LeftLabelPageName pageName="PROJECTS" label="02" />
        <div className="flex justify-center flex-col items-center">
          <h1 className="pb-15 text-5xl font-extrabold mt-2 text-blue-400">
            PROJECTS
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-1">
            <Card title="Card1" description="card dis" image="/ main1.jpg" />
            <Card title="Card2" description="card dis" image="/ main1.jpg" />
            <Card title="Card3" description="card dis" image="/ main1.jpg" />
            <Card title="Card4" description="card dis" image="/ main1.jpg" />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">My Skills</h1>
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="p-4 bg-gray-800 rounded-xl shadow-md"
            >
              <h2 className="text-xl font-semibold mb-4">{category}</h2>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
