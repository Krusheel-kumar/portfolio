import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Mail, ArrowRight, Terminal } from "lucide-react";

export default function EngineeringContact() {
  return (
    <section className="bg-[#030712] text-white py-24 md:py-32 relative border-t border-white/5 overflow-hidden">
      
      {/* Subtle glowing orb for the footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-green-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Direct Links & Resume */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-4 text-white/50">
              <Terminal size={16} />
              <span className="font-mono text-sm tracking-wider">~/contact/init</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Let's build <br/> something <span className="text-green-400">scalable.</span>
            </h2>
            
            <p className="text-white/60 mb-12 text-lg">
              Currently open for freelance contracts, consulting, and full-time engineering roles. Let's discuss your technical bottlenecks.
            </p>

            <div className="flex flex-col gap-4">
              
              <a href="#" className="group flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Download Resume</h4>
                    <p className="text-xs text-white/50 font-mono">PDF • 120KB</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              <a href="#" className="group flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#24292e] rounded-full flex items-center justify-center text-white">
                    <Github size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">GitHub Profile</h4>
                    <p className="text-xs text-white/50 font-mono">Open Source Contributions</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              <a href="#" className="group flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center text-white">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">LinkedIn</h4>
                    <p className="text-xs text-white/50 font-mono">Professional Network</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Mail className="text-green-400" /> Send a Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  type="button" 
                  className="w-full bg-green-500 hover:bg-green-400 text-black font-extrabold uppercase tracking-widest py-4 rounded-xl transition-colors mt-4 flex justify-center items-center gap-2"
                >
                  Execute Send <Terminal size={16} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
