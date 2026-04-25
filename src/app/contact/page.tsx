"use client";

import React from "react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our administrative team will get back to you shortly.");
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Get in touch to book a consultation call or for general inquiries.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wider">How to Reach Us</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-bold text-accent uppercase mb-4 tracking-widest">Administrative Team</h3>
                <p className="text-gray-600 mb-2">For all inquiries and bookings, contact our central admin office:</p>
                <div className="text-2xl font-bold text-primary">02890 388345</div>
                <div className="text-lg text-gray-500">admin@belfastpsychologyservices.com</div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-accent uppercase mb-4 tracking-widest">Office Location</h3>
                <p className="text-gray-600 leading-relaxed">
                  3 Wellington Park<br />
                  Malone Road<br />
                  Belfast, BT9 6DJ
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-accent uppercase mb-4 tracking-widest">Opening Hours</h3>
                <p className="text-gray-600">
                  Monday - Sunday<br />
                  8:00 AM - 10:00 PM
                </p>
                <p className="text-sm italic text-gray-500 mt-4">
                  * Therapists offer flexible times including evening and weekend appointments.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wider">Send an Inquiry</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Your Name</label>
                  <input required type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/20" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email Address</label>
                  <input required type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/20" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Interested Service</label>
                <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/20">
                  <option>Adult Therapy</option>
                  <option>Child & Adolescent Therapy</option>
                  <option>Neurodevelopmental Assessment</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Your Message</label>
                <textarea required rows={5} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/20"></textarea>
              </div>
              <button type="submit" className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-accent/90 transition-colors uppercase tracking-widest text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
