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
        <div className="w-[280px] shrink-0">
          <Link href="/" className="flex flex-col leading-none z-50">
            <span className="text-xl font-black tracking-tighter text-primary uppercase">Belfast Psychology</span>
            <span className="text-xs font-bold text-accent tracking-[0.3em]">SERVICES</span>
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
          className="xl:hidden p-2 text-primary z-50 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="xl:hidden fixed inset-0 bg-white z-40 flex flex-col p-8 pt-32 overflow-y-auto"
          >
            <nav className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-4xl font-black text-primary hover:text-accent transition-colors uppercase tracking-tighter"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
              className="mt-16 pt-12 border-t border-black/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="w-full justify-between group py-8 px-8 h-auto border-2 border-black"
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent("toggle-booking-agent"));
                }}
              >
                <span className="font-black tracking-widest uppercase">Book a Consultation</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="mt-12 text-xs font-bold text-gray-400 text-center uppercase tracking-widest">
                3 Wellington Park, Belfast • 02890 388345
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
