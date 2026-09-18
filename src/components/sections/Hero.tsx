import Image from "next/image";
import { ArrowDownRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker"><span /> Hello, I&apos;m</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">Software Engineering Student</p>
          <p className="hero-description">I build clean, reliable, and user-focused software while continuously improving my engineering skills.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View Projects <ArrowDownRight size={18} /></a>
            <a className="button button-secondary" href="#contact">Contact Me</a>
            <a className="button button-secondary" href={profile.resumeUrl} download>Download CV <Download size={17} /></a>
          </div>
          <SocialLinks />
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card">
            <div className="visual-avatar-frame">
              <Image src="/images/avatar.jpg" alt="" fill sizes="(max-width: 900px) 330px, 350px" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
