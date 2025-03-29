import About from "../_components/About";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

export default function AboutMe() {
  return (
    <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-40 h-screen">
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
