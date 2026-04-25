"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-gray-50 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about starting your therapeutic journey with us.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="mt-20 p-12 bg-primary text-white rounded-[3rem] text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-300 mb-8">If you couldn&apos;t find the answer you were looking for, please get in touch with our team.</p>
          <a href="/contact" className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors uppercase tracking-widest text-sm">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white transition-colors"
      >
        <span className="font-bold text-primary">{question}</span>
        {isOpen ? <Minus className="text-accent shrink-0" size={20} /> : <Plus className="text-accent shrink-0" size={20} />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          <hr className="mb-4 border-gray-50" />
          {answer}
        </div>
      )}
    </div>
  );
}

const faqs = [
  {
    q: "How do I book an initial consultation?",
    a: "You can book a consultation by contacting our administrative team directly via phone at 02890 388345 or by emailing admin@belfastpsychologyservices.com. We will match you with the most appropriate therapist for your needs."
  },
  {
    q: "How many therapy sessions will I need?",
    a: "The number of sessions varies depending on your individual needs and the complexity of the issues being addressed. Some clients benefit from short-term interventions (6-12 sessions), while others require longer-term support. Your therapist will discuss this with you during the assessment phase."
  },
  {
    q: "Are the sessions confidential?",
    a: "Yes, confidentiality is a fundamental part of therapeutic practice. We adhere to the strict ethical guidelines of the British Psychological Society (BPS) and the Health and Care Professions Council (HCPC). There are limited legal and ethical exceptions (such as risk of harm to yourself or others), which your therapist will explain in detail during your first session."
  },
  {
    q: "Can I use my private health insurance?",
    a: "Most of our clinical psychologists are registered with major health insurance providers, including Bupa, AXA Health, Aviva, and Vitality. We recommend contacting your insurance provider beforehand to confirm your coverage and obtain an authorization code."
  },
  {
    q: "What is your cancellation policy?",
    a: "We operate a 24-hour or 48-hour cancellation policy (depending on the individual therapist). If you are unable to attend your appointment, please let us know as soon as possible. Failure to provide sufficient notice may result in the full session fee being charged."
  },
  {
    q: "Do you offer evening or weekend appointments?",
    a: "Yes, we understand that our clients have busy schedules. All our therapists offer flexible session times, including evening and weekend appointments, to make it easier for you to access support."
  },
  {
    q: "What is the difference between a Clinical Psychologist and a Counselor?",
    a: "Clinical Psychologists have doctoral-level training (DClinPsy) which includes extensive academic research and clinical experience across the lifespan. They are trained to assess and treat a wide range of complex mental health conditions using multiple evidence-based therapeutic models. Counsellors typically focus on specific issues and may use a single therapeutic approach."
  }
];
