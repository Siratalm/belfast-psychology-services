"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Services", href: "/services", primary: true },
  { name: "Therapists", href: "/therapists", primary: true },
  { name: "Fees", href: "/fees", primary: true },
  { name: "FAQ", href: "/faq", primary: false },
  { name: "About Us", href: "/about", primary: false },
  { name: "Join Our Team", href: "/join-the-service", primary: false },
  { name: "Contact", href: "/contact", primary: true },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-8">
        <Link href="/" className="flex flex-col leading-none z-50 shrink-0">
          <span className="text-lg md:text-xl font-black tracking-tighter text-primary uppercase">Belfast Psychology</span>
          <span className="text-[10px] md:text-xs font-bold text-accent tracking-[0.2em]">SERVICES</span>
        </Link>

        {/* Desktop Nav - Optimized for space */}
        <nav className="hidden lg:flex items-center gap-x-4 2xl:gap-x-8 text-[10px] font-black uppercase tracking-tighter">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={cn(
                "text-gray-500 hover:text-black transition-colors whitespace-nowrap",
                !link.primary && "hidden 2xl:block" // Hide non-primary links until 2xl
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Button 
            size="sm" 
            className="border-2 border-black font-black uppercase text-[9px] tracking-widest px-4 h-10"
            onClick={() => window.dispatchEvent(new CustomEvent("toggle-booking-agent"))}
          >
            Book a Consultation
          </Button>
        </div>

        {/* Mobile Menu Button - Show on anything smaller than 2xl (if we want full menu access) or lg */}
        <button 
          className="lg:hidden p-2 text-primary z-50 focus:outline-none" 
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
            className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col p-8 pt-32 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-3xl font-bold text-primary hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
              className="mt-12 pt-8 border-t border-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button size="lg" className="w-full justify-between group">
                  Book a Consultation Call
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="mt-8 text-sm text-gray-500 text-center">
                3 Wellington Park, Malone Road, Belfast<br />
                02890 388345
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
