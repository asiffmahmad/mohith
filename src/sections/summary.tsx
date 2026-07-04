"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import about from "@/data/about.json";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part
    const numMatch = value.match(/[\d.]+/);
    if (!numMatch) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(numMatch[0]);
    const prefix = value.slice(0, value.indexOf(numMatch[0]));
    const suffix = value.slice(value.indexOf(numMatch[0]) + numMatch[0].length);
    const hasDecimal = numMatch[0].includes(".");
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (hasDecimal) {
        setDisplay(`${prefix}${current.toFixed(1)}${suffix}`);
      } else {
        setDisplay(`${prefix}${Math.round(current)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

export function Summary() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="summary" className="py-40 relative bg-black border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="mb-16 flex items-center gap-6">
            <div className="w-12 h-px bg-white/20" />
            <h2 className="text-xs font-light tracking-[0.3em] uppercase text-white/40">
              Professional Summary
            </h2>
          </motion.div>

          {/* Main Summary Text — editorial style with highlighted first letter */}
          <motion.div variants={itemVariants} className="mb-32">
            <p className="text-lg md:text-2xl lg:text-[1.75rem] text-white/80 font-light leading-[1.8] tracking-tight max-w-4xl">
              <span className="text-5xl md:text-7xl font-extralight text-white float-left mr-4 mt-1 leading-[0.85]">
                {about.summary.charAt(0)}
              </span>
              {about.summary.slice(1)}
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
              {about.statistics.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative py-10 px-8 border-l border-white/[0.06] first:border-l-0 flex flex-col justify-between"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <span className="text-[0.65rem] tracking-[0.25em] uppercase text-white/30 mb-6 relative z-10">
                    {stat.label}
                  </span>

                  <span className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white tracking-tight relative z-10">
                    <AnimatedNumber value={stat.value} />
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
