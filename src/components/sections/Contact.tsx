import { SocialLinks } from "@/components/ui/SocialLinks";

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s build something<br /><span>together</span></h2>
        <p>I&apos;m currently seeking a Software Engineering Internship and would be glad to discuss opportunities, projects, or ideas.</p>
        <SocialLinks />
      </div>
    </section>
  );
}
