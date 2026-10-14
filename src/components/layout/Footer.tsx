import { Link } from "react-router-dom";
import { MessageCircle, Instagram, Mail, ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-slate-200/80 text-slate-900 font-sans">

      {/* Main footer grid */}
      <div className="container mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link to="/" className="inline-block">
              <img
                src="/images/krunnex_logo.png"
                alt="Krunnex"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-normal">
              High-performance digital systems, custom business software, zero-commission restaurant POS & QR ordering, e-commerce storefronts, and WhatsApp automation.
            </p>

            {/* Social & Contact icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://wa.me/917794971935?text=Hi%20Krunnex%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-green-600 hover:border-green-300 transition-colors shadow-sm"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:krusheelkumar7@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-indigo-600 hover:border-indigo-300 transition-colors shadow-sm"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://instagram.com/krunnex"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-pink-600 hover:border-pink-300 transition-colors shadow-sm"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              {SERVICES_DATA.map((s) => (
                <li key={s.slug}>
                  <Link to={`/solutions/${s.slug}`} className="hover:text-indigo-600 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider">Company & Tools</h3>
            <ul className="space-y-2 text-sm text-slate-600 font-medium mb-4">
              <li>
                <Link to="/portfolio" className="hover:text-indigo-600 transition-colors">
                  Portfolio & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/estimate" className="hover:text-indigo-600 transition-colors">
                  Project Cost Estimator
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-indigo-600 transition-colors">
                  Pricing Tiers
                </Link>
              </li>
              <li>
                <Link to="/#process" className="hover:text-indigo-600 transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link to="/#about" className="hover:text-indigo-600 transition-colors">
                  Founder's Note
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-600 transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>WhatsApp / Call: <a href="https://wa.me/917794971935" className="font-bold text-slate-900 hover:underline">+91 77949 71935</a></p>
              <p>Email: <a href="mailto:krusheelkumar7@gmail.com" className="font-bold text-slate-900 hover:underline">krusheelkumar7@gmail.com</a></p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200/80 py-6">
        <div className="container mx-auto px-5 sm:px-8 md:px-12 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Krunnex. All rights reserved. High-performance custom software.</p>
          <div className="flex gap-5">
            <Link to="/pricing" className="hover:text-slate-600 transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-slate-600 transition-colors">Contact</Link>
            <a href="https://wa.me/917794971935" target="_blank" rel="noreferrer" className="hover:text-slate-600 transition-colors">Support</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
