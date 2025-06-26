import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold mt-2 text-blue-400 text-center">
        About Me
      </h1>
      <div className="flex flex-row flex-wrap justify-center items-center gap-20">
        <Image src="/profile2.png" alt="" width={300} height={400} />

        <div className="flex max-w-[55rem] flex-row gap-10 flex-wrap justify-center items-center">
          <p className="px-4">
            I’m a software developer passionate about backend development,
            specializing in TypeScript and Node.js. I have experience building
            scalable applications using Express, microservices architecture, and
            relational databases. I also work with Next.js, React, Tailwind, and
            authentication systems to create seamless full-stack experiences.
            Currently, I’m focused on expanding my expertise in backend
            development with TypeScript, Python, and Rust. I enjoy solving
            complex problems, optimizing performance, and building reliable
            systems. Looking ahead, I aim to deepen my skills in distributed
            systems, high-performance computing, and backend infrastructure. I’m
            always eager to learn, contribute to open-source projects, and
            collaborate on exciting software solutions.
          </p>
          <div className="bg-blue-500 border border-blue-800 p-4 rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg animate-fade-in-up">
            <a
              href="/Gautam_resume_jf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
