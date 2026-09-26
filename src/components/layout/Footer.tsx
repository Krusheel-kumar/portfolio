import { Link } from "react-router-dom";
import { MessageCircle, Instagram, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030712] border-t border-white/6 text-white">

      {/* Main footer grid */}
      <div className="container mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">

          {/* Brand column — wider */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <Link to="/" className="inline-block">
              <img
                src="/images/krunnex_logo.png"
                alt="Krunnex"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Premium digital solutions for restaurants, e-commerce, and growing businesses. Custom code. Real automation. Real results.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-400/30 transition-colors"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="https://instagram.com/krunnex"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-white/50 hover:text-pink-400 hover:border-pink-400/30 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:hello@krunnex.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-white/50 hover:text-violet-400 hover:border-violet-400/30 transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest">Services</h3>
            <ul className="space-y-2.5 text-sm text-white/45">
              {[
                "Custom Websites",
                "E-commerce Stores",
                "AI Chatbots",
                "WhatsApp Automation",
                "Admin Dashboards",
                "Loyalty Systems",
                "POS & Ordering",
                "Mobile Apps",
              ].map((s) => (
                <li key={s}>
                  <Link to="/start-project" className="hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest">Industries</h3>
            <ul className="space-y-2.5 text-sm text-white/45">
              {[
                "Restaurants & Cafés",
                "Food Delivery",
                "E-commerce & Retail",
                "Service Businesses",
                "Healthcare",
                "Education",
                "Real Estate",
                "Startups & SaaS",
              ].map((ind) => (
                <li key={ind}>
                  <Link to="/start-project" className="hover:text-white transition-colors">
                    {ind}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest">Get Started</h3>
            <p className="text-sm text-white/45 leading-relaxed">
              Ready to build something that grows your business?
            </p>
            <Link
              to="/start-project"
              className="group inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full text-xs font-extrabold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all w-fit"
            >
              Start a Project <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <div className="flex flex-col gap-2 text-xs text-white/35">
              <a href="mailto:hello@krunnex.com" className="hover:text-white transition-colors">
                hello@krunnex.com
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="container mx-auto px-5 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Krunnex. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
