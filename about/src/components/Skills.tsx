import React, {useEffect, useRef} from "react";
import { SkillCard } from "./SkillCard";

export const Skills = () => {

  const skillData = [
    {
      skill: "Backend",
      img: "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275__340.jpg",
      skills: ["Django", "Flask", "REST API", "SQL", "Directus", "TypeScript"],
      learnMore: "backend",
    },
    {
      skill: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "Tailwind",
        "TS",
        "React",
        "Vue",
        "Nuxt",
        "WordPress",
      ],
      img: "https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825__340.jpg",
      learnMore: "frontend",
    },
    {
      skill: "Mobile Development",
      skills: ["Flutter", "Native Android"],
      img: "https://cdn.pixabay.com/photo/2017/01/04/20/15/web-design-1953129_960_720.jpg",
      learnMore: "mobile",
    },
    {
      skill: "DevOps",
      skills: ["Docker", "Agile", "Scrum", "CI/CD", "Git", "Ansible"],
      img: "https://thumbs.dreamstime.com/b/devops-agile-development-concept-virtual-screen-devops-agile-development-concept-virtual-screen-145015185.jpg",
      learnMore: "devops",
    },
    {
      skill: "Cloud Computing",
      skills: ["AWS", "Azure", "Linux"],
      img: "https://cdn.pixabay.com/photo/2021/08/01/19/00/cloud-6515064_960_720.jpg",
      learnMore: "cloud-computing",
    },
    {
      skill: "Cyber Security",
      skills: ["OWASP", "Offencive Security", "Web", "Burbsuite", "Wireshark"],
      img: "https://cdn.pixabay.com/photo/2018/04/22/22/57/hacker-3342696__340.jpg",
      learnMore: "cyber",
    },
  ];

  const mySkillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mySkillsRef.current == null) {
        return;
    }
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && mySkillsRef.current !== null) {
              mySkillsRef.current.classList.add('visible');
            }
          });
        },
        { threshold: 0.3 }
    );

    observer.observe(mySkillsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-8 md:px-16">
      <h1 className="text-4xl font-semibold whitespace-nowrap text-white">
        Skills
      </h1>
      <div id="skills" ref={mySkillsRef} className="skill-grid py-8 my-skills">
        {skillData.map((skills) => (
          <SkillCard key={skills.skill} content={skills} />
        ))}
      </div>
    </div>
  );
};
