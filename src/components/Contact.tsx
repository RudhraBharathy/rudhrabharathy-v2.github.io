"use client";

import React, { useState } from "react";
import { WobbleCard } from "./ui/wobble-card";
import { GoArrowUpRight } from "react-icons/go";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <WobbleCard
      customFlexClasses="relative"
      containerClassName="min-h-[195px] bg-[#3f2d76]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <div className="absolute bottom-6 left-6">
          <h1 className="text-6xl font-nunito text-[#FFFFFF]">
            Contact
            <br />
            Me
          </h1>
        </div>
        <div
          className="absolute top-2 right-2"
          style={{
            top: isHovered ? "0.5rem" : "1rem",
            right: isHovered ? "0.5rem" : "1rem",
            transition: "top 0.2s ease, right 0.2s ease",
          }}
        >
          <GoArrowUpRight color="#FFFFFF" size={100} />
        </div>
      </div>
    </WobbleCard>
  );
};

export default Contact;
