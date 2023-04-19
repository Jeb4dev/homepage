import React, { useState, useEffect } from "react";
import FlipCard from "./FlipCard";

export interface Tag {
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
  const [selectedTags, setSelectedTags] = useState<Array<string>>([]);

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

  const handleTags = (tag: string) => {
    let curSelected = selectedTags;
    let index: number = curSelected.indexOf(tag);
    // if tag is already in selectedTags, remove it
    if (index !== -1) {
      curSelected.splice(index, 1);
      // @ts-ignore
      document.getElementById(tag).style.backgroundColor = "transparent";
      // @ts-ignore
      document.getElementById(tag).style.color = "#FFF";
    }
    // else add it
    else {
      curSelected.push(tag);
      // @ts-ignore
      document.getElementById(tag).style.backgroundColor = "#FFF";
      // @ts-ignore
      document.getElementById(tag).style.color = "#000";
    }

    setSelectedTags(curSelected);

    console.log(selectedTags);

    // add project into data if project.tags contains all tags from selectedTags
    // @ts-ignore
    if (selectedTags.length === 0) {
      handleSort({ target: { value: sortOption } }, originalData);
    } else {
      const filteredData: Project[] = [];
      originalData?.forEach((project: Project) => {
        // Confirm that each selectedTags is in project.tags labels
        let match = true;
        selectedTags.forEach((selectedTag) => {
          if (!project.tags.some((tag) => tag.label === selectedTag)) {
            match = false;
          }
        });
        if (match) {
          filteredData.push(project);
        }
      });
      handleSort({ target: { value: sortOption } }, filteredData);
    }
  };

  const handleSort = (event: { target: { value: string } }, _data?: any) => {
    setSortOption(event.target.value);
    const _sortOption = event.target.value;
    let sortedData;
    const sortData: any = _data ? _data : data;
    if (sortData) {
      switch (_sortOption) {
        case "date-new":
          sortedData = [...sortData].sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
          break;
        case "date-old":
          sortedData = [...sortData].sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime());
          break;
        case "name-az":
          sortedData = [...sortData].sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-za":
          sortedData = [...sortData].sort((a, b) => b.name.localeCompare(a.name));
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
    <div className="max-w-screen-xl mx-auto p-8 md:px-16 h-full">
      <h1 className="self-center text-4xl font-semibold whitespace-nowrap text-white">Projects</h1>
      <div className="pt-8">
        <div className="ui form ">
          <div className="field grid">
            <div className="flex flex-col md:flex-row inline-flex w-full gap-4">
              <div className="w-full md:w-[70%]">
                <input
                  className="block appearance-none w-full bg-zinc-900 text-white border hover:border-gray-500 px-4 py-3
                  pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Search by project name..."
                  onChange={handleFilter}
                />
              </div>
              <div className="w-full md:w-[30%]">
                <div className="inline-block relative w-full">
                  <select
                    onChange={handleSort}
                    defaultValue="featured"
                    className="block appearance-none w-full bg-zinc-900 text-white border hover:border-gray-500 px-4
                    py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="featured">Featured</option>
                    <option value="date-new">Newest first</option>
                    <option value="date-old">Oldest first</option>
                    <option value="name-az">A-Z</option>
                    <option value="name-za">Z-A</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 pt-4">
            <div
              id="Web"
              className="hover:scale-110 hover:cursor-pointer border rounded-lg p-2 bg-transparent text-white"
              onClick={() => handleTags("Web")}
            >
              Web
            </div>
            <div
              id="Python"
              className="hover:scale-110 hover:cursor-pointer border rounded-lg p-2 bg-transparent text-white"
              onClick={() => handleTags("Python")}
            >
              Python
            </div>
            <div
              id="JS"
              className="hover:scale-110 hover:cursor-pointer border rounded-lg p-2 bg-transparent text-white"
              onClick={() => handleTags("JS")}
            >
              JavaScript
            </div>
            <div
              id="Game"
              className="hover:scale-110 hover:cursor-pointer border rounded-lg p-2 bg-transparent text-white"
              onClick={() => handleTags("Game")}
            >
              Game
            </div>
          </div>
        </div>
      </div>
      <div className="project-grid py-8">
        {data?.slice(0, 9).map((project: Project) => (
          <FlipCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
