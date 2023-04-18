import React from "react";
import { useEffect } from "react";
import "./index.css";
import { HeroSection } from "./components/HeroSection";
import { BlockQuote } from "./components/BlockQuote";
import { MyParticles } from "./components/particles";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ScrollArrow } from "./components/ScrollArrow";

const LandingPage = () => {
  // This changes navbar color on scroll. Color the link closest to the center of the screen.
  useEffect(() => {
    const elements = document.querySelectorAll(".observe-me");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const tag = document.querySelector(`a[href="#${id}"]`);
          if (entry.isIntersecting) {
            tag?.classList.add("bg-orange-700");
            tag?.classList.add("md:bg-transparent");
            tag?.classList.add("md:text-orange-700");
          } else {
            tag?.classList.remove("bg-orange-700");
            tag?.classList.remove("md:bg-transparent");
            tag?.classList.remove("md:text-orange-700");
          }
        });
      },
      { threshold: 0.5 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="overflow-hidden bg-zinc-800">
      <div className={"relative bg-zinc-800 min-h-screen"}>
        <div className="bg-zinc-800 -z-10">
          <MyParticles />
        </div>

        <div id="home" className="observe-me mx-4">
          <HeroSection />
          <BlockQuote />
          <ScrollArrow />
        </div>
      </div>
      <div id="skills" className="observe-me relative bg-zinc-900 min-h-screen">
        <Skills />
      </div>
      <div
        id="projects"
        className="observe-me relative bg-zinc-800 min-h-screen"
      >
        <Projects />
      </div>
      <div id="about" className="observe-me relative bg-zinc-900 min-h-screen">
        <About />
      </div>
      <div
        id="contact"
        className="observe-me relative bg-zinc-800 md:min-h-screen"
      >
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
