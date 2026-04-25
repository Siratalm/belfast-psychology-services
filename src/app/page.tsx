"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Heart, Users, CheckCircle2, Star, Quote } from "lucide-react";
import Link from "next/link";
import { BookingCalendar } from "@/components/BookingCalendar";
import { format } from "date-fns";
import React from "react";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    text: "The support our daughter received for her anxiety was life-changing. The clinicians are incredibly compassionate and professional.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Adult Client",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    text: "I was hesitant about therapy, but the evidence-based approach used here really resonated with me. I've seen massive improvements in my daily life.",
    rating: 5
  },
  {
    name: "Emma O'Neill",
    role: "Adolescent Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    text: "A safe space where I felt truly heard. The tools I learned for managing stress have been invaluable for my university studies.",
    rating: 5
  }
];

export default function Home() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#fdfdfd]">
        <div className="container mx-auto px-4 py-12 md:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-full mb-6">
              Welcome to Belfast Psychology Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-6 md:mb-8 text-primary">
              Compassionate Therapy for a <span className="text-accent">Brighter Future.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We provide psychological therapy and counselling to children, young people and adults. Our HCPC registered clinical psychologists offer professional support for stress, anxiety, depression, and trauma.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button 
                size="lg" 
                className="group shadow-lg shadow-accent/20 w-full sm:w-auto"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Consultation Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-gray-200 w-full">Our Services</Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/3] bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              <div className="flex items-center justify-center h-full text-accent/10">
                <Brain className="w-full h-full p-12" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-white border-y border-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-primary">Our Therapeutic Approach</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed italic">
              &quot;Through various psychotherapy methods and collaborative techniques, we help you learn skills to cope with life’s obstacles. We offer bespoke treatment packages to support children, adolescents, adults and families.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-accent/5 transition-all group"
            >
              <Users className="text-accent mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Children & Adolescents</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                Support for performance anxiety, perfectionism, self-esteem issues, and neurodevelopmental disorders like Tourette Syndrome.
              </p>
              <Link href="/services" className="text-accent text-[10px] md:text-sm font-bold uppercase tracking-wider hover:underline">Learn More</Link>
            </motion.div>
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-accent/5 transition-all group"
            >
              <Brain className="text-accent mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Adult Mental Health</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                Evidence-based treatments for generalized anxiety, panic attacks, phobias, sleep disorders, and PTSD.
              </p>
              <Link href="/services" className="text-accent text-[10px] md:text-sm font-bold uppercase tracking-wider hover:underline">Learn More</Link>
            </motion.div>
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-accent/5 transition-all group"
            >
              <Heart className="text-accent mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Bespoke Therapies</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                Specialized approaches including CBT, EMDR, Acceptance & Commitment Therapy (ACT), and Mindfulness.
              </p>
              <Link href="/services" className="text-accent text-[10px] md:text-sm font-bold uppercase tracking-wider hover:underline">Learn More</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditions Checklist */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Specialized Support For...</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Stress & Anxiety", "Depression", "Panic Attacks", 
                  "Anger Management", "Phobias", "OCD", "Trauma & PTSD", 
                  "Tourette Syndrome", "Vocal & Motor Tics", "Self-Harm",
                  "Autism Assessments", "Sleep Disorders"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-blue-400 rounded-full" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Our Aim</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                To provide a local service which is compassionate and professional. We offer flexible session times, including evening and weekend appointments to make it easier to book an appointment at a time that suits you.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100">Contact Us Today</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in providing a compassionate service that makes a real difference in people&apos;s lives.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative"
              >
                <div className="absolute top-8 right-8 text-accent/10">
                  <Quote size={40} />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-crop grayscale hover:grayscale-0 transition-all duration-500 shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-xs text-accent font-bold uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-white" id="booking">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                Online Booking
              </div>
              <h2 className="text-4xl font-bold mb-8 text-primary">Schedule Your Consultation</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Take the first step towards your wellbeing by booking a 15-minute consultation call. 
                Select a date and time that works for you, and one of our clinical psychologists will 
                reach out to discuss how we can support you.
              </p>
              <div className="space-y-4">
                {[
                  "Choose a date that suits your schedule",
                  "Pick an available time slot",
                  "Quick and secure booking process",
                  "No immediate payment required"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-5 w-5 bg-accent/20 text-accent rounded-full flex items-center justify-center">
                      <CheckCircle2 size={12} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/5 rounded-[2.5rem] -z-10 blur-2xl" />
              <BookingCalendar onSelect={(date, time) => {
                setSelectedDate(date);
                setSelectedTime(time);
              }} />
              {selectedDate && selectedTime && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-6 bg-primary text-white rounded-2xl shadow-xl flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Selected Slot</div>
                    <div className="font-bold">{format(selectedDate, "EEEE, MMMM do")} at {selectedTime}</div>
                  </div>
                  <Button 
                    className="bg-accent hover:bg-accent/90"
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
                    Confirm Selection
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
}
