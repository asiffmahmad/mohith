"use client";

import { motion } from "framer-motion";
import about from "@/data/about.json";

export function Summary() {
  return (
    <section id="summary" className="py-32 relative bg-black border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start"
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-12">
            Professional Summary
          </h2>
          
          <p className="text-xl md:text-3xl lg:text-4xl text-white font-light leading-[1.6] tracking-tight mb-24">
            {about.summary}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-white/10 pt-12">
            {about.statistics.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl md:text-5xl font-light text-white mb-2">{stat.value}</span>
                <span className="text-sm tracking-widest uppercase text-white/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
