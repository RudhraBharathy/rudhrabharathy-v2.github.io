"use client";

import React from "react";
import Skills from "./Skills";
import Profile from "./Profile";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";

const PortfolioHero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 max-w-[95rem] mx-auto w-full">
      <Profile />
      <Experience />
      <div className="col-span-1 min-h-[100px] flex flex-col gap-7">
        <Skills />
        <Contact />
      </div>
      <Projects />
    </div>
  );
};

export default PortfolioHero;
