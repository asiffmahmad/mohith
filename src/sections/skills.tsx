"use client";

import { motion } from "framer-motion";
import skillsData from "@/data/skills.json";

export function Skills() {
  const categories = Object.keys(skillsData) as Array<keyof typeof skillsData>;

  return (
    <section id="skills" className="py-32 relative bg-black border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-left"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Professional Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border border-white/10 hover:border-white/30 transition-colors flex flex-col"
            >
              <h3 className="text-sm font-medium uppercase tracking-widest text-white/40 mb-8 pb-4 border-b border-white/10">
                {category}
              </h3>
              
              <div className="flex flex-col gap-4">
                {skillsData[category].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <span className="text-white/80 font-light text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
