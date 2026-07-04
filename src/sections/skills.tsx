"use client";

import { motion } from "framer-motion";
import skillsData from "@/data/skills.json";

export function Skills() {
  const categories = Object.keys(skillsData) as Array<keyof typeof skillsData>;

  return (
    <section id="expertise" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Core <span className="text-white/50">Expertise.</span>
          </h2>
          <div className="w-24 h-px bg-white/10 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 md:p-10 rounded-3xl border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-colors group"
            >
              <h3 className="text-xl font-medium mb-8 text-white/90 tracking-wide">
                <span className="text-white/30 mr-3 text-sm">•</span>
                {category}
              </h3>
              
              <div className="flex flex-col gap-4">
                {skillsData[category].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-white/30 transition-colors" />
                    <span className="text-white/60 font-light group-hover:text-white/90 transition-colors">{skill}</span>
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
