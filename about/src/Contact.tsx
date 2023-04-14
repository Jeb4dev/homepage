import React from "react";
import { FaDiscord, FaEnvelope, FaTelegram } from "react-icons/fa";
import MatrixIcon from "./MatrixIcon";

export const Contact = () => {
  return (
    <div id="contact" className="max-w-screen-xl mx-auto p-8 md:px-16">
      <h1 className="self-center text-4xl font-semibold whitespace-nowrap text-white py-32">
        Contacts
      </h1>

      <div className="overflow-hidden hidden md:block">
        <div className="absolute right-10 top-1/3 transform -translate-y-1/2">
          <span className="block w-[1px] h-[33vh] bg-gray-500"></span>
        </div>

        <svg
          viewBox="0 0 52 24"
          fill="currentColor"
          className="absolute right-0 top-2/3 transform -translate-y-1/2 text-white"
          width="100"
          height="100"
        >
          <defs>
            <pattern id="pattern" x="0" y="0" width=".1" height=".1">
              <circle cx="1" cy="1" r=".7" />
            </pattern>
          </defs>
          <rect fill="url(#pattern)" width="100" height="100" />
        </svg>
      </div>

      <div className="flex row">
        <div className="hidden md:block">
          <img
            src="/contactus.png"
            alt="customer service illustration"
            className="mx-[-12rem]"
          />
          <p className="text-gray-500 text-xs mx-[-6rem] py-2">
            Illustration designed by{" "}
            <a href="https://www.freepik.com" className="hover:underline">
              Freepik
            </a>
          </p>
        </div>
        <div className="text-gray-300 md:ml-[-6rem]">
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
            <h2 className="relative text-3xl font-semibold whitespace-nowrap">
              Let's get in touch
            </h2>
          </span>
          <div>
            <h2 className="md:hidden relative text-3xl font-semibold whitespace-nowrap">
              Let's get in touch
            </h2>
            <p className="py-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <div className="border border-solid">
              <div className="flex gap-6 px-8 pt-8 pb-3">
                <FaEnvelope className="w-6 h-6 text-gray-300" />
                <a href="mailto:contacts@jeb4.dev" className="hover:underline">
                  contacts@jeb4.dev
                </a>
              </div>
              <div className="flex gap-6 px-8 py-3">
                <FaTelegram className="w-6 h-6 text-gray-300" />
                <a
                  href="https://t.me/Jeb444"
                  target="_blank"
                  className="hover:underline"
                >
                  t.me/Jeb444
                </a>
              </div>
              <div className="flex gap-6 px-8 py-3">
                <MatrixIcon className="w-6 h-6 fill-gray-300" />
                <a
                  href="https://matrix.to/#/@jeb4:matrix.org"
                  target="_blank"
                  className="hover:underline"
                >
                  @jeb4:matrix.org
                </a>
              </div>
              <div className="flex gap-6 px-8 py-3 pb-8">
                <FaDiscord className="w-6 h-6 fill-gray-300" />
                <a
                  href="https://discord.com/users/368862359562747916/"
                  target="_blank"
                  className="hover:underline"
                >
                  !Jeb#6466
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
