import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <About />
      <Projects />
      <Skills/>
      <Contact />
    </main>
  );
}
