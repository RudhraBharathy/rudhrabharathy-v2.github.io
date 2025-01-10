"use client";

import React, { useState, useEffect } from "react";
import { WobbleCard } from "./ui/wobble-card";
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
  const [isMobile, setIsMobile] = useState(false);

  const links = [
    {
      itemId: 1,
      icon: (
        <TiWeatherPartlySunny className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      itemId: 2,
      icon: (
        <LuListTodo className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      itemId: 3,
      icon: (
        <MdLocalAtm className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      itemId: 4,
      icon: (
        <IoIosLogIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      itemId: 5,
      icon: (
        <GoWorkflow className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WobbleCard
      customFlexClasses="flex justify-center items-end"
      containerClassName="h-full bg-[#4d194d] min-h-[400px] cursor-pointer"
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
          <CardStack activeItemId={selectedItemId} />
        </div>
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: isMobile || isHovered ? 1 : 0,
              y: isMobile || isHovered ? 0 : 20,
            }}
            animate={{
              opacity: isMobile || isHovered ? 1 : 0,
              y: isMobile || isHovered ? 0 : 20,
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FloatingDock items={links} onHoverItem={setSelectedItemId} />
          </motion.div>
        </AnimatePresence>
      </div>
    </WobbleCard>
  );
};

export default Projects;
