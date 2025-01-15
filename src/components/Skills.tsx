"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";

const Skills = () => {
  const icons = [
    { src: "/svg/html.svg", alt: "HTML Logo", color: "#F34F29" },
    { src: "/svg/css.svg", alt: "CSS Logo", color: "#1572B6" },
    { src: "/svg/javascript.svg", alt: "JavaScript Logo", color: "#F7DF1E" },
    { src: "/svg/typescript.svg", alt: "TypeScript Logo", color: "#3178C6" },
    { src: "/svg/react.svg", alt: "React Logo", color: "#61DAFB" },
    { src: "/svg/nextjs.svg", alt: "NextJS Logo", color: "#000000" },
    { src: "/svg/tailwind.svg", alt: "Tailwind Logo", color: "#36B7F0" },
    { src: "/svg/supabase.svg", alt: "Supabase Logo", color: "#3ECF8E" },
    { src: "/svg/mysql.svg", alt: "MySQL Logo", color: "#11aced" },
    { src: "/svg/git.svg", alt: "Git Logo", color: "#F34F29" },
    { src: "/svg/github.svg", alt: "Github Logo", color: "#FFFFFF" },
    { src: "/svg/mui.svg", alt: "MUI Logo", color: "#007FFF" },
    { src: "/svg/schdcn.svg", alt: "Schdcn Logo", color: "#FFFFFF" },
    { src: "/svg/docker.svg", alt: "Docker Logo", color: "#2496ED" },
    { src: "/svg/figma.svg", alt: "Figma Logo", color: "#A259FF" },
    { src: "/svg/ubuntu.svg", alt: "Ubuntu Logo", color: "#E44D26" },
  ];

  return (
    <WobbleCard
      customFlexClasses="flex justify-center items-center"
      containerClassName="min-h-[150px] 2xl:min-h-[195px] bg-[#7c162e]"
    >
      <div className="flex flex-wrap justify-center items-center sm:gap-2 md:gap-1 cursor-pointer">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="p-1 1xl:p-2 rounded-lg m-1"
            style={{
              backgroundColor: `${icon.color}33`,
              transition: "background-color .1s ease, border .1s ease",
              border: `1px solid ${icon.color}22`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${icon.color}22`;
              e.currentTarget.style.border = `1px solid ${icon.color}`;
              const image = e.currentTarget.querySelector("img");
              if (image) {
                image.style.transform = "scale(1.1)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `${icon.color}33`;
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
              width={18}
              height={18}
              className="2xs:w-7 2xs:h-7 2xl:w-8 2xl:h-8 w-6 h-6 transition duration-100 ease-in"
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
