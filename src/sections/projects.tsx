"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code } from "lucide-react";
import projects from "@/data/projects.json";

export function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-black border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Featured <span className="text-white/50">Work.</span>
          </h2>
          <div className="w-24 h-px bg-white/10 mx-auto md:mx-0"></div>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="glass p-8 md:p-12 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                
                {/* Left Side: Project Info */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-medium mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 font-light leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0 group-hover:bg-bmw-blue/50 transition-colors"></span>
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Metadata, Tech, Buttons */}
                <div className="lg:col-span-5 flex flex-col justify-center lg:border-l lg:border-white/10 lg:pl-16">
                  
                  <div className="flex items-center gap-4 mb-10">
                    <span className="text-xs font-medium text-white/40 tracking-widest uppercase">{project.year}</span>
                    <span className="w-8 h-px bg-white/10"></span>
                    <span className="text-xs font-medium text-white/40 tracking-widest uppercase">{project.category}</span>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-xs font-medium text-white/30 uppercase tracking-widest mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-white/60 group-hover:border-white/10 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8 border-t border-white/5">
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center gap-2 text-sm font-medium bg-white text-black px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-transform"
                      >
                        Live Demo <ArrowUpRight size={16} />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        <Code size={16} /> Source Code
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
