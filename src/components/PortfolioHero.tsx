"use client";

import React from "react";
import Skills from "./Skills";
import Profile from "./Profile";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Gallery from "./Gallery";

const PortfolioHero = () => {
  return (
    <div className="grid grid-rows-[1fr_1fr] gap-6 max-w-[100rem] mx-auto w-full">
      <div className="flex gap-6">
        <div className="w-3/5">
          <Profile />
        </div>
        <div className="w-2/5">
          <Experience />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-4/12 min-h-[100px] flex flex-col gap-6">
          <Skills />
          <Contact />
        </div>
        <div className="w-8/12">
        <div className="grid grid-cols-[78%_20%] h-full gap-6">
          <Projects />
          <div className="min-h-[100px] flex flex-col gap-6">
          <Gallery />
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
