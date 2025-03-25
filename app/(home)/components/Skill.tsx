import { useState, useEffect, useRef } from "react";

const skills = {
  Frontend: ["HTML", "CSS", "JAVASCRIPT", "REACT", "NEXT.JS", "TAILWIND CSS"],
  Backend: [
    "TYPESCRIPT",
    "PYTHON",
    "RUST",
    "NODE",
    "EXPRESS",
    "REST API",
    "POSTGRES",
    "RELATIONAL DATABASE",
    "AUTHENTICATION",
    "CI/CD",
    "SERVICES ARCHITECTURE",
  ],
  Tools: [
    "GIT & GITHUB",
    "DOCKER",
    "KUBERNETES",
    "JENKINS",
    "JIRA",
    "AWS SERVICES",
    "WORDPRESS",
  ],
};

export default function Skill() {
  const [animate, setAnimate] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = skillRef.current; // Store ref value before observing

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
    <div
      ref={skillRef}
      className="w-screen py-20 bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-gray-300 flex flex-col items-center"
    >
      <h1
        className={`text-4xl md:text-5xl font-extrabold text-[#38BDF8] transition-all duration-1000 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        MY SKILLS
      </h1>

      <div
        className={`flex flex-wrap justify-center gap-12 mt-8 transition-all duration-1000 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="text-center w-full md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#CBD5E1] pb-4">
              {category}
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-[30rem] p-5">
              {skillList.map((log) => (
                <span
                  key={log}
                  className="bg-[#1E293B] text-gray-300 px-4 py-2 rounded-lg text-sm md:text-base shadow-md transition-transform hover:bg-[#334155] hover:scale-105"
                >
                  {log}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
