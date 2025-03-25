"use client";

import Navbar from "../components/Navbar";
import Skill from "../components/Skill";

export default function SkillPage() {
  return (
    <div className="bg-gray-900 w-full flex flex-col min-h-screen">
      <Navbar />
      <Skill />
    </div>
  );
}
