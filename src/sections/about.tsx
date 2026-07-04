"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import about from "@/data/about.json";
import stats from "@/data/stats.json";

export function About() {
  return (
    <section id="about" className="py-32 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
              Turning complex enterprise data into <span className="text-white/40">elegant, actionable solutions.</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
              {about.intro}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 pt-16 border-t border-white/10"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-2 group">
                <span className="text-4xl md:text-5xl font-medium text-white group-hover:scale-105 transition-transform duration-500">
                  <CountUp end={stat.value} duration={2.5} decimals={stat.value % 1 !== 0 ? 1 : 0} enableScrollSpy scrollSpyOnce />
                  <span className="text-white/40">{stat.suffix}</span>
                </span>
                <span className="text-xs text-white/40 uppercase tracking-widest text-center max-w-[120px] leading-tight">{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
