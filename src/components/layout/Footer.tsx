import { Link } from "react-router-dom";
import { MessageCircle, Instagram, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-slate-200/80 text-slate-900 font-sans">

      {/* Main footer grid */}
      <div className="container mx-auto px-5 md:px-10 py-16 md:py-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link to="/" className="inline-block">
              <img
                src="/images/krunnex_logo.png"
                alt="Krunnex"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-normal">
              High-performance digital solutions, zero-commission ordering, WhatsApp automation, and custom business software.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-green-600 hover:border-green-200 transition-colors shadow-sm"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="https://instagram.com/krunnex"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-pink-600 hover:border-pink-200 transition-colors shadow-sm"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:krusheelkumar7@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-colors shadow-sm"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm text-slate-500 font-normal">
              {[
                "Custom Websites",
                "E-commerce Stores",
                "AI Chatbots",
                "WhatsApp Automation",
                "Admin Dashboards",
                "Loyalty Systems",
                "POS & Ordering",
              ].map((s) => (
                <li key={s}>
                  <Link to="/start-project" className="hover:text-slate-900 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="flex flex-col gap-3">
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider">Industries</h3>
            <ul className="space-y-2 text-sm text-slate-500 font-normal">
              {[
                "Restaurants & Cafés",
                "Food Delivery",
                "E-commerce & D2C",
                "Service Businesses",
                "Startups & SaaS",
              ].map((ind) => (
                <li key={ind}>
                  <Link to="/start-project" className="hover:text-slate-900 transition-colors">
                    {ind}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="flex flex-col gap-4">
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider">Direct Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <a href="mailto:krusheelkumar7@gmail.com" className="hover:text-slate-950 font-medium transition-colors">
                krusheelkumar7@gmail.com
              </a>
              <a
                href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-600 font-medium transition-colors"
              >
                +91 77949 71935
              </a>
            </div>
            <Link
              to="/start-project"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all w-fit shadow-sm"
            >
              Start a Project <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200/80 py-6">
        <div className="container mx-auto px-5 md:px-10 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Krunnex. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
