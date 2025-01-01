"use client";
//Todo: On hover each to show skill name
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";
import CSS from "../../public/svgs/css.svg";
import Github from "../../public/svgs/github.svg";
import JavaScript from "../../public/svgs/javascript.svg";
import NextJS from "../../public/svgs/nextjs.svg";
import Tailwind from "../../public/svgs/tailwind.svg";
import Docker from "../../public/svgs/docker.svg";
import Git from "../../public/svgs/git.svg";
import MUI from "../../public/svgs/mui.svg";
import Schdcn from "../../public/svgs/schdcn.svg";
import ReactSVG from "../../public/svgs/react.svg";
import TypeScript from "../../public/svgs/typescript.svg";
import Figma from "../../public/svgs/figma.svg";
import HTML from "../../public/svgs/html.svg";
import MySQL from "../../public/svgs/mysql.svg";
import Supabase from "../../public/svgs/supabase.svg";
import Ubuntu from "../../public/svgs/ubuntu.svg";

const Skills = () => {
  const icons = [
    { src: HTML, alt: "HTML Logo", color: "#F34F29" },
    { src: CSS, alt: "CSS Logo", color: "#1572B6" },
    { src: JavaScript, alt: "JavaScript Logo", color: "#F7DF1E" },
    { src: TypeScript, alt: "TypeScript Logo", color: "#3178C6" },
    { src: ReactSVG, alt: "React Logo", color: "#61DAFB" },
    { src: NextJS, alt: "NextJS Logo", color: "#000000" },
    { src: Tailwind, alt: "Tailwind Logo", color: "#36B7F0" },
    { src: Supabase, alt: "Supabase Logo", color: "#3ECF8E" },
    { src: MySQL, alt: "MySQL Logo", color: "#11aced" },
    { src: Git, alt: "Git Logo", color: "#F34F29" },
    { src: Github, alt: "Github Logo", color: "#FFFFFF" },
    { src: MUI, alt: "MUI Logo", color: "#007FFF" },
    { src: Schdcn, alt: "Schdcn Logo", color: "#FFFFFF" },
    { src: Docker, alt: "Docker Logo", color: "#2496ED" },
    { src: Figma, alt: "Figma Logo", color: "#A259FF" },
    { src: Ubuntu, alt: "Ubuntu Logo", color: "#E44D26" },
  ];

  return (
    <WobbleCard
      customFlexClasses="flex justify-center items-center"
      containerClassName="min-h-[195px] bg-[#7c162e]"
    >
      <div className="flex flex-wrap justify-center items-center gap-1 cursor-pointer">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="p-2 inline-block rounded-lg m-1"
            style={{
              backgroundColor: `${icon.color}44`,
              transition: "background-color .1s ease, border .1s ease",
              border: `1px solid ${icon.color}22`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${icon.color}22`;
              e.currentTarget.style.border = `1px solid ${icon.color}`;
              const image = e.currentTarget.querySelector("img");
              if (image) {
                image.style.transform = "scale(1.2)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `${icon.color}44`;
              e.currentTarget.style.border = `1px solid ${icon.color}22`;
              const image = e.currentTarget.querySelector("img");
              if (image) {
                image.style.transform = "scale(1)";
              }
            }}
          >
            <Image
              alt={icon.alt}
              src={icon.src}
              className="w-8 h-8 transition duration-100 ease-in"
              style={{
                transition: "transform .1s ease-in-out",
              }}
            />
          </div>
        ))}
      </div>
    </WobbleCard>
  );
};

export default Skills;