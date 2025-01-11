"use client";

import React, { useState, useEffect } from "react";
import { WobbleCard } from "./ui/wobble-card";
import { FloatingDock } from "@/components/ui/floating-dock";
import { CardStack } from "./ui/card-stack";
import { AnimatePresence, motion } from "framer-motion";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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
      <div className="flex items-center justify-center flex-col 2xs:gap-5 w-full pb-3">
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
            <FloatingDock onHoverItem={setSelectedItemId} />
          </motion.div>
        </AnimatePresence>
      </div>
    </WobbleCard>
  );
};

export default Projects;
