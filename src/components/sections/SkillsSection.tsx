"use client";

import { motion } from "framer-motion";

const skills = {
  Backend: ["Java", "Spring Boot", "Spring Security", "JWT", "Hibernate", "JPA", "REST APIs", "Microservices Ready"],
  Frontend: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML", "CSS"],
  Databases: ["MySQL", "PostgreSQL", "SQLite"],
  Cloud: ["AWS", "Docker", "Git", "GitHub", "Railway", "Vercel", "Cloudinary"]
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A robust technology stack enabling scalable, secure, and modern applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-border/80 bg-background text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

