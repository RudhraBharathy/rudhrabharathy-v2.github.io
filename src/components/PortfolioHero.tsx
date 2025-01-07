"use client";

import React from "react";
import Skills from "./Skills";
import Profile from "./Profile";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Moments from "./Moments";
import { FollowerPointerCard } from "./ui/following-pointer";

const TitleComponent = ({ title }: { title: string }) => (
  <div className="flex space-x-2 items-center">
    <p>{title}</p>
  </div>
);

const PortfolioHero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-rows-[1fr_auto] gap-6 max-w-[100rem] mx-auto w-full h-full min-h-[90vh]">
      <div className="flex flex-col lg:flex-row gap-6 h-full">
        <div className="w-full lg:w-3/5 flex flex-col justify-center">
          <Profile />
        </div>
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
          <FollowerPointerCard
            title={<TitleComponent title={"Click to view my roots"} />}
            pointerBgColor={0}
          >
            <Experience />
          </FollowerPointerCard>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 h-full">
        <div className="w-full lg:w-4/12 flex flex-col md:flex-row lg:flex-col gap-6">
          <div className="md:w-1/2 lg:w-full flex flex-col justify-center">
            <Skills />
          </div>
          <div className="md:w-1/2 lg:w-full flex flex-col justify-center">
            <FollowerPointerCard
              title={<TitleComponent title={"Click to message me"} />}
              pointerBgColor={1}
            >
              <Contact />
            </FollowerPointerCard>
          </div>
        </div>
        <div className="w-full lg:w-8/12">
          <div className="grid grid-cols-1 lg:grid-cols-[78%_20%] h-full gap-6">
            <Projects />
            <div className="">
              <Moments />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-white text-center">
        <p>Made with 💙 by Rudhra Bharathy</p>
      </div>
    </div>
  );
};

export default PortfolioHero;