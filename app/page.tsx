import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Blog from "@/components/blog";
import Services from "@/components/services";
import TechStack from "@/components/tech-stack";
import Contact from "@/components/contact";
import OnlinePlatforms from "@/components/online-platforms";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <OnlinePlatforms />
      <About />
      <Projects />
      <Blog />
      <Services />
      <TechStack />
      <Contact />
    </main>
  );
}
