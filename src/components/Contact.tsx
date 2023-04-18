import React from "react";
import { FaDiscord, FaEnvelope, FaTelegram } from "react-icons/fa";
import MatrixIcon from "./MatrixIcon";

export const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-8 md:px-16">
      <h1 className="self-center text-4xl font-semibold whitespace-nowrap text-white pb-8 md:pb-16">Contacts</h1>

      <div className="overflow-hidden">
        <div className="absolute right-10 top-1/3 transform -translate-y-1/2 hidden md:block">
          <span className="block w-[1px] h-[33vh] bg-gray-500"></span>
        </div>

        <svg
          viewBox="0 0 52 24"
          fill="currentColor"
          className="absolute right-0 top-0 md:top-3/4 transform md:-translate-y-1/2 text-white"
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

      <div className="md:flex row">
        <div className="absolute md:relative hidden md:block ">
          <div className="relative">
            <img
              src="/contactus.webp"
              alt="customer service illustration"
              className="md:-ml-32 md:mt-16 lg:-ml-32 lg:mt-4 xl:-ml-0 xl:mt-8 xl:h-[70%] xl:w-[70%]"
              width="1862"
              height="1378"
              loading={"lazy"}
            />
            <p className="text-gray-500 text-xs -mx-14 xl:mx-14 py-2">
              Illustration designed by{" "}
              <a href="https://www.freepik.com" className="hover:underline" target="_blank">
                Freepik
              </a>
            </p>
          </div>
        </div>
        <div className="text-gray-300 md:ml-[-6rem] z-10">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-white lg:w-32 lg:-ml-28 lg:-mt-10 md:block"
            >
              <defs>
                <pattern id="700c93bf-0068-4e32-aafe-ef5b6a647708" x="0" y="0" width=".145" height=".30">
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)" width="52" height="24" />
            </svg>
            <h2 className="relative text-3xl font-semibold whitespace-nowrap">Let's get in touch</h2>
          </span>
          <div>
            <p className="pt-8 pb-2">
              Thank you for visiting my website. I hope you enjoyed learning more about me and my software skills. If
              you want to work with me or just say hi, feel free to reach out to me. You can find my contact details
              below.
            </p>
            <p className="pt-2 pb-8">
              Whether you want to collaborate on a project, hire me for a freelance job, or just chat, I'll try to
              respond as soon as possible. I look forward to hearing from you!
            </p>
          </div>
          <div className="pb-[30vw] md:pb-0">
            <div className="border border-solid z-50 bg-zinc-800">
              <div className="flex gap-6 px-8 pt-8 pb-3">
                <FaEnvelope className="w-6 h-6 text-gray-300" />
                <a href="mailto:contacts@jeb4.dev" className="hover:underline">
                  contacts@jeb4.dev
                </a>
              </div>
              <div className="flex gap-6 px-8 py-3">
                <FaTelegram className="w-6 h-6 text-gray-300" />
                <a href="https://t.me/Jeb444" target="_blank" className="hover:underline">
                  t.me/Jeb444
                </a>
              </div>
              <div className="flex gap-6 px-8 py-3">
                <MatrixIcon className="w-6 h-6 fill-gray-300" />
                <a href="https://matrix.to/#/@jeb4:matrix.org" target="_blank" className="hover:underline">
                  @jeb4:matrix.org
                </a>
              </div>
              <div className="flex gap-6 px-8 py-3 pb-8">
                <FaDiscord className="w-6 h-6 fill-gray-300" />
                <a href="https://discord.com/users/368862359562747916/" target="_blank" className="hover:underline">
                  !Jeb#6466
                </a>
              </div>
            </div>
          </div>
          <div className="absolute">
            <img
              src="/contactus.webp"
              alt="customer service illustration"
              className="-ml-32 -mt-[30vw] block md:hidden"
              width={1862}
              height={1378}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
