"use client";

import { motion } from "framer-motion";
import education from "@/data/education.json";
import certifications from "@/data/certifications.json";
import achievements from "@/data/achievements.json";

export function Education() {
  return (
    <section id="education" className="py-32 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Education.
              </h2>
              <div className="w-12 h-px bg-gradient-to-r from-bmw-blue to-transparent"></div>
            </motion.div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-6 border-l border-white/10"
                >
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-bmw-blue" />
                  <h3 className="text-xl font-medium mb-1">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <span className="text-white/60">{edu.institution}</span>
                    <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></span>
                    <span className="text-sm font-medium text-bmw-blue uppercase tracking-wider">{edu.year}</span>
                  </div>
                  
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div>
                      <p className="text-sm text-white/40 mb-2 uppercase tracking-wider">Relevant Coursework</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span key={i} className="text-xs px-2.5 py-1 rounded bg-white/5 text-white/60 border border-white/5">
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

          {/* Certifications & Achievements Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Certifications.
              </h2>
              <div className="w-12 h-px bg-gradient-to-r from-bmw-red to-transparent"></div>
            </motion.div>

            <div className="space-y-6 mb-16">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-5 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-white/20 transition-colors"
                >
                  <div>
                    <h4 className="text-lg font-medium mb-1 group-hover:text-white text-white/90 transition-colors">{cert.name}</h4>
                    <p className="text-sm text-white/50">{cert.issuer}</p>
                  </div>
                  {cert.date && (
                    <span className="text-xs font-medium px-3 py-1 bg-white/10 rounded-full text-white/70 whitespace-nowrap">
                      {cert.date}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-medium tracking-tight mb-4">
                Other Experience.
              </h2>
            </motion.div>

            <div className="space-y-6">
              {achievements.map((achieve, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="pl-6 border-l border-white/10 relative"
                >
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white/20" />
                  <h4 className="text-lg font-medium mb-2">{achieve.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{achieve.description}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
