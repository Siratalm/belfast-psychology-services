"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, User, Phone, CheckCircle2, Calendar as CalendarIcon, ChevronLeft } from "lucide-react";
import { Button } from "./ui/Button";
import { BookingCalendar } from "./BookingCalendar";
import { format } from "date-fns";

type Step = "initial" | "calendar" | "name" | "phone" | "completed";

export function BookingAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("initial");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Handle external booking requests
  React.useEffect(() => {
    const handleExternalBooking = (e: any) => {
      const { date, time } = e.detail;
      setSelectedDate(new Date(date));
      setSelectedTime(time);
      setIsOpen(true);
      setStep("name");
    };

    window.addEventListener("open-booking", handleExternalBooking);
    return () => window.removeEventListener("open-booking", handleExternalBooking);
  }, []);

  const handleStart = () => setStep("calendar");

  const handleDateSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handleCalendarSubmit = () => {
    if (selectedDate && selectedTime) setStep("name");
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) setStep("phone");
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      // Here you would typically call an API to save the appointment
      console.log("Appointment requested:", { 
        name, 
        phone, 
        date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : null,
        time: selectedTime 
      });
      setStep("completed");
    }
  };

  const reset = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep("initial");
      setName("");
      setPhone("");
      setSelectedDate(null);
      setSelectedTime(null);
    }, 500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 w-[calc(100vw-2rem)] sm:w-[380px] md:w-[450px] overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold">Booking Assistant</h3>
                <p className="text-xs text-blue-300">Online | Clinical Intake</p>
              </div>
              <button onClick={reset} className="hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <AnimatePresence mode="wait">
                {step === "initial" && (
                  <motion.div
                    key="initial"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    <div className="h-16 w-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare size={32} />
                    </div>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      Hello! I can help you schedule a consultation call in seconds.
                    </p>
                    <Button onClick={handleStart} className="w-full">Start Booking</Button>
                  </motion.div>
                )}

                {step === "calendar" && (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <button onClick={() => setStep("initial")} className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                        <ChevronLeft size={16} />
                        Back
                      </button>
                      <div className="flex items-center gap-3 text-accent">
                        <CalendarIcon size={20} />
                        <span className="text-sm font-bold uppercase tracking-wider">Step 1 of 3</span>
                      </div>
                    </div>
                    <BookingCalendar onSelect={handleDateSelect} />
                    <Button 
                      disabled={!selectedDate || !selectedTime} 
                      onClick={handleCalendarSubmit} 
                      className="w-full mt-4"
                    >
                      Continue
                    </Button>
                  </motion.div>
                )}

                {step === "name" && (
                  <motion.form
                    key="name"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleNameSubmit}
                    className="space-y-4 py-8"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <button type="button" onClick={() => setStep("calendar")} className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                        <ChevronLeft size={16} />
                        Back
                      </button>
                      <div className="flex items-center gap-3 text-accent">
                        <User size={20} />
                        <span className="text-sm font-bold uppercase tracking-wider">Step 2 of 3</span>
                      </div>
                    </div>
                    <p className="text-primary font-bold">What is your full name?</p>
                    <input
                      autoFocus
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full border-b-2 border-gray-100 py-2 focus:border-accent outline-none transition-colors"
                    />
                    <Button type="submit" className="w-full">Next</Button>
                  </motion.form>
                )}

                {step === "phone" && (
                  <motion.form
                    key="phone"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handlePhoneSubmit}
                    className="space-y-4 py-8"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <button type="button" onClick={() => setStep("name")} className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                        <ChevronLeft size={16} />
                        Back
                      </button>
                      <div className="flex items-center gap-3 text-accent">
                        <Phone size={20} />
                        <span className="text-sm font-bold uppercase tracking-wider">Step 3 of 3</span>
                      </div>
                    </div>
                    <p className="text-primary font-bold">Nice to meet you, {name.split(' ')[0]}. Phone number?</p>
                    <input
                      autoFocus
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07700 000000"
                      className="w-full border-b-2 border-gray-100 py-2 focus:border-accent outline-none transition-colors"
                    />
                    <Button type="submit" className="w-full">Finish Booking</Button>
                  </motion.form>
                )}

                {step === "completed" && (
                  <motion.div
                    key="completed"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="h-16 w-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="font-bold text-primary mb-2">Request Received!</h4>
                    <p className="text-gray-500 text-xs leading-relaxed mb-6">
                      Thank you, {name}. We have you booked for {selectedDate && format(selectedDate, "MMM d")} at {selectedTime}. A Clinical Psychologist will call you at {phone} within 24 hours to confirm.
                    </p>
                    <Button onClick={reset} variant="outline" className="w-full">Close</Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 md:h-16 md:w-16 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-accent/90 transition-colors"
      >
        {isOpen ? <X size={24} className="md:w-7 md:h-7" /> : <MessageSquare size={24} className="md:w-7 md:h-7" />}
      </motion.button>
    </div>
  );
}
