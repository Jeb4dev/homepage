import React from "react";
import { Project, Tag } from "./Projects";
import { FaUsers, FaUser } from "react-icons/fa";

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
            <p className="text-base py-4">Unfortunately the description of project in not yet available.</p>
            <div>
              <a
                href={project.demo_url ? project.demo_url : ""}
                target="_blank"
                className={project.demo_url ? "block" : "hidden"}
              >
                <button className="mt-2 rounded-md bg-transparent border border-orange-700 py-1 px-2 text-lg hover:bg-orange-700">
                  See Demo
                </button>
              </a>
              <a
                href={project.github_url ? project.github_url : ""}
                target="_blank"
                className={project.github_url ? "block" : "hidden"}
              >
                <button className="mt-2 rounded-md bg-transparent border border-orange-700 py-1 px-2 text-lg hover:bg-orange-700">
                  Source Code
                </button>
              </a>
            </div>
            <ul className="flex flex-row gap-2 m-2">
              {project.tags?.slice(0, 6).map((tag: Tag) => (
                <li
                  key={tag.id}
                  className="py-1 px-2 border rounded-xl text-sm"
                  title={"Projects can be categorized by their tags."}
                >
                  {tag.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute top-4 right-4 right-0">
            {/*  team or solo project */}
            <p
              className="text-2xl font-bold text-white hover:cursor-pointer"
              title={project.team ? "Team Project" : "Solo Project"}
            >
              {project.team ? <FaUsers/> : <FaUser/>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
