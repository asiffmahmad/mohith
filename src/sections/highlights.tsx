"use client";

import { motion } from "framer-motion";
import stats from "@/data/stats.json";

export function Highlights() {
  return (
    <section id="highlights" className="py-20 relative bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-8 flex flex-col justify-between aspect-square hover:bg-[#080808] transition-colors"
            >
              <h3 className="text-xs md:text-sm font-medium tracking-widest uppercase text-white/40 mb-8 leading-relaxed">
                {stat.label}
              </h3>
              
              <div className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight">
                {stat.value}
                {stat.suffix && <span className="text-white/40 ml-1">{stat.suffix}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
