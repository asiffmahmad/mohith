"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projects from "@/data/projects.json";

export function Projects() {
  return (
    <section id="project" className="py-32 relative bg-[#050505]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Featured Project
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="border border-white/10 p-8 md:p-16 bg-black"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Left Side: Narrative */}
                <div className="lg:col-span-8 flex flex-col justify-center space-y-12">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-medium mb-6 leading-tight text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xl text-white/60 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">Business Problem</h4>
                      <p className="text-lg text-white/80 font-light leading-relaxed border-l-2 border-white/20 pl-4">{project.businessProblem}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">Solution</h4>
                      <p className="text-lg text-white/80 font-light leading-relaxed border-l-2 border-white/20 pl-4">{project.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">Business Impact</h4>
                      <p className="text-lg text-white font-medium leading-relaxed border-l-2 border-white/80 pl-4">{project.businessImpact}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Data & Actions */}
                <div className="lg:col-span-4 flex flex-col lg:border-l lg:border-white/10 lg:pl-12">
                  
                  <div className="mb-12">
                    <h4 className="text-xs font-medium text-white/30 uppercase tracking-widest mb-6">Project Metadata</h4>
                    <div className="flex flex-col gap-4 text-sm font-medium tracking-wide text-white/60 uppercase">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Year</span>
                        <span className="text-white">{project.year}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Category</span>
                        <span className="text-white">{project.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h4 className="text-xs font-medium text-white/30 uppercase tracking-widest mb-6">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span key={i} className="text-sm px-4 py-2 bg-white/5 text-white/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-8 flex flex-col gap-4">
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center justify-between text-sm font-medium bg-white text-black px-6 py-4 transition-transform hover:scale-[1.02]"
                      >
                        Live Demo <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center text-sm font-medium text-white border border-white/20 px-6 py-4 hover:bg-white/5 transition-all"
                      >
                        View Source Code
                      </a>
                    )}
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
