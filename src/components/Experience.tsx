"use client";

import React, { useState } from "react";
import { WobbleCard } from "./ui/wobble-card";
import TopRIghtArrow from "./TopRightArrow";
import { FollowerPointerCard } from "./ui/following-pointer";

const experiences = [
  {
    company: "GetBeamer Pvt. Ltd.",
    role: "Implementation Specialist",
    duration: "August 2024 - Present",
  },
  {
    company: "Freelancing",
    role: "Frontend Web Development",
    duration: "August 2022 - Present",
  },
  {
    company: "ToSpace Pvt. Ltd. | Internship",
    role: "Frontend Web Developer",
    duration: "December 2021 - May 2022",
  },
];

const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FollowerPointerCard
      title={
        <div className="flex space-x-2 items-center">
          <p>Click to view my roots</p>
        </div>
      }
      pointerBgColor={0}
    >
      <WobbleCard
        customFlexClasses="relative h-full flex justify-start items-center 2xs:cursor-default xl:cursor-none"
        containerClassName="h-full bg-[#0b525b]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(true)}
      >
        <div className="pl-5 xl:pl-12">
          <div className="flex justify-start items-start flex-col">
            <div className="text-center mb-4"></div>
            <div className="relative border-l border-gray-300/50">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="mb-6 2xmd:mb-4 lg:mb-6 2xl:mb-7 pl-7"
                >
                  <div className="group">
                    <div className="absolute -left-[1.05rem] w-8 h-8 rounded-full bg-gray-300/30 flex items-center justify-center group-hover:animate-ping-slow">
                      <span className="w-4 h-4 bg-gray-100/80 rounded-full"></span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl 2xmd:text-lg lg:text-xl 2xl:text-2xl font-bold text-white">
                        {exp.company}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg 2xmd:text-base 2xl:text-lg italic text-white">
                        {exp.role}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base 2xmd:text-sm 2xl:text-base text-white">
                        {exp.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <TopRIghtArrow isHovered={isHovered} />
      </WobbleCard>
    </FollowerPointerCard>
  );
};

export default Experience;
