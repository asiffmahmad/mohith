"use client";

import { motion } from "framer-motion";
import education from "@/data/education.json";

export function Education() {
  return (
    <section id="education" className="py-32 relative bg-black border-t border-white/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Education
          </h2>
        </motion.div>

        <div className="space-y-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l border-white/20"
            >
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white" />
              <h3 className="text-2xl font-medium mb-2">{edu.degree}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
                <span className="text-lg text-white/80">{edu.institution}</span>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></span>
                <span className="text-sm font-medium text-white/40 uppercase tracking-widest">{edu.year}</span>
              </div>
              
              {edu.coursework && edu.coursework.length > 0 && (
                <div>
                  <p className="text-sm text-white/40 mb-4 uppercase tracking-widest">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span key={i} className="text-sm px-4 py-2 bg-white/5 text-white/60">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
