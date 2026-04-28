"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "Therapists", href: "/therapists" },
  { name: "Fees", href: "/fees" },
  { name: "FAQ", href: "/faq" },
  { name: "About Us", href: "/about" },
  { name: "Join Our Team", href: "/join-the-service" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
      {/* DESKTOP: Unchanged. MOBILE: Standard 20px padding */}
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between gap-4">
        
        {/* Logo Section - Preserved Desktop */}
        <Link href="/" className="flex flex-col leading-none z-50 shrink-0" onClick={() => setIsOpen(false)}>
          <span className="text-lg md:text-xl font-black tracking-tighter text-primary uppercase whitespace-nowrap">Belfast Psychology</span>
          <span className="text-[10px] md:text-xs font-bold text-accent tracking-[0.2em]">SERVICES</span>
        </Link>

        {/* Desktop Nav - Preserved Desktop */}
        <nav className="hidden lg:flex items-center gap-x-4 xl:gap-x-6 text-[10px] font-black uppercase tracking-widest">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-gray-500 hover:text-black transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Button 
            size="sm" 
            className="border-2 border-black font-black uppercase text-[10px] tracking-widest px-6 h-11"
            onClick={() => window.dispatchEvent(new CustomEvent("toggle-booking-agent"))}
          >
            Book a Consultation
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden p-2 text-primary z-[60] focus:outline-none flex items-center gap-2 transition-all active:scale-90" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block leading-none">
              {isOpen ? "Close" : "Menu"}
            </span>
            <span className="text-[8px] font-bold text-accent hidden sm:block tracking-[0.2em] leading-none mt-0.5">
              {isOpen ? "SHUT" : "OPEN"}
            </span>
          </div>
          <div className="w-10 h-10 border-2 border-black flex items-center justify-center bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {isOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
          </div>
        </button>
      </div>

      {/* Mobile Nav Overlay - Optimized for 320x480 */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed right-0 top-0 bottom-0 w-[85%] max-w-[360px] bg-white z-50 flex flex-col p-6 pt-24 shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.5)]"
            >
              {/* Nav links container - tight vertical spacing for 480px height */}
              <nav className="flex flex-col space-y-3">
                {NAV_LINKS.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="flex items-center justify-between py-4 px-5 bg-gray-100 rounded-xl text-lg font-black text-primary hover:bg-gray-200 active:bg-gray-300 transition-all uppercase tracking-tighter border-2 border-transparent hover:border-black/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <ArrowRight size={18} className="opacity-40" />
                  </Link>
                ))}
              </nav>
              
              {/* Bottom Actions - compact */}
              <div className="mt-auto pt-8 border-t border-black/5">
                <Button 
                  size="sm" 
                  className="w-full py-6 border-2 border-black bg-black text-white font-black uppercase tracking-widest text-[11px] rounded-xl mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  onClick={() => {
                    setIsOpen(false);
                    window.dispatchEvent(new CustomEvent("toggle-booking-agent"));
                  }}
                >
                  Request Consultation
                </Button>
                <div className="flex flex-col gap-2 text-[10px] font-black text-muted uppercase px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <p>3 Wellington Park, Belfast</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <p>02890 388345</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
