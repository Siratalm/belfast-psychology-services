import { Mail, Phone, Users } from "lucide-react";

export default function JoinPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Join Our Service</h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            We are always looking for passionate, highly qualified Clinical and Counselling Psychologists to join our growing team in Belfast.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Why Work With Us?</h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-10 w-10 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Collaborative Environment</h3>
                    <p className="text-sm text-gray-500 mt-1">Join a supportive team of professional therapists dedicated to clinical excellence.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-10 w-10 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Flexible Practice</h3>
                    <p className="text-sm text-gray-500 mt-1">Manage your own schedule with evening and weekend session availability.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-[2rem]">
              <h2 className="text-2xl font-bold mb-6 italic">Who We Are Looking For</h2>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex gap-3">
                  <div className="h-2 w-2 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                  <span>HCPC Registered Clinical or Counselling Psychologists.</span>
                </li>
                <li className="flex gap-3">
                  <div className="h-2 w-2 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                  <span>Experience across the lifespan or in specialized areas (Trauma, ASD, Tics).</span>
                </li>
                <li className="flex gap-3">
                  <div className="h-2 w-2 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                  <span>Commitment to evidence-based practice and continuous development.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">How to Apply</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              If you are interested in joining Belfast Psychology Services, please send your CV and a brief cover letter outlining your clinical experience and areas of interest to our clinical director.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:info@belfastpsychologyservices.com" className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-accent transition-colors group">
                <Mail size={24} className="text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Email Application</span>
                  <span className="text-primary font-bold">info@belfastpsychologyservices.com</span>
                </div>
              </a>
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100">
                <Phone size={24} className="text-accent" />
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest">General Inquiries</span>
                  <span className="text-primary font-bold">02890 388345</span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-gray-400 leading-relaxed italic">
              Belfast Psychology Services is an equal opportunities employer and welcomes applications from all sections of the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
