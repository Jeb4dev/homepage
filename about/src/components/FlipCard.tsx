import React from "react";
import { Project } from "./Projects";

interface FlipCardProps {
  project: Project;
}

const FlipCard: React.FC<FlipCardProps> = ({ project }) => {
  const date = new Date(project.created);
  const formattedDate = `Created in ${date.toLocaleDateString("default", {
    month: "long",
  })} ${date.getFullYear()}`;

  return (
    <div className="group h-96 w-[80vw] md:w-full [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {/*<p className="text-white z-20">{project.score}</p>*/}
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 group-hover:blur-sm"
            src={project.cover_img}
            alt="Illustrative image of project"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center">
            <h1 className="text-3xl font-bold pt-8 pb-2">{project.name}</h1>
            <p className="text-lg py-2">{formattedDate}</p>
            <p className="text-base py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <a
              href={project.demo_url ? project.demo_url : ""}
              target="_blank"
              className={project.demo_url ? "block" : "hidden"}
            >
              <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                {project.demo_url ? "See Demo" : ""}
              </button>
            </a>
            <a
              href={project.github_url ? project.github_url : ""}
              target="_blank"
              className={project.github_url ? "block" : "hidden"}
            >
              <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                {project.github_url ? "Source Code" : ""}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
