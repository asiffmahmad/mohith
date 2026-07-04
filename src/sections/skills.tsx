"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skillsData from "@/data/skills.json";

export function Skills() {
  const categories = Object.keys(skillsData) as Array<keyof typeof skillsData>;
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillsData>(categories[0]);

  return (
    <section id="skills" className="py-32 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Technical <span className="text-white/50">Arsenal.</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-bmw-red to-transparent mx-auto md:mx-0"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Categories Sidebar */}
          <div className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 md:w-1/3 shrink-0 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-4 text-left rounded-2xl transition-all duration-300 whitespace-nowrap md:whitespace-normal ${
                  activeCategory === category 
                    ? "text-white bg-white/5" 
                    : "text-white/50 hover:text-white/80 hover:bg-white/[0.02]"
                }`}
              >
                <span className="relative z-10 text-sm md:text-base font-medium tracking-wide">{category}</span>
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeSkillCategory"
                    className="absolute inset-0 rounded-2xl border border-white/10 glass z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="w-full min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {skillsData[activeCategory].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass p-6 rounded-2xl border border-white/5 hover:border-bmw-blue/50 hover:bg-bmw-blue/5 transition-all group"
                  >
                    <span className="text-white/80 font-medium group-hover:text-white transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
