"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Link as LinkIcon, Code } from "lucide-react";
import profile from "@/data/profile.json";
import about from "@/data/about.json";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#080808] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-[#080808] to-[#080808]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bmw-blue/10 rounded-full blur-[128px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bmw-red/10 rounded-full blur-[128px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-3">
            <span className="w-8 h-px bg-bmw-blue"></span>
            <span className="text-bmw-blue font-medium tracking-widest uppercase text-sm">Hello, I&apos;m</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-4">
            {profile.name}
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-xl md:text-3xl text-white/70 font-light mb-8">
            {profile.role.split(' | ').map((role, i, arr) => (
              <span key={i}>
                {role}
                {i < arr.length - 1 && <span className="mx-3 text-white/20">|</span>}
              </span>
            ))}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/50 max-w-3xl mb-12 font-light leading-relaxed">
            {about.summary}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 md:gap-6">
            <a 
              href="#contact" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-full font-medium transition-all"
            >
              <Download size={18} className="text-white/60 group-hover:text-white transition-colors" />
              Download Resume
            </a>

            <div className="flex items-center gap-3 ml-2">
              <a 
                href="https://linkedin.com/in/purna-venkata-satya-sai-kapa-a50447217" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-bmw-blue hover:text-bmw-blue hover:bg-bmw-blue/10 transition-all"
                aria-label="LinkedIn"
              >
                <LinkIcon size={20} />
              </a>
              <a 
                href="https://github.com/asiffmahmad" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-white/40 hover:text-white hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Code size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
