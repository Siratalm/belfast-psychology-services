"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "/services", showOnDesktop: true },
  { name: "Therapists", href: "/therapists", showOnDesktop: true },
  { name: "Fees", href: "/fees", showOnDesktop: true },
  { name: "FAQ", href: "/faq", showOnDesktop: false },
  { name: "About Us", href: "/about", showOnDesktop: false },
  { name: "Join Our Team", href: "/join-the-service", showOnDesktop: false },
  { name: "Contact", href: "/contact", showOnDesktop: true },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
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
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="w-auto sm:w-[280px] shrink-0">
          <Link href="/" className="flex flex-col leading-none z-50">
            <span className="text-lg sm:text-xl font-black tracking-tighter text-primary uppercase">Belfast Psychology</span>
            <span className="text-[10px] sm:text-xs font-bold text-accent tracking-[0.3em]">SERVICES</span>
          </Link>
        </div>

        {/* Desktop Nav - Centered and limited to prevent overlap */}
        <nav className="hidden xl:flex flex-1 justify-center items-center gap-x-8 text-[10px] font-black uppercase tracking-widest">
          {NAV_LINKS.map((link) => (
            link.showOnDesktop && (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-gray-500 hover:text-black transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* Action Button Section */}
        <div className="w-[280px] hidden xl:flex justify-end items-center shrink-0">
          <Button 
            size="sm" 
            className="border-2 border-black font-black uppercase text-[10px] tracking-widest px-6 h-11"
            onClick={() => window.dispatchEvent(new CustomEvent("toggle-booking-agent"))}
          >
            Book a Consultation
          </Button>
        </div>

        {/* Mobile Menu Button - Show on anything smaller than xl */}
        <button 
          className="xl:hidden p-2 text-primary z-50 focus:outline-none flex items-center gap-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">
            {isOpen ? "Close" : "Menu"}
          </span>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="xl:hidden fixed inset-0 bg-white z-40 flex flex-col p-6 pt-24 overflow-y-auto"
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-black last:border-0"
                >
                  <Link 
                    href={link.href} 
                    className="flex items-center justify-between py-6 text-3xl font-black text-primary hover:text-accent transition-colors uppercase tracking-tighter"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <ArrowRight size={20} strokeWidth={3} className="opacity-20" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
              className="mt-8 pt-8 border-t-[4px] border-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="w-full justify-between group py-8 px-8 h-auto border-[3px] border-black bg-black text-white rounded-none"
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent("toggle-booking-agent"));
                }}
              >
                <span className="font-black tracking-widest uppercase text-left">
                  Request <br />Consultation
                </span>
                <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] font-black text-muted uppercase tracking-widest mb-2">Location</p>
                  <p className="text-xs font-bold leading-relaxed uppercase">3 Wellington Park, <br />Belfast, BT9 6DJ</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-muted uppercase tracking-widest mb-2">Contact</p>
                  <p className="text-xs font-bold leading-relaxed uppercase">02890 388345 <br />admin@bps.com</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
