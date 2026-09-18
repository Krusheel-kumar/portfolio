import { Link } from "react-router-dom";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function CTA() {
  return (
    <SectionWrapper className="bg-muted/50 border-y border-border/50">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to build something amazing?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl">
          Let's collaborate to bring your vision to life with premium design and scalable engineering.
        </p>
        <Link
          to="/start-project"
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform hover:scale-105 active:scale-95"
        >
          Start a Project
        </Link>
      </div>
    </SectionWrapper>
  );
}

