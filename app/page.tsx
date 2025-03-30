import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Blog from "@/components/blog";
import Services from "@/components/services";
import TechStack from "@/components/tech-stack";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Services />
      <TechStack />
      <Contact />
    </main>
  );
}
