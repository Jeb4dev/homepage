import React from 'react';
import './index.css';
import {HeroSection} from "./HeroSection";
import {BlockQuote} from "./BlockQuote";
import {MyParticles} from "./particles";
import {Projects} from "./Projects";
import {Skills} from "./Skills";
import {About} from "./About";
import {Contact} from "./Contact";

const LandingPage = () => {
    return (
        <div>
            <div className={"relative bg-zinc-800 min-h-screen"}>
                <div className="bg-zinc-800 -z-10">
                    <MyParticles/>
                </div>

                <div id="home" >
                    <HeroSection/>
                    <BlockQuote/>
                </div>

            </div>
            <div className="relative bg-zinc-900 min-h-screen">
                <Skills/>
            </div>
            <div className="relative bg-zinc-800 min-h-screen">
                <Projects/>

            </div>
            <div className="relative bg-zinc-900 min-h-screen">
                <About/>
            </div>
            <div className="relative bg-zinc-800 min-h-screen">
                <Contact/>
            </div>
        </div>
    );
}

export default LandingPage;
