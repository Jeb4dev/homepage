import React from "react";
import "./index.css";
import { HeroSection } from "./components/HeroSection";
import { BlockQuote } from "./components/BlockQuote";
import { MyParticles } from "./components/particles";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <div className={"relative bg-zinc-800 min-h-screen"}>
        <div className="bg-zinc-800 -z-10">
          <MyParticles />
        </div>

        <div id="home">
          <HeroSection />
          <BlockQuote />
        </div>
      </div>
      <div className="relative bg-zinc-900 min-h-screen">
        <Skills />
      </div>
      <div className="relative bg-zinc-800 min-h-screen">
        <Projects />
      </div>
      <div className="relative bg-zinc-900 min-h-screen">
        <About />
      </div>
      <div className="relative bg-zinc-800 min-h-[120vh] md:min-h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
