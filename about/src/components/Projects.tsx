import React, { useState, useEffect } from "react";
import FlipCard from "./FlipCard";

interface Tag {
  id: number;
  project_id: number;
  label: string;
}

export interface Project {
  github_url: string;
  demo_url: string;
  name: string;
  cover_img: string;
  created: string;
  score: number;
  id: number;
  team: boolean;
  tags: [Tag];
}

export const Projects = () => {
  const url = "https://projects.jeb4.dev/api";

  const [data, setData] = useState<Project[] | null>(null);
  let [originalData, setOriginalData] = useState<Project[] | null>(null);
  const [sortOption, setSortOption] = useState("featured");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((_data: [Project]) => {
        setOriginalData(_data);
        setData(_data);
        handleSort({ target: { value: sortOption } }, _data);
      });
  }, [url]);

  const handleFilter = (event: { target: { value: string } }) => {
    if (event.target.value === "") {
      setData(originalData);
    } else {
      const filteredData = originalData?.filter((project: Project) =>
        project.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      if (filteredData !== undefined) {
        setData(filteredData);
      }
    }
  };

  const handleSort = (event: { target: { value: string } }, _data?: any) => {
    const sortOption = event.target.value;
    let sortedData;
    const sortData: any = originalData ? originalData : _data;
    if (sortData) {
      switch (sortOption) {
        case "date-new":
          sortedData = [...sortData].sort(
            (a, b) =>
              new Date(b.created).getTime() - new Date(a.created).getTime()
          );
          break;
        case "date-old":
          sortedData = [...sortData].sort(
            (a, b) =>
              new Date(b.created).getTime() - new Date(a.created).getTime()
          );
          break;
        case "name-az":
          sortedData = [...sortData].sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          break;
        case "name-za":
          sortedData = [...sortData].sort((a, b) =>
            b.name.localeCompare(a.name)
          );
          break;
        default:
          sortedData = [...sortData].sort((a, b) => b.score - a.score);
      }
    }
    if (sortedData !== undefined) {
      setData(sortedData);
    }
  };

  return (
    <div id="projects" className="max-w-screen-xl mx-auto p-8 md:px-16 h-full">
      <h1 className="self-center text-4xl font-semibold whitespace-nowrap text-white py-16">
        Projects
      </h1>
      <div>
        <div className="ui form ">
          <div className="field grid">
            <div className="flex flex-col md:flex-row inline-flex w-full gap-4">
              <div className="w-full md:w-[70%]">
                <input
                  className="block appearance-none w-full bg-zinc-900 text-white border hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Search by project name..."
                  onChange={handleFilter}
                />
              </div>
              <div className="w-full md:w-[30%]">
                <div className="inline-block relative w-full">
                  <select
                    onChange={handleSort}
                    className="block appearance-none w-full bg-zinc-900 text-white border hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="featured" selected>
                      Featured
                    </option>
                    <option value="date-new">Newest first</option>
                    <option value="date-old">Oldest first</option>
                    <option value="name-az">A-Z</option>
                    <option value="name-za">Z-A</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="tags searchbar Web" onClick="ToggleTag('Web')">Web</div>*/}
          {/*<div className="tags searchbar Python" onClick="ToggleTag('Python')">Python</div>*/}
          {/*<div className="tags searchbar JS" onClick="ToggleTag('JS')">JavaScript</div>*/}
          {/*<div className="tags searchbar Game" onClick="ToggleTag('Game')">Game</div>*/}
        </div>
      </div>
      <div className="project-grid py-8">
        {data?.slice(0, 6).map((project: Project) => (
          <FlipCard project={project} />
        ))}
      </div>
    </div>
  );
};
