"use client";

import React, { useState } from "react";
import { WobbleCard } from "./ui/wobble-card";
import TopRIghtArrow from "./TopRIghtArrow";
import { IoCameraSharp } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";

const Gallery = () => {
  const [isHovered, setIsHovered] = useState(false);
  const momentsText = [..."Moments"];

  return (
    <WobbleCard
      customFlexClasses="relative"
      containerClassName="h-full bg-[#581f18]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-start items-start flex-col absolute bottom-[1.1rem] left-6">
        {momentsText.map((value, index) => (
          <h1 key={index} className="text-5xl font-nunito text-[#FFFFFF]">
            {value}
          </h1>
        ))}
      </div>
      <GrGallery
        className="absolute bottom-6 right-6"
        size={30}
        color="#FFFFFF"
      />

      <TopRIghtArrow isHovered={isHovered} size={50} />
    </WobbleCard>
  );
};

export default Gallery;
