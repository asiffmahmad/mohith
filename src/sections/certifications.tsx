"use client";

import { motion } from "framer-motion";
import certifications from "@/data/certifications.json";

export function Certifications() {
  return (
    <section id="certifications" className="py-32 relative bg-black border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4">
            Certifications
          </h2>
          <h3 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            Professional Credentials
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-white/10 hover:border-white/30 transition-colors flex flex-col gap-4"
            >
              <h4 className="text-xl text-white font-medium">{cert.name}</h4>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/60 tracking-wide uppercase">{cert.issuer}</span>
                {cert.date && (
                  <span className="text-white/40 tracking-widest uppercase text-xs">
                    {cert.date}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
