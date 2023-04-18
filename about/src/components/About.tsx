import React from "react";

export const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-8 md:px-16">
      <h1 className="self-center text-4xl font-semibold whitespace-nowrap text-white">
        About
      </h1>
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

      <div className="md:flex row gap-8 items-center py-4">
        <div className="text-gray-300 md:text-justify w-full leading-relaxed md:-mr-32 pb-8">
          <div className="py-4">
            I’m Jeb, a Finnish software developer and ethical hacker with a
            passion for night skies. I have been coding for approximately four
            years mostly on my free time doing various of projects. One of my
            hobbies is photography, particularly capturing the beauty of the
            stars and moon. I also like to cook, play video games, ice skating
            on frozen lakes in winter. I also listen to IT and cyber security
            podcasts. Some of my favorites are "Darknet Diaries", "Command Line
            Heroes" and "Herrasmieshakkerit".
          </div>
          <div className="py-4">
            I have four years of experience in web, mobile, and desktop
            development using various languages and frameworks. I have worked on
            different projects for different clients and industries. I’m
            passionate about creating secure and innovative software solutions
            that can make a positive impact on the world. I’m currently looking
            for a job as a software developer where I can apply my skills and
            learn new ones.
          </div>
          <div className="py-4">
            I aim to be an ethical hacker and secure society from cyber attacks.
            To improve my skills on hacking challenges and platforms, such as
            GenZ and HackTheBox, where I solve CTF challenges and learn new
            methods. I have attended Disobey, a hacking event where I learned
            from experienced cyber security professionals and participated in
            the Capture the Flag competition with team Europe-ish?, winning
            first place. I’m always curious about cyber security topics and I
            use TryHackMe to study and learn more. This is my field of passion
            and I’m looking for opportunities to excel.
          </div>
          <div className="py-4">
            I’m always looking for new opportunities and challenges, so feel
            free to contact me if you want to work with me or know more about me
            or my skills and projects.
          </div>
        </div>
        <div className="hidden md:block">
          <div>
            <img
              src="/about.webp"
              alt="customer service illustration"
              className="xl:w-[100%] ml-36"
              loading="lazy"
            />
            <p className="text-gray-500 text-xs ml-48 whitespace-nowrap">
              Illustration designed by{" "}
              <a
                href="https://www.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_11668583.htm"
                className="hover:underline"
                target="_blank"
              >
                vectorjuice / Freepik
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
