"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/HeroSection";
import Skill from "./_components/Skill";
import Card from "./_components/ Card";
import About from "./_components/About";
import LeftLabelPageName from "./_components/LeftLabelPageNmae";
import Footer from "./_components/Footer";

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
      <div className="px-4 sm:px-0 pt-30 sm:pt-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center">
          <div className="flex items-center w-full">
            <div className="pt-20 hidden sm:block">
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
          <div className="hidden sm:block">
            <LeftLabelPageName pageName="PROJECTS" label="02" />
          </div>
          <div className="flex flex-col items-center w-full">
            <h1 className="text-3xl font-extrabold mt-2 text-blue-400 text-center">
              PROJECTS
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-5">
              <Card
                title="Profile"
                description="it is build on next.js using react components and tailwind css for smooth animation and design."
                image="/portfolio.png"
                link="https://github.com/GautamKumarhr7/mavdev_portfolio"
              />
              <Card
                title="E-commerce"
                description="it is fully functioning project integrated with payment gatways, database, Authentication, online order facilites and admin penal."
                image="/main1.jpg"
                link="https://github.com/GautamKumarhr7/e-commerce"
              />
              <Card
                title="tic-tak-too"
                description="it is based on javascript, html and css.The main idea to build this game is two player can play offline."
                image="/ticTacToo.png"
                link="https://github.com/GautamKumarhr7/tic-tak-too"
              />
              <Card
                title="stone-paper-seassior"
                description="it is a game which is play with computer. A user has choice and computer has also their choice after that it is decided who's win."
                image="/stonePaperSeassior.png"
                link="https://github.com/GautamKumarhr7/stone_papaer_seassior_game"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <div className="flex flex-row">
          <div className="pt-30 hidden sm:block">
            <LeftLabelPageName pageName="SKILL" label="03" />
          </div>
          <Skill />
        </div>
        <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] pt-10 pb-10 flex flex-row">
          <div className="pt-30 hidden sm:block">
            <LeftLabelPageName pageName="ABOUT" label="04" />
          </div>
          <About />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
