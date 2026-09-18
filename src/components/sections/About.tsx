import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section className="section section-muted" id="about">
      <div className="container about-grid">
        <SectionHeading eyebrow="About" title="A thoughtful approach to software" />
        <div className="about-copy">
          <p>I&apos;m a third-year Software Engineering student with a strong foundation in software development, backend systems, and relational databases.</p>
          <p>Through team-based academic projects, I&apos;ve built full-stack applications involving real-time systems, AI-powered features, authentication, and microservices. I&apos;m seeking a Software Engineering Internship to develop my problem-solving and engineering skills through real-world product development.</p>
        </div>
      </div>
    </section>
  );
}
