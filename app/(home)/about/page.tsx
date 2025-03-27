import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutMe() {
  return (
    <div className="bg-gray-900 w-full flex flex-col min-h-screen">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
