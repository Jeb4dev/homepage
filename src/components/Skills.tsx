import React, { useEffect, useRef } from "react";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const skillData = [
    {
      skill: "Backend",
      img: "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275__340.jpg",
      skills: ["REST", "Flask", "Django", "Python", "TypeScript", "SQL", "Golang"],
      learnMore: "backend",
    },
    {
      skill: "Frontend",
      skills: ["Vue", "Nuxt", "React", "Svelte", "Tailwind", "TypeScript", "WordPress"],
      img: "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061963.jpg?w=1380",
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
      skills: ["Git", "Agile", "Scrum", "CI/CD", "Docker", "Ansible", "Vagrant"],
      img: "https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=1380&t=st=1681861891~exp=1681862491~hmac=4cfb53602e41fe16870a6c7bf3abe1eee8d7e70bae0d4f8f0ba32bc069341a4f",
      learnMore: "devops",
    },
    {
      skill: "Cloud Computing",
      skills: ["Azure", "AWS", "Linux"],
      img: "https://cdn.pixabay.com/photo/2021/08/01/19/00/cloud-6515064_960_720.jpg",
      learnMore: "cloud-computing",
    },
    {
      skill: "Cyber Security",
      skills: ["Web Security", "OWASP", "nmap", "Burbsuite", "Wireshark", "Networking"],
      img: "https://cdn.pixabay.com/photo/2018/04/22/22/57/hacker-3342696__340.jpg",
      learnMore: "cyber",
    },
  ];

  const mySkillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-8 md:px-16">
      <h1 className="text-4xl font-semibold whitespace-nowrap text-white">Skills</h1>
      <div id="skills" ref={mySkillsRef} className="skill-grid py-8">
        {skillData.map((skills, index) => (
          <div
            key={skills.skill}
            ref={(el) => { cardRefs.current[index] = el; }}
            className="skill-card-wrapper"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <SkillCard content={skills} />
          </div>
        ))}
      </div>
    </div>
  );
};
