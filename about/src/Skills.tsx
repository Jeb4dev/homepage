import React from "react";
import {SkillCard} from "./SkillCard";

export const Skills = () => {
    const skillData = [{
        skill: "Backend",
        img: "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275__340.jpg",
        skills: ["Python", "Django", "Flask", "REST API", "Directus", "TypeScript"],
        learnMore: "backend"
    }, {
        skill: "Frontend",
        skills: ["HTML5", "CSS3", "Tailwind", "JS", "TS", "React", "Vue", "Nuxt", "npm", "WordPress"],
        img: "https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825__340.jpg",
        learnMore: "frontend"
    }, {
        skill: "Mobile Development",
        skills: ["Flutter", "Native Android"],
        img: "https://cdn.pixabay.com/photo/2017/01/04/20/15/web-design-1953129_960_720.jpg",
        learnMore: "mobile"
    }, {
        skill: "DevOps",
        skills: ["Docker", "Agile", "Scrum", "CI/CD", "Git", "Ansible"],
        img: "https://thumbs.dreamstime.com/b/devops-agile-development-concept-virtual-screen-devops-agile-development-concept-virtual-screen-145015185.jpg",
        learnMore: "devops"
    }, {
        skill: "Cloud Computing",
        skills: ["AWS", "Azure", "Linux"],
        img: "https://cdn.pixabay.com/photo/2021/08/01/19/00/cloud-6515064_960_720.jpg",
        learnMore: "cloud-computing"
    },
        {
            skill: "Cyber Security",
            skills: ["OWASP", "Offencive Security", "Web", "Burbsuite", "Wireshark"],
            img: "https://cdn.pixabay.com/photo/2018/04/22/22/57/hacker-3342696__340.jpg",
            learnMore: "cyber"
        },]

    return (

        <div id="skills" className="max-w-screen-xl mx-auto p-8 md:px-16">
            <h1 className="text-4xl font-semibold whitespace-nowrap text-white py-16">
                Skills
            </h1>
            <div className="">
                <div id="skills" className="custom-grid">
                    {skillData.map((skills) => (<SkillCard key={skills.skill} content={skills}/>))}
                </div>
            </div>
        </div>);
};


