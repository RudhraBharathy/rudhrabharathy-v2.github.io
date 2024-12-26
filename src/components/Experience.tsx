"use client";

import React, { useState } from "react";
import { WobbleCard } from "./ui/wobble-card";
import TopRIghtArrow from "./TopRIghtArrow";

const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <WobbleCard
      customFlexClasses="flex justify-center items-center"
      containerClassName="h-full min-h-[400px] bg-[#0b525b] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <TopRIghtArrow isHovered={isHovered} size={80} />
    </WobbleCard>
  );
};

export default Experience;
