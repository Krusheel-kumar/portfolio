import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="w-full bg-[#030712] border-t border-white/5 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center mb-6">
              <img 
                src="/images/krunnex_logo.png" 
                alt="Krunnex Logo" 
                className="h-16 w-auto object-contain drop-shadow-md"
              />
            </div>
            <p className="text-white/50 text-sm max-w-xs">
              Premium digital solutions for businesses that demand excellence and engineering precision.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Services</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI & Automation</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Company</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Legal</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} Krunnex. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
