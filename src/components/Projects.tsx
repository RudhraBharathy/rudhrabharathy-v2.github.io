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
import { AnimatePresence, motion } from "framer-motion";

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
          id: 1, These cards are amazing, I want to use them in my project.
          Framer motion is a godsend ngl tbh fam 🙏
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
          id: 2, I dont like this Twitter thing, deleting it right away because
          yolo. Instead, I would like to call it X.com so that it can easily be
          confused with adult sites.
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
          id: 3, The first rule of Fight Club is that you do not talk about
          fight club. The second rule of Fight club is that you DO NOT TALK
          about fight club.
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
          id: 4, Lorem ipsum dolor sit amet. ipsum dolor Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolorum, laudantium. ipsum dolor
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora
          aut modi necessitatibus architecto!
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
          id: 5, Lorem, ipsum dolor sit amet consectetur adipisicing. wet modi
          necessitat wewt modi necessitat is that you DO NOT TALK about fight
          club.
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
      <div className="flex items-center justify-center flex-col w-full pb-3">
        <div
          className="flex items-center justify-center w-full pb-5"
          style={{
            transform: isHovered ? "translateY(-20px)" : "translateY(10px)",
            transition: ".3s all ease-in",
          }}
        >
          <CardStack items={CARDS} activeItemId={selectedItemId} />
        </div>
        <AnimatePresence initial={false}>
          {isHovered ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FloatingDock items={links} onHoverItem={setSelectedItemId} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FloatingDock items={links} onHoverItem={setSelectedItemId} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <TopRightArrow isHovered={isHovered} size={80} />
    </WobbleCard>
  );
};

export default Projects;
