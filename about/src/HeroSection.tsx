import { FaEnvelope, FaGithub, FaTelegram } from "react-icons/fa";
import React from "react";
import MatrixIcon from "./MatrixIcon";
import { AnimatedText } from "./Animation";

export const HeroSection = () => {
  return (
    <div>
      <div className="hidden fixed md:flex flex-col items-center justify-center left-6 gap-4 top-0 media-header z-10">
        <span className="block w-[1px] h-[33vh] bg-gray-500"></span>
        <div className="grid gap-2">
          <a href="" title="GitHub">
            <FaGithub className="w-6 h-6 text-gray-500 hover:text-gray-400 hover:cursor-pointer" />
          </a>
          <a href="mailto:contact@jeb4.dev" title="Email">
            <FaEnvelope className="w-6 h-6 text-gray-500 hover:text-gray-400 hover:cursor-pointer" />
          </a>
          <a href="https://t.me/Jeb444" title="Telegram">
            <FaTelegram className="w-6 h-6 text-gray-500 hover:text-gray-400 hover:cursor-pointer" />
          </a>
          <a href="https://matrix.to/#/@jeb4:matrix.org" title="Matrix">
            <MatrixIcon className="w-6 h-6 fill-gray-500 hover:fill-gray-400 hover:cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="px-4 pt-16 pb-6 md:pt-48 md:pb-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-white lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                        x="0"
                        y="0"
                        width=".145"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">I am</span>
                </span>{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                  <AnimatedText />
                </span>
              </h2>
              <p className="text-base text-white md:text-lg">
                Welcome! I'm Jeb, a software developer with a passion for
                creating innovative solutions and ensuring cybersecurity. Take a
                look around to learn more about my skills and experience.
              </p>
            </div>
            <div>
              <a href="#contact">
                <button
                  className="relative inline-flex items-center justify-center p-[1px] overflow-hidden
                                text-lg font-medium text-white rounded-sm group
                                bg-gradient-to-br from-orange-700 to-orange-400 group-hover:from-orange-700 group-hover:to-orange-400
                                focus:ring-1 focus:outline-none focus:ring-orange-600"
                >
                  <span className="font-bold relative px-5 py-1.5 transition-all ease-in duration-75 bg-zinc-800 dark:bg-zinc-800 group-hover:bg-opacity-0">
                    Contact me
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
