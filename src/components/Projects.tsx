"use client";

import React, { useState } from "react";
import { WobbleCard } from "./ui/wobble-card";
import TopRightArrow from "./TopRIghtArrow";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <WobbleCard
      customFlexClasses="flex justify-center items-center"
      containerClassName="h-full bg-[#4d194d] min-h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TopRightArrow isHovered={isHovered} size={80} />
    </WobbleCard>
  );
};

export default Projects;
