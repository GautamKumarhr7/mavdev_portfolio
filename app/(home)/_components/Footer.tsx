import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-screen">
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
              <Link href="/about-me" className="hover:text-blue-400 transition">
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
                  className="rounded-full border border-gray-500 bg-gray-100 p-1 hover:scale-110 transition"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/gautam-kumar-02586b270/">
                <Image
                  src="/linkedinLogo.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  className="rounded-full border border-gray-500 bg-gray-100 p-1 hover:scale-110 transition"
                />
              </Link>
              <Link href="https://github.com/kumargautamhr7/">
                <Image
                  src="/discord-icon.svg"
                  alt="Discord"
                  width={30}
                  height={30}
                  className="rounded-full border border-gray-500 bg-gray-100 p-1 hover:scale-110 transition"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm">
          <p>© {new Date().getFullYear()} Gautam Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
