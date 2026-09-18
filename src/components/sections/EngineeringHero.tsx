import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, GitBranch } from "lucide-react";

export default function EngineeringHero() {
  return (
    <section className="bg-[#030712] text-green-400 py-32 md:py-48 relative overflow-hidden min-h-screen flex items-center">
      
      {/* Grid background for technical feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text/Bio Side */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6 text-white/50">
            <Terminal size={16} />
            <span className="font-mono text-sm tracking-wider">~/krunnex/profile</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Software <br/> Engineer.
          </h1>
          
          <p className="text-lg text-white/70 mb-8 font-medium max-w-lg leading-relaxed">
            I architect scalable, high-performance systems. From complex React frontends to robust Node.js microservices and automated CI/CD pipelines. 
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-white text-sm font-semibold">
              <Code2 size={16} className="text-blue-400" /> Full-Stack Dev
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-white text-sm font-semibold">
              <Cpu size={16} className="text-purple-400" /> System Architecture
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-white text-sm font-semibold">
              <GitBranch size={16} className="text-orange-400" /> CI/CD Automation
            </div>
          </div>
          
        </motion.div>

        {/* Terminal Window Side */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-white/10 shadow-[0_0_50px_rgba(74,222,128,0.1)] font-mono text-sm sm:text-base">
            {/* Terminal Header */}
            <div className="bg-black/50 px-4 py-3 border-b border-white/10 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-white/40 text-xs">bash - krunnex@macbook-pro</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 text-green-400 space-y-4">
              <div>
                <span className="text-blue-400">krunnex</span>@dev:~$ whoami
                <br/>
                <span className="text-white">Krunnex</span>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="text-blue-400">krunnex</span>@dev:~$ cat skills.json
                <br/>
                <span className="text-yellow-300">{"{"}</span>
                <div className="pl-4">
                  <span className="text-blue-300">"frontend"</span>: <span className="text-green-300">["React", "Next.js", "Tailwind", "Framer Motion"]</span>,
                  <br/>
                  <span className="text-blue-300">"backend"</span>: <span className="text-green-300">["Node.js", "Express", "PostgreSQL", "MongoDB"]</span>,
                  <br/>
                  <span className="text-blue-300">"devops"</span>: <span className="text-green-300">["AWS", "Docker", "GitHub Actions", "Vercel"]</span>
                </div>
                <span className="text-yellow-300">{"}"}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="flex items-center gap-2"
              >
                <span className="text-blue-400">krunnex</span>@dev:~$ <span className="w-2 h-5 bg-white/80 animate-pulse inline-block" />
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
