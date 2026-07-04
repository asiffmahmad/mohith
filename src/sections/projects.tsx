"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code } from "lucide-react";
import projects from "@/data/projects.json";

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Featured <span className="text-white/50">Work.</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-white to-transparent"></div>
        </motion.div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                {/* Project Image/Preview - takes 7 cols */}
                <div className={`lg:col-span-7 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-[#111] border border-white/10 group-hover:border-white/20 transition-colors">
                    {/* Placeholder for project image */}
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
                        <div className="absolute inset-0 bg-bmw-blue/5 group-hover:bg-bmw-blue/10 transition-colors duration-700"></div>
                        <span className="text-6xl font-black text-white/5 tracking-tighter absolute -bottom-4 -right-4 pointer-events-none group-hover:-translate-y-4 transition-transform duration-1000">ML</span>
                        <h4 className="text-2xl text-white/40 font-medium relative z-10">{project.category}</h4>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Info - takes 5 cols */}
                <div className={`lg:col-span-5 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-medium text-bmw-blue tracking-wider uppercase">{project.year}</span>
                    <span className="w-8 h-px bg-white/20"></span>
                    <span className="text-sm font-medium text-white/40 tracking-wider uppercase">{project.category}</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-medium mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 font-light leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>

                  <div className="mb-8 space-y-2">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-white/50">
                        <span className="w-1 h-1 rounded-full bg-bmw-blue/50"></span>
                        {feature}
                      </div>
                    ))}
                    {project.features.length > 4 && (
                      <div className="text-sm text-white/30 italic mt-2">+ {project.features.length - 4} more features</div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-bmw-blue transition-colors group/link">
                        Live Demo <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors">
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
