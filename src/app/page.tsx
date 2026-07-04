import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] selection:bg-bmw-blue/30 text-white">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      
      {/* Other sections will go here */}
      <div id="about" className="min-h-screen">
        <About />
      </div>
      <div id="experience" className="min-h-screen"></div>
      <div id="skills" className="min-h-screen"></div>
      <div id="projects" className="min-h-screen"></div>
      <div id="contact" className="min-h-screen"></div>
    </main>
  );
}
