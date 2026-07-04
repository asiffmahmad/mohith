import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Experience } from "@/sections/experience";
import { Skills } from "@/sections/skills";
import { Projects } from "@/sections/projects";
import { Education } from "@/sections/education";
import { Contact } from "@/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] selection:bg-bmw-blue/30 text-white">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
