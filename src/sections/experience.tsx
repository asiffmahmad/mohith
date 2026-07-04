"use client";

import { motion } from "framer-motion";
import experience from "@/data/experience.json";

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Career <span className="text-white/50">Journey.</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-bmw-blue to-transparent"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-16">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[25px] md:-left-[41px] top-2 w-4 h-4 rounded-full bg-[#080808] border border-white/20 group-hover:border-bmw-blue group-hover:bg-bmw-blue/20 transition-colors z-10" />
              
              <div className="glass rounded-3xl p-8 hover:bg-white/[0.02] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-1">{job.role}</h3>
                    <p className="text-lg text-white/60">{job.company}</p>
                  </div>
                  <div className="text-sm font-medium tracking-wider uppercase text-white/40 bg-white/5 px-4 py-2 rounded-full w-fit">
                    {job.duration}
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed mb-6 font-light">{job.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-bmw-blue/50 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/10 group-hover:border-white/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
