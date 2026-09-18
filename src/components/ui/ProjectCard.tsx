import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-number">0{index + 1}</div>
      <div className="project-meta"><span>{project.period}</span><span>{project.role}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
      </div>
      {(project.githubUrl || project.demoUrl) && (
        <div className="project-links">
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={17} />Source</a>}
          {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer"><ArrowUpRight size={17} />Live demo</a>}
        </div>
      )}
    </article>
  );
}
