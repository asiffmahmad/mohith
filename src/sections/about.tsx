"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import about from "@/data/about.json";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
              Turning complex data into <span className="text-white/50">elegant solutions.</span>
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-8">
              {about.summary}
            </p>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {about.statistics.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <span className="text-4xl md:text-5xl font-medium text-white">
                    <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                    <span className="text-bmw-blue">+</span>
                  </span>
                  <span className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden glass p-4"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-bmw-blue/10 to-transparent mix-blend-overlay"></div>
            {/* Placeholder for professional photo */}
            <div className="w-full h-full bg-[#111] rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden group">
               <span className="text-white/20 text-sm tracking-widest uppercase relative z-10 group-hover:scale-110 transition-transform duration-700">Image Placeholder</span>
               
               {/* Hover lighting effect */}
               <div className="absolute -inset-full top-0 z-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
