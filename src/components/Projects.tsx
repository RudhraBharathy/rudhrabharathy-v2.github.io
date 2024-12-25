"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const Projects = () => {
  return (
    <WobbleCard
      customFlexClasses="flex justify-start items-start"
      containerClassName="col-span-1 lg:col-span-2 h-full bg-[#4d194d] min-h-[500px] lg:min-h-[400px]"
    ></WobbleCard>
  );
};

export default Projects;
