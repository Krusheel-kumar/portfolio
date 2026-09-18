import { motion } from "framer-motion";
import { Github, ExternalLink, FileText, Database, Server, Zap, LineChart, Code2 } from "lucide-react";

const ENG_PROJECTS = [
  {
    id: 1,
    title: "Pop O'Bob Digital Ecosystem",
    role: "Lead Full-Stack Engineer",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    description: "Architected a complete high-availability digital ordering system capable of handling 500+ concurrent users with zero downtime. Implemented real-time order tracking and secure payment gateways.",
    metrics: ["Sub-50ms API response times", "99.99% Uptime", "Automated CI/CD Deployment"],
    icon: <Database className="text-blue-400" size={24} />,
    links: [
      { label: "Live Website", icon: <ExternalLink size={14} />, url: "#" },
      { label: "GitHub Repository", icon: <Github size={14} />, url: "#" },
      { label: "Technical Case Study", icon: <FileText size={14} />, url: "#" }
    ]
  },
  {
    id: 2,
    title: "CloudCost Opti",
    role: "Backend Architecture",
    tech: ["Python", "AWS Lambda", "Terraform", "Docker"],
    description: "Developed a cloud resource optimization engine that automatically identifies idle AWS resources and securely terminates them based on customizable cron schedules.",
    metrics: ["Reduced client AWS bills by 35%", "Fully serverless architecture", "Infrastructure as Code"],
    icon: <Server className="text-purple-400" size={24} />,
    links: [
      { label: "Live Demo", icon: <ExternalLink size={14} />, url: "#" },
      { label: "GitHub Repository", icon: <Github size={14} />, url: "#" }
    ]
  },
  {
    id: 3,
    title: "Log Analytics Engine",
    role: "Data Engineering",
    tech: ["Go", "Elasticsearch", "Kafka", "React"],
    description: "Built a high-throughput logging pipeline capable of ingesting and querying millions of log lines per minute in real-time. Features a custom React dashboard for data visualization.",
    metrics: ["1M+ events/min ingestion rate", "Sub-second query times", "Fault-tolerant queueing"],
    icon: <LineChart className="text-green-400" size={24} />,
    links: [
      { label: "Live Demo", icon: <ExternalLink size={14} />, url: "#" },
      { label: "GitHub Repository", icon: <Github size={14} />, url: "#" }
    ]
  },
  {
    id: 4,
    title: "Performance Portfolio",
    role: "Frontend Engineer",
    tech: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
    description: "Engineered this exact dual-persona portfolio application. Focused on hyper-optimized asset loading, complex framer-motion animations, and strict component modularity.",
    metrics: ["100/100 Lighthouse Score", "Zero-layout shift", "Responsive fluid typography"],
    icon: <Zap className="text-yellow-400" size={24} />,
    links: [
      { label: "Live Website", icon: <ExternalLink size={14} />, url: "#" },
      { label: "GitHub Repository", icon: <Github size={14} />, url: "#" }
    ]
  }
];

export default function EngineeringProjects() {
  return (
    <section className="bg-[#030712] text-white py-24 md:py-32 relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4 text-white/50">
            <Code2 size={16} />
            <span className="font-mono text-sm tracking-wider">~/projects/featured</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Engineering Showcase.</h2>
          <p className="text-lg text-white/60 max-w-2xl">
            A selection of complex technical builds focused on performance, scalability, and elegant architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ENG_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {project.icon}
                </div>
                <span className="text-xs font-mono text-white/40 border border-white/10 rounded-full px-3 py-1 bg-white/5">
                  {project.role}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono text-white/80 bg-white/5 border border-white/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              {/* Engineering Metrics */}
              <div className="bg-black/50 rounded-xl p-4 mb-8 border border-white/5">
                <ul className="space-y-2">
                  {project.metrics.map((m, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Links */}
              <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/10">
                {project.links.map((link, i) => (
                  <a 
                    key={i}
                    href={link.url}
                    className="flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg"
                  >
                    {link.icon} {link.label}
                  </a>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
