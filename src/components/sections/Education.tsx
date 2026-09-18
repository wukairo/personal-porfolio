import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Where I'm learning" />
        <article className="education-card">
          <div className="education-icon"><GraduationCap size={25} /></div>
          <div className="education-main"><p className="education-program">{education.program}</p><h3>{education.school}</h3><p>{education.coursework}</p></div>
          <p className="education-period">{education.period}</p>
        </article>
      </div>
    </section>
  );
}
