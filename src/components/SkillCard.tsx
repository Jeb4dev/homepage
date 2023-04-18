import React from "react";

interface Content {
  skill: string;
  img: string;
  skills: any[];
  learnMore: string;
}

export const SkillCard = ({ content }: { content: Content }) => {
  return (
    <div className="card-container flex flex-col h-full">
      <div className="overflow-hidden w-full h-44 bg-cover bg-center">
        <img src={content.img} className="h-full w-full" alt="illustrative image of skill" loading="lazy" />
      </div>
      <div className="p-4">
        <h2 className="px-2 block text-2xl font-semibold leading-snug tracking-normal text-gray-800 antialiased">
          {content.skill}
        </h2>
        <ul className="p-2 flex flex-wrap gap-x-5 gap-y-1 justify-start items-start text-gray-600">
          {content.skills.map((skill) => (
            <li className="m-0 p-0" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      {/*<div className="flex items-center justify-center pb-4 mt-auto">*/}
      {/*  <a href={"#" + content.learnMore}>*/}
      {/*    <button*/}
      {/*      className="relative inline-flex items-center justify-center overflow-hidden*/}
      {/*                          text-white font-medium group w-full*/}
      {/*                          bg-gradient-to-br from-orange-700 to-orange-400 group-hover:from-orange-700 group-hover:to-orange-400*/}
      {/*                          focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-900"*/}
      {/*    >*/}
      {/*      <span className="font-bold relative px-5 py-1.5 w-full transition-all ease-in duration-75 bg-orange-500 group-hover:bg-opacity-0">*/}
      {/*        Example projects*/}
      {/*      </span>*/}
      {/*    </button>*/}
      {/*  </a>*/}
      {/*</div>*/}
    </div>
  );
};
