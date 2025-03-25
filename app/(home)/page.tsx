"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skill from "./components/Skill";
import Card from "./components/ Card";
import LeftLabelPageName from "./components/LeftLabelPageNmae";
import Link from "next/link";
import Image from "next/image";

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
      <Skill />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            {/* Brand Section */}
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-xl font-bold text-white">
                Made with ❤️ by Gautam
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Passionate Developer | Problem Solver
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-lg font-bold text-white">Quick Links</h1>
              <div className="flex flex-col gap-2 mt-2">
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
                <Link
                  href="/about-me"
                  className="hover:text-blue-400 transition"
                >
                  About Me
                </Link>
                <Link
                  href="/experience"
                  className="hover:text-blue-400 transition"
                >
                  Achievements
                </Link>
                <Link href="/skills" className="hover:text-blue-400 transition">
                  Skills
                </Link>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-lg font-bold text-white">Follow Me</h1>
              <div className="flex gap-5 mt-3">
                <Link href="https://github.com/GautamKumarhr7">
                  <Image
                    src="/githubLogo.svg"
                    alt="GitHub"
                    width={30}
                    height={30}
                    className="rounded-full border border-gray-500 p-1 hover:scale-110 transition"
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/gautam-kumar-02586b270/">
                  <Image
                    src="/linkedinLogo.png"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                    className="rounded-full border border-gray-500 p-1 hover:scale-110 transition"
                  />
                </Link>
                <Link href="https://github.com/kumargautamhr7/">
                  <Image
                    src="/discord-icon.svg"
                    alt="Discord"
                    width={30}
                    height={30}
                    className="rounded-full border border-gray-500 p-1 hover:scale-110 transition"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm">
            <p>
              © {new Date().getFullYear()} Gautam Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
