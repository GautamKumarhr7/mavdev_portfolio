"use client";

import Navbar from "../_components/Navbar";
import Skill from "../_components/Skill";
import Footer from "../_components/Footer";

export default function SkillPage() {
  return (
    <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] flex flex-col min-h-screen">
      <Navbar />
      <div className="g-gradient-to-b from-[#0F172A] to-[#1E293B] pt-20">
        <Skill />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
