"use client";

import React, { useState, useEffect } from "react";
import { WobbleCard } from "./ui/wobble-card";
import TopRIghtArrow from "./TopRightArrow";
import { GrContactInfo } from "react-icons/gr";
import { FollowerPointerCard } from "./ui/following-pointer";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <FollowerPointerCard
      title={
        <div className="flex space-x-2 items-center">
          <p>Click to message me</p>
        </div>
      }
      pointerBgColor={1}
    >
      <WobbleCard
        customFlexClasses="relative 2xs:cursor-default xl:cursor-none"
        containerClassName="min-h-[150px] lg:min-h-[195px] bg-[#3f2d76]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(true)}
      >
        <div className="flex justify-start items-start flex-col absolute bottom-4 left-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFFFFF] leading-tight">
            Contact
            {isSmallScreen ? <> </> : <br />}
            Me
          </h1>
        </div>
        <GrContactInfo
          className="absolute bottom-4 right-4"
          size={35}
          color="#FFFFFF"
        />
        <TopRIghtArrow isHovered={isHovered} />
      </WobbleCard>
    </FollowerPointerCard>
  );
};

export default Contact;
