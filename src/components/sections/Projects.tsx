import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section className="section section-dark" id="projects">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Projects built with purpose" description="Team-based applications spanning real-time collaboration, AI-assisted workflows, and full-stack product development." />
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
