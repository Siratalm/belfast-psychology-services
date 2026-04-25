"use client";

import { CheckCircle2, Microscope, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Evidence-based psychological therapies and diagnostic assessments tailored to children, young people, and adults.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 space-y-32">
        {/* Diagnostic Assessments */}
        <section className="bg-primary text-white p-12 md:p-20 rounded-[3rem]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-16 w-16 bg-blue-400/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8">
                <Microscope size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Diagnostic Assessments</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We provide comprehensive diagnostic assessments for neurodevelopmental disorders, adhering to gold-standard clinical guidelines.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 size={20} className="text-blue-400 shrink-0" />
                  <div>
                    <span className="font-bold block">Autism Spectrum Disorder (ASD)</span>
                    <span className="text-sm text-gray-400">Using the Autism Diagnostic Observation Schedule - 2 (ADOS-2).</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 size={20} className="text-blue-400 shrink-0" />
                  <div>
                    <span className="font-bold block">Tourette Syndrome & Tics</span>
                    <span className="text-sm text-gray-400">Specialized support for vocal and motor tics.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 italic">Bespoke Support</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Our diagnostic process involves multi-disciplinary input where appropriate and provides a detailed roadmap for future support and intervention.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100">Inquire About Assessments</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Adult Mental Health */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-primary">Adult Mental Health</h2>
            <div className="h-px bg-gray-100 flex-grow" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adultConditions.map((condition, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-accent/50 transition-colors">
                <h4 className="font-bold text-primary text-sm mb-2">{condition.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{condition.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Young People's Mental Health */}
        <section className="bg-gray-50 p-12 md:p-20 rounded-[3rem]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid sm:grid-cols-2 gap-4">
                 {childServices.map((service, i) => (
                   <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                     <span className="font-bold text-sm text-primary block mb-1">{service}</span>
                     <div className="h-1 w-8 bg-accent rounded-full" />
                   </div>
                 ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Young People&apos;s Health</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We support children and adolescents facing emotional and behavioral difficulties. Our approach is collaborative, often consulting with schools and universities to ensure holistic support.
              </p>
              <div className="flex gap-4">
                <Users size={32} className="text-accent" />
                <p className="text-sm text-gray-500 font-medium italic">
                  Bespoke treatment packages designed for families and adolescents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Therapy Types */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Therapeutic Approaches</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapies.map((therapy, i) => (
              <div key={i} className="p-10 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-4 text-accent uppercase tracking-tighter">{therapy.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{therapy.desc}</p>
                <div className="h-1.5 w-12 bg-gray-100 rounded-full" />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary text-white p-12 md:p-20 rounded-[3rem] text-center">
          <h2 className="text-3xl font-bold mb-6">Flexible Treatment Packages</h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed italic">
            &quot;Your therapist will work with you to develop a flexible treatment package that suits you. We offer evening and weekend appointments for your convenience.&quot;
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-2xl">Start Your Consultation</Button>
          </Link>
        </section>
      </div>
    </div>
  );
}

const adultConditions = [
  { title: "Anxiety Disorders", desc: "Generalized anxiety, panic attacks, social anxiety, and phobias." },
  { title: "Trauma & PTSD", desc: "Specialized trauma-focused CBT and EMDR for psychological trauma." },
  { title: "Low Mood & Depression", desc: "Evidence-based support for persistent sadness and low mood." },
  { title: "Sleep Disorders", desc: "Strategies for managing insomnia and disrupted sleep patterns." },
  { title: "Health Management", desc: "Coping with long-term physical health conditions." },
  { title: "OCD", desc: "Treatment for Obsessive Compulsive Disorder and related rituals." },
  { title: "Anger Management", desc: "Tools and techniques for regulating intense emotions." },
  { title: "Stress", desc: "Managing life transitions and professional burnout." },
];

const childServices = [
  "Performance Anxiety", "Clinical Perfectionism", "Self-Esteem Issues", 
  "Self-Harm Support", "Neurodiversity (ASD/ADHD)", "School Consultation",
  "Physical Health Coping", "Family Therapy"
];

const therapies = [
  { name: "CBT", desc: "Cognitive Behavioural Therapy focuses on the link between thoughts, feelings, and actions." },
  { name: "Trauma focused CBT", desc: "Specialized model designed to help children and adults recover from traumatic events." },
  { name: "EMDR", desc: "Eye Movement Desensitisation and Reprocessing, highly effective for trauma and phobias." },
  { name: "ACT", desc: "Acceptance and Commitment Therapy focuses on psychological flexibility and mindfulness." },
  { name: "DBT Skills", desc: "Dialectical Behaviour Therapy techniques for emotional regulation and conflict management." },
  { name: "Systemic Practice", desc: "Approaches that consider the individual within the context of their relationships and family." },
];
