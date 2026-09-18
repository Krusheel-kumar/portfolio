import { Link } from "react-router-dom";

import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  imageUrl: string;
}

export default function ProjectCard({ title, description, tags, href, imageUrl }: ProjectCardProps) {
  return (
    <Link to={href} className="group block">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted mb-6">
          <img
            src={imageUrl}
            alt={`${title} project thumbnail`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 mb-4 text-sm font-medium">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="rounded-full p-2 bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}

