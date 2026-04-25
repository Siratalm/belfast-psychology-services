"use client";

import { ShieldCheck } from "lucide-react";

export default function FeesPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <section className="py-24 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Fees & Insurance</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Transparent pricing and information about healthcare insurance providers.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Professional Fees</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <div>
                    <h3 className="font-bold text-lg">Initial Consultation</h3>
                    <p className="text-sm text-gray-500">Comprehensive assessment of needs</p>
                  </div>
                  <div className="text-xl font-bold text-accent">£100 - £130</div>
                </div>
                <div className="flex justify-between items-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <div>
                    <h3 className="font-bold text-lg">Therapy Session</h3>
                    <p className="text-sm text-gray-500">50-minute clinical session</p>
                  </div>
                  <div className="text-xl font-bold text-accent">£90 - £110</div>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-500 italic">
                * Fees vary depending on the specific clinician and service provided. Please contact us for a detailed quote.
              </p>
            </div>

            <div className="p-8 bg-primary text-white rounded-[2rem]">
              <h2 className="text-2xl font-bold mb-6">Insurance Providers</h2>
              <p className="text-gray-300 mb-8">
                Our psychologists are registered with major health insurance providers. We recommend checking with your provider before starting treatment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Bupa", "AXA Health", "Aviva", "Vitality", "WPA", "Cigna"].map((provider) => (
                  <div key={provider} className="flex items-center gap-3 py-3 border-b border-white/10">
                    <ShieldCheck size={18} className="text-blue-400" />
                    <span className="font-medium">{provider}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 self-start">
            <h2 className="text-2xl font-bold text-primary mb-8">Important Information</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-primary mb-2">How many sessions will I need?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This is discussed during the initial assessment. Some people benefit from short-term work (6–10 sessions), while others require longer-term support.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Confidentiality</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All sessions are strictly confidential, adhering to the professional and ethical guidelines of the British Psychological Society (BPS) and HCPC.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Cancellation Policy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our clinicians operate a 24-hour or 48-hour cancellation policy. The full fee may be charged if sufficient notice is not provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
