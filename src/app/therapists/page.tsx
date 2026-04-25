"use client";

import { BookOpen, GraduationCap, Shield, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function TherapistsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-gray-50 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Clinical Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our team consists of highly qualified HCPC Registered Clinical and Counselling Psychologists.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {therapists.map((therapist, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-xl transition-all flex flex-col md:flex-row gap-8">
              <div className="h-48 w-48 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                <User size={64} className="text-gray-200" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">{therapist.name}</h3>
                <p className="text-accent font-bold uppercase tracking-widest text-xs mb-4">{therapist.role} | {therapist.quals}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  {therapist.bio}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {therapist.approaches.map((app, j) => (
                    <span key={j} className="bg-blue-50 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-32 pt-20 border-t">
          <div className="mb-16 bg-accent/5 p-8 md:p-12 rounded-3xl border border-accent/10 flex flex-col md:flex-row gap-12 items-center">
            <div className="h-20 w-20 bg-accent text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
              <GraduationCap size={40} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">What defines a Clinical Psychologist?</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Clinical Psychologists complete a minimum of six to seven years of university training, culminating in a Doctorate in Clinical Psychology (DClinPsy). This extensive training across the lifespan ensures we are uniquely equipped to handle complex mental health needs using a wide range of evidence-based psychological models. Unlike many other mental health practitioners, our role involves diagnostic assessment, formulation, and specialized treatment.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <Shield className="text-accent shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-lg mb-2 text-primary uppercase tracking-tight">HCPC Regulation</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All our therapists are registered with the Health and Care Professions Council (HCPC), the statutory regulator for health professionals in the UK. This ensures they meet rigorous national standards for training, professional skills, and ethical behavior.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <BookOpen className="text-accent shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-lg mb-2 text-primary uppercase tracking-tight">Continuous Professional Development</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our clinicians engage in mandatory clinical supervision and ongoing CPD to stay current with the latest psychological research and therapeutic innovations, ensuring you receive the highest quality care.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <Link href="/contact">
              <Button size="lg" className="px-12 shadow-xl shadow-accent/20">Book a Consultation with our Team</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

const therapists = [
  {
    name: "Dr. Liam Reilly",
    role: "Director & Chartered Clinical Psychologist",
    quals: "BSc (Hons), MSc, PsychD, C. Psychol.",
    bio: "Dr. Reilly is an HCPC-registered Clinical Psychologist and a member of the British Psychological Society (BPS). With over ten years of experience across NHS and private settings, he specializes in supporting children, adolescents, and adults with anxiety, depression, anger, and trauma.",
    approaches: ["CBT", "EMDR", "Systemic", "Integrative"]
  },
  {
    name: "Dr. Elaine McCahey",
    role: "Clinical Psychologist",
    quals: "PhD, DClinPsy",
    bio: "Dr. McCahey works with children, young people, families, and adults. She holds a PhD focused on the emotional adjustment of children with cerebral palsy and specializes in supporting those with long-term physical health conditions, neurodiversity (ASD, ADHD), and trauma.",
    approaches: ["CBT", "EMDR", "Systemic"]
  },
  {
    name: "Dr. Sarah Culligan",
    role: "Counselling Psychologist",
    quals: "BA (Hons.), H. Dip., D. Couns Psych.",
    bio: "Dr. Culligan has over ten years of clinical experience working with individuals, couples, and groups across the lifespan. She has significant experience in forensic settings, conducting complex psychological assessments.",
    approaches: ["Psychodynamic", "Humanistic", "Integrative"]
  },
  {
    name: "Howard Beverland",
    role: "Therapist Practitioner",
    quals: "BSc, Mental Health Diploma, PG Dip Family Therapy",
    bio: "Howard has over a decade of experience working with adults, children, and families. He specializes in child and adolescent mental health, focusing on building quick rapport and positive therapeutic relationships to address complex stressors.",
    approaches: ["Family Therapy", "Systemic Practice", "Coaching"]
  }
];
