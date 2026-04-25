import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-6">
              <span className="text-xl font-bold tracking-tight uppercase">Belfast Psychology</span>
              <span className="text-sm font-medium text-blue-400">SERVICES</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing compassionate and professional psychological therapy for children, young people, and adults in Belfast.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-wider">Contact Details</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-blue-400 shrink-0" />
                <span>3 Wellington Park, Malone Road, Belfast, BT9 6DJ</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:admin@belfastpsychologyservices.com" className="hover:text-white transition-colors">admin@belfastpsychologyservices.com</a>
                  <a href="mailto:info@belfastpsychologyservices.com" className="hover:text-white transition-colors text-xs opacity-70">info@belfastpsychologyservices.com</a>
                </div>
              </li>
              <li className="flex gap-3 text-xs leading-relaxed">
                <Phone size={18} className="text-blue-400 shrink-0" />
                <div className="flex flex-col">
                  <span>Office: 02890 388345</span>
                  <span>Mobile: 07784623005</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-wider">Opening Hours</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>Monday - Sunday</li>
              <li>8:00 AM - 10:00 PM</li>
              <li className="text-xs italic text-gray-400 mt-4 pt-4 border-t border-gray-700">
                Evening and weekend appointments available to suit your schedule.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><a href="/services" className="hover:text-white transition-colors">Therapeutic Services</a></li>
              <li><a href="/fees" className="hover:text-white transition-colors">Fees & Insurance</a></li>
              <li><a href="/join-the-service" className="hover:text-white transition-colors">Join Our Team</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Book a Consultation</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Belfast Psychology Services. All therapists are HCPC Registered Clinical Psychologists.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
