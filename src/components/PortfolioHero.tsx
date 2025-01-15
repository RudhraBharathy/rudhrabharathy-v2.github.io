"use client";

import React, { useEffect, useState } from "react";
import Skills from "./Skills";
import Profile from "./Profile";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Moments from "./Moments";

const PortfolioHero = () => {
  const [showExpSideCnt, setShowExpSideCnt] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isWithinRange = window.innerWidth >= 800 && window.innerWidth < 960;
      setShowExpSideCnt(isWithinRange);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-rows-[1fr_auto] gap-4 2xl:gap-6 max-w-[100rem] mx-auto xl:mx-10 2xl:mx-auto w-full h-full">
      <div className="flex flex-col 2xmd:flex-row gap-4 2xl:gap-6 h-full">
        <div className="w-full 2xmd:w-4/6 xl:w-3/5 flex flex-col justify-center">
          <Profile />
        </div>
        <div className="w-full 2xmd:w-2/6 xl:w-2/5 flex flex-col 2md:flex-row gap-4 2xl:gap-6 justify-center">
          <div className="2md:w-1/2 2xmd:w-full">
            <Experience />
          </div>
          {showExpSideCnt && (
            <div className="w-full 2md:w-1/2 flex flex-col gap-4 2xl:gap-6">
              <Skills />
              <Contact />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 2xl:gap-6 h-full xl:max-h-[350px] 2xl:max-h-full">
        {!showExpSideCnt && (
          <div className="w-full lg:w-4/12 xl:w-5/12 2xl:w-4/12 flex flex-col md:flex-row lg:flex-col gap-4 2xl:gap-6">
            <div className="md:w-1/2 lg:w-full lg:h-full flex flex-col justify-center">
              <Skills />
            </div>
            <div className="md:w-1/2 lg:w-full lg:h-full flex flex-col justify-center">
              <Contact />
            </div>
          </div>
        )}
        <div className="w-full lg:w-8/12">
          <div className="grid grid-cols-1 2xmd:grid-cols-[4fr_1fr] lg:grid-cols-1 xl:grid-cols-[4fr_1fr] h-full gap-4 2xl:gap-6">
            <Projects />
            <Moments />
          </div>
        </div>
      </div>
      <footer className="2xs:text-sm lg:text-base w-full text-white text-center">
        <p>Made with 💙 by Rudhra Bharathy</p>
      </footer>
    </div>
  );
};

export default PortfolioHero;
