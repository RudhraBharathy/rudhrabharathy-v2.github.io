"use client";

import React, { useState } from "react";
import { WobbleCard } from "./ui/wobble-card";
import TopRIghtArrow from "./TopRIghtArrow";
import { GrContactInfo } from "react-icons/gr";


const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <WobbleCard
      customFlexClasses="relative"
      containerClassName="min-h-[195px] bg-[#3f2d76]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute bottom-6 left-6">
        <h1 className="text-6xl text-[#FFFFFF]">
          Contact
          <br />
          Me
        </h1>
        <p className="text-lg text-[#FFFFFF]">
          Reach out for collaborations!!
        </p>
      </div>
      <GrContactInfo
        className="absolute bottom-6 right-8"
        size={35}
        color="#FFFFFF"
      />
      <TopRIghtArrow isHovered={isHovered} size={80} />
    </WobbleCard>
  );
};

export default Contact;
