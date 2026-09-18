import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="Tools I work with" description="Technologies and engineering practices I have used across my academic projects." />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
