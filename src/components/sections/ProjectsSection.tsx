"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";


const projects = [
  {
    title: "Restaurant Order Management System",
    description: "A comprehensive solution for restaurants to handle online orders, delivery tracking, and inventory.",
    features: ["Online Ordering", "Admin Dashboard", "Delivery Radius", "Inventory", "Payments", "Customer Management", "Analytics"],
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT", "Cloudinary", "Razorpay"],
    image: "/images/project_1.jpg", // Using placeholder image for now
  },
  {
    title: "Cloud Cost Optimization Dashboard",
    description: "An analytics platform that monitors AWS usage and provides actionable insights to reduce cloud infrastructure costs.",
    features: ["AWS Monitoring", "Analytics", "Charts", "Reports", "Optimization", "Python Automation"],
    tech: ["Python", "AWS", "React", "Tailwind CSS", "PostgreSQL"],
    image: "/images/project_2.jpg",
  },
  {
    title: "Log Analytics Platform",
    description: "Real-time log aggregation and security monitoring tool designed for enterprise applications.",
    features: ["Real-time Logs", "Security Monitoring", "Error Tracking", "Analytics", "Performance Insights"],
    tech: ["Elasticsearch", "Java", "Spring Boot", "React", "WebSockets"],
    image: "/images/project_1.jpg",
  },
  {
    title: "Premium Business Websites",
    description: "Modern, high-conversion websites built specifically for startups and local businesses.",
    features: ["SEO Optimized", "CMS Integration", "Animations", "Responsive Design", "Lead Generation"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/project_2.jpg",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-card/30 border-y border-border/30">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of complex applications and premium software solutions.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 bg-background">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-foreground">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map(feature => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-success mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="#" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
                    Live Demo <ExternalLink size={16} className="ml-2" />
                  </a>
                  <a href="#" className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold transition-all hover:bg-muted">
                    Source Code <Code size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

