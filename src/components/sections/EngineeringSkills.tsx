import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Architecture",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 }
    ]
  },
  {
    title: "Backend Engineering",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "RESTful APIs", level: 95 },
      { name: "Redis Caching", level: 80 }
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS (EC2, S3, RDS)", level: 80 },
      { name: "Docker", level: 85 },
      { name: "CI/CD (GitHub Actions)", level: 90 },
      { name: "Linux / Bash", level: 85 }
    ]
  }
];

export default function EngineeringSkills() {
  return (
    <section className="bg-[#030712] text-white py-24 md:py-32 relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <motion.div 
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-white/50">
            <Terminal size={16} />
            <span className="font-mono text-sm tracking-wider">~/skills/matrix</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Core Competencies.</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and engineering proficiencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-white/90">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-medium text-white/80">{skill.name}</span>
                      <span className="text-xs font-mono text-white/40">{skill.level}%</span>
                    </div>
                    {/* Animated Progress Bar */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
