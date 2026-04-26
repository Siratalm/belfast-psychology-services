"use client";

import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus, Star, Quote } from "lucide-react";
import Link from "next/link";
import { BookingCalendar } from "@/components/BookingCalendar";
import { format } from "date-fns";
import React, { useState } from "react";
import Image from "next/image";

const SERVICES = [
  {
    id: "01",
    title: "ONLINE SESSIONS",
    description: "Flexible psychological support from the comfort of your home. We provide evidence-based therapies including CBT and ACT via secure video platforms, ensuring accessibility and privacy regardless of your location.",
  },
  {
    id: "02",
    title: "CHILD & ADOLESCENT",
    description: "Specialized support for young people facing anxiety, performance pressure, or neurodevelopmental challenges. We work collaboratively with families and schools to provide holistic care tailored to developmental needs.",
  },
  {
    id: "03",
    title: "DIAGNOSTIC ASSESSMENTS",
    description: "Comprehensive assessments for Autism Spectrum Disorder (ASD), ADHD, and Tourette Syndrome. Following gold-standard clinical guidelines (ADOS-2), we provide clear diagnostic formulation and support pathways.",
  },
  {
    id: "04",
    title: "ADULT MENTAL HEALTH",
    description: "Expert treatment for complex mental health needs including PTSD, trauma, OCD, and clinical depression. Our psychologists utilize specialized models like EMDR to support long-term recovery and resilience.",
  }
];

const TESTIMONIALS = [
  {
    name: "SARAH JENKINS",
    role: "PARENT",
    text: "THE SUPPORT OUR DAUGHTER RECEIVED WAS LIFE-CHANGING. THE CLINICIANS ARE INCREDIBLY COMPASSIONATE AND PROFESSIONAL.",
  },
  {
    name: "DAVID THOMPSON",
    role: "ADULT CLIENT",
    text: "I WAS HESITANT ABOUT THERAPY, BUT THE EVIDENCE-BASED APPROACH USED HERE REALLY RESONATED WITH ME.",
  },
  {
    name: "EMMA O'NEILL",
    role: "ADOLESCENT CLIENT",
    text: "A SAFE SPACE WHERE I FELT TRULY HEARD. THE TOOLS I LEARNED FOR MANAGING STRESS HAVE BEEN INVALUABLE.",
  }
];

export default function Home() {
  const [openService, setOpenService] = useState<string | null>("01");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section - Bold All-Caps */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-32 border-b border-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <div className="inline-block px-4 py-1 border border-black text-[10px] font-black tracking-[0.3em] uppercase mb-12">
            YOUR MENTAL HEALTH MATTERS
          </div>
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[110px] mb-12">
            COMPASSIONATE <br />
            THERAPY FOR A <br />
            <span className="bg-black text-white px-4">BRIGHTER FUTURE</span>
          </h1>
          <div className="flex flex-col items-center gap-8">
            <p className="max-w-xl text-sm md:text-base font-medium leading-relaxed uppercase tracking-tight">
              WE PROVIDE PSYCHOLOGICAL THERAPY AND COUNSELLING TO CHILDREN, YOUNG PEOPLE AND ADULTS. OUR HCPC REGISTERED CLINICAL PSYCHOLOGISTS OFFER PROFESSIONAL SUPPORT FOR STRESS, ANXIETY, DEPRESSION, AND TRAUMA.
            </p>
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-black/90 px-12 py-8 text-xs font-black tracking-widest uppercase border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => window.dispatchEvent(new CustomEvent("toggle-booking-agent"))}
              >
                Book a consultation call
              </Button>
          </div>
        </motion.div>
      </section>

      {/* Services Section - Accordion Style */}
      <section className="py-32 border-b border-black">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <h2 className="text-6xl md:text-8xl">WHAT <br />I DO</h2>
            <Link href="/services" className="text-xs font-black tracking-widest border-b-2 border-black pb-1 hover:text-muted hover:border-muted transition-all">
              VIEW ALL SERVICES
            </Link>
          </div>
          
          <div className="border-t border-black">
            {SERVICES.map((service) => (
              <div key={service.id} className="border-b border-black group">
                <button
                  onClick={() => setOpenService(openService === service.id ? null : service.id)}
                  className="w-full py-10 flex items-center justify-between text-left group-hover:bg-gray-50 transition-colors px-4"
                >
                  <div className="flex items-center gap-12">
                    <span className="text-xs font-black tracking-widest text-muted">{service.id}</span>
                    <h3 className="text-3xl md:text-5xl">{service.title}</h3>
                  </div>
                  <div className="h-12 w-12 border-2 border-black flex items-center justify-center">
                    {openService === service.id ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pl-16 md:pl-28 pr-12 max-w-4xl">
                        <p className="text-base md:text-lg font-medium leading-relaxed uppercase tracking-tight text-muted">
                          {service.description}
                        </p>
                        <Link href="/services" className="inline-flex items-center gap-2 mt-8 text-xs font-black tracking-widest group/link">
                          LEARN MORE 
                          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Minimal Grid */}
      <section className="py-32 bg-secondary border-b border-black">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-8xl mb-8">HEAR FROM <br />OUR PEOPLE</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-black border border-black">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-12 flex flex-col justify-between min-h-[400px]">
                <div>
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="black" />)}
                  </div>
                  <p className="text-lg md:text-xl font-black leading-tight uppercase tracking-tighter">
                    &quot;{t.text}&quot;
                  </p>
                </div>
                <div className="mt-12">
                  <p className="text-xs font-black tracking-[0.2em]">{t.name}</p>
                  <p className="text-[10px] font-medium tracking-widest text-muted mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section - Bold Form */}
      <section className="py-32" id="booking">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-6xl md:text-8xl mb-12">READY TO <br />START?</h2>
              <p className="text-xl font-bold uppercase tracking-tight mb-12 max-w-md">
                SELECT A DATE AND TIME FOR YOUR INITIAL 15-MINUTE CONSULTATION CALL WITH OUR CLINICAL TEAM.
              </p>
              <div className="space-y-6">
                {[
                  "HCPC REGISTERED EXPERTS",
                  "CONFIDENTIAL SESSIONS",
                  "FLEXIBLE SCHEDULING",
                  "PRIVATE HEALTH INSURANCE APPROVED"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-black pb-4 font-black text-xs tracking-[0.1em]">
                    <div className="h-2 w-2 bg-black" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-[4px] border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              <BookingCalendar onSelect={(date, time) => {
                setSelectedDate(date);
                setSelectedTime(time);
              }} />
              {selectedDate && selectedTime && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-12 bg-black text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                  <div className="text-center md:text-left">
                    <p className="text-[10px] font-black tracking-[0.3em] opacity-60 mb-2">SELECTED SESSION</p>
                    <p className="text-lg font-black">{format(selectedDate, "EEEE, MMMM do")} @ {selectedTime}</p>
                  </div>
                  <Button 
                    size="sm"
                    className="bg-white text-black hover:bg-gray-100 w-full md:w-auto px-12 h-14 font-black tracking-widest uppercase"
                    onClick={() => {
                      const event = new CustomEvent("open-booking", {
                        detail: { 
                          date: selectedDate.toISOString(), 
                          time: selectedTime 
                        }
                      });
                      window.dispatchEvent(event);
                    }}
                  >
                    Confirm
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
