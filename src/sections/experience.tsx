"use client";

import { motion } from "framer-motion";
import experience from "@/data/experience.json";

export function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-black border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 relative"
            >
              {/* Left Column: Metadata */}
              <div className="md:col-span-4 flex flex-col items-start pt-2">
                <h3 className="text-2xl font-light text-white mb-2">{job.company}</h3>
                <p className="text-lg text-white/60 font-light mb-6">{job.role}</p>
                
                <div className="flex flex-col gap-2 text-xs text-white/40 uppercase tracking-widest font-light">
                  <span>{job.duration}</span>
                  <span>{job.location}</span>
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="md:col-span-8 flex flex-col">
                <h4 className="text-xs font-light text-white/40 uppercase tracking-widest mb-6">Responsibilities & Achievements</h4>
                
                <ul className="space-y-4 mb-12 border-l border-white/10 pl-6">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="text-lg text-white/70 font-light leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>

                <h4 className="text-xs font-light text-white/40 uppercase tracking-widest mb-6">Technologies</h4>
                
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-light px-4 py-2 bg-white/5 text-white/70 tracking-wide border border-white/5">
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
