"use client";

import React, { useState } from "react";
import Skills from "./Skills";
import Profile from "./Profile";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Gallery from "./Gallery";
import { FollowerPointerCard } from "./ui/following-pointer";

const TitleComponent = ({ title }: { title: string }) => (
  <div className="flex space-x-2 items-center">
    <p>{title}</p>
  </div>
);

const PortfolioHero = () => {
  return (
    <div className="grid grid-cols-1 md:grid grid-rows-[1fr_1fr] gap-6 max-w-[100rem] mx-auto w-full">
      <div className="flex gap-6">
        <div className="w-3/5">
          <Profile />
        </div>
        <div className="w-2/5">
          <FollowerPointerCard
            title={<TitleComponent title={"Click to view my roots"} />}
          >
            <Experience />
          </FollowerPointerCard>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-4/12 min-h-[100px] flex flex-col gap-6">
          <Skills />
          <FollowerPointerCard
            title={<TitleComponent title={"Click to message me"} />}
          >
            <Contact />
          </FollowerPointerCard>
        </div>
        <div className="w-8/12">
          <div className="grid grid-cols-[78%_20%] h-full gap-6">
            <Projects />
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
