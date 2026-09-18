import { IntroSequence } from "@/components/intro/IntroSequence";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function Home() {
  return (
    <>
      <IntroSequence />
      <div className="site-shell">
        <Header />
        <main>
          <Hero />
          <RevealOnScroll><About /></RevealOnScroll>
          <RevealOnScroll><Skills /></RevealOnScroll>
          <RevealOnScroll><Projects /></RevealOnScroll>
          <RevealOnScroll><Education /></RevealOnScroll>
          <RevealOnScroll><Contact /></RevealOnScroll>
        </main>
        <Footer />
      </div>
    </>
  );
}
