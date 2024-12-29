"use client";

import React, { useState } from "react";
import { WobbleCard } from "./ui/wobble-card";
import TopRIghtArrow from "./TopRIghtArrow";
import { motion } from "framer-motion";

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
    <WobbleCard
      customFlexClasses="flex justify-start items-center"
      containerClassName="h-full min-h-[400px] bg-[#0b525b] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="pl-12">
        <div className="flex justify-start items-start flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h2 className="text-2xl text-left font-bold text-white">
              My Journey
            </h2>
          </motion.div>
          <div className="relative border-l border-gray-300/50">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-6 pl-7"
              >
                <div className="group">
                  <div className="absolute -left-[1.05rem] w-8 h-8 rounded-full bg-gray-300/30 flex items-center justify-center group-hover:animate-ping-slow">
                    <span className="w-4 h-4 bg-gray-100/80 rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-lg italic text-white">{exp.role}</p>
                    <p className="text-sm text-white">{exp.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <TopRIghtArrow isHovered={isHovered} size={80} />
    </WobbleCard>
  );
};

export default Experience;
