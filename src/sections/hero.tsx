"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile.json";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
  };

  const roles = [
    "Data Analyst",
    "Business Intelligence Engineer",
    "Azure Data Engineer"
  ];

  return (
    <section className="relative h-screen flex flex-col justify-center bg-black overflow-hidden px-6">

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-tighter mb-8 leading-[1.1] text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 mb-16">
            {roles.map((role, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-xl md:text-2xl text-white/50 font-light tracking-wide">{role}</span>
                {i < roles.length - 1 && <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20"></span>}
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8 text-sm md:text-base font-medium uppercase tracking-widest text-white/70">
            <a href="#summary" className="hover:text-white transition-colors py-2 border-b border-transparent hover:border-white">
              Professional Summary
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors py-2 border-b border-transparent hover:border-white">
              Download Resume
            </a>
            <a href="#contact" className="hover:text-white transition-colors py-2 border-b border-transparent hover:border-white">
              Contact
            </a>
            <a href="https://linkedin.com/in/purna-venkata-satya-sai-kapa-a50447217" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors py-2 border-b border-transparent hover:border-white">
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
