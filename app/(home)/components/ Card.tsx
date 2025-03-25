import Image from "next/image";
import { CardsProps } from "@/app/types";
import { useState, useEffect, useRef } from "react";

export default function Card({ title, description, image }: CardsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = cardRef.current; // Store ref value before observing

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
      ref={cardRef}
      className={`flex flex-col items-center gap-4 border border-blue-900 rounded-2xl p-5 max-w-[18rem] bg-gradient-to-br from-[#1E293B] to-[#0F172A] shadow-lg 
        transition-transform duration-700 ease-in-out 
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"} 
        hover:scale-105 hover:shadow-xl`}
    >
      <Image
        src={image}
        alt="Project Image"
        width={300}
        height={200}
        className="rounded-lg shadow-md"
      />
      <h1 className="text-xl font-bold text-blue-300">{title}</h1>
      <p className="text-gray-400 text-sm text-center">{description}</p>
    </div>
  );
}
