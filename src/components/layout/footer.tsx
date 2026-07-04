"use client";

import Link from "next/link";
import profile from "@/data/profile.json";
import socials from "@/data/socials.json";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-bmw-blue/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-medium tracking-tight text-white hover:text-bmw-blue transition-colors">
              Purna<span className="text-white/50">Sai</span>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/50 hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <p className="text-sm text-white/40">
              © {currentYear} {profile.displayName}. All rights reserved.
            </p>
            
            <button 
              onClick={scrollToTop}
              className="text-sm font-medium text-white/40 hover:text-white transition-colors uppercase tracking-wider"
            >
              Back to top
            </button>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
