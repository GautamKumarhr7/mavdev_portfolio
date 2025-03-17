"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Card from "./components/ Card";
import LeftLabelPageName from "./components/LeftLabelPageNmae";
import { useState, useEffect } from "react";
export default function Home() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  });
  return (
    <div className="bg-black w-screen flex flex-col ">
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
            Projects
          </h1>
          <div className="flex flex-wrap justify-center items-center">
            <Card title="Card1" description="card dis " image="/ main1.jpg" />
            <Card title="Card2" description="card dis " image="/ main1.jpg" />
            <Card title="Card3" description="card dis " image="/ main1.jpg" />
            <Card title="Card4" description="card dis " image="/ main1.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
