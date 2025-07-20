import About from "../_components/About";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

export default function AboutMe() {
  return (
    <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] flex flex-col min-h-screen">
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
