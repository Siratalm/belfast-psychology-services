"use client";

import { CheckCircle2, Award, Heart, Shield } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Belfast Psychology Services is a leading provider of evidence-based psychological therapy, committed to helping individuals navigate life&apos;s challenges with compassion and professional expertise.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 space-y-24">
        {/* Our Story/Philosophy */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Philosophy</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Our aim is to provide a local service which is both compassionate and professional. We believe that everyone should have access to high-quality psychological support that is tailored to their unique needs and circumstances.
              </p>
              <p>
                We work collaboratively with our clients, using proven psychotherapy methods to help them develop effective tools and coping strategies. Whether you are seeking support for a specific condition or general emotional well-being, we are here to guide you.
              </p>
            </div>
          </div>
          <div className="bg-accent/5 p-12 rounded-[3rem] border border-accent/10">
            <h3 className="text-xl font-bold mb-8 text-primary uppercase tracking-wider">Why Choose A Clinical Psychologist?</h3>
            <div className="space-y-6">
              {[
                "Doctoral-level training in psychological health.",
                "HCPC Registered and regulated professionals.",
                "Trained to work across the lifespan with complex needs.",
                "Experts in evidence-based therapeutic models."
              ].map((point, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-accent shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="h-16 w-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Compassion</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We provide a safe, non-judgmental space for you to share your experiences.</p>
            </div>
            <div className="text-center p-8">
              <div className="h-16 w-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our therapists maintain the highest professional and clinical standards.</p>
            </div>
            <div className="text-center p-8">
              <div className="h-16 w-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Confidentiality and ethical practice are at the heart of everything we do.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary p-12 md:p-20 rounded-[3rem] text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto">
            Our team is here to support you. Contact us today to book your initial assessment.
          </p>
          <Link href="/contact">
            <button type="button" className="bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors uppercase tracking-widest text-sm">
              Contact Us Today
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}
