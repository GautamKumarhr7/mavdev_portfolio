"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skill from "./components/Skill";
import Card from "./components/ Card";
import About from "./components/About";
import LeftLabelPageName from "./components/LeftLabelPageNmae";
import Footer from "./components/Footer";

export default function Home() {
  const [animateProjects, setAnimateProjects] = useState(false);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateProjects(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const currentRef = projectsRef.current; // Store ref in a local variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="bg-gray-900 w-full flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center">
        <div className="flex items-center w-full">
          <div className="pt-20">
            <LeftLabelPageName pageName="HOME" label="01" />
          </div>
          <Hero />
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className={`w-full flex flex-row items-center py-20 transition-all duration-1000
          ${
            animateProjects
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }
        `}
      >
        <LeftLabelPageName pageName="PROJECTS" label="02" />
        <div className="flex flex-col items-center w-full">
          <h1 className="text-3xl font-extrabold mt-2 text-blue-400 text-center">
            PROJECTS
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-5">
            <Card title="Card1" description="card dis" image="/main1.jpg" />
            <Card title="Card2" description="card dis" image="/main1.jpg" />
            <Card title="Card3" description="card dis" image="/main1.jpg" />
            <Card title="Card4" description="card dis" image="/main1.jpg" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <div className="">
        <Skill />
      </div>
      <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] pt-10 pb-10">
        <About />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
