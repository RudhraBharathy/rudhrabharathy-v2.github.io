"use client";

import React, { useState } from "react";
import { WobbleCard } from "./ui/wobble-card";
import TopRightArrow from "./TopRIghtArrow";
import { FloatingDock } from "@/components/ui/floating-dock";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { LuListTodo } from "react-icons/lu";
import { MdLocalAtm } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { GoWorkflow } from "react-icons/go";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const links = [
    {
      itemId: 1,
      title: "Weather Forcastify",
      icon: (
        <TiWeatherPartlySunny className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      itemId: 2,
      title: "ToDo",
      icon: (
        <LuListTodo className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      itemId: 3,
      title: "ATM Card Validator",
      icon: (
        <MdLocalAtm className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      itemId: 4,
      title: "Login & Register Forms",
      icon: (
        <IoIosLogIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      itemId: 5,
      title: "Collaborative Task Management",
      icon: (
        <GoWorkflow className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  const CARDS = [
    {
      id: 1,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
        <p>
          id: 1, These cards are amazing,{" "}
          <Highlight>I want to use them</Highlight> in my project. Framer motion
          is a godsend ngl tbh fam 🙏
        </p>
      ),
      githubLink: "https://github.com/ManuArora",
      externalLink: "https://manuarora.in",
    },
    {
      id: 2,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <p>
          id: 2, I dont like this Twitter thing,{" "}
          <Highlight>deleting it right away</Highlight> because yolo. Instead, I
          would like to call it <Highlight>X.com</Highlight> so that it can
          easily be confused with adult sites.
        </p>
      ),
      githubLink: "https://github.com/elonmusk",
      externalLink: "https://x.com",
    },
    {
      id: 3,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      content: (
        <p>
          id: 3, The first rule of
          <Highlight>Fight Club</Highlight> is that you do not talk about fight
          club. The second rule of
          <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
          club.
        </p>
      ),
      githubLink: "https://github.com/tylerdurden",
      externalLink: "https://fightclub.com",
    },
    {
      id: 4,
      name: "Lorem Ipsum",
      designation: "Content Creator",
      content: (
        <p>
          id: 4, Lorem ipsum dolor sit amet.
          <Highlight>ipsum dolor</Highlight> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorum, laudantium.
          <Highlight>ipsum dolor</Highlight> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Esse tempora aut modi necessitatibus
          architecto!
        </p>
      ),
      githubLink: "https://github.com/loremipsum",
      externalLink: "https://loremipsum.io",
    },
    {
      id: 5,
      name: "Consectetur Adipisicing",
      designation: "Full-Stack Developer",
      content: (
        <p>
          id: 5, Lorem, ipsum dolor sit amet consectetur adipisicing.
          <Highlight>wet modi necessitat</Highlight>
          <Highlight>wewt modi necessitat</Highlight> is that you DO NOT TALK
          about fight club.
        </p>
      ),
      githubLink: "https://github.com/consectetur",
      externalLink: "https://adipisicing.dev",
    },
  ];

  return (
    <WobbleCard
      customFlexClasses="flex justify-center items-end"
      containerClassName="h-full bg-[#4d194d] min-h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center flex-col w-full">
        <div className="flex items-center justify-center w-full pb-10">
          <CardStack items={CARDS} activeItemId={selectedItemId} />
        </div>
        <FloatingDock items={links} onHoverItem={setSelectedItemId} />
      </div>
      <TopRightArrow isHovered={isHovered} size={80} />
    </WobbleCard>
  );
};

export default Projects;
