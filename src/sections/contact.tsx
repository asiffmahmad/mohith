"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import contactData from "@/data/contact.json";
import socialsData from "@/data/socials.json";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;

    try {
      // Setup EmailJS account in the data/contact.json file
      await emailjs.sendForm(
        contactData.form.serviceId,
        contactData.form.templateId,
        form,
        contactData.form.publicKey
      );
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Let&apos;s <span className="text-white/50">Connect.</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Currently looking for opportunities in Data Analytics, Business Intelligence, and Data Engineering. 
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8 mb-12">
              <div>
                <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">Email</h4>
                <a href={`mailto:${contactData.email}`} className="text-xl md:text-2xl font-medium hover:text-bmw-blue transition-colors">
                  {contactData.email}
                </a>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">Phone</h4>
                <a href={`tel:${contactData.phone}`} className="text-xl md:text-2xl font-medium hover:text-bmw-blue transition-colors">
                  {contactData.phone}
                </a>
              </div>

              <div>
                <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-2">Location</h4>
                <p className="text-xl font-medium text-white/90">
                  {contactData.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-8 border-t border-white/10">
              {socialsData.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-bmw-blue/10 blur-[100px] pointer-events-none" />
              
              <div className="flex flex-col gap-2">
                <label htmlFor="user_name" className="text-sm font-medium text-white/60">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bmw-blue/50 focus:ring-1 focus:ring-bmw-blue/50 transition-all placeholder:text-white/20"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="user_email" className="text-sm font-medium text-white/60">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bmw-blue/50 focus:ring-1 focus:ring-bmw-blue/50 transition-all placeholder:text-white/20"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white/60">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bmw-blue/50 focus:ring-1 focus:ring-bmw-blue/50 transition-all resize-none placeholder:text-white/20"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="group relative flex items-center justify-center h-14 w-full rounded-xl bg-white text-black font-medium overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 mt-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === "idle" && (
                    <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                  {status === "loading" && "Sending..."}
                  {status === "success" && (
                    <><CheckCircle2 size={18} className="text-green-600" /> Sent Successfully!</>
                  )}
                  {status === "error" && (
                    <><AlertCircle size={18} className="text-red-600" /> Failed to send.</>
                  )}
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
