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
    <section id="contact" className="py-32 relative bg-black border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">
            Contact
          </h2>
          <p className="text-white/50 max-w-xl">
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
            <div className="space-y-12 mb-16">
              <div>
                <h4 className="text-xs font-medium text-white/40 uppercase tracking-widest mb-3 border-b border-white/10 pb-2 inline-block">Email</h4>
                <a href={`mailto:${contactData.email}`} className="block text-xl md:text-2xl font-light hover:text-white/70 transition-colors">
                  {contactData.email}
                </a>
              </div>
              
              <div>
                <h4 className="text-xs font-medium text-white/40 uppercase tracking-widest mb-3 border-b border-white/10 pb-2 inline-block">Phone</h4>
                <a href={`tel:${contactData.phone}`} className="block text-xl md:text-2xl font-light hover:text-white/70 transition-colors">
                  {contactData.phone}
                </a>
              </div>

              <div>
                <h4 className="text-xs font-medium text-white/40 uppercase tracking-widest mb-3 border-b border-white/10 pb-2 inline-block">Location</h4>
                <p className="text-xl md:text-2xl font-light text-white">
                  {contactData.location}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
              {socialsData.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium tracking-widest uppercase hover:text-white/60 transition-colors"
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
            <form onSubmit={handleSubmit} className="p-8 md:p-12 border border-white/10 flex flex-col gap-8 bg-black">
              
              <div className="flex flex-col gap-3">
                <label htmlFor="user_name" className="text-xs font-medium text-white/40 uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-white transition-all placeholder:text-white/20 rounded-none"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="user_email" className="text-xs font-medium text-white/40 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-white transition-all placeholder:text-white/20 rounded-none"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="text-xs font-medium text-white/40 uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-white transition-all resize-none placeholder:text-white/20 rounded-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="group flex items-center justify-between text-sm font-medium bg-white text-black px-6 py-4 transition-transform hover:scale-[1.02] mt-4 disabled:opacity-70 disabled:hover:scale-100 uppercase tracking-widest"
              >
                <span>
                  {status === "idle" && "Send Message"}
                  {status === "loading" && "Sending..."}
                  {status === "success" && "Sent Successfully!"}
                  {status === "error" && "Failed to send."}
                </span>
                {status === "idle" && (
                  <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
