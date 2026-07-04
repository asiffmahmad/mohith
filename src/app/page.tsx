import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/sections/hero";
import { Summary } from "@/sections/summary";
import { Highlights } from "@/sections/highlights";
import { Experience } from "@/sections/experience";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";
import { Certifications } from "@/sections/certifications";
import { Education } from "@/sections/education";
import { Contact } from "@/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-white/30 text-white">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Summary />
      <Highlights />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
